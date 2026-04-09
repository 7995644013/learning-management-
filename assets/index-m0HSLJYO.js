function AS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ov={exports:{}},Su={},av={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),CS=Symbol.for("react.portal"),kS=Symbol.for("react.fragment"),bS=Symbol.for("react.strict_mode"),RS=Symbol.for("react.profiler"),PS=Symbol.for("react.provider"),NS=Symbol.for("react.context"),DS=Symbol.for("react.forward_ref"),OS=Symbol.for("react.suspense"),LS=Symbol.for("react.memo"),jS=Symbol.for("react.lazy"),um=Symbol.iterator;function MS(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uv=Object.assign,cv={};function Is(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dv(){}dv.prototype=Is.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}var Rh=bh.prototype=new dv;Rh.constructor=bh;uv(Rh,Is.prototype);Rh.isPureReactComponent=!0;var cm=Array.isArray,hv=Object.prototype.hasOwnProperty,Ph={current:null},fv={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hv.call(e,r)&&!fv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:Ph.current}}function FS(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function VS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dm=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VS(""+t.key):e.toString(36)}function ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case CS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vc(o,0):r,cm(i)?(n="",t!=null&&(n=t.replace(dm,"$&/")+"/"),ll(i,e,n,"",function(c){return c})):i!=null&&(Nh(i)&&(i=FS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+vc(s,l);o+=ll(s,e,n,u,i)}else if(u=MS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+vc(s,l++),o+=ll(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var r=[],i=0;return ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function US(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},ul={transition:null},BS={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Ph};function mv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Is;re.Fragment=kS;re.Profiler=RS;re.PureComponent=bh;re.StrictMode=bS;re.Suspense=OS;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;re.act=mv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ph.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)hv.call(e,u)&&!fv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:NS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PS,_context:t},t.Consumer=t};re.createElement=pv;re.createFactory=function(t){var e=pv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:DS,render:t}};re.isValidElement=Nh;re.lazy=function(t){return{$$typeof:jS,_payload:{_status:-1,_result:t},_init:US}};re.memo=function(t,e){return{$$typeof:LS,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};re.unstable_act=mv;re.useCallback=function(t,e){return Tt.current.useCallback(t,e)};re.useContext=function(t){return Tt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Tt.current.useEffect(t,e)};re.useId=function(){return Tt.current.useId()};re.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Tt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};re.useRef=function(t){return Tt.current.useRef(t)};re.useState=function(t){return Tt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Tt.current.useTransition()};re.version="18.3.1";av.exports=re;var M=av.exports;const gv=sv(M),zS=AS({__proto__:null,default:gv},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $S=M,qS=Symbol.for("react.element"),HS=Symbol.for("react.fragment"),WS=Object.prototype.hasOwnProperty,GS=$S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KS={key:!0,ref:!0,__self:!0,__source:!0};function yv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WS.call(e,r)&&!KS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qS,type:t,key:s,ref:o,props:i,_owner:GS.current}}Su.Fragment=HS;Su.jsx=yv;Su.jsxs=yv;ov.exports=Su;var h=ov.exports,sd={},vv={exports:{}},Vt={},_v={exports:{}},wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,W){var Q=B.length;B.push(W);e:for(;0<Q;){var he=Q-1>>>1,ie=B[he];if(0<i(ie,W))B[he]=W,B[Q]=ie,Q=he;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var W=B[0],Q=B.pop();if(Q!==W){B[0]=Q;e:for(var he=0,ie=B.length,Nt=ie>>>1;he<Nt;){var me=2*(he+1)-1,Ge=B[me],Be=me+1,nt=B[Be];if(0>i(Ge,Q))Be<ie&&0>i(nt,Ge)?(B[he]=nt,B[Be]=Q,he=Be):(B[he]=Ge,B[me]=Q,he=me);else if(Be<ie&&0>i(nt,Q))B[he]=nt,B[Be]=Q,he=Be;else break e}}return W}function i(B,W){var Q=B.sortIndex-W.sortIndex;return Q!==0?Q:B.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,E=3,I=!1,R=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=B)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function P(B){if(b=!1,v(B),!R)if(n(u)!==null)R=!0,Dn(D);else{var W=n(c);W!==null&&de(P,W.startTime-B)}}function D(B,W){R=!1,b&&(b=!1,A(y),y=-1),I=!0;var Q=E;try{for(v(W),m=n(u);m!==null&&(!(m.expirationTime>W)||B&&!x());){var he=m.callback;if(typeof he=="function"){m.callback=null,E=m.priorityLevel;var ie=he(m.expirationTime<=W);W=t.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(u)&&r(u),v(W)}else r(u);m=n(u)}if(m!==null)var Nt=!0;else{var me=n(c);me!==null&&de(P,me.startTime-W),Nt=!1}return Nt}finally{m=null,E=Q,I=!1}}var L=!1,_=null,y=-1,S=5,T=-1;function x(){return!(t.unstable_now()-T<S)}function N(){if(_!==null){var B=t.unstable_now();T=B;var W=!0;try{W=_(!0,B)}finally{W?C():(L=!1,_=null)}}else L=!1}var C;if(typeof g=="function")C=function(){g(N)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ut=pe.port2;pe.port1.onmessage=N,C=function(){ut.postMessage(null)}}else C=function(){k(N,0)};function Dn(B){_=B,L||(L=!0,C())}function de(B,W){y=k(function(){B(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||I||(R=!0,Dn(D))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(E){case 1:case 2:case 3:var W=3;break;default:W=E}var Q=E;E=W;try{return B()}finally{E=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=E;E=B;try{return W()}finally{E=Q}},t.unstable_scheduleCallback=function(B,W,Q){var he=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?he+Q:he):Q=he,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Q+ie,B={id:p++,callback:W,priorityLevel:B,startTime:Q,expirationTime:ie,sortIndex:-1},Q>he?(B.sortIndex=Q,e(c,B),n(u)===null&&B===n(c)&&(b?(A(y),y=-1):b=!0,de(P,Q-he))):(B.sortIndex=ie,e(u,B),R||I||(R=!0,Dn(D))),B},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(B){var W=E;return function(){var Q=E;E=W;try{return B.apply(this,arguments)}finally{E=Q}}}})(wv);_v.exports=wv;var QS=_v.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YS=M,Ft=QS;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ev=new Set,Do={};function Ti(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(Do[t]=e,t=0;t<e.length;t++)Ev.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),od=Object.prototype.hasOwnProperty,JS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},fm={};function XS(t){return od.call(fm,t)?!0:od.call(hm,t)?!1:JS.test(t)?fm[t]=!0:(hm[t]=!0,!1)}function ZS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eT(t,e,n,r){if(e===null||typeof e>"u"||ZS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Oh);at[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Oh);at[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Oh);at[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eT(e,n,i,r)&&(n=null),r||i===null?XS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=YS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Iv=Symbol.for("react.offscreen"),pm=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,_c;function uo(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var wc=!1;function Ec(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function tT(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Bi:return"Portal";case ad:return"Profiler";case jh:return"StrictMode";case ld:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tv:return(t.displayName||"Context")+".Consumer";case Sv:return(t._context.displayName||"Context")+".Provider";case Mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fh:return e=t.displayName||null,e!==null?e:cd(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return cd(t(e))}catch{}}return null}function nT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rT(t){var e=xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fa(t){t._valueTracker||(t._valueTracker=rT(t))}function Av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dd(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cv(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function hd(t,e){Cv(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fd(t,e.type,n):e.hasOwnProperty("defaultValue")&&fd(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fd(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(co(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function kv(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iT=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){iT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function Pv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function Nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sT=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gd(t,e){if(e){if(sT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function yd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vd=null;function Vh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _d=null,es=null,ts=null;function _m(t){if(t=ha(t)){if(typeof _d!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Cu(e),_d(t.stateNode,t.type,e))}}function Dv(t){es?ts?ts.push(t):ts=[t]:es=t}function Ov(){if(es){var t=es,e=ts;if(ts=es=null,_m(t),e)for(t=0;t<e.length;t++)_m(e[t])}}function Lv(t,e){return t(e)}function jv(){}var Sc=!1;function Mv(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return Lv(t,e,n)}finally{Sc=!1,(es!==null||ts!==null)&&(jv(),Ov())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var wd=!1;if(qn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){wd=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{wd=!1}function oT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var _o=!1,Nl=null,Dl=!1,Ed=null,aT={onError:function(t){_o=!0,Nl=t}};function lT(t,e,n,r,i,s,o,l,u){_o=!1,Nl=null,oT.apply(aT,arguments)}function uT(t,e,n,r,i,s,o,l,u){if(lT.apply(this,arguments),_o){if(_o){var c=Nl;_o=!1,Nl=null}else throw Error(U(198));Dl||(Dl=!0,Ed=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(Ii(t)!==t)throw Error(U(188))}function cT(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wm(i),t;if(s===r)return wm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Vv(t){return t=cT(t),t!==null?Uv(t):null}function Uv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Uv(t);if(e!==null)return e;t=t.sibling}return null}var Bv=Ft.unstable_scheduleCallback,Em=Ft.unstable_cancelCallback,dT=Ft.unstable_shouldYield,hT=Ft.unstable_requestPaint,je=Ft.unstable_now,fT=Ft.unstable_getCurrentPriorityLevel,Uh=Ft.unstable_ImmediatePriority,zv=Ft.unstable_UserBlockingPriority,Ol=Ft.unstable_NormalPriority,pT=Ft.unstable_LowPriority,$v=Ft.unstable_IdlePriority,Tu=null,In=null;function mT(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:vT,gT=Math.log,yT=Math.LN2;function vT(t){return t>>>=0,t===0?32:31-(gT(t)/yT|0)|0}var Ua=64,Ba=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ho(l):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function _T(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=_T(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qv(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function ET(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function Hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wv,zh,Gv,Kv,Qv,Td=!1,za=[],Sr=null,Tr=null,Ir=null,jo=new Map,Mo=new Map,pr=[],ST="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TT(t,e,n,r,i){switch(e){case"focusin":return Sr=to(Sr,t,e,n,r,i),!0;case"dragenter":return Tr=to(Tr,t,e,n,r,i),!0;case"mouseover":return Ir=to(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,to(jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,to(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function Yv(t){var e=ri(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=Fv(n),e!==null){t.blockedOn=e,Qv(t.priority,function(){Gv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vd=r,n.target.dispatchEvent(r),vd=null}else return e=ha(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Tm(t,e,n){cl(t)&&n.delete(e)}function IT(){Td=!1,Sr!==null&&cl(Sr)&&(Sr=null),Tr!==null&&cl(Tr)&&(Tr=null),Ir!==null&&cl(Ir)&&(Ir=null),jo.forEach(Tm),Mo.forEach(Tm)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,IT)))}function Fo(t){function e(i){return no(i,t)}if(0<za.length){no(za[0],t);for(var n=1;n<za.length;n++){var r=za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&no(Sr,t),Tr!==null&&no(Tr,t),Ir!==null&&no(Ir,t),jo.forEach(e),Mo.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)Yv(n),n.blockedOn===null&&pr.shift()}var ns=Xn.ReactCurrentBatchConfig,jl=!0;function xT(t,e,n,r){var i=ge,s=ns.transition;ns.transition=null;try{ge=1,$h(t,e,n,r)}finally{ge=i,ns.transition=s}}function AT(t,e,n,r){var i=ge,s=ns.transition;ns.transition=null;try{ge=4,$h(t,e,n,r)}finally{ge=i,ns.transition=s}}function $h(t,e,n,r){if(jl){var i=Id(t,e,n,r);if(i===null)Dc(t,e,r,Ml,n),Sm(t,r);else if(TT(i,t,e,n,r))r.stopPropagation();else if(Sm(t,r),e&4&&-1<ST.indexOf(t)){for(;i!==null;){var s=ha(i);if(s!==null&&Wv(s),s=Id(t,e,n,r),s===null&&Dc(t,e,r,Ml,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dc(t,e,r,null,n)}}var Ml=null;function Id(t,e,n,r){if(Ml=null,t=Vh(r),t=ri(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function Jv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fT()){case Uh:return 1;case zv:return 4;case Ol:case pT:return 16;case $v:return 536870912;default:return 16}default:return 16}}var vr=null,qh=null,dl=null;function Xv(){if(dl)return dl;var t,e=qh,n=e.length,r,i="value"in vr?vr.value:vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function Im(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:Im,this.isPropagationStopped=Im,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Ut(xs),da=Re({},xs,{view:0,detail:0}),CT=Ut(da),Ic,xc,ro,Iu=Re({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Ic=t.screenX-ro.screenX,xc=t.screenY-ro.screenY):xc=Ic=0,ro=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),xm=Ut(Iu),kT=Re({},Iu,{dataTransfer:0}),bT=Ut(kT),RT=Re({},da,{relatedTarget:0}),Ac=Ut(RT),PT=Re({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),NT=Ut(PT),DT=Re({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OT=Ut(DT),LT=Re({},xs,{data:0}),Am=Ut(LT),jT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FT[t])?!!e[t]:!1}function Wh(){return VT}var UT=Re({},da,{key:function(t){if(t.key){var e=jT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BT=Ut(UT),zT=Re({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=Ut(zT),$T=Re({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),qT=Ut($T),HT=Re({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),WT=Ut(HT),GT=Re({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KT=Ut(GT),QT=[9,13,27,32],Gh=qn&&"CompositionEvent"in window,wo=null;qn&&"documentMode"in document&&(wo=document.documentMode);var YT=qn&&"TextEvent"in window&&!wo,Zv=qn&&(!Gh||wo&&8<wo&&11>=wo),km=" ",bm=!1;function e_(t,e){switch(t){case"keyup":return QT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function JT(t,e){switch(t){case"compositionend":return t_(e);case"keypress":return e.which!==32?null:(bm=!0,km);case"textInput":return t=e.data,t===km&&bm?null:t;default:return null}}function XT(t,e){if($i)return t==="compositionend"||!Gh&&e_(t,e)?(t=Xv(),dl=qh=vr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zv&&e.locale!=="ko"?null:e.data;default:return null}}var ZT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZT[t.type]:e==="textarea"}function n_(t,e,n,r){Dv(r),e=Fl(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,Vo=null;function eI(t){f_(t,0)}function xu(t){var e=Wi(t);if(Av(e))return t}function tI(t,e){if(t==="change")return e}var r_=!1;if(qn){var Cc;if(qn){var kc="oninput"in document;if(!kc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),kc=typeof Pm.oninput=="function"}Cc=kc}else Cc=!1;r_=Cc&&(!document.documentMode||9<document.documentMode)}function Nm(){Eo&&(Eo.detachEvent("onpropertychange",i_),Vo=Eo=null)}function i_(t){if(t.propertyName==="value"&&xu(Vo)){var e=[];n_(e,Vo,t,Vh(t)),Mv(eI,e)}}function nI(t,e,n){t==="focusin"?(Nm(),Eo=e,Vo=n,Eo.attachEvent("onpropertychange",i_)):t==="focusout"&&Nm()}function rI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Vo)}function iI(t,e){if(t==="click")return xu(e)}function sI(t,e){if(t==="input"||t==="change")return xu(e)}function oI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:oI;function Uo(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!od.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function s_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?s_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function o_(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aI(t){var e=o_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&s_(n.ownerDocument.documentElement,n)){if(r!==null&&Kh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Om(n,s);var o=Om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lI=qn&&"documentMode"in document&&11>=document.documentMode,qi=null,xd=null,So=null,Ad=!1;function Lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||qi==null||qi!==Pl(r)||(r=qi,"selectionStart"in r&&Kh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Uo(So,r)||(So=r,r=Fl(xd,"onSelect"),0<r.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qi)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},bc={},a_={};qn&&(a_=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function Au(t){if(bc[t])return bc[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in a_)return bc[t]=e[n];return t}var l_=Au("animationend"),u_=Au("animationiteration"),c_=Au("animationstart"),d_=Au("transitionend"),h_=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){h_.set(t,e),Ti(e,[t])}for(var Rc=0;Rc<jm.length;Rc++){var Pc=jm[Rc],uI=Pc.toLowerCase(),cI=Pc[0].toUpperCase()+Pc.slice(1);qr(uI,"on"+cI)}qr(l_,"onAnimationEnd");qr(u_,"onAnimationIteration");qr(c_,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(d_,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dI=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uT(r,e,void 0,t),t.currentTarget=null}function f_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}}}if(Dl)throw t=Ed,Dl=!1,Ed=null,t}function Se(t,e){var n=e[Pd];n===void 0&&(n=e[Pd]=new Set);var r=t+"__bubble";n.has(r)||(p_(e,t,2,!1),n.add(r))}function Nc(t,e,n){var r=0;e&&(r|=4),p_(n,t,r,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[Ha]){t[Ha]=!0,Ev.forEach(function(n){n!=="selectionchange"&&(dI.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,Nc("selectionchange",!1,e))}}function p_(t,e,n,r){switch(Jv(e)){case 1:var i=xT;break;case 4:i=AT;break;default:i=$h}n=i.bind(null,e,n,t),i=void 0,!wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ri(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Mv(function(){var c=s,p=Vh(n),m=[];e:{var E=h_.get(t);if(E!==void 0){var I=Hh,R=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":I=BT;break;case"focusin":R="focus",I=Ac;break;case"focusout":R="blur",I=Ac;break;case"beforeblur":case"afterblur":I=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=bT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=qT;break;case l_:case u_:case c_:I=NT;break;case d_:I=WT;break;case"scroll":I=CT;break;case"wheel":I=KT;break;case"copy":case"cut":case"paste":I=OT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Cm}var b=(e&4)!==0,k=!b&&t==="scroll",A=b?E!==null?E+"Capture":null:E;b=[];for(var g=c,v;g!==null;){v=g;var P=v.stateNode;if(v.tag===5&&P!==null&&(v=P,A!==null&&(P=Lo(g,A),P!=null&&b.push(zo(g,P,v)))),k)break;g=g.return}0<b.length&&(E=new I(E,R,null,n,p),m.push({event:E,listeners:b}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",E&&n!==vd&&(R=n.relatedTarget||n.fromElement)&&(ri(R)||R[Hn]))break e;if((I||E)&&(E=p.window===p?p:(E=p.ownerDocument)?E.defaultView||E.parentWindow:window,I?(R=n.relatedTarget||n.toElement,I=c,R=R?ri(R):null,R!==null&&(k=Ii(R),R!==k||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=c),I!==R)){if(b=xm,P="onMouseLeave",A="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(b=Cm,P="onPointerLeave",A="onPointerEnter",g="pointer"),k=I==null?E:Wi(I),v=R==null?E:Wi(R),E=new b(P,g+"leave",I,n,p),E.target=k,E.relatedTarget=v,P=null,ri(p)===c&&(b=new b(A,g+"enter",R,n,p),b.target=v,b.relatedTarget=k,P=b),k=P,I&&R)t:{for(b=I,A=R,g=0,v=b;v;v=ji(v))g++;for(v=0,P=A;P;P=ji(P))v++;for(;0<g-v;)b=ji(b),g--;for(;0<v-g;)A=ji(A),v--;for(;g--;){if(b===A||A!==null&&b===A.alternate)break t;b=ji(b),A=ji(A)}b=null}else b=null;I!==null&&Fm(m,E,I,b,!1),R!==null&&k!==null&&Fm(m,k,R,b,!0)}}e:{if(E=c?Wi(c):window,I=E.nodeName&&E.nodeName.toLowerCase(),I==="select"||I==="input"&&E.type==="file")var D=tI;else if(Rm(E))if(r_)D=sI;else{D=rI;var L=nI}else(I=E.nodeName)&&I.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(D=iI);if(D&&(D=D(t,c))){n_(m,D,n,p);break e}L&&L(t,E,c),t==="focusout"&&(L=E._wrapperState)&&L.controlled&&E.type==="number"&&fd(E,"number",E.value)}switch(L=c?Wi(c):window,t){case"focusin":(Rm(L)||L.contentEditable==="true")&&(qi=L,xd=c,So=null);break;case"focusout":So=xd=qi=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Lm(m,n,p);break;case"selectionchange":if(lI)break;case"keydown":case"keyup":Lm(m,n,p)}var _;if(Gh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else $i?e_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Zv&&n.locale!=="ko"&&($i||y!=="onCompositionStart"?y==="onCompositionEnd"&&$i&&(_=Xv()):(vr=p,qh="value"in vr?vr.value:vr.textContent,$i=!0)),L=Fl(c,y),0<L.length&&(y=new Am(y,t,null,n,p),m.push({event:y,listeners:L}),_?y.data=_:(_=t_(n),_!==null&&(y.data=_)))),(_=YT?JT(t,n):XT(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(p=new Am("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=_))}f_(m,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(zo(t,s,i)),s=Lo(t,e),s!=null&&r.push(zo(t,s,i))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Lo(n,s),u!=null&&o.unshift(zo(n,u,l))):i||(u=Lo(n,s),u!=null&&o.push(zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hI=/\r\n?/g,fI=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(hI,`
`).replace(fI,"")}function Wa(t,e,n){if(e=Vm(e),Vm(t)!==e&&n)throw Error(U(425))}function Vl(){}var Cd=null,kd=null;function bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,pI=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,mI=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(gI)}:Rd;function gI(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fo(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),Tn="__reactFiber$"+As,$o="__reactProps$"+As,Hn="__reactContainer$"+As,Pd="__reactEvents$"+As,yI="__reactListeners$"+As,vI="__reactHandles$"+As;function ri(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[Tn])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[Tn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Cu(t){return t[$o]||null}var Nd=[],Gi=-1;function Hr(t){return{current:t}}function Ie(t){0>Gi||(t.current=Nd[Gi],Nd[Gi]=null,Gi--)}function we(t,e){Gi++,Nd[Gi]=t.current,t.current=e}var Mr={},yt=Hr(Mr),bt=Hr(!1),hi=Mr;function ds(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function Ul(){Ie(bt),Ie(yt)}function zm(t,e,n){if(yt.current!==Mr)throw Error(U(168));we(yt,e),we(bt,n)}function m_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,nT(t)||"Unknown",i));return Re({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,hi=yt.current,we(yt,t),we(bt,bt.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=m_(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,Ie(bt),Ie(yt),we(yt,t)):Ie(bt),we(bt,n)}var Ln=null,ku=!1,Lc=!1;function g_(t){Ln===null?Ln=[t]:Ln.push(t)}function _I(t){ku=!0,g_(t)}function Wr(){if(!Lc&&Ln!==null){Lc=!0;var t=0,e=ge;try{var n=Ln;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,ku=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(t+1)),Bv(Uh,Wr),i}finally{ge=e,Lc=!1}}return null}var Ki=[],Qi=0,zl=null,$l=0,$t=[],qt=0,fi=null,Fn=1,Vn="";function ei(t,e){Ki[Qi++]=$l,Ki[Qi++]=zl,zl=t,$l=e}function y_(t,e,n){$t[qt++]=Fn,$t[qt++]=Vn,$t[qt++]=fi,fi=t;var r=Fn;t=Vn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-ln(e)+i|n<<i|r,Vn=s+t}else Fn=1<<s|n<<i|r,Vn=t}function Qh(t){t.return!==null&&(ei(t,1),y_(t,1,0))}function Yh(t){for(;t===zl;)zl=Ki[--Qi],Ki[Qi]=null,$l=Ki[--Qi],Ki[Qi]=null;for(;t===fi;)fi=$t[--qt],$t[qt]=null,Vn=$t[--qt],$t[qt]=null,Fn=$t[--qt],$t[qt]=null}var Mt=null,jt=null,Ae=!1,rn=null;function v_(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,jt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fi!==null?{id:Fn,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,jt=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(Ae){var e=jt;if(e){var n=e;if(!qm(t,e)){if(Dd(t))throw Error(U(418));e=xr(n.nextSibling);var r=Mt;e&&qm(t,e)?v_(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Mt=t)}}else{if(Dd(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ae=!1,Mt=t}}}function Hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Ga(t){if(t!==Mt)return!1;if(!Ae)return Hm(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bd(t.type,t.memoizedProps)),e&&(e=jt)){if(Dd(t))throw __(),Error(U(418));for(;e;)v_(t,e),e=xr(e.nextSibling)}if(Hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Mt?xr(t.stateNode.nextSibling):null;return!0}function __(){for(var t=jt;t;)t=xr(t.nextSibling)}function hs(){jt=Mt=null,Ae=!1}function Jh(t){rn===null?rn=[t]:rn.push(t)}var wI=Xn.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wm(t){var e=t._init;return e(t._payload)}function w_(t){function e(A,g){if(t){var v=A.deletions;v===null?(A.deletions=[g],A.flags|=16):v.push(g)}}function n(A,g){if(!t)return null;for(;g!==null;)e(A,g),g=g.sibling;return null}function r(A,g){for(A=new Map;g!==null;)g.key!==null?A.set(g.key,g):A.set(g.index,g),g=g.sibling;return A}function i(A,g){return A=br(A,g),A.index=0,A.sibling=null,A}function s(A,g,v){return A.index=v,t?(v=A.alternate,v!==null?(v=v.index,v<g?(A.flags|=2,g):v):(A.flags|=2,g)):(A.flags|=1048576,g)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,g,v,P){return g===null||g.tag!==6?(g=zc(v,A.mode,P),g.return=A,g):(g=i(g,v),g.return=A,g)}function u(A,g,v,P){var D=v.type;return D===zi?p(A,g,v.props.children,P,v.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===hr&&Wm(D)===g.type)?(P=i(g,v.props),P.ref=io(A,g,v),P.return=A,P):(P=_l(v.type,v.key,v.props,null,A.mode,P),P.ref=io(A,g,v),P.return=A,P)}function c(A,g,v,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=$c(v,A.mode,P),g.return=A,g):(g=i(g,v.children||[]),g.return=A,g)}function p(A,g,v,P,D){return g===null||g.tag!==7?(g=ui(v,A.mode,P,D),g.return=A,g):(g=i(g,v),g.return=A,g)}function m(A,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zc(""+g,A.mode,v),g.return=A,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:return v=_l(g.type,g.key,g.props,null,A.mode,v),v.ref=io(A,null,g),v.return=A,v;case Bi:return g=$c(g,A.mode,v),g.return=A,g;case hr:var P=g._init;return m(A,P(g._payload),v)}if(co(g)||Zs(g))return g=ui(g,A.mode,v,null),g.return=A,g;Ka(A,g)}return null}function E(A,g,v,P){var D=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:l(A,g,""+v,P);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:return v.key===D?u(A,g,v,P):null;case Bi:return v.key===D?c(A,g,v,P):null;case hr:return D=v._init,E(A,g,D(v._payload),P)}if(co(v)||Zs(v))return D!==null?null:p(A,g,v,P,null);Ka(A,v)}return null}function I(A,g,v,P,D){if(typeof P=="string"&&P!==""||typeof P=="number")return A=A.get(v)||null,l(g,A,""+P,D);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Ma:return A=A.get(P.key===null?v:P.key)||null,u(g,A,P,D);case Bi:return A=A.get(P.key===null?v:P.key)||null,c(g,A,P,D);case hr:var L=P._init;return I(A,g,v,L(P._payload),D)}if(co(P)||Zs(P))return A=A.get(v)||null,p(g,A,P,D,null);Ka(g,P)}return null}function R(A,g,v,P){for(var D=null,L=null,_=g,y=g=0,S=null;_!==null&&y<v.length;y++){_.index>y?(S=_,_=null):S=_.sibling;var T=E(A,_,v[y],P);if(T===null){_===null&&(_=S);break}t&&_&&T.alternate===null&&e(A,_),g=s(T,g,y),L===null?D=T:L.sibling=T,L=T,_=S}if(y===v.length)return n(A,_),Ae&&ei(A,y),D;if(_===null){for(;y<v.length;y++)_=m(A,v[y],P),_!==null&&(g=s(_,g,y),L===null?D=_:L.sibling=_,L=_);return Ae&&ei(A,y),D}for(_=r(A,_);y<v.length;y++)S=I(_,A,y,v[y],P),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?y:S.key),g=s(S,g,y),L===null?D=S:L.sibling=S,L=S);return t&&_.forEach(function(x){return e(A,x)}),Ae&&ei(A,y),D}function b(A,g,v,P){var D=Zs(v);if(typeof D!="function")throw Error(U(150));if(v=D.call(v),v==null)throw Error(U(151));for(var L=D=null,_=g,y=g=0,S=null,T=v.next();_!==null&&!T.done;y++,T=v.next()){_.index>y?(S=_,_=null):S=_.sibling;var x=E(A,_,T.value,P);if(x===null){_===null&&(_=S);break}t&&_&&x.alternate===null&&e(A,_),g=s(x,g,y),L===null?D=x:L.sibling=x,L=x,_=S}if(T.done)return n(A,_),Ae&&ei(A,y),D;if(_===null){for(;!T.done;y++,T=v.next())T=m(A,T.value,P),T!==null&&(g=s(T,g,y),L===null?D=T:L.sibling=T,L=T);return Ae&&ei(A,y),D}for(_=r(A,_);!T.done;y++,T=v.next())T=I(_,A,y,T.value,P),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),g=s(T,g,y),L===null?D=T:L.sibling=T,L=T);return t&&_.forEach(function(N){return e(A,N)}),Ae&&ei(A,y),D}function k(A,g,v,P){if(typeof v=="object"&&v!==null&&v.type===zi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:e:{for(var D=v.key,L=g;L!==null;){if(L.key===D){if(D=v.type,D===zi){if(L.tag===7){n(A,L.sibling),g=i(L,v.props.children),g.return=A,A=g;break e}}else if(L.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===hr&&Wm(D)===L.type){n(A,L.sibling),g=i(L,v.props),g.ref=io(A,L,v),g.return=A,A=g;break e}n(A,L);break}else e(A,L);L=L.sibling}v.type===zi?(g=ui(v.props.children,A.mode,P,v.key),g.return=A,A=g):(P=_l(v.type,v.key,v.props,null,A.mode,P),P.ref=io(A,g,v),P.return=A,A=P)}return o(A);case Bi:e:{for(L=v.key;g!==null;){if(g.key===L)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(A,g.sibling),g=i(g,v.children||[]),g.return=A,A=g;break e}else{n(A,g);break}else e(A,g);g=g.sibling}g=$c(v,A.mode,P),g.return=A,A=g}return o(A);case hr:return L=v._init,k(A,g,L(v._payload),P)}if(co(v))return R(A,g,v,P);if(Zs(v))return b(A,g,v,P);Ka(A,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(A,g.sibling),g=i(g,v),g.return=A,A=g):(n(A,g),g=zc(v,A.mode,P),g.return=A,A=g),o(A)):n(A,g)}return k}var fs=w_(!0),E_=w_(!1),ql=Hr(null),Hl=null,Yi=null,Xh=null;function Zh(){Xh=Yi=Hl=null}function ef(t){var e=ql.current;Ie(ql),t._currentValue=e}function Ld(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Hl=t,Xh=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Xh!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(Hl===null)throw Error(U(308));Yi=t,Hl.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var ii=null;function tf(t){ii===null?ii=[t]:ii.push(t)}function S_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,tf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}function Gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,r){var i=t.updateQueue;fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=c=u=null,l=s;do{var E=l.lane,I=l.eventTime;if((r&E)===E){p!==null&&(p=p.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,b=l;switch(E=e,I=n,b.tag){case 1:if(R=b.payload,typeof R=="function"){m=R.call(I,m,E);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=b.payload,E=typeof R=="function"?R.call(I,m,E):R,E==null)break e;m=Re({},m,E);break e;case 2:fr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[l]:E.push(l))}else I={eventTime:I,lane:E,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=I,u=m):p=p.next=I,o|=E;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;E=l,l=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=m}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var fa={},xn=Hr(fa),qo=Hr(fa),Ho=Hr(fa);function si(t){if(t===fa)throw Error(U(174));return t}function rf(t,e){switch(we(Ho,e),we(qo,t),we(xn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=md(e,t)}Ie(xn),we(xn,e)}function ps(){Ie(xn),Ie(qo),Ie(Ho)}function I_(t){si(Ho.current);var e=si(xn.current),n=md(e,t.type);e!==n&&(we(qo,t),we(xn,n))}function sf(t){qo.current===t&&(Ie(xn),Ie(qo))}var Ce=Hr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function of(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var pl=Xn.ReactCurrentDispatcher,Mc=Xn.ReactCurrentBatchConfig,pi=0,be=null,$e=null,Xe=null,Kl=!1,To=!1,Wo=0,EI=0;function dt(){throw Error(U(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function lf(t,e,n,r,i,s){if(pi=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?xI:AI,t=n(r,i),To){s=0;do{if(To=!1,Wo=0,25<=s)throw Error(U(301));s+=1,Xe=$e=null,e.updateQueue=null,pl.current=CI,t=n(r,i)}while(To)}if(pl.current=Ql,e=$e!==null&&$e.next!==null,pi=0,Xe=$e=be=null,Kl=!1,e)throw Error(U(300));return t}function uf(){var t=Wo!==0;return Wo=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?be.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Jt(){if($e===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Xe===null?be.memoizedState:Xe.next;if(e!==null)Xe=e,$e=t;else{if(t===null)throw Error(U(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Xe===null?be.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Go(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var p=c.lane;if((pi&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,be.lanes|=p,mi|=p}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function x_(){}function A_(t,e){var n=be,r=Jt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,cf(b_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Ko(9,k_.bind(null,n,r,i,e),void 0,null),et===null)throw Error(U(349));pi&30||C_(n,e,i)}return i}function C_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k_(t,e,n,r){e.value=n,e.getSnapshot=r,R_(e)&&P_(t)}function b_(t,e,n){return n(function(){R_(e)&&P_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function P_(t){var e=Wn(t,1);e!==null&&un(e,t,1,-1)}function Qm(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=II.bind(null,be,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N_(){return Jt().memoizedState}function ml(t,e,n,r){var i=En();be.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&af(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}be.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function Ym(t,e){return ml(8390656,8,t,e)}function cf(t,e){return bu(2048,8,t,e)}function D_(t,e){return bu(4,2,t,e)}function O_(t,e){return bu(4,4,t,e)}function L_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j_(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,L_.bind(null,e,t),n)}function df(){}function M_(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function F_(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return pi&21?(hn(n,e)||(n=qv(),be.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function SI(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Mc.transition;Mc.transition={};try{t(!1),e()}finally{ge=n,Mc.transition=r}}function U_(){return Jt().memoizedState}function TI(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))z_(e,n);else if(n=S_(t,e,n,r),n!==null){var i=St();un(n,t,r,i),$_(n,e,r)}}function II(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))z_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(i.next=i,tf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=S_(t,e,i,r),n!==null&&(i=St(),un(n,t,r,i),$_(n,e,r))}}function B_(t){var e=t.alternate;return t===be||e!==null&&e===be}function z_(t,e){To=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bh(t,n)}}var Ql={readContext:Yt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},xI={readContext:Yt,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,L_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TI.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:df,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=SI.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=En();if(Ae){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),et===null)throw Error(U(349));pi&30||C_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ym(b_.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,k_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=et.identifierPrefix;if(Ae){var n=Vn,r=Fn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AI={readContext:Yt,useCallback:M_,useContext:Yt,useEffect:cf,useImperativeHandle:j_,useInsertionEffect:D_,useLayoutEffect:O_,useMemo:F_,useReducer:Fc,useRef:N_,useState:function(){return Fc(Go)},useDebugValue:df,useDeferredValue:function(t){var e=Jt();return V_(e,$e.memoizedState,t)},useTransition:function(){var t=Fc(Go)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:A_,useId:U_,unstable_isNewReconciler:!1},CI={readContext:Yt,useCallback:M_,useContext:Yt,useEffect:cf,useImperativeHandle:j_,useInsertionEffect:D_,useLayoutEffect:O_,useMemo:F_,useReducer:Vc,useRef:N_,useState:function(){return Vc(Go)},useDebugValue:df,useDeferredValue:function(t){var e=Jt();return $e===null?e.memoizedState=t:V_(e,$e.memoizedState,t)},useTransition:function(){var t=Vc(Go)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:A_,useId:U_,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ru={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=kr(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(un(e,t,i,r),fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=kr(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(un(e,t,i,r),fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=kr(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(un(e,t,r,n),fl(e,t,r))}};function Jm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(i,s):!0}function q_(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Rt(e)?hi:yt.current,r=e.contextTypes,s=(r=r!=null)?ds(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ru.enqueueReplaceState(e,e.state,null)}function Md(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Rt(e)?hi:yt.current,i.context=ds(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ru.enqueueReplaceState(i,i.state,null),Wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",r=e;do n+=tT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kI=typeof WeakMap=="function"?WeakMap:Map;function H_(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,Kd=r),Fd(t,e)},n}function W_(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fd(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zI.bind(null,t,e,n),e.then(t,t))}function eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var bI=Xn.ReactCurrentOwner,kt=!1;function Et(t,e,n,r){e.child=t===null?E_(e,null,n,r):fs(e,t.child,n,r)}function ng(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=lf(t,e,n,r,s,i),n=uf(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ae&&n&&Qh(e),e.flags|=1,Et(t,e,r,i),e.child)}function rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,G_(t,e,s,r,i)):(t=_l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function G_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Uo(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Vd(t,e,n,r,i)}function K_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Xi,Lt),Lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Xi,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Xi,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Xi,Lt),Lt|=r;return Et(t,e,i,n),e.child}function Q_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vd(t,e,n,r,i){var s=Rt(n)?hi:yt.current;return s=ds(e,s),rs(e,i),n=lf(t,e,n,r,s,i),r=uf(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ae&&r&&Qh(e),e.flags|=1,Et(t,e,n,i),e.child)}function ig(t,e,n,r,i){if(Rt(n)){var s=!0;Bl(e)}else s=!1;if(rs(e,i),e.stateNode===null)gl(t,e),q_(e,n,r),Md(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=Rt(n)?hi:yt.current,c=ds(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Xm(e,o,r,c),fr=!1;var E=e.memoizedState;o.state=E,Wl(e,r,o,i),u=e.memoizedState,l!==r||E!==u||bt.current||fr?(typeof p=="function"&&(jd(e,n,p,r),u=e.memoizedState),(l=fr||Jm(e,n,l,r,E,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,T_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:tn(e.type,l),o.props=c,m=e.pendingProps,E=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=Rt(n)?hi:yt.current,u=ds(e,u));var I=n.getDerivedStateFromProps;(p=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||E!==u)&&Xm(e,o,r,u),fr=!1,E=e.memoizedState,o.state=E,Wl(e,r,o,i);var R=e.memoizedState;l!==m||E!==R||bt.current||fr?(typeof I=="function"&&(jd(e,n,I,r),R=e.memoizedState),(c=fr||Jm(e,n,c,r,E,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return Ud(t,e,n,r,s,i)}function Ud(t,e,n,r,i,s){Q_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),Gn(t,e,s);r=e.stateNode,bI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,l,s)):Et(t,e,l,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function Y_(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),rf(t,e.containerInfo)}function sg(t,e,n,r,i){return hs(),Jh(i),e.flags|=256,Et(t,e,n,r),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Ce,i&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Du(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zd(n),e.memoizedState=Bd,t):hf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return RI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=br(l,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bd,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hf(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,r){return r!==null&&Jh(r),fs(e,t.child,null,n),t=hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uc(Error(U(422))),Qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Du({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=zd(o),e.memoizedState=Bd,s);if(!(e.mode&1))return Qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Uc(s,r,void 0),Qa(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),un(r,t,i,-1))}return vf(),r=Uc(Error(U(421))),Qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$I.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=xr(i.nextSibling),Mt=e,Ae=!0,rn=null,t!==null&&($t[qt++]=Fn,$t[qt++]=Vn,$t[qt++]=fi,Fn=t.id,Vn=t.overflow,fi=e),e=hf(e,r.children),e.flags|=4096,e)}function og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ld(t.return,e,n)}function Bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,n,e);else if(t.tag===19)og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PI(t,e,n){switch(e.tag){case 3:Y_(e),hs();break;case 5:I_(e);break;case 1:Rt(e.type)&&Bl(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(ql,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(we(Ce,Ce.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);we(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return X_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,K_(t,e,n)}return Gn(t,e,n)}var Z_,$d,ew,tw;Z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};ew=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(xn.current);var s=null;switch(n){case"input":i=dd(t,i),r=dd(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=pd(t,i),r=pd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vl)}gd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Do.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Do.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};tw=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NI(t,e,n){var r=e.pendingProps;switch(Yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Rt(e.type)&&Ul(),ht(e),null;case 3:return r=e.stateNode,ps(),Ie(bt),Ie(yt),of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Jd(rn),rn=null))),$d(t,e),ht(e),null;case 5:sf(e);var i=si(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)ew(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return ht(e),null}if(t=si(xn.current),Ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[$o]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)Se(fo[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":mm(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":ym(r,s),Se("invalid",r)}gd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,l,t),i=["children",""+l]):Do.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Fa(r),gm(r,s,!0);break;case"textarea":Fa(r),vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[$o]=r,Z_(t,e,!1,!1),e.stateNode=t;e:{switch(o=yd(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)Se(fo[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":mm(t,r),i=dd(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Se("invalid",t);break;case"textarea":ym(t,r),i=pd(t,r),Se("invalid",t);break;default:i=r}gd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Nv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oo(t,u):typeof u=="number"&&Oo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Do.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Lh(t,s,u,o))}switch(n){case"input":Fa(t),gm(t,r,!1);break;case"textarea":Fa(t),vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)tw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=si(Ho.current),si(xn.current),Ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return ht(e),null;case 13:if(Ie(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&jt!==null&&e.mode&1&&!(e.flags&128))__(),hs(),e.flags|=98560,s=!1;else if(s=Ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Tn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else rn!==null&&(Jd(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?He===0&&(He=3):vf())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return ps(),$d(t,e),t===null&&Bo(e.stateNode.containerInfo),ht(e),null;case 10:return ef(e.type._context),ht(e),null;case 17:return Rt(e.type)&&Ul(),ht(e),null;case 19:if(Ie(Ce),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>gs&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return ht(e),null}else 2*je()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=Ce.current,we(Ce,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function DI(t,e){switch(Yh(e),e.tag){case 1:return Rt(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),Ie(bt),Ie(yt),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(Ie(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ce),null;case 4:return ps(),null;case 10:return ef(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Ya=!1,mt=!1,OI=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function qd(t,e,n){try{n()}catch(r){De(t,e,r)}}var ag=!1;function LI(t,e){if(Cd=jl,t=o_(),Kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,E=null;t:for(;;){for(var I;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)E=m,m=I;for(;;){if(m===t)break t;if(E===n&&++c===i&&(l=o),E===s&&++p===r&&(u=o),(I=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kd={focusedElem:t,selectionRange:n},jl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var b=R.memoizedProps,k=R.memoizedState,A=e.stateNode,g=A.getSnapshotBeforeUpdate(e.elementType===e.type?b:tn(e.type,b),k);A.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(P){De(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=ag,ag=!1,R}function Io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qd(e,n,s)}i=i.next}while(i!==r)}}function Pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function nw(t){var e=t.alternate;e!==null&&(t.alternate=null,nw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[$o],delete e[Pd],delete e[yI],delete e[vI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rw(t){return t.tag===5||t.tag===3||t.tag===4}function lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}function Gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var rt=null,nn=!1;function cr(t,e,n){for(n=n.child;n!==null;)iw(t,e,n),n=n.sibling}function iw(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:mt||Ji(n,e);case 6:var r=rt,i=nn;rt=null,cr(t,e,n),rt=r,nn=i,rt!==null&&(nn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(nn?(t=rt,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),Fo(t)):Oc(rt,n.stateNode));break;case 4:r=rt,i=nn,rt=n.stateNode.containerInfo,nn=!0,cr(t,e,n),rt=r,nn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qd(n,e,o),i=i.next}while(i!==r)}cr(t,e,n);break;case 1:if(!mt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,cr(t,e,n),mt=r):cr(t,e,n);break;default:cr(t,e,n)}}function ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OI),e.forEach(function(r){var i=qI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,nn=!1;break e;case 3:rt=l.stateNode.containerInfo,nn=!0;break e;case 4:rt=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(rt===null)throw Error(U(160));iw(s,o,i),rt=null,nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sw(e,t),e=e.sibling}function sw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),_n(t),r&4){try{Io(3,t,t.return),Pu(3,t)}catch(b){De(t,t.return,b)}try{Io(5,t,t.return)}catch(b){De(t,t.return,b)}}break;case 1:en(e,t),_n(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(en(e,t),_n(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Oo(i,"")}catch(b){De(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Cv(i,s),yd(l,o);var c=yd(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Nv(i,m):p==="dangerouslySetInnerHTML"?Rv(i,m):p==="children"?Oo(i,m):Lh(i,p,m,c)}switch(l){case"input":hd(i,s);break;case"textarea":kv(i,s);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Zi(i,!!s.multiple,I,!1):E!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[$o]=s}catch(b){De(t,t.return,b)}}break;case 6:if(en(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){De(t,t.return,b)}}break;case 3:if(en(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(b){De(t,t.return,b)}break;case 4:en(e,t),_n(t);break;case 13:en(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mf=je())),r&4&&ug(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||p,en(e,t),mt=c):en(e,t),_n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(m=H=p;H!==null;){switch(E=H,I=E.child,E.tag){case 0:case 11:case 14:case 15:Io(4,E,E.return);break;case 1:Ji(E,E.return);var R=E.stateNode;if(typeof R.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(b){De(r,n,b)}}break;case 5:Ji(E,E.return);break;case 22:if(E.memoizedState!==null){dg(m);continue}}I!==null?(I.return=E,H=I):dg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Pv("display",o))}catch(b){De(t,t.return,b)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(b){De(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:en(e,t),_n(t),r&4&&ug(t);break;case 21:break;default:en(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rw(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oo(i,""),r.flags&=-33);var s=lg(t);Gd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lg(t);Wd(t,l,o);break;default:throw Error(U(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jI(t,e,n){H=t,ow(t)}function ow(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ya;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||mt;l=Ya;var c=mt;if(Ya=o,(mt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?hg(i):u!==null?(u.return=o,H=u):hg(i);for(;s!==null;)H=s,ow(s),s=s.sibling;H=i,Ya=l,mt=c}cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):cg(t)}}function cg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Km(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Fo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}mt||e.flags&512&&Hd(e)}catch(E){De(e,e.return,E)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function dg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function hg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Hd(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Hd(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var MI=Math.ceil,Yl=Xn.ReactCurrentDispatcher,ff=Xn.ReactCurrentOwner,Kt=Xn.ReactCurrentBatchConfig,ue=0,et=null,Ve=null,ot=0,Lt=0,Xi=Hr(0),He=0,Qo=null,mi=0,Nu=0,pf=0,xo=null,Ct=null,mf=0,gs=1/0,On=null,Jl=!1,Kd=null,Cr=null,Ja=!1,_r=null,Xl=0,Ao=0,Qd=null,yl=-1,vl=0;function St(){return ue&6?je():yl!==-1?yl:yl=je()}function kr(t){return t.mode&1?ue&2&&ot!==0?ot&-ot:wI.transition!==null?(vl===0&&(vl=qv()),vl):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Jv(t.type)),t):1}function un(t,e,n,r){if(50<Ao)throw Ao=0,Qd=null,Error(U(185));ca(t,n,r),(!(ue&2)||t!==et)&&(t===et&&(!(ue&2)&&(Nu|=n),He===4&&mr(t,ot)),Pt(t,r),n===1&&ue===0&&!(e.mode&1)&&(gs=je()+500,ku&&Wr()))}function Pt(t,e){var n=t.callbackNode;wT(t,e);var r=Ll(t,t===et?ot:0);if(r===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?_I(fg.bind(null,t)):g_(fg.bind(null,t)),mI(function(){!(ue&6)&&Wr()}),n=null;else{switch(Hv(r)){case 1:n=Uh;break;case 4:n=zv;break;case 16:n=Ol;break;case 536870912:n=$v;break;default:n=Ol}n=pw(n,aw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function aw(t,e){if(yl=-1,vl=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=Ll(t,t===et?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var i=ue;ue|=2;var s=uw();(et!==t||ot!==e)&&(On=null,gs=je()+500,li(t,e));do try{UI();break}catch(l){lw(t,l)}while(!0);Zh(),Yl.current=s,ue=i,Ve!==null?e=0:(et=null,ot=0,e=He)}if(e!==0){if(e===2&&(i=Sd(t),i!==0&&(r=i,e=Yd(t,i))),e===1)throw n=Qo,li(t,0),mr(t,r),Pt(t,je()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FI(i)&&(e=Zl(t,r),e===2&&(s=Sd(t),s!==0&&(r=s,e=Yd(t,s))),e===1))throw n=Qo,li(t,0),mr(t,r),Pt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:ti(t,Ct,On);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=mf+500-je(),10<e)){if(Ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rd(ti.bind(null,t,Ct,On),e);break}ti(t,Ct,On);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MI(r/1960))-r,10<r){t.timeoutHandle=Rd(ti.bind(null,t,Ct,On),r);break}ti(t,Ct,On);break;case 5:ti(t,Ct,On);break;default:throw Error(U(329))}}}return Pt(t,je()),t.callbackNode===n?aw.bind(null,t):null}function Yd(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Jd(e)),t}function Jd(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function FI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~pf,e&=~Nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function fg(t){if(ue&6)throw Error(U(327));is();var e=Ll(t,0);if(!(e&1))return Pt(t,je()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=Sd(t);r!==0&&(e=r,n=Yd(t,r))}if(n===1)throw n=Qo,li(t,0),mr(t,e),Pt(t,je()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,Ct,On),Pt(t,je()),null}function gf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(gs=je()+500,ku&&Wr())}}function gi(t){_r!==null&&_r.tag===0&&!(ue&6)&&is();var e=ue;ue|=1;var n=Kt.transition,r=ge;try{if(Kt.transition=null,ge=1,t)return t()}finally{ge=r,Kt.transition=n,ue=e,!(ue&6)&&Wr()}}function yf(){Lt=Xi.current,Ie(Xi)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pI(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ul();break;case 3:ps(),Ie(bt),Ie(yt),of();break;case 5:sf(r);break;case 4:ps();break;case 13:Ie(Ce);break;case 19:Ie(Ce);break;case 10:ef(r.type._context);break;case 22:case 23:yf()}n=n.return}if(et=t,Ve=t=br(t.current,null),ot=Lt=e,He=0,Qo=null,pf=Nu=mi=0,Ct=xo=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function lw(t,e){do{var n=Ve;try{if(Zh(),pl.current=Ql,Kl){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kl=!1}if(pi=0,Xe=$e=be=null,To=!1,Wo=0,ff.current=null,n===null||n.return===null){He=1,Qo=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var E=p.alternate;E?(p.updateQueue=E.updateQueue,p.memoizedState=E.memoizedState,p.lanes=E.lanes):(p.updateQueue=null,p.memoizedState=null)}var I=eg(o);if(I!==null){I.flags&=-257,tg(I,o,l,s,e),I.mode&1&&Zm(s,c,e),e=I,u=c;var R=e.updateQueue;if(R===null){var b=new Set;b.add(u),e.updateQueue=b}else R.add(u);break e}else{if(!(e&1)){Zm(s,c,e),vf();break e}u=Error(U(426))}}else if(Ae&&l.mode&1){var k=eg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),tg(k,o,l,s,e),Jh(ms(u,l));break e}}s=u=ms(u,l),He!==4&&(He=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=H_(s,u,e);Gm(s,A);break e;case 1:l=u;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=W_(s,l,e);Gm(s,P);break e}}s=s.return}while(s!==null)}dw(n)}catch(D){e=D,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function uw(){var t=Yl.current;return Yl.current=Ql,t===null?Ql:t}function vf(){(He===0||He===3||He===2)&&(He=4),et===null||!(mi&268435455)&&!(Nu&268435455)||mr(et,ot)}function Zl(t,e){var n=ue;ue|=2;var r=uw();(et!==t||ot!==e)&&(On=null,li(t,e));do try{VI();break}catch(i){lw(t,i)}while(!0);if(Zh(),ue=n,Yl.current=r,Ve!==null)throw Error(U(261));return et=null,ot=0,He}function VI(){for(;Ve!==null;)cw(Ve)}function UI(){for(;Ve!==null&&!dT();)cw(Ve)}function cw(t){var e=fw(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?dw(t):Ve=e,ff.current=null}function dw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DI(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Ve=null;return}}else if(n=NI(n,e,Lt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);He===0&&(He=5)}function ti(t,e,n){var r=ge,i=Kt.transition;try{Kt.transition=null,ge=1,BI(t,e,n,r)}finally{Kt.transition=i,ge=r}return null}function BI(t,e,n,r){do is();while(_r!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ET(t,s),t===et&&(Ve=et=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,pw(Ol,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=ge;ge=1;var l=ue;ue|=4,ff.current=null,LI(t,n),sw(n,t),aI(kd),jl=!!Cd,kd=Cd=null,t.current=n,jI(n),hT(),ue=l,ge=o,Kt.transition=s}else t.current=n;if(Ja&&(Ja=!1,_r=t,Xl=i),s=t.pendingLanes,s===0&&(Cr=null),mT(n.stateNode),Pt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=Kd,Kd=null,t;return Xl&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===Qd?Ao++:(Ao=0,Qd=t):Ao=0,Wr(),null}function is(){if(_r!==null){var t=Hv(Xl),e=Kt.transition,n=ge;try{if(Kt.transition=null,ge=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Xl=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Io(8,p,s)}var m=p.child;if(m!==null)m.return=p,H=m;else for(;H!==null;){p=H;var E=p.sibling,I=p.return;if(nw(p),p===c){H=null;break}if(E!==null){E.return=I,H=E;break}H=I}}}var R=s.alternate;if(R!==null){var b=R.child;if(b!==null){R.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,H=A;break e}H=s.return}}var g=t.current;for(H=g;H!==null;){o=H;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,H=v;else e:for(o=g;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pu(9,l)}}catch(D){De(l,l.return,D)}if(l===o){H=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,H=P;break e}H=l.return}}if(ue=i,Wr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Tu,t)}catch{}r=!0}return r}finally{ge=n,Kt.transition=e}}return!1}function pg(t,e,n){e=ms(n,e),e=H_(t,e,1),t=Ar(t,e,1),e=St(),t!==null&&(ca(t,1,e),Pt(t,e))}function De(t,e,n){if(t.tag===3)pg(t,t,n);else for(;e!==null;){if(e.tag===3){pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=ms(n,t),t=W_(e,t,1),e=Ar(e,t,1),t=St(),e!==null&&(ca(e,1,t),Pt(e,t));break}}e=e.return}}function zI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ot&n)===n&&(He===4||He===3&&(ot&130023424)===ot&&500>je()-mf?li(t,0):pf|=n),Pt(t,e)}function hw(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=St();t=Wn(t,e),t!==null&&(ca(t,e,n),Pt(t,n))}function $I(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hw(t,n)}function qI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),hw(t,n)}var fw;fw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,PI(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Ae&&e.flags&1048576&&y_(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gl(t,e),t=e.pendingProps;var i=ds(e,yt.current);rs(e,n),i=lf(null,e,r,t,i,n);var s=uf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,Bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nf(e),i.updater=Ru,e.stateNode=i,i._reactInternals=e,Md(e,r,t,n),e=Ud(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Qh(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WI(r),t=tn(r,t),i){case 0:e=Vd(null,e,r,t,n);break e;case 1:e=ig(null,e,r,t,n);break e;case 11:e=ng(null,e,r,t,n);break e;case 14:e=rg(null,e,r,tn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Vd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),ig(t,e,r,i,n);case 3:e:{if(Y_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,T_(t,e),Wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(U(423)),e),e=sg(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(U(424)),e),e=sg(t,e,r,n,i);break e}else for(jt=xr(e.stateNode.containerInfo.firstChild),Mt=e,Ae=!0,rn=null,n=E_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=Gn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return I_(e),t===null&&Od(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bd(r,i)?o=null:s!==null&&bd(r,s)&&(e.flags|=32),Q_(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Od(e),null;case 13:return J_(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),ng(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(ql,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!bt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ld(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=Yt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),rg(t,e,r,i,n);case 15:return G_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),gl(t,e),e.tag=1,Rt(r)?(t=!0,Bl(e)):t=!1,rs(e,n),q_(e,r,i),Md(e,r,i,n),Ud(null,e,r,!0,t,n);case 19:return X_(t,e,n);case 22:return K_(t,e,n)}throw Error(U(156,e.tag))};function pw(t,e){return Bv(t,e)}function HI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new HI(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WI(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mh)return 11;if(t===Fh)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return ui(n.children,i,s,e);case jh:o=8,i|=8;break;case ad:return t=Gt(12,n,e,i|2),t.elementType=ad,t.lanes=s,t;case ld:return t=Gt(13,n,e,i),t.elementType=ld,t.lanes=s,t;case ud:return t=Gt(19,n,e,i),t.elementType=ud,t.lanes=s,t;case Iv:return Du(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sv:o=10;break e;case Tv:o=9;break e;case Mh:o=11;break e;case Fh:o=14;break e;case hr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=Iv,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,r,i,s,o,l,u){return t=new GI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function KI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function mw(t){if(!t)return Mr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Rt(n))return m_(t,n,e)}return e}function gw(t,e,n,r,i,s,o,l,u){return t=wf(n,r,!0,t,i,s,o,l,u),t.context=mw(null),n=t.current,r=St(),i=kr(n),s=zn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,ca(t,i,r),Pt(t,r),t}function Ou(t,e,n,r){var i=e.current,s=St(),o=kr(i);return n=mw(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(un(t,i,o,s),fl(t,i,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){mg(t,e),(t=t.alternate)&&mg(t,e)}function QI(){return null}var yw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sf(t){this._internalRoot=t}Lu.prototype.render=Sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Ou(t,e,null,null)};Lu.prototype.unmount=Sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){Ou(null,t,null,null)}),e[Hn]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&Yv(t)}};function Tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gg(){}function YI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=eu(o);s.call(c)}}var o=gw(e,r,t,0,null,!1,!1,"",gg);return t._reactRootContainer=o,t[Hn]=o.current,Bo(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=eu(u);l.call(c)}}var u=wf(t,0,!1,null,null,!1,!1,"",gg);return t._reactRootContainer=u,t[Hn]=u.current,Bo(t.nodeType===8?t.parentNode:t),gi(function(){Ou(e,u,n,r)}),u}function Mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=eu(o);l.call(u)}}Ou(e,o,t,i)}else o=YI(n,e,t,i,r);return eu(o)}Wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(Bh(e,n|1),Pt(e,je()),!(ue&6)&&(gs=je()+500,Wr()))}break;case 13:gi(function(){var r=Wn(t,1);if(r!==null){var i=St();un(r,t,1,i)}}),Ef(t,1)}};zh=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=St();un(e,t,134217728,n)}Ef(t,134217728)}};Gv=function(t){if(t.tag===13){var e=kr(t),n=Wn(t,e);if(n!==null){var r=St();un(n,t,e,r)}Ef(t,e)}};Kv=function(){return ge};Qv=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};_d=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cu(r);if(!i)throw Error(U(90));Av(r),hd(r,i)}}}break;case"textarea":kv(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};Lv=gf;jv=gi;var JI={usingClientEntryPoint:!1,Events:[ha,Wi,Cu,Dv,Ov,gf]},oo={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XI={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vv(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||QI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Tu=Xa.inject(XI),In=Xa}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(e))throw Error(U(200));return KI(t,e,null,n)};Vt.createRoot=function(t,e){if(!Tf(t))throw Error(U(299));var n=!1,r="",i=yw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Sf(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Vv(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return gi(t)};Vt.hydrate=function(t,e,n){if(!ju(e))throw Error(U(200));return Mu(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Tf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=yw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=gw(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lu(e)};Vt.render=function(t,e,n){if(!ju(e))throw Error(U(200));return Mu(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!ju(t))throw Error(U(40));return t._reactRootContainer?(gi(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Vt.unstable_batchedUpdates=gf;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ju(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Mu(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function vw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vw)}catch(t){console.error(t)}}vw(),vv.exports=Vt;var ZI=vv.exports,yg=ZI;sd.createRoot=yg.createRoot,sd.hydrateRoot=yg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const vg="popstate";function ex(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Xd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tu(i)}return nx(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function If(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tx(){return Math.random().toString(36).substr(2,8)}function _g(t,e){return{usr:t.state,key:t.key,idx:e}}function Xd(t,e,n,r){return n===void 0&&(n=null),Yo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cs(e):e,{state:n,key:e&&e.key||r||tx()})}function tu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function nx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=wr.Pop,u=null,c=p();c==null&&(c=0,o.replaceState(Yo({},o.state,{idx:c}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=wr.Pop;let k=p(),A=k==null?null:k-c;c=k,u&&u({action:l,location:b.location,delta:A})}function E(k,A){l=wr.Push;let g=Xd(b.location,k,A);c=p()+1;let v=_g(g,c),P=b.createHref(g);try{o.pushState(v,"",P)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(P)}s&&u&&u({action:l,location:b.location,delta:1})}function I(k,A){l=wr.Replace;let g=Xd(b.location,k,A);c=p();let v=_g(g,c),P=b.createHref(g);o.replaceState(v,"",P),s&&u&&u({action:l,location:b.location,delta:0})}function R(k){let A=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof k=="string"?k:tu(k);return g=g.replace(/ $/,"%20"),Me(A,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,A)}let b={get action(){return l},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(vg,m),u=k,()=>{i.removeEventListener(vg,m),u=null}},createHref(k){return e(i,k)},createURL:R,encodeLocation(k){let A=R(k);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:E,replace:I,go(k){return o.go(k)}};return b}var wg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wg||(wg={}));function rx(t,e,n){return n===void 0&&(n="/"),ix(t,e,n)}function ix(t,e,n,r){let i=typeof e=="string"?Cs(e):e,s=xf(i.pathname||"/",n);if(s==null)return null;let o=_w(t);sx(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=yx(s);l=px(o[u],c)}return l}function _w(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Me(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Rr([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_w(s.children,e,p,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:hx(c,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of ww(s.path))i(s,o,u)}),e}function ww(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ww(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function sx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ox=/^:[\w-]+$/,ax=3,lx=2,ux=1,cx=10,dx=-2,Eg=t=>t==="*";function hx(t,e){let n=t.split("/"),r=n.length;return n.some(Eg)&&(r+=dx),e&&(r+=lx),n.filter(i=>!Eg(i)).reduce((i,s)=>i+(ox.test(s)?ax:s===""?ux:cx),r)}function fx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function px(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",m=mx({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),E=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Rr([s,m.pathname]),pathnameBase:Sx(Rr([s,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(s=Rr([s,m.pathnameBase]))}return o}function mx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,p,m)=>{let{paramName:E,isOptional:I}=p;if(E==="*"){let b=l[m]||"";o=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const R=l[m];return I&&!R?c[E]=void 0:c[E]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function gx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),If(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function yx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return If(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_x=t=>vx.test(t);function wx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cs(t):t,s;if(n)if(_x(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),If(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Sg(n.substring(1),"/"):s=Sg(n,e)}else s=e;return{pathname:s,search:Tx(r),hash:Ix(i)}}function Sg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ex(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Af(t,e){let n=Ex(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cs(t):(i=Yo({},t),Me(!i.pathname||!i.pathname.includes("?"),qc("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),qc("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),qc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let E=o.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}l=m>=0?e[m]:"/"}let u=wx(i,l),c=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),Sx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Tx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ix=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ew=["post","put","patch","delete"];new Set(Ew);const Ax=["get",...Ew];new Set(Ax);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}const kf=M.createContext(null),Cx=M.createContext(null),Gr=M.createContext(null),Fu=M.createContext(null),Zn=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Sw=M.createContext(null);function kx(t,e){let{relative:n}=e===void 0?{}:e;ks()||Me(!1);let{basename:r,navigator:i}=M.useContext(Gr),{hash:s,pathname:o,search:l}=Iw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Rr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ks(){return M.useContext(Fu)!=null}function bs(){return ks()||Me(!1),M.useContext(Fu).location}function Tw(t){M.useContext(Gr).static||M.useLayoutEffect(t)}function Vu(){let{isDataRoute:t}=M.useContext(Zn);return t?Bx():bx()}function bx(){ks()||Me(!1);let t=M.useContext(kf),{basename:e,future:n,navigator:r}=M.useContext(Gr),{matches:i}=M.useContext(Zn),{pathname:s}=bs(),o=JSON.stringify(Af(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return Tw(()=>{l.current=!0}),M.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Cf(c,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Rr([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,s,t])}function Uu(){let{matches:t}=M.useContext(Zn),e=t[t.length-1];return e?e.params:{}}function Iw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Gr),{matches:i}=M.useContext(Zn),{pathname:s}=bs(),o=JSON.stringify(Af(i,r.v7_relativeSplatPath));return M.useMemo(()=>Cf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Rx(t,e){return Px(t,e)}function Px(t,e,n,r){ks()||Me(!1);let{navigator:i}=M.useContext(Gr),{matches:s}=M.useContext(Zn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=bs(),p;if(e){var m;let k=typeof e=="string"?Cs(e):e;u==="/"||(m=k.pathname)!=null&&m.startsWith(u)||Me(!1),p=k}else p=c;let E=p.pathname||"/",I=E;if(u!=="/"){let k=u.replace(/^\//,"").split("/");I="/"+E.replace(/^\//,"").split("/").slice(k.length).join("/")}let R=rx(t,{pathname:I}),b=jx(R&&R.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Rr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Rr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&b?M.createElement(Fu.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:wr.Pop}},b):b}function Nx(){let t=Ux(),e=xx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const Dx=M.createElement(Nx,null);class Ox extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Zn.Provider,{value:this.props.routeContext},M.createElement(Sw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lx(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(kf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Zn.Provider,{value:e},r)}function jx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||Me(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:E,errors:I}=n,R=m.route.loader&&E[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((p,m,E)=>{let I,R=!1,b=null,k=null;n&&(I=l&&m.route.id?l[m.route.id]:void 0,b=m.route.errorElement||Dx,u&&(c<0&&E===0?(zx("route-fallback"),R=!0,k=null):c===E&&(R=!0,k=m.route.hydrateFallbackElement||null)));let A=e.concat(o.slice(0,E+1)),g=()=>{let v;return I?v=b:R?v=k:m.route.Component?v=M.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=p,M.createElement(Lx,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:n!=null},children:v})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?M.createElement(Ox,{location:n.location,revalidation:n.revalidation,component:b,error:I,children:g(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):g()},null)}var xw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xw||{}),Aw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Aw||{});function Mx(t){let e=M.useContext(kf);return e||Me(!1),e}function Fx(t){let e=M.useContext(Cx);return e||Me(!1),e}function Vx(t){let e=M.useContext(Zn);return e||Me(!1),e}function Cw(t){let e=Vx(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function Ux(){var t;let e=M.useContext(Sw),n=Fx(),r=Cw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Bx(){let{router:t}=Mx(xw.UseNavigateStable),e=Cw(Aw.UseNavigateStable),n=M.useRef(!1);return Tw(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Jo({fromRouteId:e},s)))},[t,e])}const Tg={};function zx(t,e,n){Tg[t]||(Tg[t]=!0)}function $x(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function kw(t){let{to:e,replace:n,state:r,relative:i}=t;ks()||Me(!1);let{future:s,static:o}=M.useContext(Gr),{matches:l}=M.useContext(Zn),{pathname:u}=bs(),c=Vu(),p=Cf(e,Af(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(p);return M.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function wt(t){Me(!1)}function qx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1,future:l}=t;ks()&&Me(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:Jo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Cs(r));let{pathname:p="/",search:m="",hash:E="",state:I=null,key:R="default"}=r,b=M.useMemo(()=>{let k=xf(p,u);return k==null?null:{location:{pathname:k,search:m,hash:E,state:I,key:R},navigationType:i}},[u,p,m,E,I,R,i]);return b==null?null:M.createElement(Gr.Provider,{value:c},M.createElement(Fu.Provider,{children:n,value:b}))}function Ig(t){let{children:e,location:n}=t;return Rx(Zd(e),n)}new Promise(()=>{});function Zd(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Zd(r.props.children,s));return}r.type!==wt&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eh(){return eh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eh.apply(this,arguments)}function Hx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Wx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Gx(t,e){return t.button===0&&(!e||e==="_self")&&!Wx(t)}const Kx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Qx="6";try{window.__reactRouterVersion=Qx}catch{}const Yx="startTransition",xg=zS[Yx];function Jx(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=ex({window:i,v5Compat:!0}));let o=s.current,[l,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},p=M.useCallback(m=>{c&&xg?xg(()=>u(m)):u(m)},[u,c]);return M.useLayoutEffect(()=>o.listen(p),[o,p]),M.useEffect(()=>$x(r),[r]),M.createElement(qx,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Xx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ye=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:p,viewTransition:m}=e,E=Hx(e,Kx),{basename:I}=M.useContext(Gr),R,b=!1;if(typeof c=="string"&&Zx.test(c)&&(R=c,Xx))try{let v=new URL(window.location.href),P=c.startsWith("//")?new URL(v.protocol+c):new URL(c),D=xf(P.pathname,I);P.origin===v.origin&&D!=null?c=D+P.search+P.hash:b=!0}catch{}let k=kx(c,{relative:i}),A=e1(c,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:m});function g(v){r&&r(v),v.defaultPrevented||A(v)}return M.createElement("a",eh({},E,{href:R||k,onClick:b||s?r:g,ref:n,target:u}))});var Ag;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ag||(Ag={}));var Cg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Cg||(Cg={}));function e1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Vu(),c=bs(),p=Iw(t,{relative:o});return M.useCallback(m=>{if(Gx(m,n)){m.preventDefault();let E=r!==void 0?r:tu(c)===tu(p);u(t,{replace:E,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,p,r,i,n,t,s,o,l])}/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=t=>{const e=n1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},i1=M.createContext({}),s1=()=>M.useContext(i1),o1=M.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>{const{size:c=24,strokeWidth:p=2,absoluteStrokeWidth:m=!1,color:E="currentColor",className:I=""}=s1()??{},R=r??m?Number(n??p)*24/Number(e??c):n??p;return M.createElement("svg",{ref:u,...Hc,width:e??c??Hc.width,height:e??c??Hc.height,stroke:t??E,strokeWidth:R,className:bw("lucide",I,i),...!s&&!r1(l)&&{"aria-hidden":"true"},...l},[...o.map(([b,k])=>M.createElement(b,k)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,e)=>{const n=M.forwardRef(({className:r,...i},s)=>M.createElement(o1,{ref:s,iconNode:e,className:bw(`lucide-${t1(kg(t))}`,`lucide-${t}`,r),...i}));return n.displayName=kg(t),n};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],l1=tt("bot",a1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],c1=tt("camera",u1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],h1=tt("check",d1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],p1=tt("circle-check",f1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],g1=tt("copy",m1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],v1=tt("file-code-corner",y1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],bg=tt("file-text",_1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],E1=tt("flame",w1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],T1=tt("graduation-cap",S1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],x1=tt("house",I1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],C1=tt("library",A1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],b1=tt("menu",k1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],P1=tt("play",R1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Rw=tt("search",N1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],O1=tt("triangle-alert",D1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],j1=tt("upload",L1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],F1=tt("user",M1);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],th=tt("x",V1);function U1({children:t}){const e=bs(),[n,r]=M.useState(!1),i=o=>e.pathname===o||o!=="/"&&e.pathname.startsWith(o+"/"),s=(o,l,u)=>h.jsxs(ye,{to:o,className:`sidebar-link ${i(o)?"active":""}`,onClick:()=>r(!1),children:[h.jsx("span",{className:"sidebar-icon",children:l}),h.jsx("span",{className:"sidebar-label",children:u})]});return h.jsxs("div",{className:"layout",children:[h.jsxs("button",{className:"mobile-nav-toggle",onClick:()=>r(o=>!o),children:[h.jsx(b1,{size:20})," ",h.jsx("span",{style:{marginLeft:8},children:"Menu"})]}),h.jsxs("aside",{className:`sidebar ${n?"open":""}`,children:[h.jsxs("div",{className:"sidebar-logo",children:[h.jsx(ye,{to:"/",className:"logo",children:h.jsx("span",{className:"logo-text",style:{color:"#fff"},children:"LearnPlus"})}),h.jsx("button",{className:"mobile-close",onClick:()=>r(!1),children:h.jsx(th,{size:24})})]}),h.jsxs("nav",{className:"sidebar-nav",children:[s("/",h.jsx(x1,{size:20}),"Home"),s("/profile",h.jsx(F1,{size:20}),"My Profile"),s("/courses",h.jsx(C1,{size:20}),"Course Library"),s("/bonus",h.jsx(T1,{size:20}),"Bonus Courses"),s("/playground",h.jsx(P1,{size:20}),"Playground"),s("/snippets",h.jsx(v1,{size:20}),"Code Snippets"),s("/assistant",h.jsx(l1,{size:20}),"Galaxy AI Doubts")]})]}),n&&h.jsx("div",{className:"sidebar-overlay",onClick:()=>r(!1)}),h.jsxs("div",{className:"main-wrapper",children:[h.jsx("main",{className:"main",children:t}),h.jsx("footer",{className:"footer",style:{textAlign:"center",color:"#64748b",fontSize:"0.85rem",padding:"1.5rem",background:"#f8f9fa"},children:"LearnPlus – Comprehensive learning programs & classes."})]})]})}const B1=()=>{};var Rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},z1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let E=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(E=64)),r.push(n[p],n[m],n[E],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):z1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new $1;const E=s<<2|l>>4;if(r.push(E),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q1=function(t){const e=Pw(t);return Nw.encodeByteArray(e,!0)},nu=function(t){return q1(t).replace(/\./g,"")},Dw=function(t){try{return Nw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=()=>H1().__FIREBASE_DEFAULTS__,G1=()=>{if(typeof process>"u"||typeof Rg>"u")return;const t=Rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dw(t[1]);return e&&JSON.parse(e)},Bu=()=>{try{return B1()||W1()||G1()||K1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ow=t=>{var e,n;return(n=(e=Bu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Q1=t=>{const e=Ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lw=()=>{var t;return(t=Bu())==null?void 0:t.config},jw=t=>{var e;return(e=Bu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[nu(JSON.stringify(n)),nu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Z1(){var e;const t=(e=Bu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rA(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iA(){return!Z1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sA(){try{return typeof indexedDB=="object"}catch{return!1}}function oA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aA,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new er(i,l,r)}}function lA(t,e){return t.replace(uA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uA=/\{\$([^}]+)}/g;function cA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pg(s)&&Pg(o)){if(!yi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dA(t,e){const n=new hA(t,e);return n.subscribe.bind(n)}class hA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wc),i.error===void 0&&(i.error=Wc),i.complete===void 0&&(i.complete=Wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mw(t){return(await fetch(t,{credentials:"include"})).ok}class vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Y1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gA(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mA(t){return t===ni?void 0:t}function gA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const vA={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},_A=se.INFO,wA={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},EA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bf{constructor(e){this.name=e,this._logLevel=_A,this._logHandler=EA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const SA=(t,e)=>e.some(n=>t instanceof n);let Ng,Dg;function TA(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IA(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fw=new WeakMap,nh=new WeakMap,Vw=new WeakMap,Gc=new WeakMap,Rf=new WeakMap;function xA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fw.set(n,t)}).catch(()=>{}),Rf.set(e,t),e}function AA(t){if(nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nh.set(t,e)}let rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CA(t){rh=t(rh)}function kA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return Vw.set(r,e.sort?e.sort():[e]),Pr(r)}:IA().includes(t)?function(...e){return t.apply(Kc(this),e),Pr(Fw.get(this))}:function(...e){return Pr(t.apply(Kc(this),e))}}function bA(t){return typeof t=="function"?kA(t):(t instanceof IDBTransaction&&AA(t),SA(t,TA())?new Proxy(t,rh):t)}function Pr(t){if(t instanceof IDBRequest)return xA(t);if(Gc.has(t))return Gc.get(t);const e=bA(t);return e!==t&&(Gc.set(t,e),Rf.set(e,t)),e}const Kc=t=>Rf.get(t);function RA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const PA=["get","getKey","getAll","getAllKeys","count"],NA=["put","add","delete","clear"],Qc=new Map;function Og(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Qc.set(e,s),s}CA(t=>({...t,get:(e,n,r)=>Og(e,n)||t.get(e,n,r),has:(e,n)=>!!Og(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",Lg="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new bf("@firebase/app"),LA="@firebase/app-compat",jA="@firebase/analytics-compat",MA="@firebase/analytics",FA="@firebase/app-check-compat",VA="@firebase/app-check",UA="@firebase/auth",BA="@firebase/auth-compat",zA="@firebase/database",$A="@firebase/data-connect",qA="@firebase/database-compat",HA="@firebase/functions",WA="@firebase/functions-compat",GA="@firebase/installations",KA="@firebase/installations-compat",QA="@firebase/messaging",YA="@firebase/messaging-compat",JA="@firebase/performance",XA="@firebase/performance-compat",ZA="@firebase/remote-config",eC="@firebase/remote-config-compat",tC="@firebase/storage",nC="@firebase/storage-compat",rC="@firebase/firestore",iC="@firebase/ai",sC="@firebase/firestore-compat",oC="firebase",aC="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="[DEFAULT]",lC={[ih]:"fire-core",[LA]:"fire-core-compat",[MA]:"fire-analytics",[jA]:"fire-analytics-compat",[VA]:"fire-app-check",[FA]:"fire-app-check-compat",[UA]:"fire-auth",[BA]:"fire-auth-compat",[zA]:"fire-rtdb",[$A]:"fire-data-connect",[qA]:"fire-rtdb-compat",[HA]:"fire-fn",[WA]:"fire-fn-compat",[GA]:"fire-iid",[KA]:"fire-iid-compat",[QA]:"fire-fcm",[YA]:"fire-fcm-compat",[JA]:"fire-perf",[XA]:"fire-perf-compat",[ZA]:"fire-rc",[eC]:"fire-rc-compat",[tC]:"fire-gcs",[nC]:"fire-gcs-compat",[rC]:"fire-fst",[sC]:"fire-fst-compat",[iC]:"fire-vertex","fire-js":"fire-js",[oC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new Map,uC=new Map,oh=new Map;function jg(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(oh.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,t);for(const n of ru.values())jg(n,t);for(const n of uC.values())jg(n,t);return!0}function Pf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new pa("app","Firebase",cC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=aC;function Uw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:sh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=Lw()),!n)throw Nr.create("no-options");const s=ru.get(i);if(s){if(yi(n,s.options)&&yi(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new yA(i);for(const u of oh.values())o.addComponent(u);const l=new dC(n,r,o);return ru.set(i,l),l}function Bw(t=sh){const e=ru.get(t);if(!e&&t===sh&&Lw())return Uw();if(!e)throw Nr.create("no-app",{appName:t});return e}function Dr(t,e,n){let r=lC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(o.join(" "));return}ys(new vi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="firebase-heartbeat-database",fC=1,Xo="firebase-heartbeat-store";let Yc=null;function zw(){return Yc||(Yc=RA(hC,fC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function pC(t){try{const n=(await zw()).transaction(Xo),r=await n.objectStore(Xo).get($w(t));return await n.done,r}catch(e){if(e instanceof er)Kn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Mg(t,e){try{const r=(await zw()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,$w(t)),await r.done}catch(n){if(n instanceof er)Kn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function $w(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=1024,gC=30;class yC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _C(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>gC){const o=wC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:r,unsentEntries:i}=vC(this._heartbeatsCache.heartbeats),s=nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function vC(t,e=mC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _C{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sA()?oA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vg(t){return nu(JSON.stringify({version:2,heartbeats:t})).length}function wC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){ys(new vi("platform-logger",e=>new DA(e),"PRIVATE")),ys(new vi("heartbeat",e=>new yC(e),"PRIVATE")),Dr(ih,Lg,t),Dr(ih,Lg,"esm2020"),Dr("fire-js","")}EC("");var SC="firebase",TC="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr(SC,TC,"app");function qw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IC=qw,Hw=new pa("auth","Firebase",qw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new bf("@firebase/auth");function xC(t,...e){iu.logLevel<=se.WARN&&iu.warn(`Auth (${Rs}): ${t}`,...e)}function wl(t,...e){iu.logLevel<=se.ERROR&&iu.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,...e){throw Df(t,...e)}function cn(t,...e){return Df(t,...e)}function Nf(t,e,n){const r={...IC(),[e]:n};return new pa("auth","Firebase",r).create(e,{appName:t.name})}function ci(t){return Nf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rn(t,"argument-error"),Nf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hw.create(t,...e)}function J(t,e,...n){if(!t)throw Df(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wl(e),new Error(e)}function Qn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function CC(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||tA()||"connection"in navigator)?navigator.onLine:!0}function bC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=X1()||nA()}get(){return kC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NC=new ya(3e4,6e4);function Lf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ps(t,e,n,r,i={}){return Gw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ma({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return eA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ga(t.emulatorConfig.host)&&(c.credentials="include"),Ww.fetch()(await Kw(t,t.config.apiHost,n,l),c)})}async function Gw(t,e,n){t._canInitEmulator=!1;const r={...RC,...e};try{const i=new OC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Za(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Nf(t,p,c);Rn(t,p)}}catch(i){if(i instanceof er)throw i;Rn(t,"network-request-failed",{message:String(i)})}}async function DC(t,e,n,r,i={}){const s=await Ps(t,e,n,r,i);return"mfaPendingCredential"in s&&Rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Kw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Of(t.config,i):`${t.config.apiScheme}://${i}`;return PC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class OC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),NC.get())})}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function su(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jC(t,e=!1){const n=fn(t),r=await n.getIdToken(e),i=jf(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Co(Jc(i.auth_time)),issuedAtTime:Co(Jc(i.iat)),expirationTime:Co(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function jf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dw(n);return i?JSON.parse(i):(wl("Failed to decode base64 JWT payload"),null)}catch(i){return wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bg(t){const e=jf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&MC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Zo(t,su(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Qw(i.providerUserInfo):[],o=UC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new lh(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function VC(t){const e=fn(t);await ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e){const n=await Gw(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Kw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ga(t.emulatorConfig.host)&&(u.credentials="include"),Ww.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zC(t,e){return Ps(t,"POST","/v2/accounts:revokeToken",Lf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Bg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await BC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new FC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jC(this,e)}reload(){return VC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(ci(this.auth));const e=await this.getIdToken();return await Zo(this,LC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:I,providerData:R,stsTokenManager:b}=n;J(m&&b,e,"internal-error");const k=ss.fromJSON(this.name,b);J(typeof m=="string",e,"internal-error"),dr(r,e.name),dr(i,e.name),J(typeof E=="boolean",e,"internal-error"),J(typeof I=="boolean",e,"internal-error"),dr(s,e.name),dr(o,e.name),dr(l,e.name),dr(u,e.name),dr(c,e.name),dr(p,e.name);const A=new on({uid:m,auth:e,email:i,emailVerified:E,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:k,createdAt:c,lastLoginAt:p});return R&&Array.isArray(R)&&(A.providerData=R.map(g=>({...g}))),u&&(A._redirectEventId=u),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ou(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ss;l.updateFromIdToken(r);const u=new on({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;function Bn(t){Qn(t instanceof Function,"Expected a class definition");let e=zg.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yw.type="NONE";const $g=Yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=El(this.userKey,i.apiKey,s),this.fullPersistenceKey=El("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await su(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Bn($g),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bn($g);const o=El(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){let m;if(typeof p=="string"){const E=await su(e,{idToken:p}).catch(()=>{});if(!E)break;m=await on._fromGetAccountInfoResponse(e,E,p)}else m=on._fromJSON(e,p);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new os(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nE(e))return"Blackberry";if(rE(e))return"Webos";if(Xw(e))return"Safari";if((e.includes("chrome/")||Zw(e))&&!e.includes("edge/"))return"Chrome";if(tE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jw(t=vt()){return/firefox\//i.test(t)}function Xw(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zw(t=vt()){return/crios\//i.test(t)}function eE(t=vt()){return/iemobile/i.test(t)}function tE(t=vt()){return/android/i.test(t)}function nE(t=vt()){return/blackberry/i.test(t)}function rE(t=vt()){return/webos/i.test(t)}function Mf(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $C(t=vt()){var e;return Mf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function qC(){return rA()&&document.documentMode===10}function iE(t=vt()){return Mf(t)||tE(t)||rE(t)||nE(t)||/windows phone/i.test(t)||eE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e=[]){let n;switch(t){case"Browser":n=qg(vt());break;case"Worker":n=`${qg(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e={}){return Ps(t,"GET","/v2/passwordPolicy",Lf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=6;class KC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??GC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new HC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await su(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(ci(this));const n=e?fn(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WC(this),n=new KC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&xC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zu(t){return fn(t)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=dA(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ff={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YC(t){Ff=t}function JC(t){return Ff.loadJS(t)}function XC(){return Ff.gapiScript}function ZC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t,e){const n=Pf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yi(s,e??{}))return i;Rn(i,"already-initialized")}return n.initialize({options:e})}function tk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nk(t,e,n){const r=zu(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=oE(e),{host:o,port:l}=rk(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(yi(c,r.config.emulator)&&yi(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,ga(o)?Mw(`${s}//${o}${u}`):ik()}function oE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rk(t){const e=oE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wg(o)}}}function Wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ik(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return DC(t,"POST","/v1/accounts:signInWithIdp",Lf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="http://localhost";class _i extends aE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:sk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends va{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends va{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends va{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),o=Gg(r);return new vs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gg(r);return new vs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends er{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,au.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new au(e,n,r,i)}}function lE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?au._fromErrorAndOperation(t,s,e,r):s})}async function ok(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(ci(r));const i="reauthenticate";try{const s=await Zo(t,lE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=jf(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),vs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e,n=!1){if(sn(t.app))return Promise.reject(ci(t));const r="signIn",i=await lE(t,r,e),s=await vs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function uk(t,e,n,r){return fn(t).onIdTokenChanged(e,n,r)}function ck(t,e,n){return fn(t).beforeAuthStateChanged(e,n)}function uE(t,e,n,r){return fn(t).onAuthStateChanged(e,n,r)}const lu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lu,"1"),this.storage.removeItem(lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=1e3,hk=10;class dE extends cE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dE.type="LOCAL";const fk=dE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends cE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hE.type="SESSION";const fE=hE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await pk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Uf("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===c)switch(E.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(E.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function gk(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function yk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _k(){return pE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="firebaseLocalStorageDb",wk=1,uu="firebaseLocalStorage",gE="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qu(t,e){return t.transaction([uu],e?"readwrite":"readonly").objectStore(uu)}function Ek(){const t=indexedDB.deleteDatabase(mE);return new _a(t).toPromise()}function uh(){const t=indexedDB.open(mE,wk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uu,{keyPath:gE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uu)?e(r):(r.close(),await Ek(),e(await uh()))})})}async function Kg(t,e,n){const r=qu(t,!0).put({[gE]:e,value:n});return new _a(r).toPromise()}async function Sk(t,e){const n=qu(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=qu(t,!0).delete(e);return new _a(n).toPromise()}const Tk=800,Ik=3;class yE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ik)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(_k()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await yk(),!this.activeServiceWorker)return;this.sender=new mk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uh();return await Kg(e,lu,"1"),await Qg(e,lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qu(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yE.type="LOCAL";const xk=yE;new ya(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e){return e?Bn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends aE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ak(t){return lk(t.auth,new Bf(t),t.bypassAuthState)}function Ck(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ak(n,new Bf(t),t.bypassAuthState)}async function kk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ok(n,new Bf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ak;case"linkViaPopup":case"linkViaRedirect":return kk;case"reauthViaPopup":case"reauthViaRedirect":return Ck;default:Rn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new ya(2e3,1e4);async function Rk(t,e,n){if(sn(t.app))return Promise.reject(cn(t,"operation-not-supported-in-this-environment"));const r=zu(t);AC(t,e,Vf);const i=vE(r,n);return new oi(r,"signInViaPopup",e,i).executeNotNull()}class oi extends _E{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bk.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="pendingRedirect",Sl=new Map;class Nk extends _E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const r=await Dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dk(t,e){const n=jk(e),r=Lk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ok(t,e){Sl.set(t._key(),e)}function Lk(t){return Bn(t._redirectPersistence)}function jk(t){return El(Pk,t.config.apiKey,t.name)}async function Mk(t,e,n=!1){if(sn(t.app))return Promise.reject(ci(t));const r=zu(t),i=vE(r,e),o=await new Nk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=10*60*1e3;class Vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$k=/^https?/;async function qk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bk(t);for(const n of e)try{if(Hk(n))return}catch{}Rn(t,"unauthorized-domain")}function Hk(t){const e=ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$k.test(n))return!1;if(zk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=new ya(3e4,6e4);function Jg(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gk(t){return new Promise((e,n)=>{var i,s,o;function r(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(cn(t,"network-request-failed"))},timeout:Wk.get()})}if((s=(i=An().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=An().gapi)!=null&&o.load)r();else{const l=ZC("iframefcb");return An()[l]=()=>{gapi.load?r():n(cn(t,"network-request-failed"))},JC(`${XC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function Kk(t){return Tl=Tl||Gk(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new ya(5e3,15e3),Yk="__/auth/iframe",Jk="emulator/auth/iframe",Xk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eb(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Of(e,Jk):`https://${t.config.authDomain}/${Yk}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=Zk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function tb(t){const e=await Kk(t),n=An().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:eb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=An().setTimeout(()=>{s(o)},Qk.get());function u(){An().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rb=500,ib=600,sb="_blank",ob="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ab(t,e,n,r=rb,i=ib){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...nb,width:r.toString(),height:i.toString(),top:s,left:o},c=vt().toLowerCase();n&&(l=Zw(c)?sb:n),Jw(c)&&(e=e||ob,u.scrollbars="yes");const p=Object.entries(u).reduce((E,[I,R])=>`${E}${I}=${R},`,"");if($C(c)&&l!=="_self")return lb(e||"",l),new Xg(null);const m=window.open(e||"",l,p);J(m,t,"popup-blocked");try{m.focus()}catch{}return new Xg(m)}function lb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="__/auth/handler",cb="emulator/auth/handler",db=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof Vf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof va){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${db}=${encodeURIComponent(u)}`:"";return`${hb(t)}?${ma(l).slice(1)}${c}`}function hb({config:t}){return t.emulator?Of(t,cb):`https://${t.authDomain}/${ub}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="webStorageSupport";class fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fE,this._completeRedirectFn=Mk,this._overrideRedirectResult=Ok}async _openPopup(e,n,r,i){var o;Qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zg(e,n,r,ah(),i);return ab(e,s,Uf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,ah(),i);return gk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tb(e),r=new Vk(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Xc];s!==void 0&&n(!!s),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iE()||Xw()||Mf()}}const pb=fb;var ey="@firebase/auth",ty="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yb(t){ys(new vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(t)},c=new QC(r,i,s,u);return tk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ys(new vi("auth-internal",e=>{const n=zu(e.getProvider("auth").getImmediate());return(r=>new mb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dr(ey,ty,gb(t)),Dr(ey,ty,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=5*60,_b=jw("authIdTokenMaxAge")||vb;let ny=null;const wb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_b)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Eb(t=Bw()){const e=Pf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ek(t,{popupRedirectResolver:pb,persistence:[xk,fk,fE]}),r=jw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wb(s.toString());ck(n,o,()=>o(n.currentUser)),uk(n,l=>o(l))}}const i=Ow("auth");return i&&nk(n,`http://${i}`),n}function Sb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}YC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Sb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yb("Browser");var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,EE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function S(){}S.prototype=y.prototype,_.F=y.prototype,_.prototype=new S,_.prototype.constructor=_,_.D=function(T,x,N){for(var C=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)C[pe-2]=arguments[pe];return y.prototype[x].apply(T,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,S){S||(S=0);const T=Array(16);if(typeof y=="string")for(var x=0;x<16;++x)T[x]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(x=0;x<16;++x)T[x]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=_.g[0],S=_.g[1],x=_.g[2];let N=_.g[3],C;C=y+(N^S&(x^N))+T[0]+3614090360&4294967295,y=S+(C<<7&4294967295|C>>>25),C=N+(x^y&(S^x))+T[1]+3905402710&4294967295,N=y+(C<<12&4294967295|C>>>20),C=x+(S^N&(y^S))+T[2]+606105819&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(y^x&(N^y))+T[3]+3250441966&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(N^S&(x^N))+T[4]+4118548399&4294967295,y=S+(C<<7&4294967295|C>>>25),C=N+(x^y&(S^x))+T[5]+1200080426&4294967295,N=y+(C<<12&4294967295|C>>>20),C=x+(S^N&(y^S))+T[6]+2821735955&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(y^x&(N^y))+T[7]+4249261313&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(N^S&(x^N))+T[8]+1770035416&4294967295,y=S+(C<<7&4294967295|C>>>25),C=N+(x^y&(S^x))+T[9]+2336552879&4294967295,N=y+(C<<12&4294967295|C>>>20),C=x+(S^N&(y^S))+T[10]+4294925233&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(y^x&(N^y))+T[11]+2304563134&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(N^S&(x^N))+T[12]+1804603682&4294967295,y=S+(C<<7&4294967295|C>>>25),C=N+(x^y&(S^x))+T[13]+4254626195&4294967295,N=y+(C<<12&4294967295|C>>>20),C=x+(S^N&(y^S))+T[14]+2792965006&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(y^x&(N^y))+T[15]+1236535329&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(x^N&(S^x))+T[1]+4129170786&4294967295,y=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(y^S))+T[6]+3225465664&4294967295,N=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(N^y))+T[11]+643717713&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^y&(x^N))+T[0]+3921069994&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(x^N&(S^x))+T[5]+3593408605&4294967295,y=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(y^S))+T[10]+38016083&4294967295,N=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(N^y))+T[15]+3634488961&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^y&(x^N))+T[4]+3889429448&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(x^N&(S^x))+T[9]+568446438&4294967295,y=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(y^S))+T[14]+3275163606&4294967295,N=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(N^y))+T[3]+4107603335&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^y&(x^N))+T[8]+1163531501&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(x^N&(S^x))+T[13]+2850285829&4294967295,y=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(y^S))+T[2]+4243563512&4294967295,N=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(N^y))+T[7]+1735328473&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^y&(x^N))+T[12]+2368359562&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(S^x^N)+T[5]+4294588738&4294967295,y=S+(C<<4&4294967295|C>>>28),C=N+(y^S^x)+T[8]+2272392833&4294967295,N=y+(C<<11&4294967295|C>>>21),C=x+(N^y^S)+T[11]+1839030562&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^y)+T[14]+4259657740&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(S^x^N)+T[1]+2763975236&4294967295,y=S+(C<<4&4294967295|C>>>28),C=N+(y^S^x)+T[4]+1272893353&4294967295,N=y+(C<<11&4294967295|C>>>21),C=x+(N^y^S)+T[7]+4139469664&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^y)+T[10]+3200236656&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(S^x^N)+T[13]+681279174&4294967295,y=S+(C<<4&4294967295|C>>>28),C=N+(y^S^x)+T[0]+3936430074&4294967295,N=y+(C<<11&4294967295|C>>>21),C=x+(N^y^S)+T[3]+3572445317&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^y)+T[6]+76029189&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(S^x^N)+T[9]+3654602809&4294967295,y=S+(C<<4&4294967295|C>>>28),C=N+(y^S^x)+T[12]+3873151461&4294967295,N=y+(C<<11&4294967295|C>>>21),C=x+(N^y^S)+T[15]+530742520&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^y)+T[2]+3299628645&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(x^(S|~N))+T[0]+4096336452&4294967295,y=S+(C<<6&4294967295|C>>>26),C=N+(S^(y|~x))+T[7]+1126891415&4294967295,N=y+(C<<10&4294967295|C>>>22),C=x+(y^(N|~S))+T[14]+2878612391&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~y))+T[5]+4237533241&4294967295,S=x+(C<<21&4294967295|C>>>11),C=y+(x^(S|~N))+T[12]+1700485571&4294967295,y=S+(C<<6&4294967295|C>>>26),C=N+(S^(y|~x))+T[3]+2399980690&4294967295,N=y+(C<<10&4294967295|C>>>22),C=x+(y^(N|~S))+T[10]+4293915773&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~y))+T[1]+2240044497&4294967295,S=x+(C<<21&4294967295|C>>>11),C=y+(x^(S|~N))+T[8]+1873313359&4294967295,y=S+(C<<6&4294967295|C>>>26),C=N+(S^(y|~x))+T[15]+4264355552&4294967295,N=y+(C<<10&4294967295|C>>>22),C=x+(y^(N|~S))+T[6]+2734768916&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~y))+T[13]+1309151649&4294967295,S=x+(C<<21&4294967295|C>>>11),C=y+(x^(S|~N))+T[4]+4149444226&4294967295,y=S+(C<<6&4294967295|C>>>26),C=N+(S^(y|~x))+T[11]+3174756917&4294967295,N=y+(C<<10&4294967295|C>>>22),C=x+(y^(N|~S))+T[2]+718787259&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~y))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,_.g[2]=_.g[2]+x&4294967295,_.g[3]=_.g[3]+N&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const S=y-this.blockSize,T=this.C;let x=this.h,N=0;for(;N<y;){if(x==0)for(;N<=S;)i(this,_,N),N+=this.blockSize;if(typeof _=="string"){for(;N<y;)if(T[x++]=_.charCodeAt(N++),x==this.blockSize){i(this,T),x=0;break}}else for(;N<y;)if(T[x++]=_[N++],x==this.blockSize){i(this,T),x=0;break}}this.h=x,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var S=_.length-8;S<_.length;++S)_[S]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,S=0;S<4;++S)for(let T=0;T<32;T+=8)_[y++]=this.g[S]>>>T&255;return _};function s(_,y){var S=l;return Object.prototype.hasOwnProperty.call(S,_)?S[_]:S[_]=y(_)}function o(_,y){this.h=y;const S=[];let T=!0;for(let x=_.length-1;x>=0;x--){const N=_[x]|0;T&&N==y||(S[x]=N,T=!1)}this.g=S}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return m;if(_<0)return k(c(-_));const y=[];let S=1;for(let T=0;_>=S;T++)y[T]=_/S|0,S*=4294967296;return new o(y,0)}function p(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return k(p(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(y,8));let T=m;for(let N=0;N<_.length;N+=8){var x=Math.min(8,_.length-N);const C=parseInt(_.substring(N,N+x),y);x<8?(x=c(Math.pow(y,x)),T=T.j(x).add(c(C))):(T=T.j(S),T=T.add(c(C)))}return T}var m=u(0),E=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-k(this).m();let _=0,y=1;for(let S=0;S<this.g.length;S++){const T=this.i(S);_+=(T>=0?T:4294967296+T)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(b(this))return"-"+k(this).toString(_);const y=c(Math.pow(_,6));var S=this;let T="";for(;;){const x=P(S,y).g;S=A(S,x.j(y));let N=((S.g.length>0?S.g[0]:S.h)>>>0).toString(_);if(S=x,R(S))return N+T;for(;N.length<6;)N="0"+N;T=N+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function b(_){return _.h==-1}t.l=function(_){return _=A(this,_),b(_)?-1:R(_)?0:1};function k(_){const y=_.g.length,S=[];for(let T=0;T<y;T++)S[T]=~_.g[T];return new o(S,~_.h).add(E)}t.abs=function(){return b(this)?k(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),S=[];let T=0;for(let x=0;x<=y;x++){let N=T+(this.i(x)&65535)+(_.i(x)&65535),C=(N>>>16)+(this.i(x)>>>16)+(_.i(x)>>>16);T=C>>>16,N&=65535,C&=65535,S[x]=C<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function A(_,y){return _.add(k(y))}t.j=function(_){if(R(this)||R(_))return m;if(b(this))return b(_)?k(this).j(k(_)):k(k(this).j(_));if(b(_))return k(this.j(k(_)));if(this.l(I)<0&&_.l(I)<0)return c(this.m()*_.m());const y=this.g.length+_.g.length,S=[];for(var T=0;T<2*y;T++)S[T]=0;for(T=0;T<this.g.length;T++)for(let x=0;x<_.g.length;x++){const N=this.i(T)>>>16,C=this.i(T)&65535,pe=_.i(x)>>>16,ut=_.i(x)&65535;S[2*T+2*x]+=C*ut,g(S,2*T+2*x),S[2*T+2*x+1]+=N*ut,g(S,2*T+2*x+1),S[2*T+2*x+1]+=C*pe,g(S,2*T+2*x+1),S[2*T+2*x+2]+=N*pe,g(S,2*T+2*x+2)}for(_=0;_<y;_++)S[_]=S[2*_+1]<<16|S[2*_];for(_=y;_<2*y;_++)S[_]=0;return new o(S,0)};function g(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function v(_,y){this.g=_,this.h=y}function P(_,y){if(R(y))throw Error("division by zero");if(R(_))return new v(m,m);if(b(_))return y=P(k(_),y),new v(k(y.g),k(y.h));if(b(y))return y=P(_,k(y)),new v(k(y.g),y.h);if(_.g.length>30){if(b(_)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var S=E,T=y;T.l(_)<=0;)S=D(S),T=D(T);var x=L(S,1),N=L(T,1);for(T=L(T,2),S=L(S,2);!R(T);){var C=N.add(T);C.l(_)<=0&&(x=x.add(S),N=C),T=L(T,1),S=L(S,1)}return y=A(_,x.j(y)),new v(x,y)}for(x=m;_.l(y)>=0;){for(S=Math.max(1,Math.floor(_.m()/y.m())),T=Math.ceil(Math.log(S)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),N=c(S),C=N.j(y);b(C)||C.l(_)>0;)S-=T,N=c(S),C=N.j(y);R(N)&&(N=E),x=x.add(N),_=A(_,C)}return new v(x,_)}t.B=function(_){return P(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),S=[];for(let T=0;T<y;T++)S[T]=this.i(T)&_.i(T);return new o(S,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),S=[];for(let T=0;T<y;T++)S[T]=this.i(T)|_.i(T);return new o(S,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),S=[];for(let T=0;T<y;T++)S[T]=this.i(T)^_.i(T);return new o(S,this.h^_.h)};function D(_){const y=_.g.length+1,S=[];for(let T=0;T<y;T++)S[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(S,_.h)}function L(_,y){const S=y>>5;y%=32;const T=_.g.length-S,x=[];for(let N=0;N<T;N++)x[N]=y>0?_.i(N+S)>>>y|_.i(N+S+1)<<32-y:_.i(N+S);return new o(x,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,EE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,Or=o}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var SE,po,TE,Il,ch,IE,xE,AE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof el=="object"&&el];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var O=a[w];if(!(O in f))break e;f=f[O]}a=a[a.length-1],w=f[a],d=d(w),d!=w&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(d){var f=[],w;for(w in d)Object.prototype.hasOwnProperty.call(d,w)&&f.push([w,d[w]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,f){return a.call.apply(a.bind,arguments)}function c(a,d,f){return c=u,c.apply(null,arguments)}function p(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var w=f.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function m(a,d){function f(){}f.prototype=d.prototype,a.Z=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(w,O,j){for(var $=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)$[ee-2]=arguments[ee];return d.prototype[O].apply(w,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const d=a.length;if(d>0){const f=Array(d);for(let w=0;w<d;w++)f[w]=a[w];return f}return[]}function R(a,d){for(let w=1;w<arguments.length;w++){const O=arguments[w];var f=typeof O;if(f=f!="object"?f:O?Array.isArray(O)?"array":f:"null",f=="array"||f=="object"&&typeof O.length=="number"){f=a.length||0;const j=O.length||0;a.length=f+j;for(let $=0;$<j;$++)a[f+$]=O[$]}else a.push(O)}}class b{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(a){o.setTimeout(()=>{throw a},0)}function A(){var a=_;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class g{constructor(){this.h=this.g=null}add(d,f){const w=v.get();w.set(d,f),this.h?this.h.next=w:this.g=w,this.h=w}}var v=new b(()=>new P,a=>a.reset());class P{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let D,L=!1,_=new g,y=()=>{const a=Promise.resolve(void 0);D=()=>{a.then(S)}};function S(){for(var a;a=A();){try{a.h.call(a.g)}catch(f){k(f)}var d=v;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}L=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function pe(a,d){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}m(pe,x),pe.prototype.init=function(a,d){const f=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ut="closure_listenable_"+(Math.random()*1e6|0),Dn=0;function de(a,d,f,w,O){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!w,this.ha=O,this.key=++Dn,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function W(a,d,f){for(const w in a)d.call(f,a[w],w,a)}function Q(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function he(a){const d={};for(const f in a)d[f]=a[f];return d}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nt(a,d){let f,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(f in w)a[f]=w[f];for(let j=0;j<ie.length;j++)f=ie[j],Object.prototype.hasOwnProperty.call(w,f)&&(a[f]=w[f])}}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,d,f,w,O){const j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);const $=Be(a,d,w,O);return $>-1?(d=a[$],f||(d.fa=!1)):(d=new de(d,this.src,j,!!w,O),d.fa=f,a.push(d)),d};function Ge(a,d){const f=d.type;if(f in a.g){var w=a.g[f],O=Array.prototype.indexOf.call(w,d,void 0),j;(j=O>=0)&&Array.prototype.splice.call(w,O,1),j&&(B(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Be(a,d,f,w){for(let O=0;O<a.length;++O){const j=a[O];if(!j.da&&j.listener==d&&j.capture==!!f&&j.ha==w)return O}return-1}var nt="closure_lm_"+(Math.random()*1e6|0),xt={};function Kr(a,d,f,w,O){if(Array.isArray(d)){for(let j=0;j<d.length;j++)Kr(a,d[j],f,w,O);return null}return f=Ke(f),a&&a[ut]?a.J(d,f,l(w)?!!w.capture:!1,O):Qr(a,d,f,!1,w,O)}function Qr(a,d,f,w,O,j){if(!d)throw Error("Invalid event type");const $=l(O)?!!O.capture:!!O;let ee=ne(a);if(ee||(a[nt]=ee=new me(a)),f=ee.add(d,f,w,$,j),f.proxy)return f;if(w=tr(),f.proxy=w,w.src=a,w.listener=f,a.addEventListener)N||(O=$),O===void 0&&(O=!1),a.addEventListener(d.toString(),w,O);else if(a.attachEvent)a.attachEvent(ce(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return f}function tr(){function a(f){return d.call(a.src,a.listener,f)}const d=te;return a}function bi(a,d,f,w,O){if(Array.isArray(d))for(var j=0;j<d.length;j++)bi(a,d[j],f,w,O);else w=l(w)?!!w.capture:!!w,f=Ke(f),a&&a[ut]?(a=a.i,j=String(d).toString(),j in a.g&&(d=a.g[j],f=Be(d,f,w,O),f>-1&&(B(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete a.g[j],a.h--)))):a&&(a=ne(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Be(d,f,w,O)),(f=a>-1?d[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[ut])Ge(d.i,a);else{var f=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(f,w,a.capture):d.detachEvent?d.detachEvent(ce(f),w):d.addListener&&d.removeListener&&d.removeListener(w),(f=ne(d))?(Ge(f,a),f.h==0&&(f.src=null,d[nt]=null)):B(a)}}}function ce(a){return a in xt?xt[a]:xt[a]="on"+a}function te(a,d){if(a.da)a=!0;else{d=new pe(d,this);const f=a.listener,w=a.ha||a.src;a.fa&&z(a),a=f.call(w,d)}return a}function ne(a){return a=a[nt],a instanceof me?a:null}var xe="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ke(a){return typeof a=="function"?a:(a[xe]||(a[xe]=function(d){return a.handleEvent(d)}),a[xe])}function _e(){T.call(this),this.i=new me(this),this.M=this,this.G=null}m(_e,T),_e.prototype[ut]=!0,_e.prototype.removeEventListener=function(a,d,f,w){bi(this,a,d,f,w)};function Oe(a,d){var f,w=a.G;if(w)for(f=[];w;w=w.G)f.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new x(d,a);else if(d instanceof x)d.target=d.target||a;else{var O=d;d=new x(w,a),Nt(d,O)}O=!0;let j,$;if(f)for($=f.length-1;$>=0;$--)j=d.g=f[$],O=pn(j,w,!0,d)&&O;if(j=d.g=a,O=pn(j,w,!0,d)&&O,O=pn(j,w,!1,d)&&O,f)for($=0;$<f.length;$++)j=d.g=f[$],O=pn(j,w,!1,d)&&O}_e.prototype.N=function(){if(_e.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const f=a.g[d];for(let w=0;w<f.length;w++)B(f[w]);delete a.g[d],a.h--}}this.G=null},_e.prototype.J=function(a,d,f,w){return this.i.add(String(a),d,!1,f,w)},_e.prototype.K=function(a,d,f,w){return this.i.add(String(a),d,!0,f,w)};function pn(a,d,f,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let O=!0;for(let j=0;j<d.length;++j){const $=d[j];if($&&!$.da&&$.capture==f){const ee=$.listener,ze=$.ha||$.src;$.fa&&Ge(a.i,$),O=ee.call(ze,w)!==!1&&O}}return O&&!w.defaultPrevented}function nr(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Dt(a){a.g=nr(()=>{a.g=null,a.i&&(a.i=!1,Dt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class mn extends T{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Dt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(a){T.call(this),this.h=a,this.g={}}m(Xt,T);var ct=[];function rr(a){W(a.g,function(d,f){this.g.hasOwnProperty(f)&&z(d)},a),a.g={}}Xt.prototype.N=function(){Xt.Z.N.call(this),rr(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var js=o.JSON.stringify,Ms=o.JSON.parse,Ri=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Fs(){}function Bt(){}var Zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pi(){x.call(this,"d")}m(Pi,x);function Ni(){x.call(this,"c")}m(Ni,x);var gn={},wp=null;function xa(){return wp=wp||new _e}gn.Ia="serverreachability";function Ep(a){x.call(this,gn.Ia,a)}m(Ep,x);function Vs(a){const d=xa();Oe(d,new Ep(d))}gn.STAT_EVENT="statevent";function Sp(a,d){x.call(this,gn.STAT_EVENT,a),this.stat=d}m(Sp,x);function _t(a){const d=xa();Oe(d,new Sp(d,a))}gn.Ja="timingevent";function Tp(a,d){x.call(this,gn.Ja,a),this.size=d}m(Tp,x);function Us(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Bs(){this.g=!0}Bs.prototype.ua=function(){this.g=!1};function iS(a,d,f,w,O,j){a.info(function(){if(a.g)if(j){var $="",ee=j.split("&");for(let ve=0;ve<ee.length;ve++){var ze=ee[ve].split("=");if(ze.length>1){const Qe=ze[0];ze=ze[1];const vn=Qe.split("_");$=vn.length>=2&&vn[1]=="type"?$+(Qe+"="+ze+"&"):$+(Qe+"=redacted&")}}}else $=null;else $=j;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+d+`
`+f+`
`+$})}function sS(a,d,f,w,O,j,$){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+d+`
`+f+`
`+j+" "+$})}function Di(a,d,f,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+aS(a,f)+(w?" "+w:"")})}function oS(a,d){a.info(function(){return"TIMEOUT: "+d})}Bs.prototype.info=function(){};function aS(a,d){if(!a.g)return d;if(!d)return null;try{const j=JSON.parse(d);if(j){for(a=0;a<j.length;a++)if(Array.isArray(j[a])){var f=j[a];if(!(f.length<2)){var w=f[1];if(Array.isArray(w)&&!(w.length<1)){var O=w[0];if(O!="noop"&&O!="stop"&&O!="close")for(let $=1;$<w.length;$++)w[$]=""}}}}return js(j)}catch{return d}}var Aa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ip={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xp;function ic(){}m(ic,Fs),ic.prototype.g=function(){return new XMLHttpRequest},xp=new ic;function zs(a){return encodeURIComponent(String(a))}function lS(a){var d=1;a=a.split(":");const f=[];for(;d>0&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function ir(a,d,f,w){this.j=a,this.i=d,this.l=f,this.S=w||1,this.V=new Xt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var Cp={},sc={};function oc(a,d,f){a.M=1,a.A=ka(yn(d)),a.u=f,a.R=!0,kp(a,null)}function kp(a,d){a.F=Date.now(),Ca(a),a.B=yn(a.A);var f=a.B,w=a.S;Array.isArray(w)||(w=[String(w)]),Bp(f.i,"t",w),a.C=0,f=a.j.L,a.h=new Ap,a.g=sm(a.j,f?d:null,!a.u),a.P>0&&(a.O=new mn(c(a.Y,a,a.g),a.P)),d=a.V,f=a.g,w=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(ct[0]=O.toString()),O=ct);for(let j=0;j<O.length;j++){const $=Kr(f,O[j],w||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.J?he(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Vs(),iS(a.i,a.v,a.B,a.l,a.S,a.u)}ir.prototype.ba=function(a){a=a.target;const d=this.O;d&&ar(a)==3?d.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const ee=ar(this.g),ze=this.g.ya(),ve=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Kp(this.g)))){this.K||ee!=4||ze==7||(ze==8||ve<=0?Vs(3):Vs(2)),ac(this);var d=this.g.ca();this.X=d;var f=uS(this);if(this.o=d==200,sS(this.i,this.v,this.B,this.l,this.S,ee,d),this.o){if(this.U&&!this.L){t:{if(this.g){var w,O=this.g;if((w=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(w)){var j=w;break t}}j=null}if(a=j)Di(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lc(this,a);else{this.o=!1,this.m=3,_t(12),Yr(this),$s(this);break e}}if(this.R){a=!0;let Qe;for(;!this.K&&this.C<f.length;)if(Qe=cS(this,f),Qe==sc){ee==4&&(this.m=4,_t(14),a=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Cp){this.m=4,_t(15),Di(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Di(this.i,this.l,Qe,null),lc(this,Qe);if(bp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,_t(16),a=!1),this.o=this.o&&a,!a)Di(this.i,this.l,f,"[Invalid Chunked Response]"),Yr(this),$s(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),gc($),$.P=!0,_t(11))}}else Di(this.i,this.l,f,null),lc(this,f);ee==4&&Yr(this),this.o&&!this.K&&(ee==4?tm(this.j,this):(this.o=!1,Ca(this)))}else IS(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),Yr(this),$s(this)}}}catch{}finally{}};function uS(a){if(!bp(a))return a.g.la();const d=Kp(a.g);if(d==="")return"";let f="";const w=d.length,O=ar(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Yr(a),$s(a),"";a.h.i=new o.TextDecoder}for(let j=0;j<w;j++)a.h.h=!0,f+=a.h.i.decode(d[j],{stream:!(O&&j==w-1)});return d.length=0,a.h.g+=f,a.C=0,a.h.g}function bp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function cS(a,d){var f=a.C,w=d.indexOf(`
`,f);return w==-1?sc:(f=Number(d.substring(f,w)),isNaN(f)?Cp:(w+=1,w+f>d.length?sc:(d=d.slice(w,w+f),a.C=w+f,d)))}ir.prototype.cancel=function(){this.K=!0,Yr(this)};function Ca(a){a.T=Date.now()+a.H,Rp(a,a.H)}function Rp(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Us(c(a.aa,a),d)}function ac(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ir.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(oS(this.i,this.B),this.M!=2&&(Vs(),_t(17)),Yr(this),this.m=2,$s(this)):Rp(this,this.T-a)};function $s(a){a.j.I==0||a.K||tm(a.j,a)}function Yr(a){ac(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,rr(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function lc(a,d){try{var f=a.j;if(f.I!=0&&(f.g==a||uc(f.h,a))){if(!a.L&&uc(f.h,a)&&f.I==3){try{var w=f.Ba.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Da(f),Pa(f);else break e;mc(f),_t(18)}}else f.xa=O[1],0<f.xa-f.K&&O[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Us(c(f.Va,f),6e3));Dp(f.h)<=1&&f.ta&&(f.ta=void 0)}else Xr(f,11)}else if((a.L||f.g==a)&&Da(f),!C(d))for(O=f.Ba.g.parse(d),d=0;d<O.length;d++){let ve=O[d];const Qe=ve[0];if(!(Qe<=f.K))if(f.K=Qe,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const vn=ve[3];vn!=null&&(f.ka=vn,f.j.info("VER="+f.ka));const Zr=ve[4];Zr!=null&&(f.za=Zr,f.j.info("SVER="+f.za));const lr=ve[5];lr!=null&&typeof lr=="number"&&lr>0&&(w=1.5*lr,f.O=w,f.j.info("backChannelRequestTimeoutMs_="+w)),w=f;const ur=a.g;if(ur){const La=ur.g?ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var j=w.h;j.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(cc(j,j.h),j.h=null))}if(w.G){const yc=ur.g?ur.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(w.wa=yc,Ee(w.J,w.G,yc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),w=f;var $=a;if(w.na=im(w,w.L?w.ba:null,w.W),$.L){Op(w.h,$);var ee=$,ze=w.O;ze&&(ee.H=ze),ee.D&&(ac(ee),Ca(ee)),w.g=$}else Zp(w);f.i.length>0&&Na(f)}else ve[0]!="stop"&&ve[0]!="close"||Xr(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Xr(f,7):pc(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}Vs(4)}catch{}}var dS=class{constructor(a,d){this.g=a,this.map=d}};function Pp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Np(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dp(a){return a.h?1:a.g?a.g.size:0}function uc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function cc(a,d){a.g?a.g.add(d):a.h=d}function Op(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Pp.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.G);return d}return I(a.i)}var jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hS(a,d){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const w=a[f].indexOf("=");let O,j=null;w>=0?(O=a[f].substring(0,w),j=a[f].substring(w+1)):O=a[f],d(O,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function sr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof sr?(this.l=a.l,qs(this,a.j),this.o=a.o,this.g=a.g,Hs(this,a.u),this.h=a.h,dc(this,zp(a.i)),this.m=a.m):a&&(d=String(a).match(jp))?(this.l=!1,qs(this,d[1]||"",!0),this.o=Ws(d[2]||""),this.g=Ws(d[3]||"",!0),Hs(this,d[4]),this.h=Ws(d[5]||"",!0),dc(this,d[6]||"",!0),this.m=Ws(d[7]||"")):(this.l=!1,this.i=new Ks(null,this.l))}sr.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Gs(d,Mp,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Gs(d,Mp,!0),"@"),a.push(zs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Gs(f,f.charAt(0)=="/"?mS:pS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Gs(f,yS)),a.join("")},sr.prototype.resolve=function(a){const d=yn(this);let f=!!a.j;f?qs(d,a.j):f=!!a.o,f?d.o=a.o:f=!!a.g,f?d.g=a.g:f=a.u!=null;var w=a.h;if(f)Hs(d,a.u);else if(f=!!a.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var O=d.h.lastIndexOf("/");O!=-1&&(w=d.h.slice(0,O+1)+w)}if(O=w,O==".."||O==".")w="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){w=O.lastIndexOf("/",0)==0,O=O.split("/");const j=[];for(let $=0;$<O.length;){const ee=O[$++];ee=="."?w&&$==O.length&&j.push(""):ee==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&$==O.length&&j.push("")):(j.push(ee),w=!0)}w=j.join("/")}else w=O}return f?d.h=w:f=a.i.toString()!=="",f?dc(d,zp(a.i)):f=!!a.m,f&&(d.m=a.m),d};function yn(a){return new sr(a)}function qs(a,d,f){a.j=f?Ws(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Hs(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function dc(a,d,f){d instanceof Ks?(a.i=d,vS(a.i,a.l)):(f||(d=Gs(d,gS)),a.i=new Ks(d,a.l))}function Ee(a,d,f){a.i.set(d,f)}function ka(a){return Ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ws(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,fS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mp=/[#\/\?@]/g,pS=/[#\?:]/g,mS=/[#\?]/g,gS=/[#\?@]/g,yS=/#/g;function Ks(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Jr(a){a.g||(a.g=new Map,a.h=0,a.i&&hS(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Ks.prototype,t.add=function(a,d){Jr(this),this.i=null,a=Oi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Fp(a,d){Jr(a),d=Oi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Vp(a,d){return Jr(a),d=Oi(a,d),a.g.has(d)}t.forEach=function(a,d){Jr(this),this.g.forEach(function(f,w){f.forEach(function(O){a.call(d,O,w,this)},this)},this)};function Up(a,d){Jr(a);let f=[];if(typeof d=="string")Vp(a,d)&&(f=f.concat(a.g.get(Oi(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)f=f.concat(a[d]);return f}t.set=function(a,d){return Jr(this),this.i=null,a=Oi(this,a),Vp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Up(this,a),a.length>0?String(a[0]):d):d};function Bp(a,d,f){Fp(a,d),f.length>0&&(a.i=null,a.g.set(Oi(a,d),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let w=0;w<d.length;w++){var f=d[w];const O=zs(f);f=Up(this,f);for(let j=0;j<f.length;j++){let $=O;f[j]!==""&&($+="="+zs(f[j])),a.push($)}}return this.i=a.join("&")};function zp(a){const d=new Ks;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function Oi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function vS(a,d){d&&!a.j&&(Jr(a),a.i=null,a.g.forEach(function(f,w){const O=w.toLowerCase();w!=O&&(Fp(this,w),Bp(this,O,f))},a)),a.j=d}function _S(a,d){const f=new Bs;if(o.Image){const w=new Image;w.onload=p(or,f,"TestLoadImage: loaded",!0,d,w),w.onerror=p(or,f,"TestLoadImage: error",!1,d,w),w.onabort=p(or,f,"TestLoadImage: abort",!1,d,w),w.ontimeout=p(or,f,"TestLoadImage: timeout",!1,d,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function wS(a,d){const f=new Bs,w=new AbortController,O=setTimeout(()=>{w.abort(),or(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(j=>{clearTimeout(O),j.ok?or(f,"TestPingServer: ok",!0,d):or(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),or(f,"TestPingServer: error",!1,d)})}function or(a,d,f,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(f)}catch{}}function ES(){this.g=new Ri}function hc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(hc,Fs),hc.prototype.g=function(){return new ba(this.i,this.h)};function ba(a,d){_e.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ba,_e),t=ba.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$p(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function $p(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Qs(this):Ys(this),this.readyState==3&&$p(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Na=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ys(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qp(a){let d="";return W(a,function(f,w){d+=w,d+=":",d+=f,d+=`\r
`}),d}function fc(a,d,f){e:{for(w in f){var w=!1;break e}w=!0}w||(f=qp(f),typeof a=="string"?f!=null&&zs(f):Ee(a,d,f))}function Ne(a){_e.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ne,_e);var SS=/^https?$/i,TS=["POST","PUT"];t=Ne.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,f,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xp.g(),this.g.onreadystatechange=E(c(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){Hp(this,j);return}if(a=f||"",f=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)f.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())f.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(f.keys()).find(j=>j.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(TS,d,void 0)>=0)||w||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,$]of f)this.g.setRequestHeader(j,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(j){Hp(this,j)}};function Hp(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Wp(a),Ra(a)}function Wp(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Oe(this,"complete"),Oe(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Gp(this):this.Xa())},t.Xa=function(){Gp(this)};function Gp(a){if(a.h&&typeof s<"u"){if(a.v&&ar(a)==4)setTimeout(a.Ca.bind(a),0);else if(Oe(a,"readystatechange"),ar(a)==4){a.h=!1;try{const j=a.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var w;if(w=j===0){let $=String(a.D).match(jp)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),w=!SS.test($?$.toLowerCase():"")}f=w}if(f)Oe(a,"complete"),Oe(a,"success");else{a.o=6;try{var O=ar(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Wp(a)}}finally{Ra(a)}}}}function Ra(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,d||Oe(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ar(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ar(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ms(d)}};function Kp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function IS(a){const d={};a=(a.g&&ar(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(C(a[w]))continue;var f=lS(a[w]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const j=d[O]||[];d[O]=j,j.push(f)}Q(d,function(w){return w.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Qp(a){this.za=0,this.i=[],this.j=new Bs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Js("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Js("baseRetryDelayMs",5e3,a),this.Za=Js("retryDelaySeedMs",1e4,a),this.Ta=Js("forwardChannelMaxRetries",2,a),this.va=Js("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Pp(a&&a.concurrentRequestLimit),this.Ba=new ES,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Qp.prototype,t.ka=8,t.I=1,t.connect=function(a,d,f,w){_t(0),this.W=a,this.H=d||{},f&&w!==void 0&&(this.H.OSID=f,this.H.OAID=w),this.F=this.X,this.J=im(this,null,this.W),Na(this)};function pc(a){if(Yp(a),a.I==3){var d=a.V++,f=yn(a.J);if(Ee(f,"SID",a.M),Ee(f,"RID",d),Ee(f,"TYPE","terminate"),Xs(a,f),d=new ir(a,a.j,d),d.M=2,d.A=ka(yn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=sm(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Ca(d)}rm(a)}function Pa(a){a.g&&(gc(a),a.g.cancel(),a.g=null)}function Yp(a){Pa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Da(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Na(a){if(!Np(a.h)&&!a.m){a.m=!0;var d=a.Ea;D||y(),L||(D(),L=!0),_.add(d,a),a.D=0}}function xS(a,d){return Dp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Us(c(a.Ea,a,d),nm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new ir(this,this.j,a);let j=this.o;if(this.U&&(j?(j=he(j),Nt(j,this.U)):j=this.U),this.u!==null||this.R||(O.J=j,j=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var w=this.i[f];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Xp(this,O,d),f=yn(this.J),Ee(f,"RID",a),Ee(f,"CVER",22),this.G&&Ee(f,"X-HTTP-Session-Id",this.G),Xs(this,f),j&&(this.R?d="headers="+zs(qp(j))+"&"+d:this.u&&fc(f,this.u,j)),cc(this.h,O),this.Ra&&Ee(f,"TYPE","init"),this.S?(Ee(f,"$req",d),Ee(f,"SID","null"),O.U=!0,oc(O,f,null)):oc(O,f,d),this.I=2}}else this.I==3&&(a?Jp(this,a):this.i.length==0||Np(this.h)||Jp(this))};function Jp(a,d){var f;d?f=d.l:f=a.V++;const w=yn(a.J);Ee(w,"SID",a.M),Ee(w,"RID",f),Ee(w,"AID",a.K),Xs(a,w),a.u&&a.o&&fc(w,a.u,a.o),f=new ir(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Xp(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),cc(a.h,f),oc(f,w,d)}function Xs(a,d){a.H&&W(a.H,function(f,w){Ee(d,w,f)}),a.l&&W({},function(f,w){Ee(d,w,f)})}function Xp(a,d,f){f=Math.min(a.i.length,f);const w=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let ee=-1;for(;;){const ze=["count="+f];ee==-1?f>0?(ee=O[0].g,ze.push("ofs="+ee)):ee=0:ze.push("ofs="+ee);let ve=!0;for(let Qe=0;Qe<f;Qe++){var j=O[Qe].g;const vn=O[Qe].map;if(j-=ee,j<0)ee=Math.max(0,O[Qe].g-100),ve=!1;else try{j="req"+j+"_"||"";try{var $=vn instanceof Map?vn:Object.entries(vn);for(const[Zr,lr]of $){let ur=lr;l(lr)&&(ur=js(lr)),ze.push(j+Zr+"="+encodeURIComponent(ur))}}catch(Zr){throw ze.push(j+"type="+encodeURIComponent("_badmap")),Zr}}catch{w&&w(vn)}}if(ve){$=ze.join("&");break e}}$=void 0}return a=a.i.splice(0,f),d.G=a,$}function Zp(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;D||y(),L||(D(),L=!0),_.add(d,a),a.A=0}}function mc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Us(c(a.Da,a),nm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,em(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Us(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),Pa(this),em(this))};function gc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function em(a){a.g=new ir(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=yn(a.na);Ee(d,"RID","rpc"),Ee(d,"SID",a.M),Ee(d,"AID",a.K),Ee(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ee(d,"TO",a.ia),Ee(d,"TYPE","xmlhttp"),Xs(a,d),a.u&&a.o&&fc(d,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ka(yn(d)),f.u=null,f.R=!0,kp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Pa(this),mc(this),_t(19))};function Da(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function tm(a,d){var f=null;if(a.g==d){Da(a),gc(a),a.g=null;var w=2}else if(uc(a.h,d))f=d.G,Op(a.h,d),w=1;else return;if(a.I!=0){if(d.o)if(w==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var O=a.D;w=xa(),Oe(w,new Tp(w,f)),Na(a)}else Zp(a);else if(O=d.m,O==3||O==0&&d.X>0||!(w==1&&xS(a,d)||w==2&&mc(a)))switch(f&&f.length>0&&(d=a.h,d.i=d.i.concat(f)),O){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function nm(a,d){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*d}function Xr(a,d){if(a.j.info("Error code "+d),d==2){var f=c(a.bb,a),w=a.Ua;const O=!w;w=new sr(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qs(w,"https"),ka(w),O?_S(w.toString(),f):wS(w.toString(),f)}else _t(2);a.I=0,a.l&&a.l.pa(d),rm(a),Yp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function rm(a){if(a.I=0,a.ja=[],a.l){const d=Lp(a.h);(d.length!=0||a.i.length!=0)&&(R(a.ja,d),R(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function im(a,d,f){var w=f instanceof sr?yn(f):new sr(f);if(w.g!="")d&&(w.g=d+"."+w.g),Hs(w,w.u);else{var O=o.location;w=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;const j=new sr(null);w&&qs(j,w),d&&(j.g=d),O&&Hs(j,O),f&&(j.h=f),w=j}return f=a.G,d=a.wa,f&&d&&Ee(w,f,d),Ee(w,"VER",a.ka),Xs(a,w),w}function sm(a,d,f){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ne(new hc({ab:f})):new Ne(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function om(){}t=om.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Oa(){}Oa.prototype.g=function(a,d){return new Ot(a,d)};function Ot(a,d){_e.call(this),this.g=new Qp(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!C(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Li(this)}m(Ot,_e),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){pc(this.g)},Ot.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=js(a),a=f);d.i.push(new dS(d.Ya++,a)),d.I==3&&Na(d)},Ot.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,Ot.Z.N.call(this)};function am(a){Pi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}m(am,Pi);function lm(){Ni.call(this),this.status=1}m(lm,Ni);function Li(a){this.g=a}m(Li,om),Li.prototype.ra=function(){Oe(this.g,"a")},Li.prototype.qa=function(a){Oe(this.g,new am(a))},Li.prototype.pa=function(a){Oe(this.g,new lm)},Li.prototype.oa=function(){Oe(this.g,"b")},Oa.prototype.createWebChannel=Oa.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,AE=function(){return new Oa},xE=function(){return xa()},IE=gn,ch={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,Il=Aa,Ip.COMPLETE="complete",TE=Ip,Bt.EventType=Zt,Zt.OPEN="a",Zt.CLOSE="b",Zt.ERROR="c",Zt.MESSAGE="d",_e.prototype.listen=_e.prototype.J,po=Bt,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,SE=Ne}).apply(typeof el<"u"?el:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="12.11.0";function Tb(t){Ns=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new bf("@firebase/firestore");function Mi(){return wi.logLevel}function q(t,...e){if(wi.logLevel<=se.DEBUG){const n=e.map(zf);wi.debug(`Firestore (${Ns}): ${t}`,...n)}}function Yn(t,...e){if(wi.logLevel<=se.ERROR){const n=e.map(zf);wi.error(`Firestore (${Ns}): ${t}`,...n)}}function Ei(t,...e){if(wi.logLevel<=se.WARN){const n=e.map(zf);wi.warn(`Firestore (${Ns}): ${t}`,...n)}}function zf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,CE(t,r,n)}function CE(t,e,n){let r=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function fe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||CE(e,i,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ib{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ab{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new kE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class Cb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class kb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Cb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new iy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new iy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Rb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function dh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Zc(i)===Zc(s)?oe(i,s):Zc(i)?1:-1}return oe(t.length,e.length)}const Pb=55296,Nb=57343;function Zc(t){const e=t.charCodeAt(0);return e>=Pb&&e<=Nb}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="__name__";class Sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Sn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return oe(e.length,n.length)}static compareSegments(e,n){const r=Sn.isNumericId(e),i=Sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):dh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class ke extends Sn{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const Db=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Sn{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return Db.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sy}static keyField(){return new st([sy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ke.fromString(e))}static fromName(e){return new K(ke.fromString(e).popFirst(5))}static empty(){return new K(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t,e,n){if(!n)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lb(t,e,n,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function oy(t){if(!K.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function qf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function ea(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qf(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function wa(t,e){if(!bE(t))throw new G(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new G(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=-62135596800,ly=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ly);return new Te(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ay)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ly}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wa(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ay;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Ue("string",Te._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new Te(0,0))}static max(){return new X(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=-1;function jb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Fr(i,K.empty(),e)}function Mb(t){return new Fr(t.readTime,t.key,ta)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(X.min(),K.empty(),ta)}static max(){return new Fr(X.max(),K.empty(),ta)}}function Fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ub{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Vb)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Bb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Os(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=-1;function Wu(t){return t==null}function cu(t){return t===0&&1/t==-1/0}function zb(t){return typeof t=="number"&&Number.isInteger(t)&&!cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="";function $b(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=uy(e)),e=qb(t.get(n),e);return uy(e)}function qb(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case RE:n+="";break;default:n+=s}}return n}function uy(t){return t+RE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function PE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tl(this.root,e,this.comparator,!0)}}class tl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dy(this.data.getIterator())}getIteratorFrom(e){return new dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new an([])}unionWith(e){let n=new We(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NE("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Hb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=Hb.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="server_timestamp",OE="__type__",LE="__previous_value__",jE="__local_write_time__";function Wf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[OE])==null?void 0:r.stringValue)===DE}function Gu(t){const e=t.mapValue.fields[LE];return Wf(e)?Gu(e):e}function na(t){const e=Vr(t.mapValue.fields[jE].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n,r,i,s,o,l,u,c,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p,this.apiKey=m}}const du="(default)";class ra{constructor(e,n){this.projectId=e,this.database=n||du}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database===du}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}function Gb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="__type__",Kb="__max__",nl={mapValue:{}},FE="__vector__",hu="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wf(t)?4:Yb(t)?9007199254740991:Qb(t)?10:11:Y(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),l=Vr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ur(i.bytesValue).isEqual(Ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),l=Le(s.doubleValue);return o===l?cu(o)===cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(cy(o)!==cy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Pn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function ia(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return hy(t.timestampValue,e.timestampValue);case 4:return hy(na(t),na(e));case 5:return dh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ur(s),u=Ur(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=oe(l[c],u[c]);if(p!==0)return p}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Le(s.latitude),Le(o.latitude));return l!==0?l:oe(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var E,I,R,b;const l=s.fields||{},u=o.fields||{},c=(E=l[hu])==null?void 0:E.arrayValue,p=(I=u[hu])==null?void 0:I.arrayValue,m=oe(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((b=p==null?void 0:p.values)==null?void 0:b.length)||0);return m!==0?m:fy(c,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===nl.mapValue&&o===nl.mapValue)return 0;if(s===nl.mapValue)return 1;if(o===nl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const E=dh(u[m],p[m]);if(E!==0)return E;const I=ws(l[u[m]],c[p[m]]);if(I!==0)return I}return oe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Vr(t),r=Vr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function fy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ws(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Es(t){return hh(t)}function hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=hh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${hh(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function xl(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gu(t);return e?16+xl(e):16;case 5:return 2*t.stringValue.length;case 6:return Ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+xl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return xi(r.fields,(s,o)=>{i+=s.length+xl(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function fh(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function py(t){return!!t&&"nullValue"in t}function my(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Al(t){return!!t&&"mapValue"in t}function Qb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ME])==null?void 0:r.stringValue)===FE}function ko(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ko(t.arrayValue.values[n]);return e}return{...t}}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Kb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ko(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(ko(this.value))}}function VE(t){const e=[];return xi(t.fields,(n,r)=>{const i=new st([n]);if(Al(r)){const s=VE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,X.min(),X.min(),X.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,X.min(),X.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,X.min(),X.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.position=e,this.inclusive=n}}function gy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{}class qe extends UE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Zb(e,n,r):n==="array-contains"?new nR(e,r):n==="in"?new rR(e,r):n==="not-in"?new iR(e,r):n==="array-contains-any"?new sR(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eR(e,r):new tR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ws(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends UE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Nn(e,n)}matches(e){return BE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function BE(t){return t.op==="and"}function zE(t){return Xb(t)&&BE(t)}function Xb(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function ph(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(zE(t))return t.filters.map(e=>ph(e)).join(",");{const e=t.filters.map(n=>ph(n)).join(",");return`${t.op}(${e})`}}function $E(t,e){return t instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&Pn(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&$E(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function qE(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(qE).join(" ,")+"}"}(t):"Filter"}class Zb extends qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class eR extends qe{constructor(e,n){super(e,"in",n),this.keys=HE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tR extends qe{constructor(e,n){super(e,"not-in",n),this.keys=HE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class nR extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&ia(n.arrayValue,this.value)}}class rR extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class iR extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ia(this.value.arrayValue,n)}}class sR extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function vy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oR(t,e,n,r,i,s,o)}function Kf(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ph(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Es(r)).join(",")),e.Te=n}return e.Te}function Qf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$E(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yy(t.startAt,e.startAt)&&yy(t.endAt,e.endAt)}function mh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function aR(t,e,n,r,i,s,o,l){return new Ku(t,e,n,r,i,s,o,l)}function Yf(t){return new Ku(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lR(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function uR(t){return t.collectionGroup!==null}function bo(t){const e=Z(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new pu(s,r))}),n.has(st.keyField().canonicalString())||e.Ee.push(new pu(st.keyField(),r))}return e.Ee}function Cn(t){const e=Z(t);return e.Ie||(e.Ie=cR(e,bo(t))),e.Ie}function cR(t,e){if(t.limitType==="F")return vy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pu(i.field,s)});const n=t.endAt?new fu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fu(t.startAt.position,t.startAt.inclusive):null;return vy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gh(t,e,n){return new Ku(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qu(t,e){return Qf(Cn(t),Cn(e))&&t.limitType===e.limitType}function WE(t){return`${Kf(Cn(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qE(i)).join(", ")}]`),Wu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Es(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=gy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,bo(r),i)||r.endAt&&!function(o,l,u){const c=gy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,bo(r),i))}(t,e)}function dR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GE(t){return(e,n)=>{let r=!1;for(const i of bo(t)){const s=hR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hR(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ws(u,c):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return PE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new Pe(K.comparator);function Jn(){return fR}const KE=new Pe(K.comparator);function mo(...t){let e=KE;for(const n of t)e=e.insert(n.key,n);return e}function QE(t){let e=KE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ai(){return Ro()}function YE(){return Ro()}function Ro(){return new Ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const pR=new Pe(K.comparator),mR=new We(K.comparator);function ae(...t){let e=mR;for(const n of t)e=e.add(n);return e}const gR=new We(oe);function yR(){return gR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cu(e)?"-0":e}}function JE(t){return{integerValue:""+t}}function vR(t,e){return zb(e)?JE(e):Jf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this._=void 0}}function _R(t,e,n){return t instanceof mu?function(i,s){const o={fields:{[OE]:{stringValue:DE},[jE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wf(s)&&(s=Gu(s)),s&&(o.fields[LE]=s),{mapValue:o}}(n,e):t instanceof sa?ZE(t,e):t instanceof oa?e0(t,e):function(i,s){const o=XE(i,s),l=wy(o)+wy(i.Ae);return fh(o)&&fh(i.Ae)?JE(l):Jf(i.serializer,l)}(t,e)}function wR(t,e,n){return t instanceof sa?ZE(t,e):t instanceof oa?e0(t,e):n}function XE(t,e){return t instanceof gu?function(r){return fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class mu extends Ju{}class sa extends Ju{constructor(e){super(),this.elements=e}}function ZE(t,e){const n=t0(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class oa extends Ju{constructor(e){super(),this.elements=e}}function e0(t,e){let n=t0(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class gu extends Ju{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wy(t){return Le(t.integerValue||t.doubleValue)}function t0(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ER(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof sa&&i instanceof sa||r instanceof oa&&i instanceof oa?_s(r.elements,i.elements,Pn):r instanceof gu&&i instanceof gu?Pn(r.Ae,i.Ae):r instanceof mu&&i instanceof mu}(t.transform,e.transform)}class SR{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function n0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new i0(t.key,$n.none()):new Ea(t.key,t.data,$n.none());{const n=t.data,r=Ht.empty();let i=new We(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ci(t.key,r,new an(i.toArray()),$n.none())}}function TR(t,e,n){t instanceof Ea?function(i,s,o){const l=i.value.clone(),u=Sy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ci?function(i,s,o){if(!Cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Sy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(r0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,r){return t instanceof Ea?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const c=s.value.clone(),p=Ty(s.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ci?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const c=Ty(s.fieldTransforms,u,o),p=o.data;return p.setAll(r0(s)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function IR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=XE(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function Ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>ER(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends Xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ci extends Xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function r0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sy(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,wR(o,l,n[i]))}return r}function Ty(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_R(s,o,e))}return r}class i0 extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xR extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=YE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=n0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>Ey(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>Ey(n,r))}}class Xf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return pR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,le;function bR(t){switch(t){case V.OK:return Y(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function s0(t){if(t===void 0)return Yn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Fe.OK:return V.OK;case Fe.CANCELLED:return V.CANCELLED;case Fe.UNKNOWN:return V.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return V.INTERNAL;case Fe.UNAVAILABLE:return V.UNAVAILABLE;case Fe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Fe.NOT_FOUND:return V.NOT_FOUND;case Fe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Fe.ABORTED:return V.ABORTED;case Fe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Fe.DATA_LOSS:return V.DATA_LOSS;default:return Y(39323,{code:t})}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=new Or([4294967295,4294967295],0);function Iy(t){const e=RR().encode(t),n=new EE;return n.update(e),new Uint8Array(n.digest())}function xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Or([n,r],0),new Or([i,s],0)]}class Zf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Or.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Or.fromNumber(r)));return i.compare(PR)===1&&(i=new Or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Iy(e),[r,i]=xy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Iy(e),[r,i]=xy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zu(X.min(),i,new Pe(oe),Jn(),ae())}}class Sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sa(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class o0{constructor(e,n){this.targetId=e,this.Ce=n}}class a0{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ay{constructor(){this.ve=0,this.Fe=Cy(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new Sa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Cy()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class NR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.Je=rl(),this.He=rl(),this.Ze=new Pe(oe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(mh(s))if(r===0){const o=new K(s.path);this.et(n,o,gt.newNoDocument(o,X.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ur(r).toUint8Array()}catch(u){if(u instanceof NE)return Ei("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zf(o,i,s)}catch(u){return Ei(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&mh(l.target)){const u=new K(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,gt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ae();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Zu(e,n,this.Ze,this.je,r);return this.je=Jn(),this.Je=rl(),this.He=rl(),this.Ze=new Pe(oe),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ay,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new We(oe),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new We(oe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ay),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function rl(){return new Pe(K.comparator)}function Cy(){return new Pe(K.comparator)}const DR={asc:"ASCENDING",desc:"DESCENDING"},OR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LR={and:"AND",or:"OR"};class jR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yh(t,e){return t.useProto3Json||Wu(e)?e:{value:e}}function yu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function l0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MR(t,e){return yu(t,e.toTimestamp())}function kn(t){return fe(!!t,49232),X.fromTimestamp(function(n){const r=Vr(n);return new Te(r.seconds,r.nanos)}(t))}function ep(t,e){return vh(t,e).canonicalString()}function vh(t,e){const n=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function u0(t){const e=ke.fromString(t);return fe(p0(e),10190,{key:e.toString()}),e}function _h(t,e){return ep(t.databaseId,e.path)}function ed(t,e){const n=u0(e);if(n.get(1)!==t.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(d0(n))}function c0(t,e){return ep(t.databaseId,e)}function FR(t){const e=u0(t);return e.length===4?ke.emptyPath():d0(e)}function wh(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function d0(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ky(t,e,n){return{name:_h(t,e),fields:n.value.mapValue.fields}}function VR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,p){return c.useProto3Json?(fe(p===void 0||typeof p=="string",58123),lt.fromBase64String(p||"")):(fe(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),lt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const p=c.code===void 0?V.UNKNOWN:s0(c.code);return new G(p,c.message||"")}(o);n=new a0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ed(t,r.document.name),s=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):X.min(),l=new Ht({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new kl(c,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ed(t,r.document),s=r.readTime?kn(r.readTime):X.min(),o=gt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new kl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ed(t,r.document),s=r.removedTargetIds||[];n=new kl([],s,i,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kR(i,s),l=r.targetId;n=new o0(l,o)}}return n}function UR(t,e){let n;if(e instanceof Ea)n={update:ky(t,e.key,e.value)};else if(e instanceof i0)n={delete:_h(t,e.key)};else if(e instanceof Ci)n={update:ky(t,e.key,e.data),updateMask:QR(e.fieldMask)};else{if(!(e instanceof xR))return Y(16599,{dt:e.type});n={verify:_h(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof mu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function BR(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?kn(i.updateTime):kn(s);return o.isEqual(X.min())&&(o=kn(s)),new SR(o,i.transformResults||[])}(n,e))):[]}function zR(t,e){return{documents:[c0(t,e.path)]}}function $R(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=c0(t,i);const s=function(c){if(c.length!==0)return f0(Nn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(p=>function(E){return{field:Vi(E.field),direction:WR(E.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function qR(t){let e=FR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const E=h0(m);return E instanceof Nn&&zE(E)?E.getFilters():[E]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(E=>function(R){return new pu(Ui(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(E))}(n.orderBy));let l=null;n.limit&&(l=function(m){let E;return E=typeof m=="object"?m.value:m,Wu(E)?null:E}(n.limit));let u=null;n.startAt&&(u=function(m){const E=!!m.before,I=m.values||[];return new fu(I,E)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const E=!m.before,I=m.values||[];return new fu(I,E)}(n.endAt)),aR(e,i,o,s,l,"F",u,c)}function HR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function h0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>h0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function WR(t){return DR[t]}function GR(t){return OR[t]}function KR(t){return LR[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return st.fromServerFormat(t.fieldPath)}function f0(t){return t instanceof qe?function(n){if(n.op==="=="){if(my(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NAN"}};if(py(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(my(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NAN"}};if(py(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(n.field),op:GR(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(i=>f0(i));return r.length===1?r[0]:{compositeFilter:{op:KR(n.op),filters:r}}}(t):Y(54877,{filter:t})}function QR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function p0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function m0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r,i,s=X.min(),o=X.min(),l=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.yt=e}}function JR(t){const e=qR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.bn=new ZR}addToCollectionParentIndex(e,n){return this.bn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Fr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class ZR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g0=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(g0,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ss(0)}static ar(){return new Ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="LruGarbageCollector",eP=1048576;function Py([t,e],[n,r]){const i=oe(t,n);return i===0?oe(e,r):i}class tP{constructor(e){this.Pr=e,this.buffer=new We(Py),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Py(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(Ry,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Os(n)?q(Ry,"Ignoring IndexedDB error during garbage collection: ",n):await Ds(n)}await this.Ar(3e5)})}}class rP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Hu.ce);const r=new tP(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(by)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),by):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Mi()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function iP(t,e){return new rP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changes=new Ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Po(r.mutation,i,an.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Jn();const o=Ro(),l=function(){return Ro()}();return n.forEach((u,c)=>{const p=r.get(c.key);i.has(c.key)&&(p===void 0||p.mutation instanceof Ci)?s=s.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),Po(p.mutation,c,p.mutation.getFieldMask(),Te.now())):o.set(c.key,an.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>l.set(c,new oP(p,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ro();let i=new Pe((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||an.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=YE();p.forEach(E=>{if(!s.has(E)){const I=n0(n.get(E),r.get(E));I!==null&&m.set(E,I),s=s.add(E)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return lR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ai());let l=ta,u=s;return o.next(c=>F.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?F.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{u=u.insert(p,E)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ae())).next(p=>({batchId:l,changes:QE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(m,E){return new Ku(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(p=>{p.forEach((m,E)=>{o=o.insert(m,E)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,gt.newInvalidDocument(p)))});let l=mo();return o.forEach((u,c)=>{const p=s.get(u);p!==void 0&&Po(p.mutation,c,an.empty(),Te.now()),Yu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:JR(i.bundledQuery),readTime:kn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.overlays=new Pe(K.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ai();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ai(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=s.get(c.largestBatchId);p===null&&(p=ai(),s=s.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=i)););return F.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CR(n,r));let s=this.Lr.get(n);s===void 0&&(s=ae(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.kr=new We(Je.qr),this.Kr=new We(Je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Je(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new ke([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new K(new ke([])),r=new Je(n,e),i=new Je(n,e+1);let s=ae();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return K.comparator(e.key,n.key)||oe(e.Jr,n.Jr)}static Ur(e,n){return oe(e.Jr,n.Jr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new We(Je.qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Hf:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(oe);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Je(new K(s),0);let l=new We(oe);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return F.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Je(n,0),i=this.Hr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.ti=e,this.docs=function(){return new Pe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Fb(Mb(p),r)<=0||(i.has(p.key)||Yu(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fP(this)}getSize(e){return F.resolve(this.size)}}class fP extends sP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.persistence=e,this.ri=new Ai(n=>Kf(n),Qf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new tp,this.targetCount=0,this.oi=Ss._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this._i={},this.overlays={},this.ai=new Hu(0),this.ui=!1,this.ui=!0,this.ci=new cP,this.referenceDelegate=e(this),this.li=new pP(this),this.indexManager=new XR,this.remoteDocumentCache=function(i){return new hP(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new YR(n),this.Pi=new lP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new dP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new mP(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class mP extends Ub{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Ri=new tp,this.Ai=null}static Vi(e){return new np(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class vu{constructor(e,n){this.persistence=e,this.fi=new Ai(r=>$b(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=iP(this,n)}static Vi(e,n){return new vu(e,n)}Ti(){}Ei(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xl(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return iA()?8:Bb(vt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gP;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Mi()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(Mi()<=se.DEBUG&&q("QueryEngine","Query:",Fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Mi()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):F.resolve())}gs(e,n){if(_y(n))return F.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gh(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,gh(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return _y(n)||i.isEqual(X.min())?F.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?F.resolve(null):(Mi()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fi(n)),this.Ds(e,o,n,jb(i,ta)).next(l=>l))})}Ss(e,n){let r=new We(GE(e));return n.forEach((i,s)=>{Yu(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Mi()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Fi(n)),this.fs.getDocumentsMatchingQuery(e,n,Fr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="LocalStore",vP=3e8;class _P{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Pe(oe),this.Fs=new Ai(s=>Kf(s),Qf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function wP(t,e,n,r){return new _P(t,e,n,r)}async function v0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const c of i){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of s){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function EP(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,E=m.keys();let I=F.resolve();return E.forEach(R=>{I=I.next(()=>p.getEntry(u,R)).next(b=>{const k=c.docVersions.get(R);fe(k!==null,48541),b.version.compareTo(k)<0&&(m.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),p.addEntry(b)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _0(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function SP(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((p,m)=>{const E=i.get(m);if(!E)return;l.push(n.li.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,p.addedDocuments,m)));let I=E.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(lt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,r)),i=i.insert(m,I),function(b,k,A){return b.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=vP?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(E,I,p)&&l.push(n.li.updateTargetData(s,I))});let u=Jn(),c=ae();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(TP(s,o,e.documentUpdates).next(p=>{u=p.Bs,c=p.Ls})),!r.isEqual(X.min())){const p=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function TP(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(ip,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function IP(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xP(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Eh(t,e,n){const r=Z(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Os(o))throw o;q(ip,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Ny(t,e,n){const r=Z(t);let i=X.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=Z(u),E=m.Fs.get(p);return E!==void 0?F.resolve(m.vs.get(E)):m.li.getTargetData(c,p)}(r,o,Cn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ae())).next(l=>(AP(r,dR(e),l),{documents:l,ks:s})))}function AP(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Dy{constructor(){this.activeTargetIds=yR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CP{constructor(){this.vo=new Dy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="ConnectivityMonitor";class Ly{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Oy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(Oy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il=null;function Sh(){return il===null?il=function(){return 268435456+Math.round(2147483648*Math.random())}():il++,"0x"+il.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="RestConnection",bP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class RP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===du?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Sh(),l=this.Qo(e,n.toUriEncodedString());q(td,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),p=ga(c);return this.zo(e,l,u,r,p).then(m=>(q(td,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ei(td,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=bP[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection",ao=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ls extends RP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ls.c_){const e=xE();ao(e,IE.STAT_EVENT,n=>{n.stat===ch.PROXY?q(ft,"STAT_EVENT: detected buffering proxy"):n.stat===ch.NOPROXY&&q(ft,"STAT_EVENT: detected no buffering proxy")}),ls.c_=!0}}zo(e,n,r,i,s){const o=Sh();return new Promise((l,u)=>{const c=new SE;c.setWithCredentials(!0),c.listenOnce(TE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Il.NO_ERROR:const m=c.getResponseJson();q(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Il.TIMEOUT:q(ft,`RPC '${e}' ${o} timed out`),u(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case Il.HTTP_ERROR:const E=c.getStatus();if(q(ft,`RPC '${e}' ${o} failed with status:`,E,"response text:",c.getResponseText()),E>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const b=function(A){const g=A.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(g)>=0?g:V.UNKNOWN}(R.status);u(new G(b,R.message))}else u(new G(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new G(V.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(ft,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);q(ft,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",p,r,15)})}T_(e,n,r){const i=Sh(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");q(ft,`Creating RPC '${e}' stream ${i}: ${c}`,l);const p=o.createWebChannel(c,l);this.E_(p);let m=!1,E=!1;const I=new PP({Jo:R=>{E?q(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(q(ft,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(ft,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Ho:()=>p.close()});return ao(p,po.EventType.OPEN,()=>{E||(q(ft,`RPC '${e}' stream ${i} transport opened.`),I.i_())}),ao(p,po.EventType.CLOSE,()=>{E||(E=!0,q(ft,`RPC '${e}' stream ${i} transport closed`),I.o_(),this.I_(p))}),ao(p,po.EventType.ERROR,R=>{E||(E=!0,Ei(ft,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),I.o_(new G(V.UNAVAILABLE,"The operation could not be completed")))}),ao(p,po.EventType.MESSAGE,R=>{var b;if(!E){const k=R.data[0];fe(!!k,16349);const A=k,g=(A==null?void 0:A.error)||((b=A[0])==null?void 0:b.error);if(g){q(ft,`RPC '${e}' stream ${i} received error:`,g);const v=g.status;let P=function(_){const y=Fe[_];if(y!==void 0)return s0(y)}(v),D=g.message;v==="NOT_FOUND"&&D.includes("database")&&D.includes("does not exist")&&D.includes(this.databaseId.database)&&Ei(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),P===void 0&&(P=V.INTERNAL,D="Unknown error status: "+v+" with message "+g.message),E=!0,I.o_(new G(P,D)),p.close()}else q(ft,`RPC '${e}' stream ${i} received:`,k),I.__(k)}}),ls.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return AE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){return new ls(t)}function nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return new jR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls.c_=!1;class w0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="PersistentStream";class E0{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new w0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DP extends E0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=VR(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?kn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=wh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=mh(u)?{documents:zR(s,u)}:{query:$R(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=l0(s,o.resumeToken);const c=yh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=yu(s,o.snapshotVersion.toTimestamp());const c=yh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=HR(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=wh(this.serializer),n.removeTarget=e,this.q_(n)}}class OP extends E0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=BR(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=wh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UR(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{}class jP extends LP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,vh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,vh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function MP(t,e,n,r){return new jP(t,e,n,r)}class FP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yn(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="RemoteStore";class VP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ki(this)&&(q(Si,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.Ia.add(4),await Ta(c),c.Va.set("Unknown"),c.Ia.delete(4),await tc(c)}(this))})}),this.Va=new FP(r,i)}}async function tc(t){if(ki(t))for(const e of t.Ra)await e(!0)}async function Ta(t){for(const e of t.Ra)await e(!1)}function S0(t,e){const n=Z(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),lp(n)?ap(n):Ls(n).O_()&&op(n,e))}function sp(t,e){const n=Z(t),r=Ls(n);n.Ea.delete(e),r.O_()&&T0(n,e),n.Ea.size===0&&(r.O_()?r.L_():ki(n)&&n.Va.set("Unknown"))}function op(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).Z_(e)}function T0(t,e){t.da.$e(e),Ls(t).X_(e)}function ap(t){t.da=new NR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.Va.ua()}function lp(t){return ki(t)&&!Ls(t).x_()&&t.Ea.size>0}function ki(t){return Z(t).Ia.size===0}function I0(t){t.da=void 0}async function UP(t){t.Va.set("Online")}async function BP(t){t.Ea.forEach((e,n)=>{op(t,e)})}async function zP(t,e){I0(t),lp(t)?(t.Va.ha(e),ap(t)):t.Va.set("Unknown")}async function $P(t,e,n){if(t.Va.set("Online"),e instanceof a0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){q(Si,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _u(t,r)}else if(e instanceof kl?t.da.Xe(e):e instanceof o0?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await _0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ea.get(c);p&&s.Ea.set(c,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const p=s.Ea.get(u);if(!p)return;s.Ea.set(u,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),T0(s,u);const m=new Er(p.target,u,c,p.sequenceNumber);op(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(Si,"Failed to raise snapshot:",r),await _u(t,r)}}async function _u(t,e,n){if(!Os(e))throw e;t.Ia.add(1),await Ta(t),t.Va.set("Offline"),n||(n=()=>_0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Si,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await tc(t)})}function x0(t,e){return e().catch(n=>_u(t,n,e))}async function nc(t){const e=Z(t),n=zr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hf;for(;qP(e);)try{const i=await IP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,HP(e,i)}catch(i){await _u(e,i)}A0(e)&&C0(e)}function qP(t){return ki(t)&&t.Ta.length<10}function HP(t,e){t.Ta.push(e);const n=zr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function A0(t){return ki(t)&&!zr(t).x_()&&t.Ta.length>0}function C0(t){zr(t).start()}async function WP(t){zr(t).ra()}async function GP(t){const e=zr(t);for(const n of t.Ta)e.ea(n.mutations)}async function KP(t,e,n){const r=t.Ta.shift(),i=Xf.from(r,e,n);await x0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nc(t)}async function QP(t,e){e&&zr(t).Y_&&await async function(r,i){if(function(o){return bR(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();zr(r).B_(),await x0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nc(r)}}(t,e),A0(t)&&C0(t)}async function My(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q(Si,"RemoteStore received new credentials");const r=ki(n);n.Ia.add(3),await Ta(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await tc(n)}async function YP(t,e){const n=Z(t);e?(n.Ia.delete(2),await tc(n)):e||(n.Ia.add(2),await Ta(n),n.Va.set("Unknown"))}function Ls(t){return t.ma||(t.ma=function(n,r,i){const s=Z(n);return s.sa(),new DP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:UP.bind(null,t),Yo:BP.bind(null,t),t_:zP.bind(null,t),H_:$P.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),lp(t)?ap(t):t.Va.set("Unknown")):(await t.ma.stop(),I0(t))})),t.ma}function zr(t){return t.fa||(t.fa=function(n,r,i){const s=Z(n);return s.sa(),new OP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:WP.bind(null,t),t_:QP.bind(null,t),ta:GP.bind(null,t),na:KP.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await nc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Si,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new up(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Os(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static emptySet(e){return new us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.ga=new Pe(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ts{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ts(e,n,us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class XP{constructor(){this.queries=Vy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Vy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function Vy(){return new Ai(t=>WE(t),Qu)}async function ZP(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new JP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=cp(o,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&dp(n)}async function eN(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tN(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&dp(n)}function nN(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function dp(t){t.Ca.forEach(e=>{e.next()})}var Th,Uy;(Uy=Th||(Th={})).Ma="default",Uy.Cache="cache";class rN{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Th.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.key=e}}class b0{constructor(e){this.key=e}}class iN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ae(),this.mutatedKeys=ae(),this.eu=GE(e),this.tu=new us(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Fy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const E=i.get(p),I=Yu(this.query,m)?m:null,R=!!E&&this.mutatedKeys.has(E.key),b=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let k=!1;E&&I?E.data.isEqual(I.data)?R!==b&&(r.track({type:3,doc:I}),k=!0):this.su(E,I)||(r.track({type:2,doc:I}),k=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!E&&I?(r.track({type:0,doc:I}),k=!0):E&&!I&&(r.track({type:1,doc:E}),k=!0,(u||c)&&(l=!0)),k&&(I?(o=o.add(I),s=b?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(I,R){const b=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:k})}};return b(I)-b(R)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Ts(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ae(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new b0(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new k0(r))}),n}cu(e){this.Za=e.ks,this.Ya=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const hp="SyncEngine";class sN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oN{constructor(e){this.key=e,this.hu=!1}}class aN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ai(l=>WE(l),Qu),this.Eu=new Map,this.Iu=new Set,this.Ru=new Pe(K.comparator),this.Au=new Map,this.Vu=new tp,this.du={},this.mu=new Map,this.fu=Ss.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lN(t,e,n=!0){const r=L0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await R0(r,e,n,!0),i}async function uN(t,e){const n=L0(t);await R0(n,e,!0,!1)}async function R0(t,e,n,r){const i=await xP(t.localStore,Cn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await cN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&S0(t.remoteStore,i),l}async function cN(t,e,n,r,i){t.pu=(m,E,I)=>async function(b,k,A,g){let v=k.view.ru(A);v.bs&&(v=await Ny(b.localStore,k.query,!1).then(({documents:_})=>k.view.ru(_,v)));const P=g&&g.targetChanges.get(k.targetId),D=g&&g.targetMismatches.get(k.targetId)!=null,L=k.view.applyChanges(v,b.isPrimaryClient,P,D);return zy(b,k.targetId,L.au),L.snapshot}(t,m,E,I);const s=await Ny(t.localStore,e,!0),o=new iN(e,s.ks),l=o.ru(s.documents),u=Sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);zy(t,n,c.au);const p=new sN(e,n,o);return t.Tu.set(e,p),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function dN(t,e,n){const r=Z(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Qu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Eh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sp(r.remoteStore,i.targetId),Ih(r,i.targetId)}).catch(Ds)):(Ih(r,i.targetId),await Eh(r.localStore,i.targetId,!0))}async function hN(t,e){const n=Z(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function fN(t,e,n){const r=wN(t);try{const i=await function(o,l){const u=Z(o),c=Te.now(),p=l.reduce((I,R)=>I.add(R.key),ae());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Jn(),b=ae();return u.xs.getEntries(I,p).next(k=>{R=k,R.forEach((A,g)=>{g.isValidDocument()||(b=b.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(k=>{m=k;const A=[];for(const g of l){const v=IR(g,m.get(g.key).overlayedDocument);v!=null&&A.push(new Ci(g.key,v,VE(v.value.mapValue),$n.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,A,l)}).next(k=>{E=k;const A=k.applyToLocalDocumentSet(m,b);return u.documentOverlayCache.saveOverlays(I,k.batchId,A)})}).then(()=>({batchId:E.batchId,changes:QE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Pe(oe)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ia(r,i.changes),await nc(r.remoteStore)}catch(i){const s=cp(i,"Failed to persist write");n.reject(s)}}async function P0(t,e){const n=Z(t);try{const r=await SP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?fe(o.hu,14607):i.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))}),await Ia(n,r,e)}catch(r){await Ds(r)}}function By(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const E of m.Sa)E.va(l)&&(c=!0)}),c&&dp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pN(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Pe(K.comparator);o=o.insert(s,gt.newNoDocument(s,X.min()));const l=ae().add(s),u=new Zu(X.min(),new Map,new Pe(oe),o,l);await P0(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),fp(r)}else await Eh(r.localStore,e,!1).then(()=>Ih(r,e,n)).catch(Ds)}async function mN(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await EP(n.localStore,e);D0(n,r,null),N0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ia(n,i)}catch(i){await Ds(i)}}async function gN(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(fe(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);D0(r,e,n),N0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ia(r,i)}catch(i){await Ds(i)}}function N0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function D0(t,e,n){const r=Z(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||O0(t,r)})}function O0(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(sp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),fp(t))}function zy(t,e,n){for(const r of n)r instanceof k0?(t.Vu.addReference(r.key,e),yN(t,r)):r instanceof b0?(q(hp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||O0(t,r.key)):Y(19791,{wu:r})}function yN(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(q(hp,"New document in limbo: "+n),t.Iu.add(r),fp(t))}function fp(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(ke.fromString(e)),r=t.fu.next();t.Au.set(r,new oN(n)),t.Ru=t.Ru.insert(n,r),S0(t.remoteStore,new Er(Cn(Yf(n.path)),r,"TargetPurposeLimboResolution",Hu.ce))}}async function Ia(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=rp.Is(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const p=Z(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,E=>F.forEach(E.Ts,I=>p.persistence.referenceDelegate.addReference(m,E.targetId,I)).next(()=>F.forEach(E.Es,I=>p.persistence.referenceDelegate.removeReference(m,E.targetId,I)))))}catch(m){if(!Os(m))throw m;q(ip,"Failed to update sequence numbers: "+m)}for(const m of c){const E=m.targetId;if(!m.fromCache){const I=p.vs.get(E),R=I.snapshotVersion,b=I.withLastLimboFreeSnapshotVersion(R);p.vs=p.vs.insert(E,b)}}}(r.localStore,s))}async function vN(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q(hp,"User change. New user:",e.toKey());const r=await v0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ia(n,r.Ns)}}function _N(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let i=ae();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function L0(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=P0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_N.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pN.bind(null,e),e.Pu.H_=tN.bind(null,e.eventManager),e.Pu.yu=nN.bind(null,e.eventManager),e}function wN(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gN.bind(null,e),e}class wu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return wP(this.persistence,new yP,e.initialUser,this.serializer)}Cu(e){return new y0(np.Vi,this.serializer)}Du(e){return new CP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wu.provider={build:()=>new wu};class EN extends wu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){fe(this.persistence.referenceDelegate instanceof vu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new y0(r=>vu.Vi(r,n),this.serializer)}}class xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>By(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vN.bind(null,this.syncEngine),await YP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XP}()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=NP(e.databaseInfo);return MP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new VP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>By(this.syncEngine,n,0),function(){return Ly.v()?new Ly:new kP}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,p){const m=new aN(i,s,o,l,u,c);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q(Si,"RemoteStore shutting down."),s.Ia.add(5),await Ta(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}xh.provider={build:()=>new xh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="FirestoreClient";class TN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=$f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q($r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q($r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rd(t,e){t.asyncQueue.verifyOperationInProgress(),q($r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await v0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $y(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IN(t);q($r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>My(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>My(e.remoteStore,i)),t._onlineComponents=e}async function IN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q($r,"Using user provided OfflineComponentProvider");try{await rd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ei("Error using user provided cache. Falling back to memory cache: "+n),await rd(t,new wu)}}else q($r,"Using default OfflineComponentProvider"),await rd(t,new EN(void 0));return t._offlineComponents}async function j0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q($r,"Using user provided OnlineComponentProvider"),await $y(t,t._uninitializedComponentsProvider._online)):(q($r,"Using default OnlineComponentProvider"),await $y(t,new xh))),t._onlineComponents}function xN(t){return j0(t).then(e=>e.syncEngine)}async function AN(t){const e=await j0(t),n=e.eventManager;return n.onListen=lN.bind(null,e.syncEngine),n.onUnlisten=dN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hN.bind(null,e.syncEngine),n}function CN(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const p=new SN({next:E=>{p.Nu(),o.enqueueAndForget(()=>eN(s,m));const I=E.docs.has(l);!I&&E.fromCache?c.reject(new G(V.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&E.fromCache&&u&&u.source==="server"?c.reject(new G(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(E)},error:E=>c.reject(E)}),m=new rN(Yf(l.path),p,{includeMetadataChanges:!0,qa:!0});return ZP(s,m)}(await AN(t),t.asyncQueue,e,n,r)),r.promise}function kN(t,e){const n=new Lr;return t.asyncQueue.enqueueAndForget(async()=>fN(await xN(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="ComponentProvider",qy=new Map;function RN(t,e,n,r,i){return new Wb(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,M0(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="firestore.googleapis.com",Hy=!0;class Wy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F0,this.ssl=Hy}else this.host=e.host,this.ssl=e.ssl??Hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=g0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eP)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=M0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ib;switch(r.type){case"firstParty":return new kb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qy.get(n);r&&(q(bN,"Removing Datastore"),qy.delete(n),r.terminate())}(this),Promise.resolve()}}function PN(t,e,n,r={}){var c;t=ea(t,pp);const i=ga(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Mw(`https://${l}`),s.host!==F0&&s.host!==l&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!yi(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=pt.MOCK_USER;else{p=J1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new pt(E)}t._authCredentials=new xb(new kE(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mp(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wa(n,Ze._jsonSchema))return new Ze(e,r||null,new K(ke.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Ue("string",Ze._jsonSchemaVersion),referencePath:Ue("string")};class aa extends mp{constructor(e,n,r){super(e,n,Yf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new K(e))}withConverter(e){return new aa(this.firestore,e,this._path)}}function Ah(t,e,...n){if(t=fn(t),arguments.length===1&&(e=$f.newId()),Ob("doc","path",e),t instanceof pp){const r=ke.fromString(e,...n);return oy(r),new Ze(t,null,new K(r))}{if(!(t instanceof Ze||t instanceof aa))throw new G(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return oy(r),new Ze(t.firestore,t instanceof aa?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="AsyncQueue";class Ky{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new w0(this,"async_queue_retry"),this._c=()=>{const r=nd();r&&q(Gy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=nd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Lr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Os(e))throw e;q(Gy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Yn("INTERNAL UNHANDLED ERROR: ",Qy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=up.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Y(47125,{Pc:Qy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gp extends pp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ky,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ky(e),this._firestoreClient=void 0,await e}}}function NN(t,e){const n=typeof t=="object"?t:Bw(),r=typeof t=="string"?t:du,i=Pf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Q1("firestore");s&&PN(i,...s)}return i}function V0(t){if(t._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DN(t),t._firestoreClient}function DN(t){var r,i,s,o;const e=t._freezeSettings(),n=RN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new TN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wt(lt.fromBase64String(e))}catch(n){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wa(e,Wt._jsonSchema))return Wt.fromBase64String(e.bytes)}}Wt._jsonSchemaVersion="firestore/bytes/1.0",Wt._jsonSchema={type:Ue("string",Wt._jsonSchemaVersion),bytes:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(wa(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:Ue("string",bn._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wa(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new dn(e.vectorValues);throw new G(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Ue("string",dn._jsonSchemaVersion),vectorValues:Ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=/^__.*__$/;class LN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}function z0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class yp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new yp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Eu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(z0(this.dataSource)&&ON.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class jN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}A(e,n,r,i=!1){return new yp({dataSource:e,methodName:n,targetDoc:r,path:st.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function MN(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new jN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FN(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);W0("Data must be an object, but it was:",o,r);const l=q0(r,o);let u,c;if(s.merge)u=new an(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const E=vp(e,m,n);if(!o.contains(E))throw new G(V.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);BN(p,E)||p.push(E)}u=new an(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new LN(new Ht(l),u,c)}function $0(t,e){if(H0(t=fn(t)))return W0("Unsupported field value:",e,t),q0(t,e);if(t instanceof B0)return function(r,i){if(!z0(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=$0(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=fn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:yu(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yu(i.serializer,s)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wt)return{bytesValue:l0(i.serializer,r._byteString)};if(r instanceof Ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ep(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dn)return function(o,l){const u=o instanceof dn?o.toArray():o;return{mapValue:{fields:{[ME]:{stringValue:FE},[hu]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.yc("VectorValues must only contain numeric values.");return Jf(l.serializer,p)})}}}}}}(r,i);if(m0(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${qf(r)}`)}(t,e)}function q0(t,e){const n={};return PE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=$0(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function H0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof bn||t instanceof Wt||t instanceof Ze||t instanceof B0||t instanceof dn||m0(t))}function W0(t,e,n){if(!H0(n)||!bE(n)){const r=qf(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function vp(t,e,n){if((e=fn(e))instanceof U0)return e._internalPath;if(typeof e=="string")return UN(t,e);throw Eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const VN=new RegExp("[~\\*/\\[\\]]");function UN(t,e,n){if(e.search(VN)>=0)throw Eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new U0(...e.split("."))._internalPath}catch{throw Eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(V.INVALID_ARGUMENT,l+t+u)}function BN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[hu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Le(o.doubleValue));return new dn(n)}convertGeoPoint(e){return new bn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);fe(p0(r),9688,{name:e});const i=new ra(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N extends zN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}const Yy="@firebase/firestore",Jy="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qN extends G0{data(){return super.data()}}function HN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class di extends G0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=di._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}di._jsonSchemaVersion="firestore/documentSnapshot/1.0",di._jsonSchema={type:Ue("string",di._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class bl extends di{data(e={}){return super.data(e)}}class No{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:WN(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=No._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */No._jsonSchemaVersion="firestore/querySnapshot/1.0",No._jsonSchema={type:Ue("string",No._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){t=ea(t,Ze);const e=ea(t.firestore,gp),n=V0(e);return CN(n,t._key).then(r=>KN(e,t,r))}function Q0(t,e,n){t=ea(t,Ze);const r=ea(t.firestore,gp),i=HN(t.converter,e,n),s=MN(r);return GN(r,[FN(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$n.none())])}function GN(t,e){const n=V0(t);return kN(n,e)}function KN(t,e,n){const r=n.docs.get(e._key),i=new $N(t);return new di(t,i,e._key,r,new yo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Tb(Rs),ys(new vi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gp(new Ab(r.getProvider("auth-internal")),new bb(o,r.getProvider("app-check-internal")),Gb(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dr(Yy,Jy,e),Dr(Yy,Jy,"esm2020")})();const QN={apiKey:"AIzaSyC4GQY0xwta4uIl7om6PLgPOYnLLpsxnOE",authDomain:"learnplus-auth.firebaseapp.com",projectId:"learnplus-auth",storageBucket:"learnplus-auth.firebasestorage.app",messagingSenderId:"697074337199",appId:"1:697074337199:web:f4e6450205e7021feddb5a",measurementId:"G-Y0MFP4ZGN5"},Y0=Uw(QN),_p=Eb(Y0),Ch=NN(Y0),YN=new jn;new Mn;function JN({children:t}){const[e,n]=M.useState(null),[r,i]=M.useState(!0);return M.useEffect(()=>{const s=uE(_p,o=>{n(o),i(!1)});return()=>s()},[]),r?h.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#0a0a0a",color:"#fff"},children:h.jsx("h2",{children:"LOADING..."})}):e?t:h.jsx(kw,{to:"/login",replace:!0})}const la=[{id:"web-dev",title:"Web Development Full Course",slug:"web-development",description:"Learn HTML, CSS, and JavaScript from scratch. Build responsive websites with curated YouTube tutorials.",thumbnail:"https://img.youtube.com/vi/ysEN5RaKOlA/maxresdefault.jpg",category:"Web Development",duration:"12h",lessonsCount:12,level:"Beginner",modules:[{id:"m1",title:"HTML Fundamentals",lessons:[{id:"m1-l1",title:"HTML Introduction & Setup",videoId:"qz0aGYrrlhU",duration:"12:00"},{id:"m1-l2",title:"Headings, Paragraphs & Text",videoId:"pQN-pnXPaVg",duration:"15:00"},{id:"m1-l3",title:"Links, Images & Lists",videoId:"kUMe1FH4CHE",duration:"18:00"}]},{id:"m2",title:"CSS Styling",lessons:[{id:"m2-l1",title:"CSS Basics & Selectors",videoId:"1Rs2ND1ryYc",duration:"8:00"},{id:"m2-l2",title:"Flexbox Layout",videoId:"JJSoEo8JSnc",duration:"20:00"},{id:"m2-l3",title:"Responsive Design",videoId:"srvUrASNj0s",duration:"22:00"}]},{id:"m3",title:"JavaScript Basics",lessons:[{id:"m3-l1",title:"JavaScript Introduction",videoId:"PkZNo7MFNFg",duration:"3:00"},{id:"m3-l2",title:"Variables & Data Types",videoId:"W6NZfCO5SIk",duration:"35:00"},{id:"m3-l3",title:"Functions & DOM",videoId:"hdI2bqOjy3c",duration:"33:00"}]}]},{id:"react-course",title:"React.js Full Course",slug:"react-js",description:"Master React from basics to hooks. Build modern UIs with components and state management.",thumbnail:"https://img.youtube.com/vi/dGcsHMXbSOA/maxresdefault.jpg",category:"Programming",duration:"8h",lessonsCount:9,level:"Intermediate",modules:[{id:"r1",title:"React Setup & JSX",lessons:[{id:"r1-l1",title:"React in 100 Seconds",videoId:"Tn6-PIqc4UM",duration:"2:00"},{id:"r1-l2",title:"Create React App & First Component",videoId:"dGcsHMXbSOA",duration:"5:00"},{id:"r1-l3",title:"JSX & Props",videoId:"SqcY0GlETpg",duration:"15:00"}]},{id:"r2",title:"State & Hooks",lessons:[{id:"r2-l1",title:"useState Hook",videoId:"O6P86uwfdR0",duration:"18:00"},{id:"r2-l2",title:"useEffect & Data Fetching",videoId:"dGcsHMXbSOA",duration:"10:00"},{id:"r2-l3",title:"Custom Hooks",videoId:"6ThXsUwLWvc",duration:"20:00"}]}]},{id:"python-basics",title:"Python for Beginners",slug:"python-beginners",description:"Learn Python programming with hands-on examples. Variables, loops, functions, and more.",thumbnail:"https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",category:"Programming",duration:"6h",lessonsCount:8,level:"Beginner",modules:[{id:"p1",title:"Getting Started",lessons:[{id:"p1-l1",title:"Python Installation",videoId:"_uQrJ0TkZlc",duration:"5:00"},{id:"p1-l2",title:"Variables & Input",videoId:"JeznW_7DlB0",duration:"25:00"},{id:"p1-l3",title:"Conditionals & Loops",videoId:"JeznW_7DlB0",duration:"15:00"}]},{id:"p2",title:"Functions & Data",lessons:[{id:"p2-l1",title:"Functions in Python",videoId:"pQN-pnXPaVg",duration:"20:00"},{id:"p2-l2",title:"Lists and Dictionaries",videoId:"Jn3Mh0pENRA",duration:"18:00"}]}]},{id:"git-github",title:"Git & GitHub Complete Guide",slug:"git-github",description:"Version control with Git. Commit, branch, merge, and collaborate on GitHub.",thumbnail:"https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg",category:"Web Development",duration:"4h",lessonsCount:6,level:"Beginner",modules:[{id:"g1",title:"Git Basics",lessons:[{id:"g1-l1",title:"What is Git?",videoId:"RGOj5yH7evk",duration:"2:00"},{id:"g1-l2",title:"Install & First Commit",videoId:"HVsySz-h9r4",duration:"40:00"},{id:"g1-l3",title:"Branching & Merging",videoId:"e2bL3VSWkGA",duration:"15:00"}]}]},{id:"dsa-course",title:"Data Structures & Algorithms",slug:"data-structures-algorithms",description:"Master core data structures and algorithms for interviews: arrays, linked lists, recursion, sorting and searching.",thumbnail:"https://img.youtube.com/vi/8hly31xKli0/maxresdefault.jpg",category:"Programming",duration:"5h 30m",lessonsCount:9,level:"Intermediate",modules:[{id:"d1",title:"Arrays & Complexity",lessons:[{id:"d1-l1",title:"Intro to Algorithms & Big-O",videoId:"8hly31xKli0",duration:"25:00"},{id:"d1-l2",title:"Arrays & Dynamic Arrays",videoId:"8hly31xKli0",duration:"35:00"},{id:"d1-l3",title:"Searching Arrays",videoId:"8hly31xKli0",duration:"30:00"}]},{id:"d2",title:"Linked Lists, Stacks & Queues",lessons:[{id:"d2-l1",title:"Singly & Doubly Linked Lists",videoId:"8hly31xKli0",duration:"35:00"},{id:"d2-l2",title:"Stacks & Queues",videoId:"8hly31xKli0",duration:"25:00"},{id:"d2-l3",title:"Balanced Parentheses Problem",videoId:"8hly31xKli0",duration:"20:00"}]},{id:"d3",title:"Recursion, Sorting & Searching",lessons:[{id:"d3-l1",title:"Recursion Basics",videoId:"8hly31xKli0",duration:"25:00"},{id:"d3-l2",title:"Merge Sort & Quick Sort",videoId:"8hly31xKli0",duration:"30:00"},{id:"d3-l3",title:"Binary Search Patterns",videoId:"8hly31xKli0",duration:"25:00"}]}]},{id:"sql-course",title:"SQL & Databases",slug:"sql-databases",description:"Learn SQL from scratch: create tables, write queries, join tables, and aggregate data for real-world apps.",thumbnail:"https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg",category:"Databases",duration:"4h",lessonsCount:9,level:"Beginner to Intermediate",modules:[{id:"s1",title:"SQL Basics & SELECT",lessons:[{id:"s1-l1",title:"Intro to SQL & Installing a Database",videoId:"HXV3zeQKqGY",duration:"20:00"},{id:"s1-l2",title:"Creating Tables & Inserting Rows",videoId:"HXV3zeQKqGY",duration:"25:00"},{id:"s1-l3",title:"Basic SELECT Queries",videoId:"HXV3zeQKqGY",duration:"25:00"}]},{id:"s2",title:"Filtering, Sorting & Functions",lessons:[{id:"s2-l1",title:"Filtering Data with WHERE",videoId:"HXV3zeQKqGY",duration:"30:00"},{id:"s2-l2",title:"ORDER BY, LIMIT & Pagination",videoId:"HXV3zeQKqGY",duration:"20:00"},{id:"s2-l3",title:"Aggregate Functions (COUNT, SUM, AVG)",videoId:"HXV3zeQKqGY",duration:"25:00"}]},{id:"s3",title:"Joins & Grouping",lessons:[{id:"s3-l1",title:"INNER JOIN for Related Tables",videoId:"HXV3zeQKqGY",duration:"25:00"},{id:"s3-l2",title:"LEFT / RIGHT JOIN & NULL Handling",videoId:"HXV3zeQKqGY",duration:"25:00"},{id:"s3-l3",title:"GROUP BY, HAVING & Common Patterns",videoId:"HXV3zeQKqGY",duration:"30:00"}]}]},{id:"speaking-class",title:"English Speaking Class",slug:"speaking-class",description:"Improve your English speaking and communication skills. Learn vocabulary, pronunciation, and fluency.",thumbnail:"https://img.youtube.com/vi/eIho2S0ZahI/maxresdefault.jpg",category:"Bonus",duration:"4h",lessonsCount:3,level:"All Levels",modules:[{id:"sp1",title:"Basic Communication",lessons:[{id:"sp1-l1",title:"Everyday Vocabulary",videoId:"eIho2S0ZahI",duration:"45:00"},{id:"sp1-l2",title:"Pronunciation Rules",videoId:"eIho2S0ZahI",duration:"35:00"},{id:"sp1-l3",title:"Public Speaking Tips",videoId:"eIho2S0ZahI",duration:"50:00"}]}]},{id:"writing-class",title:"Professional Writing Class",slug:"writing-class",description:"Master the art of writing emails, essays, and professional documents with clarity.",thumbnail:"https://img.youtube.com/vi/Nj-hdQMa3uA/maxresdefault.jpg",category:"Bonus",duration:"3h",lessonsCount:3,level:"Beginner",modules:[{id:"wr1",title:"Writing Fundamentals",lessons:[{id:"wr1-l1",title:"Grammar Essentials",videoId:"Nj-hdQMa3uA",duration:"30:00"},{id:"wr1-l2",title:"Structuring Essays",videoId:"Nj-hdQMa3uA",duration:"40:00"},{id:"wr1-l3",title:"Business Emails",videoId:"Nj-hdQMa3uA",duration:"25:00"}]}]},{id:"aptitude-class",title:"General Aptitude Class",slug:"aptitude-class",description:"Learn logical reasoning, quantitative basics, and problem-solving techniques for interviews.",thumbnail:"https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2000&auto=format&fit=crop",category:"Bonus",duration:"15h",lessonsCount:9,level:"Intermediate",modules:[{id:"ap1",title:"Quantitative Aptitude 1",lessons:[{id:"ap1-l1",title:"Number System & Algebra",videoId:"5rT8-L5J5-o",duration:"40:00"},{id:"ap1-l2",title:"Percentages & Ratios",videoId:"kYJvM7u-vE0",duration:"60:00"},{id:"ap1-l3",title:"Time, Distance & Work",videoId:"33K8mY22u60",duration:"45:00"}]},{id:"ap2",title:"Quantitative Aptitude 2",lessons:[{id:"ap2-l1",title:"Simple & Compound Interest",videoId:"lBv9yJ6Vf3g",duration:"50:00"},{id:"ap2-l2",title:"Profit, Loss & Discount",videoId:"5rT8-L5J5-o",duration:"55:00"},{id:"ap2-l3",title:"Permutation & Combination",videoId:"33K8mY22u60",duration:"40:00"}]},{id:"ap3",title:"Logical Reasoning",lessons:[{id:"ap3-l1",title:"Syllogism",videoId:"33K8mY22u60",duration:"45:00"},{id:"ap3-l2",title:"Blood Relations",videoId:"kYJvM7u-vE0",duration:"35:00"},{id:"ap3-l3",title:"Number Series",videoId:"5rT8-L5J5-o",duration:"40:00"}]}]},{id:"qr-class",title:"Quantitative Reasoning (QR) Class",slug:"qr-class",description:"Advanced quantitative reasoning, data interpretation, and speed math for competitive exams.",thumbnail:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop",category:"Bonus",duration:"6h",lessonsCount:3,level:"Advanced",modules:[{id:"qr1",title:"Advanced QR",lessons:[{id:"qr1-l1",title:"Data Interpretation",videoId:"5rT8-L5J5-o",duration:"55:00"},{id:"qr1-l2",title:"Probability & Combinatorics",videoId:"33K8mY22u60",duration:"40:00"},{id:"qr1-l3",title:"Speed Math Techniques",videoId:"kYJvM7u-vE0",duration:"35:00"}]}]},{id:"pe-course",title:"Prompt Engineering Masterclass",slug:"prompt-engineering",description:"Learn how to write effective prompts for LLMs like ChatGPT and Claude.",thumbnail:"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",category:"Artificial Intelligence",duration:"2h",lessonsCount:3,level:"All Levels",modules:[{id:"pe1",title:"Prompting Basics",lessons:[{id:"pe1-l1",title:"Introduction to LLMs",videoId:"jC4v5AS4RIM",duration:"20:00"},{id:"pe1-l2",title:"Zero-shot and Few-shot",videoId:"zjkBMFAmP-0",duration:"25:00"},{id:"pe1-l3",title:"Chain of Thought",videoId:"zjkBMFAmP-0",duration:"30:00"}]}]},{id:"ai-ml-course",title:"Artificial Intelligence & Machine Learning",slug:"ai-ml",description:"Discover the fundamentals of AI, Neural Networks, and Machine Learning algorithms.",thumbnail:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop",category:"Artificial Intelligence",duration:"20h",lessonsCount:9,level:"Intermediate",modules:[{id:"ai1",title:"AI Foundations",lessons:[{id:"ai1-l1",title:"What is AI?",videoId:"ad79nYk2keg",duration:"30:00"},{id:"ai1-l2",title:"Python for AI",videoId:"cKxRvEZd3Kg",duration:"60:00"},{id:"ai1-l3",title:"Math Basics for ML",videoId:"ad79nYk2keg",duration:"55:00"}]},{id:"ai2",title:"Supervised Learning",lessons:[{id:"ai2-l1",title:"Linear Regression",videoId:"cKxRvEZd3Kg",duration:"45:00"},{id:"ai2-l2",title:"Logistic Regression",videoId:"cKxRvEZd3Kg",duration:"50:00"},{id:"ai2-l3",title:"Decision Trees",videoId:"cKxRvEZd3Kg",duration:"55:00"}]},{id:"ai3",title:"Unsupervised & Deep Learning",lessons:[{id:"ai3-l1",title:"Clustering",videoId:"JcI5Vnw0b2c",duration:"40:00"},{id:"ai3-l2",title:"Neural Networks Intro",videoId:"JcI5Vnw0b2c",duration:"60:00"},{id:"ai3-l3",title:"Deep Learning Frameworks",videoId:"JcI5Vnw0b2c",duration:"60:00"}]}]},{id:"mongodb-course",title:"MongoDB Complete Course",slug:"mongodb",description:"Master NoSQL databases, CRUD operations, and aggregation pipelines with MongoDB.",thumbnail:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",category:"Databases",duration:"15h",lessonsCount:9,level:"Beginner",modules:[{id:"mo1",title:"MongoDB Basics",lessons:[{id:"mo1-l1",title:"Intro to NoSQL",videoId:"ofme2o29ngU",duration:"30:00"},{id:"mo1-l2",title:"Installation & Setup",videoId:"-56x56UppqQ",duration:"25:00"},{id:"mo1-l3",title:"Document Data Model",videoId:"ofme2o29ngU",duration:"40:00"}]},{id:"mo2",title:"CRUD Operations",lessons:[{id:"mo2-l1",title:"Insert & Find",videoId:"-56x56UppqQ",duration:"45:00"},{id:"mo2-l2",title:"Update & Delete",videoId:"-56x56UppqQ",duration:"35:00"},{id:"mo2-l3",title:"Query Operators",videoId:"ofme2o29ngU",duration:"50:00"}]},{id:"mo3",title:"Advanced Topics",lessons:[{id:"mo3-l1",title:"Aggregation Pipeline",videoId:"pWbMrx5rVBE",duration:"60:00"},{id:"mo3-l2",title:"Indexing for Performance",videoId:"pWbMrx5rVBE",duration:"45:00"},{id:"mo3-l3",title:"Data Modeling Best Practices",videoId:"pWbMrx5rVBE",duration:"55:00"}]}]}],rc=t=>la.find(e=>e.slug===t),XN=(t,e)=>{const n=rc(t);if(!n)return null;for(const r of n.modules){const i=r.lessons.find(s=>s.id===e);if(i)return{course:n,module:r,lesson:i}}return null},J0=t=>{const e=[];return t.modules.forEach(n=>{n.lessons.forEach(r=>e.push({...r,moduleTitle:n.title}))}),e},ZN=[{value:"150+",label:"Million downloads"},{value:"4.7+",label:"Star app rating"},{value:"1700+",label:"Cities worldwide"},{value:"71 mins",label:"Avg. time spent daily"}],e2=[{title:"Conceptual clarity through visualisation",desc:"Learn with video lessons and interactive content that make concepts stick."},{title:"Personalised learning programs",desc:"Structured courses for every level – from basics to competitive exams."},{title:"Unmatched individual attention",desc:"Practice with quizzes, doubt chat and code playground built for you."}],t2=[{quote:"The best app for my daughter to strengthen her basics. She loves the video lessons.",author:"Parent",location:"Bangalore"},{quote:"My son understands concepts better with the structured courses and practice.",author:"Parent",location:"Kolkata"},{quote:"Helped me balance my studies and stay confident. Highly recommend.",author:"Student",location:"Mumbai"}];function n2(){const t=la.slice(0,6),[e,n]=M.useState(0);return M.useEffect(()=>{const r=new Date().toDateString(),i=new Date(Date.now()-864e5).toDateString(),s=localStorage.getItem("learnplus_last_visit");let o=parseInt(localStorage.getItem("learnplus_streak")||"0",10);s===r?n(o):s===i?(o+=1,n(o),localStorage.setItem("learnplus_streak",o.toString()),localStorage.setItem("learnplus_last_visit",r)):(o=1,n(o),localStorage.setItem("learnplus_streak",o.toString()),localStorage.setItem("learnplus_last_visit",r))},[]),h.jsxs("div",{className:"home byjus-style",children:[h.jsx("section",{className:"hero-byjus",style:{position:"relative"},children:h.jsxs("div",{className:"container",style:{position:"relative"},children:[e>0&&h.jsxs("div",{className:"streak-widget",style:{position:"absolute",top:"-1rem",right:"1rem",background:"linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",color:"#d10020",padding:"0.5rem 1rem",borderRadius:"20px",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:"bold",boxShadow:"0 4px 15px rgba(255, 154, 158, 0.4)",transform:"translateY(-50%)",animation:"bounce 2s infinite"},children:[h.jsx(E1,{size:20,fill:"#d10020"}),h.jsxs("span",{children:[e," Day Streak!"]})]}),h.jsx("h1",{className:"hero-byjus-title",children:"Book your Free Session"}),h.jsx("p",{className:"hero-byjus-subtitle",children:"Learn from India's best teachers"}),h.jsx("p",{className:"hero-byjus-tagline",children:"Comprehensive learning programs & classes for all students. Become a lifelong learner with engaging video lessons and personalised learning journeys."}),h.jsx(ye,{to:"/courses",className:"btn btn-primary hero-cta",children:"Explore free courses"})]})}),h.jsx("section",{className:"stats-strip",children:h.jsx("div",{className:"container",children:h.jsx("div",{className:"stats-grid",children:ZN.map(r=>h.jsxs("div",{className:"stat-item",children:[h.jsx("span",{className:"stat-value",children:r.value}),h.jsx("span",{className:"stat-label",children:r.label})]},r.label))})})}),h.jsx("section",{className:"section section-advantage",children:h.jsxs("div",{className:"container",children:[h.jsx("h2",{className:"section-title",children:"Get the LearnPlus advantage"}),h.jsx("div",{className:"advantage-grid",children:e2.map(r=>h.jsxs("div",{className:"advantage-card",children:[h.jsx("h3",{className:"advantage-title",children:r.title}),h.jsx("p",{className:"advantage-desc",children:r.desc})]},r.title))})]})}),h.jsx("section",{className:"section section-testimonials",children:h.jsxs("div",{className:"container",children:[h.jsx("h2",{className:"section-title",children:"Our students and parents love us"}),h.jsx("div",{className:"testimonials-grid",children:t2.map(r=>h.jsxs("div",{className:"testimonial-card",children:[h.jsxs("p",{className:"testimonial-quote",children:['"',r.quote,'"']}),h.jsxs("p",{className:"testimonial-author",children:["– ",r.author,", ",r.location]})]},r.quote.slice(0,20)))})]})}),h.jsx("section",{className:"section section-programs",children:h.jsxs("div",{className:"container",children:[h.jsx("h2",{className:"section-title",children:"Explore our learning programs"}),h.jsx("div",{className:"course-grid",children:t.map(r=>h.jsxs(ye,{to:`/courses/${r.slug}`,className:"course-card",children:[h.jsxs("div",{className:"course-card-image",children:[h.jsx("img",{src:r.thumbnail,alt:""}),h.jsx("span",{className:"course-badge",children:r.level})]}),h.jsxs("div",{className:"course-card-body",children:[h.jsx("span",{className:"course-category",children:r.category}),h.jsx("h3",{className:"course-card-title",children:r.title}),h.jsx("p",{className:"course-card-desc",children:r.description}),h.jsxs("div",{className:"course-meta",children:[h.jsxs("span",{children:[r.lessonsCount," lessons"]}),h.jsx("span",{children:r.duration})]})]})]},r.id))}),h.jsx("div",{className:"section-cta",children:h.jsx(ye,{to:"/courses",className:"btn btn-secondary",children:"View all courses"})})]})})]})}function r2(){const[t,e]=M.useState(""),n=[...new Set(la.map(i=>i.category))],r=la.filter(i=>i.title.toLowerCase().includes(t.toLowerCase())||i.description.toLowerCase().includes(t.toLowerCase()));return h.jsx("div",{className:"course-list-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("header",{className:"page-header",children:[h.jsx("h1",{children:"All courses"}),h.jsx("p",{children:"Structured learning with YouTube. Pick a course and start watching."})]}),h.jsx("div",{className:"search-container",children:h.jsxs("div",{className:"search-input-wrapper",children:[h.jsx(Rw,{className:"search-icon",size:20}),h.jsx("input",{type:"text",placeholder:"Search courses...",value:t,onChange:i=>e(i.target.value),className:"search-input"})]})}),n.map(i=>{const s=r.filter(o=>o.category===i);return s.length===0?null:h.jsxs("section",{className:"category-section",children:[h.jsx("h2",{className:"category-title",children:i}),h.jsx("div",{className:"course-grid",children:s.map(o=>h.jsxs(ye,{to:`/courses/${o.slug}`,className:"course-card",children:[h.jsxs("div",{className:"course-card-image",children:[h.jsx("img",{src:o.thumbnail,alt:""}),h.jsx("span",{className:"course-badge",children:o.level})]}),h.jsxs("div",{className:"course-card-body",children:[h.jsx("h3",{className:"course-card-title",children:o.title}),h.jsx("p",{className:"course-card-desc",children:o.description}),h.jsxs("div",{className:"course-meta",children:[h.jsxs("span",{children:[o.lessonsCount," lessons"]}),h.jsx("span",{children:o.duration}),o.totalXp&&h.jsxs("span",{style:{color:"#f59e0b",fontWeight:"bold"},children:["🪙 ",o.totalXp]})]})]})]},o.id))})]},i)}),r.length===0&&h.jsx("div",{className:"no-results",children:h.jsxs("p",{children:['No courses found matching "',t,'"']})})]})})}function i2(){const t=la.filter(e=>e.category==="Bonus");return h.jsx("div",{className:"course-list-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("header",{className:"page-header",style:{background:"rgba(255, 255, 255, 0.05)",backdropFilter:"blur(10px)",padding:"2rem",borderRadius:"var(--radius)",border:"1px solid var(--border)"},children:[h.jsx("h1",{style:{color:"#fff"},children:"Bonus Courses"}),h.jsx("p",{style:{color:"var(--text-muted)"},children:"Exclusive extra classes for Speaking, Writing, Aptitude, and QR."})]}),h.jsx("section",{className:"category-section",children:h.jsx("div",{className:"course-grid",children:t.map(e=>h.jsxs(ye,{to:`/courses/${e.slug}`,className:"course-card",style:{background:"var(--surface)",border:"1px solid var(--border)"},children:[h.jsxs("div",{className:"course-card-image",children:[h.jsx("img",{src:e.thumbnail,alt:""}),h.jsx("span",{className:"course-badge",children:e.level})]}),h.jsxs("div",{className:"course-card-body",children:[h.jsx("h3",{className:"course-card-title",style:{color:"var(--text)"},children:e.title}),h.jsx("p",{className:"course-card-desc",children:e.description}),h.jsxs("div",{className:"course-meta",children:[h.jsxs("span",{children:[e.lessonsCount," lessons"]}),h.jsx("span",{children:e.duration})]})]})]},e.id))})})]})})}function X0({completed:t,total:e,label:n="Course progress"}){const r=e>0?Math.round(t/e*100):0;return h.jsxs("div",{className:"progress-bar-wrap",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":n,children:[h.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}}),h.jsxs("span",{className:"progress-bar-text",children:[n,": ",t,"/",e," (",r,"%)"]})]})}const s2={"web-dev":{title:"Web Development Basics Quiz",questions:[{id:"q1",text:"What does HTML stand for?",options:["Hyper Text Markup Language","High Text Machine Language","Hyperlinks and Text Making Language","Home Tool Markup Language"],correctIndex:0,explanation:"HTML stands for Hyper Text Markup Language – it defines the structure of web pages."},{id:"q2",text:"Which CSS property is used to make a flex container?",options:["display","flex-direction","position","justify-content"],correctIndex:0,explanation:"You use display: flex on a container to turn it into a flex container."},{id:"q3",text:"Which JavaScript method is used to run a function after a delay?",options:["setInterval","setTimeout","delay","wait"],correctIndex:1,explanation:"setTimeout(fn, ms) runs a function once after the given delay in milliseconds."}]},"react-course":{title:"React Fundamentals Quiz",questions:[{id:"rq1",text:"JSX is…",options:["A CSS framework","A syntax extension that lets you write HTML-like code in JavaScript","A database query language","A testing library"],correctIndex:1,explanation:"JSX lets you describe UI using HTML-like syntax inside JavaScript/TypeScript."},{id:"rq2",text:"Which hook is used to manage state in a function component?",options:["useState","useEffect","useContext","useRef"],correctIndex:0,explanation:"useState gives you a state value and a setter inside function components."}]},"python-basics":{title:"Python Basics Quiz (Beginner to Intermediate)",questions:[{id:"pq1",text:"Which of these is the correct way to declare a variable in Python?",options:["var age = 18","let age = 18","age := 18","age = 18"],correctIndex:3,explanation:"In Python you assign with = and do not use var/let keywords."},{id:"pq2",text:"What is the output of: print(len([1, 2, 3, 4])) ?",options:["3","4","5","Error"],correctIndex:1,explanation:"The list has four elements so len returns 4."},{id:"pq3",text:"Which keyword is used to define a function in Python?",options:["func","define","def","function"],correctIndex:2,explanation:"Functions in Python are defined with the def keyword."},{id:"pq4",text:"What is the output of: bool([]) in Python?",options:["True","False","0","Raises an error"],correctIndex:1,explanation:"Empty containers (lists, tuples, dicts, sets, strings) are considered False in boolean context."},{id:"pq5",text:"Which of these is the correct list comprehension to create a list of squares from 0 to 4?",options:["[i * i for i in range(5)]","for i in range(5): i * i","list(i**2, i in range(5))","[i^2 in range(5)]"],correctIndex:0,explanation:"List comprehension syntax is [expression for item in iterable]."},{id:"pq6",text:"Which statement is used to handle an exception in Python?",options:["catch","except","handle","error"],correctIndex:1,explanation:"Exceptions are handled with try/except blocks."}]},"dsa-course":{title:"Data Structures & Algorithms Quiz (Core Concepts)",questions:[{id:"dq1",text:"What is the time complexity of binary search on a sorted array?",options:["O(1)","O(n)","O(log n)","O(n log n)"],correctIndex:2,explanation:"Binary search halves the search space each step, giving O(log n)."},{id:"dq2",text:"Which data structure works on a First In, First Out (FIFO) principle?",options:["Stack","Queue","Binary tree","Hash map"],correctIndex:1,explanation:"Queues remove elements in the same order they were inserted (FIFO)."},{id:"dq3",text:"Which sorting algorithm is typically O(n log n) in the average case?",options:["Bubble sort","Selection sort","Insertion sort","Merge sort"],correctIndex:3,explanation:"Merge sort consistently runs in O(n log n) time."},{id:"dq4",text:"What is the time complexity of inserting at the end of a dynamic array (amortized)?",options:["O(1)","O(log n)","O(n)","O(n log n)"],correctIndex:0,explanation:"Most appends are O(1); occasional resizes make it O(1) amortized."},{id:"dq5",text:"Which data structure is most suitable for implementing a browser back/forward history?",options:["Two stacks","Queue","Priority queue","Hash table"],correctIndex:0,explanation:"One stack for back history and one for forward history is a common pattern."},{id:"dq6",text:"In a binary tree, how many children can each node have at most?",options:["1","2","3","Unlimited"],correctIndex:1,explanation:"By definition, each node in a binary tree has at most two children."}]},"sql-course":{title:"SQL & Databases Quiz (Core Topics)",questions:[{id:"sq1",text:"Which SQL statement is used to retrieve data from a table?",options:["GET","FETCH","SELECT","SHOW"],correctIndex:2,explanation:"SELECT is used to query and retrieve data from one or more tables."},{id:"sq2",text:"Which constraint ensures that a column (or set of columns) uniquely identifies each row?",options:["FOREIGN KEY","PRIMARY KEY","CHECK","DEFAULT"],correctIndex:1,explanation:"A PRIMARY KEY uniquely identifies each row and cannot be NULL."},{id:"sq3",text:"What does an INNER JOIN return?",options:["All rows from both tables","Rows that do not match between tables","Only rows that have matching values in both tables","Only the first row from each table"],correctIndex:2,explanation:"INNER JOIN returns rows where the join condition matches in both tables."},{id:"sq4",text:"Which clause is used to group rows that have the same values in specified columns?",options:["ORDER BY","GROUP BY","HAVING","WHERE"],correctIndex:1,explanation:"GROUP BY groups rows so you can apply aggregate functions like COUNT, SUM, AVG on each group."},{id:"sq5",text:"Which clause is evaluated after GROUP BY to filter aggregated groups?",options:["WHERE","HAVING","LIMIT","DISTINCT"],correctIndex:1,explanation:"HAVING filters groups after aggregation; WHERE filters rows before grouping."},{id:"sq6",text:"Which normal form focuses on removing partial dependencies on a composite primary key?",options:["First Normal Form (1NF)","Second Normal Form (2NF)","Third Normal Form (3NF)","Boyce-Codd Normal Form (BCNF)"],correctIndex:1,explanation:"Second Normal Form (2NF) eliminates partial dependencies on a composite primary key."}]},"pe-course":{title:"Prompt Engineering Quiz",questions:[{id:"peq1",text:'What is "Zero-shot prompting"?',options:["Providing a prompt with zero words.","Asking the model a question without providing any examples.","A prompt that generates errors.","Fine-tuning a model with zero data."],correctIndex:1,explanation:"Zero-shot prompting involves asking a question without giving the model prior examples of the desired output."},{id:"peq2",text:"Which technique asks the model to explain its reasoning step-by-step?",options:["Few-shot","Zero-shot","Chain of Thought","Fine-tuning"],correctIndex:2,explanation:"Chain of Thought (CoT) prompting explicitly asks the model to think step-by-step."}]},"ai-ml-course":{title:"AI & ML Fundamentals Quiz",questions:[{id:"aimq1",text:"Which type of Machine Learning relies on labeled training data?",options:["Unsupervised Learning","Supervised Learning","Reinforcement Learning","Generative Learning"],correctIndex:1,explanation:"Supervised learning uses labeled inputs to train models to predict outcomes."},{id:"aimq2",text:"What is a neural network conceptually based on?",options:["Database tables","The human brain structure","Quantum physics","Linear regression only"],correctIndex:1,explanation:"Neural networks are vaguely inspired by the biological neural networks in animal brains."},{id:"aimq3",text:"Which algorithm is best suited for binary classification?",options:["Linear Regression","K-Means Clustering","Logistic Regression","PCA"],correctIndex:2,explanation:"Logistic Regression outputs probabilities mapped between 0 and 1, making it perfect for binary classification."},{id:"aimq4",text:"What does Unsupervised Learning aim to discover?",options:["Accurate categorical labels","Hidden patterns and structures","Optimal reward policies","Regression slopes"],correctIndex:1,explanation:"Unsupervised learning finds hidden structures or patterns in unlabelled datasets."},{id:"aimq5",text:"Which approach learns through trial and error to maximize a reward?",options:["Reinforcement Learning","Transfer Learning","Supervised Learning","Clustering"],correctIndex:0,explanation:"Reinforcement Learning trains agents to make sequences of decisions to maximize cumulative reward."},{id:"aimq6",text:"What is overfitting in Machine Learning?",options:["Model performs poorly on both training and test data","Model memorizes training data but fails to generalize to new data","Model stops training early","Model is too simple to capture patterns"],correctIndex:1,explanation:"Overfitting occurs when a model learns the detail and noise in the training data to the extent that it negatively impacts performance on new, unseen data."}]},"mongodb-course":{title:"MongoDB Mastery Quiz",questions:[{id:"moq1",text:"What format does MongoDB primarily use to store data internally?",options:["XML","CSV","BSON","SQL Tables"],correctIndex:2,explanation:"MongoDB stores data in BSON (Binary JSON) format which extends JSON with additional data types."},{id:"moq2",text:"Which command is used to insert a document in MongoDB?",options:["db.collection.insert()","INSERT INTO collection","db.add()","UPDATE collection"],correctIndex:0,explanation:"Using db.collection.insertOne() or db.collection.insertMany() adds documents to a collection."},{id:"moq3",text:"Which of the following is NOT a MongoDB NoSQL characteristic?",options:["Schema-less at the database level","Document-oriented","Strict relational table schemas","Uses JSON/BSON structures"],correctIndex:2,explanation:"MongoDB is fundamentally schema-less (or uses flexible schemas) and does not force strict relational table architectures."},{id:"moq4",text:"What is the MongoDB aggregate pipeline used for?",options:["Routing traffic","Processing data records and returning computed results","Deleting databases entirely","Creating user accounts"],correctIndex:1,explanation:"The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines."},{id:"moq5",text:"Which operator allows you to match values greater than a specified value?",options:["$lt","$gt","$eq","$in"],correctIndex:1,explanation:"The $gt operator selects those documents where the value of the field is greater than the specified value."},{id:"moq6",text:'How do you create an index on a field named "score" in descending order?',options:["db.collection.createIndex( { score: -1 } )","db.collection.index( { score: DESC } )","CREATE INDEX score_idx",'db.collection.createIndex( { "score": 1 } )'],correctIndex:0,explanation:"In MongoDB, specifying -1 creates a descending index, while 1 creates an ascending index."}]},"aptitude-class":{title:"General Aptitude & Reasoning Quiz",questions:[{id:"apq1",text:"If the cost price of an article is Rs. 80 and the selling price is Rs. 100, what is the profit percentage?",options:["20%","25%","30%","15%"],correctIndex:1,explanation:"Profit = 100 - 80 = 20. Profit % = (20/80) * 100 = 25%."},{id:"apq2",text:"What is the next number in the series: 2, 6, 12, 20, 30, ...?",options:["40","42","44","38"],correctIndex:1,explanation:"The differences are 4, 6, 8, 10. The next difference is 12, so 30 + 12 = 42."},{id:"apq3",text:"A train 150m long moving at 90 km/hr crosses a tree. How much time will it take?",options:["6 seconds","8 seconds","5 seconds","10 seconds"],correctIndex:0,explanation:"Speed = 90 * (5/18) = 25 m/s. Time = Distance / Speed = 150 / 25 = 6 seconds."},{id:"apq4",text:'Which logical relationship specifies: "All A are B, some B are C"?',options:["Syllogism","Blood Relation","Direction Sense","Seating Arrangement"],correctIndex:0,explanation:"This is a standard premise format for a Syllogism problem."},{id:"apq5",text:`A man points to a photograph and says, "The lady in the photograph is my nephew's maternal grandmother." How is the lady related to the man's sister who has no other sister?`,options:["Mother","Aunt","Sister","Cannot be determined"],correctIndex:0,explanation:"The man's nephew's maternal grandmother is the mother of the nephew's mother. The nephew's mother is the man's sister. So the lady is the mother of the man's sister."},{id:"apq6",text:"Find the simple interest on Rs. 1000 at 5% per annum for 2 years.",options:["Rs. 50","Rs. 100","Rs. 150","Rs. 200"],correctIndex:1,explanation:"SI = (P * R * T) / 100 = (1000 * 5 * 2) / 100 = Rs. 100."}]}};function Z0(t){return s2[t]||null}const o2={"web-dev":{title:"Web Development Practice Set",tasks:["Build a personal portfolio page using HTML and CSS with a hero, about, and projects section.","Create a responsive navigation bar that collapses into a menu on small screens.","Rebuild the homepage layout of your favorite website using Flexbox.","Create a blog article page with semantic HTML5 tags and a related-articles sidebar.","Convert a Figma or Dribbble landing page design into a responsive web page."]},"react-course":{title:"React Practice Set",tasks:["Create a todo app with add, toggle, and delete, storing todos in component state.","Build a “counter with history” that shows the last 5 values using useState.","Create a small fetch example that loads posts from a public API using useEffect.","Build a multi-step form (like checkout) that preserves state between steps.","Create a reusable modal component and use it in at least two different screens."]},"python-basics":{title:"Python Practice Set (Beginner to Advanced)",tasks:["Write a program that prints the sum of numbers from 1 to 100.","Ask the user for a number and print whether it is even or odd.","Create a simple calculator that supports +, -, *, and / using functions.","Read a list of numbers and print the largest, smallest, and average.","Write a function that checks if a string is a palindrome (same forwards and backwards).","Given a list of integers, create a new list that contains only the even numbers.","Write a program that counts how many times each word appears in a sentence (use a dictionary).","Write a recursive function to compute the nth Fibonacci number.","Read a text file and print how many lines and characters it contains."]},"dsa-course":{title:"Data Structures & Algorithms Practice Set (Beginner to Advanced)",tasks:["Implement linear search on an array and return the index of a target element.","Implement binary search on a sorted array and count how many comparisons are made.","Implement a stack using an array with push, pop, and peek operations.","Implement a queue using two stacks and compare the time complexity to a normal queue.","Implement merge sort and print the array after each merge step for visualization.","Solve the classic “two-sum” problem using a hash map in O(n) time.","Rotate an array by k positions to the right in-place (without using extra arrays of the same size).","Reverse a singly linked list and print all of its elements.","Given a string of brackets (), {}, [], check if it is balanced using a stack.","Implement breadth-first search (BFS) on a graph represented as an adjacency list.","Find the maximum depth (height) of a binary tree using recursion."]},"sql-course":{title:"SQL Practice Set (Beginner to Advanced)",tasks:["Create a table STUDENTS with columns id (primary key), name, age, and grade, and insert at least 5 sample rows.","Write a SELECT query to fetch all students whose grade is greater than 80, ordered by grade descending.","Write a query to return the number of students in each grade (use GROUP BY).","Given tables STUDENTS(id, name, class_id) and CLASSES(id, title), write a query to list each student with their class title using an INNER JOIN.","Modify the previous query to also show classes that currently have no students (use a LEFT JOIN).","Write a query that returns only those grades where the average grade is above 75 (use GROUP BY and HAVING).","Write a query to find the top 3 students by grade in each class (hint: use ORDER BY and LIMIT, or a window function if your database supports it).","Write a query using a subquery to find students whose grade is above the overall average grade.","Add an index on the grade column and explain in comments when an index helps a query.","Design a simple normalized schema for a course enrollment system (tables for students, courses, enrollments) and write CREATE TABLE statements for each."]}};function eS(t){return o2[t]||null}const a2="lms-progress";function l2(t){try{const e=localStorage.getItem(a2);return(e?JSON.parse(e):{})[t]||[]}catch{return[]}}function u2(){const{courseSlug:t}=Uu(),e=rc(t);if(!e)return h.jsxs("div",{className:"container",children:[h.jsx("p",{children:"Course not found."}),h.jsx(ye,{to:"/courses",children:"Back to courses"})]});const n=l2(e.id),r=J0(e),i=r.filter(l=>n.includes(l.id)).length,s=Z0(e.id),o=eS(e.id);return h.jsx("div",{className:"course-detail-page",children:h.jsxs("div",{className:"container",children:[h.jsx("div",{className:"course-detail-header",children:h.jsxs("div",{className:"course-detail-hero",children:[h.jsx("img",{src:e.thumbnail,alt:"",className:"course-detail-thumb"}),h.jsxs("div",{className:"course-detail-info",children:[h.jsx("span",{className:"course-category",children:e.category}),h.jsx("h1",{children:e.title}),h.jsx("p",{className:"course-detail-desc",children:e.description}),h.jsxs("div",{className:"course-detail-meta",children:[h.jsxs("span",{children:[e.lessonsCount," lessons"]}),h.jsx("span",{children:e.duration}),h.jsx("span",{children:e.level}),e.totalXp&&h.jsxs("span",{style:{color:"#f59e0b",fontWeight:"bold"},children:["🪙 ",e.totalXp]})]}),h.jsx(X0,{completed:i,total:r.length,label:"Your progress"})]})]})}),h.jsxs("div",{className:"course-detail-content",children:[h.jsxs("div",{className:"course-detail-top-row",children:[h.jsx("h2",{children:"Course content"}),h.jsxs("div",{className:"course-ctas",children:[s&&h.jsx(ye,{to:`/courses/${e.slug}/quiz`,className:"btn btn-secondary small",children:"Take quiz"}),o&&h.jsx(ye,{to:`/courses/${e.slug}/practice`,className:"btn btn-secondary small",children:"Practice tasks"})]})]}),e.modules.map(l=>h.jsxs("div",{className:"module-block",children:[h.jsx("h3",{className:"module-title",children:l.title}),h.jsx("ul",{className:"lesson-list",children:l.lessons.map(u=>{const c=n.includes(u.id);return h.jsx("li",{children:h.jsxs(ye,{to:`/courses/${e.slug}/lesson/${u.id}`,className:`lesson-row ${c?"completed":""}`,children:[h.jsx("span",{className:"lesson-icon",children:c?"✓":"▶"}),h.jsx("span",{className:"lesson-name",children:u.title}),h.jsxs("span",{className:"lesson-duration",children:[u.duration,u.xp&&h.jsxs("span",{style:{marginLeft:"12px",color:"#f59e0b",fontSize:"0.9em",fontWeight:"600"},children:["🪙 ",u.xp]})]})]})},u.id)})})]},l.id))]})]})})}const c2={"m1-l1":{language:"html",code:`<h1>Welcome to Guru Gyaan Path</h1>
<p>This is my first HTML page!</p>`},"m1-l2":{language:"html",code:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>Paragraph text goes here.</p>`},"m2-l1":{language:"css",code:`body {
  font-family: system-ui, sans-serif;
}

.btn-primary {
  background: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 999px;
}`},"m3-l2":{language:"js",code:`const name = 'Guru';
const age = 18;

console.log('Hello ' + name + ', age:', age);`},"r1-l3":{language:"jsx",code:`function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;`},"p1-l1":{language:"python",code:`name = input("Enter your name: ")
print(f"Hello, {name}!")`},"p1-l2":{language:"python",code:`age = int(input("Age? "))
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`},"p2-l1":{language:"python",code:`def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))`},"d1-l1":{language:"js",code:`// Big-O example: linear time
function hasValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

console.log(hasValue([1, 3, 5, 7], 5));`},"d1-l2":{language:"js",code:`// Linear search - return index or -1
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30));`},"d2-l1":{language:"js",code:`// Singly linked list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(JSON.stringify(list));`},"d2-l2":{language:"js",code:`// Stack using array
class Stack {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const s = new Stack();
s.push(10);
s.push(20);
console.log(s.pop()); // 20`},"d3-l1":{language:"js",code:`// Simple recursion: factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));`},"d3-l2":{language:"js",code:`// Merge sort
function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([5, 3, 8, 4, 2]));`},"d3-l3":{language:"js",code:`// Binary search (sorted array)
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));`},"s1-l2":{language:"sql",code:`-- Create a simple STUDENTS table
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT,
  grade INT
);

INSERT INTO students (id, name, age, grade) VALUES
  (1, 'Amit', 18, 82),
  (2, 'Sara', 19, 91),
  (3, 'Rahul', 17, 76);`},"s1-l3":{language:"sql",code:`-- Basic SELECT query
SELECT id, name, grade
FROM students
ORDER BY grade DESC;`},"s2-l1":{language:"sql",code:`-- Filtering rows with WHERE
SELECT name, grade
FROM students
WHERE grade >= 80
  AND age >= 18;`},"s2-l3":{language:"sql",code:`-- Aggregate functions with GROUP BY
SELECT class_id, AVG(grade) AS avg_grade, COUNT(*) AS student_count
FROM students
GROUP BY class_id
HAVING AVG(grade) >= 75;`},"s3-l1":{language:"sql",code:`-- INNER JOIN between students and classes
SELECT s.name, c.title AS class_title, s.grade
FROM students AS s
JOIN classes AS c ON s.class_id = c.id;`},"s3-l3":{language:"sql",code:`-- GROUP BY with HAVING on joined tables
SELECT c.title AS class_title, AVG(s.grade) AS avg_grade
FROM students AS s
JOIN classes AS c ON s.class_id = c.id
GROUP BY c.title
HAVING AVG(s.grade) >= 80;`}};function d2(t){return c2[t]||null}function h2({videoId:t,title:e="Lesson video"}){if(!t)return h.jsx("div",{className:"youtube-placeholder",children:"No video for this lesson."});const n=`https://www.youtube.com/embed/${t}?rel=0`;return h.jsx("div",{className:"youtube-embed",children:h.jsx("iframe",{src:n,title:e,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}const f2={m1:{title:"HTML Fundamentals",sections:[{heading:"Document structure",points:["<!DOCTYPE html> — must be first",'<html lang="en"> — root element',"<head> — metadata, title, links to CSS","<body> — visible content"],code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`},{heading:"Common tags",points:["Headings: <h1> to <h6>","Paragraph: <p>",'Link: <a href="url">text</a>','Image: <img src="url" alt="description">',"Lists: <ul>/<ol> with <li> items","Division: <div> (block), <span> (inline)"]},{heading:"Best practices",points:["One <h1> per page","Always use alt on images","Use semantic tags: <header>, <main>, <footer>, <nav>, <article>, <section>"]}]},m2:{title:"CSS Styling",sections:[{heading:"Selectors",points:["Element: p { }","Class: .className { }","ID: #idName { }","Descendant: div p { }","Multiple: .a, .b { }"],code:`.card {
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
}`},{heading:"Box model",points:["content → padding → border → margin","box-sizing: border-box — width includes padding & border"]},{heading:"Flexbox quick ref",points:["Container: display: flex","Direction: flex-direction: row | column","Wrap: flex-wrap: wrap","Justify: justify-content: center | space-between | flex-start","Align: align-items: center | stretch"],code:`.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}`},{heading:"Responsive",points:['Viewport meta: <meta name="viewport" content="width=device-width">',"Media query: @media (max-width: 768px) { }","Use rem/em and % for flexible layouts"]}]},m3:{title:"JavaScript Basics",sections:[{heading:"Variables",points:["let — block scope, can reassign","const — block scope, cannot reassign (use by default)","var — avoid; function scope"],code:`const name = "Guru";
let count = 0;
count++;`},{heading:"Data types",points:["Primitives: string, number, boolean, null, undefined, symbol","Object: {}, arrays [], functions","Check: typeof x"]},{heading:"Functions",points:["Declaration: function fn() { }","Arrow: const fn = () => { }","Return value with return"],code:`function add(a, b) {
  return a + b;
}
const double = (n) => n * 2;`},{heading:"DOM basics",points:['Select: document.querySelector(".class"), getElementById("id")',"Read: element.textContent, element.innerHTML",'Update: element.textContent = "new"','Events: element.addEventListener("click", () => { })']}]},r1:{title:"React Setup & JSX",sections:[{heading:"Create app",points:["Vite: npm create vite@latest my-app -- --template react","Run: npm run dev"]},{heading:"Component",points:["Function that returns JSX","PascalCase name","Export default or named export"],code:`function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
export default Welcome;`},{heading:"JSX rules",points:["One root element (or Fragment <></>)","className (not class), htmlFor (not for)","JavaScript in { }","Close all tags: <img />"]},{heading:"Props",points:['Pass: <Welcome name="Guru" />',"Receive: function Welcome({ name }) { }","Props are read-only"]}]},r2:{title:"State & Hooks",sections:[{heading:"useState",points:["const [value, setValue] = useState(initial)","Updates trigger re-render","Never mutate state directly; use setter"],code:`const [count, setCount] = useState(0);
setCount(c => c + 1);`},{heading:"useEffect",points:["Run side effects (fetch, subscribe)","useEffect(() => { ... }, [deps])","Empty deps [] = run once on mount"],code:`useEffect(() => {
  fetch(url).then(r => r.json()).then(setData);
}, [url]);`},{heading:"Custom hook",points:["Function name starts with use","Can call other hooks inside","Reuse stateful logic across components"]}]},p1:{title:"Python Getting Started",sections:[{heading:"Variables & input",points:['No declaration: name = "Guru"','Input: name = input("Enter name: ")',"Types: int(), float(), str() for conversion"],code:`age = int(input("Age? "))
print(f"You are {age} years old")`},{heading:"Conditionals",points:["if / elif / else","Indentation (4 spaces) defines blocks","Comparisons: ==, !=, <, >, <=, >="],code:`if score >= 60:
    print("Pass")
else:
    print("Fail")`},{heading:"Loops",points:["for i in range(5): — 0 to 4","for x in list: — iterate list","while condition: — repeat while true"],code:`for i in range(1, 6):
    print(i * i)`}]},p2:{title:"Python Functions & Data",sections:[{heading:"Functions",points:["def name(params): then indented body","return value (or None)","Default args: def fn(a, b=0):"],code:`def greet(name):
    return f"Hello, {name}"`},{heading:"Lists",points:["nums = [1, 2, 3]","Index: nums[0], nums[-1]","Slice: nums[1:3], nums[:2]","Append: nums.append(4)"]},{heading:"Dictionaries",points:['d = {"name": "Guru", "age": 18}','Access: d["name"] or d.get("name")',"Keys, values: d.keys(), d.values()"],code:`user = {"id": 1, "name": "Guru"}
print(user["name"])`}]},g1:{title:"Git Basics",sections:[{heading:"Setup & first commit",points:["git init — create repo","git status — see changes","git add . or git add file",'git commit -m "message"'],code:`git init
git add .
git commit -m "Initial commit"`},{heading:"Branching",points:["git branch — list branches","git branch feature — create branch","git checkout feature — switch branch","git checkout -b feature — create and switch"]},{heading:"Merging & remote",points:["git merge branch — merge into current","git remote add origin <url>","git push -u origin main","git pull — fetch and merge"]}]},d1:{title:"Arrays & Time Complexity",sections:[{heading:"Big-O refresher",points:["O(1): constant time — work does not grow with input size.","O(n): linear time — work grows in direct proportion to n.","O(log n): logarithmic — halves the problem each step (binary search).","O(n²): quadratic — nested loops over the same input."]},{heading:"Array operations",points:["Read by index: O(1).","Scan / search linearly: O(n).","Insert/remove at end (dynamic array): usually O(1) amortized.","Insert/remove at front or middle: O(n) — shift many elements."],code:`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`},{heading:"Binary search idea",points:["Works only on sorted arrays.","Compare target with middle element.","Discard half the array each step.","Time complexity: O(log n)."]}]},d2:{title:"Linked Lists, Stacks & Queues",sections:[{heading:"Linked list vs array",points:["Array: fast random access by index, but inserts in middle can be expensive.","Linked list: each node points to the next; good for frequent inserts/removals in the middle.","Singly linked list: next pointer only; doubly linked list: next + prev."]},{heading:"Stack (LIFO)",points:["Last In, First Out — like a stack of plates.","Main operations: push (add on top), pop (remove top), peek (look at top).","Used for function call stacks, undo/redo, DFS."],code:`class Stack {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
}`},{heading:"Queue (FIFO)",points:["First In, First Out — like a line at a store.","Main operations: enqueue (add at back), dequeue (remove from front).","Used for task scheduling, BFS on graphs/trees."]}]},d3:{title:"Recursion, Sorting & Searching",sections:[{heading:"Thinking recursively",points:["Base case: a simple input you can answer directly.","Recursive case: solve a smaller subproblem, then combine.","Always make progress toward the base case to avoid infinite recursion."],code:`function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`},{heading:"Divide & conquer sorting",points:["Merge sort: split array, sort halves, then merge — O(n log n).","Quick sort: pick pivot, partition, recurse — average O(n log n).","Both use recursion and the idea of “split, solve, combine”."]},{heading:"Binary search pattern",points:["Maintain low (lo) and high (hi) pointers into a sorted array.","Compute mid = Math.floor((lo + hi) / 2).","If arr[mid] < target, search right half; if > target, search left half.","Stop when lo > hi (target not found)."],code:`function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`}]},s1:{title:"SQL Basics & SELECT",sections:[{heading:"Relational database concepts",points:["Data is stored in tables (relations) with rows and columns.","Each row represents a record; each column represents an attribute.","A PRIMARY KEY uniquely identifies each row; FOREIGN KEY links to another table."]},{heading:"SELECT template",points:["SELECT column_list FROM table_name;","Use * to select all columns: SELECT * FROM students;","Use AS to rename columns in the result: SELECT name AS student_name;"],code:`SELECT id, name, grade
FROM students
ORDER BY grade DESC;`},{heading:"Creating a table (simplified)",points:["Use CREATE TABLE to define columns and constraints.","Choose appropriate data types: INT, VARCHAR, DATE, etc.","Mark required columns with NOT NULL."],code:`CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT,
  grade INT
);`}]},s2:{title:"SQL Filtering, Sorting & Functions",sections:[{heading:"WHERE conditions",points:["Use comparison operators: =, <>, >, <, >=, <=.","Combine conditions with AND / OR.","Use BETWEEN, IN, LIKE for ranges, sets, and patterns."],code:`SELECT name, grade
FROM students
WHERE grade >= 80 AND age >= 18;`},{heading:"Sorting & limiting",points:["ORDER BY column ASC|DESC sorts the result set.","LIMIT n (or TOP n depending on database) restricts the number of rows.","You can sort by multiple columns: ORDER BY grade DESC, name ASC."]},{heading:"Aggregate functions",points:["COUNT(*), SUM(col), AVG(col), MIN(col), MAX(col).","Aggregates usually go with GROUP BY.","Use HAVING to filter groups after aggregation."],code:`SELECT class_id, AVG(grade) AS avg_grade
FROM students
GROUP BY class_id
HAVING AVG(grade) >= 75;`}]},s3:{title:"SQL Joins & Grouping",sections:[{heading:"Types of joins",points:["INNER JOIN: rows with matches in both tables.","LEFT JOIN: all rows from left, matching rows from right (NULL if no match).","RIGHT JOIN: all rows from right, matching rows from left."],code:`SELECT s.name, c.title AS class_title
FROM students AS s
JOIN classes AS c ON s.class_id = c.id;`},{heading:"Grouping joined data",points:["You can GROUP BY columns from joined tables.","Often used to compute per-category or per-class statistics.","HAVING filters groups (e.g., only classes with avg grade above a threshold)."],code:`SELECT c.title, AVG(s.grade) AS avg_grade
FROM students s
JOIN classes c ON s.class_id = c.id
GROUP BY c.title
HAVING AVG(s.grade) >= 80;`},{heading:"Good practices",points:["Always specify join conditions explicitly to avoid accidental cross joins.","Use clear aliases (s, c, o, etc.) in multi-table queries.","Add appropriate indexes on columns used in JOIN and WHERE clauses."]}]},pe1:{title:"Prompt Engineering (Ref: GeeksforGeeks)",sections:[{heading:"Prompting Basics",points:["Be structured and specific.",'Give the AI a persona: "Act as a senior software engineer".','Use delimiters strictly: like triple quotes """ to separate instructions.']},{heading:"Advanced Techniques (GFG Notes)",points:["Zero-Shot: No examples provided.","Few-Shot: Providing a few examples of input-output pairs.",`Chain-of-Thought (CoT): Adding "Let's think step by step" to the prompt.`]}]},ai1:{title:"AI & ML Fundamentals (Ref: GeeksforGeeks)",sections:[{heading:"Machine Learning Basics",points:["Supervised Learning: Uses labeled datasets.","Unsupervised Learning: Finds hidden patterns or intrinsic structures in input data.","Reinforcement Learning: Learning by interacting with an environment to maximize rewards."]},{heading:"Algorithms (GFG Guide)",points:["Linear Regression: Predict a continuous value based on independent variables.","Logistic Regression: Used for binary classification.","Decision Trees: Tree-like model of decisions and their possible consequences."]}]},mo1:{title:"MongoDB (Ref: GeeksforGeeks)",sections:[{heading:"MongoDB Characteristics",points:["It is a NoSQL, document-oriented database.","Stores data in flexible, JSON-like documents.","High performance, high availability, and easy scalability."]},{heading:"CRUD Operations (GFG Cheat Sheet)",points:['Create: db.collection.insertOne({ item: "canvas" })','Read: db.collection.find({ item: "canvas" })','Update: db.collection.updateOne({ item: "canvas" }, { $set: { qty: 100 } })','Delete: db.collection.deleteOne({ item: "canvas" })'],code:"db.users.find({ age: { $gt: 18 } })"}]}};function p2(t){return f2[t]||null}function m2({text:t}){const[e,n]=M.useState(!1),r=()=>{navigator.clipboard.writeText(t).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})};return h.jsx("button",{type:"button",className:"cheatsheet-copy",onClick:r,title:"Copy code",children:e?"✓ Copied":"Copy"})}function g2({moduleId:t}){const e=p2(t);return e?h.jsxs("section",{className:"cheatsheet","aria-labelledby":"cheatsheet-title",children:[h.jsxs("div",{className:"cheatsheet-header",children:[h.jsx("span",{className:"cheatsheet-badge",children:"Topic cheat sheet"}),h.jsx("h2",{id:"cheatsheet-title",className:"cheatsheet-title",children:e.title}),h.jsx("p",{className:"cheatsheet-desc",children:"Quick reference for this topic. Use it while coding."})]}),h.jsx("div",{className:"cheatsheet-sections",children:e.sections.map((n,r)=>h.jsxs("div",{className:"cheatsheet-section",children:[h.jsx("h3",{className:"cheatsheet-section-title",children:n.heading}),h.jsx("ul",{className:"cheatsheet-points",children:n.points.map((i,s)=>h.jsx("li",{children:i},s))}),n.code&&h.jsxs("div",{className:"cheatsheet-code-wrap",children:[h.jsx(m2,{text:n.code}),h.jsx("pre",{className:"cheatsheet-code",children:h.jsx("code",{children:n.code})})]})]},r))})]}):null}const kh="lms-progress";function y2(t){try{const e=localStorage.getItem(kh);return(e?JSON.parse(e):{})[t]||[]}catch{return[]}}function v2(t,e){try{const n=localStorage.getItem(kh),r=n?JSON.parse(n):{};r[t]=e,localStorage.setItem(kh,JSON.stringify(r))}catch{}}function _2(){const{courseSlug:t,lessonId:e}=Uu(),n=Vu(),r=XN(t,e);if(!r)return h.jsxs("div",{className:"container",children:[h.jsx("p",{children:"Lesson not found."}),h.jsx(ye,{to:"/courses",children:"Back to courses"})]});const{course:i,module:s,lesson:o}=r,l=J0(i),u=l.findIndex(k=>k.id===e),c=u>0?l[u-1]:null,p=u<l.length-1&&u>=0?l[u+1]:null,m=y2(i.id),E=l.filter(k=>m.includes(k.id)).length,I=()=>{if(m.includes(o.id))return;const k=[...m,o.id];v2(i.id,k),n(p?`/courses/${i.slug}/lesson/${p.id}`:`/courses/${i.slug}`)},R=m.includes(o.id),b=d2(o.id);return h.jsx("div",{className:"lesson-view-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("nav",{className:"lesson-breadcrumb",children:[h.jsx(ye,{to:"/courses",children:"Courses"}),h.jsx("span",{className:"sep",children:"/"}),h.jsx(ye,{to:`/courses/${i.slug}`,children:i.title}),h.jsx("span",{className:"sep",children:"/"}),h.jsx("span",{children:o.title})]}),h.jsxs("div",{className:"lesson-layout",children:[h.jsxs("div",{className:"lesson-main",children:[h.jsx("h1",{className:"lesson-title",children:o.title}),h.jsx("p",{className:"lesson-module",children:s.title}),h.jsx(h2,{videoId:o.videoId,title:o.title}),b&&h.jsxs("section",{className:"lesson-snippet",children:[h.jsx("h2",{children:"Example code"}),h.jsx("pre",{children:h.jsx("code",{children:b.code})})]}),h.jsx(g2,{moduleId:s.id}),h.jsxs("div",{className:"lesson-actions",children:[h.jsx("button",{type:"button",className:`btn ${R?"btn-completed":"btn-primary"}`,onClick:I,children:R?"✓ Completed":"Mark as complete"}),h.jsxs("div",{className:"lesson-nav-buttons",children:[c&&h.jsx(ye,{to:`/courses/${i.slug}/lesson/${c.id}`,className:"btn btn-secondary",children:"← Previous"}),p?h.jsx(ye,{to:`/courses/${i.slug}/lesson/${p.id}`,className:"btn btn-primary",children:"Next →"}):h.jsx(ye,{to:`/courses/${i.slug}`,className:"btn btn-primary",children:"Finish course"})]})]})]}),h.jsxs("aside",{className:"lesson-sidebar",children:[h.jsx(X0,{completed:E,total:l.length,label:"Progress"}),h.jsx("h3",{children:"Lessons"}),h.jsx("ul",{className:"sidebar-lesson-list",children:l.map(k=>h.jsx("li",{children:h.jsxs(ye,{to:`/courses/${i.slug}/lesson/${k.id}`,className:k.id===e?"active":m.includes(k.id)?"done":"",children:[m.includes(k.id)&&"✓ ",k.title]})},k.id))})]})]})]})})}var tS={},Ye=Qt&&Qt.__assign||function(){return Ye=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ye.apply(this,arguments)},w2=Qt&&Qt.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),E2=Qt&&Qt.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),S2=Qt&&Qt.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&w2(e,t,n);return E2(e,t),e},T2=Qt&&Qt.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(tS,"__esModule",{value:!0});var zt=S2(M),I2=89,sl=90,x2=77,Xy=57,Zy=219,ev=222,tv=192,nv=100,A2=3e3,C2=typeof window<"u"&&"navigator"in window&&/Win/i.test(navigator.platform),id=typeof window<"u"&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),Rl="npm__react-simple-code-editor__textarea",k2=`
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(Rl,`:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`).concat(Rl,` {
    color: transparent !important;
  }

  .`).concat(Rl,`::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`),b2=zt.forwardRef(function(e,n){var r=e.autoFocus,i=e.disabled,s=e.form,o=e.highlight,l=e.ignoreTabKey,u=l===void 0?!1:l,c=e.insertSpaces,p=c===void 0?!0:c,m=e.maxLength,E=e.minLength,I=e.name,R=e.onBlur,b=e.onClick,k=e.onFocus,A=e.onKeyDown,g=e.onKeyUp,v=e.onValueChange,P=e.padding,D=P===void 0?0:P,L=e.placeholder,_=e.preClassName,y=e.readOnly,S=e.required,T=e.style,x=e.tabSize,N=x===void 0?2:x,C=e.textareaClassName,pe=e.textareaId,ut=e.value,Dn=T2(e,["autoFocus","disabled","form","highlight","ignoreTabKey","insertSpaces","maxLength","minLength","name","onBlur","onClick","onFocus","onKeyDown","onKeyUp","onValueChange","padding","placeholder","preClassName","readOnly","required","style","tabSize","textareaClassName","textareaId","value"]),de=zt.useRef({stack:[],offset:-1}),B=zt.useRef(null),W=zt.useState(!0),Q=W[0],he=W[1],ie={paddingTop:typeof D=="object"?D.top:D,paddingRight:typeof D=="object"?D.right:D,paddingBottom:typeof D=="object"?D.bottom:D,paddingLeft:typeof D=="object"?D.left:D},Nt=o(ut),me=function(z,ce){return z.substring(0,ce).split(`
`)},Ge=zt.useCallback(function(z,ce){var te,ne,xe;ce===void 0&&(ce=!1);var Ke=de.current,_e=Ke.stack,Oe=Ke.offset;if(_e.length&&Oe>-1){de.current.stack=_e.slice(0,Oe+1);var pn=de.current.stack.length;if(pn>nv){var nr=pn-nv;de.current.stack=_e.slice(nr,pn),de.current.offset=Math.max(de.current.offset-nr,0)}}var Dt=Date.now();if(ce){var mn=de.current.stack[de.current.offset];if(mn&&Dt-mn.timestamp<A2){var Xt=/[^a-z0-9]([a-z0-9]+)$/i,ct=(te=me(mn.value,mn.selectionStart).pop())===null||te===void 0?void 0:te.match(Xt),rr=(ne=me(z.value,z.selectionStart).pop())===null||ne===void 0?void 0:ne.match(Xt);if(ct!=null&&ct[1]&&(!((xe=rr==null?void 0:rr[1])===null||xe===void 0)&&xe.startsWith(ct[1]))){de.current.stack[de.current.offset]=Ye(Ye({},z),{timestamp:Dt});return}}}de.current.stack.push(Ye(Ye({},z),{timestamp:Dt})),de.current.offset++},[]),Be=zt.useCallback(function(){var z=B.current;if(z){var ce=z.value,te=z.selectionStart,ne=z.selectionEnd;Ge({value:ce,selectionStart:te,selectionEnd:ne})}},[Ge]),nt=function(z){var ce=B.current;ce&&(ce.value=z.value,ce.selectionStart=z.selectionStart,ce.selectionEnd=z.selectionEnd,v==null||v(z.value))},xt=function(z){var ce=B.current,te=de.current.stack[de.current.offset];te&&ce&&(de.current.stack[de.current.offset]=Ye(Ye({},te),{selectionStart:ce.selectionStart,selectionEnd:ce.selectionEnd})),Ge(z),nt(z)},Kr=function(){var z=de.current,ce=z.stack,te=z.offset,ne=ce[te-1];ne&&(nt(ne),de.current.offset=Math.max(te-1,0))},Qr=function(){var z=de.current,ce=z.stack,te=z.offset,ne=ce[te+1];ne&&(nt(ne),de.current.offset=Math.min(te+1,ce.length-1))},tr=function(z){if(!(A&&(A(z),z.defaultPrevented))){z.key==="Escape"&&z.currentTarget.blur();var ce=z.currentTarget,te=ce.value,ne=ce.selectionStart,xe=ce.selectionEnd,Ke=(p?" ":"	").repeat(N);if(z.key==="Tab"&&!u&&Q)if(z.preventDefault(),z.shiftKey){var _e=me(te,ne),Oe=_e.length-1,pn=me(te,xe).length-1,nr=te.split(`
`).map(function(Zt,Pi){return Pi>=Oe&&Pi<=pn&&Zt.startsWith(Ke)?Zt.substring(Ke.length):Zt}).join(`
`);if(te!==nr){var Dt=_e[Oe];xt({value:nr,selectionStart:Dt!=null&&Dt.startsWith(Ke)?ne-Ke.length:ne,selectionEnd:xe-(te.length-nr.length)})}}else if(ne!==xe){var _e=me(te,ne),mn=_e.length-1,Xt=me(te,xe).length-1,Dt=_e[mn];xt({value:te.split(`
`).map(function(Ni,gn){return gn>=mn&&gn<=Xt?Ke+Ni:Ni}).join(`
`),selectionStart:Dt&&/\S/.test(Dt)?ne+Ke.length:ne,selectionEnd:xe+Ke.length*(Xt-mn+1)})}else{var ct=ne+Ke.length;xt({value:te.substring(0,ne)+Ke+te.substring(xe),selectionStart:ct,selectionEnd:ct})}else if(z.key==="Backspace"){var rr=ne!==xe,js=te.substring(0,ne);if(js.endsWith(Ke)&&!rr){z.preventDefault();var ct=ne-Ke.length;xt({value:te.substring(0,ne-Ke.length)+te.substring(xe),selectionStart:ct,selectionEnd:ct})}}else if(z.key==="Enter"){if(ne===xe){var Ms=me(te,ne).pop(),Ri=Ms==null?void 0:Ms.match(/^\s+/);if(Ri!=null&&Ri[0]){z.preventDefault();var Fs=`
`+Ri[0],ct=ne+Fs.length;xt({value:te.substring(0,ne)+Fs+te.substring(xe),selectionStart:ct,selectionEnd:ct})}}}else if(z.keyCode===Xy||z.keyCode===Zy||z.keyCode===ev||z.keyCode===tv){var Bt=void 0;z.keyCode===Xy&&z.shiftKey?Bt=["(",")"]:z.keyCode===Zy?z.shiftKey?Bt=["{","}"]:Bt=["[","]"]:z.keyCode===ev?z.shiftKey?Bt=['"','"']:Bt=["'","'"]:z.keyCode===tv&&!z.shiftKey&&(Bt=["`","`"]),ne!==xe&&Bt&&(z.preventDefault(),xt({value:te.substring(0,ne)+Bt[0]+te.substring(ne,xe)+Bt[1]+te.substring(xe),selectionStart:ne,selectionEnd:xe+2}))}else(id?z.metaKey&&z.keyCode===sl:z.ctrlKey&&z.keyCode===sl)&&!z.shiftKey&&!z.altKey?(z.preventDefault(),Kr()):(id?z.metaKey&&z.keyCode===sl&&z.shiftKey:C2?z.ctrlKey&&z.keyCode===I2:z.ctrlKey&&z.keyCode===sl&&z.shiftKey)&&!z.altKey?(z.preventDefault(),Qr()):z.keyCode===x2&&z.ctrlKey&&(!id||z.shiftKey)&&(z.preventDefault(),he(function(Zt){return!Zt}))}},bi=function(z){var ce=z.currentTarget,te=ce.value,ne=ce.selectionStart,xe=ce.selectionEnd;Ge({value:te,selectionStart:ne,selectionEnd:xe},!0),v(te)};return zt.useEffect(function(){Be()},[Be]),zt.useImperativeHandle(n,function(){return{get session(){return{history:de.current}},set session(z){de.current=z.history}}},[]),zt.createElement("div",Ye({},Dn,{style:Ye(Ye({},lo.container),T)}),zt.createElement("pre",Ye({className:_,"aria-hidden":"true",style:Ye(Ye(Ye({},lo.editor),lo.highlight),ie)},typeof Nt=="string"?{dangerouslySetInnerHTML:{__html:Nt+"<br />"}}:{children:Nt})),zt.createElement("textarea",{ref:function(z){return B.current=z},style:Ye(Ye(Ye({},lo.editor),lo.textarea),ie),className:Rl+(C?" ".concat(C):""),id:pe,value:ut,onChange:bi,onKeyDown:tr,onClick:b,onKeyUp:g,onFocus:k,onBlur:R,disabled:i,form:s,maxLength:m,minLength:E,name:I,placeholder:L,readOnly:y,required:S,autoFocus:r,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),zt.createElement("style",{dangerouslySetInnerHTML:{__html:k2}}))}),lo={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}},ol=tS.default=b2,nS={exports:{}};(function(t){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(v){return v instanceof u?new u(v.type,g(v.content),v.alias):Array.isArray(v)?v.map(g):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++s}),g.__id},clone:function g(v,P){P=P||{};var D,L;switch(l.util.type(v)){case"Object":if(L=l.util.objId(v),P[L])return P[L];D={},P[L]=D;for(var _ in v)v.hasOwnProperty(_)&&(D[_]=g(v[_],P));return D;case"Array":return L=l.util.objId(v),P[L]?P[L]:(D=[],P[L]=D,v.forEach(function(y,S){D[S]=g(y,P)}),D);default:return v}},getLanguage:function(g){for(;g;){var v=i.exec(g.className);if(v)return v[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,v){g.className=g.className.replace(RegExp(i,"gi"),""),g.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(D){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(D.stack)||[])[1];if(g){var v=document.getElementsByTagName("script");for(var P in v)if(v[P].src==g)return v[P]}return null}},isActive:function(g,v,P){for(var D="no-"+v;g;){var L=g.classList;if(L.contains(v))return!0;if(L.contains(D))return!1;g=g.parentElement}return!!P}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,v){var P=l.util.clone(l.languages[g]);for(var D in v)P[D]=v[D];return P},insertBefore:function(g,v,P,D){D=D||l.languages;var L=D[g],_={};for(var y in L)if(L.hasOwnProperty(y)){if(y==v)for(var S in P)P.hasOwnProperty(S)&&(_[S]=P[S]);P.hasOwnProperty(y)||(_[y]=L[y])}var T=D[g];return D[g]=_,l.languages.DFS(l.languages,function(x,N){N===T&&x!=g&&(this[x]=_)}),_},DFS:function g(v,P,D,L){L=L||{};var _=l.util.objId;for(var y in v)if(v.hasOwnProperty(y)){P.call(v,y,v[y],D||y);var S=v[y],T=l.util.type(S);T==="Object"&&!L[_(S)]?(L[_(S)]=!0,g(S,P,null,L)):T==="Array"&&!L[_(S)]&&(L[_(S)]=!0,g(S,P,y,L))}}},plugins:{},highlightAll:function(g,v){l.highlightAllUnder(document,g,v)},highlightAllUnder:function(g,v,P){var D={callback:P,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",D),D.elements=Array.prototype.slice.apply(D.container.querySelectorAll(D.selector)),l.hooks.run("before-all-elements-highlight",D);for(var L=0,_;_=D.elements[L++];)l.highlightElement(_,v===!0,D.callback)},highlightElement:function(g,v,P){var D=l.util.getLanguage(g),L=l.languages[D];l.util.setLanguage(g,D);var _=g.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(_,D);var y=g.textContent,S={element:g,language:D,grammar:L,code:y};function T(N){S.highlightedCode=N,l.hooks.run("before-insert",S),S.element.innerHTML=S.highlightedCode,l.hooks.run("after-highlight",S),l.hooks.run("complete",S),P&&P.call(S.element)}if(l.hooks.run("before-sanity-check",S),_=S.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!S.code){l.hooks.run("complete",S),P&&P.call(S.element);return}if(l.hooks.run("before-highlight",S),!S.grammar){T(l.util.encode(S.code));return}if(v&&r.Worker){var x=new Worker(l.filename);x.onmessage=function(N){T(N.data)},x.postMessage(JSON.stringify({language:S.language,code:S.code,immediateClose:!0}))}else T(l.highlight(S.code,S.grammar,S.language))},highlight:function(g,v,P){var D={code:g,grammar:v,language:P};if(l.hooks.run("before-tokenize",D),!D.grammar)throw new Error('The language "'+D.language+'" has no grammar.');return D.tokens=l.tokenize(D.code,D.grammar),l.hooks.run("after-tokenize",D),u.stringify(l.util.encode(D.tokens),D.language)},tokenize:function(g,v){var P=v.rest;if(P){for(var D in P)v[D]=P[D];delete v.rest}var L=new m;return E(L,L.head,g),p(g,L,v,L.head,0),R(L)},hooks:{all:{},add:function(g,v){var P=l.hooks.all;P[g]=P[g]||[],P[g].push(v)},run:function(g,v){var P=l.hooks.all[g];if(!(!P||!P.length))for(var D=0,L;L=P[D++];)L(v)}},Token:u};r.Prism=l;function u(g,v,P,D){this.type=g,this.content=v,this.alias=P,this.length=(D||"").length|0}u.stringify=function g(v,P){if(typeof v=="string")return v;if(Array.isArray(v)){var D="";return v.forEach(function(T){D+=g(T,P)}),D}var L={type:v.type,content:g(v.content,P),tag:"span",classes:["token",v.type],attributes:{},language:P},_=v.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(L.classes,_):L.classes.push(_)),l.hooks.run("wrap",L);var y="";for(var S in L.attributes)y+=" "+S+'="'+(L.attributes[S]||"").replace(/"/g,"&quot;")+'"';return"<"+L.tag+' class="'+L.classes.join(" ")+'"'+y+">"+L.content+"</"+L.tag+">"};function c(g,v,P,D){g.lastIndex=v;var L=g.exec(P);if(L&&D&&L[1]){var _=L[1].length;L.index+=_,L[0]=L[0].slice(_)}return L}function p(g,v,P,D,L,_){for(var y in P)if(!(!P.hasOwnProperty(y)||!P[y])){var S=P[y];S=Array.isArray(S)?S:[S];for(var T=0;T<S.length;++T){if(_&&_.cause==y+","+T)return;var x=S[T],N=x.inside,C=!!x.lookbehind,pe=!!x.greedy,ut=x.alias;if(pe&&!x.pattern.global){var Dn=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,Dn+"g")}for(var de=x.pattern||x,B=D.next,W=L;B!==v.tail&&!(_&&W>=_.reach);W+=B.value.length,B=B.next){var Q=B.value;if(v.length>g.length)return;if(!(Q instanceof u)){var he=1,ie;if(pe){if(ie=c(de,W,g,C),!ie||ie.index>=g.length)break;var Be=ie.index,Nt=ie.index+ie[0].length,me=W;for(me+=B.value.length;Be>=me;)B=B.next,me+=B.value.length;if(me-=B.value.length,W=me,B.value instanceof u)continue;for(var Ge=B;Ge!==v.tail&&(me<Nt||typeof Ge.value=="string");Ge=Ge.next)he++,me+=Ge.value.length;he--,Q=g.slice(W,me),ie.index-=W}else if(ie=c(de,0,Q,C),!ie)continue;var Be=ie.index,nt=ie[0],xt=Q.slice(0,Be),Kr=Q.slice(Be+nt.length),Qr=W+Q.length;_&&Qr>_.reach&&(_.reach=Qr);var tr=B.prev;xt&&(tr=E(v,tr,xt),W+=xt.length),I(v,tr,he);var bi=new u(y,N?l.tokenize(nt,N):nt,ut,nt);if(B=E(v,tr,bi),Kr&&E(v,B,Kr),he>1){var z={cause:y+","+T,reach:Qr};p(g,v,P,B.prev,W,z),_&&z.reach>_.reach&&(_.reach=z.reach)}}}}}}function m(){var g={value:null,prev:null,next:null},v={value:null,prev:g,next:null};g.next=v,this.head=g,this.tail=v,this.length=0}function E(g,v,P){var D=v.next,L={value:P,prev:v,next:D};return v.next=L,D.prev=L,g.length++,L}function I(g,v,P){for(var D=v.next,L=0;L<P&&D!==g.tail;L++)D=D.next;v.next=D,D.prev=v,g.length-=L}function R(g){for(var v=[],P=g.head.next;P!==g.tail;)v.push(P.value),P=P.next;return v}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(g){var v=JSON.parse(g.data),P=v.language,D=v.code,L=v.immediateClose;r.postMessage(l.highlight(D,l.languages[P],P)),L&&r.close()},!1)),l;var b=l.util.currentScript();b&&(l.filename=b.src,b.hasAttribute("data-manual")&&(l.manual=!0));function k(){l.manual||l.highlightAll()}if(!l.manual){var A=document.readyState;A==="loading"||A==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return l}(e);t.exports&&(t.exports=n),typeof Qt<"u"&&(Qt.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var u={};u[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:l},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(b,k){return"✖ Error "+b+" while fetching file: "+k},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",u="loading",c="loaded",p="failed",m="pre[data-src]:not(["+l+'="'+c+'"]):not(['+l+'="'+u+'"])';function E(b,k,A){var g=new XMLHttpRequest;g.open("GET",b,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?k(g.responseText):g.status>=400?A(i(g.status,g.statusText)):A(s))},g.send(null)}function I(b){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(k){var A=Number(k[1]),g=k[2],v=k[3];return g?v?[A,Number(v)]:[A,void 0]:[A,A]}}n.hooks.add("before-highlightall",function(b){b.selector+=", "+m}),n.hooks.add("before-sanity-check",function(b){var k=b.element;if(k.matches(m)){b.code="",k.setAttribute(l,u);var A=k.appendChild(document.createElement("CODE"));A.textContent=r;var g=k.getAttribute("data-src"),v=b.language;if(v==="none"){var P=(/\.(\w+)$/.exec(g)||[,"none"])[1];v=o[P]||P}n.util.setLanguage(A,v),n.util.setLanguage(k,v);var D=n.plugins.autoloader;D&&D.loadLanguages(v),E(g,function(L){k.setAttribute(l,c);var _=I(k.getAttribute("data-range"));if(_){var y=L.split(/\r\n?|\n/g),S=_[0],T=_[1]==null?y.length:_[1];S<0&&(S+=y.length),S=Math.max(0,Math.min(S-1,y.length)),T<0&&(T+=y.length),T=Math.max(0,Math.min(T,y.length)),L=y.slice(S,T).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(S+1))}A.textContent=L,n.highlightElement(A)},function(L){k.setAttribute(l,p),A.textContent=L})}}),n.plugins.fileHighlight={highlight:function(k){for(var A=(k||document).querySelectorAll(m),g=0,v;v=A[g++];)n.highlightElement(v)}};var R=!1;n.fileHighlight=function(){R||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),R=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(nS);var R2=nS.exports;const wn=sv(R2);Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(t){var e=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return e.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:e,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])})(Prism);(function(t){var e=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};t.languages.java=t.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:e,function:[t.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),t.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),t.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:e,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const rS=`// Type your JavaScript code here
`,P2=`# Type your Python code here
`,N2=`// Type your C++ code here
`,D2=`// Type your Java code here
`,O2=`<!-- Type your HTML here -->
`,L2=`/* Type your CSS here */
`,j2=`// Type JavaScript that runs in the preview here
`,M2=t=>{switch(t){case"javascript":return rS;case"python":return P2;case"c++":return N2;case"java":return D2;default:return""}},F2=t=>{switch(t){case"javascript":return"js";case"python":return"py";case"c++":return"cpp";case"java":return"java";default:return"txt"}},rv=t=>{switch(t){case"javascript":return"javascript";case"python":return"python";case"c++":return"cpp";case"java":return"java";default:return"javascript"}};function V2(){const[t,e]=M.useState("js"),[n,r]=M.useState("javascript"),[i,s]=M.useState(rS),[o,l]=M.useState(O2),[u,c]=M.useState(L2),[p,m]=M.useState(j2),[E,I]=M.useState(""),[R,b]=M.useState(""),[k,A]=M.useState(""),g=_=>{const y=_.target.value;r(y),s(M2(y)),I(""),b("")},v=()=>{let _="",y="";t==="js"?(_=i,y=`code.${F2(n)}`):(_=`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
${u}
    </style>
  </head>
  <body>
    ${o}
    <script>
${p}
    <\/script>
  </body>
</html>`,y="index.html");const S=new Blob([_],{type:"text/plain"}),T=URL.createObjectURL(S),x=document.createElement("a");x.href=T,x.download=y,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(T)},P=async()=>{I("Running..."),b("");try{const y=await(await fetch("http://localhost:3001/api/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:n,sourceCode:i})})).json();y.run?I(y.run.stdout+(y.run.stderr?`
`+y.run.stderr:"")):b(y.message||"Execution error")}catch(_){b(String(_))}},D=()=>{const _=`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>${u}</style>
  </head>
  <body>
    ${o}
    <script>
${p}
    <\/script>
  </body>
</html>`;A(_)},L={fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:14,minHeight:"100%",width:"100%",backgroundColor:"transparent"};return h.jsx("div",{className:"playground-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("header",{className:"page-header",children:[h.jsx("h1",{children:"Code Playground"}),h.jsx("p",{children:"Run code in multiple languages or preview HTML/CSS/JS instantly."})]}),h.jsxs("div",{className:"playground-tabs",children:[h.jsx("button",{type:"button",className:t==="js"?"active":"",onClick:()=>e("js"),children:"Compiler"}),h.jsx("button",{type:"button",className:t==="web"?"active":"",onClick:()=>e("web"),children:"HTML / CSS / JS preview"})]}),t==="js"?h.jsxs("section",{className:"playground-grid",children:[h.jsxs("div",{className:"playground-editor code-container",children:[h.jsxs("div",{className:"playground-toolbar",children:[h.jsxs("select",{className:"language-select",value:n,onChange:g,children:[h.jsx("option",{value:"javascript",children:"JavaScript"}),h.jsx("option",{value:"python",children:"Python"}),h.jsx("option",{value:"c++",children:"C++"}),h.jsx("option",{value:"java",children:"Java"})]}),h.jsxs("div",{className:"toolbar-actions",children:[h.jsx("button",{type:"button",className:"btn-secondary",onClick:v,children:"Save ⬇"}),h.jsx("button",{type:"button",onClick:P,children:"Run ▶"})]})]}),h.jsx("div",{className:"editor-scroller",children:h.jsx(ol,{value:i,onValueChange:s,highlight:_=>wn.highlight(_,wn.languages[rv(n)]||wn.languages.javascript,rv(n)),padding:15,style:L,textareaClassName:"editor-textarea"})})]}),h.jsxs("div",{className:"playground-output",children:[h.jsx("div",{className:"playground-toolbar",children:h.jsx("span",{children:"Output"})}),h.jsx("pre",{className:"output-box",children:E||"// Execution results appear here"}),R&&h.jsx("pre",{className:"error-box",children:R})]})]}):h.jsxs("section",{className:"playground-grid web-mode",children:[h.jsxs("div",{className:"playground-editor-columns",children:[h.jsxs("div",{className:"playground-editor code-container",children:[h.jsx("div",{className:"playground-toolbar",children:h.jsx("span",{children:"HTML"})}),h.jsx("div",{className:"editor-scroller",children:h.jsx(ol,{value:o,onValueChange:l,highlight:_=>wn.highlight(_,wn.languages.markup,"markup"),padding:15,style:L,textareaClassName:"editor-textarea"})})]}),h.jsxs("div",{className:"playground-editor code-container",children:[h.jsx("div",{className:"playground-toolbar",children:h.jsx("span",{children:"CSS"})}),h.jsx("div",{className:"editor-scroller",children:h.jsx(ol,{value:u,onValueChange:c,highlight:_=>wn.highlight(_,wn.languages.css,"css"),padding:15,style:L,textareaClassName:"editor-textarea"})})]}),h.jsxs("div",{className:"playground-editor code-container",children:[h.jsx("div",{className:"playground-toolbar",children:h.jsx("span",{children:"Client JS"})}),h.jsx("div",{className:"editor-scroller",children:h.jsx(ol,{value:p,onValueChange:m,highlight:_=>wn.highlight(_,wn.languages.javascript,"javascript"),padding:15,style:L,textareaClassName:"editor-textarea"})})]})]}),h.jsxs("div",{className:"playground-output",children:[h.jsxs("div",{className:"playground-toolbar",children:[h.jsx("span",{children:"Preview"}),h.jsxs("div",{className:"toolbar-actions",children:[h.jsx("button",{type:"button",className:"btn-secondary",onClick:v,children:"Save ⬇"}),h.jsx("button",{type:"button",onClick:D,children:"Run ▶"})]})]}),h.jsx("div",{className:"frame-wrap",children:h.jsx("iframe",{title:"Preview",srcDoc:k})})]})]})]})})}const U2="http://127.0.0.1:7612/ingest/c1112758-bd19-4395-ad2f-7654233b4714",iv="866f53";function al(t){fetch(U2,{method:"POST",headers:{"Content-Type":"application/json","X-Debug-Session-Id":iv},body:JSON.stringify({sessionId:iv,timestamp:Date.now(),...t})}).catch(()=>{})}const B2=[{role:"assistant",text:"Hi! I am Galaxy, your AI doubt assistant. Ask me coding/DSA doubts, concepts from lessons, or how to use features on this site."}];function z2(t){const e=t.toLowerCase();return e.includes("course")||e.includes("learn")?'You can browse all learning programs from the "Courses" section in the top navigation. Click "Courses" to see the list, then pick a course to view its lessons, quizzes, and practice.':e.includes("home")||e.includes("start")?'To return to the main page, click "Home" in the top navigation. From there you can see featured programs and quick stats.':e.includes("playground")||e.includes("code")?'To practice coding, use the "Playground" link in the top navigation. It lets you experiment with code alongside your lessons.':e.includes("quiz")||e.includes("test")||e.includes("assessment")?'Open a course from the "Courses" page, then look for the Quiz option for that course to test your understanding.':e.includes("practice")||e.includes("problems")||e.includes("exercises")?'Each course has a Practice section. Go to "Courses", choose a course, then select the Practice option to solve problems.':e.includes("doubt")||e.includes("ai")||e.includes("assistant")||e.includes("chat")?"You are already on the AI assistant page. Type your question in the box below and press Send, and I (Galaxy) will guide you.":e.includes("support")||e.includes("contact")||e.includes("help")?"I’m Galaxy, the website assistant. I don't have a dedicated support page to point you to yet, but you can explore the Home and Courses sections for more details, and keep using this assistant for help.":`I’m Galaxy, the website assistant. I don't have that exact information yet, but I can help guide you. Try asking about "courses", "playground", "quizzes", or "practice", or tell me what you want to do on this site.`}function $2(){const[t,e]=M.useState(B2),[n,r]=M.useState(""),[i,s]=M.useState(!1),o=async l=>{var p;l.preventDefault();const u=n.trim();if(!u||i)return;al({runId:"pre-fix",hypothesisId:"H2",location:"DoubtChat.jsx:send:entry",message:"send invoked",data:{textLen:u.length,existingMessages:t.length}});const c={role:"user",text:u};e(m=>[...m,c]),r(""),s(!0);try{const m=[...t,c].map(b=>({role:b.role,content:b.text})),E=await fetch("/api/galaxy-chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:m})});al({runId:"pre-fix",hypothesisId:"H2",location:"DoubtChat.jsx:send:fetch-return",message:"fetch returned",data:{ok:E.ok,status:E.status}});let I;try{I=await E.json()}catch{const b="Galaxy could not read a response from the server. Make sure the backend is running (`npm run server`) and that you opened the site via the Vite dev server (`npm run dev`).";e(k=>[...k,{role:"assistant",text:b}]);return}if(!E.ok){const b=typeof(I==null?void 0:I.error)=="string"&&I.error.trim()?I.error:`Galaxy server error (${E.status}).`;e(k=>[...k,{role:"assistant",text:b}]);return}if(E.ok&&((p=I==null?void 0:I.reply)!=null&&p.content)){const b=typeof I.reply.content=="string"?I.reply.content:Array.isArray(I.reply.content)?I.reply.content.map(k=>k.text||k).join(" "):"";if(b){al({runId:"pre-fix",hypothesisId:"H3",location:"DoubtChat.jsx:send:got-reply",message:"received reply content",data:{replyLen:b.length}}),e(k=>[...k,{role:"assistant",text:b}]);return}}const R=z2(u);e(b=>[...b,{role:"assistant",text:R}])}catch(m){al({runId:"pre-fix",hypothesisId:"H4",location:"DoubtChat.jsx:send:catch",message:"send error",data:{message:String((m==null?void 0:m.message)??m)}});const E="Galaxy could not reach the server. Start the backend with `npm run server` and open the site from the dev server (for example `http://localhost:5173/`), not by double-clicking files in `dist/`.";e(I=>[...I,{role:"assistant",text:E}])}finally{s(!1)}};return h.jsx("div",{className:"doubt-chat-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("header",{className:"page-header",children:[h.jsx("h1",{children:"Galaxy – AI Doubt Assistant"}),h.jsx("p",{children:"Ask your doubts about coding, DSA, quizzes, practice, or where to find things on this site."})]}),h.jsxs("div",{className:"chat-card",children:[h.jsxs("div",{className:"chat-messages",children:[t.map((l,u)=>h.jsxs("div",{className:`chat-bubble ${l.role==="user"?"user":"assistant"}`,children:[h.jsx("span",{className:"role-label",children:l.role==="user"?"You":"Galaxy"}),h.jsx("p",{children:l.text})]},u)),i&&h.jsxs("div",{className:"chat-bubble assistant",children:[h.jsx("span",{className:"role-label",children:"Galaxy"}),h.jsx("p",{children:"Thinking…"})]})]}),h.jsxs("form",{className:"chat-input-row",onSubmit:o,children:[h.jsx("input",{type:"text",placeholder:"Ask Galaxy a doubt, e.g. “What is flexbox?”",value:n,onChange:l=>r(l.target.value)}),h.jsx("button",{type:"submit",disabled:i,children:i?"Sending…":"Send"})]})]})]})})}function q2(){const{courseSlug:t}=Uu(),e=rc(t);if(!e)return h.jsxs("div",{className:"container",children:[h.jsx("p",{children:"Course not found."}),h.jsx(ye,{to:"/courses",children:"Back to courses"})]});const n=Z0(e.id);if(!n)return h.jsxs("div",{className:"container",children:[h.jsx("p",{children:"No quiz has been added for this course yet."}),h.jsx(ye,{to:`/courses/${e.slug}`,children:"Back to course"})]});const[r,i]=M.useState({}),[s,o]=M.useState(!1),l=c=>{c.preventDefault(),o(!0)},u=n.questions.reduce((c,p)=>r[p.id]===p.correctIndex?c+1:c,0);return h.jsx("div",{className:"quiz-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("nav",{className:"lesson-breadcrumb",children:[h.jsx(ye,{to:"/courses",children:"Courses"}),h.jsx("span",{className:"sep",children:"/"}),h.jsx(ye,{to:`/courses/${e.slug}`,children:e.title}),h.jsx("span",{className:"sep",children:"/"}),h.jsx("span",{children:"Quiz"})]}),h.jsxs("header",{className:"page-header",children:[h.jsx("h1",{children:n.title}),h.jsx("p",{children:"Answer the questions to test your understanding."})]}),h.jsxs("form",{className:"quiz-card",onSubmit:l,children:[n.questions.map((c,p)=>{const m=r[c.id],E=s&&m===c.correctIndex,I=s&&m!=null&&m!==c.correctIndex;return h.jsxs("div",{className:"quiz-question",children:[h.jsxs("h2",{children:["Q",p+1,". ",c.text]}),h.jsx("div",{className:"quiz-options",children:c.options.map((R,b)=>h.jsxs("label",{className:`quiz-option ${s&&b===c.correctIndex?"correct":s&&b===m?"wrong":""}`,children:[h.jsx("input",{type:"radio",name:c.id,value:b,checked:m===b,onChange:()=>i(k=>({...k,[c.id]:b})),disabled:s}),h.jsx("span",{children:R})]},b))}),s&&h.jsx("p",{className:`quiz-explanation ${E?"ok":I?"bad":""}`,children:c.explanation})]},c.id)}),h.jsxs("div",{className:"quiz-footer",children:[s&&h.jsxs("span",{className:"score",children:["Score: ",u," / ",n.questions.length]}),s?h.jsx(ye,{to:`/courses/${e.slug}`,className:"btn btn-secondary",children:"Back to course"}):h.jsx("button",{type:"submit",className:"btn btn-primary",children:"Submit quiz"})]})]})]})})}function H2(){const{courseSlug:t}=Uu(),e=rc(t);if(!e)return h.jsxs("div",{className:"container",children:[h.jsx("p",{children:"Course not found."}),h.jsx(ye,{to:"/courses",children:"Back to courses"})]});const n=eS(e.id);return n?h.jsx("div",{className:"practice-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("nav",{className:"lesson-breadcrumb",children:[h.jsx(ye,{to:"/courses",children:"Courses"}),h.jsx("span",{className:"sep",children:"/"}),h.jsx(ye,{to:`/courses/${e.slug}`,children:e.title}),h.jsx("span",{className:"sep",children:"/"}),h.jsx("span",{children:"Practice"})]}),h.jsxs("header",{className:"page-header",children:[h.jsx("h1",{children:n.title}),h.jsx("p",{children:"Use these tasks to get hands-on practice. Try solving them in the playground or your editor."})]}),h.jsx("ol",{className:"practice-list",children:n.tasks.map((r,i)=>h.jsx("li",{children:r},i))}),h.jsx("div",{className:"practice-footer",children:h.jsx(ye,{to:"/playground",className:"btn btn-primary",children:"Open playground"})})]})}):h.jsxs("div",{className:"container",children:[h.jsx("p",{children:"No practice set has been added for this course yet."}),h.jsx(ye,{to:`/courses/${e.slug}`,children:"Back to course"})]})}function W2(){const t=Vu(),[e,n]=M.useState(""),[r,i]=M.useState(!1),s=async()=>{n(""),i(!0);try{const l=(await Rk(_p,YN)).user,u=Ah(Ch,"users",l.uid);if(!(await K0(u)).exists()){const p=l.displayName?l.displayName.split(" "):[];await Q0(u,{firstName:p[0]||"",lastName:p.length>1?p.slice(1).join(" "):"",studentEmail:l.email||"",photoBase64:l.photoURL||"",createdAt:new Date().toISOString()},{merge:!0})}t("/")}catch(o){console.error(o),o.code==="auth/invalid-api-key"||o.message.includes("API key")?n("FIREBASE ERROR: MISSING API KEY. PLEASE UPDATE src/lib/firebase.js WITH YOUR KEYS!"):n(`AUTH FAILED: ${o.message}`)}finally{i(!1)}};return h.jsxs("div",{className:"login-page",children:[h.jsx("div",{className:"login-left",children:h.jsxs("div",{className:"login-brand",children:[h.jsx("h1",{children:"LEARNPLUS"}),h.jsx("p",{className:"brand-tagline",children:"MASTER YOUR CRAFT."})]})}),h.jsx("div",{className:"login-right",children:h.jsxs("div",{className:"login-container",children:[h.jsx("h2",{className:"login-title",children:"SIGN IN"}),h.jsx("p",{className:"login-subtitle",children:"ACCESS YOUR PLATFORM DASHBOARD"}),h.jsxs("div",{className:"oauth-only-container",style:{marginTop:"3rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[h.jsx("button",{className:"btn-primary",onClick:s,type:"button",disabled:r,style:{width:"100%",padding:"1.2rem",fontSize:"1rem",display:"flex",justifyContent:"center",gap:"10px"},children:r?"CONNECTING...":"CONTINUE WITH GOOGLE"}),h.jsx("p",{style:{color:"#666",fontSize:"0.75rem",textAlign:"center",marginTop:"1rem",letterSpacing:"1px"},children:"WE EXCLUSIVELY USE GOOGLE FOR SECURE AUTHENTICATION."})]}),e&&h.jsx("div",{style:{color:"#ff4444",fontSize:"0.75rem",fontWeight:600,letterSpacing:"1px",marginTop:"2rem",lineHeight:"1.4",textAlign:"center"},children:e})]})})]})}const G2=[{id:"sb1",category:"Basics & I/O",title:"Hello World",description:"The simplest Python program to print output.",code:'print("Hello, World!")'},{id:"sb2",category:"Basics & I/O",title:"Variables",description:"Dynamically typed variables.",code:`x = 10
name = "Python"
pi_value = 3.14159`},{id:"sb3",category:"Basics & I/O",title:"User Input",description:"Reading input from the console as a string.",code:`user_name = input("Enter your name: ")
print("Welcome,", user_name)`},{id:"sb4",category:"Basics & I/O",title:"Integer Input",description:"Converting console input to an integer.",code:`age = int(input("Enter your age: "))
print(f"Next year you will be {age + 1}")`},{id:"sb5",category:"Basics & I/O",title:"Multiple Variables",description:"Assigning values to multiple variables in a single line.",code:`a, b, c = 1, 2, "Geeks"
print(a, b, c)`},{id:"sb6",category:"Basics & I/O",title:"Swap Variables",description:"Swapping two variables without a temporary variable.",code:`a, b = 10, 20
a, b = b, a
print(a, b)`},{id:"sb7",category:"Basics & I/O",title:"String Formatting (f-string)",description:"Embedding expressions inside string literals.",code:`lang = "Python"
version = 3.10
print(f"{lang} version {version} is great!")`},{id:"sb8",category:"Basics & I/O",title:"Check Data Type",description:"Using type() to find the internal class of a variable.",code:`x = [1, 2, 3]
print(type(x))  # <class 'list'>`},{id:"sb9",category:"Basics & I/O",title:"Comments",description:"Single and multi-line comments.",code:`# Single line comment
"""
Multi-line docstring comment
used for documentation
"""`},{id:"sb10",category:"Basics & I/O",title:"Basic Math Operators",description:"Addition, subtraction, multiplication, division.",code:`print(10 + 3)  # Addition
print(10 - 3)  # Subtraction
print(10 * 3)  # Multiplication
print(10 / 3)  # Standard Float Division`},{id:"sb11",category:"Basics & I/O",title:"Floor Division & Modulo",description:"Division resulting in integers and remainder operator.",code:`print(10 // 3)  # Floor Division (3)
print(10 % 3)   # Modulo Remainder (1)`},{id:"sb12",category:"Basics & I/O",title:"Exponentiation",description:"Power operator in Python.",code:"print(2 ** 3)  # 2 to the power of 3 (8)"},{id:"sc1",category:"Control Flow",title:"If-Else Statement",description:"Basic conditional branching.",code:`n = 10
if n > 0:
    print("Positive")
else:
    print("Negative or Zero")`},{id:"sc2",category:"Control Flow",title:"Elif Ladder",description:"Multiple condition checks.",code:`score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")`},{id:"sc3",category:"Control Flow",title:"Ternary Operator",description:"One-line conditional expression.",code:`age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)`},{id:"sc4",category:"Control Flow",title:"For Loop (Range)",description:"Iterating a fixed number of times.",code:`for i in range(5):
    print(i)  # Prints 0 to 4`},{id:"sc5",category:"Control Flow",title:"For Loop (List)",description:"Iterating over elements in a list.",code:`fruits = ["Apple", "Mango", "Banana"]
for fruit in fruits:
    print(fruit)`},{id:"sc6",category:"Control Flow",title:"While Loop",description:"Executing code while a condition remains true.",code:`count = 3
while count > 0:
    print(count)
    count -= 1`},{id:"sc7",category:"Control Flow",title:"Break Statement",description:"Exiting a loop prematurely.",code:`for i in range(10):
    if i == 5:
        break
    print(i)`},{id:"sc8",category:"Control Flow",title:"Continue Statement",description:"Skipping the rest of the loop block and going to the next iteration.",code:`for i in range(5):
    if i == 2:
        continue
    print(i)`},{id:"sc9",category:"Control Flow",title:"Pass Statement",description:"A null operation used as a placeholder.",code:`for i in range(5):
    pass  # TODO: implement logic here`},{id:"python6",category:"Control Flow",title:"For Loop",description:"Used to iterate over a sequence (such as a list, tuple, dictionary, or string).",code:`fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`},{id:"python7",category:"Data Structures",title:"Sets & Tuples",description:"Tuples are immutable ordered lists. Sets are unordered collections of unique elements.",code:`# Tuple (immutable)
my_tuple = (1, 2, 3)

# Set (unique items)
my_set = {1, 2, 2, 3}
print(my_set) # {1, 2, 3}`},{id:"python8",category:"Functional",title:"Lambda Functions",description:"Small anonymous functions defined with the lambda keyword.",code:`add = lambda x, y: x + y
print(add(5, 3)) # 8`},{id:"python9",category:"Functional",title:"Map, Filter, Reduce",description:"Higher-order functions that take a function and an iterable as arguments.",code:`from functools import reduce

nums = [1, 2, 3, 4]
# Map
squares = list(map(lambda x: x**2, nums))
# Filter
evens = list(filter(lambda x: x % 2 == 0, nums))
# Reduce
sum_all = reduce(lambda x, y: x + y, nums)`},{id:"python10",category:"Exceptions",title:"Try / Except",description:"Error handling protocol to catch exceptions without crashing the program.",code:`try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Execution complete.")`},{id:"python11",category:"OOP",title:"Classes & Objects",description:"Python is an object-oriented programming language. Almost everything in Python is an object, with its properties and methods.",code:`class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name} says woof!"

my_dog = Dog("Rex")
print(my_dog.bark())`},{id:"python12",category:"OOP",title:"Inheritance",description:"Allows us to define a class that inherits all the methods and properties from another class.",code:`class Animal:
    def speak(self):
        pass

class Cat(Animal):
    def speak(self):
        return "Meow"

c = Cat()
print(c.speak())`},{id:"python13",category:"Functions",title:"*args and **kwargs",description:"Syntax used to pass a variable number of arguments to a function.",code:`def my_func(*args, **kwargs):
    for arg in args:
        print(arg)
    for key, value in kwargs.items():
        print(f"{key} = {value}")

my_func(1, 2, 3, name="Alice", age=25)`},{id:"python14",category:"File I/O",title:"File Handling",description:"Functions for creating, reading, updating, and deleting files.",code:`# Write to a file
with open('file.txt', 'w') as f:
    f.write('Hello World')

# Read a file
with open('file.txt', 'r') as f:
    content = f.read()
    print(content)`},{id:"python15",category:"Data Structures",title:"Dictionary Comprehension",description:"A concise way to create dictionaries from an iterable sequence.",code:`squares_dict = {x: x**2 for x in range(1, 6)}
print(squares_dict)
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`}],K2=[{id:"darr1",category:"Arrays",title:"Find Max and Min",description:"Finding the maximum and minimum elements in an array.",code:`def find_max_min(arr):
    return max(arr), min(arr)

print(find_max_min([1, 5, 3, 9, 2]))`},{id:"darr2",category:"Arrays",title:"Reverse an Array",description:"Reversing elements using two pointers.",code:`def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

print(reverse_array([1, 2, 3, 4]))`},{id:"darr3",category:"Arrays",title:"Prefix Sum Array",description:"Create an array where prefix[i] is the sum of all elements up to index i.",code:`def prefix_sum(arr):
    pref = [0] * len(arr)
    pref[0] = arr[0]
    for i in range(1, len(arr)):
        pref[i] = pref[i-1] + arr[i]
    return pref

print(prefix_sum([10, 20, 10, 5, 15]))`},{id:"dll1",category:"Linked List",title:"Node Class Definition",description:"Basic structure of a Singly Linked List Node.",code:`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None`},{id:"dll2",category:"Linked List",title:"Reverse Linked List",description:"Iteratively reverse a linked list.",code:`def reverse_linked_list(head):
    prev, curr = None, head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`},{id:"dll3",category:"Linked List",title:"Detect Loop (Floyd)",description:"Detecting a cycle in a linked list using slow and fast pointers.",code:`def detect_loop(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`},{id:"dsq1",category:"Stack",title:"Stack Implementation",description:"Using Python List as a Stack (LIFO).",code:`stack = []
stack.append(10)  # Push
stack.append(20)
top = stack.pop() # Pop
print(top)        # 20`},{id:"dsq2",category:"Queue",title:"Queue Implementation",description:"Using collections.deque for O(1) Queue (FIFO) operations.",code:`from collections import deque
q = deque()
q.append(10)      # Enqueue
q.append(20)
first = q.popleft() # Dequeue
print(first)      # 10`},{id:"dsq3",category:"Stack",title:"Valid Parentheses",description:"Check if a string of brackets is valid using a Stack.",code:`def is_valid(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in pairs:
            if not stack or stack.pop() != pairs[char]:
                return False
        else:
            stack.append(char)
    return not stack`},{id:"dse1",category:"Searching",title:"Linear Search",description:"Sequential search over an array. O(N) time.",code:`def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`},{id:"dse2",category:"Searching",title:"Binary Search",description:"Efficient search on a sorted array. O(log N) time.",code:`def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`},{id:"dso1",category:"Sorting",title:"Bubble Sort",description:"Repeatedly swaps adjacent elements if they are in the wrong order. O(N^2) time.",code:`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`},{id:"dso2",category:"Sorting",title:"Merge Sort",description:"Divide and Conquer sorting algorithm. O(N log N) time.",code:`def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L, R = arr[:mid], arr[mid:]
        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]: arr[k], i = L[i], i+1
            else: arr[k], j = R[j], j+1
            k += 1
        while i < len(L): arr[k], i, k = L[i], i+1, k+1
        while j < len(R): arr[k], j, k = R[j], j+1, k+1
    return arr`},{id:"dso3",category:"Sorting",title:"Quick Sort",description:"Picks an element as pivot and partitions the given array around the picked pivot.",code:`def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`},{id:"dtr1",category:"Tree",title:"Binary Tree Node",description:"Basic structure of a Binary Tree Node.",code:`class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key`},{id:"dtr2",category:"Tree",title:"Inorder Traversal",description:"Left, Root, Right mapping of a Binary Tree.",code:`def inorder_traversal(root):
    res = []
    if root:
        res = inorder_traversal(root.left)
        res.append(root.val)
        res = res + inorder_traversal(root.right)
    return res`},{id:"dtr3",category:"Tree",title:"Level Order Traversal (BFS)",description:"Breadth-First Search on a Tree using a Queue.",code:`from collections import deque
def level_order(root):
    if not root: return []
    queue, res = deque([root]), []
    while queue:
        node = queue.popleft()
        res.append(node.val)
        if node.left: queue.append(node.left)
        if node.right: queue.append(node.right)
    return res`},{id:"dgr1",category:"Graph",title:"Adjacency List Representation",description:"Graph represented using a Dictionary of Lists.",code:`graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}`},{id:"dgr2",category:"Graph",title:"Breadth First Search (BFS)",description:"Level-by-level traversal using a Queue.",code:`from collections import deque
def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex, end=" ")
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`},{id:"dgr3",category:"Graph",title:"Depth First Search (DFS)",description:"Deep recursive traversal tracking visited vertices.",code:`def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    if node not in visited:
        print(node, end=" ")
        visited.add(node)
        for neighbor in graph[node]:
            dfs(graph, neighbor, visited)
    return visited`},{id:"ddp1",category:"Dynamic Programming",title:"Fibonacci (Memoization)",description:"Top-down approach using recursion + caching.",code:`def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]`},{id:"ddp2",category:"Dynamic Programming",title:"Fibonacci (Tabulation)",description:"Bottom-up approach iteratively filling an array.",code:`def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]`},{id:"dadv1",category:"Advanced Graph",title:"Dijkstra's Algorithm",description:"Finds the shortest paths from a source to all vertices in a weighted graph using a Priority Queue. Time Complexity: O((V+E)logV).",code:`import heapq
def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_distance, current_node = heapq.heappop(pq)
        
        if current_distance > distances[current_node]:
            continue
            
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    return distances`},{id:"dadv2",category:"Advanced Graph",title:"Topological Sort",description:"Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that every directed edge u -> v, u comes before v. Uses DFS and a stack.",code:`def topo_sort_util(v, adj, visited, stack):
    visited[v] = True
    for i in adj[v]:
        if not visited[i]:
            topo_sort_util(i, adj, visited, stack)
    stack.append(v)

def topological_sort(adj, V):
    visited = [False] * V
    stack = []
    for i in range(V):
        if not visited[i]:
            topo_sort_util(i, adj, visited, stack)
    return stack[::-1]`},{id:"dstr1",category:"String Algorithms",title:"KMP Algorithm",description:"Knuth-Morris-Pratt pattern matching algorithm. Computes a Longest Prefix Suffix (LPS) array to skip redundant comparisons. Time Complexity: O(N+M).",code:`def compute_lps(pattern):
    lps = [0] * len(pattern)
    length, i = 0, 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0: length = lps[length - 1]
            else: lps[i] = 0; i += 1
    return lps

def kmp_search(text, pattern):
    lps = compute_lps(pattern)
    i = j = 0
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1; j += 1
        if j == len(pattern):
            print("Found pattern at", i - j)
            j = lps[j - 1]
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0: j = lps[j - 1]
            else: i += 1`},{id:"ddp3",category:"Dynamic Programming",title:"0/1 Knapsack Problem",description:"Given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value. DP Table approach: O(N*W).",code:`def knapsack(W, wt, val, n):
    K = [[0 for w in range(W + 1)] for i in range(n + 1)]
    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif wt[i-1] <= w:
                K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]], K[i-1][w])
            else:
                K[i][w] = K[i-1][w]
    return K[n][W]`},{id:"ddp4",category:"Dynamic Programming",title:"Longest Common Subsequence",description:"Find the longest sequence from strings by deleting chars without changing order. O(M*N).",code:`def lcs(X, Y):
    m, n = len(X), len(Y)
    L = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if X[i-1] == Y[j-1]:
                L[i][j] = L[i-1][j-1] + 1
            else:
                L[i][j] = max(L[i-1][j], L[i][j-1])
    return L[m][n]`},{id:"dTrie1",category:"Tree",title:"Trie (Prefix Tree)",description:"A specialized tree used to store associative arrays where keys are usually strings. Excellent for extremely fast O(M) dictionary lookups and autocomplete.",code:`class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word`},{id:"dbt1",category:"Backtracking",title:"N-Queens Problem",description:"Place N queens on an N×N chessboard so that no two queens attack each other. Recurses row by row and backtracks when no safe square is found.",code:`def solve_n_queens(n):
    cols, pos_diag, neg_diag = set(), set(), set()
    res, board = [], [["."] * n for _ in range(n)]

    def backtrack(row):
        if row == n:
            res.append(["".join(r) for r in board])
            return
        for col in range(n):
            if col in cols or (row + col) in pos_diag or (row - col) in neg_diag:
                continue
            cols.add(col)
            pos_diag.add(row + col)
            neg_diag.add(row - col)
            board[row][col] = "Q"
            backtrack(row + 1)
            cols.remove(col)
            pos_diag.remove(row + col)
            neg_diag.remove(row - col)
            board[row][col] = "."

    backtrack(0)
    return res`},{id:"dsa11",category:"Graph Algorithms",title:"Prim's MST Algorithm",description:"A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",code:`import heapq
def prims(graph, start):
    mst = []
    visited = set([start])
    edges = [(cost, start, to) for to, cost in graph[start].items()]
    heapq.heapify(edges)
    while edges:
        cost, frm, to = heapq.heappop(edges)
        if to not in visited:
            visited.add(to)
            mst.append((frm, to, cost))
            for to_next, cost_next in graph[to].items():
                if to_next not in visited:
                    heapq.heappush(edges, (cost_next, to, to_next))
    return mst`},{id:"dsa12",category:"Advanced Data Structures",title:"Trie (Prefix Tree)",description:"A search tree used to store a dynamic set or associative array where the keys are usually strings.",code:`class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True`},{id:"dsa13",category:"Advanced Data Structures",title:"Segment Tree",description:"A tree data structure used for storing information about intervals, or segments. It allows querying which of the stored segments contain a given point.",code:`class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = [0] * (2 * self.n)
        self.build(data)

    def build(self, data):
        for i in range(self.n):
            self.tree[self.n + i] = data[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]

    def query(self, l, r):
        res = 0
        l += self.n
        r += self.n
        while l < r:
            if l % 2 == 1:
                res += self.tree[l]
                l += 1
            if r % 2 == 1:
                r -= 1
                res += self.tree[r]
            l //= 2
            r //= 2
        return res`},{id:"dsa14",category:"Advanced Data Structures",title:"Disjoint Set (Union-Find)",description:"A data structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets.",code:`class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            # Path compression
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            if self.rank[rootX] > self.rank[rootY]:
                self.parent[rootY] = rootX
            elif self.rank[rootX] < self.rank[rootY]:
                self.parent[rootX] = rootY
            else:
                self.parent[rootY] = rootX
                self.rank[rootX] += 1`}],Q2=[{id:"aiml1",category:"Theory & Basics",title:"Types of Machine Learning",description:`Machine Learning is divided into three main classes:
1. Supervised Learning: Uses labeled datasets (Regression, Classification)
2. Unsupervised Learning: Finds patterns in unlabeled data (Clustering, PCA)
3. Reinforcement Learning: Agent learns via rewards/punishments in an environment.`,code:`# This is a conceptual note.
# No standard code applies directly to types of ML,
# but Scikit-Learn handles the first two very well.
import sklearn
print(f"Scikit-Learn Version: {sklearn.__version__}")`},{id:"aiml2",category:"Data Preprocessing",title:"Loading Data with Pandas",description:"Pandas is the core library for data manipulation. pd.read_csv() seamlessly imports datasets into a DataFrame format.",code:`import pandas as pd

# Load CSV dataset
df = pd.read_csv('dataset.csv')

# Preview first 5 rows
print(df.head())

# Check for missing values
print(df.isnull().sum())`},{id:"aiml3",category:"Data Preprocessing",title:"Train/Test Split",description:"Crucial step to evaluate ML models. Data is split into training data (to learn) and testing data (to evaluate unseen accuracy).",code:`from sklearn.model_selection import train_test_split

X = df.drop('target', axis=1)
y = df['target']

# 80% train, 20% test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)`},{id:"aiml4",category:"Data Preprocessing",title:"Feature Scaling (Standardization)",description:"Many algorithms (like KNN, SVM) perform poorly if features scale differently. StandardScaler normalizes data so features have a mean of 0 and std deviation of 1.",code:`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
# Fit on training set ONLY, then transform both
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)`},{id:"aiml5",category:"Supervised: Regression",title:"Linear Regression",description:"Linear regression algorithms predict a continuous value by finding the best fit straight line through data points. Formula: Y = mX + c.",code:`from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

model = LinearRegression()
model.fit(X_train, y_train)

predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print(f"Mean Squared Error: {mse}")`},{id:"aiml6",category:"Supervised: Classification",title:"Logistic Regression",description:"Despite its name, it is a binary Classification algorithm (predicts 0 or 1). Uses the Sigmoid function to map predictions to probabilities between 0 and 1.",code:`from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

clf = LogisticRegression()
clf.fit(X_train, y_train)

preds = clf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, preds)*100:.2f}%")`},{id:"aiml7",category:"Supervised: Classification",title:"Decision Trees",description:"Splits data repeatedly based on feature conditions to maximize Information Gain (usually via Gini impurity or Entropy). Highly interpretable but prone to overfitting.",code:`from sklearn.tree import DecisionTreeClassifier

tree = DecisionTreeClassifier(max_depth=5, random_state=42)
tree.fit(X_train, y_train)

print("Decision Tree Accuracy:", tree.score(X_test, y_test))`},{id:"aiml8",category:"Supervised: Classification",title:"Random Forest",description:'An ensemble method combining hundreds of Decision Trees to reduce overfitting and improve prediction variance via the "wisdom of crowds" (Bagging).',code:`from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=100)
rf.fit(X_train, y_train)

# Feature importance helps explain the model
importance = rf.feature_importances_`},{id:"aiml9",category:"Supervised: Classification",title:"Support Vector Machines (SVM)",description:'SVM classifies data by finding a hyperplane that maximizes the "margin" between classes. Can handle non-linear separation via the "Kernel Trick".',code:`from sklearn.svm import SVC

# Kernel can be 'linear', 'poly', 'rbf' etc.
svm_model = SVC(kernel='rbf', C=1.0)
svm_model.fit(X_train_scaled, y_train)

print("SVM Score:", svm_model.score(X_test_scaled, y_test))`},{id:"aiml10",category:"Unsupervised Learning",title:"K-Means Clustering",description:"An unsupervised algorithm grouping unlabeled data into K distinct clusters. It iteratively adjusts cluster centroids to minimize within-cluster variance.",code:`from sklearn.cluster import KMeans

# Trying to find 3 distinct groups
kmeans = KMeans(n_clusters=3, random_state=0)
kmeans.fit(X_scaled)

# The assigned cluster for each row
clusters = kmeans.labels_
print(kmeans.cluster_centers_)`},{id:"aiml11",category:"Unsupervised Learning",title:"PCA (Dimensionality Reduction)",description:"Principal Component Analysis (PCA) compresses high-dimensional data into lower dimensions by identifying lines of maximum variance.",code:`from sklearn.decomposition import PCA

# Reduce dataset to 2 dimensions for visualization
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

print(f"Variance retained: {sum(pca.explained_variance_ratio_)}")`},{id:"aiml12",category:"NLP",title:"Tokenization & Stop Words",description:'Fundamental NLP steps: Tokenization splits text into individual words, and Stop Words removing discards common/uninformative words (like "the", "a").',code:`import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

nltk.download('punkt')
nltk.download('stopwords')

text = "Machine Learning is an exciting branch of AI."
tokens = word_tokenize(text)
clean = [word for word in tokens if word.lower() not in stopwords.words('english')]
print(clean)`},{id:"aiml13",category:"NLP",title:"TF-IDF Vectorization",description:"Text implies words; ML requires numbers. Term Frequency-Inverse Document Frequency heavily weights unique, descriptive words while penalizing common ones.",code:`from sklearn.feature_extraction.text import TfidfVectorizer

docs = ["I love AI.", "Machine learning is fun."]
vectorizer = TfidfVectorizer()

X_tfidf = vectorizer.fit_transform(docs)
print(vectorizer.get_feature_names_out())
print(X_tfidf.toarray())`},{id:"aiml14",category:"Deep Learning",title:"Multi-Layer Perceptron (MLP)",description:"A basic Feed-Forward Artificial Neural Network consisting of an input layer, hidden layers, and an output layer. Good for non-linear patterns.",code:`from sklearn.neural_network import MLPClassifier

# 2 hidden layers with 100 and 50 neurons respectively
mlp = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=500)
mlp.fit(X_train_scaled, y_train)

print("Neural Net Accuracy:", mlp.score(X_test_scaled, y_test))`},{id:"aiml15",category:"Deep Learning",title:"PyTorch Tensor Basics",description:"PyTorch is the industry-standard Deep Learning library. Tensors are multidimensional matrices structurally similar to NumPy arrays, but can run on GPUs.",code:`import torch

# Create a random tensor
x = torch.rand(2, 2)
print(x)

# Move to GPU if available
device = 'cuda' if torch.cuda.is_available() else 'cpu'
x = x.to(device)
print(f"Tensor is on {x.device}")`}],Y2=[{id:"js1",category:"Basics",title:"let vs const vs var",description:"Differences in variable declarations. let and const are block-scoped, var is function-scoped. const cannot be reassigned.",code:`let a = 10;
a = 20; // Valid

const b = 30;
// b = 40; // TypeError: Assignment to constant variable.

var c = 50;
var c = 60; // Valid (hoisted)`},{id:"js2",category:"Functions",title:"Arrow Functions",description:"A more concise syntax for writing function expressions. They do not bind their own `this`.",code:`// Traditional
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

// Single parameter
const square = n => n * n;`},{id:"js3",category:"Arrays",title:"Array map()",description:"Creates a new array populated with the results of calling a provided function on every element in the calling array.",code:`const numbers = [1, 2, 3, 4];

// Multiply each by 2
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]`},{id:"js4",category:"Arrays",title:"Array filter()",description:"Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test.",code:`const words = ['spray', 'elite', 'exuberant', 'destruction'];

// Keep words with length > 6
const result = words.filter(word => word.length > 6);
console.log(result); // ["exuberant", "destruction"]`},{id:"js5",category:"Asynchronous",title:"Promises",description:"The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",code:`const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 300);
});

myPromise
  .then(value => console.log(value)) // 'Success!'
  .catch(error => console.error(error));`},{id:"js6",category:"Asynchronous",title:"Async / Await",description:"Syntactic sugar on top of Promises, making asynchronous code easier to read and chain sequentially without .then() hell.",code:`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();`},{id:"js7",category:"Arrays",title:"Array reduce()",description:'Executes a user-supplied "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element.',code:`const numbers = [1, 2, 3, 4];
// sum starts at 0
const initialValue = 0;
const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial); // 10`},{id:"js8",category:"Arrays",title:"Array forEach()",description:"Executes a provided function once for each array element. Note: Unlike map(), it always returns undefined and is purely for side effects.",code:`const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"`},{id:"js9",category:"ES6 Syntax",title:"Destructuring Assignment",description:"Syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",code:`// Object Destructuring
const user = { id: 42, isVerified: true };
const { id, isVerified } = user;

// Array Destructuring
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2`},{id:"js10",category:"ES6 Syntax",title:"Spread Syntax (...)",description:"Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.",code:`// Expanding arrays
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];

// Cloning objects
const obj1 = { foo: 'bar', x: 42 };
const clonedObj = { ...obj1 };`},{id:"js11",category:"Functions",title:"Rest Parameters",description:"The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.",code:`function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10`},{id:"js12",category:"ES6 Syntax",title:"Template Literals",description:"Literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.",code:'const a = 5;\nconst b = 10;\n// String interpolation using ...\nconsole.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);\n// "Fifteen is 15 and not 20."'},{id:"js13",category:"ES6 Syntax",title:"Classes & Constructors",description:"Classes are a template for creating objects. They encapsulate data with code to work on that data.",code:`class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea()); // 100`},{id:"js14",category:"Theory",title:"Closures",description:"A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",code:`function makeFunc() {
  const name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

// The returned function remembers the environment in which it was created.
const myFunc = makeFunc();
myFunc(); // logs "Mozilla"`},{id:"js15",category:"Theory",title:"Hoisting",description:"JavaScript's default behavior of moving declarations to the top. Variables defined with `let` and `const` are hoisted, but not initialized (TDZ).",code:`// \`var\` is hoisted and initialized as \`undefined\`
console.log(myVar); // undefined
var myVar = 5;

// Function declarations are completely hoisted
hello(); // logs "Hello"
function hello() {
  console.log("Hello");
}

// \`let\` throws a ReferenceError if accessed before declaration
// console.log(myLet); 
let myLet = 10;`},{id:"js16",category:"DOM API",title:"DOM Manipulation",description:"The Document Object Model connects web pages to scripts or programming languages by representing the structure of a document in memory.",code:`// Select an element by its ID
const heading = document.getElementById('main-heading');

// Modify the element\\'s content and style
heading.textContent = 'Welcome to JavaScript';
heading.style.color = 'blue';
heading.classList.add('active-title');`},{id:"js17",category:"DOM API",title:"Event Listeners",description:"Attaches an event handler to a specified element without overwriting existing event handlers.",code:`const button = document.querySelector('button');

function handleClick(event) {
  console.log('Button was clicked!');
  console.log('Event target:', event.target);
}

// Listen for a 'click' event
button.addEventListener('click', handleClick);`},{id:"js18",category:"Web API",title:"LocalStorage API",description:"Allows you to persistently save key/value pairs in a web browser with no expiration date.",code:`// Save data to localStorage
localStorage.setItem('username', 'JohnDoe');

// Read data from localStorage
const user = localStorage.getItem('username');
console.log(user); // "JohnDoe"

// Remove a specific item
localStorage.removeItem('username');

// Clear all stored data
localStorage.clear();`}],J2=[{id:"react1",category:"Hooks",title:"useState Hook",description:"Adds React state to functional components. Returns the current state value and a function to update it.",code:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`},{id:"react2",category:"Hooks",title:"useEffect Hook",description:"Lets you synchronize a component with an external system. Used for data fetching, subscriptions, or manually changing the DOM.",code:`import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    // Cleanup function runs on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run on mount only

  return <p>Timer: {seconds}s</p>;
}`},{id:"react3",category:"Props",title:"Passing Props",description:"Props are arguments passed into React components via HTML attributes to dynamically render child components.",code:`function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}`},{id:"react4",category:"State Management",title:"Context API",description:"A way to pass data deeply throughout the component tree without having to manually pass props down at every level.",code:`import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am {theme}</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}`},{id:"react5",category:"Hooks",title:"useRef Hook",description:"Returns a mutable ref object whose .current property focuses a DOM node or stores a mutable value that does not cause a re-render when updated.",code:`import { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // \`current\` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`},{id:"react6",category:"Hooks",title:"useReducer Hook",description:"An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.",code:`import { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return {count: state.count + 1};
    case 'decrement': return {count: state.count - 1};
    default: throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}`},{id:"react7",category:"Hooks",title:"useMemo Hook",description:'Returns a memoized value. Pass a "create" function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed.',code:`import { useState, useMemo } from 'react';

function ExpensiveComputationComponent({ a, b }) {
  // Only re-runs if \`a\` or \`b\` change
  const expensiveResult = useMemo(() => {
    let sum = 0;
    for(let i=0; i < 1000000000; i++) {
      sum += a * b;
    }
    return sum;
  }, [a, b]);

  return <div>Result: {expensiveResult}</div>;
}`},{id:"react8",category:"Hooks",title:"useCallback Hook",description:"Returns a memoized callback function. Useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",code:`import { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function Parent() {
  const [count, setCount] = useState(0);
  
  // ChildComponent will only re-render if its other props change,
  // because handleClick maintains the identical function signature across renders.
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);

  return <ChildComponent onClick={handleClick} />;
}`},{id:"react9",category:"Concepts",title:"Custom Hooks",description:'A JavaScript function whose name starts with "use" and that may call other Hooks. Allows extraction of component logic into reusable functions.',code:`import { useState, useEffect } from 'react';

// Custom Hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}

function App() {
  const width = useWindowWidth();
  return <div>Window width is: {width}px</div>;
}`},{id:"react10",category:"Concepts",title:"React Router",description:"A standard library for routing in React. It enables navigation among views of various components in a React Application, allowing changing the browser URL.",code:`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`},{id:"react11",category:"Forms",title:"Controlled Components",description:'An input form element whose value is controlled by React. React state is the "single source of truth" for the input.',code:`import { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('A name was submitted: ' + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}`},{id:"react12",category:"Concepts",title:"Component Lifecycle",description:"Class components have lifecycle methods like componentDidMount. In functional components, we achieve the same using the useEffect hook.",code:`import { useEffect } from 'react';

function LifecycleDemo() {
  useEffect(() => {
    console.log('ComponentDidMount (Runs once)');

    return () => {
      console.log('ComponentWillUnmount (Runs on destruction)');
    };
  }, []); // Empty array guarantees it ignores updates

  useEffect(() => {
    console.log('ComponentDidUpdate (Runs on every render)');
  });

  return <div>Hello World</div>;
}`},{id:"react13",category:"Concepts",title:"Props Drilling",description:"The process of passing data from one part of the React Component tree to another by going through other parts that do not need the data, but only help in passing it around.",code:`// Using Context or Redux prevents this issue.
function Grandparent({ user }) {
  // Grandparent doesn't need 'user', but passes it down
  return <Parent user={user} />;
}

function Parent({ user }) {
  // Parent doesn't need 'user', but passes it down
  return <Child user={user} />;
}

function Child({ user }) {
  return <div>Hello {user.name}</div>;
}`},{id:"react14",category:"UI",title:"Conditional Rendering",description:"Rendering different components or elements based on a condition, much like JavaScript if/else or logical operators.",code:`function UserGreeting({ isLoggedIn }) {
  // Using early return
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

function App() {
  const isWarning = true;
  return (
    <div>
      {/* Inline If with Logical && Operator */}
      {isWarning && <p>Warning: Server disconnect.</p>}
      
      {/* Inline If-Else with Ternary Operator */}
      {isWarning ? <StopIcon /> : <GoIcon />}
    </div>
  );
}`},{id:"react15",category:"UI",title:"Lists and Keys",description:'When rendering elements from an array via map(), a special string attribute "key" needs to be included. Keys help React identify which items have changed, been added, or removed.',code:`function NumberList(props) {
  const numbers = props.numbers;
  
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <li key={number.toString()}>
      {number}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}`},{id:"react16",category:"Concepts",title:"Portals",description:"Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Essential for Modals and Tooltips.",code:`import { createPortal } from 'react-dom';

function Modal({ children }) {
  // Renders the children into a div with ID 'modal-root' 
  // located directly inside index.html, preventing CSS 
  // overflow/z-index issues from deep nesting.
  return createPortal(
    <div className="modal-overlay">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
}`}],X2=[{id:"sql1",category:"DDL",title:"CREATE TABLE",description:"Data Definition Language statement used to create a new table in a database with defined column types and constraints.",code:`CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    HireDate DATE DEFAULT CURRENT_DATE
);`},{id:"sql2",category:"DML",title:"SELECT Query",description:"Used to select data from a database. The data returned is stored in a result table, called the result-set.",code:`SELECT FirstName, LastName, Email
FROM Employees
WHERE HireDate > '2023-01-01'
ORDER BY LastName ASC
LIMIT 10;`},{id:"sql3",category:"Joins",title:"INNER JOIN",description:"Selects records that have matching values in both tables. Excludes rows that are only in one table.",code:`SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;`},{id:"sql4",category:"Joins",title:"LEFT JOIN",description:"Returns all records from the left table, and the matched records from the right table. The result is NULL from the right side, if there is no match.",code:`SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;`},{id:"sql4b",category:"Joins",title:"RIGHT JOIN",description:"Returns all records from the right table, and the matched records from the left table. The result is NULL from the left side, when there is no match.",code:`SELECT Orders.OrderID, Employees.LastName
FROM Orders
RIGHT JOIN Employees
ON Orders.EmployeeID = Employees.EmployeeID;`},{id:"sql4c",category:"Joins",title:"NATURAL JOIN",description:"Creates an implicit join clause based on the common columns in the two tables being joined. Common columns must have the same name and data type.",code:`SELECT * 
FROM Customers
NATURAL JOIN Orders;`},{id:"sql5",category:"Aggregations",title:"GROUP BY & HAVING",description:"Groups rows that have the same values into summary rows, often with aggregate functions (COUNT, MAX, MIN, SUM, AVG). HAVING acts like WHERE for aggregate outputs.",code:`SELECT Department, COUNT(EmployeeID) as TotalEmployees
FROM Employees
GROUP BY Department
HAVING COUNT(EmployeeID) > 5;`},{id:"sql6",category:"Advanced",title:"Subqueries",description:"A query nested inside another query (SELECT, INSERT, UPDATE, or DELETE). Outer query relies on the inner query results.",code:`SELECT FirstName, LastName
FROM Employees
WHERE DepartmentID IN (
    SELECT DepartmentID
    FROM Departments
    WHERE Location = 'New York'
);`},{id:"sql7",category:"Advanced",title:"Window Functions",description:"Performs calculations across a set of table rows related to the current row, without grouping them into a single output row (e.g., ROW_NUMBER, RANK).",code:`SELECT 
    EmployeeID, 
    Salary, 
    RANK() OVER (ORDER BY Salary DESC) as SalaryRank
FROM Employees;`},{id:"sql8",category:"Set Operations",title:"UNION vs UNION ALL",description:"Combines the result sets of two or more SELECT statements. UNION removes duplicates, while UNION ALL keeps them (and is faster).",code:`SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers
ORDER BY City;`},{id:"sql9",category:"Logic",title:"CASE Statement",description:"The SQL equivalent of IF-THEN-ELSE logic. Returns a value when the first condition is met.",code:`SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'Large Order'
    WHEN Quantity = 30 THEN 'Medium Order'
    ELSE 'Small Order'
END AS OrderSize
FROM Orders;`},{id:"sql10",category:"Performance",title:"CREATE INDEX",description:"Indexes are used to retrieve data from the database more quickly than otherwise. Users cannot see the indexes.",code:`CREATE INDEX idx_lastname
ON Employees (LastName);

-- Drop index
-- DROP INDEX Employees.idx_lastname;`},{id:"sql11",category:"DDL",title:"Foreign Keys",description:"A key used to link two tables together. It is a field in one table that refers to the PRIMARY KEY in another table.",code:`CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderNumber INT NOT NULL,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);`},{id:"sql12",category:"Theory & Basics",title:"ACID Properties",description:`The 4 key properties of a database transaction:
1. Atomicity: All or nothing.
2. Consistency: DB must remain in a valid state.
3. Isolation: Concurrent transactions don't interfere.
4. Durability: Committed data is saved permanently.`,code:`-- ACID is a conceptual property of Relational Databases.
-- Transactions enforce ACID compliance:

BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE ID = 1;
UPDATE Accounts SET Balance = Balance + 100 WHERE ID = 2;

COMMIT; -- Saves changes permanently (Durability)`},{id:"sql13",category:"Advanced",title:"CREATE TRIGGER",description:"A database object that is bound to a table or view and executes automatically upon an INSERT, UPDATE, or DELETE operation.",code:`CREATE TRIGGER trgAfterInsert
ON Employees
AFTER INSERT
AS
BEGIN
    INSERT INTO AuditLog (EmployeeID, Action, Date)
    SELECT EmployeeID, 'Inserted', GETDATE()
    FROM inserted;
END;`},{id:"sql14",category:"DDL Views",title:"CREATE VIEW",description:"A virtual table based on the result-set of an SQL statement. It acts exactly like a real table but dynamically fetches data on access.",code:`CREATE VIEW ActiveCustomers AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Status = 'Active';

-- Querying the view
-- SELECT * FROM ActiveCustomers;`},{id:"sql15",category:"Advanced Programs",title:"Stored Procedures",description:"A prepared SQL code that you can save, so the code can be reused over and over again.",code:`CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City
GO;

-- Executing the procedure
-- EXEC SelectAllCustomers @City = 'London';`}],Z2=[{id:"mongo1",category:"CRUD",title:"insertOne() / insertMany()",description:"Inserts one or multiple BSON documents into a NoSQL collection.",code:`// Insert a single document
db.users.insertOne({
  name: "Alice",
  age: 28,
  skills: ["JavaScript", "React"]
})

// Insert multiple documents
db.users.insertMany([
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 22 }
])`},{id:"mongo2",category:"CRUD",title:"find()",description:"Selects documents in a collection and returns a cursor to the selected documents with optional query filters.",code:`// Find all users over the age of 25
db.users.find(
  { age: { $gt: 25 } },
  { name: 1, age: 1, _id: 0 } // Projection: include name, age, exclude _id
)`},{id:"mongo3",category:"CRUD",title:"updateOne() / updateMany()",description:"Modifies an existing document or documents in a collection. $set is used to update fields.",code:`// Update Bob's age
db.users.updateOne(
  { name: "Bob" },
  { $set: { age: 35, status: "active" } }
)

// Add a new skill to Alice using $push
db.users.updateOne(
  { name: "Alice" },
  { $push: { skills: "Node.js" } }
)`},{id:"mongo4",category:"CRUD",title:"deleteOne()",description:"Removes a single document from a collection that matches the specified filter parameter.",code:`// Delete the user named Charlie
db.users.deleteOne({ name: "Charlie" })`},{id:"mongo5",category:"Aggregation",title:"Aggregation Pipeline",description:"Framework for data aggregation based on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms them.",code:`db.orders.aggregate([
  { $match: { status: "A" } }, // Filter by status
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }, // Group by customer and compute total
  { $sort: { total: -1 } } // Sort by total descending
])`},{id:"mongo6",category:"Performance",title:"createIndex()",description:"Supports the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan (read every document).",code:`// Create an ascending index on the age field
db.users.createIndex({ age: 1 })

// Create a compound index
db.users.createIndex({ name: 1, age: -1 })`},{id:"mongo7",category:"Advanced CRUD",title:"Upsert (Update or Insert)",description:"An upsert creates a new document if no documents match the query criteria, otherwise it updates the matching document.",code:`db.users.updateOne(
  { name: "David" },
  { $set: { age: 40, status: "pending" } },
  { upsert: true } // Creates David if he doesn't exist
)`},{id:"mongo8",category:"Arrays",title:"Array Operators ($push, $pull, $addToSet)",description:"MongoDB provides specific operators for modifying arrays efficiently without pulling the entire document to the client.",code:`// $push appends value to array (allows duplicates)
db.users.updateOne({ name: "Alice" }, { $push: { tags: "developer" } })

// $addToSet appends only if value doesn't already exist
db.users.updateOne({ name: "Alice" }, { $addToSet: { tags: "developer" } })

// $pull removes all instances of a value from the array
db.users.updateOne({ name: "Alice" }, { $pull: { tags: "beginner" } })`},{id:"mongo9",category:"Advanced CRUD",title:"Text Search ($text)",description:"MongoDB provides text indexes to support text search queries on string content with robust stemming and tokenization strategies.",code:`// First, create a text index on the description field
db.articles.createIndex({ description: "text" })

// Then perform a text search
db.articles.find(
  { $text: { $search: "machine learning ai" } },
  { score: { $meta: "textScore" } } // Project the relevance score
).sort({ score: { $meta: "textScore" } })`},{id:"mongo10",category:"Schema",title:"Schema Validation",description:"Allows enforcing data integrity rules (similar to an SQL schema) before documents are inserted or updated using JSON Schema.",code:`db.createCollection("students", {
  validator: {
    $jsonSchema: {
       bsonType: "object",
      required: [ "name", "gpa" ],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        gpa: {
          bsonType: ["double"],
          minimum: 0,
          maximum: 4,
          description: "must be a double [0, 4]"
        }
      }
    }
  }
})`},{id:"mongo11",category:"Aggregation",title:"$lookup (NoSQL Join)",description:'Performs a left outer join to an unsharded collection in the same database to filter in documents from the "joined" collection for processing.',code:`db.orders.aggregate([
   {
     $lookup:
       {
         from: "inventory",
         localField: "item",
         foreignField: "sku",
         as: "inventory_docs"
       }
  }
])`},{id:"mongo12",category:"Advanced Queries",title:"Geospatial Queries ($near)",description:"MongoDB allows storing geospatial coordinates (GeoJSON objects) and supports querying distances or polygons.",code:`// First, create a 2dsphere index
db.places.createIndex({ location: "2dsphere" })

// Query locations within 5000 meters
db.places.find({
  location: {
    $near: {
      $geometry: {
         type: "Point" , 
         coordinates: [ -73.9667, 40.78 ]
      },
      $maxDistance: 5000
    }
  }
})`},{id:"mongo13",category:"Enterprise",title:"Transactions",description:"Transactions allow you to execute multiple operations in isolation and commit or roll them back as a single group (requires Replica Sets).",code:`const session = db.getMongo().startSession();
session.startTransaction();
try {
  const coll1 = session.getDatabase("db").foo;
  const coll2 = session.getDatabase("db").bar;
  coll1.insertOne({ a: 1 });
  coll2.insertOne({ b: 1 });
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}`},{id:"mongo14",category:"Files",title:"GridFS (Large Files)",description:"MongoDB limits document size to 16MB. GridFS is a specification for storing and retrieving files that exceed this limit by dividing them into chunks.",code:`// GridFS uses two collections within a bucket:
// - chunks: stores the binary chunks.
// - files: stores the file metadata.

// Use drivers (e.g. Node.js Mongoose/MongoDB) to write large files
/* 
const bucket = new mongodb.GridFSBucket(db, { bucketName: 'videos' });
fs.createReadStream('./huge_video.mp4').pipe(bucket.openUploadStream('huge_video.mp4'));
*/`},{id:"mongo15",category:"Collection Types",title:"Capped Collections",description:"Fixed-size collections that support high-throughput operations that insert and retrieve documents based on insertion order.",code:`// Create a capped collection restricted to 100,000 bytes maximum
// Once full, the oldest documents are overwritten (like a circular buffer).
db.createCollection( "log", { capped: true, size: 100000 } )`}];function eD(){const[t,e]=M.useState("Python"),[n,r]=M.useState(""),[i,s]=M.useState("All"),[o,l]=M.useState(null),u=t==="Python"?G2:t==="DSA"?K2:t==="AI"?Q2:t==="JS"?Y2:t==="React"?J2:t==="SQL"?X2:Z2,c=["All",...new Set(u.map(I=>I.category))],p=u.filter(I=>{const R=i==="All"||I.category===i,b=I.title.toLowerCase().includes(n.toLowerCase())||I.description.toLowerCase().includes(n.toLowerCase());return R&&b}),m=I=>{e(I),s("All"),r("")};M.useEffect(()=>{wn.highlightAll()},[p]);const E=(I,R)=>{navigator.clipboard.writeText(R),l(I),setTimeout(()=>l(null),2e3)};return h.jsx("div",{className:"snippets-page",children:h.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[h.jsx("header",{className:"page-header",style:{marginBottom:"2rem"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[h.jsxs("div",{children:[h.jsx("h1",{children:"Code Reference Snippets"}),h.jsx("p",{children:"Curated coding concepts and Data Structures from Beginner to Advanced. (Ref: GeeksforGeeks)"})]}),h.jsxs("div",{className:"subject-tabs",style:{display:"flex",gap:"0.5rem",background:"rgba(255,255,255,0.05)",padding:"0.3rem",borderRadius:"12px"},children:[h.jsx("button",{onClick:()=>m("Python"),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:t==="Python"?"#8b5cf6":"transparent",color:"#fff",cursor:"pointer",fontWeight:t==="Python"?"bold":"normal",transition:"all 0.2s"},children:"Python Core"}),h.jsx("button",{onClick:()=>m("DSA"),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:t==="DSA"?"#8b5cf6":"transparent",color:"#fff",cursor:"pointer",fontWeight:t==="DSA"?"bold":"normal",transition:"all 0.2s"},children:"DSA in Python"}),h.jsx("button",{onClick:()=>m("AI"),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:t==="AI"?"#8b5cf6":"transparent",color:"#fff",cursor:"pointer",fontWeight:t==="AI"?"bold":"normal",transition:"all 0.2s"},children:"AI & ML"}),h.jsx("button",{onClick:()=>m("JS"),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:t==="JS"?"#8b5cf6":"transparent",color:"#fff",cursor:"pointer",fontWeight:t==="JS"?"bold":"normal",transition:"all 0.2s"},children:"JavaScript"}),h.jsx("button",{onClick:()=>m("React"),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:t==="React"?"#8b5cf6":"transparent",color:"#fff",cursor:"pointer",fontWeight:t==="React"?"bold":"normal",transition:"all 0.2s"},children:"ReactJS"}),h.jsx("button",{onClick:()=>m("SQL"),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:t==="SQL"?"#8b5cf6":"transparent",color:"#fff",cursor:"pointer",fontWeight:t==="SQL"?"bold":"normal",transition:"all 0.2s"},children:"SQL"}),h.jsx("button",{onClick:()=>m("Mongo"),style:{padding:"0.5rem 1rem",borderRadius:"8px",border:"none",background:t==="Mongo"?"#8b5cf6":"transparent",color:"#fff",cursor:"pointer",fontWeight:t==="Mongo"?"bold":"normal",transition:"all 0.2s"},children:"MongoDB"})]})]})}),h.jsxs("div",{className:"snippets-layout",children:[h.jsxs("aside",{className:"snippets-sidebar",children:[h.jsxs("div",{className:"search-box",children:[h.jsx(Rw,{className:"search-icon",size:18}),h.jsx("input",{type:"text",placeholder:"Search topics...",value:n,onChange:I=>r(I.target.value)})]}),h.jsxs("nav",{className:"category-nav",children:[h.jsx("h3",{className:"nav-title",children:"Categories"}),c.map(I=>h.jsx("button",{className:`category-btn ${i===I?"active":""}`,onClick:()=>s(I),children:I},I))]})]}),h.jsx("main",{className:"snippets-content",children:p.length===0?h.jsx("div",{className:"no-snippets-found",children:h.jsxs("p",{children:['No snippets found matching "',n,'"']})}):h.jsx("div",{className:"snippets-grid",children:p.map(I=>h.jsxs("article",{className:"snippet-card",children:[h.jsxs("div",{className:"snippet-header",children:[h.jsxs("div",{children:[h.jsx("span",{className:"snippet-category",children:I.category}),h.jsx("h2",{className:"snippet-title",children:I.title}),h.jsx("p",{className:"snippet-desc",children:I.description})]}),h.jsx("button",{className:"btn-copy",onClick:()=>E(I.id,I.code),title:"Copy Code",children:o===I.id?h.jsx(h1,{size:18,color:"#22c55e"}):h.jsx(g1,{size:18})})]}),h.jsx("div",{className:"snippet-code-container",children:h.jsx("pre",{children:h.jsx("code",{className:"language-python",children:I.code})})})]},I.id))})})]})]})})}function tD(){const[t,e]=M.useState(null),[n,r]=M.useState(!0),[i,s]=M.useState(!1),[o,l]=M.useState({type:"",text:""}),[u,c]=M.useState(null),[p,m]=M.useState({name:"",data:""}),[E,I]=M.useState(!1),[R,b]=M.useState({firstName:"",lastName:"",certificateName:"",gender:"Male",commLanguage:"English",teachLanguage:"English",dob:"",twitter:"",linkedin:"",github:"",codechef:"",hackerrank:"",leetcode:"",studentPhone:"",studentEmail:"",studentWhatsappSame:"Yes",parentFirstName:"",parentLastName:"",parentRelation:"Father",parentOccupation:"",parentEmail:"",parentLanguage:"English",parentPhone:"",parentWhatsappSame:"Yes"});M.useEffect(()=>{const T=uE(_p,async x=>{if(x){e(x),b(N=>({...N,studentEmail:x.email||""})),r(!1);try{const N=Ah(Ch,"users",x.uid),C=await K0(N);if(C.exists()){const pe=C.data();b(ut=>({...ut,...pe})),pe.photoBase64&&c(pe.photoBase64),pe.resumeName&&m({name:pe.resumeName,data:pe.resumeBase64})}}catch(N){console.error("Error loading profile:",N)}}else e(null),r(!1)});return()=>T()},[]);const k=T=>{const{name:x,value:N}=T.target;b(C=>({...C,[x]:N}))},A=T=>{const x=T.target.files[0];if(x){if(x.size>1048576){l({type:"error",text:"PHOTO MUST BE LESS THAN 1MB"});return}const N=new FileReader;N.onloadend=()=>{c(N.result),b(C=>({...C,photoBase64:N.result}))},N.readAsDataURL(x)}},g=()=>{c(null),b(T=>({...T,photoBase64:null}))},v=T=>{if(!T)return;if(T.size>10*1024*1024){l({type:"error",text:"RESUME MUST BE LESS THAN 10MB"});return}const x=new FileReader;x.onloadend=()=>{m({name:T.name,data:x.result}),b(N=>({...N,resumeName:T.name,resumeBase64:x.result}))},x.readAsDataURL(T)},P=T=>{v(T.target.files[0])},D=T=>{T.preventDefault(),I(!0)},L=T=>{T.preventDefault(),I(!1)},_=T=>{T.preventDefault(),I(!1),v(T.dataTransfer.files[0])},y=T=>{T.preventDefault(),m({name:"",data:""}),b(x=>({...x,resumeName:"",resumeBase64:""}))},S=async T=>{if(T.preventDefault(),!t){l({type:"error",text:"YOU MUST BE LOGGED IN TO SAVE PROFILE."});return}s(!0),l({type:"",text:""});try{await Q0(Ah(Ch,"users",t.uid),R,{merge:!0}),l({type:"success",text:"PROFILE UPDATED SUCCESSFULLY."}),setTimeout(()=>l({type:"",text:""}),5e3)}catch(x){console.error("Firestore Error:",x),l({type:"error",text:"ERROR SAVING TO DATABASE. PLEASE CHECK YOUR ENABLED FIRESTORE PERMISSIONS."})}finally{s(!1)}};return n?h.jsx("div",{className:"profile-page",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:h.jsx("h2",{children:"LOADING ASSETS..."})}):t?h.jsxs("div",{className:"profile-page",children:[h.jsxs("div",{className:"profile-header",children:[h.jsx("h1",{className:"profile-title",children:"STUDENT PROFILE"}),h.jsx("p",{className:"profile-subtitle",children:"SECURELY MANAGE YOUR PLATFORM DETAILS."})]}),h.jsxs("form",{className:"profile-form",onSubmit:S,children:[h.jsxs("section",{className:"profile-section",children:[h.jsx("h2",{className:"section-title",children:"PERSONAL DETAILS"}),h.jsx("p",{className:"section-subtitle",children:"Information provided will be used for official certificates."}),h.jsxs("div",{className:"photo-upload-container",children:[h.jsx("div",{className:"photo-placeholder",style:{overflow:"hidden",borderRadius:"4px"},children:u?h.jsx("img",{src:u,alt:"Profile",style:{width:"100%",height:"100%",objectFit:"cover"}}):h.jsx(c1,{size:32,color:"#444"})}),h.jsxs("div",{className:"upload-actions",children:[h.jsx("input",{type:"file",id:"photo-upload",accept:"image/*",style:{display:"none"},onChange:A}),h.jsxs("label",{htmlFor:"photo-upload",className:"btn-upload",style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(j1,{size:16})," UPLOAD PHOTO"]}),h.jsxs("button",{type:"button",className:"btn-danger",onClick:g,children:[h.jsx(th,{size:16})," REMOVE PHOTO"]})]})]}),h.jsxs("div",{className:"form-grid",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"FIRST NAME"}),h.jsx("input",{type:"text",name:"firstName",value:R.firstName,onChange:k,placeholder:"e.g. Satoshi"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"LAST NAME"}),h.jsx("input",{type:"text",name:"lastName",value:R.lastName,onChange:k,placeholder:"e.g. Nakamoto"})]}),h.jsxs("div",{className:"form-group full-width",children:[h.jsx("label",{children:"NAME ON YOUR CERTIFICATE"}),h.jsx("input",{type:"text",name:"certificateName",value:R.certificateName,onChange:k,placeholder:"How would you like your name to appear?"})]}),h.jsxs("div",{className:"form-group full-width",children:[h.jsx("label",{children:"GENDER"}),h.jsxs("div",{className:"radio-group",children:[h.jsxs("label",{className:"radio-label",children:[h.jsx("input",{type:"radio",name:"gender",value:"Male",checked:R.gender==="Male",onChange:k})," Male"]}),h.jsxs("label",{className:"radio-label",children:[h.jsx("input",{type:"radio",name:"gender",value:"Female",checked:R.gender==="Female",onChange:k})," Female"]}),h.jsxs("label",{className:"radio-label",children:[h.jsx("input",{type:"radio",name:"gender",value:"Transgender",checked:R.gender==="Transgender",onChange:k})," Transgender"]})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"PREFERRED COMM. LANGUAGE"}),h.jsxs("select",{name:"commLanguage",value:R.commLanguage,onChange:k,children:[h.jsx("option",{value:"English",children:"ENGLISH"}),h.jsx("option",{value:"Telugu",children:"TELUGU"}),h.jsx("option",{value:"Hindi",children:"HINDI"}),h.jsx("option",{value:"Spanish",children:"SPANISH"})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"PREFERRED TEACHING LANGUAGE"}),h.jsxs("select",{name:"teachLanguage",value:R.teachLanguage,onChange:k,children:[h.jsx("option",{value:"English",children:"ENGLISH"}),h.jsx("option",{value:"Telugu",children:"TELUGU"}),h.jsx("option",{value:"Hindi",children:"HINDI"})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"DATE OF BIRTH"}),h.jsx("input",{type:"date",name:"dob",value:R.dob,onChange:k,style:{colorScheme:"dark"}})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"LINKEDIN PROFILE"}),h.jsx("input",{type:"url",name:"linkedin",value:R.linkedin,onChange:k,placeholder:"https://linkedin.com/in/"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"TWITTER / X PROFILE"}),h.jsx("input",{type:"url",name:"twitter",value:R.twitter,onChange:k,placeholder:"https://twitter.com/"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"GITHUB PROFILE"}),h.jsx("input",{type:"url",name:"github",value:R.github,onChange:k,placeholder:"https://github.com/"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"CODECHEF PROFILE"}),h.jsx("input",{type:"url",name:"codechef",value:R.codechef,onChange:k,placeholder:"https://codechef.com/users/"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"LEETCODE PROFILE"}),h.jsx("input",{type:"url",name:"leetcode",value:R.leetcode,onChange:k,placeholder:"https://leetcode.com/u/"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"HACKERRANK PROFILE"}),h.jsx("input",{type:"url",name:"hackerrank",value:R.hackerrank,onChange:k,placeholder:"https://hackerrank.com/profile/"})]}),h.jsxs("div",{className:"form-group full-width",children:[h.jsx("label",{children:"RESUME"}),h.jsx("input",{type:"file",id:"resume-upload",accept:".pdf,.doc,.docx",style:{display:"none"},onChange:P}),h.jsx("label",{htmlFor:"resume-upload",className:"resume-upload",style:{display:"block",margin:0,border:E?"2px dashed #00ff88":"1px dashed #333",backgroundColor:E?"rgba(0, 255, 136, 0.05)":"transparent",transition:"all 0.2s ease"},onDragOver:D,onDragLeave:L,onDrop:_,children:p.name?h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[h.jsx(bg,{size:48,color:"#00ff88"}),h.jsx("p",{style:{fontWeight:700,color:"#00ff88",letterSpacing:"1px"},children:p.name}),h.jsxs("button",{type:"button",className:"btn-danger",onClick:y,style:{marginTop:"0.5rem"},children:[h.jsx(th,{size:16})," REMOVE FILE"]})]}):h.jsxs("div",{children:[h.jsx(bg,{size:48,color:"#444",style:{marginBottom:"1rem"}}),h.jsx("p",{style:{fontWeight:600},children:"UPLOAD RESUME OR DRAG AND DROP"}),h.jsx("p",{style:{fontSize:"0.8rem",color:"#666",marginTop:"0.5rem"},children:"PDF, DOC, DOCX up to 10MB"})]})})]})]})]}),h.jsxs("section",{className:"profile-section",children:[h.jsx("h2",{className:"section-title",children:"STUDENT CONTACT"}),h.jsx("p",{className:"section-subtitle",children:"We will use this to send important program updates."}),h.jsxs("div",{className:"form-grid",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"PHONE NUMBER"}),h.jsx("input",{type:"tel",name:"studentPhone",value:R.studentPhone,onChange:k,placeholder:"+1 123 456 7890"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"SAME AS WHATSAPP?"}),h.jsxs("div",{className:"radio-group",children:[h.jsxs("label",{className:"radio-label",children:[h.jsx("input",{type:"radio",name:"studentWhatsappSame",value:"Yes",checked:R.studentWhatsappSame==="Yes",onChange:k})," Yes"]}),h.jsxs("label",{className:"radio-label",children:[h.jsx("input",{type:"radio",name:"studentWhatsappSame",value:"No",checked:R.studentWhatsappSame==="No",onChange:k})," No"]})]})]}),h.jsxs("div",{className:"form-group full-width",children:[h.jsx("label",{children:"EMAIL ID (FROM AUTH)"}),h.jsx("input",{type:"email",name:"studentEmail",value:R.studentEmail,readOnly:!0,style:{opacity:.5}})]})]})]}),h.jsxs("section",{className:"profile-section",children:[h.jsx("h2",{className:"section-title",children:"PARENT/GUARDIAN"}),h.jsx("p",{className:"section-subtitle",children:"Person who supports the student during their journey."}),h.jsxs("div",{className:"form-grid",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"FIRST NAME"}),h.jsx("input",{type:"text",name:"parentFirstName",value:R.parentFirstName,onChange:k,placeholder:"Name"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"LAST NAME"}),h.jsx("input",{type:"text",name:"parentLastName",value:R.parentLastName,onChange:k,placeholder:"Surname"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"RELATIONSHIP"}),h.jsxs("select",{name:"parentRelation",value:R.parentRelation,onChange:k,children:[h.jsx("option",{value:"Father",children:"Father"}),h.jsx("option",{value:"Mother",children:"Mother"}),h.jsx("option",{value:"Guardian",children:"Guardian"}),h.jsx("option",{value:"Other",children:"Other"})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"OCCUPATION"}),h.jsx("input",{type:"text",name:"parentOccupation",value:R.parentOccupation,onChange:k,placeholder:"e.g. Software Engineer"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"EMAIL ID"}),h.jsx("input",{type:"email",name:"parentEmail",value:R.parentEmail,onChange:k,placeholder:"Email"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"PREFERRED COMM. LANGUAGE"}),h.jsxs("select",{name:"parentLanguage",value:R.parentLanguage,onChange:k,children:[h.jsx("option",{value:"English",children:"ENGLISH"}),h.jsx("option",{value:"Telugu",children:"TELUGU"}),h.jsx("option",{value:"Hindi",children:"HINDI"})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"PHONE NUMBER"}),h.jsx("input",{type:"tel",name:"parentPhone",value:R.parentPhone,onChange:k,placeholder:"+1 123 456 7890"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"SAME AS WHATSAPP?"}),h.jsxs("div",{className:"radio-group",children:[h.jsxs("label",{className:"radio-label",children:[h.jsx("input",{type:"radio",name:"parentWhatsappSame",value:"Yes",checked:R.parentWhatsappSame==="Yes",onChange:k})," Yes"]}),h.jsxs("label",{className:"radio-label",children:[h.jsx("input",{type:"radio",name:"parentWhatsappSame",value:"No",checked:R.parentWhatsappSame==="No",onChange:k})," No"]})]})]})]})]}),o.text&&h.jsxs("div",{style:{background:o.type==="error"?"rgba(255, 68, 68, 0.1)":"rgba(0, 255, 136, 0.1)",border:`1px solid ${o.type==="error"?"#ff4444":"#00ff88"}`,color:o.type==="error"?"#ff4444":"#00ff88",padding:"1rem",textAlign:"center",marginBottom:"2rem",fontWeight:"700",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",letterSpacing:"1px"},children:[o.type==="error"?h.jsx(O1,{size:20}):h.jsx(p1,{size:20}),o.text]}),h.jsx("div",{className:"profile-actions",children:h.jsx("button",{type:"submit",className:"btn-save",disabled:i,children:i?"SAVING DATA...":"SAVE CHANGES"})})]})]}):h.jsxs("div",{className:"profile-page",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh",flexDirection:"column"},children:[h.jsx("h2",{children:"ACCESS DENIED"}),h.jsx("p",{style:{color:"#888",marginTop:"1rem"},children:"PLEASE LOGIN TO ACCESS YOUR PROFILE."})]})}function nD(){return h.jsxs(Ig,{children:[h.jsx(wt,{path:"/login",element:h.jsx(W2,{})}),h.jsx(wt,{path:"/*",element:h.jsx(JN,{children:h.jsx(U1,{children:h.jsxs(Ig,{children:[h.jsx(wt,{path:"/",element:h.jsx(n2,{})}),h.jsx(wt,{path:"/profile",element:h.jsx(tD,{})}),h.jsx(wt,{path:"/courses",element:h.jsx(r2,{})}),h.jsx(wt,{path:"/bonus",element:h.jsx(i2,{})}),h.jsx(wt,{path:"/courses/:courseSlug",element:h.jsx(u2,{})}),h.jsx(wt,{path:"/courses/:courseSlug/lesson/:lessonId",element:h.jsx(_2,{})}),h.jsx(wt,{path:"/courses/:courseSlug/quiz",element:h.jsx(q2,{})}),h.jsx(wt,{path:"/courses/:courseSlug/practice",element:h.jsx(H2,{})}),h.jsx(wt,{path:"/playground",element:h.jsx(V2,{})}),h.jsx(wt,{path:"/assistant",element:h.jsx($2,{})}),h.jsx(wt,{path:"/snippets",element:h.jsx(eD,{})}),h.jsx(wt,{path:"*",element:h.jsx(kw,{to:"/",replace:!0})})]})})})})]})}sd.createRoot(document.getElementById("root")).render(h.jsx(gv.StrictMode,{children:h.jsx(Jx,{basename:"/learning-management-/",children:h.jsx(nD,{})})}));
