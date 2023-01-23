// Shader strings
// Assuming s and t are in range [-1,1]
export const eval_isoparametric_linear_quadrilateral = `
float eval(in vec2 st, in vec4 corners) {
  vec4 cornersS = vec4(
      (1. - st.x) * (1. - st.y),
      (1. + st.x) * (1. - st.y),
      (1. - st.x) * (1. + st.y),
      (1. + st.x) * (1. + st.y));
  vec4 a = cornersS * corners;
  vec2 b = a.xy + a.wz;
  b.x += b.y;
  float sumCorners = b.x * 0.25;
  return sumCorners;
}
`

export const eval_isoparametric_quadratic_quadrilateral = `
float eval(in vec2 st, in vec4 corners, in vec4 mids) {
  vec4 cornersS = vec4(
    (1. - st.x) * (1. - st.y) * ( 1. + st.x + st.y),
    (1. + st.x) * (1. - st.y) * (-1. + st.x - st.y),
    (1. - st.x) * (1. + st.y) * (-1. + st.x + st.y),
    (1. + st.x) * (1. + st.y) * ( 1. + st.x - st.y)
  );
  vec4 a = cornersS * corners;
  vec2 b = a.xy + a.wz;
  b.x += b.y;
  float sumCorners = b.x * 0.25;
  vec4 midsS = vec4(
    (1. - st.y) * (1. - st.x * st.x),
    (1. + st.x) * (1. - st.y * st.y),
    (1. + st.y) * (1. - st.x * st.x),
    (1. - st.x) * (1, - st.y * st.y)
  );
  vec4 c = midsS * mids;
  vec2 d = c.xy + c.wz;
  d.x += d.y;
  float sumMids = d.x * 0.5; 
  return sumCorners + sumMids;
}
`
