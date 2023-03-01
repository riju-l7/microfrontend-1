!function(){function e(e,t){return(t||"")+" (SystemJS Error#"+e+" https://github.com/systemjs/systemjs/blob/main/docs/errors.md#"+e+")"}function t(e,t){if(-1!==e.indexOf("\\")&&(e=e.replace(j,"/")),"/"===e[0]&&"/"===e[1])return t.slice(0,t.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){var n,r=t.slice(0,t.indexOf(":")+1);if(n="/"===t[r.length+1]?"file:"!==r?(n=t.slice(r.length+2)).slice(n.indexOf("/")+1):t.slice(8):t.slice(r.length+("/"===t[r.length])),"/"===e[0])return t.slice(0,t.length-n.length-1)+e;for(var i=n.slice(0,n.lastIndexOf("/")+1)+e,o=[],s=-1,u=0;u<i.length;u++)-1!==s?"/"===i[u]&&(o.push(i.slice(s,u+1)),s=-1):"."===i[u]?"."!==i[u+1]||"/"!==i[u+2]&&u+2!==i.length?"/"===i[u+1]||u+1===i.length?u+=1:s=u:(o.pop(),u+=2):s=u;return-1!==s&&o.push(i.slice(s)),t.slice(0,t.length-n.length)+o.join("")}}function n(e,n){return t(e,n)||(-1!==e.indexOf(":")?e:t("./"+e,n))}function r(e,n,r,i,o){for(var s in e){var a=t(s,r)||s,f=e[s];if("string"==typeof f){var l=c(i,t(f,r)||f,o);l?n[a]=l:u("W1",s,f,"bare specifier did not resolve")}}}function i(e,t,i){var o;for(o in e.imports&&r(e.imports,i.imports,t,i,null),e.scopes||{}){var s=n(o,t);r(e.scopes[o],i.scopes[s]||(i.scopes[s]={}),t,i,s)}for(o in e.depcache||{})i.depcache[n(o,t)]=e.depcache[o];for(o in e.integrity||{})i.integrity[n(o,t)]=e.integrity[o]}function o(e,t){if(t[e])return e;var n=e.length;do{var r=e.slice(0,n+1);if(r in t)return r}while(-1!==(n=e.lastIndexOf("/",n-1)))}function s(e,t){var n=o(e,t);if(n){var r=t[n];if(null===r)return;if(!(e.length>n.length&&"/"!==r[r.length-1]))return r+e.slice(n.length);u("W2",n,r,"should have a trailing '/'")}}function u(t,n,r,i){console.warn(e(t,"Package target "+i+", resolving target '"+r+"' for "+n))}function c(e,t,n){for(var r=e.scopes,i=n&&o(n,r);i;){var u=s(t,r[i]);if(u)return u;i=o(i.slice(0,i.lastIndexOf("/")),r)}return s(t,e.imports)||-1!==t.indexOf(":")&&t}function a(){this[M]={}}function f(e){return e.id}function l(e,t,n,r){if(e.onload(n,t.id,t.d&&t.d.map(f),!!r),n)throw n}function d(t,n,r,i){var o=t[M][n];if(o)return o;var s=[],u=Object.create(null);P&&Object.defineProperty(u,P,{value:"Module"});var c=Promise.resolve().then(function(){return t.instantiate(n,r,i)}).then(function(r){if(!r)throw Error(e(2,"Module "+n+" did not instantiate"));var i=r[1](function(e,t){o.h=!0;var n=!1;if("string"==typeof e)e in u&&u[e]===t||(u[e]=t,n=!0);else{for(var r in e)t=e[r],r in u&&u[r]===t||(u[r]=t,n=!0);e&&e.__esModule&&(u.__esModule=e.__esModule)}if(n)for(var i=0;i<s.length;i++){var c=s[i];c&&c(u)}return t},2===r[1].length?{import:function(e,r){return t.import(e,n,r)},meta:t.createContext(n)}:void 0);return o.e=i.execute||function(){},[r[0],i.setters||[],r[2]||[]]},function(e){throw o.e=null,o.er=e,l(t,o,e,!0),e}),a=c.then(function(e){return Promise.all(e[0].map(function(r,i){var o=e[1][i],s=e[2][i];return Promise.resolve(t.resolve(r,n)).then(function(e){var r=d(t,e,n,s);return Promise.resolve(r.I).then(function(){return o&&(r.i.push(o),!r.h&&r.I||o(r.n)),r})})})).then(function(e){o.d=e})});return o=t[M][n]={id:n,i:s,n:u,m:i,I:c,L:a,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0,p:void 0}}function h(e,t,n,r){if(!r[t.id])return r[t.id]=!0,Promise.resolve(t.L).then(function(){return t.p&&null!==t.p.e||(t.p=n),Promise.all(t.d.map(function(t){return h(e,t,n,r)}))}).catch(function(n){if(t.er)throw n;throw t.e=null,l(e,t,n,!1),n})}function p(e,t){return t.C=h(e,t,t,{}).then(function(){return v(e,t,{})}).then(function(){return t.n})}function v(e,t,n){function r(){try{var n=o.call(R);if(n)return n=n.then(function(){t.C=t.n,t.E=null,l(e,t,null,!0)},function(n){throw t.er=n,t.E=null,l(e,t,n,!0),n}),t.E=n;t.C=t.n,t.L=t.I=void 0}catch(e){throw t.er=e,e}finally{l(e,t,t.er,!0)}}if(!n[t.id]){if(n[t.id]=!0,!t.e){if(t.er)throw t.er;return t.E?t.E:void 0}var i,o=t.e;return t.e=null,t.d.forEach(function(r){try{var o=v(e,r,n);o&&(i=i||[]).push(o)}catch(n){throw t.er=n,l(e,t,n,!1),n}}),i?Promise.all(i).then(r):r()}}function m(){[].forEach.call(document.querySelectorAll("script"),function(t){if(!t.sp)if("systemjs-module"===t.type){if(t.sp=!0,!t.src)return;System.import("import:"===t.src.slice(0,7)?t.src.slice(7):n(t.src,y)).catch(function(e){if(e.message.indexOf("https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3")>-1){var n=document.createEvent("Event");n.initEvent("error",!1,!1),t.dispatchEvent(n)}return Promise.reject(e)})}else if("systemjs-importmap"===t.type){t.sp=!0;var r=t.src?(System.fetch||fetch)(t.src,{integrity:t.integrity,passThrough:!0}).then(function(e){if(!e.ok)throw Error("Invalid status code: "+e.status);return e.text()}).catch(function(n){return n.message=e("W4","Error fetching systemjs-import map "+t.src)+"\n"+n.message,console.warn(n),"function"==typeof t.onerror&&t.onerror(),"{}"}):t.innerHTML;C=C.then(function(){return r}).then(function(n){!function(t,n,r){var o={};try{o=JSON.parse(n)}catch(t){console.warn(Error(e("W5","systemjs-importmap contains invalid JSON")+"\n\n"+n+"\n"))}i(o,r,t)}(W,n,t.src||y)})}})}var y,g="undefined"!=typeof Symbol,b="undefined"!=typeof self,S="undefined"!=typeof document,w=b?self:global;if(S){var x=document.querySelector("base[href]");x&&(y=x.href)}if(!y&&"undefined"!=typeof location){var E=(y=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==E&&(y=y.slice(0,E+1))}var O,j=/\\/g,P=g&&Symbol.toStringTag,M=g?Symbol():"@",I=a.prototype;I.import=function(e,t,n){var r=this;return t&&"object"==typeof t&&(n=t,t=void 0),Promise.resolve(r.prepareImport()).then(function(){return r.resolve(e,t,n)}).then(function(e){var t=d(r,e,void 0,n);return t.C||p(r,t)})},I.createContext=function(e){var t=this;return{url:e,resolve:function(n,r){return Promise.resolve(t.resolve(n,r||e))}}},I.onload=function(){},I.register=function(e,t,n){O=[e,t,n]},I.getRegister=function(){var e=O;return O=void 0,e};var R=Object.freeze(Object.create(null));w.System=new a;var L,A,C=Promise.resolve(),W={imports:{},scopes:{},depcache:{},integrity:{}},_=S;if(I.prepareImport=function(e){return(_||e)&&(m(),_=!1),C},S&&(m(),window.addEventListener("DOMContentLoaded",m)),I.addImportMap=function(e,t){i(e,t||y,W)},S){window.addEventListener("error",function(e){J=e.filename,N=e.error});var T=location.origin}I.createScript=function(e){var t=document.createElement("script");t.async=!0,e.indexOf(T+"/")&&(t.crossOrigin="anonymous");var n=W.integrity[e];return n&&(t.integrity=n),t.src=e,t};var J,N,k={},q=I.register;I.register=function(e,t){if(S&&"loading"===document.readyState&&"string"!=typeof e){var n=document.querySelectorAll("script[src]"),r=n[n.length-1];if(r){L=e;var i=this;A=setTimeout(function(){k[r.src]=[e,t],i.import(r.src)})}}else L=void 0;return q.call(this,e,t)},I.instantiate=function(t,n){var r=k[t];if(r)return delete k[t],r;var i=this;return Promise.resolve(I.createScript(t)).then(function(r){return new Promise(function(o,s){r.addEventListener("error",function(){s(Error(e(3,"Error loading "+t+(n?" from "+n:""))))}),r.addEventListener("load",function(){if(document.head.removeChild(r),J===t)s(N);else{var e=i.getRegister(t);e&&e[0]===L&&clearTimeout(A),o(e)}}),document.head.appendChild(r)})})},I.shouldFetch=function(){return!1},"undefined"!=typeof fetch&&(I.fetch=fetch);var D=I.instantiate,U=/^(text|application)\/(x-)?javascript(;|$)/;I.instantiate=function(t,n,r){var i=this;return this.shouldFetch(t,n,r)?this.fetch(t,{credentials:"same-origin",integrity:W.integrity[t],meta:r}).then(function(r){if(!r.ok)throw Error(e(7,r.status+" "+r.statusText+", loading "+t+(n?" from "+n:"")));var o=r.headers.get("content-type");if(!o||!U.test(o))throw Error(e(4,'Unknown Content-Type "'+o+'", loading '+t+(n?" from "+n:"")));return r.text().then(function(e){return e.indexOf("//# sourceURL=")<0&&(e+="\n//# sourceURL="+t),(0,eval)(e),i.getRegister(t)})}):D.apply(this,arguments)},I.resolve=function(n,r){return c(W,t(n,r=r||y)||n,r)||function(t,n){throw Error(e(8,"Unable to resolve bare specifier '"+t+(n?"' from "+n:"'")))}(n,r)};var $=I.instantiate;I.instantiate=function(e,t,n){var r=W.depcache[e];if(r)for(var i=0;i<r.length;i++)d(this,this.resolve(r[i],e),e);return $.call(this,e,t,n)},b&&"function"==typeof importScripts&&(I.instantiate=function(e){var t=this;return Promise.resolve().then(function(){return importScripts(e),t.getRegister(e)})}),function(e){function t(t){return!e.hasOwnProperty(t)||!isNaN(t)&&t<e.length||a&&e[t]&&"undefined"!=typeof window&&e[t].parent===window}var n,r,i,o=e.System.constructor.prototype,s=o.import;o.import=function(o,u,c){return function(){for(var o in n=r=void 0,e)t(o)||(n?r||(r=o):n=o,i=o)}(),s.call(this,o,u,c)};var u=[[],function(){return{}}],c=o.getRegister;o.getRegister=function(){var o=c.call(this);if(o)return o;var s,a=function(o){var s,u,c=0;for(var a in e)if(!t(a)){if(0===c&&a!==n||1===c&&a!==r)return a;s?(i=a,u=o&&u||a):s=a===i,c++}return u}(this.firstGlobalProp);if(!a)return u;try{s=e[a]}catch(e){return u}return[[],function(e){return{execute:function(){e(s),e({default:s,__useDefault:!0})}}}]};var a="undefined"!=typeof navigator&&-1!==navigator.userAgent.indexOf("Trident")}("undefined"!=typeof self?self:global),function(e){var t=e.System.constructor.prototype,r=/^[^#?]+\.(css|html|json|wasm)([?#].*)?$/,i=t.shouldFetch.bind(t);t.shouldFetch=function(e){return i(e)||r.test(e)};var o=/^application\/json(;|$)/,s=/^text\/css(;|$)/,u=/^application\/wasm(;|$)/,c=t.fetch;t.fetch=function(t,r){return c(t,r).then(function(i){if(r.passThrough)return i;if(!i.ok)return i;var c=i.headers.get("content-type");return o.test(c)?i.json().then(function(e){return new Response(new Blob(['System.register([],function(e){return{execute:function(){e("default",'+JSON.stringify(e)+")}}})"],{type:"application/javascript"}))}):s.test(c)?i.text().then(function(e){return e=e.replace(/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g,function(e,r,i,o){return"url("+r+n(i||o,t)+r+")"}),new Response(new Blob(["System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync("+JSON.stringify(e)+');e("default",s)}}})'],{type:"application/javascript"}))}):u.test(c)?(WebAssembly.compileStreaming?WebAssembly.compileStreaming(i):i.arrayBuffer().then(WebAssembly.compile)).then(function(n){e.System.wasmModules||(e.System.wasmModules=Object.create(null)),e.System.wasmModules[t]=n;var r=[],i=[];return WebAssembly.Module.imports&&WebAssembly.Module.imports(n).forEach(function(e){var t=JSON.stringify(e.module);-1===r.indexOf(t)&&(r.push(t),i.push("function(m){i["+t+"]=m}"))}),new Response(new Blob(["System.register(["+r.join(",")+"],function(e){var i={};return{setters:["+i.join(",")+"],execute:function(){return WebAssembly.instantiate(System.wasmModules["+JSON.stringify(t)+"],i).then(function(m){e(m.exports)})}}})"],{type:"application/javascript"}))}):i})}}("undefined"!=typeof self?self:global);var B="undefined"!=typeof Symbol&&Symbol.toStringTag;I.get=function(e){var t=this[M][e];if(t&&null===t.e&&!t.E)return t.er?null:t.n},I.set=function(t,n){try{new URL(t)}catch(n){console.warn(Error(e("W3",'"'+t+'" is not a valid URL to set in the module registry')))}var r;B&&"Module"===n[B]?r=n:(r=Object.assign(Object.create(null),n),B&&Object.defineProperty(r,B,{value:"Module"}));var i=Promise.resolve(r),o=this[M][t]||(this[M][t]={id:t,i:[],h:!1,d:[],e:null,er:void 0,E:void 0});return!o.e&&!o.E&&(Object.assign(o,{n:r,I:void 0,L:void 0,C:i}),r)},I.has=function(e){return!!this[M][e]},I.delete=function(e){var t=this[M],n=t[e];if(!n||n.p&&null!==n.p.e||n.E)return!1;var r=n.i;return n.d&&n.d.forEach(function(e){var t=e.i.indexOf(n);-1!==t&&e.i.splice(t,1)}),delete t[e],function(){var n=t[e];if(!n||!r||null!==n.e||n.E)return!1;r.forEach(function(e){n.i.push(e),e(n.n)}),r=null}};var F="undefined"!=typeof Symbol&&Symbol.iterator;I.entries=function(){var e,t,n=this,r=Object.keys(n[M]),i=0,o={next:function(){for(;void 0!==(t=r[i++])&&void 0===(e=n.get(t)););return{done:void 0===t,value:void 0!==t&&[t,e]}}};return o[F]=function(){return this},o}}(),function(){function e(e,t){return(t||"")+" (SystemJS Error#"+e+" https://github.com/systemjs/systemjs/blob/main/docs/errors.md#"+e+")"}!function(t){function n(){throw Error(e(5,"AMD require not supported."))}var r=["require","exports","module"];t.define=function(t,i,o){var s,u,c="string"==typeof t,a=c?t:null,f=c?i:t,l=c?o:i;if(Array.isArray(f))s=f,u=l;else if("object"==typeof f)s=[],u=function(){return f};else{if("function"!=typeof f)throw Error(e(9,"Invalid call to AMD define()"));s=r,u=f}var d=function(e,t){for(var r={},i={exports:r},o=[],s=[],u=0,c=0;c<e.length;c++){var a=e[c],f=s.length;"require"===a?(o[c]=n,u++):"module"===a?(o[c]=i,u++):"exports"===a?(o[c]=r,u++):function(e){s.push(function(t){o[e]=t.__useDefault?t.default:t})}(c),u&&(e[f]=a)}u&&(e.length-=u);var l=t;return[e,function(e){return e({default:r,__useDefault:!0}),{setters:s,execute:function(){var t=l.apply(r,o);void 0!==t&&(i.exports=t),e(i.exports),e("default",i.exports)}}}]}(s,u);c?(System.registerRegistry?(System.registerRegistry[a]=d,System.register(a,d[0],d[1])):console.warn(e("W6","Include named-register.js for full named define support")),System.register(d[0],d[1])):System.register(d[0],d[1])},t.define.amd={}}("undefined"!=typeof self?self:global)}();

System.register(["single-spa"],(function(e,t){var r={};return{setters:[function(e){r.registerApplication=e.registerApplication,r.start=e.start,r.unregisterApplication=e.unregisterApplication}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,i=n.length;o!==t&&i>=0;)"/"===n[--i]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var c=n.slice(0,i+1);return r.protocol+"//"+r.host+c};Number.isInteger},645:e=>{"use strict";e.exports=r}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.y=t,o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var i={};return(0,o(722).s)(1),(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,c=void 0,c=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===e(c)?c:String(c)),o)}var i,c}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function c(e,t,n){return c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},c.apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return c(e,arguments,n(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),r(i,e)},u(e)}o.r(i);var a=o(645);function p(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,i=n(t);if(r){var c=n(this).constructor;o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments);return function(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,o)}}console.log("system",System);var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}(c,e);var n,o,i=p(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),e=i.call(this);var t=document.createElement("nav");e.appendChild(t);var r=document.createElement("content");return e.appendChild(r),console.log("Loading importmap.json"),e}return n=c,(o=[{key:"connectedCallback",value:function(){(0,a.registerApplication)({name:"@sephora/navbar-mfe",app:function(){return System.import("@sephora/navbar-mfe")},activeWhen:["/"]}),(0,a.registerApplication)({name:"@sephora/customer-mfe",app:function(){return System.import("@sephora/customer-mfe")},activeWhen:["/customer"]}),(0,a.registerApplication)({name:"@sephora/order-mfe",app:function(){return System.import("@sephora/order-mfe")},activeWhen:["/order"]}),(0,a.start)()}},{key:"disconnectedCallback",value:function(){(0,a.unregisterApplication)("@sephora/navbar-mfe"),(0,a.unregisterApplication)("@sephora/customer-mfe"),(0,a.unregisterApplication)("@sephora/order-mfe")}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),c}(u(HTMLElement));customElements.define("single-spa-root",f)})(),i})())}}}));
//# sourceMappingURL=sephora-root-config.js.map