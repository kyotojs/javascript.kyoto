
          window.__NEXT_REGISTER_PAGE('/13/shader', function() {
            var comp = module.exports=webpackJsonp([8],{231:function(n,o,t){n.exports=t(232)},232:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default="\nprecision mediump float;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\nuniform sampler2D texture;\nuniform float movement;\nuniform float scroll;\n\nfloat t() {\n  return fract(time * .02);\n}\n\nfloat random(in vec2 p) {\n  return fract(sin(dot(p, vec2(12032., 234.))) *19.23);\n}\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = smoothstep(0.,1.,f);\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\nfloat fbm(in vec2 p) {\n  float q = 0.;\n  float oct = 1.;\n  float off = 0.1;\n  for (int i = 0; i < 3; i++) {\n    q += random(p * oct *0.0001 + off) / oct / 2.;\n    oct *= 2.;\n    off += 2.0;\n  }\n  return q;\n}\n\nvec4 lighten(in vec4 p) {\n  vec4 x = vec4(0);\n  float n = 3.;\n  x.r = 1.0 - pow(1. - p.r, n);\n  x.g = 1.0 - pow(1. - p.g, n);\n  x.b = 1.2 - pow(1. - p.b, n);\n  x.a = p.a;\n  return x;\n}\n\nvoid main( void ) {\n\tvec2 p = gl_FragCoord.xy / resolution;\n  float xx = fbm(vec2((p.x + mod(time * -0.03, 13.)) * 3., p.y + time * 0.02) + 1.);\n  //float xx = noise(vec2((p.x * 200. + mod(time * -0.03, 13.)) * 3., p.y + time * 0.02) + 1.);\n  p.y = ((1. - p.y) + scroll) / 3.4 - (movement * .002 * xx);\n\n  vec2 q = vec2(\n    fbm(p * 5. + t() * 10.),\n    fbm(p * 10. + t() * 30. * fract(sin(p.x * 10.) *20.))\n  ) * 0.0045;\n  q.y += fract(random(p.xx * 0.07) * time + p.y * 10.) * 0.001;\n  p += q;\n\n  vec4 color = texture2D(texture, vec2(p.x, 1. - p.y));\n  color = mix(lighten(color), color, .2);\n\n\tgl_FragColor = color;\n}\n"}},[231]);
            return { page: comp.default }
          })
        