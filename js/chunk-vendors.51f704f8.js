(self["webpackChunkgenerador_qr"]=self["webpackChunkgenerador_qr"]||[]).push([[998],{9662:function(e,t,n){"use strict";var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){"use strict";var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){"use strict";var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){"use strict";var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){"use strict";var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),l=o(c),u=i(s,l);if(e&&n!==n){while(l>u)if(a=c[u++],a!==a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){"use strict";var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){"use strict";var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,l="Arguments"===o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?o(t):"Object"===(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){"use strict";var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},8880:function(e,t,n){"use strict";var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){"use strict";var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){"use strict";var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&o(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){"use strict";var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){"use strict";var r=n(7293);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){"use strict";var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){"use strict";var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){"use strict";var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){"use strict";var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){"use strict";var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,_=e.target,g=e.global,m=e.stat;if(u=g?r:m?r[_]||a(_,{}):(r[_]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:_+(m?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,e)}}},7293:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){"use strict";var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){"use strict";var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){"use strict";var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},5668:function(e,t,n){"use strict";var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},1702:function(e,t,n){"use strict";var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){"use strict";var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){"use strict";var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){"use strict";var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){"use strict";var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){"use strict";e.exports={}},4664:function(e,t,n){"use strict";var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){"use strict";var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){"use strict";var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){"use strict";var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){"use strict";var r,i,o,s=n(4811),a=n(7854),c=n(111),l=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",_=a.TypeError,g=a.WeakMap,m=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw _("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new g);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw _(p);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},o=function(e){return y.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(u(e,w))throw _(p);return t.facade=e,l(e,w,t),t},i=function(e){return u(e,w)?e[w]:{}},o=function(e){return u(e,w)}}e.exports={set:r,get:i,has:o,enforce:m,getterFor:v}},3157:function(e,t,n){"use strict";var r=n(4326);e.exports=Array.isArray||function(e){return"Array"===r(e)}},614:function(e,t,n){"use strict";var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){"use strict";var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===u||n!==l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},8554:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){"use strict";var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){"use strict";e.exports=!1},2190:function(e,t,n){"use strict";var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){"use strict";var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){"use strict";var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,l=n(2788),u=n(9909),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,_=r("".slice),g=r("".replace),m=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===_(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=m(y,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&d(this).source||l(this)}),"toString")},4758:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){"use strict";var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){"use strict";var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){"use strict";var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){"use strict";var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){"use strict";var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){"use strict";var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){"use strict";var r=n(5668),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){"use strict";var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){"use strict";var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){"use strict";var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){"use strict";var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){"use strict";var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){"use strict";var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){"use strict";var r=n(7392),i=n(7293),o=n(7854),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){"use strict";var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){"use strict";var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){"use strict";var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){"use strict";var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){"use strict";var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){"use strict";var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){"use strict";var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){"use strict";var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){"use strict";var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){"use strict";var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){"use strict";var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){"use strict";var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){"use strict";var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){"use strict";var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||s;e.exports=function(e){return o(u,e)||(u[e]=a&&o(l,e)?l[e]:h("Symbol."+e)),u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),l=n(5787),u=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),_=n(1913),g="DOMException",m=o("Error"),v=o(g),y=function(){l(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=m(t);return i.name=g,a(r,"stack",s(1,f(i.stack,1))),u(r,this,y),r},w=y.prototype=v.prototype,b="stack"in m(g),C="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(i,g),I=!!E&&!(E.writable&&E.configurable),T=b&&!I&&!C;r({global:!0,constructor:!0,forced:_||T},{DOMException:T?y:v});var S=o(g),k=S.prototype;if(k.constructor!==S)for(var x in _||a(k,"constructor",s(1,S)),d)if(c(d,x)){var R=d[x],N=R.s;c(S,N)||a(S,N,s(6,R.c))}},6229:function(e,t,n){"use strict";var r=n(8052),i=n(1702),o=n(1340),s=n(8053),a=URLSearchParams,c=a.prototype,l=i(c.append),u=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),s(t,1);var i,a=o(e),c=o(n),f=0,p=0,_=!1,g=r.length;while(f<g)i=r[f++],_||i.key===a?(_=!0,u(this,i.key)):p++;while(p<g)i=r[p++],i.key===a&&i.value===c||l(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,n){"use strict";var r=n(8052),i=n(1702),o=n(1340),s=n(8053),a=URLSearchParams,c=a.prototype,l=i(c.getAll),u=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=l(this,e);s(t,1);var i=o(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,n){"use strict";var r=n(9781),i=n(1702),o=n(7045),s=URLSearchParams.prototype,a=i(s.forEach);r&&!("size"in s)&&o(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3099:function(e,t,n){"use strict";n.d(t,{BH:function(){return T},LL:function(){return H},ZR:function(){return W},gQ:function(){return re},hu:function(){return o},g5:function(){return s},US:function(){return l},h$:function(){return h},L:function(){return d},r3:function(){return G},Sg:function(){return x},p$:function(){return p},vZ:function(){return ee},gK:function(){return ie},aH:function(){return I},P0:function(){return E},m9:function(){return ae},GJ:function(){return Y},Xx:function(){return S},xb:function(){return Z},hl:function(){return B},uI:function(){return M},Yr:function(){return F},b$:function(){return L},w9:function(){return J},cI:function(){return $},UI:function(){return X},Uo:function(){return k},xO:function(){return ne},DV:function(){return Q},ug:function(){return se},dS:function(){return oe},Wl:function(){return z},dp:function(){return P},eu:function(){return U}});n(2801),n(7658),n(6229),n(7330),n(2062);const r=()=>{},i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},c=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==h)throw new u;const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h=function(e){const t=a(e);return l.encodeByteArray(t,!0)},d=function(e){return h(e).replace(/\./g,"")},f=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function p(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=_(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
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
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const v=()=>m().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/generador-qr/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},w=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&f(e[1]);return t&&JSON.parse(t)},b=()=>{try{return r()||v()||y()||w()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},C=e=>b()?.emulatorHosts?.[e],E=e=>{const t=C(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},I=()=>b()?.config;
/**
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
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function S(e){try{const t=e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e;return t.endsWith(".cloudworkstations.dev")}catch{return!1}}async function k(e){const t=await fetch(e,{credentials:"include"});return t.ok}
/**
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
 */function x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...e},a="";return[d(JSON.stringify(n)),d(JSON.stringify(s)),a].join(".")}const R={};function N(){const e={prod:[],emulator:[]};for(const t of Object.keys(R))R[t]?e.emulator.push(t):e.prod.push(t);return e}function A(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let D=!1;function P(e,t){if("undefined"===typeof window||"undefined"===typeof document||!S(window.location.host)||R[e]===t||R[e]||D)return;function n(e){return`__firebase__banner__${e}`}R[e]=t;const r="__firebase__banner",i=N(),o=i.prod.length>0;function s(){const e=document.getElementById(r);e&&e.remove()}function a(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}function c(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}function l(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{D=!0,s()},e}function u(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}function h(){const e=A(r),t=n("text"),i=document.getElementById(t)||document.createElement("span"),s=n("learnmore"),h=document.getElementById(s)||document.createElement("a"),d=n("preprendIcon"),f=document.getElementById(d)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;a(t),u(h,s);const n=l();c(f,d),t.append(f,i,h,n),document.body.appendChild(t)}o?(i.innerText="Preview backend disconnected.",f.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(f.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',i.innerText="Preview backend running in this workspace."),i.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",h):h()}
/**
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
 */function O(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function M(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())}function L(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function F(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function B(){try{return"object"===typeof indexedDB}catch(e){return!1}}function U(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}}))}
/**
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
 */
const j="FirebaseError";class W extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=j,Object.setPrototypeOf(this,W.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?q(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new W(r,s,n);return a}}function q(e,t){return e.replace(V,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const V=/\{\$([^}]+)}/g;
/**
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
 */function $(e){return JSON.parse(e)}function z(e){return JSON.stringify(e)}
/**
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
 */const K=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=$(f(o[0])||""),n=$(f(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},J=function(e){const t=K(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},Y=function(e){const t=K(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function G(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function X(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ee(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(te(n)&&te(o)){if(!ee(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function te(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function ne(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}
/**
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
 */
class re{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function ie(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const oe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,o(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;i=65536+(t<<10)+n}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},se=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function ae(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return o},Fl:function(){return We},IU:function(){return Ne},Jd:function(){return I},PG:function(){return Se},Um:function(){return Ee},WL:function(){return Ue},X$:function(){return x},X3:function(){return Re},Xl:function(){return Ae},dq:function(){return Le},j:function(){return S},lk:function(){return T},nZ:function(){return a},qj:function(){return Ce},qq:function(){return w},yT:function(){return xe}});n(7658);var r=n(7139);let i;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&_)>0,u=e=>(e.n&_)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~_,i.n&=~_}t.length=n}},f=new WeakMap;let p=0,_=1;const g=30;let m;const v=Symbol(""),y=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=m,t=C;while(e){if(e===this)return;e=e.parent}try{return this.parent=m,m=this,C=!0,_=1<<++p,p<=g?h(this):b(this),this.fn()}finally{p<=g&&d(this),_=1<<--p,m=this.parent,C=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let C=!0;const E=[];function I(){E.push(C),C=!1}function T(){const e=E.pop();C=void 0===e||e}function S(e,t,n){if(C&&m){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;k(r,i)}}function k(e,t){let n=!1;p<=g?u(e)||(e.n|=_,n=!l(e)):n=!e.has(m),n&&(e.add(m),m.deps.push(e))}function x(e,t,n,i,o,s){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(v)),(0,r._N)(e)&&l.push(a.get(y)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(v)),(0,r._N)(e)&&l.push(a.get(y)));break;case"set":(0,r._N)(e)&&l.push(a.get(v));break}if(1===l.length)l[0]&&R(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);R(c(e))}}function R(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&N(r,t);for(const r of n)r.computed||N(r,t)}function N(e,t){(e!==m||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const A=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),P=U(),O=U(!1,!0),M=U(!0),L=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Ne(this)[t].apply(this,e);return T(),n}})),e}function B(e){const t=Ne(this);return S(t,"has",e),t.hasOwnProperty(e)}function U(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ye:ve:t?me:ge).get(n))return n;const s=(0,r.kJ)(n);if(!e){if(s&&(0,r.RI)(L,i))return Reflect.get(L,i,o);if("hasOwnProperty"===i)return B}const a=Reflect.get(n,i,o);return((0,r.yk)(i)?D.has(i):A(i))?a:(e||S(n,"get",i),t?a:Le(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ie(a):Ce(a):a)}}const j=H(),W=H(!0);function H(e=!1){return function(t,n,i,o){let s=t[n];if(ke(s)&&Le(s)&&!Le(i))return!1;if(!e&&(xe(i)||ke(i)||(s=Ne(s),i=Ne(i)),!(0,r.kJ)(t)&&Le(s)&&!Le(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,o);return t===Ne(o)&&(a?(0,r.aU)(i,s)&&x(t,"set",n,i,s):x(t,"add",n,i)),c}}function q(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&x(e,"delete",t,void 0,i),o}function V(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||S(e,"has",t),n}function $(e){return S(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const z={get:P,set:j,deleteProperty:q,has:V,ownKeys:$},K={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},J=(0,r.l7)({},z,{get:O,set:W}),Y=e=>e,G=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ne(e),o=Ne(t);n||(t!==o&&S(i,"get",t),S(i,"get",o));const{has:s}=G(i),a=r?Y:n?Pe:De;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ne(n),i=Ne(e);return t||(e!==i&&S(r,"has",e),S(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function X(e,t=!1){return e=e["__v_raw"],!t&&S(Ne(e),"iterate",v),Reflect.get(e,"size",e)}function ee(e){e=Ne(e);const t=Ne(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function te(e,t){t=Ne(t);const n=Ne(this),{has:i,get:o}=G(n);let s=i.call(n,e);s||(e=Ne(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function ne(e){const t=Ne(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=Ne(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&x(t,"delete",e,void 0,o),s}function re(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ne(o),a=t?Y:e?Pe:De;return!e&&S(s,"iterate",v),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function oe(e,t,n){return function(...i){const o=this["__v_raw"],s=Ne(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),h=n?Y:t?Pe:De;return!t&&S(s,"iterate",l?y:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return Q(this,e)},get size(){return X(this)},has:Z,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return X(this)},has:Z,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return X(this,!0)},has(e){return Z.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ie(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return X(this,!0)},has(e){return Z.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)})),[e,n,t,r]}const[ce,le,ue,he]=ae();function de(e,t){const n=t?e?he:ue:e?le:ce;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},_e={get:de(!0,!1)};const ge=new WeakMap,me=new WeakMap,ve=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function Ce(e){return ke(e)?e:Te(e,!1,z,fe,ge)}function Ee(e){return Te(e,!1,J,pe,me)}function Ie(e){return Te(e,!0,K,_e,ve)}function Te(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Se(e){return ke(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return!(!e||!e["__v_isShallow"])}function Re(e){return Se(e)||ke(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function Ae(e){return(0,r.Nj)(e,"__v_skip",!0),e}const De=e=>(0,r.Kn)(e)?Ce(e):e,Pe=e=>(0,r.Kn)(e)?Ie(e):e;function Oe(e){C&&m&&(e=Ne(e),k(e.dep||(e.dep=c())))}function Me(e,t){e=Ne(e);const n=e.dep;n&&R(n)}function Le(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Le(e)?e.value:e}const Be={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ue(e){return Se(e)?e:new Proxy(e,Be)}class je{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Me(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ne(this);return Oe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new je(i,o,s||!o,n);return a}},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return s},Cn:function(){return L},FN:function(){return gn},HY:function(){return Mt},Ko:function(){return Fe},P$:function(){return ie},Q6:function(){return ue},U2:function(){return se},Us:function(){return Rt},Wm:function(){return en},Y8:function(){return ee},_:function(){return Xt},dD:function(){return M},h:function(){return Ln},iD:function(){return zt},ic:function(){return Te},j4:function(){return Kt},kq:function(){return sn},nJ:function(){return ne},nK:function(){return le},up:function(){return Pe},w5:function(){return F},wg:function(){return Wt},wy:function(){return Z}});n(7658);var r=n(4870),i=n(7139);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let i=0;i<e.length;i++)c.push(s(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,_=0;const g=Promise.resolve();let m=null;function v(e){const t=m||g;return e?t.then(this?e.bind(this):e):t}function y(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=S(h[r]);i<e?t=r+1:n=r}return t}function w(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(y(e.id),0,e),b())}function b(){l||u||(u=!0,m=g.then(x))}function C(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?_+1:_)||f.push(e),b()}function I(e,t=(l?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function T(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>S(e)-S(t))),_=0;_<p.length;_++)p[_]();p=null,_=0}}const S=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){u=!1,l=!0,h.sort(k);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,h.length=0,T(e),l=!1,m=null,(h.length||f.length)&&x(e)}}function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.h5))}let l;let u=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(t))]),u&&s(u,e,6,o);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(h,e,6,o)}}function N(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=N(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function A(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,P=null;function O(e){const t=D;return D=e,P=e&&e.type.__scopeId||null,t}function M(e){P=e}function L(){P=null}function F(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Vt(-1);const i=O(t);let o;try{o=e(...n)}finally{O(i),r._d&&Vt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function B(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:_,ctx:g,inheritAttrs:m}=e;let v,y;const w=O(e);try{if(4&n.shapeFlag){const e=o||r;v=an(d.call(e,e,f,s,_,p,g)),y=u}else{const e=t;0,v=an(e.length>1?e(s,{attrs:u,slots:l,emit:h}):e(s,null)),y=t.props?u:U(u)}}catch(C){Ut.length=0,a(C,e,1),v=en(Ft)}let b=v;if(y&&!1!==m){const e=Object.keys(y),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(y=j(y,c)),b=rn(b,y))}return n.dirs&&(b=rn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,O(w),v}const U=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function W(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||H(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?H(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!A(l,n))return!0}}return!1}function H(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!A(n,o))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const V=e=>e.__isSuspense;function $(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const z={};function K(e,t,n){return J(e,t,n)}function J(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){var h;const d=(0,r.nZ)()===(null==(h=_n)?void 0:h.scope)?_n:null;let f,p,_=!1,g=!1;if((0,r.dq)(e)?(f=()=>e.value,_=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,_=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Q(e):(0,i.mf)(e)?o(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>o(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),s(e,d,3,[v])}:i.dG,t&&a){const e=f;f=()=>Q(e())}let m,v=e=>{p=E.onStop=()=>{o(e,d,4)}};if(Tn){if(v=i.dG,t?n&&s(t,d,3,[f(),g?[]:void 0,v]):f(),"sync"!==c)return i.dG;{const e=Bn();m=e.__watcherHandles||(e.__watcherHandles=[])}}let y=g?new Array(e.length).fill(z):z;const b=()=>{if(E.active)if(t){const e=E.run();(a||_||(g?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(p&&p(),s(t,d,3,[e,y===z?void 0:g&&y[0]===z?[]:y,v]),y=e)}else E.run()};let C;b.allowRecurse=!!t,"sync"===c?C=b:"post"===c?C=()=>xt(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),C=()=>w(b));const E=new r.qq(f,C);t?n?b():y=E.run():"post"===c?xt(E.run.bind(E),d&&d.suspense):E.run();const I=()=>{E.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,E)};return m&&m.push(I),I}function Y(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?G(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=_n;wn(this);const c=J(o,s.bind(r),n);return a?wn(a):bn(),c}function G(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Q(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Q(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Q(e,t)}));else if((0,i.PO)(e))for(const n in e)Q(e[n],t);return e}function Z(e,t){const n=D;if(null===n)return e;const r=Dn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Q(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function X(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),s(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ee((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},re={name:"BaseTransition",props:ne,setup(e,{slots:t}){const n=gn(),i=ee();let o;return()=>{const s=t.default&&ue(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Ft){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:l}=c;if(i.isLeaving)return ae(a);const u=ce(a);if(!u)return ae(a);const h=se(u,c,i,n);le(u,h);const d=n.subTree,f=d&&ce(d);let p=!1;const{getTransitionKey:_}=u.type;if(_){const e=_();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(f&&f.type!==Ft&&(!Yt(u,f)||p)){const e=se(f,c,i,n);if(le(f,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ae(a);"in-out"===l&&u.type!==Ft&&(e.delayLeave=(e,t,n)=>{const r=oe(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ie=re;function oe(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function se(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:v,onAfterAppear:y,onAppearCancelled:w}=t,b=String(e.key),C=oe(n,e),E=(e,t)=>{e&&s(e,r,9,t)},I=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:a,persisted:c,beforeEnter(t){let r=l;if(!n.isMounted){if(!o)return;r=m||l}t._leaveCb&&t._leaveCb(!0);const i=C[b];i&&Yt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!o)return;t=v||u,r=y||h,i=w||d}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?I(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?g:_,[t]),t._leaveCb=void 0,C[i]===e&&delete C[i])};C[i]=e,p?I(p,[t,s]):s()},clone(e){return se(e,t,n,r)}};return T}function ae(e){if(de(e))return e=rn(e),e.children=null,e}function ce(e){return de(e)?e.children?e.children[0]:void 0:e}function le(e,t){6&e.shapeFlag&&e.component?le(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Mt?(128&s.patchFlag&&i++,r=r.concat(ue(s.children,t,a))):(t||s.type!==Ft)&&r.push(null!=a?rn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const he=e=>!!e.type.__asyncLoader;const de=e=>e.type.__isKeepAlive;RegExp,RegExp;function fe(e,t){return(0,i.kJ)(e)?e.some((e=>fe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function pe(e,t){ge(e,"a",t)}function _e(e,t){ge(e,"da",t)}function ge(e,t,n=_n){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(we(t,r,n),n){let e=n.parent;while(e&&e.parent)de(e.parent.vnode)&&me(r,t,n,e),e=e.parent}}function me(e,t,n,r){const o=we(t,e,r,!0);ke((()=>{(0,i.Od)(r[t],o)}),n)}function ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ye(e){return 128&e.shapeFlag?e.ssContent:e}function we(e,t,n=_n,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),wn(n);const o=s(t,n,e,i);return bn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const be=e=>(t,n=_n)=>(!Tn||"sp"===e)&&we(e,((...e)=>t(...e)),n),Ce=be("bm"),Ee=be("m"),Ie=be("bu"),Te=be("u"),Se=be("bum"),ke=be("um"),xe=be("sp"),Re=be("rtg"),Ne=be("rtc");function Ae(e,t=_n){we("ec",e,t)}const De="components";function Pe(e,t){return Me(De,e,!0,t)||e}const Oe=Symbol.for("v-ndc");function Me(e,t,n=!0,r=!1){const o=D||_n;if(o){const n=o.type;if(e===De){const e=Pn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=Le(o[e]||n[e],t)||Le(o.appContext[e],t);return!s&&r?n:s}}function Le(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Fe(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Be=e=>e?Cn(e)?Dn(e)||e.proxy:Be(e.parent):null,Ue=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Be(e.parent),$root:e=>Be(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>Y.bind(e)}),je=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),We={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(je(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];qe&&(c[t]=0)}}const d=Ue[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return je(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||je(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Ue,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function He(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let qe=!0;function Ve(e){const t=Je(e),n=e.proxy,o=e.ctx;qe=!1,t.beforeCreate&&ze(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:_,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:C,render:E,renderTracked:I,renderTriggered:T,errorCaptured:S,serverPrefetch:k,expose:x,inheritAttrs:R,components:N,directives:A,filters:D}=t,P=null;if(h&&$e(h,o,P),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(qe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Mn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Ke(l[r],o,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{ct(t,e[t])}))}function O(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&ze(d,e,"c"),O(Ce,f),O(Ee,p),O(Ie,_),O(Te,g),O(pe,m),O(_e,v),O(Ae,S),O(Ne,I),O(Re,T),O(Se,w),O(ke,C),O(xe,k),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=R&&(e.inheritAttrs=R),N&&(e.components=N),A&&(e.directives=A)}function $e(e,t,n=i.dG){(0,i.kJ)(e)&&(e=Xe(e));for(const o in e){const n=e[o];let s;s=(0,i.Kn)(n)?"default"in n?lt(n.from||o,n.default,!0):lt(n.from||o):lt(n),(0,r.dq)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function ze(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ke(e,t,n,r){const o=r.includes(".")?G(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&K(o,n)}else if((0,i.mf)(e))K(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ke(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&K(o,r,e)}else 0}function Je(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:o.length||n||r?(l={},o.length&&o.forEach((e=>Ye(l,e,a,!0))),Ye(l,t,a)):l=t,(0,i.Kn)(t)&&s.set(t,l),l}function Ye(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Ye(e,o,n,!0),i&&i.forEach((t=>Ye(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Ge[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Ge={data:Qe,props:nt,emits:nt,methods:tt,computed:tt,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:tt,directives:tt,watch:rt,provide:Qe,inject:Ze};function Qe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return tt(Xe(e),Xe(t))}function Xe(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function nt(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),He(e),He(null!=t?t:{})):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=et(e[r],t[r]);return n}function it(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ot=0;function st(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=it();const s=new Set;let a=!1;const c=o.app={_uid:ot++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Un,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,l){if(!a){0;const u=en(n,r);return u.appContext=o,s&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Dn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c},runWithContext(e){at=c;try{return e()}finally{at=null}}};return c}}let at=null;function ct(e,t){if(_n){let n=_n.provides;const r=_n.parent&&_n.parent.provides;r===n&&(n=_n.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const r=_n||D;if(r||at){const o=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:at._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function ut(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,Gt,1),e.propsDefaults=Object.create(null),dt(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ht(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(s),[u]=e.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;dt(e,t,s,a)&&(h=!0);for(const o in l)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=ft(u,l,o,void 0,e,!0)):delete s[o]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(A(e.emitsOptions,o))continue;const c=t[o];if(u)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const t=(0,i._A)(o);s[t]=ft(u,l,t,c,e,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function dt(e,t,n,o){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;s&&(0,i.RI)(s,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:A(e.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ft(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return l}function ft(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(wn(o),r=i[n]=e.call(null,t),bn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function pt(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=pt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let h=0;h<s.length;h++){0;const e=(0,i._A)(s[h]);_t(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(_t(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=vt(Boolean,r.type),n=vt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return(0,i.Kn)(e)&&r.set(e,u),u}function _t(e){return"$"!==e[0]}function gt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function mt(e,t){return gt(e)===gt(t)}function vt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>mt(t,e))):(0,i.mf)(t)&&mt(t,e)?0:-1}const yt=e=>"_"===e[0]||"$stable"===e,wt=e=>(0,i.kJ)(e)?e.map(an):[an(e)],bt=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>wt(t(...e))),n);return r._c=!1,r},Ct=(e,t,n)=>{const r=e._ctx;for(const o in e){if(yt(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=bt(o,n,r);else if(null!=n){0;const e=wt(n);t[o]=()=>e}}},Et=(e,t)=>{const n=wt(t);e.slots.default=()=>n},It=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Ct(t,e.slots={})}else e.slots={},t&&Et(e,t);(0,i.Nj)(e.slots,Gt,1)},Tt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,Ct(t,o)),a=t}else t&&(Et(e,t),a={default:1});if(s)for(const i in o)yt(i)||i in a||delete o[i]};function St(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>St(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(he(s)&&!a)return;const c=4&s.shapeFlag?Dn(s.component)||s.component.proxy:s.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))o(h,u,12,[l,f]);else{const t=(0,i.HD)(h),o=(0,r.dq)(h);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,i.RI)(p,h)&&(p[h]=l)):o&&(h.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,xt(r,n)):r()}else 0}}function kt(){}const xt=$;function Rt(e){return Nt(e)}function Nt(e,t){kt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:_=i.dG,insertStaticContent:g}=e,m=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Yt(e,t)&&(r=Z(e),K(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Lt:v(e,t,n,r);break;case Ft:y(e,t,n,r);break;case Bt:null==e&&b(t,n,r,s);break;case Mt:O(e,t,n,r,i,o,s,a,c);break;default:1&h?k(e,t,n,r,i,o,s,a,c):6&h?M(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,o,s,a,c,te)}null!=u&&i&&St(u,e&&e.ref,o,t||e,!t)},v=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},y=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},k=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?x(t,n,r,i,o,s,a,c):A(e,t,i,o,s,a,c)},x=(e,t,n,r,s,l,u,h)=>{let f,p;const{type:_,props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=c(e.type,l,g&&g.is,g),8&m?d(f,e.children):16&m&&N(e.children,f,null,r,s,l&&"foreignObject"!==_,u,h),y&&X(e,null,r,"created"),R(f,e,e.scopeId,u,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],l,e.children,r,s,Q);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&hn(p,r,e)}y&&X(e,null,r,"beforeMount");const w=(!s||s&&!s.pendingBranch)&&v&&!v.persisted;w&&v.beforeEnter(f),o(f,t,n),((p=g&&g.onVnodeMounted)||w||y)&&xt((()=>{p&&hn(p,r,e),w&&v.enter(f),y&&X(e,null,r,"mounted")}),s)},R=(e,t,n,r,i)=>{if(n&&_(e,n),r)for(let o=0;o<r.length;o++)_(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?cn(e[l]):an(e[l]);m(null,c,t,n,r,i,o,s,a)}},A=(e,t,n,r,o,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,_=t.props||i.kT;let g;n&&At(n,!1),(g=_.onVnodeBeforeUpdate)&&hn(g,n,t,e),f&&X(t,e,n,"beforeUpdate"),n&&At(n,!0);const m=o&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,l,n,r,m,s):c||H(e,t,l,null,n,r,m,s,!1),u>0){if(16&u)P(l,t,p,_,n,r,o);else if(2&u&&p.class!==_.class&&a(l,"class",null,_.class,o),4&u&&a(l,"style",p.style,_.style,o),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],u=_[s];u===c&&"value"!==s||a(l,s,c,u,o,e.children,n,r,Q)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||P(l,t,p,_,n,r,o);((g=_.onVnodeUpdated)||f)&&xt((()=>{g&&hn(g,n,t,e),f&&X(t,e,n,"updated")}),r)},D=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Mt||!Yt(c,l)||70&c.shapeFlag)?f(c.el):n;m(c,l,u,null,r,i,o,s,!0)}},P=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,o,s,Q);for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,o,s,Q)}"value"in r&&a(e,"value",n.value,r.value)}},O=(e,t,n,r,i,s,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:_}=t;_&&(c=c?c.concat(_):_),null==e?(o(h,n,r),o(d,n,r),N(t.children,n,d,i,s,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&Dt(e,t,!0)):H(e,t,n,d,i,s,a,c,u)},M=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):F(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=pn(e,r,i);if(de(e)&&(a.ctx.renderer=te),Sn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=en(Ft);y(null,e,t,n)}}else U(a,e,t,n,i,o,s)},F=(e,t,n)=>{const r=t.component=e.component;if(W(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,C(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,o,s,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:l,vnode:u}=e,h=n;0,At(e,!1),n?(n.el=u.el,j(e,n,c)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&hn(t,l,n,u),At(e,!0);const d=B(e);0;const p=e.subTree;e.subTree=d,m(p,d,f(p.el),Z(p),e,s,a),n.el=d.el,null===h&&q(e,d.el),o&&xt(o,s),(t=n.props&&n.props.onVnodeUpdated)&&xt((()=>hn(t,l,n,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=he(t);if(At(e,!1),u&&(0,i.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&hn(r,d,t),At(e,!0),c&&re){const n=()=>{e.subTree=B(e),re(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=B(e);0,m(null,r,n,o,e,s,a),t.el=r.el}if(h&&xt(h,s),!f&&(r=l&&l.onVnodeMounted)){const e=t;xt((()=>hn(r,d,e)),s)}(256&t.shapeFlag||d&&he(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&xt(e.a,s),e.isMounted=!0,t=n=o=null}},u=e.effect=new r.qq(l,(()=>w(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,At(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ht(e,t.props,i,n),Tt(e,t.children,n),(0,r.Jd)(),I(),(0,r.lk)()},H=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(l,h,n,r,i,o,s,a,c);if(256&f)return void V(l,h,n,r,i,o,s,a,c)}8&p?(16&u&&Q(l,i,o),h!==l&&d(n,h)):16&u?16&p?$(l,h,n,r,i,o,s,a,c):Q(l,i,o,!0):(8&u&&d(n,""),16&p&&N(h,n,r,i,o,s,a,c))},V=(e,t,n,r,o,s,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?cn(t[f]):an(t[f]);m(e[f],r,n,null,o,s,a,c,l)}u>h?Q(e,o,s,!0,!1,d):N(t,n,r,o,s,a,c,l,d)},$=(e,t,n,r,o,s,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?cn(t[u]):an(t[u]);if(!Yt(r,i))break;m(r,i,n,null,o,s,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?cn(t[f]):an(t[f]);if(!Yt(r,i))break;m(r,i,n,null,o,s,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)m(null,t[u]=l?cn(t[u]):an(t[u]),n,i,o,s,a,c,l),u++}}else if(u>f)while(u<=d)K(e[u],o,s,!0),u++;else{const p=u,_=u,g=new Map;for(u=_;u<=f;u++){const e=t[u]=l?cn(t[u]):an(t[u]);null!=e.key&&g.set(e.key,u)}let v,y=0;const w=f-_+1;let b=!1,C=0;const E=new Array(w);for(u=0;u<w;u++)E[u]=0;for(u=p;u<=d;u++){const r=e[u];if(y>=w){K(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=_;v<=f;v++)if(0===E[v-_]&&Yt(r,t[v])){i=v;break}void 0===i?K(r,o,s,!0):(E[i-_]=u+1,i>=C?C=i:b=!0,m(r,t[i],n,null,o,s,a,c,l),y++)}const I=b?Pt(E):i.Z6;for(v=I.length-1,u=w-1;u>=0;u--){const e=_+u,i=t[e],d=e+1<h?t[e+1].el:r;0===E[u]?m(null,i,n,d,o,s,a,c,l):b&&(v<0||u!==I[v]?z(i,n,d,2):v--)}}},z=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===Mt){o(s,t,n);for(let e=0;e<l.length;e++)z(l[e],t,n,r);return void o(e.anchor,t,n)}if(a===Bt)return void E(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(s),o(s,t,n),xt((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),l=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&St(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!he(e);let _;if(p&&(_=s&&s.onVnodeBeforeUnmount)&&hn(_,t,e),6&u)G(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&X(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(o!==Mt||h>0&&64&h)?Q(l,t,n,!1,!0):(o===Mt&&384&h||!i&&16&u)&&Q(c,t,n),r&&J(e)}(p&&(_=s&&s.onVnodeUnmounted)||f)&&xt((()=>{_&&hn(_,t,e),f&&X(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Mt)return void Y(n,r);if(t===Bt)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Y=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},G=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,K(a,e,t,n)),c&&xt(c,t),xt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)K(e[s],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),I(),T(),t._vnode=e},te={p:m,um:K,m:z,r:J,mt:L,mc:N,pc:H,pbc:D,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:st(ee,ne)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Dt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=cn(o[i]),t.el=e.el),n||Dt(e,t)),t.type===Lt&&(t.el=e.el)}}function Pt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Ot=e=>e.__isTeleport;const Mt=Symbol.for("v-fgt"),Lt=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Bt=Symbol.for("v-stc"),Ut=[];let jt=null;function Wt(e=!1){Ut.push(jt=e?null:[])}function Ht(){Ut.pop(),jt=Ut[Ut.length-1]||null}let qt=1;function Vt(e){qt+=e}function $t(e){return e.dynamicChildren=qt>0?jt||i.Z6:null,Ht(),qt>0&&jt&&jt.push(e),e}function zt(e,t,n,r,i,o){return $t(Xt(e,t,n,r,i,o,!0))}function Kt(e,t,n,r,i){return $t(en(e,t,n,r,i,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function Yt(e,t){return e.type===t.type&&e.key===t.key}const Gt="__vInternal",Qt=({key:e})=>null!=e?e:null,Zt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function Xt(e,t=null,n=null,r=0,o=null,s=(e===Mt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qt(t),ref:t&&Zt(t),scopeId:P,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:D};return c?(ln(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),qt>0&&!a&&jt&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&jt.push(l),l}const en=tn;function tn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==Oe||(e=Ft),Jt(e)){const r=rn(e,t,!0);return n&&ln(r,n),qt>0&&!a&&jt&&(6&r.shapeFlag?jt[jt.indexOf(e)]=r:jt.push(r)),r.patchFlag|=-2,r}if(On(e)&&(e=e.__vccOpts),t){t=nn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:V(e)?128:Ot(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Xt(e,t,n,o,s,c,a,!0)}function nn(e){return e?(0,r.X3)(e)||Gt in e?(0,i.l7)({},e):e:null}function rn(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?un(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Qt(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(Zt(t)):[o,Zt(t)]:Zt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function on(e=" ",t=0){return en(Lt,null,e,t)}function sn(e="",t=!1){return t?(Wt(),Kt(Ft,null,e)):en(Ft,null,e)}function an(e){return null==e||"boolean"===typeof e?en(Ft):(0,i.kJ)(e)?en(Mt,null,e.slice()):"object"===typeof e?cn(e):en(Lt,null,String(e))}function cn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:rn(e)}function ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Gt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function un(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function hn(e,t,n,r=null){s(e,t,7,[n,r])}const dn=it();let fn=0;function pn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||dn,a={uid:fn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pt(o,s),emitsOptions:N(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let _n=null;const gn=()=>_n||D;let mn,vn,yn="__VUE_INSTANCE_SETTERS__";(vn=(0,i.E9)()[yn])||(vn=(0,i.E9)()[yn]=[]),vn.push((e=>_n=e)),mn=e=>{vn.length>1?vn.forEach((t=>t(e))):vn[0](e)};const wn=e=>{mn(e),e.scope.on()},bn=()=>{_n&&_n.scope.off(),mn(null)};function Cn(e){return 4&e.vnode.shapeFlag}let En,In,Tn=!1;function Sn(e,t=!1){Tn=t;const{props:n,children:r}=e.vnode,i=Cn(e);ut(e,n,i,t),It(e,r);const o=i?kn(e,t):void 0;return Tn=!1,o}function kn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,We));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?An(e):null;wn(e),(0,r.Jd)();const c=o(s,e,0,[e.props,n]);if((0,r.lk)(),bn(),(0,i.tI)(c)){if(c.then(bn,bn),t)return c.then((n=>{xn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else xn(e,c,t)}else Rn(e,t)}function xn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Rn(e,n)}function Rn(e,t,n){const o=e.type;if(!e.render){if(!t&&En&&!o.render){const t=o.template||Je(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=En(t,c)}}e.render=o.render||i.dG,In&&In(e)}wn(e),(0,r.Jd)(),Ve(e),(0,r.lk)(),bn()}function Nn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function An(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Nn(e)},slots:e.slots,emit:e.emit,expose:t}}function Dn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ue?Ue[n](e):void 0},has(e,t){return t in e||t in Ue}}))}function Pn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function On(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Mn=(e,t)=>(0,r.Fl)(e,t,Tn);function Ln(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Jt(t)?en(e,null,[t]):en(e,t):en(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Jt(n)&&(n=[n]),en(e,t,n))}const Fn=Symbol.for("v-scx"),Bn=()=>{{const e=lt(Fn);return e}};const Un="3.3.4"},9242:function(e,t,n){"use strict";n.d(t,{bM:function(){return he},e8:function(){return le},nr:function(){return ce},ri:function(){return ve},uT:function(){return M}});n(7658);var r=n(7139),i=n(3396),o=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"");for(const e in n)f(i,e,n[e])}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],_={};function g(e,t){const n=_[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return _[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return _[t]=n}return t}const m="http://www.w3.org/1999/xlink";function v(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(m,t.slice(6,t.length)):e.setAttributeNS(m,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function C(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=I(t);if(r){const s=o[t]=x(r,i);w(e,n,s,a)}else s&&(b(e,n,s,a),o[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function I(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const S=Promise.resolve(),k=()=>T||(S.then((()=>T=0)),T=Date.now());function x(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(R(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function R(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,A=(e,t,n,i,o=!1,s,a,c,l)=>{"class"===t?u(e,i,o):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||C(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,o))?y(e,t,i,s,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,o))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const P="transition",O="animation",M=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);M.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=M.props=(0,r.l7)({},i.nJ,L),B=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in L||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,_=W(o),g=_&&_[0],m=_&&_[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:w,onLeave:b,onLeaveCancelled:C,onBeforeAppear:E=v,onAppear:I=y,onAppearCancelled:T=w}=t,S=(e,t,n)=>{V(e,t?h:c),V(e,t?u:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,V(e,d),V(e,p),V(e,f),t&&t()},x=e=>(t,n)=>{const r=e?I:y,o=()=>S(t,e,n);B(r,[t,o]),$((()=>{V(t,e?l:s),q(t,e?h:c),U(r)||K(t,i,g,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){B(v,[e]),q(e,s),q(e,a)},onBeforeAppear(e){B(E,[e]),q(e,l),q(e,u)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);q(e,d),Q(),q(e,f),$((()=>{e._isLeaving&&(V(e,d),q(e,p),U(b)||K(e,i,m,n))})),B(b,[e,n])},onEnterCancelled(e){S(e,!1),B(w,[e])},onAppearCancelled(e){S(e,!0),B(T,[e])},onLeaveCancelled(e){k(e),B(C,[e])}})}function W(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function V(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function K(e,t,n,r){const i=e._endId=++z,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=J(e,t);if(!s)return r();const l=s+"end";let u=0;const h=()=>{e.removeEventListener(l,d),o()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${P}Delay`),o=r(`${P}Duration`),s=Y(i,o),a=r(`${O}Delay`),c=r(`${O}Duration`),l=Y(a,c);let u=null,h=0,d=0;t===P?s>0&&(u=P,h=s,d=o.length):t===O?l>0&&(u=O,h=l,d=c.length):(h=Math.max(s,l),u=h>0?s>l?P:O:null,d=u?u===P?o.length:c.length:0);const f=u===P&&/\b(transform|all)(,|$)/.test(r(`${P}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Y(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>G(t)+G(e[n]))))}function G(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}const Z=new WeakMap,X=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},F,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let s,a;return(0,i.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(s[0].el,n.vnode.el,t))return;s.forEach(te),s.forEach(ne);const r=s.filter(re);Q(),r.forEach((e=>{const n=e.el,r=n.style;q(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,V(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.IU)(e),l=j(c);let u=c.tag||i.HY;s=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,l,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,i.nK)(t,(0,i.U2)(t,l,r,n)),Z.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){X.set(e,e.el.getBoundingClientRect())}function re(e){const t=Z.get(e),n=X.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=J(r);return i.removeChild(r),o}const oe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function se(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=oe(o);const s=i||o.props&&"number"===o.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.h5)(i)),e._assign(i)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",se),w(e,"compositionend",ae),w(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=oe(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},le={deep:!0,created(e,t,n){e._assign=oe(n),w(e,"change",(()=>{const t=e._modelValue,n=fe(e),i=e.checked,o=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(pe(e,i))}))},mounted:ue,beforeUpdate(e,t,n){e._assign=oe(n),ue(e,t,n)}};function ue(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,pe(e,!0)))}const he={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=(0,r.DM)(t);w(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.h5)(fe(e)):fe(e)));e._assign(e.multiple?o?new Set(t):t:t[0])})),e._assign=oe(i)},mounted(e,{value:t}){de(e,t)},beforeUpdate(e,t,n){e._assign=oe(n)},updated(e,{value:t}){de(e,t)}};function de(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=fe(o);if(n)(0,r.kJ)(t)?o.selected=(0,r.hq)(t,s)>-1:o.selected=t.has(s);else if((0,r.WV)(fe(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function fe(e){return"_value"in e?e._value:e.value}function pe(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const _e=(0,r.l7)({patchProp:A},l);let ge;function me(){return ge||(ge=(0,i.Us)(_e))}const ve=(...e)=>{const t=me().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ye(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function ye(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return Z},DM:function(){return m},E9:function(){return V},F7:function(){return l},Gg:function(){return N},HD:function(){return b},He:function(){return H},Kj:function(){return y},Kn:function(){return E},NO:function(){return a},Nj:function(){return j},Od:function(){return d},PO:function(){return x},Pq:function(){return ee},RI:function(){return p},S0:function(){return R},W7:function(){return k},WV:function(){return re},Z6:function(){return o},_A:function(){return P},_N:function(){return g},aU:function(){return B},dG:function(){return s},e1:function(){return z},fY:function(){return r},h5:function(){return W},hR:function(){return F},hq:function(){return ie},ir:function(){return U},j5:function(){return K},kC:function(){return L},kJ:function(){return _},kT:function(){return i},l7:function(){return h},mf:function(){return w},rs:function(){return M},tI:function(){return I},tR:function(){return u},yA:function(){return te},yk:function(){return C}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i={},o=[],s=()=>{},a=()=>!1,c=/^on[^a-z]/,l=e=>c.test(e),u=e=>e.startsWith("onUpdate:"),h=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,p=(e,t)=>f.call(e,t),_=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,b=e=>"string"===typeof e,C=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,I=e=>E(e)&&w(e.then)&&w(e.catch),T=Object.prototype.toString,S=e=>T.call(e),k=e=>S(e).slice(8,-1),x=e=>"[object Object]"===S(e),R=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},D=/-(\w)/g,P=A((e=>e.replace(D,((e,t)=>t?t.toUpperCase():"")))),O=/\B([A-Z])/g,M=A((e=>e.replace(O,"-$1").toLowerCase())),L=A((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=A((e=>e?`on${L(e)}`:"")),B=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},W=e=>{const t=parseFloat(e);return isNaN(t)?e:t},H=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let q;const V=()=>q||(q="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const $="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",z=r($);function K(e){if(_(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?Q(r):K(r);if(i)for(const e in i)t[e]=i[e]}return t}return b(e)||E(e)?e:void 0}const J=/;(?![^(]*\))/g,Y=/:([^]+)/,G=/\/\*[^]*?\*\//g;function Q(e){const t={};return e.replace(G,"").split(J).forEach((e=>{if(e){const n=e.split(Y);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Z(e){let t="";if(b(e))t=e;else if(_(e))for(let n=0;n<e.length;n++){const r=Z(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const X="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(X);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=C(e),r=C(t),n||r)return e===t;if(n=_(e),r=_(t),n||r)return!(!n||!r)&&ne(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>re(e,t)))}},8009:function(e,t,n){var r,i,o;n(7658);var s=function(){var e=function(e,t){var r=236,o=17,f=e,p=n[t],_=null,g=0,v=null,y=[],w={},b=function(e,t){g=4*f+17,_=function(e){for(var t=new Array(e),n=0;n<e;n+=1){t[n]=new Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(g),C(0,0),C(g-7,0),C(0,g-7),T(),I(),k(e,t),f>=7&&S(e),null==v&&(v=N(f,p,y)),x(v,t)},C=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1||g<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||g<=t+r||(_[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},E=function(){for(var e=0,t=0,n=0;n<8;n+=1){b(!0,n);var r=i.getLostPoint(w);(0==n||e>r)&&(e=r,t=n)}return t},I=function(){for(var e=8;e<g-8;e+=1)null==_[e][6]&&(_[e][6]=e%2==0);for(var t=8;t<g-8;t+=1)null==_[6][t]&&(_[6][t]=t%2==0)},T=function(){for(var e=i.getPatternPosition(f),t=0;t<e.length;t+=1)for(var n=0;n<e.length;n+=1){var r=e[t],o=e[n];if(null==_[r][o])for(var s=-2;s<=2;s+=1)for(var a=-2;a<=2;a+=1)_[r+s][o+a]=-2==s||2==s||-2==a||2==a||0==s&&0==a}},S=function(e){for(var t=i.getBCHTypeNumber(f),n=0;n<18;n+=1){var r=!e&&1==(t>>n&1);_[Math.floor(n/3)][n%3+g-8-3]=r}for(n=0;n<18;n+=1){r=!e&&1==(t>>n&1);_[n%3+g-8-3][Math.floor(n/3)]=r}},k=function(e,t){for(var n=p<<3|t,r=i.getBCHTypeInfo(n),o=0;o<15;o+=1){var s=!e&&1==(r>>o&1);o<6?_[o][8]=s:o<8?_[o+1][8]=s:_[g-15+o][8]=s}for(o=0;o<15;o+=1){s=!e&&1==(r>>o&1);o<8?_[8][g-o-1]=s:o<9?_[8][15-o-1+1]=s:_[8][15-o-1]=s}_[g-8][8]=!e},x=function(e,t){for(var n=-1,r=g-1,o=7,s=0,a=i.getMaskFunction(t),c=g-1;c>0;c-=2){6==c&&(c-=1);while(1){for(var l=0;l<2;l+=1)if(null==_[r][c-l]){var u=!1;s<e.length&&(u=1==(e[s]>>>o&1));var h=a(r,c-l);h&&(u=!u),_[r][c-l]=u,o-=1,-1==o&&(s+=1,o=7)}if(r+=n,r<0||g<=r){r-=n,n=-n;break}}}},R=function(e,t){for(var n=0,r=0,o=0,a=new Array(t.length),c=new Array(t.length),l=0;l<t.length;l+=1){var u=t[l].dataCount,h=t[l].totalCount-u;r=Math.max(r,u),o=Math.max(o,h),a[l]=new Array(u);for(var d=0;d<a[l].length;d+=1)a[l][d]=255&e.getBuffer()[d+n];n+=u;var f=i.getErrorCorrectPolynomial(h),p=s(a[l],f.getLength()-1),_=p.mod(f);c[l]=new Array(f.getLength()-1);for(d=0;d<c[l].length;d+=1){var g=d+_.getLength()-c[l].length;c[l][d]=g>=0?_.getAt(g):0}}var m=0;for(d=0;d<t.length;d+=1)m+=t[d].totalCount;var v=new Array(m),y=0;for(d=0;d<r;d+=1)for(l=0;l<t.length;l+=1)d<a[l].length&&(v[y]=a[l][d],y+=1);for(d=0;d<o;d+=1)for(l=0;l<t.length;l+=1)d<c[l].length&&(v[y]=c[l][d],y+=1);return v},N=function(e,t,n){for(var s=a.getRSBlocks(e,t),l=c(),u=0;u<n.length;u+=1){var h=n[u];l.put(h.getMode(),4),l.put(h.getLength(),i.getLengthInBits(h.getMode(),e)),h.write(l)}var d=0;for(u=0;u<s.length;u+=1)d+=s[u].dataCount;if(l.getLengthInBits()>8*d)throw"code length overflow. ("+l.getLengthInBits()+">"+8*d+")";l.getLengthInBits()+4<=8*d&&l.put(0,4);while(l.getLengthInBits()%8!=0)l.putBit(!1);while(1){if(l.getLengthInBits()>=8*d)break;if(l.put(r,8),l.getLengthInBits()>=8*d)break;l.put(o,8)}return R(l,s)};w.addData=function(e,t){t=t||"Byte";var n=null;switch(t){case"Numeric":n=l(e);break;case"Alphanumeric":n=u(e);break;case"Byte":n=h(e);break;case"Kanji":n=d(e);break;default:throw"mode:"+t}y.push(n),v=null},w.isDark=function(e,t){if(e<0||g<=e||t<0||g<=t)throw e+","+t;return _[e][t]},w.getModuleCount=function(){return g},w.make=function(){if(f<1){for(var e=1;e<40;e++){for(var t=a.getRSBlocks(e,p),n=c(),r=0;r<y.length;r++){var o=y[r];n.put(o.getMode(),4),n.put(o.getLength(),i.getLengthInBits(o.getMode(),e)),o.write(n)}var s=0;for(r=0;r<t.length;r++)s+=t[r].dataCount;if(n.getLengthInBits()<=8*s)break}f=e}b(!1,E())},w.createTableTag=function(e,t){e=e||2,t="undefined"==typeof t?4*e:t;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+t+"px;",n+='">',n+="<tbody>";for(var r=0;r<w.getModuleCount();r+=1){n+="<tr>";for(var i=0;i<w.getModuleCount();i+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+e+"px;",n+=" height: "+e+"px;",n+=" background-color: ",n+=w.isDark(r,i)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>",n},w.createSvgTag=function(e,t,n,r){var i={};"object"==typeof arguments[0]&&(i=arguments[0],e=i.cellSize,t=i.margin,n=i.alt,r=i.title),e=e||2,t="undefined"==typeof t?4*e:t,n="string"===typeof n?{text:n}:n||{},n.text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,r="string"===typeof r?{text:r}:r||{},r.text=r.text||null,r.id=r.text?r.id||"qrcode-title":null;var o,s,a,c,l,u=w.getModuleCount()*e+2*t,h="";for(l="l"+e+",0 0,"+e+" -"+e+",0 0,-"+e+"z ",h+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',h+=i.scalable?"":' width="'+u+'px" height="'+u+'px"',h+=' viewBox="0 0 '+u+" "+u+'" ',h+=' preserveAspectRatio="xMinYMin meet"',h+=r.text||n.text?' role="img" aria-labelledby="'+A([r.id,n.id].join(" ").trim())+'"':"",h+=">",h+=r.text?'<title id="'+A(r.id)+'">'+A(r.text)+"</title>":"",h+=n.text?'<description id="'+A(n.id)+'">'+A(n.text)+"</description>":"",h+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',h+='<path d="',a=0;a<w.getModuleCount();a+=1)for(c=a*e+t,o=0;o<w.getModuleCount();o+=1)w.isDark(a,o)&&(s=o*e+t,h+="M"+s+","+c+l);return h+='" stroke="transparent" fill="black"/>',h+="</svg>",h},w.createDataURL=function(e,t){e=e||2,t="undefined"==typeof t?4*e:t;var n=w.getModuleCount()*e+2*t,r=t,i=n-t;return m(n,n,(function(t,n){if(r<=t&&t<i&&r<=n&&n<i){var o=Math.floor((t-r)/e),s=Math.floor((n-r)/e);return w.isDark(s,o)?0:1}return 1}))},w.createImgTag=function(e,t,n){e=e||2,t="undefined"==typeof t?4*e:t;var r=w.getModuleCount()*e+2*t,i="";return i+="<img",i+=' src="',i+=w.createDataURL(e,t),i+='"',i+=' width="',i+=r,i+='"',i+=' height="',i+=r,i+='"',n&&(i+=' alt="',i+=A(n),i+='"'),i+="/>",i};var A=function(e){for(var t="",n=0;n<e.length;n+=1){var r=e.charAt(n);switch(r){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=r;break}}return t},D=function(e){var t=1;e="undefined"==typeof e?2*t:e;var n,r,i,o,s,a=w.getModuleCount()*t+2*e,c=e,l=a-e,u={"██":"█","█ ":"▀"," █":"▄","  ":" "},h={"██":"▀","█ ":"▀"," █":" ","  ":" "},d="";for(n=0;n<a;n+=2){for(i=Math.floor((n-c)/t),o=Math.floor((n+1-c)/t),r=0;r<a;r+=1)s="█",c<=r&&r<l&&c<=n&&n<l&&w.isDark(i,Math.floor((r-c)/t))&&(s=" "),c<=r&&r<l&&c<=n+1&&n+1<l&&w.isDark(o,Math.floor((r-c)/t))?s+=" ":s+="█",d+=e<1&&n+1>=l?h[s]:u[s];d+="\n"}return a%2&&e>0?d.substring(0,d.length-a-1)+Array(a+1).join("▀"):d.substring(0,d.length-1)};return w.createASCII=function(e,t){if(e=e||1,e<2)return D(t);e-=1,t="undefined"==typeof t?2*e:t;var n,r,i,o,s=w.getModuleCount()*e+2*t,a=t,c=s-t,l=Array(e+1).join("██"),u=Array(e+1).join("  "),h="",d="";for(n=0;n<s;n+=1){for(i=Math.floor((n-a)/e),d="",r=0;r<s;r+=1)o=1,a<=r&&r<c&&a<=n&&n<c&&w.isDark(i,Math.floor((r-a)/e))&&(o=0),d+=o?l:u;for(i=0;i<e;i+=1)h+=d+"\n"}return h.substring(0,h.length-1)},w.renderTo2dContext=function(e,t){t=t||2;for(var n=w.getModuleCount(),r=0;r<n;r++)for(var i=0;i<n;i++)e.fillStyle=w.isDark(r,i)?"black":"white",e.fillRect(r*t,i*t,t,t)},w};e.stringToBytesFuncs={default:function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t.push(255&r)}return t}},e.stringToBytes=e.stringToBytesFuncs["default"],e.createStringToBytes=function(e,t){var n=function(){var n=_(e),r=function(){var e=n.read();if(-1==e)throw"eof";return e},i=0,o={};while(1){var s=n.read();if(-1==s)break;var a=r(),c=r(),l=r(),u=String.fromCharCode(s<<8|a),h=c<<8|l;o[u]=h,i+=1}if(i!=t)throw i+" != "+t;return o}(),r="?".charCodeAt(0);return function(e){for(var t=[],i=0;i<e.length;i+=1){var o=e.charCodeAt(i);if(o<128)t.push(o);else{var s=n[e.charAt(i)];"number"==typeof s?(255&s)==s?t.push(s):(t.push(s>>>8),t.push(255&s)):t.push(r)}}return t}};var t={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,i=7973,a=21522,c={},l=function(e){var t=0;while(0!=e)t+=1,e>>>=1;return t};return c.getBCHTypeInfo=function(e){var t=e<<10;while(l(t)-l(n)>=0)t^=n<<l(t)-l(n);return(e<<10|t)^a},c.getBCHTypeNumber=function(e){var t=e<<12;while(l(t)-l(i)>=0)t^=i<<l(t)-l(i);return e<<12|t},c.getPatternPosition=function(t){return e[t-1]},c.getMaskFunction=function(e){switch(e){case r.PATTERN000:return function(e,t){return(e+t)%2==0};case r.PATTERN001:return function(e,t){return e%2==0};case r.PATTERN010:return function(e,t){return t%3==0};case r.PATTERN011:return function(e,t){return(e+t)%3==0};case r.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case r.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case r.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case r.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw"bad maskPattern:"+e}},c.getErrorCorrectPolynomial=function(e){for(var t=s([1],0),n=0;n<e;n+=1)t=t.multiply(s([1,o.gexp(n)],0));return t},c.getLengthInBits=function(e,n){if(1<=n&&n<10)switch(e){case t.MODE_NUMBER:return 10;case t.MODE_ALPHA_NUM:return 9;case t.MODE_8BIT_BYTE:return 8;case t.MODE_KANJI:return 8;default:throw"mode:"+e}else if(n<27)switch(e){case t.MODE_NUMBER:return 12;case t.MODE_ALPHA_NUM:return 11;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 10;default:throw"mode:"+e}else{if(!(n<41))throw"type:"+n;switch(e){case t.MODE_NUMBER:return 14;case t.MODE_ALPHA_NUM:return 13;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 12;default:throw"mode:"+e}}},c.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var i=0;i<t;i+=1){for(var o=0,s=e.isDark(r,i),a=-1;a<=1;a+=1)if(!(r+a<0||t<=r+a))for(var c=-1;c<=1;c+=1)i+c<0||t<=i+c||0==a&&0==c||s==e.isDark(r+a,i+c)&&(o+=1);o>5&&(n+=3+o-5)}for(r=0;r<t-1;r+=1)for(i=0;i<t-1;i+=1){var l=0;e.isDark(r,i)&&(l+=1),e.isDark(r+1,i)&&(l+=1),e.isDark(r,i+1)&&(l+=1),e.isDark(r+1,i+1)&&(l+=1),0!=l&&4!=l||(n+=3)}for(r=0;r<t;r+=1)for(i=0;i<t-6;i+=1)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i+=1)for(r=0;r<t-6;r+=1)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);var u=0;for(i=0;i<t;i+=1)for(r=0;r<t;r+=1)e.isDark(r,i)&&(u+=1);var h=Math.abs(100*u/t/t-50)/5;return n+=10*h,n},c}(),o=function(){for(var e=new Array(256),t=new Array(256),n=0;n<8;n+=1)e[n]=1<<n;for(n=8;n<256;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;n<255;n+=1)t[e[n]]=n;var r={glog:function(e){if(e<1)throw"glog("+e+")";return t[e]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return e[t]}};return r}();function s(e,t){if("undefined"==typeof e.length)throw e.length+"/"+t;var n=function(){var n=0;while(n<e.length&&0==e[n])n+=1;for(var r=new Array(e.length-n+t),i=0;i<e.length-n;i+=1)r[i]=e[i+n];return r}(),r={getAt:function(e){return n[e]},getLength:function(){return n.length},multiply:function(e){for(var t=new Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var i=0;i<e.getLength();i+=1)t[n+i]^=o.gexp(o.glog(r.getAt(n))+o.glog(e.getAt(i)));return s(t,0)},mod:function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=o.glog(r.getAt(0))-o.glog(e.getAt(0)),n=new Array(r.getLength()),i=0;i<r.getLength();i+=1)n[i]=r.getAt(i);for(i=0;i<e.getLength();i+=1)n[i]^=o.gexp(o.glog(e.getAt(i))+t);return s(n,0).mod(e)}};return r}var a=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},r={},i=function(t,r){switch(r){case n.L:return e[4*(t-1)+0];case n.M:return e[4*(t-1)+1];case n.Q:return e[4*(t-1)+2];case n.H:return e[4*(t-1)+3];default:return}};return r.getRSBlocks=function(e,n){var r=i(e,n);if("undefined"==typeof r)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var o=r.length/3,s=[],a=0;a<o;a+=1)for(var c=r[3*a+0],l=r[3*a+1],u=r[3*a+2],h=0;h<c;h+=1)s.push(t(l,u));return s},r}(),c=function(){var e=[],t=0,n={getBuffer:function(){return e},getAt:function(t){var n=Math.floor(t/8);return 1==(e[n]>>>7-t%8&1)},put:function(e,t){for(var r=0;r<t;r+=1)n.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return t},putBit:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n},l=function(e){var n=t.MODE_NUMBER,r=e,i={getMode:function(){return n},getLength:function(e){return r.length},write:function(e){var t=r,n=0;while(n+2<t.length)e.put(o(t.substring(n,n+3)),10),n+=3;n<t.length&&(t.length-n==1?e.put(o(t.substring(n,n+1)),4):t.length-n==2&&e.put(o(t.substring(n,n+2)),7))}},o=function(e){for(var t=0,n=0;n<e.length;n+=1)t=10*t+s(e.charAt(n));return t},s=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+e};return i},u=function(e){var n=t.MODE_ALPHA_NUM,r=e,i={getMode:function(){return n},getLength:function(e){return r.length},write:function(e){var t=r,n=0;while(n+1<t.length)e.put(45*o(t.charAt(n))+o(t.charAt(n+1)),11),n+=2;n<t.length&&e.put(o(t.charAt(n)),6)}},o=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-"0".charCodeAt(0);if("A"<=e&&e<="Z")return e.charCodeAt(0)-"A".charCodeAt(0)+10;switch(e){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+e}};return i},h=function(n){var r=t.MODE_8BIT_BYTE,i=e.stringToBytes(n),o={getMode:function(){return r},getLength:function(e){return i.length},write:function(e){for(var t=0;t<i.length;t+=1)e.put(i[t],8)}};return o},d=function(n){var r=t.MODE_KANJI,i=e.stringToBytesFuncs["SJIS"];if(!i)throw"sjis not supported.";!function(e,t){var n=i(e);if(2!=n.length||(n[0]<<8|n[1])!=t)throw"sjis not supported."}("友",38726);var o=i(n),s={getMode:function(){return r},getLength:function(e){return~~(o.length/2)},write:function(e){var t=o,n=0;while(n+1<t.length){var r=(255&t[n])<<8|255&t[n+1];if(33088<=r&&r<=40956)r-=33088;else{if(!(57408<=r&&r<=60351))throw"illegal char at "+(n+1)+"/"+r;r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13),n+=2}if(n<t.length)throw"illegal char at "+(n+1)}};return s},f=function(){var e=[],t={writeByte:function(t){e.push(255&t)},writeShort:function(e){t.writeByte(e),t.writeByte(e>>>8)},writeBytes:function(e,n,r){n=n||0,r=r||e.length;for(var i=0;i<r;i+=1)t.writeByte(e[i+n])},writeString:function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var n=0;n<e.length;n+=1)n>0&&(t+=","),t+=e[n];return t+="]",t}};return t},p=function(){var e=0,t=0,n=0,r="",i={},o=function(e){r+=String.fromCharCode(s(63&e))},s=function(e){if(e<0);else{if(e<26)return 65+e;if(e<52)return e-26+97;if(e<62)return e-52+48;if(62==e)return 43;if(63==e)return 47}throw"n:"+e};return i.writeByte=function(r){e=e<<8|255&r,t+=8,n+=1;while(t>=6)o(e>>>t-6),t-=6},i.flush=function(){if(t>0&&(o(e<<6-t),e=0,t=0),n%3!=0)for(var i=3-n%3,s=0;s<i;s+=1)r+="="},i.toString=function(){return r},i},_=function(e){var t=e,n=0,r=0,i=0,o={read:function(){while(i<8){if(n>=t.length){if(0==i)return-1;throw"unexpected end of file./"+i}var e=t.charAt(n);if(n+=1,"="==e)return i=0,-1;e.match(/^\s$/)||(r=r<<6|s(e.charCodeAt(0)),i+=6)}var o=r>>>i-8&255;return i-=8,o}},s=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(43==e)return 62;if(47==e)return 63;throw"c:"+e};return o},g=function(e,t){var n=e,r=t,i=new Array(e*t),o={setPixel:function(e,t,r){i[t*n+e]=r},write:function(e){e.writeString("GIF87a"),e.writeShort(n),e.writeShort(r),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(","),e.writeShort(0),e.writeShort(0),e.writeShort(n),e.writeShort(r),e.writeByte(0);var t=2,i=a(t);e.writeByte(t);var o=0;while(i.length-o>255)e.writeByte(255),e.writeBytes(i,o,255),o+=255;e.writeByte(i.length-o),e.writeBytes(i,o,i.length-o),e.writeByte(0),e.writeString(";")}},s=function(e){var t=e,n=0,r=0,i={write:function(e,i){if(e>>>i!=0)throw"length over";while(n+i>=8)t.writeByte(255&(e<<n|r)),i-=8-n,e>>>=8-n,r=0,n=0;r|=e<<n,n+=i},flush:function(){n>0&&t.writeByte(r)}};return i},a=function(e){for(var t=1<<e,n=1+(1<<e),r=e+1,o=c(),a=0;a<t;a+=1)o.add(String.fromCharCode(a));o.add(String.fromCharCode(t)),o.add(String.fromCharCode(n));var l=f(),u=s(l);u.write(t,r);var h=0,d=String.fromCharCode(i[h]);h+=1;while(h<i.length){var p=String.fromCharCode(i[h]);h+=1,o.contains(d+p)?d+=p:(u.write(o.indexOf(d),r),o.size()<4095&&(o.size()==1<<r&&(r+=1),o.add(d+p)),d=p)}return u.write(o.indexOf(d),r),u.write(n,r),u.flush(),l.toByteArray()},c=function(){var e={},t=0,n={add:function(r){if(n.contains(r))throw"dup key:"+r;e[r]=t,t+=1},size:function(){return t},indexOf:function(t){return e[t]},contains:function(t){return"undefined"!=typeof e[t]}};return n};return o},m=function(e,t,n){for(var r=g(e,t),i=0;i<t;i+=1)for(var o=0;o<e;o+=1)r.setPixel(o,i,n(o,i));var s=f();r.write(s);for(var a=p(),c=s.toByteArray(),l=0;l<c.length;l+=1)a.writeByte(c[l]);return a.flush(),"data:image/gif;base64,"+a};return e}();!function(){s.stringToBytesFuncs["UTF-8"]=function(e){function t(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t}return t(e)}}(),function(n){i=[],r=n,o="function"===typeof r?r.apply(t,i):r,void 0===o||(e.exports=o)}((function(){return s}))},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},4921:function(e,t,n){"use strict";n.d(t,{Jn:function(){return ye},qX:function(){return pe},rh:function(){return _e},Xd:function(){return fe},Mq:function(){return be},ZF:function(){return we},KN:function(){return Ce}});n(7658);var r=n(6155),i=n(3115),o=n(3099);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,_=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(C(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),_.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),C(h.get(this))}:function(...t){return C(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),C(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&m(e),s(e,l())?new Proxy(e,v):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),_.set(t,e)),t}const E=e=>_.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=C(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(C(s.result),e.oldVersion,e.newVersion,C(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return k.set(t,o),o}y((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
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
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===t?.type}const A="@firebase/app",D="0.14.6",P=new i.Yd("@firebase/app"),O="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",B="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",W="@firebase/database",H="@firebase/data-connect",q="@firebase/database-compat",V="@firebase/functions",$="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",J="@firebase/messaging",Y="@firebase/messaging-compat",G="@firebase/performance",Q="@firebase/performance-compat",Z="@firebase/remote-config",X="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/ai",ie="@firebase/firestore-compat",oe="firebase",se="12.6.0",ae="[DEFAULT]",ce={[A]:"fire-core",[O]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[B]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[W]:"fire-rtdb",[H]:"fire-data-connect",[q]:"fire-rtdb-compat",[V]:"fire-fn",[$]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[J]:"fire-fcm",[Y]:"fire-fcm-compat",[G]:"fire-perf",[Q]:"fire-perf-compat",[Z]:"fire-rc",[X]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[ie]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[oe]:"fire-js-all"},le=new Map,ue=new Map,he=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e){const t=e.name;if(he.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of le.values())de(n,e);for(const n of ue.values())de(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function _e(e){return null!==e&&void 0!==e&&void 0!==e.settings}
/**
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
 */
const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},me=new o.LL("app","Firebase",ge);
/**
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
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
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
 */
/**
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
 */
const ye=se;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i={name:ae,automaticDataCollectionEnabled:!0,...t},s=i.name;if("string"!==typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw me.create("no-options");const a=le.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw me.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of he.values())c.addComponent(r);const l=new ve(n,i,c);return le.set(s,l),l}function be(e=ae){const t=le.get(e);if(!t&&e===ae&&(0,o.aH)())return we();if(!t)throw me.create("no-app",{appName:e});return t}function Ce(e,t,n){let i=ce[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}fe(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */
const Ee="firebase-heartbeat-database",Ie=1,Te="firebase-heartbeat-store";let Se=null;function ke(){return Se||(Se=I(Ee,Ie,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Te)}catch(n){console.warn(n)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Se}async function xe(e){try{const t=await ke(),n=t.transaction(Te),r=await n.objectStore(Te).get(Ne(e));return await n.done,r}catch(t){if(t instanceof o.ZR)P.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:t?.message});P.warn(e.message)}}}async function Re(e,t){try{const n=await ke(),r=n.transaction(Te,"readwrite"),i=r.objectStore(Te);await i.put(t,Ne(e)),await r.done}catch(n){if(n instanceof o.ZR)P.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:n?.message});P.warn(e.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Ae=1024,De=30;class Pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Oe();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>De){const e=Be(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){P.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Oe(),{heartbeatsToSend:t,unsentEntries:n}=Me(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return P.warn(e),""}}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function Me(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Fe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await xe(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Re(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Re(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Fe(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}function Be(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
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
 */function Ue(e){fe(new r.wA("platform-logger",(e=>new R(e)),"PRIVATE")),fe(new r.wA("heartbeat",(e=>new Pe(e)),"PRIVATE")),Ce(A,D,e),Ce(A,D,"esm2020"),Ce("fire-js","")}Ue("")},6155:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return i}});var r=n(3099);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3115:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return i}});n(7658);
/**
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
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(4921),i="firebase",o="12.7.0";
/**
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
 */
(0,r.KN)(i,o,"app")},2230:function(e,t,n){"use strict";n.d(t,{N8:function(){return is},VF:function(){return Jo},iH:function(){return zo}});n(7658);var r=n(4921),i=n(6155),o=n(3099),s=n(3115);const a="@firebase/database",c="1.1.0";
/**
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
 */let l="";function u(e){l=e}
/**
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),_=f("sessionStorage"),g=new s.Yd("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,o.dS)(e),n=new o.gQ;n.update(t);const r=n.digest();return o.US.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?(0,o.Wl)(r):r,t+=" "}return t};let w=null,b=!0;const C=function(e,t){(0,o.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=s["in"].VERBOSE,w=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,_.remove("logging_enabled"))},E=function(...e){if(!0===b&&(b=!1,null===w&&!0===_.get("logging_enabled")&&C(!0)),w){const t=y.apply(null,e);w(t)}},I=function(e){return function(...t){E(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);g.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw g.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+y(...e);g.warn(t)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},R=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},N=function(e){if((0,o.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},A="[MIN_NAME]",D="[MAX_NAME]",P=function(e,t){if(e===t)return 0;if(e===A||t===D)return-1;if(t===A||e===D)return 1;{const n=$(e),r=$(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},O=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.Wl)(t))},L=function(e){if("object"!==typeof e||null===e)return(0,o.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.Wl)(t[r]),n+=":",n+=L(e[t[r]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function B(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){(0,o.hu)(!R(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,l;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},j=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const H=new RegExp("^-?(0*)\\d{1,10}$"),q=-2147483648,V=2147483647,$=function(e){if(H.test(e)){const t=Number(e);if(t>=q&&t<=V)return t}return null},z=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t}),Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},J=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class Y{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,(0,r.rh)(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then((e=>this.appCheck=e))}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.appCheckProvider?.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class G{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
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
 */
const Z="5",X="v",ee="s",te="r",ne="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ie="ls",oe="p",se="ac",ae="websocket",ce="long_polling";
/**
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
 */
class le{constructor(e,t,n,r,i=!1,o="",s=!1,a=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function he(e,t,n){let r;if((0,o.hu)("string"===typeof t,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),t===ae)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);const i=[];return B(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */class de{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.p$)(this.counters_)}}
/**
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
 */const fe={},pe={};function _e(e){const t=e.toString();return fe[t]||(fe[t]=new de),fe[t]}function ge(e,t){const n=e.toString();return pe[n]||(pe[n]=t()),pe[n]}
/**
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
 */class me{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&z((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const ve="start",ye="close",we="pLPCommand",be="pRTLPCB",Ce="id",Ee="pw",Ie="ser",Te="cb",Se="seg",ke="ts",xe="d",Re="dframe",Ne=1870,Ae=30,De=Ne-Ae,Pe=25e3,Oe=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[se]=this.appCheckToken),he(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new me(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Oe)),N((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Le(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=r;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ve]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[X]=Z,this.transportSessionId&&(e[ee]=this.transportSessionId),this.lastSessionId&&(e[ie]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[se]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[te]=ne);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!j()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.h$)(t),r=F(n,De);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Re]="t",n[Ce]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Le{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[we+this.uniqueCallbackIdentifier]=e,window[be+this.uniqueCallbackIdentifier]=t,this.myIFrame=Le.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){E("frame writing exception"),i.stack&&E(i.stack),E(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[Ee]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ae+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+r+"="+e.seg+"&"+ke+r+"="+e.ts+"&"+xe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Pe)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,o.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */const Fe=16384,Be=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class je{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=_e(t),this.connURL=je.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[X]=Z,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(s[te]=ne),t&&(s[ee]=t),n&&(s[ie]=n),r&&(s[se]=r),i&&(s[oe]=i),he(e,ae,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/generador-qr/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new Ue(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!je.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Be))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
/**
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
 */
class We{static get ALL_TRANSPORTS(){return[Me,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=je&&je["isAvailable"]();let n=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[je];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);We.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}We.globalTransportInitialized_=!1;
/**
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
 */
const He=6e4,qe=5e3,Ve=10240,$e=102400,ze="t",Ke="d",Je="s",Ye="r",Ge="e",Qe="o",Ze="a",Xe="n",et="p",tt="h";class nt{constructor(e,t,n,r,i,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=J((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$e?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ve?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ze in e){const t=e[ze];t===Ze?this.upgradeIfSecondaryHealthy_():t===Ye?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xe,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(ze,e);if(Ke in e){const n=e[Ke];if(t===tt){const e={...n};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Xe){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Je?this.onConnectionShutdown_(n):t===Ye?this.onReset_(n):t===Ge?T("Server Error: "+n):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),J((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):J((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(qe))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class rt{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class it{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,o.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class ot extends it{static getInstance(){return new ot}constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}getInitialEvent(e){return(0,o.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const st=32,at=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ct("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ht(e){return e.pieces_.length-e.pieceNum_}function dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function mt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ct)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ut(e),r=ut(t);if(null===n)return t;if(n===r)return yt(dt(e),dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(ht(e)!==ht(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function bt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ht(e)>ht(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Ct{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);Tt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.ug)(t),Tt(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=(0,o.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>at)throw new Error(e.errorPrefix_+"has a key path longer than "+at+" bytes ("+e.byteLength_+").");if(e.parts_.length>st)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+st+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class kt extends it{static getInstance(){return new kt}constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}getInitialEvent(e){return(0,o.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const xt=1e3,Rt=3e5,Nt=3e4,At=1.3,Dt=3e4,Pt="server_kill",Ot=3;class Mt extends rt{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Mt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xt,this.maxReconnectDelay_=Rt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.Wl)(i)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];Mt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.r3)(e,"w")){const n=(0,o.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,o.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=xt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=Math.max(0,(new Date).getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*At)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Mt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(e){(0,o.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new nt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pt)}),i))}catch(T){this.log_("Failed to get token: "+T),s||(this.repoInfo_.nodeAdmin&&k(T),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>L(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ot&&(this.reconnectDelay_=Nt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ot&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,o.uI)()?e["framework.cordova"]=1:(0,o.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0,Mt.nextConnectionId_=0;
/**
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
 */
class Lt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Lt(e,t)}}
/**
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
 */class Ft{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Lt(A,e),r=new Lt(A,t);return 0!==this.compare(n,r)}minPost(){return Lt.MIN}}
/**
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
 */let Bt;class Ut extends Ft{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return P(e.name,t.name)}isDefinedOn(e){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Lt.MIN}maxPost(){return new Lt(D,Bt)}makePost(e,t){return(0,o.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Lt(e,Bt)}toString(){return".key"}}const jt=new Ut;
/**
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
 */class Wt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:Vt.EMPTY_NODE,this.right=null!=i?i:Vt.EMPTY_NODE}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Vt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class qt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,t=Vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function $t(e,t){return P(e.name,t.name)}function zt(e,t){return P(e,t)}
/**
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
 */let Kt;function Jt(e){Kt=e}Vt.EMPTY_NODE=new qt;const Yt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Gt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.r3)(t,".sv"),"Priority must be a string or number.")}else(0,o.hu)(e===Kt||e.isEmpty(),"priority of unexpected type.");(0,o.hu)(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Qt,Zt,Xt;class en{static set __childrenNodeConstructor(e){Qt=e}static get __childrenNodeConstructor(){return Qt}constructor(e,t=en.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Gt(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new en(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ut(e)?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:en.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===ht(e),".priority must be the last token in a path"),this.updateImmediateChild(n,en.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===en.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof en.__childrenNodeConstructor?-1:((0,o.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=en.VALUE_TYPE_ORDER.indexOf(t),i=en.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(r>=0,"Unknown leaf type: "+t),(0,o.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function tn(e){Zt=e}function nn(e){Xt=e}en.VALUE_TYPE_ORDER=["object","boolean","number","string"];class rn extends Ft{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?P(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Lt.MIN}maxPost(){return new Lt(D,new en("[PRIORITY-POST]",Xt))}makePost(e,t){const n=Zt(e);return new Lt(t,new en("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new rn,sn=Math.log(2);
/**
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
 */class an{constructor(e){const t=e=>parseInt(Math.log(e)/sn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cn=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=i(t,c),u=i(c+1,r);return s=e[c],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const l=i(o+1,a),u=e[o],h=n?n(u):u;c(new Ht(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ht.BLACK):(a(r,Ht.BLACK),a(r,Ht.RED))}return o},s=new an(e.length),a=o(s);return new Vt(r||t,a)};
/**
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
 */let ln;const un={};class hn{static get Default(){return(0,o.hu)(un&&on,"ChildrenNode.ts has not been loaded"),ln=ln||new hn({".priority":un},{".priority":on}),ln}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=(0,o.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vt?t:null}hasIndex(e){return(0,o.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.hu)(e!==jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Lt.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?cn(n,e.getCompare()):un;const c=e.toString(),l={...this.indexSet_};l[c]=e;const u={...this.indexes_};return u[c]=s,new hn(u,l)}addToIndexes(e,t){const n=(0,o.UI)(this.indexes_,((n,r)=>{const i=(0,o.DV)(this.indexSet_,r);if((0,o.hu)(i,"Missing index implementation for "+r),n===un){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Lt.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),cn(n,i.getCompare())}return un}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Lt(e.name,r))),i.insert(e,e.node)}}));return new hn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.UI)(this.indexes_,(n=>{if(n===un)return n;{const r=t.get(e.name);return r?n.remove(new Lt(e.name,r)):n}}));return new hn(n,this.indexSet_)}}
/**
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
 */let dn;class fn{static get EMPTY_NODE(){return dn||(dn=new fn(new Vt(zt),null,hn.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Gt(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dn}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?dn:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Lt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?dn:this.priorityNode_;return new fn(r,o,i)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{(0,o.hu)(".priority"!==ut(e)||1===ht(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(on,((o,s)=>{t[o]=s.val(e),n++,i&&fn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yt(this.getPriority().val())+":"),this.forEachChild(on,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Lt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Lt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Lt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Lt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Lt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===jt?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pn extends fn{constructor(){super(new Vt(zt),fn.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}}const _n=new pn;Object.defineProperties(Lt,{MIN:{value:new Lt(A,fn.EMPTY_NODE)},MAX:{value:new Lt(D,_n)}}),Ut.__EMPTY_NODE=fn.EMPTY_NODE,en.__childrenNodeConstructor=fn,Jt(_n),nn(_n);
/**
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
 */
const gn=!0;function mn(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new en(n,mn(t))}if(e instanceof Array||!gn){let n=fn.EMPTY_NODE;return B(e,((t,r)=>{if((0,o.r3)(e,t)&&"."!==t.substring(0,1)){const e=mn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(mn(t))}{const n=[];let r=!1;const i=e;if(B(i,((e,t)=>{if("."!==e.substring(0,1)){const i=mn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Lt(e,i)))}})),0===n.length)return fn.EMPTY_NODE;const o=cn(n,$t,(e=>e.name),zt);if(r){const e=cn(n,on.getCompare());return new fn(o,mn(t),new hn({".priority":e},{".priority":on}))}return new fn(o,mn(t),hn.Default)}}tn(mn);
/**
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
 */
class vn extends Ft{constructor(e){super(),this.indexPath_=e,(0,o.hu)(!vt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?P(e.name,t.name):i}makePost(e,t){const n=mn(e),r=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Lt(t,r)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new Lt(D,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
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
 */class yn extends Ft{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?P(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Lt.MIN}maxPost(){return Lt.MAX}makePost(e,t){const n=mn(e);return new Lt(t,n)}toString(){return".value"}}const wn=new yn;
/**
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
 */function bn(e){return{type:"value",snapshotNode:e}}function Cn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function In(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Tn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */
/**
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
 */
class Sn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:D}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new Sn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===on?n="$priority":e.index_===wn?n="$value":e.index_===jt?n="$key":((0,o.hu)(e.index_ instanceof vn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.Wl)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.Wl)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.Wl)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.Wl)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function xn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Rn extends rt{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Rn.getListenId_(e,n),a={};this.listens_[s]=a;const c=kn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,o.DV)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Rn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=kn(e._queryParams),n=e._path.toString(),r=new o.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.xO)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.cI)(a.responseText)}catch(e){k("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
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
 */class Nn{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function An(){return{value:null,children:new Map}}function Dn(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ut(t);e.children.has(r)||e.children.set(r,An());const i=e.children.get(r);t=dt(t),Dn(i,t,n)}}function Pn(e,t,n){null!==e.value?n(t,e.value):On(e,((e,r)=>{const i=new ct(t.toString()+"/"+e);Pn(r,i,n)}))}function On(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */class Mn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&B(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */const Ln=1e4,Fn=3e4,Bn=3e5;class Un{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Mn(e);const n=Ln+(Fn-Ln)*Math.random();J(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;B(e,((e,r)=>{r>0&&(0,o.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),J(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bn))}}
/**
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
 */var jn;function Wn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(jn||(jn={}));class Vn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=jn.ACK_USER_WRITE,this.source=Wn()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Vn(lt(),t,this.revert)}}return(0,o.hu)(ut(this.path)===e,"operationForChild called for unrelated child."),new Vn(dt(this.path),this.affectedTree,this.revert)}}
/**
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
 */
/**
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
 */
class $n{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=jn.OVERWRITE}operationForChild(e){return vt(this.path)?new $n(this.source,lt(),this.snap.getImmediateChild(e)):new $n(this.source,dt(this.path),this.snap)}}
/**
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
 */class zn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=jn.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new $n(this.source,lt(),t.value):new zn(this.source,lt(),t)}return(0,o.hu)(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zn(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Kn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */function Jn(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Tn(t.childName,t.snapshotNode))})),Yn(e,i,"child_removed",t,r,n),Yn(e,i,"child_added",t,r,n),Yn(e,i,"child_moved",o,r,n),Yn(e,i,"child_changed",t,r,n),Yn(e,i,"value",t,r,n),i}function Yn(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>Qn(e,t,n))),s.forEach((n=>{const r=Gn(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Gn(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Qn(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const r=new Lt(t.childName,t.snapshotNode),i=new Lt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */function Zn(e,t){return{eventCache:e,serverCache:t}}function Xn(e,t,n,r){return Zn(new Kn(t,n,r),e.serverCache)}function er(e,t,n,r){return Zn(e.eventCache,new Kn(t,n,r))}function tr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function nr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let rr;const ir=()=>(rr||(rr=new Vt(O)),rr);class or{static fromObject(e){let t=new or(null);return B(e,((e,n)=>{t=t.set(new ct(e),n)})),t}constructor(e,t=ir()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(vt(e))return null;{const n=ut(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(dt(e),t);if(null!=i){const e=mt(new ct(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(vt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(dt(e)):new or(null)}}set(e,t){if(vt(e))return new or(t,this.children);{const n=ut(e),r=this.children.get(n)||new or(null),i=r.set(dt(e),t),o=this.children.insert(n,i);return new or(this.value,o)}}remove(e){if(vt(e))return this.children.isEmpty()?new or(null):new or(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const r=n.remove(dt(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new or(null):new or(this.value,i)}return this}}get(e){if(vt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ut(e),r=this.children.get(n)||new or(null),i=r.setTree(dt(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new or(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(mt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(vt(e))return null;{const r=ut(e),i=this.children.get(r);return i?i.findOnPath_(dt(e),mt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const r=ut(e),i=this.children.get(r);return i?i.foreachOnPath_(dt(e),mt(t,r),n):new or(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(mt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class sr{constructor(e){this.writeTree_=e}static empty(){return new sr(new or(null))}}function ar(e,t,n){if(vt(t))return new sr(new or(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=yt(i,t);return o=o.updateChild(s,n),new sr(e.writeTree_.set(i,o))}{const r=new or(n),i=e.writeTree_.setTree(t,r);return new sr(i)}}}function cr(e,t,n){let r=e;return B(n,((e,n)=>{r=ar(r,mt(t,e),n)})),r}function lr(e,t){if(vt(t))return sr.empty();{const n=e.writeTree_.setTree(t,new or(null));return new sr(n)}}function ur(e,t){return null!=hr(e,t)}function hr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function dr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,((e,n)=>{t.push(new Lt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Lt(e,n.value))})),t}function fr(e,t){if(vt(t))return e;{const n=hr(e,t);return new sr(null!=n?new or(n):e.writeTree_.subtree(t))}}function pr(e){return e.writeTree_.isEmpty()}function _r(e,t){return gr(lt(),e.writeTree_,t)}function gr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=gr(mt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(mt(e,".priority"),r)),n}}
/**
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
 */function mr(e,t){return Ur(t,e)}function vr(e,t,n,r,i){(0,o.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ar(e.visibleWrites,t,n)),e.lastWriteId=r}function yr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function wr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&br(t,r.path)?i=!1:bt(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Cr(e),!0;if(r.snap)e.visibleWrites=lr(e.visibleWrites,r.path);else{const t=r.children;B(t,(t=>{e.visibleWrites=lr(e.visibleWrites,mt(r.path,t))}))}return!0}return!1}function br(e,t){if(e.snap)return bt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&bt(mt(e.path,n),t))return!0;return!1}function Cr(e){e.visibleWrites=Ir(e.allWrites,Er,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Er(e){return e.visible}function Ir(e,t,n){let r=sr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)bt(n,e)?(t=yt(n,e),r=ar(r,t,s.snap)):bt(e,n)&&(t=yt(e,n),r=ar(r,lt(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(bt(n,e))t=yt(n,e),r=cr(r,t,s.children);else if(bt(e,n))if(t=yt(e,n),vt(t))r=cr(r,lt(),s.children);else{const e=(0,o.DV)(s.children,ut(t));if(e){const n=e.getChild(dt(t));r=ar(r,lt(),n)}}}}}return r}function Tr(e,t,n,r,i){if(r||i){const o=fr(e.visibleWrites,t);if(!i&&pr(o))return n;if(i||null!=n||ur(o,lt())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(bt(e.path,t)||bt(t,e.path))},s=Ir(e.allWrites,o,t),a=n||fn.EMPTY_NODE;return _r(s,a)}return null}{const r=hr(e.visibleWrites,t);if(null!=r)return r;{const r=fr(e.visibleWrites,t);if(pr(r))return n;if(null!=n||ur(r,lt())){const e=n||fn.EMPTY_NODE;return _r(r,e)}return null}}}function Sr(e,t,n){let r=fn.EMPTY_NODE;const i=hr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(on,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=fr(e.visibleWrites,t);return n.forEachChild(on,((e,t)=>{const n=_r(fr(i,new ct(e)),t);r=r.updateImmediateChild(e,n)})),dr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=fr(e.visibleWrites,t);return dr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function kr(e,t,n,r,i){(0,o.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=mt(t,n);if(ur(e.visibleWrites,s))return null;{const t=fr(e.visibleWrites,s);return pr(t)?i.getChild(n):_r(t,i.getChild(n))}}function xr(e,t,n,r){const i=mt(t,n),o=hr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=fr(e.visibleWrites,i);return _r(t,r.getNode().getImmediateChild(n))}return null}function Rr(e,t){return hr(e.visibleWrites,t)}function Nr(e,t,n,r,i,o,s){let a;const c=fr(e.visibleWrites,t),l=hr(c,lt());if(null!=l)a=l;else{if(null==n)return[];a=_r(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Ar(){return{visibleWrites:sr.empty(),allWrites:[],lastWriteId:-1}}function Dr(e,t,n,r){return Tr(e.writeTree,e.treePath,t,n,r)}function Pr(e,t){return Sr(e.writeTree,e.treePath,t)}function Or(e,t,n,r){return kr(e.writeTree,e.treePath,t,n,r)}function Mr(e,t){return Rr(e.writeTree,mt(e.treePath,t))}function Lr(e,t,n,r,i,o){return Nr(e.writeTree,e.treePath,t,n,r,i,o)}function Fr(e,t,n){return xr(e.writeTree,e.treePath,t,n)}function Br(e,t){return Ur(mt(e.treePath,t),e.writeTree)}function Ur(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class jr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,In(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,En(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Cn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,In(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Wr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Hr=new Wr;class qr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:nr(this.viewCache_),i=Lr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function Vr(e,t){(0,o.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function $r(e,t,n,r,i){const s=new jr;let a,c;if(n.type===jn.OVERWRITE){const l=n;l.source.fromUser?a=Yr(e,t,l.path,l.snap,r,i,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!vt(l.path),a=Jr(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===jn.MERGE){const l=n;l.source.fromUser?a=Qr(e,t,l.path,l.children,r,i,s):((0,o.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=Xr(e,t,l.path,l.children,r,i,c,s))}else if(n.type===jn.ACK_USER_WRITE){const o=n;a=o.revert?ni(e,t,o.path,r,i,s):ei(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==jn.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);a=ti(e,t,n.path,r,s)}const l=s.getChanges();return zr(t,a,l),{viewCache:a,changes:l}}function zr(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=tr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(bn(tr(t)))}}function Kr(e,t,n,r,i,s){const a=t.eventCache;if(null!=Mr(r,n))return t;{let c,l;if(vt(n))if((0,o.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=nr(t),i=n instanceof fn?n:fn.EMPTY_NODE,o=Pr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Dr(r,nr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ut(n);if(".priority"===u){(0,o.hu)(1===ht(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const s=Or(r,n,i,l);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=dt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Or(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=Fr(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return Xn(t,c,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function Jr(e,t,n,r,i,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(vt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ut(n);if(!c.isCompleteForPath(n)&&ht(n)>1)return t;const i=dt(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,Hr,null)}const h=er(t,l,c.isFullyInitialized()||vt(n),u.filtersNodes()),d=new qr(i,h,o);return Kr(e,h,n,i,d,a)}function Yr(e,t,n,r,i,o,s){const a=t.eventCache;let c,l;const u=new qr(i,t,o);if(vt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=Xn(t,l,!0,e.filter.filtersNodes());else{const i=ut(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Xn(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=dt(n),l=a.getNode().getImmediateChild(i);let h;if(vt(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===ft(o)&&e.getChild(gt(o)).isEmpty()?e:e.updateChild(o,r):fn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,u,s);c=Xn(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Gr(e,t){return e.eventCache.isCompleteForChild(t)}function Qr(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const l=mt(n,r);Gr(t,ut(l))&&(a=Yr(e,a,l,c,i,o,s))})),r.foreach(((r,c)=>{const l=mt(n,r);Gr(t,ut(l))||(a=Yr(e,a,l,c,i,o,s))})),a}function Zr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Xr(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=vt(n)?r:new or(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=Zr(e,c,r);l=Jr(e,l,new ct(n),u,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=Zr(e,c,r);l=Jr(e,l,new ct(n),u,i,o,s,a)}})),l}function ei(e,t,n,r,i,o,s){if(null!=Mr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(vt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Jr(e,t,n,c.getNode().getChild(n),i,o,a,s);if(vt(n)){let r=new or(null);return c.getNode().forEachChild(jt,((e,t)=>{r=r.set(new ct(e),t)})),Xr(e,t,n,r,i,o,a,s)}return t}{let l=new or(null);return r.foreach(((e,t)=>{const r=mt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),Xr(e,t,n,l,i,o,a,s)}}function ti(e,t,n,r,i){const o=t.serverCache,s=er(t,o.getNode(),o.isFullyInitialized()||vt(n),o.isFiltered());return Kr(e,s,n,r,Hr,i)}function ni(e,t,n,r,i,s){let a;if(null!=Mr(r,n))return t;{const c=new qr(r,t,i),l=t.eventCache.getNode();let u;if(vt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=Dr(r,nr(t));else{const e=t.serverCache.getNode();(0,o.hu)(e instanceof fn,"serverChildren would be complete if leaf node"),n=Pr(r,e)}u=e.filter.updateFullNode(l,n,s)}else{const i=ut(n);let o=Fr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,dt(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,fn.EMPTY_NODE,dt(n),c,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Dr(r,nr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Mr(r,lt()),Xn(t,u,a,e.filter.filtersNodes())}}
/**
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
 */function ri(e,t){const n=nr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function ii(e,t,n,r){t.type===jn.MERGE&&null!==t.source.queryId&&((0,o.hu)(nr(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(tr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=$r(e.processor_,i,t,n,r);return Vr(e.processor_,s.viewCache),(0,o.hu)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,oi(e,s.changes,s.viewCache.eventCache.getNode(),null)}function oi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return Jn(e.eventGenerator_,t,n,i)}
/**
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
 */let si,ai;function ci(e){(0,o.hu)(!si,"__referenceConstructor has already been defined"),si=e}function li(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.hu)(null!=s,"SyncTree gave us an op for an invalid query."),ii(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(ii(o,t,n,r));return i}}function ui(e,t){let n=null;for(const r of e.views.values())n=n||ri(r,t);return n}function hi(e){(0,o.hu)(!ai,"__referenceConstructor has already been defined"),ai=e}class di{constructor(e){this.listenProvider_=e,this.syncPointTree_=new or(null),this.pendingWriteTree_=Ar(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fi(e,t,n,r,i){return vr(e.pendingWriteTree_,t,n,r,i),i?wi(e,new $n(Wn(),t,n)):[]}function pi(e,t,n=!1){const r=yr(e.pendingWriteTree_,t),i=wr(e.pendingWriteTree_,t);if(i){let t=new or(null);return null!=r.snap?t=t.set(lt(),!0):B(r.children,(e=>{t=t.set(new ct(e),!0)})),wi(e,new Vn(r.path,t,n))}return[]}function _i(e,t,n){return wi(e,new $n(Hn(),t,n))}function gi(e,t,n){const r=or.fromObject(n);return wi(e,new zn(Hn(),t,r))}function mi(e,t,n,r){const i=Ei(e,r);if(null!=i){const r=Ii(i),o=r.path,s=r.queryId,a=yt(o,t),c=new $n(qn(s),a,n);return Ti(e,o,c)}return[]}function vi(e,t,n,r){const i=Ei(e,r);if(i){const r=Ii(i),o=r.path,s=r.queryId,a=yt(o,t),c=or.fromObject(n),l=new zn(qn(s),a,c);return Ti(e,o,l)}return[]}function yi(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=yt(e,t),i=ui(n,r);if(i)return i}));return Tr(i,t,o,n,r)}function wi(e,t){return bi(t,e.syncPointTree_,null,mr(e.pendingWriteTree_,lt()))}function bi(e,t,n,r){if(vt(e.path))return Ci(e,t,n,r);{const i=t.get(lt());null==n&&null!=i&&(n=ui(i,lt()));let o=[];const s=ut(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Br(r,s);o=o.concat(bi(a,c,e,t))}return i&&(o=o.concat(li(i,e,r,n))),o}}function Ci(e,t,n,r){const i=t.get(lt());null==n&&null!=i&&(n=ui(i,lt()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Br(r,t),c=e.operationForChild(t);c&&(o=o.concat(Ci(c,i,s,a)))})),i&&(o=o.concat(li(i,e,r,n))),o}function Ei(e,t){return e.tagToQueryMap.get(t)}function Ii(e){const t=e.indexOf("$");return(0,o.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Ti(e,t,n){const r=e.syncPointTree_.get(t);(0,o.hu)(r,"Missing sync point for query tag that we're tracking");const i=mr(e.pendingWriteTree_,t);return li(r,n,i,null)}
/**
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
 */
class Si{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Si(t)}node(){return this.node_}}class ki{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=mt(this.path_,e);return new ki(this.syncTree_,t)}node(){return yi(this.syncTree_,this.path_)}}const xi=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Ri=function(e,t,n){return e&&"object"===typeof e?((0,o.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Ni(e[".sv"],t,n):"object"===typeof e[".sv"]?Ai(e[".sv"],t):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ni=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+e)}},Ai=function(e,t,n){e.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,o.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Di=function(e,t,n,r){return Oi(t,new ki(n,e),r)},Pi=function(e,t,n){return Oi(e,new Si(t),n)};function Oi(e,t,n){const r=e.getPriority().val(),i=Ri(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Ri(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new en(o,mn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new en(i))),r.forEachChild(on,((e,r)=>{const i=Oi(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
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
 */class Mi{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Li(e,t){let n=t instanceof ct?t:new ct(t),r=e,i=ut(n);while(null!==i){const e=(0,o.DV)(r.node.children,i)||{children:{},childCount:0};r=new Mi(i,r,e),n=dt(n),i=ut(n)}return r}function Fi(e){return e.node.value}function Bi(e,t){e.node.value=t,$i(e)}function Ui(e){return e.node.childCount>0}function ji(e){return void 0===Fi(e)&&!Ui(e)}function Wi(e,t){B(e.node.children,((n,r)=>{t(new Mi(n,e,r))}))}function Hi(e,t,n,r){n&&!r&&t(e),Wi(e,(e=>{Hi(e,t,!0,r)})),n&&r&&t(e)}function qi(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Vi(e){return new ct(null===e.parent?e.name:Vi(e.parent)+"/"+e.name)}function $i(e){null!==e.parent&&zi(e.parent,e.name,e)}function zi(e,t,n){const r=ji(n),i=(0,o.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,$i(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,$i(e))}
/**
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
 */const Ki=/[\[\].#$\/\u0000-\u001F\u007F]/,Ji=/[\[\].#$\u0000-\u001F\u007F]/,Yi=10485760,Gi=function(e){return"string"===typeof e&&0!==e.length&&!Ki.test(e)},Qi=function(e){return"string"===typeof e&&0!==e.length&&!Ji.test(e)},Zi=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Qi(e)},Xi=function(e,t,n,r){r&&void 0===t||eo((0,o.gK)(e,"value"),t,n)},eo=function(e,t,n){const r=n instanceof ct?new Ct(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(r));if("function"===typeof t)throw new Error(e+"contains a function "+St(r)+" with contents = "+t.toString());if(R(t))throw new Error(e+"contains "+t.toString()+" "+St(r));if("string"===typeof t&&t.length>Yi/3&&(0,o.ug)(t)>Yi)throw new Error(e+"contains a string greater than "+Yi+" utf8 bytes "+St(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(B(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Gi(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(r,t),eo(e,o,r),It(r)})),n&&i)throw new Error(e+' contains ".value" child '+St(r)+" in addition to actual children.")}},to=function(e,t,n,r){if((!r||void 0!==n)&&!Qi(n))throw new Error((0,o.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},no=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),to(e,t,n,r)},ro=function(e,t){if(".info"===ut(t))throw new Error(e+" failed = Can't modify data under /.info/")},io=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Gi(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Zi(n))throw new Error((0,o.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class oo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function so(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function ao(e,t,n){so(e,n),co(e,(e=>bt(e,t)||bt(t,e)))}function co(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(lo(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function lo(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&E("event: "+n.toString()),z(r)}}}
/**
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
 */const uo="repo_interrupt",ho=25;class fo{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=An(),this.transactionQueueTree_=new Mi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function po(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||K())e.server_=new Rn(e.repoInfo_,((t,n,r,i)=>{mo(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>vo(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Mt(e.repoInfo_,t,((t,n,r,i)=>{mo(e,t,n,r,i)}),(t=>{vo(e,t)}),(t=>{yo(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new Un(e.stats_,e.server_))),e.infoData_=new Nn,e.infoSyncTree_=new di({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=_i(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),wo(e,"connected",!1),e.serverSyncTree_=new di({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);ao(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function _o(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function go(e){return xi({timestamp:_o(e)})}function mo(e,t,n,r,i){e.dataUpdateCount++;const s=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.UI)(n,(e=>mn(e)));a=vi(e.serverSyncTree_,s,t,i)}else{const t=mn(n);a=mi(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.UI)(n,(e=>mn(e)));a=gi(e.serverSyncTree_,s,t)}else{const t=mn(n);a=_i(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=No(e,s)),ao(e.eventQueue_,c,a)}function vo(e,t){wo(e,"connected",t),!1===t&&Eo(e)}function yo(e,t){B(t,((t,n)=>{wo(e,t,n)}))}function wo(e,t,n){const r=new ct("/.info/"+t),i=mn(n);e.infoData_.updateSnapshot(r,i);const o=_i(e.infoSyncTree_,r,i);ao(e.eventQueue_,r,o)}function bo(e){return e.nextWriteId_++}function Co(e,t,n,r,i){To(e,"set",{path:t.toString(),value:n,priority:r});const o=go(e),s=mn(n,r),a=yi(e.serverSyncTree_,t),c=Pi(s,a,o),l=bo(e),u=fi(e.serverSyncTree_,t,c,l,!0);so(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||k("set at "+t+" failed: "+n);const s=pi(e.serverSyncTree_,l,!o);ao(e.eventQueue_,t,s),So(e,i,n,r)}));const h=Lo(e,t);No(e,h),ao(e.eventQueue_,h,[])}function Eo(e){To(e,"onDisconnectEvents");const t=go(e),n=An();Pn(e.onDisconnect_,lt(),((r,i)=>{const o=Di(r,i,e.serverSyncTree_,t);Dn(n,r,o)}));let r=[];Pn(n,lt(),((t,n)=>{r=r.concat(_i(e.serverSyncTree_,t,n));const i=Lo(e,t);No(e,i)})),e.onDisconnect_=An(),ao(e.eventQueue_,lt(),r)}function Io(e){e.persistentConnection_&&e.persistentConnection_.interrupt(uo)}function To(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function So(e,t,n,r){t&&z((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function ko(e,t,n){return yi(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function xo(e,t=e.transactionQueueTree_){if(t||Mo(e,t),Fi(t)){const n=Po(e,t);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Ro(e,Vi(t),n)}else Ui(t)&&Wi(t,(t=>{xo(e,t)}))}function Ro(e,t,n){const r=n.map((e=>e.currentWriteId)),i=ko(e,t,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,o.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=yt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),l=t;e.server_.put(l.toString(),c,(r=>{To(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(pi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Mo(e,Li(e.transactionQueueTree_,t)),xo(e,e.transactionQueueTree_),ao(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)z(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}No(e,t)}}),a)}function No(e,t){const n=Do(e,t),r=Vi(n),i=Po(e,n);return Ao(e,i,r),r}function Ao(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const s=t[c],l=yt(n,s.path);let u,h=!1;if((0,o.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(pi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=ho)h=!0,u="maxretry",i=i.concat(pi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=ko(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){eo("transaction failed: Data returned ",r,s.path);let t=mn(r);const c="object"===typeof r&&null!=r&&(0,o.r3)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=s.currentWriteId,u=go(e),h=Pi(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=bo(e),a.splice(a.indexOf(l),1),i=i.concat(fi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(pi(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(pi(e.serverSyncTree_,s.currentWriteId,!0))}ao(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(u),!1,null)))))}Mo(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)z(r[o]);xo(e,e.transactionQueueTree_)}function Do(e,t){let n,r=e.transactionQueueTree_;n=ut(t);while(null!==n&&void 0===Fi(r))r=Li(r,n),t=dt(t),n=ut(t);return r}function Po(e,t){const n=[];return Oo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Oo(e,t,n){const r=Fi(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Wi(t,(t=>{Oo(e,t,n)}))}function Mo(e,t){const n=Fi(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Bi(t,n.length>0?n:void 0)}Wi(t,(t=>{Mo(e,t)}))}function Lo(e,t){const n=Vi(Do(e,t)),r=Li(e.transactionQueueTree_,t);return qi(r,(t=>{Fo(e,t)})),Fo(e,r),Hi(r,(t=>{Fo(e,t)})),n}function Fo(e,t){const n=Fi(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.hu)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(pi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Bi(t,void 0):n.length=s+1,ao(e.eventQueue_,Vi(t),i);for(let e=0;e<r.length;e++)z(r[e])}}
/**
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
 */function Bo(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Uo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const jo=function(e,t){const n=Wo(e),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ct(n.pathString)}},Wo=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Bo(e.substring(u,h)));const d=Uo(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},Ho="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qo=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Ho.charAt(n%64),n=Math.floor(n/64);(0,o.hu)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Ho.charAt(t[i]);return(0,o.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
class Vo{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return vt(this._path)?null:ft(this._path)}get ref(){return new $o(this._repo,this._path)}get _queryIdentifier(){const e=xn(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return xn(this._queryParams)}isEqual(e){if(e=(0,o.m9)(e),!(e instanceof Vo))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+pt(this._path)}}class $o extends Vo{constructor(e,t){super(e,t,new Sn,!1)}get parent(){const e=gt(this._path);return null===e?null:new $o(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}function zo(e,t){return e=(0,o.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Ko(e._root,t):e._root}function Ko(e,t){return e=(0,o.m9)(e),null===ut(e._path)?no("child","path",t,!1):to("child","path",t,!1),new $o(e._repo,mt(e._path,t))}function Jo(e,t){e=(0,o.m9)(e),ro("push",e._path),Xi("push",t,e._path,!0);const n=_o(e._repo),r=qo(n),i=Ko(e,r),s=Ko(e,r);let a;return a=null!=t?Yo(s,t).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Yo(e,t){e=(0,o.m9)(e),ro("set",e._path),Xi("set",t,e._path,!1);const n=new o.BH;return Co(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}ci($o),hi($o);
/**
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
 */
const Go="FIREBASE_DATABASE_EMULATOR_HOST",Qo={};let Zo=!1;function Xo(e,t,n,r){const i=t.lastIndexOf(":"),s=t.substring(0,i),a=(0,o.Xx)(s);e.repoInfo_=new le(t,a,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(e.authTokenProvider_=r)}function es(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=jo(o,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/generador-qr/"}[Go]),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=jo(o,i),l=c.repoInfo):s=!c.repoInfo.secure;const u=i&&s?new Q(Q.OWNER):new G(e.name,e.options,t);io("Invalid Firebase Database URL",c),vt(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ns(l,e,u,new Y(e,n));return new rs(h,e)}function ts(e,t){const n=Qo[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Io(e),delete n[e.key]}function ns(e,t,n,r){let i=Qo[t.name];i||(i={},Qo[t.name]=i);let o=i[e.toURLString()];return o&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new fo(e,Zo,n,r),i[e.toURLString()]=o,o}class rs{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(po(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $o(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ts(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function is(e=(0,r.Mq)(),t){const n=(0,r.qX)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.P0)("database");e&&os(n,...e)}return n}function os(e,t,n,r={}){e=(0,o.m9)(e),e._checkNotDeleted("useEmulator");const i=`${t}:${n}`,s=e._repoInternal;if(e._instanceStarted){if(i===e._repoInternal.repoInfo_.host&&(0,o.vZ)(r,s.repoInfo_.emulatorOptions))return;S("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Q(Q.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,o.Sg)(r.mockUserToken,e.app.options.projectId);a=new Q(t)}(0,o.Xx)(t)&&((0,o.Uo)(t),(0,o.dp)("Database",!0)),Xo(s,i,r,a)}
/**
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
 */
function ss(e){u(r.Jn),(0,r.Xd)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return es(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(a,c,e),(0,r.KN)(a,c,"esm2020")}
/**
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
 */Mt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ss()}}]);
//# sourceMappingURL=chunk-vendors.51f704f8.js.map