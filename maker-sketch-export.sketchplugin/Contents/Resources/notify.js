!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";function r(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error";"function"==typeof(window.bugsnagClient||{}).notify&&window.bugsnagClient.notify(n,{metaData:e,severity:t})}function o(n){window.bugsnag&&!window.bugsnagClient&&(window.bugsnagClient=window.bugsnag({apiKey:"1bd033bfc4436b5fc6373f9cbad1be23",appVersion:n.config.versions.plugin,autoNotify:!1}))}t.r(e),t.d(e,"default",function(){return r}),t.d(e,"setupBugsnag",function(){return o})}]);