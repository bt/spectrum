var __wpo = {"assets":{"main":["./icons.eot?674f50d287a8c48dc19ba404d20fe713","./icons.svg?912ec66d7572ff821749319396470bde","./icons.ttf?b06871f281fee6b241d60582ae9369b9","./fee66e712a8a08eef5805a46892932ad.woff","./af7ae505a9eed503f8b8e6982036873e.woff2","./flags.png?9c74e172f87984c48ddf5c8108cabe67","./qr-overlay.png?00783e10d7dfd3f05ed65ef9f32e2e70","./main.65a72062893982875dca.js","./runtime.aacd8c293a3c4152bb4e.js","./vendor.57de114943f3dee609e3.js","./style.ea8d2f7f91baebfd9ce498ca4927a9e9.css","./","./favicon.ico","./manifest.820753c6ea89e1fdb83b816e07b9596f.json","./icon_512x512.4237ff215d625915fe2d1fb0fded2f95.png","./icon_256x256.79d468a5711b83b803881b496a31c5ac.png","./icon_192x192.98dfe72f30ec52720db8b2ef49e85259.png","./icon_144x144.ca393a0636d2591a55020684ea22b925.png","./icon_128x128.715c4acaa67ff4a3e8af599ea9c2b349.png","./icon_96x96.405fe2081b5ac3d6690bc95ca5582f83.png"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"d980c2ce873dc43af460d4d572d441304499f400":"./icons.eot?674f50d287a8c48dc19ba404d20fe713","98a8aa5cf7d62c2eff5f07ede8d844b874ef06ed":"./icons.svg?912ec66d7572ff821749319396470bde","13b1eab65a983c7a73bc7997c479d66943f7c6cb":"./icons.ttf?b06871f281fee6b241d60582ae9369b9","28b782240b3e76db824e12c02754a9731a167527":"./fee66e712a8a08eef5805a46892932ad.woff","d6f48cba7d076fb6f2fd6ba993a75b9dc1ecbf0c":"./af7ae505a9eed503f8b8e6982036873e.woff2","4a552ecb123ded5040ddda01d626103cc65db055":"./flags.png?9c74e172f87984c48ddf5c8108cabe67","a71060854bbb1e8c2035d01a09e5796730809bb9":"./qr-overlay.png?00783e10d7dfd3f05ed65ef9f32e2e70","40e642c0a8c7e2da076392df6feaf3edf8a90f6e":"./main.65a72062893982875dca.js","6fa81d2958d74a53393b97404abe6a15ae851599":"./runtime.aacd8c293a3c4152bb4e.js","cf95f07ed7b9d2043c847729e05b4402407a6bda":"./vendor.57de114943f3dee609e3.js","4fdef6c80b9b7a7c291066742531351e2a701025":"./style.ea8d2f7f91baebfd9ce498ca4927a9e9.css","3af72c3f83e8c7facfb18bf48b40e34387e547ea":"./","c774a5dd5eeb329ec379325ba9f5c2e909dceecb":"./favicon.ico","7323bcc711e336b6a7a15e0184d39931522d9d7b":"./manifest.820753c6ea89e1fdb83b816e07b9596f.json","5769606e5e998fc8649481b73a64bfb1b42caa10":"./icon_512x512.4237ff215d625915fe2d1fb0fded2f95.png","b6e12086aa680b15610afb7734d7c3006069fc38":"./icon_256x256.79d468a5711b83b803881b496a31c5ac.png","33f0a1aa9a12a30d580a6c99ea12f17efdad9f64":"./icon_192x192.98dfe72f30ec52720db8b2ef49e85259.png","e71bac48950f64ce6fb3fc4f6e6ab54f6118b7df":"./icon_144x144.ca393a0636d2591a55020684ea22b925.png","4460a7450571ac225eb7ad5f55a424e6841494f4":"./icon_128x128.715c4acaa67ff4a3e8af599ea9c2b349.png","f4d12426b7930f5bf73bb3928e064a2318471a81":"./icon_96x96.405fe2081b5ac3d6690bc95ca5582f83.png"},"strategy":"changed","responseStrategy":"cache-first","version":"2017-6-26 17:34:01","name":"webpack-offline","pluginVersion":"4.8.1","relativePaths":true};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s="./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22loaders%22%3A%5B%5D%2C%22cacheMaps%22%3A%5B%5D%7D!./node_modules/offline-plugin/tpls/empty-entry.js")}({"./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22loaders%22%3A%5B%5D%2C%22cacheMaps%22%3A%5B%5D%7D!./node_modules/offline-plugin/tpls/empty-entry.js":function(e,n,t){"use strict";function r(e,n){return caches.match(e,{cacheName:n}).then(function(t){return a()?t:c(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function o(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function i(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function a(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function c(e){return a(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function u(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===f)var f=!1;!function(e,n){function t(){if(!R.additional.length)return Promise.resolve();f&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===k?l("additional"):a("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function a(n){var t=R[n];return caches.open(j).then(function(n){return y(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){u("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function l(n){return d().then(function(t){if(!t)return a(n);var r=t[0],o=t[1],i=t[2],c=i.hashmap,s=i.version;if(!i.hashmap||s===e.version)return a(n);var f=Object.keys(c).map(function(e){return c[e]}),l=o.map(function(e){var n=new URL(e.url);return n.search="",n.toString()}),h=R[n],d=[],p=h.filter(function(e){return-1===l.indexOf(e)||-1===f.indexOf(e)});Object.keys(U).forEach(function(e){var n=U[e];if(-1!==h.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=c[e];t&&-1!==l.indexOf(t)?d.push([t,n]):p.push(n)}}),u("Changed assets: "+n,p),u("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(j).then(function(n){var t=v.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,y(n,p,{bust:e.version,request:e.prefetchRequest})])})})}function h(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(L)&&0!==e.indexOf(j))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function d(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(L)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(q,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function p(){return caches.open(j).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:U}));return n.put(new URL(q,location).toString(),t)})}function v(e,n,t){return r(t,j).then(function(r){return r?(f&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(f&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=r.clone(),o=caches.open(j).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):(f&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r)})})}function m(e,n,t){return fetch(e.request).then(function(e){if(e.ok)return f&&console.log("[SW]:","URL ["+n+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return f&&console.log("[SW]:","URL ["+n+"] from cache if possible"),r(t,j)})}function g(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!A?e:(f&&console.log("[SW]:","Loading navigation fallback ["+C+"] from cache"),r(C,j))})}function y(e,n,t){var r=!1!==t.allowLoaders,i=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return i&&(e=o(e,i)),fetch(e,a).then(c)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(w(n[o],t)),e.put(n[o],t)});return i.length?function(){var r=s(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return n.length&&(o=o.concat(y(e,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function w(e,n){var t=Object.keys(S).map(function(t){if(-1!==S[t].indexOf(e)&&O[t])return O[t](n.clone())}).filter(function(e){return!!e});return Promise.all(t).then(function(e){return[].concat.apply([],e)})}function x(e){var n=e.url,t=new URL(n),r=void 0;r="navigate"===e.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<b.length;o++){var i=b[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var a=void 0;if((a="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to))&&a!==n)return a}}}var O=n.loaders,b=n.cacheMaps,k=e.strategy,_=e.responseStrategy,R=e.assets,S=e.loaders||{},U=e.hashesMap,W=e.externals,L=e.name,P=e.version,j=L+":"+P,q="__offline_webpack__data";!function(){Object.keys(R).forEach(function(e){R[e]=R[e].map(function(e){var n=new URL(e,location);return-1===W.indexOf(e)?n.search="":n.hash="",n.toString()})}),Object.keys(S).forEach(function(e){S[e]=S[e].map(function(e){var n=new URL(e,location);return-1===W.indexOf(e)?n.search="":n.hash="",n.toString()})}),U=Object.keys(U).reduce(function(e,n){var t=new URL(U[n],location);return t.search="",e[n]=t.toString(),e},{}),W=W.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}();var E=[].concat(R.main,R.additional,R.optional),C=e.navigateFallbackURL,A=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===k?l("main"):a("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(p),n=n.then(h),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=e.request.url,t=new URL(n),r=void 0;-1!==W.indexOf(n)?r=n:(t.search="",r=t.toString());var o="GET"===e.request.method,a=-1!==E.indexOf(r),c=r;if(!a){var s=x(e.request);s&&(c=s,a=!0)}if(!a&&o&&C&&i(e.request))return void e.respondWith(g(fetch(e.request)));if(!a||!o)return void(t.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var u=void 0;u="network-first"===_?m(e,r,c):v(e,r,c),C&&i(e.request)&&(u=g(u)),e.respondWith(u)}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[]}),e.exports=t("./node_modules/offline-plugin/tpls/empty-entry.js")},"./node_modules/offline-plugin/tpls/empty-entry.js":function(e,n){}});