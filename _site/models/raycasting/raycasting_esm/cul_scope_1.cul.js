import { range } from "underscore";

// trig helpers:

export const tan_ray_angle = () => Math.tan(ray_angle());
export const inverse_tan_ray_angle = () => 1 / tan_ray_angle();

// we use this to find the right grid lines:

export const ray_looking_up = () => Math.sin(ray_angle()) > 0;
export const ray_looking_right = () => Math.cos(ray_angle()) > 0;

// the 2d map we are raycasting
// non-zero is a wall
export const map = () => [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 0, 0, 3, 1],
  [1, 0, 0, 2, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

// for x and y looks up the corresponding map value
export const map_lookup = () => {
  // non zero is a wall!
  // boundaries:
  if (y() <= 0.1 || x() >= 7.99 || x() <= 0.1 || y() >= 7.99) return 1;

  // map lookups with necessary fudge:
  return (
    map()[Math.floor(y() - 0.01)][Math.floor(x() - 0.01)] ||
    map()[Math.floor(y() - 0)][Math.floor(x() - 0)]
  );
};

// to calculate ray distances:

// this algorithm checks intersections of rays with horizonal and vertical gridlines
// there are separate h=horizontal, v=vertical formulas
// until we take the minimum distance of the 2

// h=horizontal::

// "ray-horizontal-check x": the x position of the current step along current ray
export const rhx = () => {
  if (step() == 0)
    return player_x() + (player_y() - rhy()) * inverse_tan_ray_angle();
  else
    return (
      rhx({ step_in: step() - 1 }) +
      (ray_looking_up() ? 1 : -1) * inverse_tan_ray_angle()
    );
};

export const rhy = () => {
  if (ray_looking_up()) {
    if (step() == 0) return Math.floor(player_y());
    else return rhy({ step_in: step() - 1 }) - 1;
  } else {
    if (step() == 0) return Math.floor(player_y()) + 1;
    else return rhy({ step_in: step() - 1 }) + 1;
  }
};

// "ray-horizontal-check value": the corresponding value for map at step along current ray
export const rhv = () => map_lookup({ x_in: rhx(), y_in: rhy() });

// the first wall hit; by reducing
// summarises over steps and provides details
// that we destructure afterwards
// calculang compiler logic infers that step_in no longer matters
export const rh_hit_object = () => {
  return range(0, 8.1).reduce(
    (acc, step_in) => {
      if (acc.step_in == -1 && rhv({ step_in }) != 0)
        return {
          x: rhx({ step_in }),
          y: rhy({ step_in }),
          v: rhv({ step_in }),
          step_in,
        };
      else return acc;
    },
    { step_in: -1 }
  );
};

export const rh_hit_x = () => rh_hit_object().x;
export const rh_hit_y = () => rh_hit_object().y;
export const rh_hit_v = () => rh_hit_object().v;
export const rh_hit_step = () => rh_hit_object().step_in;

export const rh_hit_distance = () =>
  // Pythagoras' theorem
  Math.sqrt((rh_hit_x() - player_x()) ** 2 + (rh_hit_y() - player_y()) ** 2);

// vertical::

export const rvx = () => {
  if (ray_looking_right()) {
    if (step() == 0) return Math.floor(player_x()) + 1;
    else return rvx({ step_in: step() - 1 }) + 1;
  } else {
    if (step() == 0) return Math.floor(player_x());
    else return rvx({ step_in: step() - 1 }) - 1;
  }
};

export const rvy = () => {
  if (step() == 0) return player_y() + (player_x() - rvx()) * tan_ray_angle();
  else
    return (
      rvy({ step_in: step() - 1 }) +
      (ray_looking_right() ? -1 : 1) * tan_ray_angle()
    );
};

// "ray-vertical-check value": the corresponding value for map at step along current ray
export const rvv = () => map_lookup({ x_in: rvx(), y_in: rvy() });

// the first wall hit - vertical checks
export const rv_hit_object = () => {
  return range(0, 8.1).reduce(
    (acc, step_in) => {
      if (acc.step_in == -1 && rvv({ step_in }) != 0)
        return {
          x: rvx({ step_in }),
          y: rvy({ step_in }),
          v: rvv({ step_in }),
          step_in,
        };
      else return acc;
    },
    { step_in: -1 }
  );
};

// destructure
export const rv_hit_x = () => rv_hit_object().x;
export const rv_hit_y = () => rv_hit_object().y;
export const rv_hit_v = () => rv_hit_object().v;
export const rv_hit_step = () => rv_hit_object().step_in;

export const rv_hit_distance = () =>
  // Pythagoras' theorem
  Math.sqrt((rv_hit_x() - player_x()) ** 2 + (rv_hit_y() - player_y()) ** 2);

// now consolidating 2 h/v calcs above:

export const r_hit_h_or_v = () =>
  // this contributes to color shading
  rv_hit_distance() < rh_hit_distance() ? "v" : "h";

export const r_hit_object = () =>
  r_hit_h_or_v() == "v" ? rv_hit_object() : rh_hit_object();
export const r_hit_x = () => r_hit_object().x;
export const r_hit_y = () => r_hit_object().y;
export const r_hit_v = () => r_hit_object().v;
export const r_hit_step = () => r_hit_object().step_in;

export const fisheye_correction = () => fisheye_correction_in;

export const ray_distance = () =>
  Math.min(rv_hit_distance(), rh_hit_distance()) *
  (fisheye_correction() ? Math.cos(player_angle() - ray_angle()) : 1);

export const ray_inverse_distance = () => 1 / ray_distance();

/////// key controls

export const keys_stream_function = () => keys_stream_function_in;
export const keys_stream_version = () => keys_stream_version_in;

export const keys = () => {
  keys_stream_version();
  return keys_stream_function()().filter((d) => d.frame == f());
  //
};

export const key_up = () =>
  keys().length
    ? keys().find((d) => d.key == "ArrowUp")
      ? true
      : false
    : false;

export const key_down = () =>
  keys().length
    ? keys().find((d) => d.key == "ArrowDown")
      ? true
      : false
    : false;

export const key_left = () =>
  keys().length
    ? keys().find((d) => d.key == "ArrowLeft")
      ? true
      : false
    : false;

export const key_right = () =>
  keys().length
    ? keys().find((d) => d.key == "ArrowRight")
      ? true
      : false
    : false;

export const forwardness = () => (key_up() ? 1 : key_down() ? -1 : 0);

export const leftness = () => (key_left() ? 1 : key_right() ? -1 : 0);

export const player_angle = () => {
  if (f() <= 0) return 1.21;
  else return player_angle({ f_in: f() - 1 }) + leftness() * 0.15;
};

export const player_x = () => {
  if (f() <= 0) return 1.3;
  else
    return (
      player_x({ f_in: f() - 1 }) +
      forwardness() * speed() * Math.cos(player_angle())
    );
};

export const player_y = () => {
  if (f() <= 0) return 6.5;
  else
    return (
      player_y({ f_in: f() - 1 }) +
      forwardness() * speed() * Math.sin(player_angle()) * -1 // origin top left
    );
};

export const speed = () => 0.5;

// inputs:
export const f = () => f_in;

// replaced these with controls, but they'll come back when I modularise:
//export const player_x = () => player_x_in;
//export const player_y = () => player_y_in;
//export const player_angle = () => player_angle_in;

export const ray_angle = () => ray_angle_in;

export const step = () => Math.max(0, step_in);

// for map lookups:

export const x = () => x_in;
export const y = () => y_in;
