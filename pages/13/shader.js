const fragment = `
precision mediump float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform sampler2D backbuffer;
uniform sampler2D texture;
uniform float movement;
uniform float scroll;

float t() {
  return fract(time * .02);
}

float random(in vec2 p) {
  return fract(sin(dot(p, vec2(12032., 234.))) *19.23);
}
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = smoothstep(0.,1.,f);
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}
float fbm(in vec2 p) {
  float q = 0.;
  float oct = 1.;
  float off = 0.1;
  for (int i = 0; i < 4; i++) {
    q += random(p * oct *0.0001 + off) / oct / 2.;
    oct *= 2.;
    off += 2.0;
  }
  return q;
}

vec4 lighten(in vec4 p) {
  vec4 x = vec4(0);
  float n = 3.;
  x.r = 1.3 - pow(1. - p.r, n);
  x.g = 1.3 - pow(1. - p.g, n);
  x.b = 1.6 - pow(1. - p.b, n);
  x.a = p.a;
  return x;
}

void main( void ) {
	vec2 p = gl_FragCoord.xy / resolution;
  float xx = fbm(vec2((p.x + mod(time * -0.03, 13.)) * 3., p.y + time * 0.02) + 1.);
  p.y = ((1. - p.y) + scroll) / 3.4 - (movement * .002 * xx);

  vec2 q = vec2(
    fbm(p * 5. + t() * 10.),
    fbm(p * 10. + t() * 30. * fract(sin(p.x * 10.) *20.))
  ) * 0.0045;
  q.y += fract(random(p.xx * 0.07) * time + p.y * 10.) * 0.001;
  p += q;

  vec4 color = texture2D(texture, vec2(p.x, 1. - p.y));
  color = mix(lighten(color), color, .2);

	gl_FragColor = color;
}
`;

export default fragment;
