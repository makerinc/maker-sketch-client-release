!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";var r=n(2),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,u,i,l],a=0;(e=Error(t.replace(/%s/g,function(){return c[a++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function _(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}function j(){}function O(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=_.prototype;var w=O.prototype=new j;w.constructor=O,r(w,_.prototype),w.isPureReactComponent=!0;var k={current:null},x={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r=void 0,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:u,type:e,key:i,ref:l,props:o,_owner:x.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,M=[];function I(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case i:c=!0}}if(c)return r(o,t,""===n?"."+U(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=n+U(l=t[a],a);c+=e(l,f,r,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=b&&t[b]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),a=0;!(l=t.next()).done;)c+=e(l=l.value,f=n+U(l,a++),r,o);else"object"===l&&h("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,r,n,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function T(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),A(e,L,t=I(t,u,r,o)),N(t)}function B(){var e=k.current;return null===e&&h("321"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return T(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,q,t=I(null,null,t,n)),N(t)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var t=[];return T(e,t,null,function(e){return e}),t},only:function(e){return $(e)||h("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,n){return B().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,n){return B().useReducer(e,t,n)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:l,StrictMode:c,Suspense:d,createElement:C,cloneElement:function(e,t,n){null==e&&h("267",e);var o=void 0,i=r({},e.props),l=e.key,c=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,a=x.current),void 0!==t.key&&(l=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)E.call(t,o)&&!P.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];i.children=f}return{$$typeof:u,type:e.type,key:l,ref:c,props:i,_owner:a}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:a,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:x,assign:r}},V={default:F},D=V&&F||V;e.exports=D.default||D},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),a=1;a<arguments.length;a++){for(var f in n=Object(arguments[a]))o.call(n,f)&&(c[f]=n[f]);if(r){l=r(n);for(var s=0;s<l.length;s++)u.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function u(e){var t=["Button"];return e.secondary&&t.push("Button--secondary"),e.inline&&t.push("Button--inline"),e.disabled&&t.push("Button--disabled"),o.a.createElement("a",{onClick:function(t){e.start?window.execNative("startExport"):e.onClick(t)},className:t.join(" "),style:e.style},e.children)}var i="idle";var l="LoggedIn";function c(e){var t=e.viewState;if(t.login.value!==l)return null;var n=t.export.value!==i,r=t.login.loggedIn.signedInUser;return o.a.createElement("div",{className:"Logout"},o.a.createElement("p",null,r.email,o.a.createElement("br",null),o.a.createElement(u,{onClick:function(){n||window.execNative("logout")},disabled:n,secondary:!0,inline:!0},"Sign-out")))}function a(e){return o.a.createElement("div",{className:"Header"},o.a.createElement("img",{src:"../logo.png",width:80,height:38,className:"Header-logo",alt:"Maker"}),o.a.createElement(c,e))}n.d(t,"default",function(){return a})}]);