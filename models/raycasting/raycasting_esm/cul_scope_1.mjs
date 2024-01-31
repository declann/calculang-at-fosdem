import { y } from "./cul_scope_0.mjs";import { x } from "./cul_scope_0.mjs";import { step } from "./cul_scope_0.mjs";import { ray_angle } from "./cul_scope_0.mjs";import { f } from "./cul_scope_0.mjs";import { speed } from "./cul_scope_0.mjs";import { player_y } from "./cul_scope_0.mjs";import { player_x } from "./cul_scope_0.mjs";import { player_angle } from "./cul_scope_0.mjs";import { leftness } from "./cul_scope_0.mjs";import { forwardness } from "./cul_scope_0.mjs";import { key_right } from "./cul_scope_0.mjs";import { key_left } from "./cul_scope_0.mjs";import { key_down } from "./cul_scope_0.mjs";import { key_up } from "./cul_scope_0.mjs";import { keys } from "./cul_scope_0.mjs";import { keys_stream_version } from "./cul_scope_0.mjs";import { ray_inverse_distance } from "./cul_scope_0.mjs";import { ray_distance } from "./cul_scope_0.mjs";import { fisheye_correction } from "./cul_scope_0.mjs";import { r_hit_step } from "./cul_scope_0.mjs";import { r_hit_v } from "./cul_scope_0.mjs";import { r_hit_y } from "./cul_scope_0.mjs";import { r_hit_x } from "./cul_scope_0.mjs";import { r_hit_object } from "./cul_scope_0.mjs";import { r_hit_h_or_v } from "./cul_scope_0.mjs";import { rv_hit_distance } from "./cul_scope_0.mjs";import { rv_hit_step } from "./cul_scope_0.mjs";import { rv_hit_v } from "./cul_scope_0.mjs";import { rv_hit_y } from "./cul_scope_0.mjs";import { rv_hit_x } from "./cul_scope_0.mjs";import { rv_hit_object } from "./cul_scope_0.mjs";import { rvv } from "./cul_scope_0.mjs";import { rvy } from "./cul_scope_0.mjs";import { rvx } from "./cul_scope_0.mjs";import { rh_hit_distance } from "./cul_scope_0.mjs";import { rh_hit_step } from "./cul_scope_0.mjs";import { rh_hit_v } from "./cul_scope_0.mjs";import { rh_hit_y } from "./cul_scope_0.mjs";import { rh_hit_x } from "./cul_scope_0.mjs";import { rh_hit_object } from "./cul_scope_0.mjs";import { rhv } from "./cul_scope_0.mjs";import { rhy } from "./cul_scope_0.mjs";import { rhx } from "./cul_scope_0.mjs";import { map_lookup } from "./cul_scope_0.mjs";import { map } from "./cul_scope_0.mjs";import { ray_looking_right } from "./cul_scope_0.mjs";import { ray_looking_up } from "./cul_scope_0.mjs";import { inverse_tan_ray_angle } from "./cul_scope_0.mjs";import { tan_ray_angle } from "./cul_scope_0.mjs";import { range } from "underscore";

// trig helpers:

export const tan_ray_angle_ = ({ ray_angle_in }) => Math.tan(ray_angle({ ray_angle_in }));
export const inverse_tan_ray_angle_ = ({ ray_angle_in }) => 1 / tan_ray_angle({ ray_angle_in });

// we use this to find the right grid lines:

export const ray_looking_up_ = ({ ray_angle_in }) => Math.sin(ray_angle({ ray_angle_in })) > 0;
export const ray_looking_right_ = ({ ray_angle_in }) => Math.cos(ray_angle({ ray_angle_in })) > 0;

// the 2d map we are raycasting
// non-zero is a wall
export const map_ = ({}) => [
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 2, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 2, 0, 0, 3, 1],
[1, 0, 0, 2, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1]];


// for x and y looks up the corresponding map value
export const map_lookup_ = ({ y_in, x_in }) => {
  // non zero is a wall!
  // boundaries:
  if (y({ y_in }) <= 0.1 || x({ x_in }) >= 7.99 || x({ x_in }) <= 0.1 || y({ y_in }) >= 7.99) return 1;

  // map lookups with necessary fudge:
  return (
    map({})[Math.floor(y({ y_in }) - 0.0001)][Math.floor(x({ x_in }) - 0.0001)] ||
    map({})[Math.floor(y({ y_in }) - 0)][Math.floor(x({ x_in }) - 0)]);

};

// to calculate ray distances:

// this algorithm checks intersections of rays with horizonal and vertical gridlines
// there are separate h=horizontal, v=vertical formulas
// until we take the minimum distance of the 2

// h=horizontal::

// "ray-horizontal-check x": the x position of the current step along current ray
export const rhx_ = ({ step_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => {
  if (step({ step_in }) == 0)
  return player_x({ f_in, keys_stream_version_in, keys_stream_function_in }) + (player_y({ f_in, keys_stream_version_in, keys_stream_function_in }) - rhy({ ray_angle_in, step_in, f_in, keys_stream_version_in, keys_stream_function_in })) * inverse_tan_ray_angle({ ray_angle_in });else

  return (
    rhx({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in, step_in: step({ step_in }) - 1 }) +
    (ray_looking_up({ ray_angle_in }) ? 1 : -1) * inverse_tan_ray_angle({ ray_angle_in }));

};

export const rhy_ = ({ ray_angle_in, step_in, f_in, keys_stream_version_in, keys_stream_function_in }) => {
  if (ray_looking_up({ ray_angle_in })) {
    if (step({ step_in }) == 0) return Math.floor(player_y({ f_in, keys_stream_version_in, keys_stream_function_in }));else
    return rhy({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in: step({ step_in }) - 1 }) - 1;
  } else {
    if (step({ step_in }) == 0) return Math.floor(player_y({ f_in, keys_stream_version_in, keys_stream_function_in })) + 1;else
    return rhy({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in: step({ step_in }) - 1 }) + 1;
  }
};

// "ray-horizontal-check value": the corresponding value for map at step along current ray
export const rhv_ = ({ step_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => map_lookup({ x_in: rhx({ step_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }), y_in: rhy({ ray_angle_in, step_in, f_in, keys_stream_version_in, keys_stream_function_in }) });

// the first wall hit; by reducing
// summarises over steps and provides details
// that we destructure afterwards
// calculang compiler logic infers that step_in no longer matters
export const rh_hit_object_ = ({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => {
  return range(0, 8.1).reduce(
  (acc, step_in) => {
    if (acc.step_in == -1 && rhv({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in, step_in }) != 0)
    return {
      x: rhx({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in, step_in }),
      y: rhy({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in }),
      v: rhv({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in, step_in }),
      step_in
    };else
    return acc;
  },
  { step_in: -1 });

};

export const rh_hit_x_ = ({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => rh_hit_object({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }).x;
export const rh_hit_y_ = ({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => rh_hit_object({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }).y;
export const rh_hit_v_ = ({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => rh_hit_object({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }).v;
export const rh_hit_step_ = ({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => rh_hit_object({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }).step_in;

export const rh_hit_distance_ = ({ y_in, x_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) =>
// Pythagoras' theorem
Math.sqrt((rh_hit_x({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) - player_x({ f_in, keys_stream_version_in, keys_stream_function_in })) ** 2 + (rh_hit_y({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) - player_y({ f_in, keys_stream_version_in, keys_stream_function_in })) ** 2);

// vertical::

export const rvx_ = ({ ray_angle_in, step_in, f_in, keys_stream_version_in, keys_stream_function_in }) => {
  if (ray_looking_right({ ray_angle_in })) {
    if (step({ step_in }) == 0) return Math.floor(player_x({ f_in, keys_stream_version_in, keys_stream_function_in })) + 1;else
    return rvx({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in: step({ step_in }) - 1 }) + 1;
  } else {
    if (step({ step_in }) == 0) return Math.floor(player_x({ f_in, keys_stream_version_in, keys_stream_function_in }));else
    return rvx({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in: step({ step_in }) - 1 }) - 1;
  }
};

export const rvy_ = ({ step_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) => {
  if (step({ step_in }) == 0) return player_y({ f_in, keys_stream_version_in, keys_stream_function_in }) + (player_x({ f_in, keys_stream_version_in, keys_stream_function_in }) - rvx({ ray_angle_in, step_in, f_in, keys_stream_version_in, keys_stream_function_in })) * tan_ray_angle({ ray_angle_in });else

  return (
    rvy({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in, step_in: step({ step_in }) - 1 }) +
    (ray_looking_right({ ray_angle_in }) ? -1 : 1) * tan_ray_angle({ ray_angle_in }));

};

// "ray-vertical-check value": the corresponding value for map at step along current ray
export const rvv_ = ({ ray_angle_in, step_in, f_in, keys_stream_version_in, keys_stream_function_in }) => map_lookup({ x_in: rvx({ ray_angle_in, step_in, f_in, keys_stream_version_in, keys_stream_function_in }), y_in: rvy({ step_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) });

// the first wall hit - vertical checks
export const rv_hit_object_ = ({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => {
  return range(0, 8.1).reduce(
  (acc, step_in) => {
    if (acc.step_in == -1 && rvv({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in }) != 0)
    return {
      x: rvx({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in }),
      y: rvy({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in, step_in }),
      v: rvv({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, step_in }),
      step_in
    };else
    return acc;
  },
  { step_in: -1 });

};

// destructure
export const rv_hit_x_ = ({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => rv_hit_object({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).x;
export const rv_hit_y_ = ({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => rv_hit_object({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).y;
export const rv_hit_v_ = ({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => rv_hit_object({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).v;
export const rv_hit_step_ = ({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => rv_hit_object({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).step_in;

export const rv_hit_distance_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) =>
// Pythagoras' theorem
Math.sqrt((rv_hit_x({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) - player_x({ f_in, keys_stream_version_in, keys_stream_function_in })) ** 2 + (rv_hit_y({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) - player_y({ f_in, keys_stream_version_in, keys_stream_function_in })) ** 2);

// now consolidating 2 h/v calcs above:

export const r_hit_h_or_v_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) =>
// this contributes to color shading
rv_hit_distance({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) < rh_hit_distance({ y_in, x_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in }) ? "v" : "h";

export const r_hit_object_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) =>
r_hit_h_or_v({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) == "v" ? rv_hit_object({ ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) : rh_hit_object({ f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in });
export const r_hit_x_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => r_hit_object({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).x;
export const r_hit_y_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => r_hit_object({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).y;
export const r_hit_v_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => r_hit_object({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).v;
export const r_hit_step_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }) => r_hit_object({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }).step_in;

export const fisheye_correction_ = ({ fisheye_correction_in }) => fisheye_correction_in;

export const ray_distance_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, fisheye_correction_in }) =>
Math.min(rv_hit_distance({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in }), rh_hit_distance({ y_in, x_in, f_in, keys_stream_version_in, keys_stream_function_in, ray_angle_in })) * (
fisheye_correction({ fisheye_correction_in }) ? Math.cos(player_angle({ f_in, keys_stream_version_in, keys_stream_function_in }) - ray_angle({ ray_angle_in })) : 1);

export const ray_inverse_distance_ = ({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, fisheye_correction_in }) => 1 / ray_distance({ y_in, x_in, ray_angle_in, f_in, keys_stream_version_in, keys_stream_function_in, fisheye_correction_in });

/////// key controls

export const keys_stream_function = ({ keys_stream_function_in }) => keys_stream_function_in;
export const keys_stream_version_ = ({ keys_stream_version_in }) => keys_stream_version_in;

export const keys_ = ({ keys_stream_version_in, keys_stream_function_in, f_in }) => {
  keys_stream_version({ keys_stream_version_in });
  return keys_stream_function({ keys_stream_function_in })().filter((d) => d.frame == f({ f_in }));
  //
};

export const key_up_ = ({ keys_stream_version_in, keys_stream_function_in, f_in }) =>
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).length ?
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).find((d) => d.key == "ArrowUp") ?
true :
false :
false;

export const key_down_ = ({ keys_stream_version_in, keys_stream_function_in, f_in }) =>
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).length ?
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).find((d) => d.key == "ArrowDown") ?
true :
false :
false;

export const key_left_ = ({ keys_stream_version_in, keys_stream_function_in, f_in }) =>
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).length ?
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).find((d) => d.key == "ArrowLeft") ?
true :
false :
false;

export const key_right_ = ({ keys_stream_version_in, keys_stream_function_in, f_in }) =>
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).length ?
keys({ keys_stream_version_in, keys_stream_function_in, f_in }).find((d) => d.key == "ArrowRight") ?
true :
false :
false;

export const forwardness_ = ({ keys_stream_version_in, keys_stream_function_in, f_in }) => key_up({ keys_stream_version_in, keys_stream_function_in, f_in }) ? 1 : key_down({ keys_stream_version_in, keys_stream_function_in, f_in }) ? -1 : 0;

export const leftness_ = ({ keys_stream_version_in, keys_stream_function_in, f_in }) => key_left({ keys_stream_version_in, keys_stream_function_in, f_in }) ? 1 : key_right({ keys_stream_version_in, keys_stream_function_in, f_in }) ? -1 : 0;

export const player_angle_ = ({ f_in, keys_stream_version_in, keys_stream_function_in }) => {
  if (f({ f_in }) <= 0) return 1.21;else
  return player_angle({ keys_stream_version_in, keys_stream_function_in, f_in: f({ f_in }) - 1 }) + leftness({ keys_stream_version_in, keys_stream_function_in, f_in }) * 0.15;
};

export const player_x_ = ({ f_in, keys_stream_version_in, keys_stream_function_in }) => {
  if (f({ f_in }) <= 0) return 1.3;else

  return (
    player_x({ keys_stream_version_in, keys_stream_function_in, f_in: f({ f_in }) - 1 }) +
    forwardness({ keys_stream_version_in, keys_stream_function_in, f_in }) * speed({}) * Math.cos(player_angle({ f_in, keys_stream_version_in, keys_stream_function_in })));

};

export const player_y_ = ({ f_in, keys_stream_version_in, keys_stream_function_in }) => {
  if (f({ f_in }) <= 0) return 6.5;else

  return (
    player_y({ keys_stream_version_in, keys_stream_function_in, f_in: f({ f_in }) - 1 }) +
    forwardness({ keys_stream_version_in, keys_stream_function_in, f_in }) * speed({}) * Math.sin(player_angle({ f_in, keys_stream_version_in, keys_stream_function_in })) * -1 // origin top left
  );
};

export const speed_ = ({}) => 0.5;

// inputs:
export const f_ = ({ f_in }) => f_in;

// replaced these with controls, but they'll come back when I modularise:
//export const player_x = () => player_x_in;
//export const player_y = () => player_y_in;
//export const player_angle = () => player_angle_in;

export const ray_angle_ = ({ ray_angle_in }) => ray_angle_in;

export const step_ = ({ step_in }) => Math.max(0, step_in);

// for map lookups:

export const x_ = ({ x_in }) => x_in;
export const y_ = ({ y_in }) => y_in;