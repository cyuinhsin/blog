!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"blog","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.abb4f7a5.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.7b4ac3ab.async.js",65],["Foo__index.md.86f16e9d.async.js",81],["nm__dumi__theme-default__layouts__DocLayout__index.15402669.async.js",519],["918.e8c51481.chunk.css",918],["918.2e94874e.async.js",918],["dumi__tmp-production__dumi__theme__ContextWrapper.35c265a5.async.js",923],["docs__index.md.cb70f807.async.js",935],["docs__guide.md.2b9cd8ff.async.js",937]],"r":{"/*":[2,3,5,6,7,8],"/":[9,5,6,7,8],"/guide":[10,5,6,7,8],"/~demos/:id":[0,1,8],"/components/foo":[4,5,6,7,8]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();