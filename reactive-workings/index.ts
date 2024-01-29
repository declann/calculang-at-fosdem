// THIS DEPENDS ON USING DEV BRANCH OF CALCULANG COMPILER

import { parseArgs } from "util";
import { SourceMapConsumer } from 'source-map-js';

const yaml = require('js-yaml');

const gallery = await fetch("https://calculang.dev/gallery.yml")
const babel = require("@babel/standalone") // here I don't need standalone, but why not?

const gallery_text = await Bun.file("../gallery.yml").text() // await gallery.text()

const gallery_array = yaml.load(gallery_text).flat()


 // messing via https://jvilk.com/MakeTypes/
 export interface Introspection {
  cul_functions: any;
  cul_links?: (CulLinksEntity)[] | null;
  cul_scope_ids_to_resource: CulScopeIdsToResource;
  import_sources_to_resource: ImportSourcesToResource;
  cul_input_map: any;
  dot: string;
}
export interface Loc {
  start: StartOrEnd;
  end: StartOrEnd;
}
export interface StartOrEnd {
  line: number;
  column: number;
  index: number;
}

export interface CulLinksEntity {
  to: string;
  from: string;
  reason: string;
  negs?: (null)[] | null;
}
export interface CulScopeIdsToResource {
  0: string;
}
export interface ImportSourcesToResource {
}



//console.log('calls_with_mjs_evals = [[' + JSON.stringify(calls_with_mjs_evals.join('],[')).replaceAll('\\"', '"') + ']]\n// ^ replace 2x "\n\n\n')
    
//console.log('fns_with_mjs = ' + JSON.stringify(fns_with_mjs.map(d => d.map(e => e.mjs))).replaceAll('"', ''))


let calls_with_mjs_evals_out = {};

let fns_with_mjs_out = {};


const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    id: {
      type: 'string', // assume auto, determined from id
    },
  },
  strict: true,
  allowPositionals: true, // I'm interested in [yml file, id]
});


//console.log(positionals.slice(2))

for (const id of positionals.slice(2)) {


  const example_details = gallery_array.map((d: any) => d.tiles)
    .flat()
    .find((d: any) => d.id == id)

  const example_entrypoint = example_details.entrypoint

  const entrypoint = (example_entrypoint[0] == "/" ? "https://calculang.dev" : "") +
    example_entrypoint

  const entrypoint_no_cul_js = entrypoint.slice(0, -7)

 

  const introspection: Introspection = await (
    await fetch(`${entrypoint_no_cul_js}-nomemo.introspection.json`)
  ).json() // is missing await why I have issues with tangles?


  //console.log(example_details)
  const num_scopes = Object.values(introspection.cul_scope_ids_to_resource).length


  //https://www.abeautifulsite.net/posts/javascript-functions-for-basename-and-dirname/
  function dirname(path) {
    return path.match(/.*\//);
  }

  const dir = dirname(entrypoint)

  const cul_resources_x = (cul_js_cul: boolean) => {
    if (cul_js_cul)
      return Object.values(introspection.cul_scope_ids_to_resource)
        .map((loc: any) =>
          loc
            .slice(2)
            .slice(0, loc.indexOf("?") != -1 ? loc.indexOf("?") - 2 : 999)
        )
        .map((d) => d + (d.slice(-3) != ".js" ? ".js" : ""))
        .map((loc) => dir + loc);
    else
      return [
        ...Array(
          Object.keys(introspection.cul_scope_ids_to_resource).length
        )
      ].map(
        (_, i) =>
          entrypoint_no_cul_js /* this is not modelname! this should be related to entrypoit, not id */ +
          (1 ? "-nomemo" : "") +
          "_esm/" +
          "cul_scope_" +
          i +
          ".mjs"
      );
  }


  const cul_resources = cul_resources_x(true) // array of orig .cul.js

  ///// infos:

  const calculang = await (() => {
    return Promise.all(
      cul_resources_x(true).map(d => fetch(d))
    ).then(results => {
      return Promise.all(results.map(d => d.text()))
    })
  })()

  const mjs = await (() => {
    return Promise.all(
      cul_resources_x(false).map(d => fetch(d))
    ).then(results => {
      return Promise.all(results.map(d => d.text()))
    })
  })()

  const maps = await (() => {
    return Promise.all(
      cul_resources_x(false).map(d => fetch(d + '.map'))
    ).then(results => {
      return Promise.all(results.map(d => d.json()))
    })
  })()

  ///// done

  const all_functions = Object.values(introspection.cul_functions).filter(d => d.reason == 'definition').map(d => d.name)

  const m = id.replaceAll('-', '_')

  const qualify = (code) => {
    let a = code,
      re;
    for (const fn of all_functions) {
      re = new RegExp("(\\s|^)" + fn + "\\(", "i");
      //re = new RegExp(fn + "(?!_in)(?!_rate_in)", "i"); // Very crude but works for simple examples - really needs to close at break chars, e.g. fn_something->model.fn_something->model.model.fn_something
      //a = a.replace(/year(?!_in)/i, 'fdsa')//'model.'+fn)
      a = a.replace(re, m + "." + fn + "(");
    }
    return a;
  }

  const is = (code) => {
    //let code =
    //"balance({ duration_in, annual_payment_in, interest_rate_in, year_in: year({ year_in }) - 1 })";
    const iii = [];

    babel.transform(code, {
      presets: ["es2015", "react"],
      generatorOpts: { /*compact: true*/ retainLines: true },
      ast: true,
      plugins: [
        [
          {
            visitor: {
              ObjectProperty(path, state) {
                //console.log("fdsa");
                if (!path.node.shorthand) {
                  iii.push({
                    in: path.node.key.name,
                    code: qualify(
                      code.slice(path.node.value.start, path.node.value.end)
                    )
                  });
                  //console.log(path.node.key);
                  //console.log(path.node.value);
                }
              }
            }
          }
        ]
      ]
    }).code; //.ast //.program.body

    return iii;
  }

  const calls_with_mjs = maps.map((map, cul_scope_id) => { // i want this to depend on id
    return introspection.cul_links
      .filter((d) => d.reason == "call" && cul_scope_id == +d.to.split("_")[0])
      .map((d) => ({
        ...d,
        mjs_loc: {
          start: new SourceMapConsumer(maps[cul_scope_id]).generatedPositionFor({
            ...d.loc.start,
            source: map.sources[0] //`${only_entrypoint_no_cul_js}-nomemo.cul.js` // todo update !
          }),
          end: new SourceMapConsumer(maps[cul_scope_id]).generatedPositionFor({
            ...d.loc.end,
            source: map.sources[0] //`${only_entrypoint_no_cul_js}-nomemo.cul.js`
          })
        }
      }))
      .map((d) => ({
        ...d,
        mjs: mjs[cul_scope_id]
          .split("\n")
        [d.mjs_loc.start.line - 1].substring(
          d.mjs_loc.start.column,
          d.mjs_loc.end.column
        )
      })) // assuming completely on one line
      .map((d) => ({
        ...d,
        mjs_q: qualify(d.mjs),
        ins_mjs_q: is(d.mjs)
      }))
  })

  const fns_with_mjs = maps.map((map, cul_scope_id) => {
    return Object.values(introspection.cul_functions)
      .filter(
        (d) =>
          d.reason == "definition" /*input definition doesn't have a loc*/ &&
          d.cul_scope_id == cul_scope_id
      )
      .map((d) => ({ ...d, mjs: `{${d.inputs.join(",")}}` })) // assuming completely on one line
      .map(d => ({ ...d, mjs: `${m}.${d.name}(${d.mjs})` }))
  })




  const calls_with_mjs_evals = calls_with_mjs.map(c => c.filter(d => !d.from.includes('undefined')).map(
    (d) =>
      `{name: "${d.from.split('_').slice(1).join("_")}", value:` +
      d.mjs_q +
      (d.ins_mjs_q.length
        ? /*", ins: {" +
          d.ins_mjs_q.map((d) => `${d.in}: ${d.code}`).join(", ") +
          "},*/ ", handler: () => {" +
        d.ins_mjs_q
          .filter(d => d.in.slice(-3) == '_in').map((d) => `set(viewof ${d.in}, ${d.code})`)
          .join("; ") +
        "}"
        : "") +
      "}"
  )
    .join(","))
  
  calls_with_mjs_evals_out[m] = '[[' + JSON.stringify(calls_with_mjs_evals.join('],[')).replaceAll('\\"', '"') + ']]'
  fns_with_mjs_out[m] = JSON.stringify(fns_with_mjs.map(d => d.map(e => ({ name: e.name, value: e.mjs }))))//.replaceAll('\\"', '')

  

  //console.log('calls_with_mjs_evals = [[' + JSON.stringify(calls_with_mjs_evals.join('],[')).replaceAll('\\"', '"') + ']]\n// ^ replace 2x "\n\n\n')
    
  //console.log('fns_with_mjs = ' + JSON.stringify(fns_with_mjs.map(d => d.map(e => e.mjs))).replaceAll('"', ''))
  //console.log('\n // ^ replace all "\n\n')

}

console.log("mjs_q_eval =  { return ("
  + JSON.stringify(calls_with_mjs_evals_out).replaceAll('\\"', '"').replaceAll("\"]]\"", "]]").replaceAll("\"[[\"", "[[")
  + "\n)}\n\n"
)

console.log("fns_with_mjs_q_eval ={ return (")
console.log(JSON.stringify(fns_with_mjs_out).replaceAll('\\"', '').replaceAll(":\"", ":").replaceAll("]]\"", "]]").replaceAll("name:", 'name:"').replaceAll(",value:", '",value:'))
console.log(")}")

// TODO functions should have name for fmt2


//console.log('DEBUG:')

//console.log(calls_with_mjs)


// ISSUES

/* year-remaining captures .getFullYear and new



  //console.log('[' + calls_with_mjs_evals.join('END,') + ']')

// now fns_with_mjs[x].mjs is ready and calls_with_mjs just 


//const f = await fetchCul();





/*
Object.keys(introspection.cul_scope_ids_to_resource).map(cul_scope_id => {
  `${entrypoint_no_cul_js}-nomemo_esm/cul_scope_${cul_scope_id}.mjs`
})*/


/*
yaml.console.log(values);
console.log(positionals);



console.log(j)
const file = Bun.file(j)

const contents = await file.json();

console.log(contents.cul_functions)

const map = await Bun.file('./test/a_esm/cul_scope_0.mjs.map').json()

const map2 = await fetch(`https://calculang.dev/models/savings/savings_esm/cul_scope_0.mjs.map`)
const map2_json = await map2.json()

const consumer = new SourceMapConsumer(map);

console.log(consumer)

//console.log(await map2.json())

console.log(new SourceMapConsumer(map2_json))
*/

// both options work!
// just build what I need right now: curl gallery.yml, point to it, pick an entrypoint, and generate outputs!