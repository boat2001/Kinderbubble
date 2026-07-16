var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var ee=!1,S=-1,C=5,w=-1;function T(){return g?!0:!(e.unstable_now()-w<C)}function te(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():ee=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,E()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case T:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return ke.call(Pt,e)?!0:ke.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),j=h({},On,{view:0,detail:0}),An=Dn(j),jn,Mn,Nn,Pn=h({},j,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=Dn(Pn),In=Dn(h({},Pn,{dataTransfer:0})),Ln=Dn(h({},j,{relatedTarget:0})),Rn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=Dn(h({},On,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=Dn(h({},j,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=Dn(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=Dn(h({},j,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=Dn(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=Dn(h({},On,{newState:0,oldState:0})),M=[9,13,27,32],N=_n&&`CompositionEvent`in window,Qn=null;_n&&`documentMode`in document&&(Qn=document.documentMode);var $n=_n&&`TextEvent`in window&&!Qn,er=_n&&(!N||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return M.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!N&&rr(e,t)?(e=Cn(),Sn=xn=bn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Ut(Et(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(_n){var _r;if(_n){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,un(e)),hn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=_n&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Wt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};_n&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),P=Wr(`transitionrun`),Jr=Wr(`transitionstart`),Yr=Wr(`transitioncancel`),Xr=Wr(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),At(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=fi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case w:return e=fi(13,n,t,a),e.elementType=w,e.lanes=o,e;case T:return e=fi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-Ke(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,F=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Li=Li.return}}function Wi(e){if(e!==Li)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&F&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else t===27?(t=F,Zd(e.type)?(e=lf,lf=null,F=e):F=t):F=Li?cf(e.stateNode.nextSibling):null;return!0}function Gi(){F=Li=null,I=!1}function Ki(){var e=Ri;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ri=null),e}function qi(e){Ri===null?Ri=[e]:Ri.push(e)}var Ji=fe(null),Yi=null,Xi=null;function Zi(e,t,n){k(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,pe(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,L={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new sa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=D.S;D.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=fe(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?k(ba,ba.current):k(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:L._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case E:return t=Aa(t),f(e,t,n)}if(ce(t)||ae(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===S)return f(e,aa(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Aa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===S)return p(e,t,aa(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Aa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===S)return m(e,t,n,aa(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Aa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===S)return b(e,r,aa(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=fe(null),to=fe(0);function no(e,t){e=Wl,k(to,e),k(eo,t),Wl=e|t.baseLanes}function ro(){k(to,Wl),k(eo,eo.current)}function io(){Wl=to.current,pe(eo),pe(to)}var ao=fe(null),oo=null;function so(e){var t=e.alternate;k(R,R.current&1),k(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){k(R,R.current),k(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(k(R,R.current),k(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){k(R,R.current),k(ao,ao.current)}function fo(e){pe(ao),oo===e&&(oo=null),pe(R)}var R=fe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){D.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&na(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return ia(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Go(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(I){var n=K.formState;if(n!==null){a:{var r=z;if(I){if(F){b:{for(var i=F,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Dr(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Dr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ia(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return ai(e,t,i,0),K===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var zs={readContext:ia,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ia,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(I){var n=ji,r=Ai;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ei(e)}function Ys(e){console.error(e)}function Xs(e){ei(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(I)return t=ao.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&s&&Pi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:L._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,F=cf(s.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=fc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ra(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Gi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(R.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(I){if(a?so(t):uo(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=cf(c.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=L._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(R,o),ac(e,t,r,n),r=I?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&na(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Zi(t,L,e.memoizedState.cache),Gi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Zi(t,L,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,I&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,L,r),r!==o.cache&&ea(t,[L],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Si(Error(i(424)),t),qi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=cf(e.firstChild),Li=t,I=!0,Ri=null,zi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Li=t,zi=!0,a=F,Zd(t.type)?(lf=a,F=cf(r.firstChild)):F=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Li=t,F=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Li=t,F=null,e=!0)),e||Vi(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(L),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Zi(t,L,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,L,r),r!==a.cache&&ea(t,[L],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,L,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(L),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,Wi(t))Hi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Qi(t.type),U(t),null;case 19:if(pe(R),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return k(R,R.current&1|2),I&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return U(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=R.current,k(R,a?n&1|2:n&1),I&&Mi(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(L),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(L),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(R),null;case 4:return ye(),null;case 10:return Qi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&pe(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(L),null;case 25:return null;default:return null}}function Vc(e,t){switch(Fi(t),t.tag){case 3:Qi(L),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:pe(R);break;case 10:Qi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&pe(ba);break;case 24:Qi(L)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,A(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,A(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ia(L),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(L).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?ft():dd()}function mu(){if(Jl===0)if(!(J&536870912)||I){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Pe(),10<a)){if(yu(r,t,Jl,!Vl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Ml(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Xi=Yi=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=mi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ii(),n}function Cu(e,t){z=null,D.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,Si(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,ii()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Pe()+500,Su(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Xi=Yi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,ii(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=hi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Xi=Yi=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,Si(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,Si(n,e.current)),q=null;return}t.flags&32768?(I||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Si(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Si(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Pe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=si(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Gr,`onAnimationEnd`),$r(Kr,`onAnimationIteration`),$r(qr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(P,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Gr:case Kr:case qr:l=Rn;break;case Xr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(N)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,A(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),A(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,A(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),A(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=`popstate`;function S(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function C(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ne(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:re(t)}return ae(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function E(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ie(t):t,state:n,key:t&&t.key||r||te(),unstable_mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ie(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=S(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=E(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=S(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=E(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return oe(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function oe(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:re(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function se(e,t,n=`/`){return ce(e,t,n,!1)}function ce(e,t,n,r){let i=Ce((typeof t==`string`?ie(t):t).pathname||`/`,n);if(i==null)return null;let a=O(e);ue(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Se(i);o=ye(a[e],t,r)}return o}function D(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function O(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Me([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),O(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:_e(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of le(e.path))a(e,t,!0,n)}),t}function le(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=le(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ue(e){e.sort((e,t)=>e.score===t.score?ve(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,fe=3,pe=2,k=1,me=10,he=-2,ge=e=>e===`*`;function _e(e,t){let n=e.split(`/`),r=n.length;return n.some(ge)&&(r+=he),t&&(r+=pe),n.filter(e=>!ge(e)).reduce((e,t)=>e+(de.test(t)?fe:t===``?k:me),r)}function ve(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ye(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Me([a,u.pathname]),pathnameBase:Pe(Me([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Me([a,u.pathnameBase]))}return o}function be(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function xe(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Se(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ce(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var we=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Te(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ie(e):e,a;return n?(n=je(n),a=n.startsWith(`/`)?Ee(n.substring(1),`/`):Ee(n,t)):a=t,{pathname:a,search:Fe(r),hash:Ie(i)}}function Ee(e,t){let n=Ne(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function De(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ke(e){let t=Oe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ae(e,t,n,r=!1){let i;typeof e==`string`?i=ie(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),De(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),De(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),De(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Te(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var je=e=>e.replace(/\/\/+/g,`/`),Me=e=>je(e.join(`/`)),Ne=e=>e.replace(/\/+$/,``),Pe=e=>Ne(e).replace(/^\/*/,`/`),Fe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ie=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Le=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Re(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ze(e){return Me(e.map(e=>e.route.path).filter(Boolean))||`/`}var Be=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ve(e,t){let n=e;if(typeof n!=`string`||!we.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Be)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ce(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var He=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(He);var Ue=[`GET`,...He];new Set(Ue);var We=x.createContext(null);We.displayName=`DataRouter`;var Ge=x.createContext(null);Ge.displayName=`DataRouterState`;var Ke=x.createContext(!1);function qe(){return x.useContext(Ke)}var Je=x.createContext({isTransitioning:!1});Je.displayName=`ViewTransition`;var Ye=x.createContext(new Map);Ye.displayName=`Fetchers`;var Xe=x.createContext(null);Xe.displayName=`Await`;var Ze=x.createContext(null);Ze.displayName=`Navigation`;var Qe=x.createContext(null);Qe.displayName=`Location`;var $e=x.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=x.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Le(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){w(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(Ze),{hash:i,pathname:a,search:o}=mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Me([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return x.useContext(Qe)!=null}function ct(){return w(st(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){x.useContext(Ze).static||x.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=x.useContext($e);return e?Mt():ft()}function ft(){w(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(We),{basename:t,navigator:n}=x.useContext(Ze),{matches:r}=x.useContext($e),{pathname:i}=ct(),a=JSON.stringify(ke(r)),o=x.useRef(!1);return ut(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(T(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ae(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Me([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function pt(){let{matches:e}=x.useContext($e);return e[e.length-1]?.params??{}}function mt(e,{relative:t}={}){let{matches:n}=x.useContext($e),{pathname:r}=ct(),i=JSON.stringify(ke(n));return x.useMemo(()=>Ae(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ht(e,t){return gt(e,t)}function gt(e,t,n){w(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(Ze),{matches:i}=x.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Pt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?ie(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=se(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ct(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Me([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Me([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function _t(){let e=jt(),t=Re(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var vt=x.createElement(_t,null),yt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement($e.Provider,{value:this.props.routeContext},x.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(xt,{error:e},t):t}};yt.contextType=Ke;var bt=new WeakMap;function xt({children:e,error:t}){let{basename:n}=x.useContext(Ze);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=bt.get(t);if(r)throw r;let i=Ve(e.location,n);if(Be&&!bt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw bt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function St({routeContext:e,match:t,children:n}){let r=x.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement($e.Provider,{value:e},n)}function Ct(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:ze(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||vt,o&&(s<0&&c===0?(Pt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(St,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(yt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tt(e){let t=x.useContext(We);return w(t,wt(e)),t}function Et(e){let t=x.useContext(Ge);return w(t,wt(e)),t}function Dt(e){let t=x.useContext($e);return w(t,wt(e)),t}function A(e){let t=Dt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ot(){return A(`useRouteId`)}function kt(){return Et(`useNavigation`).navigation}function At(){let{matches:e,loaderData:t}=Et(`useMatches`);return x.useMemo(()=>e.map(e=>D(e,t)),[e,t])}function jt(){let e=x.useContext(et),t=Et(`useRouteError`),n=A(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Mt(){let{router:e}=Tt(`useNavigate`),t=A(`useNavigate`),n=x.useRef(!1);return ut(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{T(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Nt={};function Pt(e,t,n){!t&&!Nt[e]&&(Nt[e]=!0,T(!1,n))}x.memo(Ft);function Ft({routes:e,future:t,state:n,isStatic:r,onError:i}){return gt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function It(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Lt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ie(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=x.useMemo(()=>{let e=Ce(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(Ze.Provider,{value:c},x.createElement(Qe.Provider,{children:t,value:h}))}function Rt({children:e,location:t}){return ht(zt(e),t)}x.Component;function zt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,zt(e.props.children,i));return}w(e.type===It,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=zt(e.props.children,i)),n.push(a)}),n}var Bt=`get`,Vt=`application/x-www-form-urlencoded`;function Ht(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ut(e){return Ht(e)&&e.tagName.toLowerCase()===`button`}function Wt(e){return Ht(e)&&e.tagName.toLowerCase()===`form`}function Gt(e){return Ht(e)&&e.tagName.toLowerCase()===`input`}function Kt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qt(e,t){return e.button===0&&(!t||t===`_self`)&&!Kt(e)}var Jt=null;function Yt(){if(Jt===null)try{new FormData(document.createElement(`form`),0),Jt=!1}catch{Jt=!0}return Jt}var Xt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Zt(e){return e!=null&&!Xt.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vt}"`),null):e}function Qt(e,t){let n,r,i,a,o;if(Wt(e)){let o=e.getAttribute(`action`);r=o?Ce(o,t):null,n=e.getAttribute(`method`)||Bt,i=Zt(e.getAttribute(`enctype`))||Vt,a=new FormData(e)}else if(Ut(e)||Gt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ce(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Bt,i=Zt(e.getAttribute(`formenctype`))||Zt(o.getAttribute(`enctype`))||Vt,a=new FormData(o,e),!Yt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ht(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Bt,r=null,i=Vt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var $t={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},en=/[&><\u2028\u2029]/g;function tn(e){return e.replace(en,e=>$t[e])}function nn(e,t){if(e===!1||e==null)throw Error(t)}function rn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ce(i.pathname,t)===`/`?i.pathname=`${Ne(t)}/_root.${r}`:i.pathname=`${Ne(i.pathname)}.${r}`,i}async function an(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function on(e){return e!=null&&typeof e.page==`string`}function sn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function cn(e,t,n){return pn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await an(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(sn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function ln(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function un(e,t,{includeHydrateFallback:n}={}){return dn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function dn(e){return[...new Set(e)]}function fn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function pn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!on(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(fn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function mn(){let e=x.useContext(We);return nn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function hn(){let e=x.useContext(Ge);return nn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var gn=x.createContext(void 0);gn.displayName=`FrameworkContext`;function _n(){let e=x.useContext(gn);return nn(e,`You must render this element inside a <HydratedRouter> element`),e}function vn(e,t){let n=x.useContext(gn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:yn(s,p),onBlur:yn(c,m),onMouseEnter:yn(l,p),onMouseLeave:yn(u,m),onTouchStart:yn(d,p)}]:[a,f,{}]:[!1,f,{}]}function yn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function bn({page:e,...t}){let n=qe(),{router:r}=mn(),i=x.useMemo(()=>se(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(Sn,{page:e,matches:i,...t}):x.createElement(Cn,{page:e,matches:i,...t}):null}function xn(e){let{manifest:t,routeModules:n}=_n(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return cn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Sn({page:e,matches:t,...n}){let r=ct(),{future:i}=_n(),{basename:a}=mn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=rn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Cn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=_n(),{basename:s}=mn(),{loaderData:c,matches:l}=hn(),u=x.useMemo(()=>ln(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>ln(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=rn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>un(d,a),[d,a]),m=xn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function wn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Tn&&(window.__reactRouterVersion=`7.14.2`)}catch{}function En({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=x.useRef();i.current??=C({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Lt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Dn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Lt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Dn.displayName=`unstable_HistoryRouter`;var On=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=x.useContext(Ze),v=typeof l==`string`&&On.test(l),y=Ve(l,h);l=y.to;let b=ot(l,{relative:r}),ee=ct(),S=null;if(o){let e=Ae(o,[],ee.unstable_mask?ee.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Me([h,e.pathname])),S=g.createHref(e)}let[C,w,T]=vn(n,p),te=Fn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||te(t)}let ne=!(y.isExternal||i),re=x.createElement(`a`,{...p,...T,href:(ne?S:void 0)||y.absoluteURL||b,onClick:ne?E:e,ref:wn(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?x.createElement(x.Fragment,null,re,x.createElement(bn,{page:b})):re});kn.displayName=`Link`;var j=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=mt(a,{relative:c.relative}),d=ct(),f=x.useContext(Ge),{navigator:p,basename:m}=x.useContext(Ze),h=f!=null&&Gn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ce(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,w;w=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(S):i;return x.createElement(kn,{...c,"aria-current":C,className:w,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(S):s)});j.displayName=`NavLink`;var An=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Bt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=x.useContext(Ze),g=Rn(),_=zn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&On.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});An.displayName=`Form`;function jn({getKey:e,storageKey:t,...n}){let r=x.useContext(gn),{basename:i}=x.useContext(Ze),a=ct(),o=At();Un({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Hn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${tn(JSON.stringify(t||Bn))}, ${tn(JSON.stringify(s))})`}})}jn.displayName=`ScrollRestoration`;function Mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nn(e){let t=x.useContext(We);return w(t,Mn(e)),t}function Pn(e){let t=x.useContext(Ge);return w(t,Mn(e)),t}function Fn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=dt(),d=ct(),f=mt(e,{relative:o});return x.useCallback(p=>{if(qt(p,t)){p.preventDefault();let t=n===void 0?re(d)===re(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var In=0,Ln=()=>`__${String(++In)}__`;function Rn(){let{router:e}=Nn(`useSubmit`),{basename:t}=x.useContext(Ze),n=Ot(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Qt(e,t);a.navigate===!1?await r(a.fetcherKey||Ln(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function zn(e,{relative:t}={}){let{basename:n}=x.useContext(Ze),r=x.useContext($e);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...mt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Me([n,a.pathname])),re(a)}var Bn=`react-router-scroll-positions`,Vn={};function Hn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ce(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Un({getKey:e,storageKey:t}={}){let{router:n}=Nn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Pn(`useScrollRestoration`),{basename:a}=x.useContext(Ze),o=ct(),s=At(),c=kt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Wn(x.useCallback(()=>{if(c.state===`idle`){let t=Hn(o,s,a,e);Vn[t]=window.scrollY}try{sessionStorage.setItem(t||Bn,JSON.stringify(Vn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Bn);e&&(Vn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Vn,()=>window.scrollY,e?(t,n)=>Hn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Wn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Gn(e,{relative:t}={}){let n=x.useContext(Je);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nn(`useViewTransitionState`),i=mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ce(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ce(n.nextLocation.pathname,r)||n.nextLocation.pathname;return be(i.pathname,o)!=null||be(i.pathname,a)!=null}var Kn=g(),qn=`<div class="page-title light-background">
  <div class="container d-lg-flex justify-content-between align-items-center">
    <h1 class="mb-2 mb-lg-0">About KinderBubble</h1>
    <nav class="breadcrumbs">
      <ol>
        <li><a href="/">Home</a></li>
        <li class="current">About</li>
      </ol>
    </nav>
  </div>
</div>

<section id="history" class="history section kb-about-redesign">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="kb-about-hero row g-4 align-items-stretch">
      <div class="col-lg-6">
        <div class="kb-page-hero-copy">
          <p class="kb-kicker">Ducem Scientia</p>
          <h2>Children should be happy, healthy, safe, and inspired to learn.</h2>
          <p>Kinder Bubble International School is one step in a child's lifelong learning journey. We are a caring place where children and adults make valuable contributions, think for themselves, and grow confident enough to meet new challenges.</p>
          <div class="kb-about-actions">
            <a href="/about/mission-vision" class="btn btn-primary">Mission &amp; vision</a>
            <a href="/parents/plan-a-visit" class="btn btn-outline-primary">Plan a visit</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="kb-about-collage">
          <img src="/assets/images/students/three-children-smiling-uniforms.jpeg" alt="KBIS learners smiling" loading="lazy">
          <img src="/assets/images/learning/teacher-guided-table-activity.jpeg" alt="Teacher guiding learning" loading="lazy">
          <img src="/assets/images/extra-curricular/children-playing-with-ball.jpeg" alt="Children playing outdoors" loading="lazy">
        </div>
      </div>
    </div>

    <div class="row g-4 mt-5">
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <article class="kb-statement-card kb-statement-card--teal h-100" data-href="/academics/curriculum">
          <i class="bi bi-mortarboard-fill"></i>
          <h3>Curriculum</h3>
          <p>We follow the Cambridge International Curriculum with English-French bilingual exposure and practical daily routines.</p>
          <a href="/academics/curriculum">Explore curriculum</a>
        </article>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="180">
        <article class="kb-statement-card kb-statement-card--coral h-100" data-href="/student-life/extra-curricular">
          <i class="bi bi-stars"></i>
          <h3>Whole-child growth</h3>
          <p>Play, movement, arts, cultural days, educational trips, and calm routines help children grow socially and emotionally.</p>
          <a href="/student-life/extra-curricular">Student life</a>
        </article>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="260">
        <article class="kb-statement-card kb-statement-card--green h-100" data-href="/resources/policies">
          <i class="bi bi-shield-check"></i>
          <h3>Safety and care</h3>
          <p>Health, allergies, food, authorised pick-up, attendance, and family communication are handled with clear procedures.</p>
          <a href="/resources/policies">Family policies</a>
        </article>
      </div>
    </div>

    <div class="kb-about-story row g-5 align-items-center mt-5">
      <div class="col-lg-5" data-aos="fade-right">
        <div class="kb-about-image-frame">
          <img src="/assets/images/learning/students-smiling-at-computers.jpeg" alt="KBIS learners in computer class" loading="lazy">
        </div>
      </div>
      <div class="col-lg-7" data-aos="fade-left">
        <p class="kb-kicker">Our story</p>
        <h2>Known by name, stretched with care.</h2>
        <p>KBIS prides itself on the quality of its educational programmes, the professionalism of staff, the enthusiasm of students, and the support provided by parents and the wider community.</p>
        <p>We provide a safe, caring environment where children can thrive personally, socially, spiritually, physically, academically, and creatively.</p>
        <div class="kb-about-stat-row">
          <span><strong>5</strong> programme bands</span>
          <span><strong>2</strong> languages</span>
          <span><strong>1</strong> caring campus</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="leadership" class="leadership section kb-about-leadership">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row g-4 align-items-stretch">
      <div class="col-lg-5">
        <div class="kb-page-hero-image">
          <img src="/assets/images/others/staff-member-at-desk.jpg" alt="KBIS principal and leadership" loading="lazy">
        </div>
      </div>
      <div class="col-lg-7">
        <div class="kb-page-hero-copy">
          <p class="kb-kicker">Principal</p>
          <h2>Ms. Delphina Naa Lomoley Lomotey</h2>
          <p class="kb-leadership-lead">26+ years in education—leading KBIS with respect, kindness, and academic excellence.</p>
          <div class="kb-quote-panel">
            <p>We are a vibrant community dedicated to providing a nurturing and stimulating learning environment for our students.</p>
          </div>
          <div class="kb-about-actions mt-4">
            <a href="/about/principal" class="btn btn-primary">Principal page</a>
            <a href="/about/board-of-directors" class="btn btn-outline-primary">Board of directors</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 mt-5">
      <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
        <article class="kb-rich-card h-100" data-href="/about/staff/teaching">
          <img src="/assets/images/learning/teacher-with-small-class.jpeg" alt="Teaching team" loading="lazy">
          <div class="kb-rich-card-body"><span>Team</span><h3>Teaching staff</h3><p>Classroom educators who guide literacy, numeracy, creativity, and bilingual exposure.</p><a href="/about/staff/teaching">Meet teachers</a></div>
        </article>
      </div>
      <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="180">
        <article class="kb-rich-card h-100" data-href="/about/management">
          <img src="/assets/images/students/two-students-in-formal-uniforms.jpeg" alt="Management" loading="lazy">
          <div class="kb-rich-card-body"><span>Leadership</span><h3>Management</h3><p>Daily operations, admissions support, and school culture leadership.</p><a href="/about/management">View management</a></div>
        </article>
      </div>
      <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="260">
        <article class="kb-rich-card h-100" data-href="/news/partnerships">
          <img src="/assets/images/others/global-school-alliance-certificate.png" alt="Global School Alliance" loading="lazy">
          <div class="kb-rich-card-body"><span>Global</span><h3>Partnerships</h3><p>Global School Alliance and sister-school links enrich the learning experience.</p><a href="/news/partnerships">Partnerships</a></div>
        </article>
      </div>
      <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="340">
        <article class="kb-rich-card h-100" data-href="/contact">
          <img src="/assets/images/facilities/school-building-aerial-view.jpeg" alt="KBIS campus" loading="lazy">
          <div class="kb-rich-card-body"><span>Visit</span><h3>Spintex campus</h3><p>See classrooms, play spaces, and the rhythm of the school day in person.</p><a href="/contact">Contact us</a></div>
        </article>
      </div>
    </div>
  </div>
</section>
`,Jn=`

    <!-- Page Title -->
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Academics</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Academics</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Academics Section -->
    <section id="academics" class="academics section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row mb-5 align-items-stretch">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div class="section-intro pe-lg-5">
              <h3 class="section-heading">Learning that meets children where they are</h3>
              <p class="lead">From creche through primary, teachers weave language arts, mathematics, science, creative arts, movement, and handwriting into age-right routines — with space for curiosity every day.</p>
              <p>Cambridge expectations anchor planning while lessons flex for bilingual exposure (English and French) and the social-emotional pace of young learners.</p>
              <div class="cta-buttons mt-4">
                <a href="/admissions" class="btn btn-primary me-3">Plan a visit</a>
                <a href="/contact" class="btn btn-outline">Talk to admissions</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="row key-metrics g-4">
              <div class="col-6">
                <div class="metric-card">
                  <h2>5</h2>
                  <p>Programme bands on one campus</p>
                </div>
              </div>
              <div class="col-6">
                <div class="metric-card">
                  <h2>2</h2>
                  <p>Languages in the daily rhythm</p>
                </div>
              </div>
              <div class="col-6">
                <div class="metric-card">
                  <h2>12h</h2>
                  <p>Full day care window for families</p>
                </div>
              </div>
              <div class="col-6">
                <div class="metric-card">
                  <h2>1</h2>
                  <p>Spintex Road campus, Accra</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="programs-section mb-5">
          <div class="section-header text-center mb-5" data-aos="fade-up" data-aos-delay="200">
            <h3>Programmes by age</h3>
            <p>Each stage has its own caring rhythm — with a clear pathway into the next.</p>
          </div>

          <div class="row gy-4 justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-4 col-md-6">
              <div class="program-card h-100">
                <div class="program-img">
                  <img src="/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg" alt="Creche learners in a bright KBIS space" class="img-fluid" loading="lazy">
                  <div class="program-tag">Early years</div>
                </div>
                <div class="program-content">
                  <h4>Creche (6 mo – 2 yr)</h4>
                  <p>Warm routines, sensory play, and trusted adults so your little one feels secure from day one.</p>
                  <div class="program-meta">
                    <div class="meta-item"><i class="bi bi-balloon-heart-fill"></i><span>Nurturing care</span></div>
                    <div class="meta-item"><i class="bi bi-clock-fill"></i><span>Full day option</span></div>
                  </div>
                  <a href="/admissions" class="program-link">Admissions <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="program-card h-100">
                <div class="program-img">
                  <img src="/assets/images/students/formal-uniform-students-kbis-01.jpeg" alt="Nursery children exploring at KBIS" class="img-fluid" loading="lazy">
                  <div class="program-tag">Early years</div>
                </div>
                <div class="program-content">
                  <h4>Nursery (2 – 3)</h4>
                  <p>Language blooms through stories, songs, and play — indoors and on safe outdoor equipment.</p>
                  <div class="program-meta">
                    <div class="meta-item"><i class="bi bi-translate"></i><span>Bilingual exposure</span></div>
                    <div class="meta-item"><i class="bi bi-tree"></i><span>Movement daily</span></div>
                  </div>
                  <a href="/admissions" class="program-link">Admissions <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="program-card h-100">
                <div class="program-img">
                  <img src="/assets/images/students/girl-in-orange-uniform-kbis-03.jpeg" alt="Kindergarten learners at KBIS" class="img-fluid" loading="lazy">
                  <div class="program-tag">Foundation</div>
                </div>
                <div class="program-content">
                  <h4>Kindergarten (3 – 4)</h4>
                  <p>Early literacy, numeracy, and social skills through structured play and gentle stretch goals.</p>
                  <div class="program-meta">
                    <div class="meta-item"><i class="bi bi-lightbulb-fill"></i><span>Discovery corners</span></div>
                    <div class="meta-item"><i class="bi bi-people-fill"></i><span>Small groups</span></div>
                  </div>
                  <a href="/admissions" class="program-link">Admissions <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="program-card h-100">
                <div class="program-img">
                  <img src="/assets/images/students/smiling-child-on-turf-kbis-04.jpeg" alt="Reception learners preparing for primary" class="img-fluid" loading="lazy">
                  <div class="program-tag">Bridge</div>
                </div>
                <div class="program-content">
                  <h4>Reception (4)</h4>
                  <p>Confidence and independence grow as children prepare for the routines of primary classrooms.</p>
                  <div class="program-meta">
                    <div class="meta-item"><i class="bi bi-mortarboard"></i><span>School readiness</span></div>
                    <div class="meta-item"><i class="bi bi-shield-check"></i><span>Consistent routines</span></div>
                  </div>
                  <a href="/admissions" class="program-link">Admissions <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="program-card h-100">
                <div class="program-img">
                  <img src="/assets/images/extra-curricular/birthday-party-classroom-kbis-06.jpeg" alt="Primary learners in class at KBIS" class="img-fluid" loading="lazy">
                  <div class="program-tag">Primary</div>
                </div>
                <div class="program-content">
                  <h4>Primary (5 – 10)</h4>
                  <p>Cambridge-aligned learning with English and French in the day — character, creativity, and rigor in balance.</p>
                  <div class="program-meta">
                    <div class="meta-item"><i class="bi bi-globe-europe-africa"></i><span>Global outlook</span></div>
                    <div class="meta-item"><i class="bi bi-journal-text"></i><span>Strong foundations</span></div>
                  </div>
                  <a href="/admissions" class="program-link">Admissions <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="faculty-section mb-2">
          <div class="row align-items-center g-4 p-4 p-lg-5 rounded-4 kb-academics-cta" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-7">
              <h3 class="mb-3">Meet the educators behind the lessons</h3>
              <p class="mb-0 text-muted">We introduce classroom leads and specialists when you visit — so you can ask real questions and see how teachers partner with families.</p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <a href="/faculty-staff" class="btn btn-primary me-2 mb-2 mb-lg-0">Our team</a>
              <a href="/students-life" class="btn btn-outline mb-2 mb-lg-0">Student life</a>
            </div>
          </div>
        </div>

      </div>

    </section><!-- /Academics Section -->

  `,Yn=`

    <!-- Page Title -->
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Privacy</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Privacy</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Privacy Section -->
    <section id="privacy" class="privacy section">

      <div class="container" data-aos="fade-up">
        <!-- Header -->
        <div class="privacy-header" data-aos="fade-up">
          <div class="header-content">
            <div class="last-updated">Effective Date: February 27, 2025</div>
            <h1>Privacy Policy</h1>
            <p class="intro-text">This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our services.</p>
          </div>
        </div>

        <!-- Main Content -->
        <div class="privacy-content" data-aos="fade-up">
          <!-- Introduction -->
          <div class="content-section">
            <h2>1. Introduction</h2>
            <p>When you use our services, you're trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
            <p>This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.</p>
          </div>

          <!-- Information Collection -->
          <div class="content-section">
            <h2>2. Information We Collect</h2>
            <p>We collect information to provide better services to our users. The types of information we collect include:</p>

            <h3>2.1 Information You Provide</h3>
            <p>When you create an account or use our services, you provide us with personal information that includes:</p>
            <ul>
              <li>Your name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information when required</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Automatic Information</h3>
            <p>We automatically collect and store certain information when you use our services:</p>
            <ul>
              <li>Device information and identifiers</li>
              <li>Log information and usage statistics</li>
              <li>Location information when enabled</li>
              <li>Browser type and settings</li>
            </ul>
          </div>

          <!-- Use of Information -->
          <div class="content-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services. Specifically, we use your information to:</p>
            <ul>
              <li>Provide and personalize our services</li>
              <li>Process transactions and send related information</li>
              <li>Send notifications and updates about our services</li>
              <li>Maintain security and verify identity</li>
              <li>Analyze and improve our services</li>
            </ul>
          </div>

          <!-- Information Sharing -->
          <div class="content-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not share personal information with companies, organizations, or individuals outside of our company except in the following cases:</p>

            <h3>4.1 With Your Consent</h3>
            <p>We will share personal information with companies, organizations, or individuals outside of our company when we have your consent to do so.</p>

            <h3>4.2 For Legal Reasons</h3>
            <p>We will share personal information if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to:</p>
            <ul>
              <li>Meet any applicable law, regulation, legal process, or enforceable governmental request</li>
              <li>Enforce applicable Terms of Service</li>
              <li>Detect, prevent, or otherwise address fraud, security, or technical issues</li>
              <li>Protect against harm to the rights, property, or safety of our users</li>
            </ul>
          </div>

          <!-- Data Security -->
          <div class="content-section">
            <h2>5. Data Security</h2>
            <p>We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. In particular:</p>
            <ul>
              <li>We encrypt our services using SSL</li>
              <li>We review our information collection, storage, and processing practices</li>
              <li>We restrict access to personal information to employees who need that information</li>
            </ul>
          </div>

          <!-- Your Rights -->
          <div class="content-section">
            <h2>6. Your Rights and Choices</h2>
            <p>You have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to our processing of your information</li>
            </ul>
          </div>

          <!-- Policy Updates -->
          <div class="content-section">
            <h2>7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date at the top.</p>
            <p>Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of such changes.</p>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="privacy-contact" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our practices, please contact us:</p>
          <div class="contact-details">
            <p><strong>Email:</strong> <a href="mailto:info@kbubble.edu.gh">info@kbubble.edu.gh</a></p>
            <p><strong>Phone:</strong> <a href="tel:+233244938605">+233 24 493 8605</a></p>
            <p><strong>Address:</strong> 123 Privacy Street, Security City, 12345</p>
          </div>
        </div>

      </div>

    </section><!-- /Privacy Section -->

  `,Xn=`

    <!-- Page Title -->
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Terms Of Service</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Terms Of Service</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Terms Of Service Section -->
    <section id="terms-of-service" class="terms-of-service section">

      <div class="container" data-aos="fade-up">
        <!-- Hero Section -->
        <div class="terms-hero" data-aos="fade-up">
          <span class="badge">Last Updated: February 27, 2025</span>
          <h2>Terms &amp; Conditions</h2>
          <p>These terms and conditions outline your rights and responsibilities when using our services</p>
          <div class="terms-highlights">
            <div class="highlight-item">
              <i class="bi bi-shield-check"></i>
              <span>Secure Service</span>
            </div>
            <div class="highlight-item">
              <i class="bi bi-lock"></i>
              <span>Data Protection</span>
            </div>
            <div class="highlight-item">
              <i class="bi bi-hand-thumbs-up"></i>
              <span>Fair Terms</span>
            </div>
          </div>
        </div>

        <!-- Terms Grid -->
        <div class="terms-grid" data-aos="fade-up">
          <!-- Agreement Card -->
          <div class="terms-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-header">
              <div class="header-icon">
                <i class="bi bi-file-text"></i>
              </div>
              <h3>Agreement Terms</h3>
            </div>
            <div class="card-content">
              <p>By accessing our service, you confirm that you are agreeing to be bound by these terms of service. These terms apply to all users and visitors.</p>
              <ul class="check-list">
                <li>Acceptance of terms</li>
                <li>Compliance with laws</li>
                <li>Service availability</li>
                <li>User obligations</li>
              </ul>
            </div>
          </div>

          <!-- User Rights Card -->
          <div class="terms-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-header">
              <div class="header-icon">
                <i class="bi bi-person-check"></i>
              </div>
              <h3>User Rights</h3>
            </div>
            <div class="card-content">
              <p>As a user, you have specific rights when using our service, including data privacy and access to features.</p>
              <ul class="check-list">
                <li>Account control</li>
                <li>Data privacy</li>
                <li>Service access</li>
                <li>Content ownership</li>
              </ul>
            </div>
          </div>

          <!-- Restrictions Card -->
          <div class="terms-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-header">
              <div class="header-icon">
                <i class="bi bi-shield-x"></i>
              </div>
              <h3>Restrictions</h3>
            </div>
            <div class="card-content">
              <div class="restrictions-list">
                <div class="restriction-item">
                  <i class="bi bi-x-circle"></i>
                  <span>No unauthorized data collection</span>
                </div>
                <div class="restriction-item">
                  <i class="bi bi-x-circle"></i>
                  <span>No service misuse</span>
                </div>
                <div class="restriction-item">
                  <i class="bi bi-x-circle"></i>
                  <span>No intellectual property violation</span>
                </div>
                <div class="restriction-item">
                  <i class="bi bi-x-circle"></i>
                  <span>No harmful activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Points -->
        <div class="terms-points" data-aos="fade-up">
          <h3>Key Points to Note</h3>
          <div class="points-grid">
            <div class="point-item">
              <div class="point-icon">
                <i class="bi bi-clock-history"></i>
              </div>
              <div class="point-content">
                <h4>Service Availability</h4>
                <p>We strive to provide uninterrupted service but cannot guarantee 100% availability.</p>
              </div>
            </div>

            <div class="point-item">
              <div class="point-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <div class="point-content">
                <h4>Privacy Protection</h4>
                <p>Your data is protected according to our privacy policy and applicable laws.</p>
              </div>
            </div>

            <div class="point-item">
              <div class="point-icon">
                <i class="bi bi-pencil-square"></i>
              </div>
              <div class="point-content">
                <h4>Content Rights</h4>
                <p>You retain rights to your content while granting us license to use it.</p>
              </div>
            </div>
          </div>

          <!-- Important Notices -->
          <div class="terms-notices" data-aos="fade-up">
            <div class="notice-wrapper">
              <div class="notice-items">
                <div class="notice-item">
                  <div class="notice-marker">
                    <i class="bi bi-exclamation-circle"></i>
                  </div>
                  <div class="notice-content">
                    <h4>Service Modifications</h4>
                    <p>We reserve the right to modify or discontinue any part of our service with or without notice.</p>
                  </div>
                </div>

                <div class="notice-item">
                  <div class="notice-marker">
                    <i class="bi bi-exclamation-circle"></i>
                  </div>
                  <div class="notice-content">
                    <h4>Account Termination</h4>
                    <p>We may terminate accounts that violate these terms or for any other reason at our discretion.</p>
                  </div>
                </div>

                <div class="notice-item">
                  <div class="notice-marker">
                    <i class="bi bi-exclamation-circle"></i>
                  </div>
                  <div class="notice-content">
                    <h4>Terms Updates</h4>
                    <p>These terms may be updated at any time. Continued use of the service implies acceptance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Box -->
          <div class="terms-contact" data-aos="fade-up">
            <div class="contact-wrapper">
              <div class="contact-content">
                <div class="contact-text">
                  <h4>Need Clarification?</h4>
                  <p>If you have questions about these terms, our support team is here to help.</p>
                </div>
                <div class="contact-actions">
                  <a href="/contact" class="btn-primary">Contact us</a>
                  <a href="mailto:info@kbubble.edu.gh" class="btn-outline">Email office</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- /Terms Of Service Section -->

  `,Zn=`

    <!-- Page Title -->
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">404</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">404</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Error 404 Section -->
    <section id="error-404" class="error-404 section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="text-center">
          <div class="error-icon mb-4" data-aos="zoom-in" data-aos-delay="200">
            <i class="bi bi-exclamation-circle"></i>
          </div>

          <h1 class="error-code mb-4" data-aos="fade-up" data-aos-delay="300">404</h1>

          <h2 class="error-title mb-3" data-aos="fade-up" data-aos-delay="400">Oops! Page Not Found</h2>

          <p class="error-text mb-4" data-aos="fade-up" data-aos-delay="500">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div class="error-action d-flex flex-wrap justify-content-center gap-2 mb-4" data-aos="fade-up" data-aos-delay="600">
            <a href="/" class="btn btn-primary">Back to home</a>
            <a href="/admissions" class="btn btn-outline-primary">Admissions</a>
            <a href="/contact" class="btn btn-outline-primary">Contact</a>
          </div>
        </div>

      </div>

    </section><!-- /Error 404 Section -->

  
`,M={logoSrc:`/assets/images/others/school-logo.png`,shortName:`KinderBubble`,legalName:`Kinder Bubble International School`,tagline:`International School`,addressLine1:`21 Quince Street, Community 18`,addressLine2:`Spintex Road, Accra, Ghana`,phoneDisplay:`+233 24 493 8605`,phoneTel:`+233244938605`,officeEmail:`info@kbubble.edu.gh`,hours:`6:00 a.m. - 6:00 p.m. · Open year-round`,principal:`Ms. Delphina Naa Lomoley Lomotey`,ages:`6 months - 10 years`,curriculum:`Cambridge International Curriculum with English-French bilingual exposure`,motto:`Ducem Scientia`,slogan:`Adikanfo - the pace setters`,mapQuery:`Kinder Bubble International School 21 Quince Street Community 18 Spintex Road Accra Ghana`,programs:[`Creche (6 mo - 2 yrs)`,`Nursery (2 - 3 yrs)`,`Kindergarten (3 - 4 yrs)`,`Reception (4 yrs)`,`Primary (5 - 10 yrs)`],highlights:[`Indoor and outdoor play spaces on campus`,`Rolling admissions throughout the year`,`Health, safety, and vetted staff as a priority`]},N={programmeBands:`bi-layers-fill`,languages:`bi-translate`,fullDay:`bi-clock-fill`,campusLocation:`bi-geo-alt-fill`,singleCampus:`bi-building-fill`,nurturingCare:`bi-balloon-heart-fill`,bilingual:`bi-translate`,movementPlay:`bi-tree-fill`,discovery:`bi-lightbulb-fill`,smallGroups:`bi-people-fill`,schoolReadiness:`bi-mortarboard-fill`,routines:`bi-shield-check`,globalOutlook:`bi-globe-europe-africa`,foundations:`bi-journal-text`,programsByAge:`bi-layers-fill`,indoorOutdoorPlay:`bi-tree-fill`,safety:`bi-shield-check`,accredited:`bi-patch-check-fill`,admissionsRolling:`bi-calendar-event`,planVisit:`bi-calendar-check`,applicationForm:`bi-file-earmark-text-fill`,medicalForm:`bi-file-medical-fill`,pickUpAuth:`bi-person-badge-fill`,brochure:`bi-journal-richtext`,healthPolicy:`bi-heart-pulse-fill`,privacy:`bi-shield-check`,terms:`bi-file-text`,musicCreativity:`bi-music-note-beamed`,languageCulture:`bi-translate`,inquiryDiscovery:`bi-lightbulb-fill`,learningStudios:`bi-book-fill`,playMovement:`bi-tree-fill`,wellbeingCommunity:`bi-people-fill`,familyPartnership:`bi-chat-heart-fill`};function Qn(e){let t=[{title:e.programs[0],blurb:`Warm routines, sensory-rich play, and caring adults who partner closely with families from the very first day.`,meta0:`Early years`,meta1:`6 mo – 2 yrs`,img:`/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg`,alt:`Creche and youngest learners at KBIS`},{title:e.programs[1],blurb:`Curiosity-led learning, early literacy and numeracy, and plenty of movement — indoors and out.`,meta0:`Nursery`,meta1:`2 – 3 yrs`,img:`/assets/images/students/formal-uniform-students-kbis-01.jpeg`,alt:`Nursery learners at KBIS`},{title:e.programs[2],blurb:`Structured play, social skills, and gentle preparation for the rhythms of primary.`,meta0:`Kindergarten`,meta1:`3 – 4 yrs`,img:`/assets/images/students/girl-in-orange-uniform-kbis-03.jpeg`,alt:`Kindergarten at KBIS`},{title:e.programs[3],blurb:`A bridge year focused on confidence, independence, and foundational skills across subjects.`,meta0:`Reception`,meta1:`4 yrs`,img:`/assets/images/students/smiling-child-on-turf-kbis-04.jpeg`,alt:`Reception learners at KBIS`},{title:e.programs[4],blurb:`Project-based learning, literacy depth, and numeracy fluency with strong pastoral support through the primary years.`,meta0:`Primary`,meta1:`5 – 10 yrs`,img:`/assets/images/facilities/blue-stairwell-kbis-10.jpeg`,alt:`Primary learners at KBIS`}].map((e,t)=>`
                <div class="col-12" data-aos="fade-left" data-aos-delay="${200+t*100}">
                  <a href="/academics" class="kb-prog-row-link d-block text-decoration-none">
                  <div class="program-item">
                    <div class="item-icon">
                      <img src="${e.img}" alt="${e.alt}" class="img-fluid" loading="lazy">
                    </div>
                    <div class="item-content">
                      <h4>${e.title}</h4>
                      <p>${e.blurb}</p>
                      <div class="meta-info">
                        <span>${e.meta0}</span>
                        <span>${e.meta1}</span>
                      </div>
                    </div>
                    <div class="item-arrow">
                      <i class="bi bi-arrow-right"></i>
                    </div>
                  </div>
                  </a>
                </div>`).join(``);return`
    <section id="featured-programs" class="featured-programs section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Programs &amp; pathway</h2>
        <p>${e.curriculum} — structured play, strong academics, and a bilingual thread across the day.</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-5">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="program-banner">
              <div class="banner-image">
                <img src="/assets/images/learning/girl-presenting-in-class-kbis-09.jpeg" alt="Children and families on the KBIS campus" class="img-fluid" loading="lazy">
                <div class="banner-badge">
                  <span class="badge-text">${e.ages}</span>
                </div>
              </div>
              <div class="banner-info">
                <div class="program-header">
                  <h3>One campus, every stage</h3>
                  <div class="program-stats">
                    <span><i class="bi ${N.fullDay}"></i> ${e.hours.split(`·`)[0].trim()}</span>
                    <span><i class="bi ${N.languages}"></i> English &amp; French exposure</span>
                  </div>
                </div>
                <p>${e.highlights.join(` `)}</p>
                <div class="program-details">
                  <div class="detail-item">
                    <i class="bi bi-geo-alt"></i>
                    <span>${e.addressLine2}</span>
                  </div>
                  <div class="detail-item">
                    <i class="bi bi-telephone"></i>
                    <span><a href="tel:${e.phoneTel}">${e.phoneDisplay}</a></span>
                  </div>
                </div>
                <a href="/academics" class="discover-btn">Explore academics</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="programs-grid">
              <div class="row g-3">
                ${t}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="students-life-block" class="students-life-block section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Student life</h2>
        <p>Movement, creativity, and friendship — a full day designed for how young children actually grow.</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-stretch g-5 mb-5 kb-sl-hero-row">
          <div class="col-lg-5 order-lg-2 kb-sl-media-col" data-aos="fade-left" data-aos-delay="200">
            <div class="hero-image-wrapper">
              <img src="/assets/images/learning/girl-presenting-in-class-gallery.jpeg" alt="Student life at KBIS" class="img-fluid main-image" loading="lazy">
              <div class="floating-card" data-aos="zoom-in" data-aos-delay="400">
                <div class="card-icon">
                  <i class="bi ${N.singleCampus}"></i>
                </div>
                <div class="card-content">
                  <span class="card-number">${e.ages}</span>
                  <span class="card-label">On one caring campus</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 order-lg-1 kb-sl-content-col" data-aos="fade-right" data-aos-delay="300">
            <div class="content-wrapper">
              <div class="section-badge" data-aos="fade-up" data-aos-delay="350">
                <span>Everyday rhythm</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="400">Play with purpose, learn with joy</h2>
              <p class="lead-text" data-aos="fade-up" data-aos-delay="450">${e.highlights[0]}. Teachers weave language, numeracy, science, and the arts into routines children understand.</p>
              <div class="info-grid" data-aos="fade-up" data-aos-delay="500">
                <div class="info-item">
                  <div class="info-icon">
                    <i class="bi bi-calendar-event"></i>
                  </div>
                  <div class="info-text">
                    <strong>Rolling admissions</strong>
                    <span>${e.highlights[1]}</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">
                    <i class="bi bi-shield-check"></i>
                  </div>
                  <div class="info-text">
                    <strong>Safety first</strong>
                    <span>${e.highlights[2]}</span>
                  </div>
                </div>
              </div>
              <div class="cta-section" data-aos="fade-up" data-aos-delay="600">
                <a href="/students-life" class="btn-primary">See student life</a>
                <a href="/admissions" class="btn-link">
                  <i class="bi bi-calendar-check"></i>
                  <span>Plan a visit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="activities-showcase">
          <div class="row g-4">
            <div class="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div class="featured-activity" data-href="/campus-facilities">
                <div class="activity-media">
                  <img src="/assets/images/facilities/blue-stairwell-hero.jpeg" alt="Play and discovery" class="img-fluid" loading="lazy">
                  <div class="activity-overlay">
                    <div class="overlay-content">
                      <h4>Indoor &amp; outdoor play</h4>
                      <p>${e.highlights[0]}</p>
                      <a href="/campus-facilities" class="overlay-btn" aria-label="Campus">
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div class="activities-list">
                <div class="activity-item" data-href="/student-life/extra-curricular" data-aos="slide-up" data-aos-delay="350">
                  <div class="activity-thumb">
                    <img src="/assets/images/extra-curricular/power-rangers-performance-kbis-05.jpeg" alt="" class="img-fluid" loading="lazy">
                  </div>
                  <div class="activity-info">
                    <h6>Movement &amp; motor skills</h6>
                    <p>Daily opportunities to run, climb, and build strong bodies.</p>
                  </div>
                </div>
                <div class="activity-item" data-href="/academics/languages" data-aos="slide-up" data-aos-delay="400">
                  <div class="activity-thumb">
                    <img src="/assets/images/extra-curricular/birthday-party-classroom-kbis-06.jpeg" alt="" class="img-fluid" loading="lazy">
                  </div>
                  <div class="activity-info">
                    <h6>Bilingual exposure</h6>
                    <p>Songs, stories, and classroom language in English and French.</p>
                  </div>
                </div>
                <div class="activity-item" data-href="/parents/plan-a-visit" data-aos="slide-up" data-aos-delay="450">
                  <div class="activity-thumb">
                    <img src="/assets/images/students/smiling-boy-in-class-kbis-07.jpeg" alt="" class="img-fluid" loading="lazy">
                  </div>
                  <div class="activity-info">
                    <h6>Family partnership</h6>
                    <p>Clear communication so you always know how your child is growing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="stats" class="stats section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Numbers that reflect our focus</h2>
        <p>One campus, bilingual learning, and a full day for working families.</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row g-4 mt-4">
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-href="/academics/programmes" data-aos="flip-left" data-aos-delay="300">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi ${N.programmeBands}"></i></div>
                <div class="metric-value"><span>5</span></div>
              </div>
              <div class="metric-info">
                <h4>Programme bands</h4>
                <p>Creche through primary on one timeline</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-href="/academics/languages" data-aos="flip-left" data-aos-delay="400">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi ${N.languages}"></i></div>
                <div class="metric-value"><span>2</span></div>
              </div>
              <div class="metric-info">
                <h4>Languages</h4>
                <p>English and French woven through the day</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-href="/parents/plan-a-visit" data-aos="flip-left" data-aos-delay="500">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi ${N.fullDay}"></i></div>
                <div class="metric-value"><span>12h</span></div>
              </div>
              <div class="metric-info">
                <h4>Full day on campus</h4>
                <p>${e.hours}</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-href="/campus-facilities" data-aos="flip-left" data-aos-delay="600">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi ${N.campusLocation}"></i></div>
                <div class="metric-value"><span>1</span></div>
              </div>
              <div class="metric-info">
                <h4>Spintex campus</h4>
                <p>${e.addressLine1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="recent-news" class="recent-news section">
      <div class="container section-title" data-aos="fade-up">
        <h2>From the campus</h2>
        <p>Updates families care about — admissions, learning, and wellbeing.</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-xl-6" data-aos="fade-up" data-aos-delay="100">
            <article class="post-item d-flex" data-href="/admissions">
              <div class="post-img">
                <img src="/assets/images/students/girl-in-orange-uniform-kbis-03.jpeg" alt="" class="img-fluid" loading="lazy">
              </div>
              <div class="post-content flex-grow-1">
                <a href="/news" class="category">Admissions</a>
                <h2 class="post-title"><a href="/admissions">Rolling admissions &amp; campus tours</a></h2>
                <p class="post-description">${e.highlights[1]} Reach out to plan a walk-through of classrooms and play spaces.</p>
                <div class="post-meta">
                  <div class="post-author">
                    <img src="/assets/images/others/school-logo.png" alt="" class="img-fluid">
                    <span class="author-name">KBIS office</span>
                  </div>
                  <span class="post-date">Accra</span>
                </div>
              </div>
            </article>
          </div>
          <div class="col-xl-6" data-aos="fade-up" data-aos-delay="200">
            <article class="post-item d-flex" data-href="/academics">
              <div class="post-img">
                <img src="/assets/images/facilities/blue-stairwell-kbis-10.jpeg" alt="" class="img-fluid" loading="lazy">
              </div>
              <div class="post-content flex-grow-1">
                <a href="/news" class="category">Learning</a>
                <h2 class="post-title"><a href="/academics">Cambridge-inspired learning &amp; bilingual rhythm</a></h2>
                <p class="post-description">${e.curriculum}</p>
                <div class="post-meta">
                  <div class="post-author">
                    <img src="/assets/images/others/school-logo.png" alt="" class="img-fluid">
                    <span class="author-name">Academics team</span>
                  </div>
                  <span class="post-date">KBIS</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `}function $n(e,t){let n=new Set;for(let r of e){if(!r.slug)throw Error(`[${t}] every record needs a "slug" (offending title: ${r.title||`?`})`);if(n.has(r.slug))throw Error(`[${t}] duplicate slug "${r.slug}" — slugs must be unique because they become the page URL`);n.add(r.slug)}return e}var er=$n([{slug:`anniversary-celebration`,title:`Anniversary celebration`,label:`Annual`,excerpt:`A grand school programme celebrating KBIS growth, culture, performances, family participation, and the school community.`,image:`/assets/images/extra-curricular/students-on-stage-at-event.jpeg`,body:[`This event brought the KBIS community together for a joyful celebration of school growth, learner confidence, family support, and the culture that makes school life memorable. Children participated through performances, group presentations, music, movement, and shared moments that reflected their classroom learning and school spirit.`,`The programme was not just a date on the calendar. It became a record of how learners express confidence, how families support school life, and how staff guide children through preparation, performance, teamwork, and celebration.`],highlights:[`Learners had opportunities to perform, present, and take part in group activities.`,`Families and staff shared in the celebration, creating a warm community atmosphere.`,`Photos and highlights from the day help preserve the story for parents and the wider school community.`],gallery:[[`/assets/images/extra-curricular/students-on-stage-at-event.jpeg`,`Stage moments`],[`/assets/images/extra-curricular/parents-and-children-at-event.jpeg`,`Family participation`],[`/assets/images/extra-curricular/students-under-event-tent.jpeg`,`School community`]]},{slug:`graduation-moving-up-ceremony`,title:`Graduation and moving-up ceremony`,label:`End term`,excerpt:`A milestone celebration where learners were recognised for growth, confidence, and readiness for the next stage.`,image:`/assets/images/extra-curricular/career-day-costume-group-certificates.jpeg`,body:[`The graduation and moving-up ceremony marked a proud milestone for learners stepping into the next stage of their school journey. Children were recognised for their growth, confidence, and the steady progress they made across the year.`,`Families gathered to celebrate certificates, songs, and presentations, while teachers reflected on how far each child had come — from first routines to reading, counting, speaking, and leading with assurance.`],highlights:[`Learners received certificates and recognition for effort, character, and academic growth.`,`Children performed songs, recited, and presented in front of proud families and staff.`,`The ceremony celebrated readiness for the next class while honouring the year's memories.`],gallery:[[`/assets/images/extra-curricular/career-day-costume-group-certificates.jpeg`,`Certificates`],[`/assets/images/extra-curricular/students-on-stage-at-event.jpeg`,`On stage`],[`/assets/images/extra-curricular/students-under-event-tent.jpeg`,`Celebration`]]},{slug:`educational-trips`,title:`Educational trips`,label:`Trips`,excerpt:`Theme-based outings connected classroom learning to real places, with learners exploring, asking questions, and returning with stories to share.`,image:`/assets/images/extra-curricular/school-excursion-group-photo.jpeg`,body:[`Educational trips connected classroom themes to real places, giving learners the chance to explore, ask questions, and experience learning beyond the school gate.`,`Each outing was planned around lesson themes, with careful safety planning and parent communication before departure. Children returned with stories, observations, and fresh curiosity to bring back into class.`],highlights:[`Trips were organised around term themes and lesson plans for meaningful, connected learning.`,`Safety planning and parent communication were completed before every departure.`,`Children explored national landmarks, nature, and community spaces with guided activities.`],gallery:[[`/assets/images/extra-curricular/school-excursion-group-photo.jpeg`,`Group photo`],[`/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg`,`At the monument`],[`/assets/images/extra-curricular/students-on-bus-smiling.jpeg`,`On the road`]]},{slug:`career-and-culture-day`,title:`Career and culture day`,label:`School life`,excerpt:`Children dressed, presented, and explored real-world roles through guided play, family support, and joyful classroom activities.`,image:`/assets/images/extra-curricular/career-day-children-in-costumes.jpeg`,body:[`Career and culture day invited children to dress, present, and explore real-world roles through guided play, family support, and joyful classroom activities.`,`From little chefs to future professionals, learners discovered the value of different jobs and cultures, building confidence as they spoke about who they want to become.`],highlights:[`Children dressed as their dream careers and presented to classmates and families.`,`Guided play and activities helped learners explore real-world roles and responsibilities.`,`Families joined the celebration, making the day warm, memorable, and encouraging.`],gallery:[[`/assets/images/extra-curricular/career-day-children-in-costumes.jpeg`,`Career costumes`],[`/assets/images/extra-curricular/career-day-chef-costumes-group.jpeg`,`Little chefs`],[`/assets/images/extra-curricular/parents-and-children-at-event.jpeg`,`Family support`]]},{slug:`independence-and-national-moments`,title:`Independence and national moments`,label:`Culture`,excerpt:`Learners celebrated Ghanaian identity through flags, presentations, group moments, and guided conversations about citizenship.`,image:`/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg`,body:[`Independence and national moments gave learners the chance to celebrate Ghanaian identity through flags, presentations, and guided conversations about citizenship.`,`Children took part in group moments that built pride, belonging, and an early understanding of their country's history and values.`],highlights:[`Learners waved flags and joined presentations celebrating Ghanaian heritage.`,`Guided conversations introduced citizenship, history, and national pride in age-right ways.`,`Group moments built belonging, confidence, and a sense of shared identity.`],gallery:[[`/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg`,`Flags under the tent`],[`/assets/images/extra-curricular/students-group-at-independence-square.jpeg`,`At Independence Square`],[`/assets/images/extra-curricular/students-with-officer-on-excursion.jpeg`,`National event`]]}],`events`),tr=$n([{slug:`global-school-alliance-partnership`,day:`12`,month:`Jun`,title:`Partnership with Global School Alliance`,category:`School news`,type:`Events`,excerpt:`KBIS has benefited from GSA support and a sister-school partnership with Skidby Church of England Primary School in Yorkshire, England.`,image:`/assets/images/extra-curricular/students-group-at-independence-square.jpeg`,link:`/news/partnerships`,linkLabel:`partnerships page`,views:`214`,sections:[{id:`overview`,navLabel:`Overview`,paragraphs:[`KBIS has benefited from Global School Alliance support and a new sister-school partnership with Skidby Church of England Primary School in Yorkshire, England.`,`This partnership opens the door to cultural exchange, shared projects, and teacher collaboration that widen children's view of the world.`]},{id:`partnership`,navLabel:`The partnership`,heading:`What the partnership means`,paragraphs:[`Through the Global School Alliance, learners and teachers can connect with another school community beyond Ghana, sharing ideas, stories, and curiosity across borders.`,`For pupils it supports global awareness and communication; for teachers it creates room for professional exchange and project inspiration.`]},{id:`next`,navLabel:`Next steps`,heading:`What happens next`,paragraphs:[`Families will receive details as exchange activities and collaborative projects are scheduled. Learn more on our <a href="/news/partnerships">partnerships page</a>.`]}]},{slug:`bilingual-curriculum-focus`,day:`06`,month:`May`,title:`Bilingual curriculum focus`,category:`Academics`,type:`Learning`,excerpt:`KBIS follows the Cambridge International Curriculum with English-French bilingual exposure and age-right classroom routines.`,image:`/assets/images/learning/children-reading-together.jpeg`,link:`/academics/languages`,linkLabel:`languages page`,views:`186`,sections:[{id:`overview`,navLabel:`Overview`,paragraphs:[`KBIS follows the Cambridge International Curriculum with English–French bilingual exposure and age-right classroom routines.`,`Language learning is kept natural and confidence-building, woven into the everyday rhythm of the school day.`]},{id:`approach`,navLabel:`The approach`,heading:`How bilingual learning works`,paragraphs:[`Children hear, repeat, sing, respond, and use new words during familiar routines before moving into structured reading and writing.`,`French is introduced early because the childhood years are a powerful window for language acquisition.`]},{id:`next`,navLabel:`Explore`,heading:`Explore the approach`,paragraphs:[`See how English and French become part of the day on our <a href="/academics/languages">languages page</a>.`]}]},{slug:`health-allergy-pickup-forms`,day:`29`,month:`Apr`,title:`Health, allergy, and pick-up forms`,category:`Parents`,type:`Notices`,excerpt:`Families can access application, medical, and authorised pick-up forms from the parents and policies pages.`,image:`/assets/images/learning/children-holding-green-apple.jpeg`,link:`/parents/admission-form`,linkLabel:`admission form page`,views:`152`,sections:[{id:`overview`,navLabel:`Overview`,paragraphs:[`Families can now access application, medical, and authorised pick-up forms from the parents and policies pages.`,`Keeping these records current helps the school care for every child safely and respond quickly when needed.`]},{id:`forms`,navLabel:`The forms`,heading:`Which forms to complete`,paragraphs:[`The application pack covers child details and guardian contacts, while the medical form records allergies, dietary needs, and emergency care plans.`,`Authorised pick-up forms let the school know exactly who may collect a child at the end of the day.`]},{id:`next`,navLabel:`Get the forms`,heading:`Get the forms`,paragraphs:[`Download and complete the forms from the <a href="/parents/admission-form">admission form page</a>.`]}]},{slug:`educational-trips-by-term-theme`,day:`18`,month:`Mar`,title:`Educational trips by term theme`,category:`Events`,type:`Campus`,excerpt:`Trips are planned around term themes and lesson plans, with parent communication and safety planning before departure.`,image:`/assets/images/extra-curricular/school-excursion-students-walking.jpeg`,link:`/events`,linkLabel:`events page`,views:`128`,sections:[{id:`overview`,navLabel:`Overview`,paragraphs:[`Educational trips are planned around term themes and lesson plans, with parent communication and safety planning before every departure.`,`Trips connect classroom learning to real places, giving children memorable, hands-on experiences.`]},{id:`planning`,navLabel:`Planning`,heading:`How trips are planned`,paragraphs:[`Each outing is tied to a lesson theme so children can connect what they study with what they see.`,`Safety arrangements and parent updates are completed before the school travels.`]},{id:`next`,navLabel:`See past trips`,heading:`See past trips`,paragraphs:[`Browse highlights and event stories on our <a href="/events">events page</a>.`]}]},{slug:`classroom-routines-that-help-children-settle`,day:`14`,month:`Feb`,title:`Classroom routines that help children settle`,category:`School news`,type:`Wellbeing`,excerpt:`Daily routines help children feel confident, understand expectations, and move calmly between learning, meals, rest, and play.`,image:`/assets/images/students/children-seated-in-class.jpeg`,link:`/parents/student-handbook`,linkLabel:`student handbook`,views:`119`,sections:[{id:`overview`,navLabel:`Overview`,paragraphs:[`Daily routines help children feel confident, understand expectations, and move calmly between learning, meals, rest, and play.`,`Predictable rhythms give young learners the security they need to settle and thrive.`]},{id:`why`,navLabel:`Why routines matter`,heading:`Why routines matter`,paragraphs:[`Circle time, choice, story, snack, and quiet time give the day a familiar shape children can rely on.`,`Clear, gentle expectations help children manage transitions and build independence.`]},{id:`next`,navLabel:`Family guidance`,heading:`Family guidance`,paragraphs:[`Read more about daily rhythm in the <a href="/parents/student-handbook">student handbook</a>.`]}]},{slug:`learning-through-play-and-discovery`,day:`24`,month:`Jan`,title:`Learning through play and discovery`,category:`Academics`,type:`Programmes`,excerpt:`From early years to primary, children learn through guided practice, creative projects, outdoor movement, and classroom conversation.`,image:`/assets/images/learning/children-handling-class-activity.jpeg`,link:`/academics/programmes`,linkLabel:`programmes page`,views:`143`,sections:[{id:`overview`,navLabel:`Overview`,paragraphs:[`From early years to primary, children learn through guided practice, creative projects, outdoor movement, and classroom conversation.`,`Play and discovery sit at the heart of how young children make sense of the world.`]},{id:`play`,navLabel:`Learning that feels like play`,heading:`Learning that feels like play`,paragraphs:[`Hands-on activities, games, and projects build literacy, numeracy, and curiosity in small, joyful steps.`,`Teachers guide discovery so children test ideas and explain what they notice.`]},{id:`next`,navLabel:`Explore programmes`,heading:`Explore programmes`,paragraphs:[`See age bands and learning stages on our <a href="/academics/programmes">programmes page</a>.`]}]}],`news`);function nr(){return Qn(M)}function rr(){let e=M.programs.map(e=>`<option>${e}</option>`).join(``);return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Admissions</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Admissions</li>
          </ol>
        </nav>
      </div>
    </div>
    <section id="admissions" class="admissions section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="kb-admissions-links" data-aos="fade-up" data-aos-delay="120">
          <a href="/parents/admission-form">
            <i class="bi bi-file-earmark-text"></i>
            <span>
              <strong>Application form</strong>
              <small>Start with the application pack</small>
            </span>
          </a>
          <a href="/parents/make-payment">
            <i class="bi bi-credit-card"></i>
            <span>
              <strong>Make payment</strong>
              <small>Review fee and payment guidance</small>
            </span>
          </a>
          <a href="/academics/programmes">
            <i class="bi bi-grid-3x3-gap"></i>
            <span>
              <strong>Programmes</strong>
              <small>See age bands and placement options</small>
            </span>
          </a>
          <a href="/academics/curriculum">
            <i class="bi bi-book"></i>
            <span>
              <strong>Curriculum</strong>
              <small>Explore the learning approach</small>
            </span>
          </a>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="application-steps">
              <h3 class="section-subtitle">How to apply</h3>
              <div class="steps-wrapper">
                <div class="step-item">
                  <div class="step-number">01</div>
                  <div class="step-content">
                    <h4>Enquire</h4>
                    <p>Call <a href="tel:${M.phoneTel}">${M.phoneDisplay}</a> or email <a href="mailto:${M.officeEmail}">${M.officeEmail}</a> with your child’s age and preferred start window.</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">02</div>
                  <div class="step-content">
                    <h4>Visit</h4>
                    <p>Walk the classrooms, meet leadership, and see indoor and outdoor learning spaces in action.</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">03</div>
                  <div class="step-content">
                    <h4>Apply</h4>
                    <p>Complete the application pack and share any learning or health notes that help us support your child from day one.</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">04</div>
                  <div class="step-content">
                    <h4>Begin</h4>
                    <p>Receive your start date, class placement, and orientation details — then join the KBIS family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="requirements-card">
              <h3 class="section-subtitle">What we typically need</h3>
              <ul class="requirements-list">
                <li><i class="bi bi-check-circle"></i><span>Completed application form</span></li>
                <li><i class="bi bi-check-circle"></i><span>Proof of age (birth certificate or equivalent)</span></li>
                <li><i class="bi bi-check-circle"></i><span>Most recent school reports, if transferring</span></li>
                <li><i class="bi bi-check-circle"></i><span>Health, allergy, and dietary information</span></li>
                <li><i class="bi bi-check-circle"></i><span>Emergency contacts and authorised pick-up list</span></li>
                <li><i class="bi bi-check-circle"></i><span>Any specialist reports that help us plan support</span></li>
              </ul>
              <div class="special-note">
                <i class="bi bi-info-circle"></i>
                <p>Exact requirements can vary by age band. Admissions will confirm what applies to your child before you submit.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 gy-4">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="tuition-card">
              <h3 class="section-subtitle">Programmes &amp; fees</h3>
              <div class="tuition-table">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Programme</th>
                      <th>Fees</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${M.programs.map(e=>`
                    <tr>
                      <td>${e}</td>
                      <td>On request</td>
                      <td>Office shares current schedule</td>
                    </tr>`).join(``)}
                  </tbody>
                </table>
              </div>
              <div class="financial-aid">
                <h4>Ask about payment plans</h4>
                <p>We are happy to walk through fee structure, sibling policies, and what is included in a typical week on campus.</p>
                <a href="/contact" class="btn btn-aid">Contact the office</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="contact-form-card">
              <h3 class="section-subtitle">Request information</h3>
              <form action="#" class="php-email-form" data-form-type="admissions-request">
                <div class="row g-3">
                  <div class="col-12">
                    <input type="text" name="name" class="form-control" placeholder="Name*" required="">
                  </div>
                  <div class="col-md-6">
                    <input type="email" name="email" class="form-control" placeholder="Email address*" required="">
                  </div>
                  <div class="col-md-6">
                    <input type="tel" name="phone" class="form-control" placeholder="Phone number">
                  </div>
                  <div class="col-12">
                    <select name="subject" class="form-select" required="">
                      <option selected="" disabled="">Programme of interest*</option>
                      ${e}
                    </select>
                  </div>
                  <div class="col-12">
                    <textarea name="message" class="form-control" rows="7" placeholder="Questions or comments"></textarea>
                  </div>
                  <div class="col-12">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit" class="btn btn-request">Request information</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12" data-aos="fade-up" data-aos-delay="100">
            <div class="deadlines-card">
              <h3 class="section-subtitle">How timing works</h3>
              <div class="deadlines-grid">
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="200">
                  <div class="deadline-date">Rolling</div>
                  <h4>Entry year-round</h4>
                  <p>${M.highlights[1]} Natural entry points across creche, nursery, kindergarten, reception, and primary.</p>
                </div>
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="300">
                  <div class="deadline-date">Before start</div>
                  <h4>Forms &amp; health</h4>
                  <p>Complete enrolment paperwork and share medical or dietary needs so we are ready on day one.</p>
                </div>
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="400">
                  <div class="deadline-date">Any week</div>
                  <h4>Campus tours</h4>
                  <p>Book a visit that fits your schedule — ${M.hours.toLowerCase()}</p>
                </div>
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="500">
                  <div class="deadline-date">Ongoing</div>
                  <h4>Family partnership</h4>
                  <p>Clear communication throughout the year so you always know how your child is growing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 campus-visit">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="visit-image">
              <img src="/assets/images/extra-curricular/birthday-party-classroom-hero.jpeg" class="img-fluid" alt="Learners at KBIS" loading="lazy">
              <div class="image-caption">See classrooms and play spaces in person</div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div class="visit-content">
              <h3>Schedule a campus visit</h3>
              <p>${M.legalName} welcomes families who want to feel the rhythm of the day — bilingual exposure, Cambridge-inspired planning, and ${M.highlights[0].toLowerCase()} Meet admissions, peek into learning studios, and ask candid questions.</p>
              <ul class="visit-options">
                <li><i class="bi bi-calendar-check"></i> Weekday tours by appointment</li>
                <li><i class="bi bi-people"></i> Conversation with admissions about placement</li>
                <li><i class="bi bi-building"></i> Indoor and outdoor learning environments</li>
                <li><i class="bi bi-mortarboard"></i> Meet leadership when available</li>
              </ul>
              <a href="/contact" class="btn btn-schedule">Plan your visit</a>
              <div class="virtual-option">
                <span>Prefer to start remotely?</span>
                <a href="tel:${M.phoneTel}" class="virtual-link">Call the office <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function ir(){return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Campus &amp; facilities</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Campus</li></ol></nav>
      </div>
    </div>
    <section id="campus-facilities" class="campus-facilities section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-intro">
          <div class="row g-0 align-items-center">
            <div class="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div class="content-wrapper">
                <div class="badge-highlight">Spintex Road, Accra</div>
                <h1>Spaces built for young learners</h1>
                <p class="lead-text">${M.addressLine1}, ${M.addressLine2}. Our campus pairs bright classrooms with safe outdoor play — all designed around how children ${M.ages} actually learn and move.</p>
                <div class="feature-highlights">
                  <div class="highlight-item">
                    <i class="bi ${N.programmeBands}"></i>
                    <div>
                      <span class="number">5</span>
                      <span class="label">Programme bands</span>
                    </div>
                  </div>
                  <div class="highlight-item">
                    <i class="bi ${N.fullDay}"></i>
                    <div>
                      <span class="number">12h</span>
                      <span class="label">Care window</span>
                    </div>
                  </div>
                  <div class="highlight-item">
                    <i class="bi ${N.singleCampus}"></i>
                    <div>
                      <span class="number">1</span>
                      <span class="label">Caring campus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div class="hero-visual">
                <div class="image-stack">
                  <img src="/assets/images/learning/girl-presenting-in-class-gallery.jpeg" alt="KBIS campus" class="img-fluid primary-img" loading="lazy">
                  <div class="floating-card">
                    <i class="bi bi-mortarboard"></i>
                    <span>${M.curriculum}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="facilities-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="category-card academic" data-aos="zoom-in" data-aos-delay="100">
            <div class="card-header">
              <div class="icon-wrapper"><i class="bi ${N.learningStudios}"></i></div>
              <h3>Learning studios</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/images/students/formal-uniform-students-kbis-01.jpeg" alt="Classrooms" class="img-fluid" loading="lazy">
              </div>
              <div class="facility-list">
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Age-appropriate layouts and rich materials</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Literacy, numeracy, and inquiry corners</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Small-group teaching where it matters</span></div>
              </div>
            </div>
            <div class="card-footer">
              <a href="/academics" class="explore-btn">Academics <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div class="category-card sports" data-aos="zoom-in" data-aos-delay="200">
            <div class="card-header">
              <div class="icon-wrapper"><i class="bi ${N.playMovement}"></i></div>
              <h3>Play &amp; movement</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/images/extra-curricular/power-rangers-performance-kbis-05.jpeg" alt="Outdoor play" class="img-fluid" loading="lazy">
              </div>
              <div class="facility-list">
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>${M.highlights[0]}</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Daily gross-motor opportunities</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Supervised routines families can trust</span></div>
              </div>
            </div>
            <div class="card-footer">
              <a href="/students-life" class="explore-btn">Student life <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div class="category-card residence" data-aos="zoom-in" data-aos-delay="300">
            <div class="card-header">
              <div class="icon-wrapper"><i class="bi ${N.wellbeingCommunity}"></i></div>
              <h3>Wellbeing &amp; community</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/images/learning/outdoor-presentation-kbis-08.jpeg" alt="Community" class="img-fluid" loading="lazy">
              </div>
              <div class="facility-list">
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>${M.highlights[2]}</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Reception and family touchpoints</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Clear communication with home</span></div>
              </div>
            </div>
            <div class="card-footer">
              <a href="/contact" class="explore-btn">Contact <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function ar(){let e=`https://www.google.com/maps?q=${encodeURIComponent(M.mapQuery)}&z=17&output=embed`,t=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(M.mapQuery)}`;return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Contact</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Contact</li></ol></nav>
      </div>
    </div>
    <section id="contact" class="contact section">
      <div class="container">
        <div class="kb-contact-hero row g-4 align-items-stretch mb-4">
          <div class="col-12">
            <div class="kb-contact-intro h-100">
              <p class="kb-kicker">Visit KBIS</p>
              <h2>Find us at Community 18, Spintex Road.</h2>
              <p>Use the map pointer for ${M.addressLine1}, ${M.addressLine2}. For tours, admissions, forms, or feedback, contact the office and we will route your message correctly.</p>
              <div class="kb-contact-actions">
                <a href="tel:${M.phoneTel}" class="btn btn-primary">${M.phoneDisplay}</a>
                <a href="mailto:${M.officeEmail}" class="btn btn-outline-primary">${M.officeEmail}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-cards-container mb-4">
          <div class="contact-card" data-href="${t}"><div class="icon-box"><i class="bi bi-geo-alt"></i></div><div class="contact-text"><h4>Address</h4><p>Accra, Ghana</p></div></div>
          <div class="contact-card" data-href="mailto:${M.officeEmail}"><div class="icon-box"><i class="bi bi-envelope"></i></div><div class="contact-text"><h4>Email</h4><p><a href="mailto:${M.officeEmail}">${M.officeEmail}</a></p></div></div>
          <div class="contact-card" data-href="tel:${M.phoneTel}"><div class="icon-box"><i class="bi bi-telephone"></i></div><div class="contact-text"><h4>Phone</h4><p><a href="tel:${M.phoneTel}">${M.phoneDisplay}</a></p></div></div>
          <div class="contact-card"><div class="icon-box"><i class="bi bi-clock"></i></div><div class="contact-text"><h4>Hours</h4><p>${M.hours.split(` · `)[0]}</p></div></div>
        </div>

        <div class="kb-contact-split">
          <div class="kb-contact-map-col">
            <div class="kb-contact-map-header">
              <span class="kb-kicker">Location</span>
              <h3>Find us on the map</h3>
              <p>${M.addressLine1}, ${M.addressLine2}</p>
              <a href="${t}" class="kb-map-ext-link" target="_blank" rel="noopener">
                <i class="bi bi-box-arrow-up-right"></i> Open in Google Maps
              </a>
            </div>
            <div class="kb-contact-map-embed">
              <iframe title="Kinder Bubble International School on Google Maps" src="${e}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div class="kb-contact-form-col">
            <div class="kb-contact-form-inner">
              <span class="kb-kicker">Get in touch</span>
              <h3>Feedback and enquiries</h3>
              <p class="kb-form-lead">Tell us exactly what you need — include your child's age or class if relevant.</p>
              <form action="#" method="post" class="php-email-form" data-form-type="contact-feedback">
                <div class="row g-3">
                  <div class="col-sm-6"><input type="text" name="name" class="form-control" placeholder="Your name" required=""></div>
                  <div class="col-sm-6"><input type="email" class="form-control" name="email" placeholder="Your email" required=""></div>
                  <div class="col-sm-6"><input type="tel" class="form-control" name="phone" placeholder="Phone number"></div>
                  <div class="col-sm-6">
                    <select class="form-select" name="subject" required="">
                      <option selected="" disabled="">What is this about?</option>
                      <option>Admissions and fees</option>
                      <option>Plan a visit</option>
                      <option>Feedback for school leadership</option>
                      <option>Medical, allergy, or pick-up update</option>
                      <option>Partnership or event enquiry</option>
                    </select>
                  </div>
                  <div class="col-12"><textarea class="form-control" name="message" rows="5" placeholder="Please give as much detail as you can" required=""></textarea></div>
                </div>
                <div class="my-3"><div class="loading">Loading</div><div class="error-message"></div><div class="sent-message">Your message has been sent. Thank you!</div></div>
                <div class="kb-form-footer">
                  <p class="small text-muted mb-0">Or email <a href="mailto:${M.officeEmail}">${M.officeEmail}</a> · <a href="tel:${M.phoneTel}">${M.phoneDisplay}</a></p>
                  <button type="submit" class="kb-form-submit-btn">Send message <i class="bi bi-send"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="kb-contact-faq" data-aos="fade-up">
          <div class="kb-faq-inner">
            <div class="kb-faq-header">
              <h2>Frequently asked questions</h2>
              <p>Questions families ask most often before visiting or enrolling.</p>
            </div>
            <div class="accordion kb-faq-accordion" id="contactFaq">
              ${[[`What languages do you teach?`,`We teach in English and French, with bilingual lessons that help children build confidence in both languages.`],[`How do you encourage interactive play?`,`Teachers model sharing, turn-taking, gentle hands, and kind language so cooperative play becomes natural.`],[`How do you handle separation and transition?`,`We begin with short separation times, build trust gradually, and create transition plans that fit each child.`],[`When and where should I drop my child off?`,`Children may be dropped off from 7:30 a.m. Supervision is provided on the school compound every morning.`],[`What are afternoon pick-up procedures?`,`Children are supervised near the pick-up area and released through the school routine. Authorised pick-up details should be kept current.`],[`What happens if my child gets sick or hurt?`,`Your child is evaluated and treated immediately. Parents are contacted right away for serious injury, illness, or when a child needs to go home.`],[`What curriculum do you use?`,`KBIS uses Cambridge-aligned early learning and primary strategies, with phonics, literacy, handwriting, everyday maths, and bilingual exposure.`],[`Do children nap?`,`Younger children and children staying for extended afternoon care have rest time after lunch, often with a story or quiet music.`]].map(([e,t],n)=>`
                <div class="accordion-item">
                  <h3 class="accordion-header" id="faqHead${n}">
                    <button class="accordion-button ${n===0?``:`collapsed`}" type="button" data-bs-toggle="collapse" data-bs-target="#faqPanel${n}" aria-expanded="${n===0?`true`:`false`}" aria-controls="faqPanel${n}">${e}</button>
                  </h3>
                  <div id="faqPanel${n}" class="accordion-collapse collapse ${n===0?`show`:``}" aria-labelledby="faqHead${n}" data-bs-parent="#contactFaq">
                    <div class="accordion-body">${t}</div>
                  </div>
                </div>`).join(``)}
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function or(e){let t=e.split(` `);return{day:t[0],month:t.slice(1).join(` `)||`KBIS`}}function sr(){return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Events</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Events</li></ol></nav>
      </div>
    </div>
    <section id="events-extended" class="events-extended section kb-events-page">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="events-list kb-event-list">
              ${er.map(({title:e,label:t,excerpt:n,image:r,slug:i},a)=>{let o=or(t);return`
                <article class="event-item" data-aos="fade-up" data-aos-delay="${a*80}" data-href="/event-details/${i}">
                  <div class="kb-event-thumb"><img src="${r}" alt="" loading="lazy"></div>
                  <div class="event-date"><span class="day">${o.day}</span><span class="month">${o.month}</span></div>
                  <div class="event-content">
                    <h3 class="event-title">${e}</h3>
                    <div class="event-meta"><span><i class="bi bi-images"></i> Photos and highlights</span><span><i class="bi bi-journal-text"></i> Event story</span></div>
                    <p class="event-description">${n}</p>
                    <a href="/event-details/${i}" class="btn-event-details">View details <i class="bi bi-arrow-right"></i></a>
                  </div>
                </article>`}).join(``)}
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="events-sidebar kb-sticky-sidebar">
              <div class="sidebar-item categories" data-aos="fade-up">
                <h4>Event archive</h4>
                <p class="small text-muted mb-3">Browse highlights from school programmes, trips, celebrations, performances, and learning showcases that have already taken place.</p>
                <a href="/resources/gallery" class="btn btn-primary btn-sm w-100">Open gallery</a>
              </div>
              <div class="sidebar-item upcoming-events" data-aos="fade-up" data-aos-delay="100">
                <h4>Featured album</h4>
                <div class="featured-event"><img src="/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg" alt="" class="img-fluid" loading="lazy"><div class="featured-event-details"><h5>Trips and national moments</h5><a href="/resources/gallery" class="btn-sm btn-register">View photos</a></div></div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  `}function cr(){return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">News</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">News</li></ol></nav>
      </div>
    </div>
    <section id="news-hero" class="news-hero section kb-news-page">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="kb-news-grid">
          ${tr.map(({day:e,month:t,title:n,category:r,type:i,excerpt:a,image:o,views:s,slug:c},l)=>{let u=`/news-details/${c}`;return`
            <div data-aos="fade-up" data-aos-delay="${100+l*70}">
              <article class="kb-news-card" data-href="${u}">
                <a class="kb-news-card-image" href="${u}" aria-label="${n}">
                  <img src="${o}" alt="" loading="lazy">
                  <span class="kb-news-date"><strong>${e}</strong><small>${t}</small></span>
                </a>
                <div class="kb-news-card-body">
                  <div class="kb-news-meta">
                    <span>${r}</span>
                    <b>${i}</b>
                    <em><i class="bi bi-share"></i></em>
                    <em><i class="bi bi-eye"></i>${s}</em>
                  </div>
                  <h2><a href="${u}">${n}</a></h2>
                  <p>${a}</p>
                  <a class="kb-news-read-more" href="${u}">Read more</a>
                </div>
              </article>
            </div>`}).join(``)}
        </div>
        <div class="kb-news-note mt-5" data-aos="fade-up">
          <div><h3>What belongs in news?</h3><p>Operational updates, curriculum notes, partnerships, policy reminders, new forms, changes in school routines, and family notices.</p></div>
          <div><h3>What belongs in events?</h3><p>Grand programmes like anniversaries, graduations, open mornings, educational trips, culture days, and celebrations of learning.</p></div>
        </div>
      </div>
    </section>
  `}function lr(){return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Our team</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Our team</li></ol></nav>
      </div>
    </div>
    <section id="faculty--staff" class="faculty--staff section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row mb-5">
          <div class="col-lg-10 mx-auto">
            <div class="p-4 p-lg-5 rounded-4 kb-team-intro-panel" data-aos="fade-up">
              <p class="text-uppercase small fw-semibold kb-team-intro-kicker mb-2">Our team</p>
              <h2 class="h4 mb-3">Educators you meet in person</h2>
              <p class="text-muted mb-0">KBIS introduces classroom leads and specialists when you visit — so conversations stay personal and focused on your child. Explore academics for our approach, then book a tour through admissions or contact.</p>
              <div class="d-flex flex-wrap gap-2 mt-4">
                <a href="/academics" class="btn btn-outline-primary btn-sm">Academics</a>
                <a href="/admissions" class="btn btn-primary btn-sm">Plan a visit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="faculty-grid">
          <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="faculty-card">
                <div class="faculty-image">
                  <img src="/assets/images/learning/outdoor-presentation-kbis-08.jpeg" class="img-fluid" alt="${M.principal}" loading="lazy">
                  <div class="social-links">
                    <a href="mailto:${M.officeEmail}" aria-label="Email"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
                <div class="faculty-info">
                  <h3>${M.principal}</h3>
                  <p class="position">Principal</p>
                  <div class="department">${M.legalName}</div>
                  <div class="research-tags"><span>Leadership</span><span>Early years &amp; primary</span><span>Family partnership</span></div>
                  <a href="/about" class="profile-link">Our story</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="faculty-card">
                <div class="faculty-image">
                  <img src="/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg" class="img-fluid" alt="Teaching team" loading="lazy">
                  <div class="social-links">
                    <a href="/contact" aria-label="Contact"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
                <div class="faculty-info">
                  <h3>Teaching &amp; learning team</h3>
                  <p class="position">Classroom educators</p>
                  <div class="department">${M.curriculum}</div>
                  <div class="research-tags"><span>Cambridge pathway</span><span>Bilingual exposure</span><span>Child-centred practice</span></div>
                  <a href="/academics" class="profile-link">Academics</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="faculty-card">
                <div class="faculty-image">
                  <img src="/assets/images/students/formal-uniform-students-kbis-01.jpeg" class="img-fluid" alt="Support staff" loading="lazy">
                  <div class="social-links">
                    <a href="/contact" aria-label="Contact"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
                <div class="faculty-info">
                  <h3>Care &amp; operations</h3>
                  <p class="position">Support &amp; safety</p>
                  <div class="department">${M.hours}</div>
                  <div class="research-tags"><span>${M.highlights[2]}</span><span>Routines</span><span>Reception</span></div>
                  <a href="/contact" class="profile-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}var ur=JSON.stringify({loop:!0,speed:600,autoplay:{delay:5e3},slidesPerView:1,spaceBetween:30,pagination:{el:`.swiper-pagination`,type:`bullets`,clickable:!0},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}});function dr(){return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Student life</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Student life</li></ol></nav>
      </div>
    </div>
    <section id="students-life" class="students-life section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="200">
            <img src="/assets/images/learning/girl-presenting-in-class-gallery.jpeg" class="img-fluid rounded" alt="Student life" loading="lazy">
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="student-life-intro">
              <h3>A calm, joyful rhythm</h3>
              <p>Days at KBIS balance focused learning blocks with art, music, physical play, and time outdoors. Children practice sharing, problem-solving, and trying again when something is tricky — skills that matter far beyond the classroom.</p>
              <p>${M.curriculum}. ${M.highlights[0]}</p>
              <div class="mt-4">
                <a href="/campus-facilities" class="btn btn-outline-primary">Explore campus</a>
              </div>
            </div>
          </div>
        </div>

        <div class="student-organizations mt-5 pt-4" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-center mb-4">Clubs &amp; experiences</h3>
          <div class="row g-4">
            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div class="organization-card">
                <div class="icon-box"><i class="bi bi-music-note-beamed"></i></div>
                <h5>Music &amp; creativity</h5>
                <p>Songs, movement, and early performance confidence woven into the week — not as pressure, but as joy.</p>
                <span class="badge">All ages</span>
              </div>
            </div>
            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="organization-card">
                <div class="icon-box"><i class="bi ${N.languageCulture}"></i></div>
                <h5>Language &amp; culture</h5>
                <p>English and French exposure through stories, routines, and classroom language that matches how young minds learn.</p>
                <span class="badge">Daily rhythm</span>
              </div>
            </div>
            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <div class="organization-card">
                <div class="icon-box"><i class="bi ${N.inquiryDiscovery}"></i></div>
                <h5>Discovery &amp; inquiry</h5>
                <p>Hands-on science, numeracy games, and literacy corners that invite curiosity at every stage.</p>
                <span class="badge">Creche – primary</span>
              </div>
            </div>
          </div>
        </div>

        <div class="athletics-programs mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-center mb-4">Movement &amp; play</h3>
          <div class="athletics-slider swiper init-swiper" data-aos="fade-up" data-aos-delay="300">
            <script type="application/json" class="swiper-config">${ur}<\/script>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/images/extra-curricular/power-rangers-performance-kbis-05.jpeg" class="img-fluid" loading="lazy" alt="Outdoor play">
                  <div class="athletics-content"><h5>Outdoor play</h5><p>${M.highlights[0]}</p></div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/images/facilities/blue-stairwell-hero.jpeg" class="img-fluid" loading="lazy" alt="Structured play">
                  <div class="athletics-content"><h5>Structured play</h5><p>Gross-motor challenge balanced with calm transitions back to learning.</p></div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/images/students/children-seated-in-class-gallery.jpeg" class="img-fluid" loading="lazy" alt="Collaboration">
                  <div class="athletics-content"><h5>Team games</h5><p>Cooperation, turn-taking, and healthy competition at age-appropriate levels.</p></div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="campus-facilities mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-center mb-4">Spaces children use every day</h3>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="facility-card">
                <img src="/assets/images/students/formal-uniform-students-kbis-01.jpeg" class="img-fluid" alt="Classrooms" loading="lazy">
                <div class="facility-info"><h5>Learning studios</h5><p>Bright, age-right layouts for literacy, numeracy, and inquiry.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div class="facility-card">
                <img src="/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg" class="img-fluid" alt="Early years" loading="lazy">
                <div class="facility-info"><h5>Early years suites</h5><p>Secure, nurturing spaces for our youngest learners.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div class="facility-card">
                <img src="/assets/images/extra-curricular/birthday-party-classroom-kbis-06.jpeg" class="img-fluid" alt="Community" loading="lazy">
                <div class="facility-info"><h5>Community moments</h5><p>Celebrations and showcases built around encouragement.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div class="facility-card">
                <img src="/assets/images/students/smiling-boy-in-class-kbis-07.jpeg" class="img-fluid" alt="Outdoor" loading="lazy">
                <div class="facility-info"><h5>Outdoor learning</h5><p>Fresh air and movement as part of the regular timetable.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function fr(e){return tr.find(t=>t.slug===e)||tr[0]}function pr(e){let t=fr(e);return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">News article</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li><a href="/news">News</a></li><li class="current">${t.title}</li></ol></nav>
      </div>
    </div>
    <section id="blog-details" class="blog-details section">
      <div class="container" data-aos="fade-up">
        <article class="article">
          <div class="article-header">
            <div class="meta-categories" data-aos="fade-up">
              <a href="/news" class="category">${t.category}</a>
              <a href="/news" class="category">${t.type}</a>
            </div>
            <h1 class="title" data-aos="fade-up" data-aos-delay="100">${t.title}</h1>
            <div class="article-meta" data-aos="fade-up" data-aos-delay="200">
              <div class="author">
                <img src="/assets/images/others/school-logo.png" alt="" class="author-img" loading="lazy">
                <div class="author-info"><h4>KBIS office</h4><span>${t.category}</span></div>
              </div>
              <div class="post-info">
                <span><i class="bi bi-calendar4-week"></i> ${t.day} ${t.month}</span>
                <span><i class="bi bi-eye"></i> ${t.views} views</span>
                <span><i class="bi bi-geo-alt"></i> ${M.addressLine2}</span>
              </div>
            </div>
          </div>
          <div class="article-featured-image" data-aos="zoom-in">
            <img src="${t.image}" alt="" class="img-fluid" loading="lazy">
          </div>
          <div class="article-wrapper">
            <aside class="table-of-contents" data-aos="fade-left">
              <h3>On this page</h3>
              <nav>
                <ul>
                  ${t.sections.map((e,t)=>`<li><a href="#${e.id}"${t===0?` class="active"`:``}>${e.navLabel}</a></li>`).join(``)}
                </ul>
              </nav>
            </aside>
            <div class="article-content">
              ${t.sections.map((e,t)=>`
              <div class="content-section" id="${e.id}" data-aos="fade-up">
                ${e.heading?`<h2>${e.heading}</h2>`:``}
                ${e.paragraphs.map((e,n)=>`<p${t===0&&n===0?` class="lead"`:``}>${e}</p>`).join(``)}
              </div>`).join(``)}
            </div>
          </div>
        </article>
      </div>
    </section>
  `}function mr(e){let t=tr.find(t=>t.slug===e);return t?{title:`${t.title} · Kinder Bubble International School`,bodyClass:`news-details-page`,mainHtml:pr(e)}:null}function hr(e){return er.find(t=>t.slug===e)||er[0]}function gr(e){let t=hr(e),n=er.filter(e=>e.slug!==t.slug).slice(0,2);return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Event details</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li><a href="/events">Events</a></li><li class="current">${t.title}</li></ol></nav>
      </div>
    </div>
    <section id="event" class="event section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-8">
            <div class="event-image mb-4" data-aos="fade-up">
              <img src="${t.image}" alt="" class="img-fluid rounded" loading="lazy">
            </div>
            <div class="event-meta mb-4" data-aos="fade-up" data-aos-delay="100">
              <div class="row g-3">
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-calendar-date"></i><span>${t.label}</span></div></div>
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-camera"></i><span>Photos available</span></div></div>
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-geo-alt"></i><span>${M.addressLine2}</span></div></div>
              </div>
            </div>
            <div class="event-content" data-aos="fade-up" data-aos-delay="200">
              <h2>${t.title}</h2>
              ${t.body.map(e=>`<p>${e}</p>`).join(``)}
              <h3 class="mt-4">How the event went</h3>
              <ul class="event-highlights">
                ${t.highlights.map(e=>`<li><i class="bi bi-check-circle"></i><span>${e}</span></li>`).join(``)}
              </ul>
              <h3 class="mt-4">Related images</h3>
              <div class="kb-event-photo-links">
                ${t.gallery.map(([e,t])=>`<a href="/resources/gallery"><img src="${e}" alt="" loading="lazy"><span>${t}</span></a>`).join(``)}
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="event-sidebar">
              <div class="sidebar-widget registration-form" data-aos="fade-left" data-aos-delay="200">
                <h3>Event archive</h3>
                <p>This page records highlights from a completed KBIS event. Use the gallery to see more photos connected to school activities, trips, performances, and celebrations.</p>
                <a href="/resources/gallery" class="btn btn-register w-100">Open gallery</a>
              </div>
              <div class="sidebar-widget organizer-info" data-aos="fade-left" data-aos-delay="300">
                <h3>Recorded by</h3>
                <div class="organizer-details">
                  <div class="organizer-image"><img src="/assets/images/others/school-logo.png" class="img-fluid rounded" alt="KBIS" loading="lazy"></div>
                  <div class="organizer-content">
                    <h4>${M.shortName}</h4>
                    <p class="organizer-position">School community</p>
                    <p>For event photo or information requests:</p>
                    <div class="organizer-contact">
                      <p><i class="bi bi-envelope"></i> <a href="mailto:${M.officeEmail}">${M.officeEmail}</a></p>
                      <p><i class="bi bi-telephone"></i> <a href="tel:${M.phoneTel}">${M.phoneDisplay}</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget related-events" data-aos="fade-left" data-aos-delay="400">
                <h3>More event stories</h3>
                ${n.map(e=>{let t=or(e.label);return`
                <div class="related-event-item" data-href="/event-details/${e.slug}">
                  <div class="related-event-date"><span class="day">${t.day}</span><span class="month">${t.month}</span></div>
                  <div class="related-event-info"><h4><a href="/event-details/${e.slug}">${e.title}</a></h4><p><i class="bi bi-images"></i> Photos and highlights</p></div>
                </div>`}).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function _r(e){let t=er.find(t=>t.slug===e);return t?{title:`${t.title} · Kinder Bubble International School`,bodyClass:`event-details-page`,mainHtml:gr(e)}:null}function vr(){return`
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Policies</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/resources/gallery">Resources</a></li>
            <li class="current">Policies</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="section kb-policy-page">
      <div class="container" data-aos="fade-up">
        <div class="kb-policy-hero row g-4 align-items-stretch">
          <div class="col-lg-7">
            <div class="kb-page-hero-copy">
              <p class="kb-kicker">Parent guide</p>
              <h2>Clear routines keep children safe, settled, and ready to learn.</h2>
              <p>These policy summaries bring together the parent handbook, admission form, medical form, pick-up authorisation form, and school brochure so families can quickly understand what KBIS expects and what the school commits to.</p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="kb-page-hero-image">
              <img src="/assets/images/students/children-seated-blue-classroom.jpeg" alt="Children seated safely in class" loading="lazy">
            </div>
          </div>
        </div>

        <div class="kb-policy-alert mt-4" data-aos="fade-up">
          <i class="bi bi-info-circle"></i>
          <p class="mb-0">For any policy question or special circumstance, contact the office at <a href="tel:${M.phoneTel}">${M.phoneDisplay}</a> or <a href="mailto:${M.officeEmail}">${M.officeEmail}</a>.</p>
        </div>

        <div class="row g-4 mt-4 kb-policy-sections">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-calendar-check"></i></div>
              <h3>Attendance and punctuality</h3>
              <p>Regular attendance gives each child the best chance to learn, participate, and keep pace with class routines.</p>
              <ul>
                <li>Parents should report every absence to the school office before 8:00 a.m.</li>
                <li>Students are expected to attend daily, arrive on time, and participate fully.</li>
                <li>Make-up work should be completed within the time advised by the teacher.</li>
                <li>Persistent lateness interrupts learning and may require a parent meeting.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="180">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-door-open"></i></div>
              <h3>Drop-off, pick-up, and early release</h3>
              <p>Children are released only through safe routines and authorised adult collection procedures.</p>
              <ul>
                <li>Morning drop-off starts from 7:30 a.m.; children are supervised on the compound.</li>
                <li>Parents should schedule appointments after 3:15 p.m. where possible.</li>
                <li>Early release requires a parent note or direct communication with the school.</li>
                <li>Authorised pick-up people must be listed, and valid ID copies should be submitted.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="260">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi ${N.healthPolicy}"></i></div>
              <h3>Health, medical conditions, and allergies</h3>
              <p>Health details must be documented so teachers, kitchen staff, and substitute staff can protect each child.</p>
              <ul>
                <li>Parents should describe medical conditions, allergies, likely reactions, and required staff response.</li>
                <li>Food allergies, dietary restrictions, foods to avoid, and contact restrictions should be recorded clearly.</li>
                <li>Life-threatening allergies or conditions require an emergency health care plan completed by a physician.</li>
                <li>Parents should update the office whenever medical or allergy information changes.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="340">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-cup-hot"></i></div>
              <h3>Meals, snacks, and hygiene</h3>
              <p>KBIS provides balanced meals and follows cleaning and hand-washing routines around food service.</p>
              <ul>
                <li>Meals include appropriate portions of protein, carbohydrate, fruits, and vegetables.</li>
                <li>Children wash hands before meals and go directly to the eating area.</li>
                <li>Tables, preparation surfaces, and food equipment are cleaned before and after food use.</li>
                <li>Religious, cultural, personal, and health-related dietary restrictions are respected.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="420">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-people"></i></div>
              <h3>Parent communication and responsibilities</h3>
              <p>Partnership between parents, guardians, and teachers helps each learner reach their potential.</p>
              <ul>
                <li>Parents should keep emergency contacts and authorised collection details current.</li>
                <li>Families should share learning, health, dietary, and behaviour information that helps staff support the child.</li>
                <li>Parents may contact the office for school notices, class updates, calendars, and admission guidance.</li>
                <li>School policies and records may be reviewed through the office during regular hours.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-cash-coin"></i></div>
              <h3>Fees and payments</h3>
              <p>Families should confirm current fees and payment details directly with the administration before payment.</p>
              <ul>
                <li>The brochure notes that fees include tuition, stationery, and lunch.</li>
                <li>Breakfast and snacks may be available upon request at a termly cost.</li>
                <li>Extra-curricular activities may carry separate fees and require sign-up through administration.</li>
                <li>Payment details should always be verified with the school office before sending funds.</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="kb-policy-downloads mt-5" data-aos="fade-up">
          <div class="section-title">
            <h2>Documents for parents</h2>
            <p>Download the forms below if you need to complete, review, or submit them to the school office.</p>
          </div>
          <div class="row g-3">
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/KBIS-Application-form.docx" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${N.applicationForm}"></i></span>
                <span><strong>Application form</strong><small>Child details, guardian contacts, prior school details, language, religion, and admission criteria.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/Kinder-Bubble-Medical.docx" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${N.medicalForm}"></i></span>
                <span><strong>Medical and allergy form</strong><small>Medical condition, allergy, diet, emergency care plan, and parent agreement.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/After-School-Pick-up-Authorisation-Forms.docx" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${N.pickUpAuth}"></i></span>
                <span><strong>Pick-up authorisation</strong><small>Authorised collection names, phone numbers, valid ID reminder, and parent confirmation.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/mini-brochure.pdf" class="kb-resource-card d-flex gap-3 text-decoration-none" target="_blank" rel="noopener noreferrer">
                <span class="kb-resource-icon"><i class="bi ${N.brochure}"></i></span>
                <span><strong>Mini brochure</strong><small>Mission, vision, bilingual studies, extra-curricular activities, feeding, trips, fees, and payment guide.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/privacy" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${N.privacy}"></i></span>
                <span><strong>Privacy policy</strong><small>Website enquiries, submitted information, and data handling.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/terms-of-service" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${N.terms}"></i></span>
                <span><strong>Terms of service</strong><small>Website use and general service information.</small></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}var yr={mission:`/assets/images/learning/students-at-classroom-desks.jpeg`,board:`/assets/images/others/nana-asamoah-boadu.jpg`,director:`/assets/images/students/two-students-in-formal-uniforms.jpeg`,principal:`/assets/images/others/staff-member-at-desk.jpg`,teaching:`/assets/images/learning/teacher-guided-table-activity.jpeg`,support:`/assets/images/students/children-seated-blue-classroom.jpeg`,curriculum:`/assets/images/learning/students-smiling-at-computers.jpeg`,programmes:`/assets/images/students/three-children-smiling-uniforms.jpeg`,languages:`/assets/images/learning/children-reading-together.jpeg`,calendar:`/assets/images/extra-curricular/students-under-event-tent.jpeg`,src:`/assets/images/students/girl-in-formal-uniform-under-tent.jpeg`,houses:`/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg`,extra:`/assets/images/extra-curricular/karate-class-on-lawn.jpeg`,form:`/assets/images/learning/student-writing-in-notebook.jpeg`,visit:`/assets/images/facilities/purple-classroom-panorama.jpg`,payment:`/assets/images/facilities/school-building-aerial-view.jpeg`,handbook:`/assets/images/learning/child-presenting-poster.jpeg`,gallery:`/assets/images/extra-curricular/school-excursion-group-photo.jpeg`,partnership:`/assets/images/others/global-school-alliance-certificate.png`},br=e=>/\.pdf(\?|#|$)/i.test(e)?` target="_blank" rel="noopener noreferrer"`:``,xr=[{title:`Application form`,href:`/assets/docs/KBIS-Application-form.docx`,text:`Child details, guardian contacts, previous childcare information, language, religion, and admission criteria.`,icon:N.applicationForm},{title:`Medical and allergy form`,href:`/assets/docs/Kinder-Bubble-Medical.docx`,text:`Medical conditions, allergies, dietary restrictions, emergency care plan, and parent agreement.`,icon:N.medicalForm},{title:`After-school pick-up authorisation`,href:`/assets/docs/After-School-Pick-up-Authorisation-Forms.docx`,text:`Authorised pick-up names, phone numbers, ID reminder, and parent confirmation process.`,icon:N.pickUpAuth},{title:`Mini brochure`,href:`/assets/docs/mini-brochure.pdf`,text:`Mission, vision, bilingual studies, extra-curricular activities, feeding, trips, fees, and payment guide.`,icon:N.brochure}],Sr=[[`Nana Asamoah Boadu`,`Sole shareholder and board member; experienced finance and enterprise leader. He supports the school with disciplined stewardship, long-term planning, and a clear commitment to building an institution that serves families with consistency and care. His guidance helps keep the school focused on responsible growth, sound investment in facilities, and dependable systems behind the classroom experience. Through his oversight, KBIS continues to strengthen the foundations that allow teachers, families, and children to thrive together.`,`/assets/images/others/nana-asamoah-boadu.jpg`],[`Dr. Ernest Ofori Sarpong`,`Industrialist, entrepreneur, and board leader with broad business experience. His perspective strengthens governance, strategic growth, and practical decision-making as KBIS continues to expand its learning environment and community impact. He brings an enterprise-minded approach to planning, accountability, and institutional excellence. His contribution supports a school culture that values ambition, service, and the confidence to prepare young learners for a wider world.`,`/assets/images/others/dr-ernest-ofori-sarpong.jpeg`],[`Prof. Joseph Osafo`,`Clinical and health psychology professor, consultant, and child development advocate. He brings insight into wellbeing, family support, and the emotional foundations children need to feel safe, confident, and ready to learn. His experience helps the board consider the whole child, from classroom confidence and peer relationships to resilience, care, and healthy routines. This perspective strengthens KBIS as a nurturing environment where academic progress is supported by emotional security and thoughtful pastoral care.`,`/assets/images/others/prof-joseph-osafo.jpeg`],[`Rev. Alexander Asirifi`,`Minister, finance graduate, and education-supporting community leader. His contribution reinforces character formation, ethical leadership, and the school's desire to nurture children with both academic strength and sound values. He supports the board with a steady focus on service, integrity, and the kind of community life that helps children feel known and guided. His leadership encourages KBIS to keep values, responsibility, and care at the centre of every decision made for learners and families.`,`/assets/images/others/rev-alexander-asirifi.jpeg`]],Cr=[[`Mr. Lamine`,`Classroom lead`,`/assets/images/learning/teacher-with-small-class.jpeg`,`Leads primary class delivery and lesson structure, bringing high expectations and warm discipline to every school day. Mentors classroom staff and ensures each child progresses with confidence and purpose.`,[`Literacy`,`Cambridge curriculum`,`Leadership`]],[`Ms. Clemence`,`Early years teacher`,`/assets/images/learning/teacher-guided-table-activity.jpeg`,`Builds early literacy and bilingual foundations through play, story, and guided discovery. Helps young children settle into structured learning while enjoying every part of their school day.`,[`Early years`,`Play-based learning`,`Bilingual`]],[`Ms. Sheila`,`Foundation support`,`/assets/images/learning/teacher-helping-children-at-table.jpg`,`Works directly with foundation-stage children to develop phonics, number sense, and classroom confidence. Known for her patient, encouraging presence that helps children feel safe to try new things.`,[`Foundation stage`,`Phonics`,`Numeracy`]],[`Mr. Enoch`,`Primary support`,`/assets/images/extra-curricular/school-excursion-students-with-teacher.jpeg`,`Supports primary learners through small group work, focused coaching, and gentle accountability. Helps children who need extra pace or encouragement feel capable and ready to grow.`,[`Primary years`,`Group coaching`,`Sciences`]],[`Ms. Hannah`,`Nursery teacher`,`/assets/images/extra-curricular/teacher-assisting-playground-children.jpeg`,`Cares for nursery children through song, movement, story, and careful routine. Builds the social and emotional foundations children carry with them through every stage of school.`,[`Nursery`,`Social skills`,`Creative arts`]],[`Ms. Lizzy`,`Learning assistant`,`/assets/images/others/staff-member-at-desk.jpg`,`Assists across classrooms to keep learning moving — supporting individual children, managing materials, and ensuring every learner gets the attention they need throughout the day.`,[`Learning support`,`Differentiation`,`Classroom`]],[`Ms. Mabel`,`Classroom support`,`/assets/images/extra-curricular/teacher-with-costumed-child.jpeg`,`Provides calm, consistent support across year groups, helping children with transitions, activities, and daily routines. Her warmth makes the classroom a comfortable space for every child.`,[`Transitions`,`Wellbeing`,`Routines`]],[`Ms. Yvette`,`Bilingual learning`,`/assets/images/learning/teacher-guided-table-activity.jpeg`,`Leads French language exposure across stages, weaving bilingual vocabulary and expression into daily lessons. Helps children become confident communicators in both English and French.`,[`French`,`Bilingual`,`Communication`]],[`Ms. Priscilla`,`Early years support`,`/assets/images/learning/teacher-helping-children-at-table.jpg`,`Works alongside early years teachers to give each child focused attention during activities, meals, and transitions. Supports the steady, caring rhythm that young learners depend on.`,[`Early years`,`Pastoral care`,`Transitions`]],[`Ms. Mercy`,`Care and routines`,`/assets/images/extra-curricular/teacher-serving-career-day-food.jpeg`,`Oversees the care routines that keep children settled and healthy throughout the day — from breakfast to rest time — with a warm and attentive approach to each child's individual needs.`,[`Care routines`,`Nutrition`,`Pastoral`]],[`Ms. Beatrice`,`Classroom assistant`,`/assets/images/learning/teacher-with-small-class.jpeg`,`Helps teachers run smooth, productive lessons by supporting children with activities, resources, and transitions. A reliable presence who knows and responds to each child's needs.`,[`Classroom`,`Resources`,`Activities`]]],wr=[[`Ms. Dorothy`,`Receptionist`,`/assets/images/others/staff-member-at-desk.jpg`,`Manages the front desk and daily school operations with efficiency and a welcoming manner. The first point of contact for families, visitors, and new enquiries every morning.`,[`Administration`,`Family liaison`,`Records`]],[`Mr. Kofi`,`Security officer`,`/assets/images/extra-curricular/students-lined-up-outdoors.jpeg`,`Oversees the school gate, manages authorised pick-up procedures, and ensures only verified persons enter the premises. Keeps children and staff safe from arrival to dismissal.`,[`Gate security`,`Pick-up`,`Safety`]],[`Ms. Abena`,`Kitchen supervisor`,`/assets/images/extra-curricular/staff-serving-food-at-event.jpeg`,`Leads meal preparation, manages kitchen hygiene standards, and accommodates individual dietary needs. Ensures every child receives a nutritious, well-prepared meal each school day.`,[`Nutrition`,`Hygiene`,`Meal planning`]],[`Ms. Gloria`,`Health & welfare`,`/assets/images/learning/children-holding-green-apple.jpeg`,`Maintains health records, administers first aid, and monitors the daily wellbeing of children. Communicates promptly with families about health incidents and individual care plans.`,[`First aid`,`Health records`,`Welfare`]],[`Mr. Samuel`,`Facilities officer`,`/assets/images/extra-curricular/school-excursion-students-with-teacher.jpeg`,`Keeps the school environment clean, safe, and functional. Coordinates maintenance tasks, inspects equipment, and ensures every space is ready and safe for daily use.`,[`Maintenance`,`Safety checks`,`Facilities`]],[`Ms. Afia`,`Admin assistant`,`/assets/images/extra-curricular/teacher-serving-career-day-food.jpeg`,`Supports the admin team with correspondence, scheduling, documentation, and family communication. Helps keep the school's daily operations running smoothly behind the scenes.`,[`Administration`,`Scheduling`,`Communication`]]],Tr={kwameNkrumahDay:21,farmersDay:4,christmas:25,boxingDay:26,newYear:1,constitutionDay:7,independenceDay:6,goodFriday:26,easterMonday:29,workersDay:1,foundersDay:4},Er=e=>{if(typeof e!=`number`)return e;let t=[`th`,`st`,`nd`,`rd`],n=e%100;return`${e}${t[(n-20)%10]||t[n]||t[0]}`},Dr=[{title:`Term one`,period:`September - December 2026`,items:[[`September`,`Opening routines, settling-in, baseline learning checks, and Kwame Nkrumah Memorial Day (${Er(Tr.kwameNkrumahDay)}).`],[`October`,`Class routines, family communication, project work, and early term progress reviews (1st - 31st).`],[`November`,`Core learning consolidation, themed activities, and preparation for end-of-term sharing (1st - 30th).`],[`December`,`Farmers Day (${Er(Tr.farmersDay)}), end-of-term activities, Christmas break (${Er(Tr.christmas)}), and Boxing Day (${Er(Tr.boxingDay)}).`]]},{title:`Term two`,period:`January - April 2027`,items:[[`January`,`New Year (${Er(Tr.newYear)}), Constitution Day (${Er(Tr.constitutionDay)}), term restart, and refreshed learning targets.`],[`February`,`Class projects, bilingual learning rhythm, and parent check-ins where needed (1st - 28th).`],[`March`,`Independence Day (${Er(Tr.independenceDay)}), cultural learning moments, and mid-term assessment routines.`],[`April`,`Easter break (Good Friday ${Er(Tr.goodFriday)} to Easter Monday ${Er(Tr.easterMonday)}), end-of-term review, and family updates before the next term.`]]},{title:`Term three`,period:`May - August 2027`,items:[[`May`,`Workers Day (${Er(Tr.workersDay)}), final term planning, educational trips, and practical learning themes.`],[`June`,`Portfolio work, classroom showcases, sports and creative activities (1st - 30th).`],[`July`,`Graduation preparation, moving-up conversations, and end-of-year celebrations (1st - 31st).`],[`August`,`Founders Day (${Er(Tr.foundersDay)}), school break, admissions conversations, and preparation for September.`]]}],Or=[{role:`SRC President`,focus:`Student voice`,image:`/assets/images/students/girl-in-formal-uniform-under-tent.jpeg`,text:`Helps classmates practise speaking clearly, listening respectfully, and sharing age-appropriate ideas with teachers during school activities.`},{role:`Vice President`,focus:`Team support`,image:`/assets/images/students/three-children-smiling-uniforms.jpeg`,text:`Supports the president during class moments, group routines, and simple leadership duties that build confidence and responsibility.`},{role:`Secretary`,focus:`Class reminders`,image:`/assets/images/learning/girl-presenting-in-class-gallery.jpeg`,text:`Encourages careful communication, helps remember classroom responsibilities, and models organised habits for younger learners.`},{role:`Organising Lead`,focus:`Activities`,image:`/assets/images/extra-curricular/children-with-balloons-on-turf.jpeg`,text:`Helps children participate positively in games, celebrations, assemblies, and guided school-life activities.`}],kr=[{name:`Red House`,value:`Courage`,image:`/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg`,text:`Learners practise confidence, healthy effort, and the courage to try again during friendly house activities.`,accent:`coral`},{name:`Blue House`,value:`Wisdom`,image:`/assets/images/students/students-in-blue-uniforms-outdoor.jpg`,text:`Learners build focus, curiosity, and thoughtful participation through classroom and school-wide challenges.`,accent:`teal`},{name:`Green House`,value:`Service`,image:`/assets/images/learning/children-holding-green-apple.jpeg`,text:`Learners are encouraged to help, share, take turns, and notice the needs of others in daily routines.`,accent:`green`},{name:`Gold House`,value:`Excellence`,image:`/assets/images/extra-curricular/students-under-event-tent.jpeg`,text:`Learners celebrate steady progress, good effort, and pride in doing small things well every day.`,accent:`gold`}],Ar=[{title:`Classroom Learning`,topic:`Daily academics`,description:`Children reading, writing, using computers, and learning through guided classroom routines at KBIS.`,cover:`/assets/images/learning/girl-presenting-in-class-gallery.jpeg`,images:[[`/assets/images/learning/girl-presenting-in-class-gallery.jpeg`,`Birthday in the classroom`,`A classmate's birthday celebrated with cake and joy at school.`],[`/assets/images/learning/students-in-computer-lab.jpeg`,`Computer lab session`,`Learners exploring digital skills in the school's computer lab.`],[`/assets/images/learning/student-writing-in-notebook.jpeg`,`Focused classwork`,`A smiling learner concentrating on written work at his desk.`],[`/assets/images/learning/children-reading-together.jpeg`,`Reading together`,`KBIS learners from different year groups sharing a picture book.`],[`/assets/images/learning/teacher-guided-table-activity.jpeg`,`Teacher-guided learning`,`A teacher working closely with young learners at the classroom table.`],[`/assets/images/learning/child-presenting-poster.jpeg`,`Career day: future athletes`,`Learners dressed as their dream careers on school career day.`]]},{title:`Student Life`,topic:`Portraits and school day`,description:`Smiles, uniforms, friendships, play, and everyday moments that show the children at the heart of KBIS.`,cover:`/assets/images/students/three-children-smiling-uniforms.jpeg`,images:[[`/assets/images/students/three-children-smiling-uniforms.jpeg`,`Friends at school`,`Three KBIS learners sharing a cheerful moment in the school hall.`],[`/assets/images/students/formal-uniform-students-kbis-01.jpeg`,`Formal school uniform`,`Learners dressed neatly in KBIS formal school attire.`],[`/assets/images/students/children-seated-in-class-gallery.jpeg`,`Ready to learn`,`Young learners seated attentively during a class session.`],[`/assets/images/students/smiling-child-on-turf.jpeg`,`Joy on the turf`,`A carefree smile from a learner enjoying outdoor time on campus.`],[`/assets/images/students/girl-in-orange-uniform-portrait.jpeg`,`Confident learner`,`A girl in the KBIS orange uniform full of energy outdoors.`],[`/assets/images/students/boy-smiling-under-tent-closeup.jpeg`,`Smiling at the ceremony`,`A learner at an outdoor national ceremony, Ghana flag in hand.`]]},{title:`Trips and National Moments`,topic:`Excursions`,description:`Educational trips, Independence Square visits, bus moments, and national learning experiences beyond campus.`,cover:`/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg`,images:[[`/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg`,`Ghana flags at the Square`,`Two KBIS girls proudly waving Ghana flags at Independence Square.`],[`/assets/images/extra-curricular/students-group-at-independence-square.jpeg`,`Group photo at the Square`,`Students and teachers at Ghana's Independence Square on a national trip.`],[`/assets/images/extra-curricular/students-line-at-independence-square.jpeg`,`Learners with gift bags`,`Students at Independence Square, gift bags from the national ceremony.`],[`/assets/images/extra-curricular/school-excursion-group-photo.jpeg`,`Meeting national leaders`,`KBIS learners seated with national dignitaries at a state occasion.`],[`/assets/images/extra-curricular/students-on-bus-smiling.jpeg`,`Smiles on the road`,`Boys making memories on the way to a school excursion.`],[`/assets/images/extra-curricular/students-with-officer-on-excursion.jpeg`,`With the armed forces`,`Learners waving Ghana flags alongside military officers at a national event.`]]},{title:`Celebrations and Events`,topic:`School programmes`,description:`Birthdays, cooking day, costume performances, family events, and the celebrations that make school memorable.`,cover:`/assets/images/extra-curricular/parents-and-children-at-event.jpeg`,images:[[`/assets/images/extra-curricular/parents-and-children-at-event.jpeg`,`Chef costumes with family`,`A parent celebrating with young chefs at a school cooking event.`],[`/assets/images/extra-curricular/students-on-stage-at-event.jpeg`,`On stage together`,`Two KBIS boys at a formal school programme venue.`],[`/assets/images/extra-curricular/birthday-party-students.jpeg`,`Birthday party in class`,`Classmates celebrating a third birthday together at school.`],[`/assets/images/extra-curricular/career-day-children-in-costumes.jpeg`,`Little chefs`,`Children in chef costumes enjoying a school cooking celebration.`],[`/assets/images/extra-curricular/power-rangers-performance-kbis-05.jpeg`,`Costume performance`,`A lively costume performance by students during a school event.`],[`/assets/images/extra-curricular/career-day-costume-group-certificates.jpeg`,`Cooking day display`,`Young chefs presenting their dish — Banku with Okro Stew.`]]},{title:`Play and Extra Curricular`,topic:`Movement and confidence`,description:`Outdoor play, karate, bicycles, playground discovery, and energetic moments that support whole-child growth.`,cover:`/assets/images/extra-curricular/children-playing-with-ball.jpeg`,images:[[`/assets/images/extra-curricular/children-playing-with-ball.jpeg`,`Active outdoor play`,`Learners in their KBIS PE kit enjoying outdoor movement on campus.`],[`/assets/images/extra-curricular/karate-class-on-lawn.jpeg`,`Karate on the lawn`,`Discipline and focus through outdoor karate practice.`],[`/assets/images/extra-curricular/children-with-bicycles-on-playground.jpeg`,`Bicycle play`,`Active outdoor play with bicycles on the school playground.`],[`/assets/images/extra-curricular/child-riding-bike-on-playground.jpeg`,`Riding on the playground`,`A child enjoying supervised outdoor cycling on campus.`],[`/assets/images/extra-curricular/girl-in-karate-uniform.jpeg`,`Karate stance`,`A student focused and ready during the school's karate programme.`],[`/assets/images/extra-curricular/playground-child-on-swing.jpg`,`Baby swing time`,`A carer helping a little one enjoy the playground swing at KBIS.`]]},{title:`Campus Spaces`,topic:`Facilities`,description:`Classrooms, corridors, playrooms, computer spaces, and the colourful environment children use every day.`,cover:`/assets/images/facilities/purple-classroom-panorama.jpg`,images:[[`/assets/images/facilities/purple-classroom-panorama.jpg`,`Purple classroom panorama`,`A broad view of one of the colourful classrooms at KBIS.`],[`/assets/images/facilities/purple-classroom.jpeg`,`Purple classroom`,`A bright classroom arranged for young learners.`],[`/assets/images/facilities/empty-pink-classroom.jpeg`,`Pink classroom`,`A clean and welcoming classroom ready for the school day.`],[`/assets/images/facilities/computer-room-tables.jpg`,`Computer room`,`Technology space for guided digital learning.`],[`/assets/images/facilities/colorful-school-corridor.jpg`,`Colourful corridor`,`A bright, welcoming corridor inside the KBIS campus.`],[`/assets/images/facilities/blue-stairwell.jpeg`,`Blue stairwell`,`Safe, colourful stairwell connecting the campus floors.`]]}],jr=(e,t,n=`/`)=>`
  <div class="page-title light-background">
    <div class="container d-lg-flex justify-content-between align-items-center">
      <h1 class="mb-2 mb-lg-0">${e}</h1>
      <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li>${t?`<li><a href="${n}">${t}</a></li>`:``}<li class="current">${e}</li></ol></nav>
    </div>
  </div>`,Mr=()=>`
  <div class="row g-3">
    ${xr.map(e=>`
        <div class="col-md-6">
          <a class="kb-resource-card d-flex gap-3 text-decoration-none" href="${e.href}"${br(e.href)}>
            <span class="kb-resource-icon"><i class="bi ${e.icon}"></i></span>
            <span>
              <strong>${e.title}</strong>
              <small>${e.text}</small>
            </span>
          </a>
        </div>`).join(``)}
  </div>`,Nr=e=>`
  <div class="row g-4 kb-feature-card-grid">
    ${e.map((e,t)=>`
        <div class="col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="${100+t*80}">
          <article class="kb-rich-card h-100" data-href="${e.href}">
            <img src="${e.image}" alt="" loading="lazy">
            <div class="kb-rich-card-body">
              <span>${e.kicker}</span>
              <h3>${e.title}</h3>
              <p>${e.text}</p>
              <a href="${e.href}">Explore <i class="bi bi-arrow-right"></i></a>
            </div>
          </article>
        </div>`).join(``)}
  </div>`,Pr=({title:e,parent:t,parentHref:n,heroImage:r,kicker:i,heading:a,lead:o,body:s,heroClass:c=``,hideHero:l=!1})=>`
  ${jr(e,t,n)}
  <section class="section kb-designed-page">
    <div class="container" data-aos="fade-up">
      ${l?``:`
      <div class="kb-page-hero ${c} row g-4 align-items-stretch">
        <div class="col-lg-7">
          <div class="kb-page-hero-copy">
            <p class="kb-kicker">${i}</p>
            <h2>${a}</h2>
            <p>${o}</p>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="kb-page-hero-image">
            <img src="${r}" alt="" loading="lazy">
          </div>
        </div>
      </div>`}
      ${s}
    </div>
  </section>`,Fr={"about-mission-vision":()=>({title:`Mission & vision - Kinder Bubble International School`,bodyClass:`about-mission-vision-page`,mainHtml:Pr({title:`Mission & vision`,parent:`About`,parentHref:`/about`,heroImage:yr.mission,kicker:M.motto,heading:`A caring school shaped by character, academics, and confidence.`,lead:`KBIS exists to prepare future innovators through a balanced blend of character formation, academic habits, bilingual learning, and joyful early childhood care.`,body:`
        <div class="kb-mv-focus kb-mv-pair">
          <article class="kb-mv-card kb-mv-card--mission">
            <p class="kb-mv-label">Mission</p>
            <p class="kb-mv-text">To offer holistic, all-rounded early childhood education and lay the foundation for knowledge seekers, independent thinkers, self-confident, well-rounded, and God-fearing character.</p>
          </article>
          <article class="kb-mv-card kb-mv-card--vision">
            <p class="kb-mv-label">Vision</p>
            <p class="kb-mv-text">To establish a school focused on producing future innovators whose education blends character and academics for life-long outcomes.</p>
          </article>
        </div>
        ${Nr([{kicker:`Culture`,title:M.slogan,text:`A school identity rooted in heritage, leadership, and high expectations for young learners.`,image:`/assets/images/students/students-in-blue-uniforms-outdoor.jpg`,href:`/about`},{kicker:`Learning`,title:`Character plus academics`,text:`Daily routines connect kindness, independence, creativity, numeracy, literacy, and bilingual expression.`,image:`/assets/images/learning/children-handling-class-activity.jpeg`,href:`/academics/curriculum`},{kicker:`Family`,title:`One child at a time`,text:`Parents, teachers, and leaders work as a close circle around each child.`,image:`/assets/images/extra-curricular/parents-and-children-at-event.jpeg`,href:`/parents/plan-a-visit`}])}`})}),"about-board-of-directors":()=>({title:`Board of directors - Kinder Bubble International School`,bodyClass:`about-board-page`,mainHtml:Pr({title:`Board of directors`,parent:`About`,parentHref:`/about`,hideHero:!0,body:`
        <div class="row g-4 mt-4 kb-board-grid">
          ${Sr.map(e=>`
              <div class="col-12">
                <article class="kb-profile-card h-100">
                  <img src="${e[2]}" alt="${e[0]}" loading="lazy">
                  <div><h3>${e[0]}</h3><p>${e[1]}</p></div>
                </article>
              </div>`).join(``)}
        </div>`})}),"about-management":()=>({title:`Management - Kinder Bubble International School`,bodyClass:`about-management-page`,mainHtml:Pr({title:`Management`,parent:`About`,parentHref:`/about`,hideHero:!0,body:`
        <div class="kb-mgmt-list mt-4">
          ${[{kicker:`Director`,title:`Raphael Asamoah Boadu`,text:`Since 2021, leadership has focused on building a thriving learning environment, an engaged community, and forward-looking teaching methods that serve every child well.`,image:`/assets/images/students/two-students-in-formal-uniforms.jpeg`,href:`/about/board-of-directors`},{kicker:`Principal`,title:M.principal,text:`A child-centred educator with over 26 years of experience, supporting classroom practice, parent partnership, learner confidence, and special educational needs across all year groups.`,image:`/assets/images/others/staff-member-at-desk.jpg`,href:`/about/principal`},{kicker:`Office`,title:`Admissions and administration`,text:`The office team helps families with school visits, enrolment forms, fee payments, medical information, pick-up authorisation, and day-to-day communication with parents and guardians.`,image:`/assets/images/others/ms-yvonne-asamoah-boadu.jpeg`,href:`/contact`}].map(({kicker:e,title:t,text:n,image:r,href:i},a)=>`
            <article class="kb-mgmt-card" data-aos="fade-up" data-aos-delay="${80+a*80}">
              <div class="kb-mgmt-card-photo">
                <img src="${r}" alt="${t}" loading="lazy">
              </div>
              <div class="kb-mgmt-card-body">
                <span>${e}</span>
                <h3>${t}</h3>
                <p>${n}</p>
                <a href="${i}">Learn more <i class="bi bi-arrow-right"></i></a>
              </div>
            </article>`).join(``)}
        </div>`})}),"about-principal":()=>({title:`Principal - Kinder Bubble International School`,bodyClass:`about-principal-page`,mainHtml:`
      ${jr(`Principal`,`About`,`/about`)}
      <section class="section kb-principal-profile">
        <div class="container" data-aos="fade-up">
          <div class="kb-principal-profile-shell">
            <div class="kb-principal-photo-wrap">
              <img src="${yr.principal}" alt="${M.principal}" loading="lazy">
              <span><i class="bi bi-circle-fill"></i>${M.principal}</span>
            </div>
            <article class="kb-principal-panel" aria-labelledby="principal-profile-heading">
              <p class="kb-principal-badge"><i class="bi bi-circle-fill"></i> Principal's profile</p>
              <h2 id="principal-profile-heading">Ms. Delphina Naa Lomoley <span>Lomotey</span></h2>
              <p class="kb-principal-intro">A visionary educator with more than 26 years of experience in education, home management, personal development, counselling, and support for children with special educational needs.</p>
              <div class="kb-principal-credentials">
                <p><i class="bi bi-check-lg"></i><strong>M.Ed. Educational Psychology, Cape Coast</strong></p>
                <p><i class="bi bi-check-lg"></i><strong>B.Ed. Special Education &amp; Home Economics, UEW</strong></p>
                <p><i class="bi bi-check-lg"></i><strong>Founder &amp; Consultant, Delphins Ghana</strong></p>
              </div>
              <p class="kb-principal-signature">Ms. Delphina Naa Lomoley Lomotey</p>
            </article>
          </div>
          <article class="kb-principal-detail-card" data-aos="fade-up" data-aos-delay="120">
            <span class="kb-principal-dropcap">A</span>
            <p>s Principal of Kinder Bubble International School, <strong>${M.principal}</strong> brings a gentle, steady presence to the daily life of the school. She helps children feel known, safe, and confident while guiding teachers to make learning active, caring, and purposeful. Families value her warm communication, her attention to each child&apos;s progress, and her commitment to a school culture where kindness, discipline, creativity, and strong foundations grow together.</p>
            <span class="kb-principal-detail-icon"><i class="bi bi-mortarboard-fill"></i></span>
          </article>
        </div>
      </section>`}),"about-staff-teaching":()=>({title:`Teaching Staff - Kinder Bubble International School`,bodyClass:`about-staff-teaching-page`,mainHtml:Pr({title:`Teaching Staff`,parent:`About`,parentHref:`/about`,hideHero:!0,body:`
        <div class="kb-teacher-grid mt-4">
          ${Cr.map(([e,t,n,r,i],a)=>`
              <article class="kb-teacher-card" data-aos="fade-up" data-aos-delay="${80+a*35}">
                <div class="kb-teacher-card-photo">
                  <img src="${n}" alt="${e}" loading="lazy">
                  <div class="kb-teacher-card-overlay">
                    <span>${t}</span>
                    <h3>${e}</h3>
                  </div>
                </div>
                <div class="kb-teacher-card-bio">
                  <p>${r}</p>
                  <div class="kb-teacher-card-tags">
                    ${i.map(e=>`<span>${e}</span>`).join(``)}
                  </div>
                </div>
              </article>`).join(``)}
        </div>
        ${Nr([{kicker:`Classroom`,title:`Small group teaching`,text:`Whole class, ability groups, mixed ability groups, and paired work are used during the week.`,image:`/assets/images/learning/teacher-with-small-class.jpeg`,href:`/academics/curriculum`},{kicker:`Languages`,title:`English and French`,text:`Daily lessons and language exposure are tailored to each child according to age and ability.`,image:`/assets/images/learning/children-reading-together.jpeg`,href:`/academics/languages`},{kicker:`Family`,title:`Continuity of care`,text:`Permanent educators help children know the adults around them and feel settled.`,image:`/assets/images/students/children-at-classroom-table.jpg`,href:`/contact`}])}`})}),"about-staff-support":()=>({title:`Support staff - Kinder Bubble International School`,bodyClass:`about-staff-support-page`,mainHtml:Pr({title:`Support staff`,parent:`About`,parentHref:`/about`,hideHero:!0,body:`
        <div class="kb-teacher-grid mt-4">
          ${wr.map(([e,t,n,r,i],a)=>`
              <article class="kb-teacher-card" data-aos="fade-up" data-aos-delay="${80+a*35}">
                <div class="kb-teacher-card-photo">
                  <img src="${n}" alt="${e}" loading="lazy">
                  <div class="kb-teacher-card-overlay">
                    <span>${t}</span>
                    <h3>${e}</h3>
                  </div>
                </div>
                <div class="kb-teacher-card-bio">
                  <p>${r}</p>
                  <div class="kb-teacher-card-tags">
                    ${i.map(e=>`<span>${e}</span>`).join(``)}
                  </div>
                </div>
              </article>`).join(``)}
        </div>
        ${Nr([{kicker:`Health`,title:`Medical awareness`,text:`Allergies, dietary restrictions, and emergency plans are documented and shared with relevant staff.`,image:`/assets/images/learning/children-holding-green-apple.jpeg`,href:`/parents/admission-form`},{kicker:`Pick-up`,title:`Authorised collection`,text:`Families can complete pick-up authorisation so the school knows exactly who may collect a child.`,image:`/assets/images/extra-curricular/students-lined-up-outdoors.jpeg`,href:`/parents/student-handbook`},{kicker:`Meals`,title:`Feeding routines`,text:`Breakfast, lunch, snacks, and family restrictions are handled with careful hygiene routines.`,image:`/assets/images/extra-curricular/staff-serving-food-at-event.jpeg`,href:`/resources/policies`}])}`})}),"academics-curriculum":()=>({title:`Curriculum - Kinder Bubble International School`,bodyClass:`academics-curriculum-page`,mainHtml:Pr({title:`Curriculum`,parent:`Academics`,parentHref:`/academics`,hideHero:!0,body:`
        <section class="kb-learning-detail kb-learning-detail--curriculum" data-aos="fade-up" data-aos-delay="120">
          <div>
            <p class="kb-kicker">Curriculum details</p>
            <h3>What learning looks like at KBIS</h3>
            <p>Children learn through a balanced rhythm of direct teaching, guided practice, discovery, play, and reflection. The Cambridge-aligned approach gives teachers a clear structure, while classroom routines keep learning warm, practical, and age-right.</p>
          </div>
          <div class="kb-learning-detail-grid">
            <article><i class="bi bi-pencil-square"></i><strong>Foundational skills</strong><span>Phonics, handwriting, reading, early writing, everyday maths, and problem solving are practised in small, manageable steps.</span></article>
            <article><i class="bi bi-lightbulb"></i><strong>Active discovery</strong><span>Science, creativity, technology, projects, and outdoor learning help children test ideas and explain what they notice.</span></article>
            <article><i class="bi bi-heart"></i><strong>Character habits</strong><span>Confidence, kindness, independence, courtesy, and responsibility are built into the school day, not treated as extras.</span></article>
          </div>
        </section>
        ${Nr([{kicker:`Core`,title:`Literacy and numeracy`,text:`Children build phonics, handwriting, everyday maths, and confidence through multi-sensory strategies.`,image:`/assets/images/learning/student-writing-in-notebook.jpeg`,href:`/academics/programmes`},{kicker:`Languages`,title:`English and French`,text:`Bilingual exposure is built into daily lessons from early years through primary.`,image:`/assets/images/learning/children-reading-together.jpeg`,href:`/academics/languages`},{kicker:`Character`,title:`Confidence and kindness`,text:`The timetable supports independence, turn-taking, communication, and self-control.`,image:`/assets/images/students/smiling-boy-at-desk.jpeg`,href:`/students-life`}])}`})}),"academics-programmes":()=>({title:`Programmes - Kinder Bubble International School`,bodyClass:`academics-programmes-page`,mainHtml:Pr({title:`Programmes`,parent:`Academics`,parentHref:`/academics`,heroImage:yr.programmes,kicker:`6 months to 10 years`,heading:`One campus pathway from creche through primary.`,lead:`Families can keep a consistent school community while children move through age-right stages of care, play, and academics.`,body:`
        <div class="row g-3 mt-4 kb-programme-strip">
          ${[[`Creche`,`6 mo - 2 yrs`],[`Nursery`,`2 - 3 yrs`],[`Kindergarten`,`3 - 4 yrs`],[`Reception`,`4 yrs`],[`Primary`,`5 - 10 yrs`]].map(([e,t],n)=>`<div class="col-md-6 col-xl"><a href="/admissions" class="kb-programme-pill"><span>0${n+1}</span><strong>${e}</strong><small>${t}</small></a></div>`).join(``)}
        </div>
        ${Nr([{kicker:`Youngest`,title:`Creche and nursery`,text:`Warm routines, sensory-rich play, early communication, and strong family partnership.`,image:`/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg`,href:`/admissions`},{kicker:`Curriculum`,title:`What children learn`,text:`Cambridge-aligned teaching with bilingual English-French exposure from early years upwards.`,image:`/assets/images/learning/teacher-guided-table-activity.jpeg`,href:`/academics/curriculum`},{kicker:`Campus`,title:`Where they learn`,text:`Colourful classrooms, computer lab, outdoor play, and welcoming shared spaces.`,image:`/assets/images/facilities/purple-classroom.jpeg`,href:`/campus-facilities`}])}`})}),"academics-languages":()=>({title:`Languages - Kinder Bubble International School`,bodyClass:`academics-languages-page`,mainHtml:Pr({title:`Languages`,parent:`Academics`,parentHref:`/academics`,heroImage:yr.languages,kicker:`English + French`,heading:`Bilingual education starts naturally when children are young.`,lead:`French is introduced as a second language because early childhood and primary years are powerful windows for language acquisition.`,body:`
        <section class="kb-learning-detail kb-learning-detail--languages" data-aos="fade-up" data-aos-delay="120">
          <div>
            <p class="kb-kicker">Language details</p>
            <h3>How English and French become part of the day</h3>
            <p>Language learning is kept natural and confidence-building. Children hear, repeat, sing, respond, label objects, tell simple stories, and use new words during familiar classroom routines before moving into more structured reading and writing.</p>
          </div>
          <div class="kb-learning-detail-grid">
            <article><i class="bi bi-chat-dots"></i><strong>Everyday speaking</strong><span>Greetings, classroom instructions, songs, stories, and short conversations help children use language without fear.</span></article>
            <article><i class="bi bi-book"></i><strong>Reading readiness</strong><span>Sounds, vocabulary, picture books, rhymes, and early comprehension support both English confidence and French exposure.</span></article>
            <article><i class="bi bi-globe2"></i><strong>Wider world</strong><span>Bilingual exposure helps learners appreciate culture, communicate broadly, and prepare for future international opportunities.</span></article>
          </div>
        </section>
        ${Nr([{kicker:`Balance`,title:`English-French rhythm`,text:`The brochure describes a balanced bilingual model with Anglophone and Francophone teaching support.`,image:`/assets/images/learning/teacher-guided-table-activity.jpeg`,href:`/academics/curriculum`},{kicker:`Culture`,title:`Global readiness`,text:`French opens doors to wider international communication and cultural understanding.`,image:`/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg`,href:`/news/partnerships`},{kicker:`Everyday`,title:`Songs, stories, routines`,text:`Language exposure is built into activities children already enjoy.`,image:`/assets/images/learning/girl-presenting-in-class.jpeg`,href:`/students-life`}])}`})}),"academics-academic-calendar":()=>({title:`Academic calendar - Kinder Bubble International School`,bodyClass:`academics-calendar-page`,mainHtml:Pr({title:`Academic calendar`,parent:`Academics`,parentHref:`/academics`,hideHero:!0,body:`
        <div class="kb-term-timeline mt-4">
          ${Dr.map((e,t)=>`
              <section class="kb-term-panel" data-aos="fade-up" data-aos-delay="${100+t*80}">
                <div class="kb-term-head">
                  <span>0${t+1}</span>
                  <div>
                    <h3>${e.title}</h3>
                    <p>${e.period}</p>
                  </div>
                </div>
                <div class="kb-term-items">
                  ${e.items.map(([e,t])=>`
                      <article class="kb-term-item">
                        <strong>${e}</strong>
                        <p>${t}</p>
                      </article>`).join(``)}
                </div>
              </section>`).join(``)}
        </div>
        ${Nr([{kicker:`Admissions`,title:`Rolling entry`,text:`Families can ask about available places throughout the year.`,image:`/assets/images/students/smiling-boy-in-class-hero.jpeg`,href:`/admissions`},{kicker:`Trips`,title:`Educational visits`,text:`Trips are organised around themes and lesson plans for each academic term.`,image:`/assets/images/extra-curricular/school-excursion-students-walking.jpeg`,href:`/events`},{kicker:`Student life`,title:`Beyond the classroom`,text:`Houses, SRC, extra-curricular clubs, and celebrations shape a full school experience.`,image:`/assets/images/extra-curricular/children-with-balloons-on-turf.jpeg`,href:`/students-life`}])}`})}),"student-life-src":()=>({title:`SRC - Kinder Bubble International School`,bodyClass:`student-life-src-page`,mainHtml:Pr({title:`SRC`,parent:`Student life`,parentHref:`/students-life`,hideHero:!0,body:`
        <section class="kb-src-executives mt-4" aria-label="SRC executive profiles">
          ${Or.map((e,t)=>`
              <article class="kb-src-card" data-aos="fade-up" data-aos-delay="${80+t*45}">
                <div class="kb-src-photo">
                  <img src="${e.image}" alt="${e.role}" loading="lazy">
                </div>
                <div class="kb-src-copy">
                  <span>${e.focus}</span>
                  <h3>${e.role}</h3>
                  <p>${e.text}</p>
                </div>
              </article>`).join(``)}
        </section>
        <section class="kb-src-detail-panel" data-aos="fade-up">
          <div class="kb-src-detail-copy">
            <p class="kb-kicker">What the SRC does</p>
            <h3>Small leadership roles that build confidence, service, and school pride.</h3>
            <p>The SRC gives children a guided way to practise responsibility in everyday school life. At KBIS, student leadership is age-appropriate: learners help share ideas, support class routines, welcome participation, and model respectful behaviour during assemblies, events, and classroom activities.</p>
            <p>These roles benefit the school by strengthening communication between learners and teachers, encouraging positive habits, and making children feel that their voices matter. They also benefit students by building confidence, empathy, teamwork, public speaking, and the habit of serving others with kindness.</p>
          </div>
          <div class="kb-src-detail-points">
            <div><span>01</span><strong>Voice</strong><small>Children practise sharing ideas respectfully.</small></div>
            <div><span>02</span><strong>Service</strong><small>Leaders help with routines, events, and class support.</small></div>
            <div><span>03</span><strong>Confidence</strong><small>Simple responsibilities help learners speak and participate.</small></div>
          </div>
        </section>
        ${Nr([{kicker:`Voice`,title:`Classroom feedback`,text:`Children learn to share ideas, ask questions, and listen to classmates.`,image:`/assets/images/learning/girl-presenting-in-class-gallery.jpeg`,href:`/students-life`},{kicker:`Service`,title:`Helping routines`,text:`Class jobs and shared responsibilities build ownership.`,image:`/assets/images/students/children-sitting-on-floor.jpeg`,href:`/student-life/houses`},{kicker:`Confidence`,title:`Presentation moments`,text:`Show-and-tell and class sharing help children practise speaking.`,image:`/assets/images/learning/child-presenting-poster.jpeg`,href:`/events`}])}`})}),"student-life-houses":()=>({title:`Houses - Kinder Bubble International School`,bodyClass:`student-life-houses-page`,mainHtml:Pr({title:`Houses`,parent:`Student life`,parentHref:`/students-life`,heroImage:yr.houses,kicker:`Belonging`,heading:`Friendly house spirit that builds teamwork and pride.`,lead:`House activities give children a sense of identity, encouragement, and shared celebration without overwhelming them.`,body:`
        <section class="kb-house-board mt-4" aria-label="School houses">
          ${kr.map((e,t)=>`
              <article class="kb-house-card kb-house-card--${e.accent}" data-aos="fade-up" data-aos-delay="${80+t*45}">
                <img src="${e.image}" alt="${e.name}" loading="lazy">
                <div class="kb-house-band">
                  <span>${e.value}</span>
                  <h3>${e.name}</h3>
                  <p>${e.text}</p>
                </div>
              </article>`).join(``)}
        </section>
        ${Nr([{kicker:`Teamwork`,title:`Games and challenges`,text:`Children practise cooperation and turn-taking through guided activities.`,image:`/assets/images/extra-curricular/children-with-balloons-on-turf.jpeg`,href:`/student-life/extra-curricular`},{kicker:`Pride`,title:`Culture and identity`,text:`School spirit connects children to Ghanaian heritage and global citizenship.`,image:`/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg`,href:`/news/partnerships`},{kicker:`Events`,title:`Celebration days`,text:`House spirit becomes visible during major school programmes and showcases.`,image:`/assets/images/extra-curricular/students-under-event-tent.jpeg`,href:`/events`}])}`})}),"student-life-extra-curricular":()=>({title:`Extra curricula - Kinder Bubble International School`,bodyClass:`student-life-extra-page`,mainHtml:Pr({title:`Extra curricula`,parent:`Student life`,parentHref:`/students-life`,heroImage:yr.extra,kicker:`Beyond class`,heading:`Activities that make learning physical, social, creative, and memorable.`,lead:`The school brochure lists taekwondo, ballet, football, cadet, and arts club as extra-curricular options, with sign-up details confirmed by administration.`,body:Nr([{kicker:`Sport`,title:`Taekwondo and football`,text:`Movement activities build strength, discipline, coordination, and confidence.`,image:`/assets/images/extra-curricular/coach-assisting-karate-child.jpeg`,href:`/parents/plan-a-visit`},{kicker:`Arts`,title:`Ballet and arts club`,text:`Creative activities help children express themselves and enjoy performance.`,image:`/assets/images/extra-curricular/career-day-chef-costumes-group.jpeg`,href:`/resources/gallery`},{kicker:`Trips`,title:`Educational outings`,text:`Trips to places like museums, farms, and zoos connect themes to real-world experience.`,image:`/assets/images/extra-curricular/school-excursion-group-photo.jpeg`,href:`/events`}])})}),"parents-admission-form":()=>({title:`Admission form - Kinder Bubble International School`,bodyClass:`parents-admission-form-page`,mainHtml:Pr({title:`Admission form`,parent:`Parents`,parentHref:`/admissions`,heroImage:yr.form,kicker:`Apply`,heading:`Everything parents need to start an application.`,lead:`The application pack asks for child details, guardian contacts, proof of address, proof of age, previous school information, language spoken at home, religion, and health notes.`,body:`
        <div class="kb-doc-panel mt-4"><h3>Academic forms</h3>${Mr()}</div>
        ${Nr([{kicker:`Step 1`,title:`Book a tour`,text:`Prospective parents meet admissions and walk the school before completing the process.`,image:`/assets/images/facilities/purple-classroom.jpeg`,href:`/parents/plan-a-visit`},{kicker:`Step 2`,title:`Submit documents`,text:`Proof of address, birth certificate or passport, medical information, and emergency contacts help us prepare.`,image:`/assets/images/learning/student-writing-in-notebook.jpeg`,href:`/admissions`},{kicker:`Step 3`,title:`Confirm placement`,text:`Once a place is offered, families complete records and agree start details with the office.`,image:`/assets/images/students/smiling-child-on-turf.jpeg`,href:`/contact`}])}`})}),"parents-plan-a-visit":()=>({title:`Plan a visit - Kinder Bubble International School`,bodyClass:`parents-plan-a-visit-page`,mainHtml:Pr({title:`Plan a visit`,parent:`Parents`,parentHref:`/admissions`,heroImage:yr.visit,kicker:`Campus tour`,heading:`See the classrooms, playgrounds, and routines in person.`,lead:`Visit ${M.addressLine1}, ${M.addressLine2}. Tours help families understand placement, daily schedules, bilingual learning, safety routines, and fees.`,body:Nr([{kicker:`See`,title:`Learning spaces`,text:`Walk bright classrooms, early years rooms, computer spaces, and shared areas.`,image:`/assets/images/facilities/empty-pink-classroom.jpeg`,href:`/campus-facilities`},{kicker:`Ask`,title:`Admissions questions`,text:`Discuss programme fit, paperwork, fees, and start windows with the office.`,image:`/assets/images/others/staff-member-at-desk.jpg`,href:`/contact`},{kicker:`Feel`,title:`School rhythm`,text:`See how children move between learning, meals, play, and calm transitions.`,image:`/assets/images/students/children-seated-in-class.jpeg`,href:`/students-life`}])})}),"parents-make-payment":()=>({title:`Make payment - Kinder Bubble International School`,bodyClass:`parents-make-payment-page`,mainHtml:Pr({title:`Make payment`,parent:`Parents`,parentHref:`/admissions`,heroImage:yr.payment,kicker:`Fees`,heading:`Payment guidance for school fees and related costs.`,lead:`The mini brochure notes that fees include tuition, stationery, and lunch, with breakfast and snacks available upon request. Families should confirm current fees with administration before payment.`,body:`
        <div class="kb-payment-panel mt-4">
          <div><strong>Mobile money</strong><span>Short code *772*30# on all networks. Merchant code: 605001.</span></div>
          <div><strong>Bank</strong><span>Kinder Bubble International School Limited, Prudential Bank Ltd, Bawleshie Branch, Account Number 0342000710013.</span></div>
        </div>
        <p class="small text-muted mt-3">For safety, always confirm current payment details directly with the school office before sending funds.</p>
        ${Mr()}`})}),"parents-student-handbook":()=>({title:`Student handbook - Kinder Bubble International School`,bodyClass:`parents-student-handbook-page`,mainHtml:Pr({title:`Student handbook`,parent:`Parents`,parentHref:`/admissions`,heroImage:yr.handbook,kicker:`Family guide`,heading:`Daily routines, attendance, wellbeing, and parent partnership.`,lead:`The handbook welcomes students into a culture of academic excellence and gives families clear expectations for attendance, absence notes, early release, communication, and responsibilities.`,body:Nr([{kicker:`Attendance`,title:`Be present and on time`,text:`Parents report absences before 8:00 a.m.; tardiness affects learning for the whole class.`,image:`/assets/images/students/students-in-red-and-blue-uniforms.jpeg`,href:`/resources/policies`},{kicker:`Daily rhythm`,title:`Circle, choice, story, snack, play`,text:`The day balances group time, child choice, cleanup, stories, snack, quiet time, and physical activity.`,image:`/assets/images/learning/floor-mat-group-learning.jpeg`,href:`/students-life`},{kicker:`Safety`,title:`Medical and pick-up records`,text:`Families should keep allergies, dietary restrictions, emergency contacts, and authorised pick-up lists current.`,image:`/assets/images/extra-curricular/students-lined-up-outdoors.jpeg`,href:`/parents/admission-form`}])})}),"resources-gallery":()=>({title:`Gallery - Kinder Bubble International School`,bodyClass:`resources-gallery-page`,mainHtml:`
      ${jr(`Gallery`,`Resources`,`/resources/gallery`)}
      <section class="section kb-album-gallery">
        <div class="container" data-aos="fade-up">
          <div class="kb-gallery-head">
            <p class="kb-kicker">Albums</p>
            <h2>Life at KBIS, grouped by themes and school moments.</h2>
          </div>
          <div class="kb-gallery-albums">
            ${Ar.map((e,t)=>`
                <button class="kb-gallery-album" type="button" data-album-index="${t}" data-aos="zoom-in" data-aos-delay="${80+t*35}">
                  <span class="kb-gallery-album-cover">
                    <span class="kb-gallery-album-stack" aria-hidden="true">
                      <img src="${e.images[1]?.[0]||e.cover}" alt="" loading="lazy">
                      <img src="${e.images[2]?.[0]||e.cover}" alt="" loading="lazy">
                    </span>
                    <img src="${e.cover}" alt="${e.title}" loading="lazy">
                    <small>${e.images.length} photos</small>
                  </span>
                  <span class="kb-gallery-album-copy">
                    <small>${e.topic}</small>
                    <strong>${e.title}</strong>
                    <em>${e.description}</em>
                  </span>
                  <span class="kb-gallery-album-slides" aria-hidden="true">
                    ${e.images.map(([e,t,n])=>`
                        <span data-gallery-src="${e}" data-gallery-title="${t}" data-gallery-caption="${n}"></span>`).join(``)}
                  </span>
                </button>`).join(``)}
          </div>
          <div class="kb-gallery-viewer" aria-hidden="true">
            <div class="kb-gallery-viewer-panel" role="dialog" aria-modal="true" aria-label="Gallery album viewer">
              <div class="kb-gallery-toolbar">
                <button type="button" class="kb-gallery-back" aria-label="Close gallery"><i class="bi bi-x-lg"></i></button>
                <div>
                  <strong></strong>
                  <span></span>
                </div>
              </div>
              <button type="button" class="kb-gallery-nav kb-gallery-prev" aria-label="Previous photo"><i class="bi bi-chevron-left"></i></button>
              <figure class="kb-gallery-stage">
                <div class="kb-gallery-frame">
                  <img src="" alt="">
                  <figcaption class="kb-gallery-caption"><h3></h3><p></p></figcaption>
                </div>
              </figure>
              <button type="button" class="kb-gallery-nav kb-gallery-next" aria-label="Next photo"><i class="bi bi-chevron-right"></i></button>
              <div class="kb-gallery-thumbrail" aria-label="Album photos"></div>
            </div>
          </div>
        </div>
      </section>`}),"resources-policies":()=>({title:`Policies - Kinder Bubble International School`,bodyClass:`resources-policies-page`,mainHtml:vr()}),"news-partnerships":()=>({title:`Partnerships - Kinder Bubble International School`,bodyClass:`news-partnerships-page`,mainHtml:Pr({title:`Partnerships`,parent:`News`,parentHref:`/news`,heroImage:yr.partnership,kicker:`Global School Alliance`,heading:`International connections that widen children's view of the world.`,lead:`Through the Global School Alliance, KBIS has established a sister-school partnership with Skidby Church of England Primary School in Yorkshire, England.`,body:`
        <section class="kb-partnership-detail" data-aos="fade-up" data-aos-delay="120">
          <div class="kb-partnership-detail-copy">
            <p class="kb-kicker">Partnership details</p>
            <h3>A bridge between classrooms in Ghana and the United Kingdom.</h3>
            <p>The Global School Alliance partnership gives KBIS a meaningful way to connect pupils and teachers with another school community beyond Ghana. Through Skidby Church of England Primary School in Yorkshire, children can begin to see that learning, friendship, culture, and curiosity reach far beyond their own classroom.</p>
            <p>For teachers, the partnership creates room for professional exchange, shared classroom ideas, project inspiration, and conversations about how children learn in different settings. For pupils, it supports confidence, global awareness, communication, and respect for other cultures.</p>
          </div>
          <div class="kb-partnership-points">
            <article><i class="bi bi-globe2"></i><strong>Global awareness</strong><span>Children learn that their ideas, stories, and school experiences can connect with learners in another country.</span></article>
            <article><i class="bi bi-people"></i><strong>Teacher collaboration</strong><span>Educators can share classroom practice, project themes, and professional reflections across the sister-school link.</span></article>
            <article><i class="bi bi-chat-heart"></i><strong>Cultural exchange</strong><span>Activities can include shared messages, learning showcases, celebrations, and age-appropriate collaborative projects.</span></article>
          </div>
        </section>
        ${Nr([{kicker:`Global`,title:`Global School Alliance`,text:`A network helping educators connect, collaborate on projects, and develop transformational international partnerships.`,image:`/assets/images/others/global-school-alliance-certificate.png`,href:`/news/partnerships`},{kicker:`Sister school`,title:`Skidby Church of England Primary School`,text:`The partnership creates opportunities for cultural exchange, student interaction, and teacher collaboration.`,image:`/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg`,href:`/news`},{kicker:`Next`,title:`Upcoming partnership updates`,text:`Families will receive details as exchange activities and collaborative projects are scheduled.`,image:`/assets/images/extra-curricular/students-group-at-independence-square.jpeg`,href:`/events`}])}`})})},Ir=[{path:`/about/mission-vision`,key:`about-mission-vision`,label:`Mission & vision`},{path:`/about/board-of-directors`,key:`about-board-of-directors`,label:`Board of directors`},{path:`/about/management`,key:`about-management`,label:`Management`},{path:`/about/principal`,key:`about-principal`,label:`Principal`},{path:`/about/staff/teaching`,key:`about-staff-teaching`,label:`Teaching Staff`},{path:`/about/staff/support`,key:`about-staff-support`,label:`Support staff`},{path:`/academics/curriculum`,key:`academics-curriculum`,label:`Curriculum`},{path:`/academics/programmes`,key:`academics-programmes`,label:`Programmes`},{path:`/academics/languages`,key:`academics-languages`,label:`Languages`},{path:`/academics/academic-calendar`,key:`academics-academic-calendar`,label:`Academic calendar`},{path:`/student-life/src`,key:`student-life-src`,label:`SRC`},{path:`/student-life/houses`,key:`student-life-houses`,label:`Houses`},{path:`/student-life/extra-curricular`,key:`student-life-extra-curricular`,label:`Extra curricula`},{path:`/parents/admission-form`,key:`parents-admission-form`,label:`Admission form`},{path:`/parents/plan-a-visit`,key:`parents-plan-a-visit`,label:`Plan a visit`},{path:`/parents/make-payment`,key:`parents-make-payment`,label:`Make payment`},{path:`/parents/student-handbook`,key:`parents-student-handbook`,label:`Student handbook`},{path:`/resources/gallery`,key:`resources-gallery`,label:`Gallery`},{path:`/resources/policies`,key:`resources-policies`,label:`Policies`},{path:`/news/partnerships`,key:`news-partnerships`,label:`Partnerships`}],Lr=Ir.map(({key:e})=>({name:e,...Fr[e]()})),Rr=[{name:`index`,title:`Kinder Bubble International School · Accra`,bodyClass:`index-page`,mainHtml:nr()},{name:`about`,title:`About · Kinder Bubble International School`,bodyClass:`about-page`,mainHtml:qn},{name:`academics`,title:`Academics · Kinder Bubble International School`,bodyClass:`academics-page`,mainHtml:Jn},{name:`admissions`,title:`Admissions · Kinder Bubble International School`,bodyClass:`admissions-page`,mainHtml:rr()},{name:`campus-facilities`,title:`Campus & facilities · Kinder Bubble International School`,bodyClass:`campus-facilities-page`,mainHtml:ir()},{name:`contact`,title:`Contact · Kinder Bubble International School`,bodyClass:`contact-page`,mainHtml:ar()},{name:`event-details`,title:`Event details · Kinder Bubble International School`,bodyClass:`event-details-page`,mainHtml:gr()},{name:`events`,title:`Events · Kinder Bubble International School`,bodyClass:`events-page`,mainHtml:sr()},{name:`faculty-staff`,title:`Our team · Kinder Bubble International School`,bodyClass:`faculty-staff-page`,mainHtml:lr()},{name:`news-details`,title:`News details · Kinder Bubble International School`,bodyClass:`news-details-page`,mainHtml:pr()},{name:`news`,title:`News · Kinder Bubble International School`,bodyClass:`news-page`,mainHtml:cr()},{name:`privacy`,title:`Privacy · Kinder Bubble International School`,bodyClass:`privacy-page`,mainHtml:Yn},{name:`students-life`,title:`Student life · Kinder Bubble International School`,bodyClass:`students-life-page`,mainHtml:dr()},{name:`terms-of-service`,title:`Terms of service · Kinder Bubble International School`,bodyClass:`terms-of-service-page`,mainHtml:Xn},{name:`404`,title:`404 · Kinder Bubble International School`,bodyClass:`page-404`,mainHtml:Zn},...Lr];function zr(e,t){e()&&t()}var Br=/\.pdf(\?|#|$)/i,Vr=`__kbGalleryEffectsController__`,Hr=`__kbNavOutsideClickController__`;function Ur(e=document){e.querySelectorAll(`a[href]`).forEach(e=>{let t=e.getAttribute(`href`)||``;Br.test(t)&&(e.setAttribute(`target`,`_blank`),e.setAttribute(`rel`,`noopener noreferrer`))})}function Wr(){document.body?.classList.remove(`kb-gallery-open`),document.documentElement?.classList.remove(`kb-gallery-open`)}function Gr(){let e=document.body,t=document.querySelector(`#header`);e.classList.remove(`mobile-nav-active`);let n=document.querySelector(`.scroll-top`),r=document.querySelector(`#preloader`),i=document.querySelector(`.mobile-nav-toggle`),a=()=>{t&&(!t.classList.contains(`scroll-up-sticky`)&&!t.classList.contains(`sticky-top`)&&!t.classList.contains(`fixed-top`)||(window.scrollY>100?e.classList.add(`scrolled`):e.classList.remove(`scrolled`)))},o=()=>{n&&(window.scrollY>100?n.classList.add(`active`):n.classList.remove(`active`))},s=()=>{if(!t)return;let e=Math.round(t.getBoundingClientRect().height);document.documentElement.style.setProperty(`--kb-header-stack`,`${e}px`)},c=e=>{e.target.closest(`.navmenu > ul`)||e.preventDefault()},l=e=>{e.target.closest(`.navmenu > ul`)||e.preventDefault()},u=()=>{document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`wheel`,l,{passive:!1})},d=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`wheel`,l)},f=()=>{e.classList.contains(`mobile-nav-active`)&&(d(),e.classList.remove(`mobile-nav-active`),i&&(i.classList.add(`bi-list`),i.classList.remove(`bi-x`)))};if(zr(()=>window.AOS,()=>{window.AOS.init({duration:600,easing:`ease-in-out`,once:!0,mirror:!1})}),zr(()=>window.PureCounter,()=>{new window.PureCounter}),zr(()=>window.Swiper,()=>{document.querySelectorAll(`.init-swiper`).forEach(e=>{let t=e.querySelector(`.swiper-config`);if(!t)return;let n=JSON.parse(t.innerHTML.trim());new window.Swiper(e,n)})}),zr(()=>window.GLightbox,()=>{window.GLightbox({selector:`.glightbox`})}),i&&(i.onclick=()=>{let n=t?Math.round(t.getBoundingClientRect().bottom):64,r=Math.min(n+8,Math.max(72,window.innerHeight-220));document.documentElement.style.setProperty(`--kb-mobile-nav-top`,`${r}px`),e.classList.contains(`mobile-nav-active`)?d():u(),e.classList.toggle(`mobile-nav-active`),i&&(i.classList.toggle(`bi-list`),i.classList.toggle(`bi-x`))}),window[Hr]&&window[Hr].abort(),window[Hr]=new AbortController,document.addEventListener(`click`,t=>{e.classList.contains(`mobile-nav-active`)&&(t.target.closest(`.navmenu > ul, .mobile-nav-toggle`)||f())},{signal:window[Hr].signal}),document.querySelectorAll(`#navmenu a`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`href`);!t||t===`#`||f()}}),document.querySelectorAll(`.navmenu .dropdown > a`).forEach(e=>{e.querySelector(`.toggle-dropdown`)&&(e.onclick=t=>{t.preventDefault(),t.stopImmediatePropagation();let n=e.classList.contains(`active`);(e.parentElement?.parentElement)?.querySelectorAll(`:scope > li.dropdown > a.active`).forEach(t=>{t!==e&&(t.classList.remove(`active`),t.nextElementSibling?.classList.remove(`dropdown-active`))}),e.classList.toggle(`active`,!n),e.nextElementSibling?.classList.toggle(`dropdown-active`,!n)})}),n&&(n.onclick=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`})}),r&&r.remove(),Ur(),document.querySelectorAll(`.feature-card, .program-item, .facility-card, .organization-card, .athletics-card, .faculty-card, .secondary-post, .tab-post, .event-item, .contact-card, .post-item, .metric-card, .activity-item, .kb-rich-card, .kb-profile-card, .kb-update-card, .kb-album-card`).forEach(e=>{if(e.hasAttribute(`data-href`))return;let t=e.querySelector(`a[href]`)?.getAttribute(`href`);t&&t!==`#`&&e.setAttribute(`data-href`,t)}),document.querySelectorAll(`[data-href]`).forEach(e=>{e.setAttribute(`tabindex`,e.getAttribute(`tabindex`)||`0`),e.setAttribute(`role`,e.getAttribute(`role`)||`link`);let t=()=>{let t=e.getAttribute(`data-href`);t&&(window.location.href=t)};e.onclick=e=>{e.target.closest(`a, button, input, select, textarea, label`)||t()},e.onkeydown=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t())}}),window.matchMedia(`(pointer: coarse)`).matches){let e=document.querySelectorAll(`.featured-activity`);if(e.length&&`IntersectionObserver`in window){let t=new IntersectionObserver(e=>{e.forEach(e=>{e.target.classList.toggle(`kb-overlay-visible`,e.isIntersecting)})},{threshold:.45});e.forEach(e=>t.observe(e))}}Wr(),window[Vr]&&window[Vr].abort(),window[Vr]=new AbortController;let p=window[Vr].signal;document.querySelectorAll(`body > .kb-gallery-viewer`).forEach(e=>e.remove()),document.querySelectorAll(`.kb-gallery-albums`).forEach(e=>{let t=e.parentElement?.querySelector(`.kb-gallery-viewer`);if(!t)return;document.body.appendChild(t);let n=t.querySelector(`.kb-gallery-viewer-panel`);n?.addEventListener(`click`,e=>e.stopPropagation(),{signal:p});let r=t.querySelector(`.kb-gallery-stage img`),i=t.querySelector(`.kb-gallery-caption h3`),a=t.querySelector(`.kb-gallery-caption p`),o=t.querySelector(`.kb-gallery-back`),s=t.querySelector(`.kb-gallery-prev`),c=t.querySelector(`.kb-gallery-next`),l=t.querySelector(`.kb-gallery-thumbrail`),u=t.querySelector(`.kb-gallery-toolbar strong`),d=t.querySelector(`.kb-gallery-toolbar span`);if(!r||!i||!a||!o||!s||!c||!l||!u||!d)return;let f=[],m=0,h=null,g=0,_=0,v=()=>{let e=f[m];return e?.src?(r.src=e.src,r.alt=e.title,i.textContent=e.title,a.textContent=e.caption,d.textContent=`${m+1} / ${f.length}`,l.querySelectorAll(`button`).forEach((e,t)=>{e.classList.toggle(`is-active`,t===m),e.setAttribute(`aria-current`,t===m?`true`:`false`)}),!0):!1},y=e=>{f.length&&(m=(e+f.length)%f.length,v())},b=()=>{t.classList.remove(`is-open`),t.setAttribute(`aria-hidden`,`true`),r.removeAttribute(`src`),l.replaceChildren(),f=[],Wr(),h&&h.focus()},x=e=>{if(f=Array.from(e.querySelectorAll(`[data-gallery-src]`)).map(e=>({src:e.dataset.gallerySrc||``,title:e.dataset.galleryTitle||``,caption:e.dataset.galleryCaption||``})).filter(e=>e.src),!f.length){b();return}if(m=0,h=e,u.textContent=e.querySelector(`.kb-gallery-album-copy strong`)?.textContent||`Gallery album`,u.id=`kb-gallery-dialog-title`,n?.setAttribute(`aria-labelledby`,`kb-gallery-dialog-title`),l.replaceChildren(...f.map((e,t)=>{let n=document.createElement(`button`);return n.type=`button`,n.setAttribute(`aria-label`,`Show photo ${t+1}: ${e.title}`),n.innerHTML=`<img src="${e.src}" alt="">`,n.onclick=()=>y(t),n})),!v()){b();return}t.classList.add(`is-open`),t.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`kb-gallery-open`),document.documentElement.classList.add(`kb-gallery-open`),o.focus()};e.querySelectorAll(`.kb-gallery-album`).forEach(e=>{e.onclick=()=>x(e)}),o.onclick=b,s.onclick=()=>y(m-1),c.onclick=()=>y(m+1),t.onclick=e=>{e.target===t&&b()},t.ontouchstart=e=>{let t=e.changedTouches[0];g=t.clientX,_=t.clientY},t.ontouchend=e=>{let t=e.changedTouches[0],n=t.clientX-g,r=t.clientY-_;Math.abs(n)<48||Math.abs(n)<Math.abs(r)*1.25||y(m+(n<0?1:-1))},document.addEventListener(`keydown`,e=>{t.classList.contains(`is-open`)&&(e.key===`Escape`&&b(),e.key===`ArrowLeft`&&y(m-1),e.key===`ArrowRight`&&y(m+1))},{signal:p})}),a(),o(),s(),window.addEventListener(`scroll`,a),window.addEventListener(`scroll`,o),window.addEventListener(`resize`,()=>{s();let e=t?Math.round(t.getBoundingClientRect().bottom):64,n=Math.min(e+8,Math.max(72,window.innerHeight-220));document.documentElement.style.setProperty(`--kb-mobile-nav-top`,`${n}px`)}),document.fonts?.ready&&document.fonts.ready.then(s).catch(()=>{})}function Kr(){document.querySelectorAll(`.php-email-form`).forEach(e=>{e.onsubmit=async t=>{t.preventDefault();let n=e.querySelector(`.loading`),r=e.querySelector(`.error-message`),i=e.querySelector(`.sent-message`);n&&(n.style.display=`block`),r&&(r.style.display=`none`,r.textContent=``),i&&(i.style.display=`none`);let a=new FormData(e),[o,...s]=(a.get(`name`)||``).toString().trim().split(/\s+/).filter(Boolean),c={firstName:o||`Website`,lastName:s.join(` `)||`Visitor`,email:(a.get(`email`)||``).toString().trim(),phone:(a.get(`phone`)||``).toString().trim(),program:(a.get(`subject`)||``).toString().trim(),message:(a.get(`message`)||a.get(`subject`)||`Website enquiry`).toString().trim(),source:e.dataset.formType||document.body.className||`website`,pagePath:window.location.pathname};try{let t=await fetch(`/api/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(c)}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message||`Form submission failed.`);e.reset(),i&&(i.style.display=`block`)}catch(e){r&&(r.textContent=e.message||`Unable to send your message.`,r.style.display=`block`)}finally{n&&(n.style.display=`none`)}}})}var qr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),P=o(((e,t)=>{t.exports=qr()}))(),Jr=14,Yr=18,Xr=6,Zr=8;function Qr(e){return e===`index`||/student-life|students-life|news|event|gallery/i.test(e)?`playful`:/admission|parents|academics|privacy|terms|policies/i.test(e)?`abstract`:`neutral`}function $r({variant:e=`playful`,mode:t=`page`}){let n=t===`hero`?Yr:Jr,r=t===`hero`?Zr:Xr,i=(0,x.useMemo)(()=>Array.from({length:n},(e,t)=>t),[n]),a=(0,x.useMemo)(()=>Array.from({length:r},(e,t)=>t),[r]);return(0,P.jsxs)(`div`,{className:`kb-ambient kb-ambient--${e} kb-ambient--${t}`,"aria-hidden":`true`,children:[i.map(e=>(0,P.jsx)(`span`,{className:`kb-ambient-bubble kb-ambient-bubble--${e%12+1}`},`b${e}`)),a.map(e=>(0,P.jsx)(`span`,{className:`kb-ambient-shape kb-ambient-shape--${e%6+1}`},`s${e}`))]})}var ei=[{id:`play`,prefix:`Where young minds `,highlight:`bubble`,suffix:` with curiosity, & play with purpose.`,blurb:`Structured and free play in bright, safe spaces — because joyful children learn best when they feel at home.`,imageSrc:`/assets/images/extra-curricular/children-playing-with-ball.jpeg`,imageAlt:`Children learning and playing at KBIS`,badge:`Play with purpose`},{id:`learn`,prefix:``,highlight:`Cambridge-inspired`,suffix:` learning in English and French everyday.`,blurb:M.curriculum+`, with room for creativity, movement, and everyday discovery.`,imageSrc:`/assets/images/learning/students-smiling-at-computers.jpeg`,imageAlt:`Classrooms and discovery at KBIS`,badge:`Bilingual exposure`},{id:`ages`,prefix:`Nurturing every stage from `,highlight:`six months to ten years`,suffix:` here in Accra.`,blurb:`From creche through primary, one caring team walks with your child as they grow in confidence and character.`,imageSrc:`/assets/images/students/smiling-boy-in-class-hero.jpeg`,imageAlt:`Primary learners building confidence at KBIS`,badge:`One campus family`},{id:`confidence`,prefix:`Small classes where every child is `,highlight:`seen`,suffix:`, supported, and known.`,blurb:`Teachers know children by name, notice their next step, and build confidence through steady routines.`,imageSrc:`/assets/images/students/three-children-smiling-uniforms.jpeg`,imageAlt:`Three KBIS learners smiling in uniform`,badge:`Known by name`},{id:`technology`,prefix:`Hands-on discovery from books, `,highlight:`technology`,suffix:`, and daily projects.`,blurb:`Learning studios include practical materials, computer time, music, and age-right inquiry work.`,imageSrc:`/assets/images/learning/boy-at-computer-lab.jpeg`,imageAlt:`KBIS learner using a computer`,badge:`Modern learning`},{id:`languages`,prefix:`English and French help children grow as `,highlight:`global`,suffix:` communicators.`,blurb:`Bilingual exposure is woven through stories, songs, classroom phrases, and daily conversation.`,imageSrc:`/assets/images/learning/teacher-guided-table-activity.jpeg`,imageAlt:`Teacher guiding a group learning activity`,badge:`English + French`},{id:`care`,prefix:`Daily care routines help every family feel `,highlight:`secure`,suffix:` every day.`,blurb:`Health, safety, authorised pick-up, and clear family communication are part of the school day.`,imageSrc:`/assets/images/students/children-seated-blue-classroom.jpeg`,imageAlt:`Children seated safely in a classroom`,badge:`Safety first`},{id:`arts`,prefix:`Creative moments help every learner find their `,highlight:`voice`,suffix:` with joy.`,blurb:`Music, role play, presentation, and celebration build expression without putting pressure on children.`,imageSrc:`/assets/images/extra-curricular/career-day-children-in-costumes.jpeg`,imageAlt:`Children dressed for career day`,badge:`Creative confidence`},{id:`trips`,prefix:`Educational trips turn curiosity into `,highlight:`experience`,suffix:` beyond campus.`,blurb:`Themed excursions help children connect classroom ideas with the wider world around them.`,imageSrc:`/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg`,imageAlt:`KBIS learners on an educational trip`,badge:`Learning journeys`},{id:`community`,prefix:`A school community built around `,highlight:`one family`,suffix:` at a time with care.`,blurb:`Parents, teachers, and leadership work together so each child has a steady circle of support.`,imageSrc:`/assets/images/extra-curricular/parents-and-children-at-event.jpeg`,imageAlt:`Parents and children together at a school event`,badge:`Family partnership`}],ti=76,ni=3100,ri=[`fade`,`zoom`,`slide-left`,`slide-up`],ii=1.18,ai=3,oi=11,si=44,ci=9,li=14;function ui(e){return e.prefix.length+e.highlight.length+e.suffix.length}function di(e){return`${e.prefix}${e.highlight}${e.suffix}`}function fi(e,t){let{prefix:n,highlight:r,suffix:i}=t,a=n.length,o=a+r.length;return e<=a?{p:n.slice(0,e),h:``,s:``}:e<=o?{p:n,h:r.slice(0,e-a),s:``}:{p:n,h:r,s:i.slice(0,e-o)}}function pi(e,t,n,r,i,a,o=oi,s=si){let c=getComputedStyle(t);e.style.boxSizing=`border-box`,e.style.width=`${r}px`,e.style.fontFamily=c.fontFamily,e.style.fontWeight=c.fontWeight,e.style.fontStyle=c.fontStyle,e.style.letterSpacing=c.letterSpacing,e.style.textTransform=c.textTransform,e.style.lineHeight=String(a),e.style.wordBreak=`break-word`,e.style.overflowWrap=`anywhere`,e.style.whiteSpace=i===1?`nowrap`:`normal`,e.textContent=n;let l=t=>{e.style.fontSize=`${t}px`;let n=getComputedStyle(e).lineHeight,o=parseFloat(n);(Number.isNaN(o)||n===`normal`)&&(o=t*a);let s=e.scrollHeight<=o*i+1.5,c=i>1||e.scrollWidth<=r+1.5;return s&&c};if(!l(o))return o;if(l(s))return s;let u=o,d=s;for(let e=0;e<30;e++){let e=(u+d)/2;l(e)?u=e:d=e}return u}function mi(e,t,n){(0,x.useLayoutEffect)(()=>{let r=e.current,i=t.current;if(!r||!i)return;let a=!1,o=()=>{if(a)return;let e=getComputedStyle(r),t=(parseFloat(e.paddingLeft)||0)+(parseFloat(e.paddingRight)||0),o=Math.max(0,r.clientWidth-t);if(o<32)return;let s=pi(i,r,n,o,1,1.2,ci,li);r.style.setProperty(`--kb-hero-eyebrow-fs`,`${s}px`)},s=()=>requestAnimationFrame(()=>!a&&o());s();let c=typeof document<`u`&&document.fonts?.ready?document.fonts.ready:null;c&&typeof c.then==`function`&&c.then(()=>!a&&s());let l=new ResizeObserver(()=>s());return l.observe(r),window.addEventListener(`resize`,s),()=>{a=!0,l.disconnect(),window.removeEventListener(`resize`,s)}},[n])}function hi(e,t){(0,x.useLayoutEffect)(()=>{let n=e.current,r=t.current;if(!n||!r)return;let i=!1,a=()=>{if(i)return;let e=getComputedStyle(n),t=(parseFloat(e.paddingLeft)||0)+(parseFloat(e.paddingRight)||0),a=Math.max(0,n.clientWidth-t);if(a<48)return;let o=ei.map(e=>di(e)),s=si;for(let e of o)s=Math.min(s,pi(r,n,e,a,ai,ii));n.style.setProperty(`--kb-hero-title-fs`,`${s}px`),n.style.lineHeight=String(ii)},o=()=>{requestAnimationFrame(()=>{i||a()})};o();let s=typeof document<`u`&&document.fonts?.ready?document.fonts.ready:null;s&&typeof s.then==`function`&&s.then(()=>{i||o()});let c=new ResizeObserver(()=>o());return c.observe(n),window.addEventListener(`resize`,o),()=>{i=!0,c.disconnect(),window.removeEventListener(`resize`,o)}},[])}function gi(){let e=(0,x.useRef)(null),t=(0,x.useRef)(null),n=(0,x.useRef)(null),r=(0,x.useRef)(null),i=`${M.legalName} (KBIS)`,[a,o]=(0,x.useState)(0),[s,c]=(0,x.useState)(0),[l,u]=(0,x.useState)(ri[0]),[d,f]=(0,x.useState)(()=>new Set([0,1%ei.length]));hi(e,t),mi(n,r,i);let p=ei[a],m=ui(p),{p:h,h:g,s:_}=(0,x.useMemo)(()=>fi(s,p),[s,a]);(0,x.useEffect)(()=>{window.AOS&&(typeof window.AOS.refreshHard==`function`?window.AOS.refreshHard():window.AOS.refresh())},[a]),(0,x.useEffect)(()=>{f(e=>{let t=new Set(e);return t.add(a),t.add((a+1)%ei.length),t})},[a]),(0,x.useEffect)(()=>{let e=ei[a],t=ui(e);if(typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){c(t);let e=window.setTimeout(()=>{o(e=>(e+1)%ei.length)},6500);return()=>window.clearTimeout(e)}c(0);let n=0,r=!1,i,s=()=>{r||(n+=1,n<=t?(c(n),i=window.setTimeout(s,ti)):i=window.setTimeout(()=>{r||C((a+1)%ei.length)},ni))};return i=window.setTimeout(s,ti),()=>{r=!0,window.clearTimeout(i)}},[a]);let v=(0,x.useMemo)(()=>ei.map((e,t)=>(0,P.jsx)(`button`,{type:`button`,className:`kb-hero-dot${t===a?` is-active`:``}`,"aria-label":`Show slide ${t+1}`,"aria-current":t===a?`true`:void 0,onClick:()=>C(t)},e.id)),[a]),y=di(p),b=typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,ee=!b&&s<m,S=e=>{let t=ri.filter(t=>t!==e);return t[Math.floor(Math.random()*t.length)]||ri[0]},C=e=>{b||u(e=>S(e)),o(e)},w=(0,P.jsxs)(`div`,{className:`kb-hero-media-frame kb-hero-img-stack kb-transition-${l}`,children:[ei.map((e,t)=>d.has(t)?(0,P.jsx)(`img`,{src:e.imageSrc,alt:e.imageAlt,className:`img-fluid main-image kb-hero-stack-img${t===a?` is-active`:``}`,width:900,height:720,loading:t===0?`eager`:`lazy`,fetchpriority:t===0?`high`:`low`,decoding:`async`},e.id):null),(0,P.jsx)(`div`,{className:`kb-hero-badge-wrap`,"aria-live":`polite`,children:(0,P.jsxs)(`div`,{className:`badge-accredited`,children:[(0,P.jsx)(`i`,{className:`bi ${N.accredited}`,"aria-hidden":`true`}),(0,P.jsx)(`span`,{children:p.badge},p.badge)]})})]});return(0,P.jsxs)(`section`,{id:`hero`,className:`hero section kb-hero`,children:[(0,P.jsx)($r,{variant:`hero`,mode:`hero`}),(0,P.jsx)(`div`,{className:`hero-wrapper`,children:(0,P.jsx)(`div`,{className:`container`,children:(0,P.jsxs)(`div`,{className:`row align-items-center`,children:[(0,P.jsxs)(`div`,{className:`col-lg-6 hero-content position-relative`,"data-aos":`fade-right`,"data-aos-delay":`100`,children:[(0,P.jsx)(`p`,{ref:n,className:`kb-hero-schoolname`,children:i}),(0,P.jsx)(`span`,{ref:r,className:`kb-hero-eyebrow-measure`,"aria-hidden":`true`}),(0,P.jsx)(`div`,{ref:t,className:`kb-hero-title-measure`,"aria-hidden":`true`}),(0,P.jsxs)(`h1`,{ref:e,className:`kb-hero-title`,"aria-label":y,children:[(0,P.jsx)(`span`,{className:`kb-hero-title-static`,children:h}),(0,P.jsx)(`span`,{className:`kb-hero-title-swap`,children:g},p.id),(0,P.jsx)(`span`,{className:`kb-hero-title-static`,children:_}),ee?(0,P.jsx)(`span`,{className:`kb-hero-caret`,"aria-hidden":`true`}):null]}),(0,P.jsx)(`div`,{className:`hero-media d-lg-none`,"data-aos":`zoom-in`,"data-aos-delay":`200`,children:w}),(0,P.jsx)(`p`,{className:`kb-hero-lead`,children:p.blurb},p.id),(0,P.jsxs)(`div`,{className:`action-buttons`,children:[(0,P.jsx)(j,{to:`/admissions`,className:`btn-primary`,children:`Admit your child`}),(0,P.jsx)(j,{to:`/contact`,className:`btn-secondary`,children:`Talk to admissions`})]}),(0,P.jsx)(`div`,{className:`kb-hero-dots`,role:`tablist`,"aria-label":`Hero highlights`,children:v})]}),(0,P.jsx)(`div`,{className:`col-lg-6 hero-media d-none d-lg-block`,"data-aos":`zoom-in`,"data-aos-delay":`200`,children:w})]})})}),(0,P.jsx)(`div`,{className:`feature-cards-wrapper`,"data-aos":`fade-up`,"data-aos-delay":`300`,children:(0,P.jsx)(`div`,{className:`container`,children:(0,P.jsxs)(`div`,{className:`row gy-4`,children:[(0,P.jsx)(`div`,{className:`col-lg-4`,"data-aos":`fade-up`,"data-aos-delay":`100`,children:(0,P.jsxs)(j,{to:`/academics/programmes`,className:`feature-card d-flex text-decoration-none`,children:[(0,P.jsx)(`div`,{className:`feature-icon`,children:(0,P.jsx)(`i`,{className:`bi ${N.programsByAge}`,"aria-hidden":`true`})}),(0,P.jsxs)(`div`,{className:`feature-content`,children:[(0,P.jsx)(`h3`,{children:`Programs by age`}),(0,P.jsxs)(`p`,{children:[(0,P.jsx)(`strong`,{children:M.ages}),` — creche, nursery, kindergarten, reception, and primary.`]})]})]})}),(0,P.jsx)(`div`,{className:`col-lg-4`,"data-aos":`fade-up`,"data-aos-delay":`200`,children:(0,P.jsxs)(j,{to:`/student-life/extra-curricular`,className:`feature-card d-flex text-decoration-none`,children:[(0,P.jsx)(`div`,{className:`feature-icon`,children:(0,P.jsx)(`i`,{className:`bi ${N.indoorOutdoorPlay}`,"aria-hidden":`true`})}),(0,P.jsxs)(`div`,{className:`feature-content`,children:[(0,P.jsx)(`h3`,{children:`Indoor & outdoor play`}),(0,P.jsxs)(`p`,{children:[M.highlights[0],` — ideal for growing bodies and imaginations.`]})]})]})}),(0,P.jsx)(`div`,{className:`col-lg-4`,"data-aos":`fade-up`,"data-aos-delay":`300`,children:(0,P.jsxs)(j,{to:`/resources/policies`,className:`feature-card d-flex text-decoration-none`,children:[(0,P.jsx)(`div`,{className:`feature-icon`,children:(0,P.jsx)(`i`,{className:`bi ${N.safety}`,"aria-hidden":`true`})}),(0,P.jsxs)(`div`,{className:`feature-content`,children:[(0,P.jsx)(`h3`,{children:`Safety first`}),(0,P.jsxs)(`p`,{children:[M.highlights[2],` so families can focus on learning milestones.`]})]})]})})]})})}),(0,P.jsx)(`div`,{className:`upcoming-event`,"data-aos":`fade-up`,"data-aos-delay":`400`,children:(0,P.jsx)(`div`,{className:`container`,children:(0,P.jsxs)(`div`,{className:`event-content`,children:[(0,P.jsxs)(`div`,{className:`event-date`,children:[(0,P.jsx)(`span`,{className:`day`,children:`●`}),(0,P.jsx)(`span`,{className:`month`,children:`NOW`})]}),(0,P.jsxs)(`div`,{className:`event-info`,children:[(0,P.jsx)(`h3`,{children:`Rolling admissions`}),(0,P.jsxs)(`p`,{children:[M.highlights[1],`. Reach us at`,` `,(0,P.jsx)(`a`,{href:`tel:${M.phoneTel}`,children:M.phoneDisplay}),` — we would love to meet your family.`]})]}),(0,P.jsxs)(`div`,{className:`event-action`,children:[(0,P.jsx)(j,{to:`/admissions`,className:`btn-event`,children:`Admissions`}),(0,P.jsx)(`span`,{className:`countdown`,children:M.hours})]})]})})})]})}var _i=[{label:`Home`,path:`/`},{label:`About`,children:[{label:`About Us`,path:`/about`},{label:`Mission & Vision`,path:`/about/mission-vision`},{label:`Board of Directors`,path:`/about/board-of-directors`},{label:`Management`,path:`/about/management`},{label:`Principal`,path:`/about/principal`},{label:`Staff`,children:[{label:`Teaching Staff`,path:`/about/staff/teaching`},{label:`Support Staff`,path:`/about/staff/support`}]}]},{label:`Academics`,children:[{label:`Admission`,path:`/admissions`},{label:`Curriculum`,path:`/academics/curriculum`},{label:`Programmes`,path:`/academics/programmes`},{label:`Languages`,path:`/academics/languages`},{label:`Academic Calendar`,path:`/academics/academic-calendar`}]},{label:`Student Life`,children:[{label:`SRC`,path:`/student-life/src`},{label:`Houses`,path:`/student-life/houses`},{label:`Extra-Curricular`,path:`/student-life/extra-curricular`}]},{label:`Parents`,children:[{label:`Admission Form`,path:`/parents/admission-form`},{label:`Plan a Visit`,path:`/parents/plan-a-visit`},{label:`Make Payment`,path:`/parents/make-payment`},{label:`Student Handbook`,path:`/parents/student-handbook`}]},{label:`Resources`,children:[{label:`Gallery`,path:`/resources/gallery`},{label:`Policies`,path:`/resources/policies`}]},{label:`News`,children:[{label:`News`,path:`/news`},{label:`Events`,path:`/events`},{label:`Partnerships`,path:`/news/partnerships`}]}];function vi({item:e}){return e.children?.length?(0,P.jsxs)(`li`,{className:`dropdown`,children:[(0,P.jsxs)(`a`,{href:`#`,children:[(0,P.jsx)(`span`,{children:e.label}),` `,(0,P.jsx)(`i`,{className:`bi bi-chevron-down toggle-dropdown`,"aria-hidden":`true`})]}),(0,P.jsx)(`ul`,{children:e.children.map(e=>(0,P.jsx)(vi,{item:e},e.path||e.label))})]}):(0,P.jsx)(`li`,{children:(0,P.jsx)(j,{to:e.path,end:!0,children:e.label})})}function yi({item:e}){return e.path?(0,P.jsx)(`li`,{children:(0,P.jsx)(j,{to:e.path,end:e.path===`/`,children:e.label})}):(0,P.jsxs)(`li`,{className:`dropdown`,children:[(0,P.jsxs)(`a`,{href:`#`,children:[(0,P.jsx)(`span`,{children:e.label}),` `,(0,P.jsx)(`i`,{className:`bi bi-chevron-down toggle-dropdown`,"aria-hidden":`true`})]}),(0,P.jsx)(`ul`,{children:e.children.map(e=>(0,P.jsx)(vi,{item:e},e.path||e.label))})]})}function bi(){return(0,P.jsxs)(`nav`,{id:`navmenu`,className:`navmenu`,children:[(0,P.jsxs)(`ul`,{children:[_i.map(e=>(0,P.jsx)(yi,{item:e},e.path||e.label)),(0,P.jsx)(`li`,{className:`kb-nav-cta`,children:(0,P.jsxs)(j,{to:`/contact`,children:[(0,P.jsx)(`i`,{className:`bi bi-envelope-paper-heart`,"aria-hidden":`true`}),` Enquire`]})})]}),(0,P.jsx)(j,{to:`/contact`,className:`kb-header-enquire-icon d-xl-none`,"aria-label":`Enquire`,title:`Enquire`,children:(0,P.jsx)(`i`,{className:`bi bi-envelope-paper-heart`,"aria-hidden":`true`})}),(0,P.jsx)(`i`,{className:`mobile-nav-toggle d-xl-none bi bi-list`,"aria-hidden":`true`})]})}var xi=[{path:`/`,key:`index`,label:`Home`},{path:`/about`,key:`about`,label:`About us`},{path:`/academics`,key:`academics`,label:`Academics`},{path:`/admissions`,key:`admissions`,label:`Admission`},{path:`/faculty-staff`,key:`faculty-staff`,label:`Our team`},{path:`/campus-facilities`,key:`campus-facilities`,label:`Campus & facilities`},{path:`/students-life`,key:`students-life`,label:`Student life`},{path:`/news`,key:`news`,label:`News`},{path:`/events`,key:`events`,label:`Events`},{path:`/contact`,key:`contact`,label:`Contact`},{path:`/news-details`,key:`news-details`,label:`News details`},{path:`/event-details`,key:`event-details`,label:`Event details`},{path:`/privacy`,key:`privacy`,label:`Privacy`},{path:`/terms-of-service`,key:`terms-of-service`,label:`Terms of service`},{path:`/404`,key:`404`,label:`404`},...Ir],Si=Object.fromEntries(Rr.map(e=>[e.name,e]));function Ci(e){return e.replace(/\s*<!-- Hero Section -->[\s\S]*?<!-- \/Hero Section -->\s*/,`
`)}function wi({pageKey:e,page:t}){let n=t||Si[e]||Si[404],r=(0,x.useMemo)(()=>{let t=n?.mainHtml||``;return e===`index`&&(t=Ci(t)),t},[n,e]);return(0,x.useEffect)(()=>{let e=n?.bodyClass||`index-page`;document.body.className=e,document.title=n?.title||`KinderBubble International School`},[n]),(0,P.jsxs)(`main`,{className:`main`,children:[e===`index`?(0,P.jsx)(gi,{}):null,(0,P.jsxs)(`div`,{className:`kb-page-canvas`,children:[(0,P.jsx)($r,{variant:Qr(e),mode:`page`}),(0,P.jsx)(`div`,{className:`kb-page-canvas-inner`,dangerouslySetInnerHTML:{__html:r}})]})]})}function Ti(){let{slug:e}=pt(),t=(0,x.useMemo)(()=>_r(e),[e]);return t?(0,P.jsx)(wi,{pageKey:`event-details`,page:t}):(0,P.jsx)(wi,{pageKey:`404`})}function Ei(){let{slug:e}=pt(),t=(0,x.useMemo)(()=>mr(e),[e]);return t?(0,P.jsx)(wi,{pageKey:`news-details`,page:t}):(0,P.jsx)(wi,{pageKey:`404`})}var Di=[{path:`/about`,label:`About Us`},{path:`/admissions`,label:`Admissions`},{path:`/academics/programmes`,label:`Programmes`},{path:`/resources/gallery`,label:`Gallery`},{path:`/contact`,label:`Contact Us`}],Oi=[{title:`Open enrolment for 2025–26 academic year`,path:`/admissions`,image:`/assets/images/students/formal-uniform-students-kbis-01.jpeg`},{title:`Global School Alliance partnership`,path:`/news/partnerships`,image:`/assets/images/others/global-school-alliance-certificate.png`},{title:`Educational trips by term theme`,path:`/events`,image:`/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg`}];function ki({children:e}){let t=new Date().getFullYear();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`header`,{id:`header`,className:`header kb-header d-flex align-items-center sticky-top`,children:(0,P.jsxs)(`div`,{className:`header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-end`,children:[(0,P.jsxs)(j,{to:`/`,className:`logo kb-header-logo d-flex align-items-center me-auto`,children:[(0,P.jsx)(`img`,{src:M.logoSrc,alt:`Kinder Bubble International School`,className:`kb-logo-img`,width:180,height:180}),(0,P.jsxs)(`span`,{className:`kb-logo-text ms-2 d-inline-flex flex-column`,children:[(0,P.jsx)(`span`,{className:`sitename`,children:M.shortName}),(0,P.jsx)(`small`,{children:`International School`})]})]}),(0,P.jsx)(bi,{})]})}),e,(0,P.jsxs)(`footer`,{id:`footer`,className:`footer kb-footer light-background position-relative`,children:[(0,P.jsx)(`div`,{className:`kb-footer-glow`,"aria-hidden":`true`}),(0,P.jsx)(`div`,{className:`container footer-top kb-footer-top`,children:(0,P.jsxs)(`div`,{className:`kb-footer-top-row`,children:[(0,P.jsxs)(`section`,{className:`kb-footer-brand`,"aria-label":`School summary`,children:[(0,P.jsxs)(j,{to:`/`,className:`kb-footer-brand-lockup d-inline-flex align-items-center text-decoration-none`,children:[(0,P.jsx)(`img`,{src:M.logoSrc,alt:``,className:`kb-footer-logo-img`,width:120,height:120}),(0,P.jsxs)(`span`,{className:`kb-footer-wordmark ms-2 d-flex flex-column text-start`,children:[(0,P.jsx)(`span`,{className:`kb-footer-name`,children:M.shortName}),(0,P.jsx)(`span`,{className:`kb-footer-tag`,children:M.tagline})]})]}),(0,P.jsx)(`p`,{className:`kb-footer-brand-tagline`,children:`KBIS nurtures children from creche through primary with character, confidence, and bilingual learning.`}),(0,P.jsxs)(`div`,{className:`kb-footer-social`,"aria-label":`School contact shortcuts`,children:[(0,P.jsx)(`a`,{href:`tel:${M.phoneTel}`,"aria-label":`Call KBIS`,children:(0,P.jsx)(`i`,{className:`bi bi-telephone-fill`,"aria-hidden":`true`})}),(0,P.jsx)(`a`,{href:`mailto:${M.officeEmail}`,"aria-label":`Email KBIS`,children:(0,P.jsx)(`i`,{className:`bi bi-envelope-fill`,"aria-hidden":`true`})}),(0,P.jsx)(j,{to:`/contact`,"aria-label":`Visit contact page`,children:(0,P.jsx)(`i`,{className:`bi bi-geo-alt-fill`,"aria-hidden":`true`})})]})]}),(0,P.jsxs)(`section`,{className:`kb-footer-contact-col`,"aria-label":`Contacts`,children:[(0,P.jsx)(`h4`,{className:`kb-footer-heading`,children:`Contacts`}),(0,P.jsxs)(`ul`,{className:`kb-footer-contact list-unstyled`,children:[(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`i`,{className:`bi bi-geo-alt-fill`,"aria-hidden":`true`}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`span`,{className:`kb-footer-contact-label`,children:`Address`}),`Accra, Ghana`]})]}),(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`i`,{className:`bi bi-send-fill`,"aria-hidden":`true`}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`span`,{className:`kb-footer-contact-label`,children:`Email`}),(0,P.jsx)(`a`,{href:`mailto:${M.officeEmail}`,className:`kb-footer-link`,children:M.officeEmail})]})]}),(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`i`,{className:`bi bi-telephone-fill`,"aria-hidden":`true`}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`span`,{className:`kb-footer-contact-label`,children:`Phone`}),(0,P.jsx)(`a`,{href:`tel:${M.phoneTel}`,className:`kb-footer-link`,children:M.phoneDisplay})]})]})]})]}),(0,P.jsxs)(`section`,{className:`kb-footer-quick-col`,"aria-label":`Quick links`,children:[(0,P.jsx)(`h4`,{className:`kb-footer-heading`,children:`Quick Links`}),(0,P.jsx)(`ul`,{className:`kb-footer-nav-stack list-unstyled`,children:Di.map(e=>(0,P.jsx)(`li`,{children:(0,P.jsx)(j,{to:e.path,className:`kb-footer-nav-link`,children:e.label})},e.path))})]}),(0,P.jsxs)(`section`,{className:`kb-footer-news-col`,"aria-label":`Latest news`,children:[(0,P.jsx)(`h4`,{className:`kb-footer-heading`,children:`Latest News`}),(0,P.jsx)(`div`,{className:`kb-footer-news-list`,children:Oi.map(e=>(0,P.jsxs)(j,{to:e.path,className:`kb-footer-news-item`,children:[(0,P.jsx)(`img`,{src:e.image,alt:``,loading:`lazy`}),(0,P.jsx)(`span`,{children:e.title})]},e.title))})]})]})}),(0,P.jsx)(`div`,{className:`kb-footer-bottom`,children:(0,P.jsxs)(`div`,{className:`container py-3 d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-md-between gap-2 kb-footer-bottom-inner`,children:[(0,P.jsxs)(`p`,{className:`mb-0 small kb-footer-copy`,children:[`© `,t,` `,M.legalName,`. All rights reserved.`]}),(0,P.jsxs)(`nav`,{className:`d-flex flex-wrap gap-3 small kb-footer-legal-nav`,"aria-label":`Legal`,children:[(0,P.jsx)(j,{to:`/privacy`,className:`kb-footer-legal-link`,children:`Privacy`}),(0,P.jsx)(j,{to:`/terms-of-service`,className:`kb-footer-legal-link`,children:`Terms of service`})]})]})})]}),(0,P.jsx)(`a`,{href:`#`,id:`scroll-top`,className:`scroll-top d-flex align-items-center justify-content-center`,children:(0,P.jsx)(`i`,{className:`bi bi-arrow-up-short`})}),(0,P.jsx)(`div`,{id:`preloader`})]})}function Ai(){let e=ct();return(0,x.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`auto`})},[e.pathname]),(0,x.useEffect)(()=>{Gr(),Kr()},[e.pathname]),(0,P.jsx)(ki,{children:(0,P.jsxs)(Rt,{children:[xi.map(e=>(0,P.jsx)(It,{path:e.path,element:(0,P.jsx)(wi,{pageKey:e.key})},e.path)),(0,P.jsx)(It,{path:`/event-details/:slug`,element:(0,P.jsx)(Ti,{})}),(0,P.jsx)(It,{path:`/news-details/:slug`,element:(0,P.jsx)(Ei,{})}),(0,P.jsx)(It,{path:`*`,element:(0,P.jsx)(wi,{pageKey:`404`})})]})})}(0,Kn.createRoot)(document.getElementById(`root`)).render((0,P.jsx)(x.StrictMode,{children:(0,P.jsx)(En,{children:(0,P.jsx)(Ai,{})})}));