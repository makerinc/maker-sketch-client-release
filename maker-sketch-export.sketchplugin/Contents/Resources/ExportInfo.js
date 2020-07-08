!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";var r=n(2),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,u,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[n,r,o,a,u,l],c=0;(e=Error(t.replace(/%s/g,function(){return i[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function x(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||h}function S(){}function _(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=x.prototype;var j=_.prototype=new S;j.constructor=_,r(j,x.prototype),j.isPureReactComponent=!0;var w={current:null},O={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},u=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:O.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,M=[];function I(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function U(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case u:i=!0}}if(i)return r(o,t,""===n?"."+A(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=n+A(l=t[c],c);i+=e(l,f,r,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),c=0;!(l=t.next()).done;)i+=e(l=l.value,f=n+A(l,c++),r,o);else"object"===l&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return i}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,r,n,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function T(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),U(e,F,t=I(t,a,r,o)),N(t)}function q(){var e=w.current;return null===e&&b("321"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return T(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;U(e,D,t=I(null,null,t,n)),N(t)},count:function(e){return U(e,function(){return null},null)},toArray:function(e){var t=[];return T(e,t,null,function(e){return e}),t},only:function(e){return $(e)||b("143"),e}},createRef:function(){return{current:null}},Component:x,PureComponent:_,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:l,StrictMode:i,Suspense:y,createElement:P,cloneElement:function(e,t,n){null==e&&b("267",e);var o=void 0,u=r({},e.props),l=e.key,i=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,c=O.current),void 0!==t.key&&(l=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)k.call(t,o)&&!C.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))u.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:a,type:e.type,key:l,ref:i,props:u,_owner:c}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentOwner:O,assign:r}},B={default:L},V=B&&L||B;e.exports=V.default||V},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,i=u(e),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))o.call(n,f)&&(i[f]=n[f]);if(r){l=r(n);for(var s=0;s<l.length;s++)a.call(n,l[s])&&(i[l[s]]=n[l[s]])}}return i}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);var a="idle",u="gathering",l="fetching_upload_links",i="exporting",c="uploadingDoc",f="uploadingImages",s="error",p="finalizing",d="UPLOADING_SKETCH_FILE";function y(e){var t=["Button"];return e.secondary&&t.push("Button--secondary"),e.inline&&t.push("Button--inline"),e.disabled&&t.push("Button--disabled"),o.a.createElement("a",{onClick:function(t){e.start?window.execNative("startExport"):e.onClick(t)},className:t.join(" "),style:e.style},e.children)}function m(e){var t=e.state,n=e.config;switch(t.value){case a:return o.a.createElement(y,{start:!0},"Start Export");case u:return o.a.createElement(g,{step:1},o.a.createElement("p",null,"Gathering document tree..."));case i:return o.a.createElement(g,{step:2},o.a.createElement("p",null,"Exporting images: ",t.exportingImages.kind.toUpperCase()));case c:return o.a.createElement(g,{step:3},o.a.createElement("p",null,"Uploading document..."));case l:return o.a.createElement(g,{step:4},o.a.createElement("p",null,"Fetching upload links..."));case f:return o.a.createElement(g,{step:5},o.a.createElement("p",null,"Uploading images: ",t.uploadingImagesCounter," remaining"));case p:return o.a.createElement(g,{step:6},o.a.createElement("p",null,"Finalizing image upload..."));case d:return o.a.createElement(g,{step:7},o.a.createElement("p",null,"Uploading Sketch file..."));case s:var r=t.errorDuringExport,m="warning";return"string"==typeof r.extra&&r.extra.match(/^Missing fonts: /)&&(r.message="Missing fonts",r.extra=r.extra.replace(/^Missing fonts: /,""),m="info"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error";"function"==typeof(window.bugsnagClient||{}).notify&&window.bugsnagClient.notify(e,{metaData:t,severity:n})}(new Error(r.message),{extra:r.extra,versions:n.versions},m),"Missing fonts"===r.message?o.a.createElement("div",null,o.a.createElement("h1",null,"Install these missing fonts on your computer:"),o.a.createElement("p",null,r.extra),o.a.createElement("br",null),o.a.createElement("p",null,"Close Sketch and install the fonts or..."),o.a.createElement(y,{style:{margin:"15px auto"},start:!0},"Export Anyway"),o.a.createElement("p",{className:"small"},"Export can still be completed and the missings fonts",o.a.createElement("br",null),"can be changed in the Maker editor.")):o.a.createElement("div",null,o.a.createElement("p",{className:"danger"},r.message),o.a.createElement("p",null,r.extra),o.a.createElement("br",null),o.a.createElement(y,{start:!0},"Retry Export"));default:return o.a.createElement("p",{className:"danger"},"Invalid exportState: ",JSON.stringify(t,null,2))}}function g(e){var t=e.step,n=e.children;return o.a.createElement("div",null,o.a.createElement("h1",null,"Exporting (",t,"/7)",o.a.createElement("img",{src:"../spinner.gif"})),n)}n.d(t,"default",function(){return m})}]);