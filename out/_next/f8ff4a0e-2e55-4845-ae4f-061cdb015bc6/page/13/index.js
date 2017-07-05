
          window.__NEXT_REGISTER_PAGE('/13', function() {
            var comp = module.exports=webpackJsonp([5],{101:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(102),i=r(o),a=n(3),l=r(a),u=n(4),c=r(u),s=n(103),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=function(){function e(t,n){var r=this;(0,l.default)(this,e),this.mousemove=function(e){r.uniforms.mouse.value.x=e.offsetX-r.renderer.domElement.offsetLeft,r.uniforms.mouse.value.y=e.offsetY-r.renderer.domElement.offsetTop},this.resize=function(){var e=[r.canvas.clientWidth,r.canvas.clientHeight],t=e[0],n=e[1];r.renderer.setSize(t,n),r.targets.forEach(function(e){return e.setSize(t/r.ratio,n/r.ratio)}),r.uniforms.resolution.value.x=t/r.ratio,r.uniforms.resolution.value.y=n/r.ratio},this.animate=function(){r.frame++,r.isPlaying&&(requestAnimationFrame(r.animate),r.frame%r.skip==0&&r.render())},this.ratio=t,this.skip=n,this.scene=new f.Scene,this.camera=new f.OrthographicCamera(-1,1,1,-1,.1,10),this.camera.position.set(0,0,1),this.camera.lookAt(this.scene.position),this.targets=[new f.WebGLRenderTarget(0,0,{minFilter:f.LinearFilter,magFilter:f.NearestFilter,format:f.RGBAFormat}),new f.WebGLRenderTarget(0,0,{minFilter:f.LinearFilter,magFilter:f.NearestFilter,format:f.RGBAFormat})],this.start=Date.now(),this.uniforms={backBuffer:{type:"t",value:new f.Texture},mouse:{type:"v2",value:new f.Vector2},resolution:{type:"v2",value:new f.Vector2},time:{type:"f",value:0}},this.textureLoader=new f.TextureLoader,this.callbacks={}}return(0,c.default)(e,[{key:"setCanvas",value:function(e){e&&(this.canvas=e,this.renderer=new f.WebGLRenderer({canvas:e}),this.renderer.setPixelRatio(1/this.ratio),this.resize(),window.addEventListener("resize",this.resize),this.renderer.domElement.addEventListener("mousemove",this.mousemove),this.frame=0,this.animate())}},{key:"loadShader",value:function(e){this.plane&&this.scene.remove(this.plane);var t=new f.PlaneGeometry(2,2),n=new f.ShaderMaterial({uniforms:this.uniforms,vertexShader:"\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",fragmentShader:e,extensions:{derivatives:!0,drawBuffers:!1,fragDepth:!1,shaderTextureLOD:!1}});this.plane=new f.Mesh(t,n),this.scene.add(this.plane)}},{key:"loadTexture",value:function(e){e&&(this.uniforms.texture={type:"t",value:this.textureLoader.load(e)})}},{key:"addUniform",value:function(e,t){this.uniforms[e]={type:"f",value:t()},this.callbacks[e]=t}},{key:"play",value:function(){this.isPlaying=!0,this.animate()}},{key:"stop",value:function(){this.isPlaying=!1}},{key:"render",value:function(){var e=this;this.uniforms.time.value=(Date.now()-this.start)/1e3,this.targets=[this.targets[1],this.targets[0]],this.uniforms.backBuffer.value=this.targets[0].texture,(0,i.default)(this.callbacks).forEach(function(t){e.uniforms[t].value=e.callbacks[t]()}),this.renderer.render(this.scene,this.camera),this.renderer.render(this.scene,this.camera,this.targets[1],!0)}},{key:"aspect",get:function(){return this.renderer.domElement.width/this.renderer.domElement.height}}]),e}();t.default=d},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="\nprecision mediump float;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\nuniform sampler2D texture;\nuniform float movement;\nuniform float scroll;\n\nfloat t() {\n  return fract(time * .02);\n}\n\nfloat random(in vec2 p) {\n  return fract(sin(dot(p, vec2(12032., 234.))) *19.23);\n}\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = smoothstep(0.,1.,f);\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\nfloat fbm(in vec2 p) {\n  float q = 0.;\n  float oct = 1.;\n  float off = 0.1;\n  for (int i = 0; i < 4; i++) {\n    q += random(p * oct *0.0001 + off) / oct / 2.;\n    oct *= 2.;\n    off += 2.0;\n  }\n  return q;\n}\n\nvec4 lighten(in vec4 p) {\n  vec4 x = vec4(0);\n  float n = 3.;\n  x.r = 1.3 - pow(1. - p.r, n);\n  x.g = 1.3 - pow(1. - p.g, n);\n  x.b = 1.6 - pow(1. - p.b, n);\n  x.a = p.a;\n  return x;\n}\n\nvoid main( void ) {\n\tvec2 p = gl_FragCoord.xy / resolution;\n  float xx = fbm(vec2((p.x + mod(time * -0.03, 13.)) * 3., p.y + time * 0.02) + 1.);\n  p.y = ((1. - p.y) + scroll) / 3.4 - (movement * .002 * xx);\n\n  vec2 q = vec2(\n    fbm(p * 5. + t() * 10.),\n    fbm(p * 10. + t() * 30. * fract(sin(p.x * 10.) *20.))\n  ) * 0.0045;\n  q.y += fract(random(p.xx * 0.07) * time + p.y * 10.) * 0.001;\n  p += q;\n\n  vec4 color = texture2D(texture, vec2(p.x, 1. - p.y));\n  color = mix(lighten(color), color, .2);\n\n\tgl_FragColor = color;\n}\n"},105:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),d=n(29),p=r(d),T=n(106),h=r(T),E=n(109),m=r(E),A=n(112),y=n(47),v=function(){return null},b=(0,h.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(v),S=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=a,t.titleAttributes=u({},i),t));case y.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},i)});case y.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},i)})}return u({},o,(n={},n[r.type]=u({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,l=o(i,["children"]),u=(0,A.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,a),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=u({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(b);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),u=r(l),c=n(107),s=r(c),f=n(108),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(p.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.default.createElement(c,this.props)},t}(l.Component);return h.displayName="SideEffect("+r(c)+")",h.canUseDOM=s.default.canUseDOM,h}}},107:function(e,t,n){var r;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0!==(r=function(){return i}.call(t,n,t,e))&&(e.exports=r)}()},108:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!l(c))return!1;var s=e[c],f=t[c];if(!1===(o=n?n.call(r,s,f,c):void 0)||void 0===o&&s!==f)return!1}return!0}},109:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=l(e),d=l(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,l=n(110),u=n(111),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},110:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},111:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},112:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),l=r(a),u=n(97),c=r(u),s=n(47),f=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,s.TAG_NAMES.TITLE),n=m(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return void 0!==e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],u=l.toLowerCase();-1===t.indexOf(u)||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],u=(0,c.default)({},r[l],o[l]);r[l]=u}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:h([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),encode:m(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){return"undefined"!=typeof window&&void 0!==window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),v=function(){return"undefined"!=typeof window&&void 0!==window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,g=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,f=e.title,d=e.titleAttributes;S&&v(S),S=y(function(){w(s.TAG_NAMES.BODY,n),w(s.TAG_NAMES.HTML,r),_(f,d);var p={baseTag:O(s.TAG_NAMES.BASE,t),linkTags:O(s.TAG_NAMES.LINK,o),metaTags:O(s.TAG_NAMES.META,i),noscriptTags:O(s.TAG_NAMES.NOSCRIPT,a),scriptTags:O(s.TAG_NAMES.SCRIPT,u),styleTags:O(s.TAG_NAMES.STYLE,c)},T={},h={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(h[e]=p[e].oldTags)}),S=null,l(e,T,h)})},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=Array.isArray(e)?e.join(""):e),w(s.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var u=a[l],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},O=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},M=function(e,t,n,r){var o=P(n);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(t,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(t,r)+"</"+e+">"},R=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},I=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=x(n,o);return[l.default.createElement(s.TAG_NAMES.TITLE,i,t)]},L=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),l.default.createElement(e,o)})},N=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return I(0,t.title,t.titleAttributes)},toString:function(){return M(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return L(e,t)},toString:function(){return R(e,t,n)}}}},G=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:N(s.TAG_NAMES.BASE,t,r),bodyAttributes:N(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(s.ATTRIBUTE_NAMES.HTML,o,r),link:N(s.TAG_NAMES.LINK,i,r),meta:N(s.TAG_NAMES.META,a,r),noscript:N(s.TAG_NAMES.NOSCRIPT,l,r),script:N(s.TAG_NAMES.SCRIPT,u,r),style:N(s.TAG_NAMES.STYLE,c,r),title:N(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=C,t.handleClientStateChange=g,t.mapStateOnServer=G,t.reducePropsToState=A,t.requestIdleCallback=y,t.warn=b},223:function(e,t,n){e.exports=n(224)},224:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=r(o),a=n(0),l=r(a),u=n(7),c=r(u),s=n(105),f=n(225),d=r(f),p=(0,i.default)(["\n  line-height: 1.6em;\n  // text-shadow: 0 0 2px white, 0 0 4px white;\n  text-shadow: 0 0 1px black, 0 0 4px white, 0 0 4px white;\n  filter: blur(1px);\n  max-width: 960px;\n  margin: 0 auto;\n\n"],["\n  line-height: 1.6em;\n  // text-shadow: 0 0 2px white, 0 0 4px white;\n  text-shadow: 0 0 1px black, 0 0 4px white, 0 0 4px white;\n  filter: blur(1px);\n  max-width: 960px;\n  margin: 0 auto;\n\n"]),T=(0,i.default)(["\n  width: 90%;\n  margin: 20px 5%;\n  img {\n    width: 100%;\n  }\n"],["\n  width: 90%;\n  margin: 20px 5%;\n  img {\n    width: 100%;\n  }\n"]),h=(0,i.default)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"],["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]),E=(0,i.default)(["\n  margin: 180px 10px;\n"],["\n  margin: 180px 10px;\n"]),m=(0,i.default)(["\n  ul {\n    list-style: none;\n    padding-left: 10px;\n  }\n  li {\n    margin-bottom: 10px;\n    // white-space: nowrap;\n  }\n"],["\n  ul {\n    list-style: none;\n    padding-left: 10px;\n  }\n  li {\n    margin-bottom: 10px;\n    // white-space: nowrap;\n  }\n"]),A=(0,i.default)(["\n  margin: -40px 10px 60px;\n  text-align: center;\n  a {\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"],["\n  margin: -40px 10px 60px;\n  text-align: center;\n  a {\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]),y=(0,i.default)(["\n  text-align: center;\n  width: 100%;\n  height: 210px;\n  line-height: 180px;\n  font-weight: bold;\n  img {\n    height: 2.5em;\n    margin-top: -3px;\n  }\n"],["\n  text-align: center;\n  width: 100%;\n  height: 210px;\n  line-height: 180px;\n  font-weight: bold;\n  img {\n    height: 2.5em;\n    margin-top: -3px;\n  }\n"]),v=c.default.div(p),b=c.default.h1(T),S=c.default.div(h),g=c.default.section(E),_=g.extend(m),w=c.default.section(A),O=c.default.footer(y);t.default=function(){return l.default.createElement("div",null,l.default.createElement(s.Helmet,null,l.default.createElement("meta",{charSet:"utf-8"}),l.default.createElement("title",null,"Kyoto.js 13"),l.default.createElement("meta",{name:"theme-color",content:"#ffffff"}),">",l.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),l.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css"})),l.default.createElement(S,null,l.default.createElement(d.default,null)),l.default.createElement(v,null,l.default.createElement(b,null,l.default.createElement("img",{src:"/static/13/logo.png"})),l.default.createElement(g,null,l.default.createElement("h2",null,"今回のテーマは「無常」"),l.default.createElement("p",null,"技術だけじゃ、何も起きない")),l.default.createElement(g,null,l.default.createElement("h2",null,"Speakers"),l.default.createElement("p",null,"TBD")),l.default.createElement(_,null,l.default.createElement("h2",null,"Timetable"),l.default.createElement("ul",null,l.default.createElement("li",null,"13:00 開始"),l.default.createElement("li",null,"13:10 「ライブコーディング環境をつくってみた」amagitakayosi"),l.default.createElement("li",null,"13:30 「TBD」john doe"),l.default.createElement("li",null,"13:50 休憩"),l.default.createElement("li",null,"14:00 「TBD」john doe"),l.default.createElement("li",null,"14:20 「TBD」john doe"),l.default.createElement("li",null,"14:40 休憩"),l.default.createElement("li",null,"14:50 「TBD」(LT) john doe"),l.default.createElement("li",null,"15:00 「TBD」(LT) john doe"),l.default.createElement("li",null,"15:10 「TBD」(LT) john doe"),l.default.createElement("li",null,"15:20 「TBD」(LT) john doe"),l.default.createElement("li",null,"15:30 懇親会"))),l.default.createElement(w,null,l.default.createElement("h2",null,l.default.createElement("a",{href:"https://kyotojs.connpass.com/event/60422/",target:"_blank"},"参加申込みはこちらから"))),l.default.createElement(O,null,"by ",l.default.createElement("img",{src:"/static/logo960.png"}))))}},225:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=r(o),a=n(3),l=r(a),u=n(4),c=r(u),s=n(14),f=r(s),d=n(15),p=r(d),T=n(8),h=r(T),E=n(0),m=r(E),A=n(7),y=r(A),v=n(101),b=r(v),S=n(104),g=r(S),_=(0,h.default)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n"],["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n"]),w=y.default.div(_),O=1e4,P=0,M=0,R=!1,x=function(e){function t(){var e,n,r,o;(0,l.default)(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=r=(0,f.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(u))),r.loadShader=function(e){r.three=new b.default(1,1),r.canvas&&(r.three.setCanvas(r.canvas),r.three.loadTexture("/static/13/bg3.jpg"),r.three.loadShader(g.default),r.three.addUniform("scroll",r.getScroll),r.three.addUniform("movement",r.getMovement),r.three.play())},r.getMovement=function(){return O},r.getScroll=function(){return M},r.update=function(e){O=.96*O+.2*(P-window.scrollY),P=window.scrollY,M=window.scrollY/(document.body.scrollHeight-window.innerHeight),R&&requestAnimationFrame(r.update)},r.setCanvas=function(e){return r.canvas=e},o=n,(0,f.default)(r,o)}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.loadShader(this.props.article),R=!0,this.update()}},{key:"componentWillUnmount",value:function(){this.three&&this.three.stop(),R=!1}},{key:"render",value:function(){return m.default.createElement(w,null,m.default.createElement("canvas",{ref:this.setCanvas}))}}]),t}(m.default.Component);t.default=x},47:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"}},[223]);
            return { page: comp.default }
          })
        