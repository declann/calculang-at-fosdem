
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    // import/export non-to memo?

    import { tan_ray_angle_ as tan_ray_angle$, inverse_tan_ray_angle_ as inverse_tan_ray_angle$, ray_looking_up_ as ray_looking_up$, ray_looking_right_ as ray_looking_right$, map_ as map$, map_lookup_ as map_lookup$, rhx_ as rhx$, rhy_ as rhy$, rhv_ as rhv$, rh_hit_object_ as rh_hit_object$, rh_hit_x_ as rh_hit_x$, rh_hit_y_ as rh_hit_y$, rh_hit_v_ as rh_hit_v$, rh_hit_step_ as rh_hit_step$, rh_hit_distance_ as rh_hit_distance$, rvx_ as rvx$, rvy_ as rvy$, rvv_ as rvv$, rv_hit_object_ as rv_hit_object$, rv_hit_x_ as rv_hit_x$, rv_hit_y_ as rv_hit_y$, rv_hit_v_ as rv_hit_v$, rv_hit_step_ as rv_hit_step$, rv_hit_distance_ as rv_hit_distance$, r_hit_h_or_v_ as r_hit_h_or_v$, r_hit_object_ as r_hit_object$, r_hit_x_ as r_hit_x$, r_hit_y_ as r_hit_y$, r_hit_v_ as r_hit_v$, r_hit_step_ as r_hit_step$, fisheye_correction_ as fisheye_correction$, ray_distance_ as ray_distance$, ray_inverse_distance_ as ray_inverse_distance$, keys_stream_version_ as keys_stream_version$, keys_ as keys$, key_up_ as key_up$, key_down_ as key_down$, key_left_ as key_left$, key_right_ as key_right$, forwardness_ as forwardness$, leftness_ as leftness$, player_angle_ as player_angle$, player_x_ as player_x$, player_y_ as player_y$, speed_ as speed$, f_ as f$, ray_angle_ as ray_angle$, step_ as step$, x_ as x$, y_ as y$,keys_stream_function } from './raycasting.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!

    export { keys_stream_function }
    
    

////////// start tan_ray_angle memo-loader code //////////
//const tan_ray_angle$m = memoize(999999, isEqual)(tan_ray_angle$);
export const tan_ray_angle$m = memoize(tan_ray_angle$, JSON.stringify);
export const tan_ray_angle = (a) => {
  return tan_ray_angle$m(a);
  // eslint-disable-next-line no-undef
  tan_ray_angle$(); // never run, but here to "trick" calculang graph logic
};
////////// end tan_ray_angle memo-loader code //////////



////////// start inverse_tan_ray_angle memo-loader code //////////
//const inverse_tan_ray_angle$m = memoize(999999, isEqual)(inverse_tan_ray_angle$);
export const inverse_tan_ray_angle$m = memoize(inverse_tan_ray_angle$, JSON.stringify);
export const inverse_tan_ray_angle = (a) => {
  return inverse_tan_ray_angle$m(a);
  // eslint-disable-next-line no-undef
  inverse_tan_ray_angle$(); // never run, but here to "trick" calculang graph logic
};
////////// end inverse_tan_ray_angle memo-loader code //////////



////////// start ray_looking_up memo-loader code //////////
//const ray_looking_up$m = memoize(999999, isEqual)(ray_looking_up$);
export const ray_looking_up$m = memoize(ray_looking_up$, JSON.stringify);
export const ray_looking_up = (a) => {
  return ray_looking_up$m(a);
  // eslint-disable-next-line no-undef
  ray_looking_up$(); // never run, but here to "trick" calculang graph logic
};
////////// end ray_looking_up memo-loader code //////////



////////// start ray_looking_right memo-loader code //////////
//const ray_looking_right$m = memoize(999999, isEqual)(ray_looking_right$);
export const ray_looking_right$m = memoize(ray_looking_right$, JSON.stringify);
export const ray_looking_right = (a) => {
  return ray_looking_right$m(a);
  // eslint-disable-next-line no-undef
  ray_looking_right$(); // never run, but here to "trick" calculang graph logic
};
////////// end ray_looking_right memo-loader code //////////



////////// start map memo-loader code //////////
//const map$m = memoize(999999, isEqual)(map$);
export const map$m = memoize(map$, JSON.stringify);
export const map = (a) => {
  return map$m(a);
  // eslint-disable-next-line no-undef
  map$(); // never run, but here to "trick" calculang graph logic
};
////////// end map memo-loader code //////////



////////// start map_lookup memo-loader code //////////
//const map_lookup$m = memoize(999999, isEqual)(map_lookup$);
export const map_lookup$m = memoize(map_lookup$, JSON.stringify);
export const map_lookup = (a) => {
  return map_lookup$m(a);
  // eslint-disable-next-line no-undef
  map_lookup$(); // never run, but here to "trick" calculang graph logic
};
////////// end map_lookup memo-loader code //////////



////////// start rhx memo-loader code //////////
//const rhx$m = memoize(999999, isEqual)(rhx$);
export const rhx$m = memoize(rhx$, JSON.stringify);
export const rhx = (a) => {
  return rhx$m(a);
  // eslint-disable-next-line no-undef
  rhx$(); // never run, but here to "trick" calculang graph logic
};
////////// end rhx memo-loader code //////////



////////// start rhy memo-loader code //////////
//const rhy$m = memoize(999999, isEqual)(rhy$);
export const rhy$m = memoize(rhy$, JSON.stringify);
export const rhy = (a) => {
  return rhy$m(a);
  // eslint-disable-next-line no-undef
  rhy$(); // never run, but here to "trick" calculang graph logic
};
////////// end rhy memo-loader code //////////



////////// start rhv memo-loader code //////////
//const rhv$m = memoize(999999, isEqual)(rhv$);
export const rhv$m = memoize(rhv$, JSON.stringify);
export const rhv = (a) => {
  return rhv$m(a);
  // eslint-disable-next-line no-undef
  rhv$(); // never run, but here to "trick" calculang graph logic
};
////////// end rhv memo-loader code //////////



////////// start rh_hit_object memo-loader code //////////
//const rh_hit_object$m = memoize(999999, isEqual)(rh_hit_object$);
export const rh_hit_object$m = memoize(rh_hit_object$, JSON.stringify);
export const rh_hit_object = (a) => {
  return rh_hit_object$m(a);
  // eslint-disable-next-line no-undef
  rh_hit_object$(); // never run, but here to "trick" calculang graph logic
};
////////// end rh_hit_object memo-loader code //////////



////////// start rh_hit_x memo-loader code //////////
//const rh_hit_x$m = memoize(999999, isEqual)(rh_hit_x$);
export const rh_hit_x$m = memoize(rh_hit_x$, JSON.stringify);
export const rh_hit_x = (a) => {
  return rh_hit_x$m(a);
  // eslint-disable-next-line no-undef
  rh_hit_x$(); // never run, but here to "trick" calculang graph logic
};
////////// end rh_hit_x memo-loader code //////////



////////// start rh_hit_y memo-loader code //////////
//const rh_hit_y$m = memoize(999999, isEqual)(rh_hit_y$);
export const rh_hit_y$m = memoize(rh_hit_y$, JSON.stringify);
export const rh_hit_y = (a) => {
  return rh_hit_y$m(a);
  // eslint-disable-next-line no-undef
  rh_hit_y$(); // never run, but here to "trick" calculang graph logic
};
////////// end rh_hit_y memo-loader code //////////



////////// start rh_hit_v memo-loader code //////////
//const rh_hit_v$m = memoize(999999, isEqual)(rh_hit_v$);
export const rh_hit_v$m = memoize(rh_hit_v$, JSON.stringify);
export const rh_hit_v = (a) => {
  return rh_hit_v$m(a);
  // eslint-disable-next-line no-undef
  rh_hit_v$(); // never run, but here to "trick" calculang graph logic
};
////////// end rh_hit_v memo-loader code //////////



////////// start rh_hit_step memo-loader code //////////
//const rh_hit_step$m = memoize(999999, isEqual)(rh_hit_step$);
export const rh_hit_step$m = memoize(rh_hit_step$, JSON.stringify);
export const rh_hit_step = (a) => {
  return rh_hit_step$m(a);
  // eslint-disable-next-line no-undef
  rh_hit_step$(); // never run, but here to "trick" calculang graph logic
};
////////// end rh_hit_step memo-loader code //////////



////////// start rh_hit_distance memo-loader code //////////
//const rh_hit_distance$m = memoize(999999, isEqual)(rh_hit_distance$);
export const rh_hit_distance$m = memoize(rh_hit_distance$, JSON.stringify);
export const rh_hit_distance = (a) => {
  return rh_hit_distance$m(a);
  // eslint-disable-next-line no-undef
  rh_hit_distance$(); // never run, but here to "trick" calculang graph logic
};
////////// end rh_hit_distance memo-loader code //////////



////////// start rvx memo-loader code //////////
//const rvx$m = memoize(999999, isEqual)(rvx$);
export const rvx$m = memoize(rvx$, JSON.stringify);
export const rvx = (a) => {
  return rvx$m(a);
  // eslint-disable-next-line no-undef
  rvx$(); // never run, but here to "trick" calculang graph logic
};
////////// end rvx memo-loader code //////////



////////// start rvy memo-loader code //////////
//const rvy$m = memoize(999999, isEqual)(rvy$);
export const rvy$m = memoize(rvy$, JSON.stringify);
export const rvy = (a) => {
  return rvy$m(a);
  // eslint-disable-next-line no-undef
  rvy$(); // never run, but here to "trick" calculang graph logic
};
////////// end rvy memo-loader code //////////



////////// start rvv memo-loader code //////////
//const rvv$m = memoize(999999, isEqual)(rvv$);
export const rvv$m = memoize(rvv$, JSON.stringify);
export const rvv = (a) => {
  return rvv$m(a);
  // eslint-disable-next-line no-undef
  rvv$(); // never run, but here to "trick" calculang graph logic
};
////////// end rvv memo-loader code //////////



////////// start rv_hit_object memo-loader code //////////
//const rv_hit_object$m = memoize(999999, isEqual)(rv_hit_object$);
export const rv_hit_object$m = memoize(rv_hit_object$, JSON.stringify);
export const rv_hit_object = (a) => {
  return rv_hit_object$m(a);
  // eslint-disable-next-line no-undef
  rv_hit_object$(); // never run, but here to "trick" calculang graph logic
};
////////// end rv_hit_object memo-loader code //////////



////////// start rv_hit_x memo-loader code //////////
//const rv_hit_x$m = memoize(999999, isEqual)(rv_hit_x$);
export const rv_hit_x$m = memoize(rv_hit_x$, JSON.stringify);
export const rv_hit_x = (a) => {
  return rv_hit_x$m(a);
  // eslint-disable-next-line no-undef
  rv_hit_x$(); // never run, but here to "trick" calculang graph logic
};
////////// end rv_hit_x memo-loader code //////////



////////// start rv_hit_y memo-loader code //////////
//const rv_hit_y$m = memoize(999999, isEqual)(rv_hit_y$);
export const rv_hit_y$m = memoize(rv_hit_y$, JSON.stringify);
export const rv_hit_y = (a) => {
  return rv_hit_y$m(a);
  // eslint-disable-next-line no-undef
  rv_hit_y$(); // never run, but here to "trick" calculang graph logic
};
////////// end rv_hit_y memo-loader code //////////



////////// start rv_hit_v memo-loader code //////////
//const rv_hit_v$m = memoize(999999, isEqual)(rv_hit_v$);
export const rv_hit_v$m = memoize(rv_hit_v$, JSON.stringify);
export const rv_hit_v = (a) => {
  return rv_hit_v$m(a);
  // eslint-disable-next-line no-undef
  rv_hit_v$(); // never run, but here to "trick" calculang graph logic
};
////////// end rv_hit_v memo-loader code //////////



////////// start rv_hit_step memo-loader code //////////
//const rv_hit_step$m = memoize(999999, isEqual)(rv_hit_step$);
export const rv_hit_step$m = memoize(rv_hit_step$, JSON.stringify);
export const rv_hit_step = (a) => {
  return rv_hit_step$m(a);
  // eslint-disable-next-line no-undef
  rv_hit_step$(); // never run, but here to "trick" calculang graph logic
};
////////// end rv_hit_step memo-loader code //////////



////////// start rv_hit_distance memo-loader code //////////
//const rv_hit_distance$m = memoize(999999, isEqual)(rv_hit_distance$);
export const rv_hit_distance$m = memoize(rv_hit_distance$, JSON.stringify);
export const rv_hit_distance = (a) => {
  return rv_hit_distance$m(a);
  // eslint-disable-next-line no-undef
  rv_hit_distance$(); // never run, but here to "trick" calculang graph logic
};
////////// end rv_hit_distance memo-loader code //////////



////////// start r_hit_h_or_v memo-loader code //////////
//const r_hit_h_or_v$m = memoize(999999, isEqual)(r_hit_h_or_v$);
export const r_hit_h_or_v$m = memoize(r_hit_h_or_v$, JSON.stringify);
export const r_hit_h_or_v = (a) => {
  return r_hit_h_or_v$m(a);
  // eslint-disable-next-line no-undef
  r_hit_h_or_v$(); // never run, but here to "trick" calculang graph logic
};
////////// end r_hit_h_or_v memo-loader code //////////



////////// start r_hit_object memo-loader code //////////
//const r_hit_object$m = memoize(999999, isEqual)(r_hit_object$);
export const r_hit_object$m = memoize(r_hit_object$, JSON.stringify);
export const r_hit_object = (a) => {
  return r_hit_object$m(a);
  // eslint-disable-next-line no-undef
  r_hit_object$(); // never run, but here to "trick" calculang graph logic
};
////////// end r_hit_object memo-loader code //////////



////////// start r_hit_x memo-loader code //////////
//const r_hit_x$m = memoize(999999, isEqual)(r_hit_x$);
export const r_hit_x$m = memoize(r_hit_x$, JSON.stringify);
export const r_hit_x = (a) => {
  return r_hit_x$m(a);
  // eslint-disable-next-line no-undef
  r_hit_x$(); // never run, but here to "trick" calculang graph logic
};
////////// end r_hit_x memo-loader code //////////



////////// start r_hit_y memo-loader code //////////
//const r_hit_y$m = memoize(999999, isEqual)(r_hit_y$);
export const r_hit_y$m = memoize(r_hit_y$, JSON.stringify);
export const r_hit_y = (a) => {
  return r_hit_y$m(a);
  // eslint-disable-next-line no-undef
  r_hit_y$(); // never run, but here to "trick" calculang graph logic
};
////////// end r_hit_y memo-loader code //////////



////////// start r_hit_v memo-loader code //////////
//const r_hit_v$m = memoize(999999, isEqual)(r_hit_v$);
export const r_hit_v$m = memoize(r_hit_v$, JSON.stringify);
export const r_hit_v = (a) => {
  return r_hit_v$m(a);
  // eslint-disable-next-line no-undef
  r_hit_v$(); // never run, but here to "trick" calculang graph logic
};
////////// end r_hit_v memo-loader code //////////



////////// start r_hit_step memo-loader code //////////
//const r_hit_step$m = memoize(999999, isEqual)(r_hit_step$);
export const r_hit_step$m = memoize(r_hit_step$, JSON.stringify);
export const r_hit_step = (a) => {
  return r_hit_step$m(a);
  // eslint-disable-next-line no-undef
  r_hit_step$(); // never run, but here to "trick" calculang graph logic
};
////////// end r_hit_step memo-loader code //////////



////////// start fisheye_correction memo-loader code //////////
//const fisheye_correction$m = memoize(999999, isEqual)(fisheye_correction$);
export const fisheye_correction$m = memoize(fisheye_correction$, JSON.stringify);
export const fisheye_correction = (a) => {
  return fisheye_correction$m(a);
  // eslint-disable-next-line no-undef
  fisheye_correction$(); // never run, but here to "trick" calculang graph logic
};
////////// end fisheye_correction memo-loader code //////////



////////// start ray_distance memo-loader code //////////
//const ray_distance$m = memoize(999999, isEqual)(ray_distance$);
export const ray_distance$m = memoize(ray_distance$, JSON.stringify);
export const ray_distance = (a) => {
  return ray_distance$m(a);
  // eslint-disable-next-line no-undef
  ray_distance$(); // never run, but here to "trick" calculang graph logic
};
////////// end ray_distance memo-loader code //////////



////////// start ray_inverse_distance memo-loader code //////////
//const ray_inverse_distance$m = memoize(999999, isEqual)(ray_inverse_distance$);
export const ray_inverse_distance$m = memoize(ray_inverse_distance$, JSON.stringify);
export const ray_inverse_distance = (a) => {
  return ray_inverse_distance$m(a);
  // eslint-disable-next-line no-undef
  ray_inverse_distance$(); // never run, but here to "trick" calculang graph logic
};
////////// end ray_inverse_distance memo-loader code //////////



////////// start keys_stream_version memo-loader code //////////
//const keys_stream_version$m = memoize(999999, isEqual)(keys_stream_version$);
export const keys_stream_version$m = memoize(keys_stream_version$, JSON.stringify);
export const keys_stream_version = (a) => {
  return keys_stream_version$m(a);
  // eslint-disable-next-line no-undef
  keys_stream_version$(); // never run, but here to "trick" calculang graph logic
};
////////// end keys_stream_version memo-loader code //////////



////////// start keys memo-loader code //////////
//const keys$m = memoize(999999, isEqual)(keys$);
export const keys$m = memoize(keys$, JSON.stringify);
export const keys = (a) => {
  return keys$m(a);
  // eslint-disable-next-line no-undef
  keys$(); // never run, but here to "trick" calculang graph logic
};
////////// end keys memo-loader code //////////



////////// start key_up memo-loader code //////////
//const key_up$m = memoize(999999, isEqual)(key_up$);
export const key_up$m = memoize(key_up$, JSON.stringify);
export const key_up = (a) => {
  return key_up$m(a);
  // eslint-disable-next-line no-undef
  key_up$(); // never run, but here to "trick" calculang graph logic
};
////////// end key_up memo-loader code //////////



////////// start key_down memo-loader code //////////
//const key_down$m = memoize(999999, isEqual)(key_down$);
export const key_down$m = memoize(key_down$, JSON.stringify);
export const key_down = (a) => {
  return key_down$m(a);
  // eslint-disable-next-line no-undef
  key_down$(); // never run, but here to "trick" calculang graph logic
};
////////// end key_down memo-loader code //////////



////////// start key_left memo-loader code //////////
//const key_left$m = memoize(999999, isEqual)(key_left$);
export const key_left$m = memoize(key_left$, JSON.stringify);
export const key_left = (a) => {
  return key_left$m(a);
  // eslint-disable-next-line no-undef
  key_left$(); // never run, but here to "trick" calculang graph logic
};
////////// end key_left memo-loader code //////////



////////// start key_right memo-loader code //////////
//const key_right$m = memoize(999999, isEqual)(key_right$);
export const key_right$m = memoize(key_right$, JSON.stringify);
export const key_right = (a) => {
  return key_right$m(a);
  // eslint-disable-next-line no-undef
  key_right$(); // never run, but here to "trick" calculang graph logic
};
////////// end key_right memo-loader code //////////



////////// start forwardness memo-loader code //////////
//const forwardness$m = memoize(999999, isEqual)(forwardness$);
export const forwardness$m = memoize(forwardness$, JSON.stringify);
export const forwardness = (a) => {
  return forwardness$m(a);
  // eslint-disable-next-line no-undef
  forwardness$(); // never run, but here to "trick" calculang graph logic
};
////////// end forwardness memo-loader code //////////



////////// start leftness memo-loader code //////////
//const leftness$m = memoize(999999, isEqual)(leftness$);
export const leftness$m = memoize(leftness$, JSON.stringify);
export const leftness = (a) => {
  return leftness$m(a);
  // eslint-disable-next-line no-undef
  leftness$(); // never run, but here to "trick" calculang graph logic
};
////////// end leftness memo-loader code //////////



////////// start player_angle memo-loader code //////////
//const player_angle$m = memoize(999999, isEqual)(player_angle$);
export const player_angle$m = memoize(player_angle$, JSON.stringify);
export const player_angle = (a) => {
  return player_angle$m(a);
  // eslint-disable-next-line no-undef
  player_angle$(); // never run, but here to "trick" calculang graph logic
};
////////// end player_angle memo-loader code //////////



////////// start player_x memo-loader code //////////
//const player_x$m = memoize(999999, isEqual)(player_x$);
export const player_x$m = memoize(player_x$, JSON.stringify);
export const player_x = (a) => {
  return player_x$m(a);
  // eslint-disable-next-line no-undef
  player_x$(); // never run, but here to "trick" calculang graph logic
};
////////// end player_x memo-loader code //////////



////////// start player_y memo-loader code //////////
//const player_y$m = memoize(999999, isEqual)(player_y$);
export const player_y$m = memoize(player_y$, JSON.stringify);
export const player_y = (a) => {
  return player_y$m(a);
  // eslint-disable-next-line no-undef
  player_y$(); // never run, but here to "trick" calculang graph logic
};
////////// end player_y memo-loader code //////////



////////// start speed memo-loader code //////////
//const speed$m = memoize(999999, isEqual)(speed$);
export const speed$m = memoize(speed$, JSON.stringify);
export const speed = (a) => {
  return speed$m(a);
  // eslint-disable-next-line no-undef
  speed$(); // never run, but here to "trick" calculang graph logic
};
////////// end speed memo-loader code //////////



////////// start f memo-loader code //////////
//const f$m = memoize(999999, isEqual)(f$);
export const f$m = memoize(f$, JSON.stringify);
export const f = (a) => {
  return f$m(a);
  // eslint-disable-next-line no-undef
  f$(); // never run, but here to "trick" calculang graph logic
};
////////// end f memo-loader code //////////



////////// start ray_angle memo-loader code //////////
//const ray_angle$m = memoize(999999, isEqual)(ray_angle$);
export const ray_angle$m = memoize(ray_angle$, JSON.stringify);
export const ray_angle = (a) => {
  return ray_angle$m(a);
  // eslint-disable-next-line no-undef
  ray_angle$(); // never run, but here to "trick" calculang graph logic
};
////////// end ray_angle memo-loader code //////////



////////// start step memo-loader code //////////
//const step$m = memoize(999999, isEqual)(step$);
export const step$m = memoize(step$, JSON.stringify);
export const step = (a) => {
  return step$m(a);
  // eslint-disable-next-line no-undef
  step$(); // never run, but here to "trick" calculang graph logic
};
////////// end step memo-loader code //////////



////////// start x memo-loader code //////////
//const x$m = memoize(999999, isEqual)(x$);
export const x$m = memoize(x$, JSON.stringify);
export const x = (a) => {
  return x$m(a);
  // eslint-disable-next-line no-undef
  x$(); // never run, but here to "trick" calculang graph logic
};
////////// end x memo-loader code //////////



////////// start y memo-loader code //////////
//const y$m = memoize(999999, isEqual)(y$);
export const y$m = memoize(y$, JSON.stringify);
export const y = (a) => {
  return y$m(a);
  // eslint-disable-next-line no-undef
  y$(); // never run, but here to "trick" calculang graph logic
};
////////// end y memo-loader code //////////


    