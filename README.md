# calculang-at-fosdem
prep/pres for fosdem.

This is draft experimental, but feedback is welcome, especially if I linked you to something in particular which should be clearer.

## to preview

Clone then run `quarto preview`.

## to compile/hot reload raycasting model

`npm install`

`npm link` **dev branch of calculang `@calculang/calculang-js`**. (I need to make a new release to npm)

Then `npm run raycasting:compile` to compile and use refresh button.

## reactive workings

This site uses 'reactive workings' or an optional overlay of workings on top of calculang code.

The code to generate these are in the reactive-workings folder, see script in `package.json`.

Resulting code saved in `reactive-workings.ojs` is **manually pasted** into `example.qmd`.

## some models

Might not work for now. I'll be developing in this **experimental repo** right until fosdem on Feb 3/4!
