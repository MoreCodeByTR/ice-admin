"use strict";(self.webpackChunk_ice_lite_scaffold=self.webpackChunk_ice_lite_scaffold||[]).push([[364],{433:function(t,n,e){e.d(n,{Jh:function(){return r}});function r(t,n){var e,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(i){return function(c){return function(i){if(e)throw TypeError("Generator is already executing.");for(;u&&(u=0,i[0]&&(a=0)),a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(c){i=[6,c],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}},820:function(t,n,e){e.d(n,{tZ:function(){return m},BX:function(){return g}});var r,o,u,a,i=e(893),c=e(222),l=e(86),s=/"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)rpx/g,f=l.$L?"web":l.uk?"weex":l.UG?"node":"",p=function(t,n){var e=Math.pow(10,n+1);return 10*Math.round(Math.floor(t*e)/10)/e},d=function(t,n){return n?parseFloat(t)*u+"px":t},h=function(t,n){return n?p(parseFloat(t)/(a/100),4)+"vw":t};void 0===u&&(u=1),void 0===a&&(a=750);var v=function(){function t(){this.__store={}}var n=t.prototype;return n.set=function(t,n){this.__store[t+"_"+(void 0===t?"undefined":(0,c.Z)(t))]=n},n.get=function(t){return this.__store[t+"_"+(void 0===t?"undefined":(0,c.Z)(t))]},n.has=function(t){return Object.prototype.hasOwnProperty.call(this.__store,t+"_"+(void 0===t?"undefined":(0,c.Z)(t)))},t}(),y=(r=function(t,n,e){return e&&(f=e),"string"==typeof t&&s.test(t)?"web"===f||"node"===f?t.replace(s,h):"weex"===f?t.replace(s,d):t:t},o=new v,function(){var t=arguments.length<=0?void 0:arguments[0];return o.has(t)||o.set(t,r.apply(void 0,arguments)),o.get(t)});function m(t,n,e,r,o){return(0,i.jsx)(t,b(n),e,r,o)}function g(t,n,e,r,o){return(0,i.jsxs)(t,b(n),e,r,o)}function b(t){if(t&&"style"in t){var n=t.style;if("object"==typeof n){var e=Object.assign({},t),r={};for(var o in n)r[o]=y(n[o]);return e.style=r,e}}return t}},243:function(t,n,e){e.d(n,{ZP:function(){return p},aC:function(){return f}});var r,o=e(568),u=e(955),a=e(253),i=e(433),c=e(294),l=(0,c.createContext)(null);l.displayName="AuthContext";var s=l.Provider,f=function(){return(0,c.useContext)(l)},p=(r=(0,o.Z)(function(t){var n,e,r,o,l,p,d,h,v,y;return(0,i.Jh)(this,function(i){switch(i.label){case 0:if(n=t.appContext,e=t.useConfig,r=t.addProvider,o=t.addWrapper,l=n.appExport,p=n.appData,"function"!=typeof(d=l.authConfig))return[3,2];return[4,d(p)];case 1:return v=i.sent(),[3,3];case 2:v=d,i.label=3;case 3:return y=(h=v||{}).initialAuth||{},r(function(t){var n=t.children,e=(0,a.Z)(c.useState(y),2),r=e[0],o=e[1];return c.createElement(s,{value:[r,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o((0,u.Z)({},r,t))}]},n)}),o(function(t){var n=t.children,r=(0,a.Z)(f(),1)[0],o=e(),u=null==o?void 0:o.auth;if(u&&!Array.isArray(u))throw Error("config.auth must be an array");return Array.isArray(u)&&u.length&&!Object.keys(r).filter(function(t){return!!u.includes(t)&&r[t]}).length?h.NoAuthFallback?c.createElement(h.NoAuthFallback,{routeConfig:o}):c.createElement(c.Fragment,null,"No Auth"):c.createElement(c.Fragment,null,n)}),[2]}})}),function(t){return r.apply(this,arguments)})},821:function(t,n,e){e.d(n,{F:function(){return r}});function r(t){return t}},130:function(t,n,e){e.d(n,{Z:function(){return a},_:function(){return i}});var r=e(955),o=e(607),u={app:{strict:!1,rootId:"ice-container"},router:{type:"browser"}};function a(t){var n=(null==t?void 0:t.default)||{},e=n.app,a=n.router,i=(0,o.Z)(n,["app","router"]);return(0,r.Z)({app:(0,r.Z)({},u.app,e||{}),router:(0,r.Z)({},u.router,a||{})},i)}function i(t){return"function"==typeof t?t():t}},553:function(t,n,e){e.d(n,{J:function(){return o},t:function(){return r}});var r=null;function o(t){r=t}},652:function(t,n,e){e.d(n,{Z:function(){return tg}});var r,o,u,a=e(568),i=e(955);function c(t,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e.push.apply(e,r)}return e})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t}var l=e(607),s=e(253),f=e(433),p=e(294),d=e(745);function h(){return(h=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}(r=o||(o={})).Pop="POP",r.Push="PUSH",r.Replace="REPLACE";var v=function(t){return t},y="beforeunload",m="popstate";function g(t){void 0===t&&(t={});var n=t.window,e=void 0===n?document.defaultView:n,r=e.history;function u(){var t=e.location,n=t.pathname,o=t.search,u=t.hash,a=r.state||{};return[a.idx,v({pathname:n,search:o,hash:u,state:a.usr||null,key:a.key||"default"})]}var a=null;e.addEventListener(m,function(){if(a)p.call(a),a=null;else{var t=o.Pop,n=u(),e=n[0],r=n[1];if(p.length){if(null!=e){var i=l-e;i&&(a={action:t,location:r,retry:function(){P(-1*i)}},P(i))}}else Z(t)}});var i=o.Pop,c=u(),l=c[0],s=c[1],f=O(),p=O();function d(t){return"string"==typeof t?t:x(t)}function g(t,n){return void 0===n&&(n=null),v(h({pathname:s.pathname,hash:"",search:""},"string"==typeof t?C(t):t,{state:n,key:A()}))}function b(t,n){return[{usr:t.state,key:t.key,idx:n},d(t)]}function w(t,n,e){return!p.length||(p.call({action:t,location:n,retry:e}),!1)}function Z(t){i=t;var n=u();l=n[0],s=n[1],f.call({action:i,location:s})}function P(t){r.go(t)}return null==l&&(l=0,r.replaceState(h({},r.state,{idx:l}),"")),{get action(){return i},get location(){return s},createHref:d,push:function t(n,u){var a=o.Push,i=g(n,u);if(w(a,i,function(){t(n,u)})){var c=b(i,l+1),s=c[0],f=c[1];try{r.pushState(s,"",f)}catch(p){e.location.assign(f)}Z(a)}},replace:function t(n,e){var u=o.Replace,a=g(n,e);if(w(u,a,function(){t(n,e)})){var i=b(a,l),c=i[0],s=i[1];r.replaceState(c,"",s),Z(u)}},go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(t){return f.push(t)},block:function(t){var n=p.push(t);return 1===p.length&&e.addEventListener(y,E),function(){n(),p.length||e.removeEventListener(y,E)}}}}function b(t){void 0===t&&(t={});var n=t.window,e=void 0===n?document.defaultView:n,r=e.history;function u(){var t=C(e.location.hash.substr(1)),n=t.pathname,o=t.search,u=t.hash,a=r.state||{};return[a.idx,v({pathname:void 0===n?"/":n,search:void 0===o?"":o,hash:void 0===u?"":u,state:a.usr||null,key:a.key||"default"})]}var a=null;function i(){if(a)d.call(a),a=null;else{var t=o.Pop,n=u(),e=n[0],r=n[1];if(d.length){if(null!=e){var i=s-e;i&&(a={action:t,location:r,retry:function(){_(-1*i)}},_(i))}}else P(t)}}e.addEventListener(m,i),e.addEventListener("hashchange",function(){x(u()[1])!==x(f)&&i()});var c=o.Pop,l=u(),s=l[0],f=l[1],p=O(),d=O();function g(t){return function(){var t=document.querySelector("base"),n="";if(t&&t.getAttribute("href")){var r=e.location.href,o=r.indexOf("#");n=-1===o?r:r.slice(0,o)}return n}()+"#"+("string"==typeof t?t:x(t))}function b(t,n){return void 0===n&&(n=null),v(h({pathname:f.pathname,hash:"",search:""},"string"==typeof t?C(t):t,{state:n,key:A()}))}function w(t,n){return[{usr:t.state,key:t.key,idx:n},g(t)]}function Z(t,n,e){return!d.length||(d.call({action:t,location:n,retry:e}),!1)}function P(t){c=t;var n=u();s=n[0],f=n[1],p.call({action:c,location:f})}function _(t){r.go(t)}return null==s&&(s=0,r.replaceState(h({},r.state,{idx:s}),"")),{get action(){return c},get location(){return f},createHref:g,push:function t(n,u){var a=o.Push,i=b(n,u);if(Z(a,i,function(){t(n,u)})){var c=w(i,s+1),l=c[0],f=c[1];try{r.pushState(l,"",f)}catch(p){e.location.assign(f)}P(a)}},replace:function t(n,e){var u=o.Replace,a=b(n,e);if(Z(u,a,function(){t(n,e)})){var i=w(a,s),c=i[0],l=i[1];r.replaceState(c,"",l),P(u)}},go:_,back:function(){_(-1)},forward:function(){_(1)},listen:function(t){return p.push(t)},block:function(t){var n=d.push(t);return 1===d.length&&e.addEventListener(y,E),function(){n(),d.length||e.removeEventListener(y,E)}}}}function w(t){void 0===t&&(t={});var n=t,e=n.initialEntries,r=n.initialIndex,u=(void 0===e?["/"]:e).map(function(t){return v(h({pathname:"/",search:"",hash:"",state:null,key:A()},"string"==typeof t?C(t):t))}),a=Z(null==r?u.length-1:r,0,u.length-1),i=o.Pop,c=u[a],l=O(),s=O();function f(t,n){return void 0===n&&(n=null),v(h({pathname:c.pathname,search:"",hash:""},"string"==typeof t?C(t):t,{state:n,key:A()}))}function p(t,n,e){return!s.length||(s.call({action:t,location:n,retry:e}),!1)}function d(t,n){i=t,c=n,l.call({action:i,location:c})}function y(t){var n=Z(a+t,0,u.length-1),e=o.Pop,r=u[n];p(e,r,function(){y(t)})&&(a=n,d(e,r))}return{get index(){return a},get action(){return i},get location(){return c},createHref:function(t){return"string"==typeof t?t:x(t)},push:function t(n,e){var r=o.Push,i=f(n,e);p(r,i,function(){t(n,e)})&&(a+=1,u.splice(a,u.length,i),d(r,i))},replace:function t(n,e){var r=o.Replace,i=f(n,e);p(r,i,function(){t(n,e)})&&(u[a]=i,d(r,i))},go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(t){return l.push(t)},block:function(t){return s.push(t)}}}function Z(t,n,e){return Math.min(Math.max(t,n),e)}function E(t){t.preventDefault(),t.returnValue=""}function O(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(t){return t!==n})}},call:function(n){t.forEach(function(t){return t&&t(n)})}}}function A(){return Math.random().toString(36).substr(2,8)}function x(t){var n=t.pathname,e=void 0===n?"/":n,r=t.search,o=void 0===r?"":r,u=t.hash,a=void 0===u?"":u;return o&&"?"!==o&&(e+="?"===o.charAt(0)?o:"?"+o),a&&"#"!==a&&(e+="#"===a.charAt(0)?a:"#"+a),e}function C(t){var n={};if(t){var e=t.indexOf("#");e>=0&&(n.hash=t.substr(e),t=t.substr(0,e));var r=t.indexOf("?");r>=0&&(n.search=t.substr(r),t=t.substr(0,r)),t&&(n.pathname=t)}return n}var P=e(553),_=e(438),S=e(951),R=p.createContext(void 0);function k(){return p.useContext(R)}R.displayName="Data";var j=R.Provider,D=p.createContext(void 0);function M(){return p.useContext(D)}D.displayName="Config";var L=D.Provider,I=p.createContext(void 0);function J(){return p.useContext(I)}I.displayName="AppContext";var F=I.Provider,N=function(){function t(n,e){var r=this;(0,_.Z)(this,t),this.getAppContext=function(){return r.appContext},this.setAppContext=function(t){r.appContext=t},this.getRender=function(){return r.render},this.getAppRouter=function(){return r.AppRouter},this.getWrappers=function(){return r.RouteWrappers},this.addProvider=function(t){r.AppProvider.unshift(t)},this.setRender=function(t){r.render=t},this.addWrapper=function(t,n){r.RouteWrappers.push({Wrapper:t,layout:n})},this.setAppRouter=function(t){r.AppRouter=t},this.AppProvider=[],this.appContext=n,this.render=function(t,n){var e=d.s(t);return e.render(n),e},this.RouteWrappers=[],this.runtimeOptions=e}return(0,S.Z)(t,[{key:"loadModule",value:function(t){var n=this;return(0,a.Z)(function(){var e,r;return(0,f.Jh)(this,function(o){switch(o.label){case 0:if(e={addProvider:n.addProvider,getAppRouter:n.getAppRouter,setRender:n.setRender,addWrapper:n.addWrapper,appContext:n.appContext,setAppRouter:n.setAppRouter,useData:k,useConfig:M,useAppContext:J},r=t.default||t,!t)return[3,2];return[4,r(e,n.runtimeOptions)];case 1:return[2,o.sent()];case 2:return[2]}})})()}},{key:"composeAppProvider",value:function(){return this.AppProvider.length?this.AppProvider.reduce(function(t,n){return function(e){var r=e.children,o=(0,l.Z)(e,["children"]),u=n?p.createElement(n,(0,i.Z)({},o),r):r;return p.createElement(t,(0,i.Z)({},o),u)}}):null}}]),t}(),T=e(668),W=e(669),B=function(t){(0,T.Z)(e,t);var n=(0,W.Z)(e);function e(){var t;return(0,_.Z)(this,e),t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments))),t.state={error:null},t}return(0,S.Z)(e,[{key:"componentDidCatch",value:function(t,n){console.error("AppErrorBoundary",t,n)}},{key:"render",value:function(){return this.state.error?p.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{error:t}}}]),e}(p.Component),q=e(27);function G(t){var n,e=t.wrappers,r=void 0===e?[]:e,o=t.id,u=t.isLayout,a=J(),i=a.routesData,c=a.routesConfig,l=(u?r.filter(function(t){return!0===t.layout}):r).map(function(t){return t.Wrapper});return n=l.length?l.reduce(function(t,n){return p.createElement(n,{routeId:o},t)},t.children):t.children,p.createElement(j,{value:i[o]},p.createElement(L,{value:c[o]},n))}function $(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.pathname,r=function(t){0===t.indexOf("?")&&(t=t.slice(1));for(var n={},e=t.split("&"),r=0;r<e.length;r++){var o=e[r],u=o.indexOf("=");if(u>-1){var a=o.slice(0,u),i=o.slice(u+1);n[a]=i}else o&&(n[o]="")}return n}(t.search);return c((0,i.Z)({},n),{pathname:e,query:r})}function H(t){var n=t;try{"undefined"!=typeof window&&(n=function(t){for(var n={},e={},r=JSON.stringify(t)||"",o=/\$\{(queryParams|cookie|storage)(\.(\w|-)+)?}/g,u=[],a=[];null!==(u=o.exec(r));)a.push(u);return a.forEach(function(t){var o=(0,s.Z)(t,3),u=o[0],a=o[1],i=o[2];t&&u&&a&&i&&i.startsWith(".")&&("queryParams"===a?r=r.replace(u,(0===Object.keys(n).length&&location.search.includes("?")&&location.search.substring(1).split("&").forEach(function(t){var e=t.split("=");void 0!==e[0]&&void 0!==e[1]&&(n[e[0]]=e[1])}),n)[i.substring(1)]):"cookie"===a?r=r.replace(u,(0===Object.keys(e).length&&document.cookie.split(";").forEach(function(t){var n=(0,s.Z)(t.split("="),2),r=n[0],o=n[1];void 0!==r&&void 0!==o&&(e[r.trim()]=o.trim())}),e)[i.substring(1)]):"storage"===a&&(r=r.replace(u,localStorage.getItem(i.substring(1)))))}),JSON.parse(r=r.replace("${url}",location.href))}(t))}catch(e){console.error("parse template error: ",e)}return u(n)}function V(t,n){return Array.isArray(t)?Promise.all(t.map(function(t){return"object"==typeof t?H(t):t(n)})):"object"==typeof t?H(t):t(n)}function U(){return(U=(0,a.Z)(function(t,n){var e,r,o,u;return(0,f.Jh)(this,function(a){switch(a.label){case 0:if(e=t.id,r=t.load,"undefined"!=typeof window&&e in n)return[2,n[e]];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,r()];case 2:return o=a.sent(),n[e]=o,[2,o];case 3:return u=a.sent(),console.error("Failed to load route module: ".concat(e,".")),console.error(u),[3,4];case 4:return[2]}})})).apply(this,arguments)}function X(t){return z.apply(this,arguments)}function z(){return(z=(0,a.Z)(function(t){var n,e,r,o,u,a,c,l,s,p,d=arguments;return(0,f.Jh)(this,function(f){switch(f.label){case 0:n=d.length>1&&void 0!==d[1]?d[1]:{},e=(0,i.Z)({},n),r=!0,o=!1,u=void 0,f.label=1;case 1:f.trys.push([1,6,7,8]),a=t[Symbol.iterator](),f.label=2;case 2:if(r=(c=a.next()).done)return[3,5];return[4,function(t,n){return U.apply(this,arguments)}(l=c.value,e)];case 3:s=f.sent(),e[l.id]=s,f.label=4;case 4:return r=!0,[3,2];case 5:return[3,8];case 6:return p=f.sent(),o=!0,u=p,[3,8];case 7:try{r||null==a.return||a.return()}finally{if(o)throw u}return[7];case 8:return[2,e]}})})).apply(this,arguments)}function K(t,n,e,r){return Q.apply(this,arguments)}function Q(){return(Q=(0,a.Z)(function(t,n,e,r){var o,u,i;return(0,f.Jh)(this,function(c){switch(c.label){case 0:var l;return o=(r||{}).renderMode,u={},i="undefined"!=typeof window&&window.__ICE_DATA_LOADER__?window.__ICE_DATA_LOADER__:null,[4,Promise.all(t.map((l=(0,a.Z)(function(t){var a,c,l,s,p,d,h;return(0,f.Jh)(this,function(f){switch(f.label){case 0:if(a=t.route.id,!i)return[3,2];return[4,i.getData(a,r)];case 1:return u[a]=f.sent(),[2];case 2:if(s=(l=null!=(c=e[a])?c:{}).dataLoader,p=l.serverDataLoader,d=l.staticDataLoader,!(h="SSG"===o?d:"SSR"===o&&p||s))return[3,4];return[4,V(h,n)];case 3:u[a]=f.sent(),f.label=4;case 4:return[2]}})}),function(t){return l.apply(this,arguments)})))];case 1:return c.sent(),[2,u]}})})).apply(this,arguments)}function Y(t,n,e){var r,o={};return t.forEach((r=(0,a.Z)(function(t){var r,u,a,i,c;return(0,f.Jh)(this,function(l){return"object"==typeof(u=e[r=t.route.id])?(a=u.pageConfig,i=n[r],a&&(c=a({data:i}),o[r]=c)):o[r]={},[2]})}),function(t){return r.apply(this,arguments)})),o}function tt(t){var n=t.id,e=(J().routeModules[n]||{}).default;return p.createElement(e,null)}function tn(t){var n=t.location,e=t.action,r=t.navigator,o=t.static,u=t.AppRouter,a=t.RouteWrappers,c=J(),s=c.appConfig,f=c.routes,d=c.basename,h=s.app,v=h.strict,y=h.errorBoundary,m=v?p.StrictMode:p.Fragment;if(!f||0===f.length)throw Error("Please add routes(like pages/index.tsx) to your app.");var g=(0,p.useMemo)(function(){return function t(n,e){return n.map(function(n){var r=n.path,o=n.children,u=n.index,a=n.id,c=n.layout,s=n.element,f=(0,l.Z)(n,["path","children","index","id","layout","element"]);s=p.createElement(G,{id:a,isLayout:c,wrappers:e},p.createElement(tt,{id:a}));var d=(0,i.Z)({path:r,element:s,index:u,id:a},f);return o&&(d.children=t(o,e)),d})}(f,a)},[]),b=y?B:p.Fragment,w=p.createElement(u,{action:e,location:n,navigator:r,static:void 0!==o&&o,routes:g,basename:d});return p.createElement(m,null,p.createElement(b,null,w))}var te=p.createContext(void 0);te.displayName="AppDataContext";var tr=te.Provider;function to(){return(to=(0,a.Z)(function(t,n){var e,r;return(0,f.Jh)(this,function(o){switch(o.label){case 0:if(!(e="undefined"!=typeof window&&window.__ICE_DATA_LOADER__?window.__ICE_DATA_LOADER__:null))return[3,2];return[4,e.getData("__app")];case 1:case 3:return[2,o.sent()];case 2:if(!(null==t?void 0:t.dataLoader))return[3,4];return[4,t.dataLoader(n)];case 4:if(!(r=null==t?void 0:t.dataLoader))return[2,null];return[4,V(r,n)];case 5:return o.sent(),[2]}})})).apply(this,arguments)}function tu(t,n,e){var r=!0,o=!1,u=void 0;try{for(var a,i,c=n[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var l=e[i.value.route.id],s=null==l?void 0:l[t];Array.isArray(s)?a=a?a.concat(s):s:s&&(a=s)}}catch(f){o=!0,u=f}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return a}function ta(){return(ta=(0,a.Z)(function(t,n){var e,r,o,u;return(0,f.Jh)(this,function(a){switch(a.label){case 0:return(e=tu("title",t,n))&&(document.title=e),r=tu("meta",t,n)||[],o=tu("links",t,n)||[],u=tu("scripts",t,n)||[],[4,Promise.all([function(t){var n,e=document.head,r=e.querySelector("meta[name=ice-meta-count]");if(!r){console.warn("Can not find meta element.");return}for(var o=Number(r.content),u=[],a=0,i=r.previousElementSibling;a<o;a++,i=null==i?void 0:i.previousElementSibling)(null===(n=null==i?void 0:i.tagName)||void 0===n?void 0:n.toLowerCase())==="meta"&&u.push(i);var c=t.map(function(t){return tc("meta",t)});u.forEach(function(t){return t.parentNode.removeChild(t)}),c.forEach(function(t){return e.insertBefore(t,r)}),r.content=c.length.toString()}(r),tl("link",o),tl("script",u)])];case 1:return a.sent(),[2]}})})).apply(this,arguments)}var ti={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function tc(t,n){var e=document.createElement(t);for(var r in n)if(void 0!==n[r]){var o=ti[r]||r.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?e[o]=!!n[r]:e.setAttribute(o,n[r])}return e}function tl(t,n){return ts.apply(this,arguments)}function ts(){return(ts=(0,a.Z)(function(t,n){var e;return(0,f.Jh)(this,function(r){switch(r.label){case 0:var o;return o=document.querySelectorAll("".concat(t,"[data-route-").concat(t,"]")),e=[].slice.call(o),[4,Promise.all(n.map(function(n){return function(t,n){return tf.apply(this,arguments)}(t,n)}))];case 1:return r.sent(),e.forEach(function(t){t.parentNode.removeChild(t)}),[2]}})})).apply(this,arguments)}function tf(){return(tf=(0,a.Z)(function(t,n){return(0,f.Jh)(this,function(e){return[2,new Promise(function(e,r){var o=tc(t,n);o.setAttribute("data-route-".concat(t),"true"),o.onload=function(){e(null)},o.onerror=function(){r()},document.head.appendChild(o)})]})})).apply(this,arguments)}var tp=e(130),td=e(906);function th(t,n,e){var r=(0,td.fp)(t,n,e);return r?r.map(function(t){var n=t.params,e=t.pathname,r=t.pathnameBase;return{params:n,pathname:e,route:t.route,pathnameBase:r}}):[]}var tv=e(708);function ty(t){var n=t.routes;return(0,tv.V$)(n)}var tm=function(t){var n=t.action,e=t.location,r=t.navigator,o=t.static,u=t.routes,a=t.basename,i=tv.F0;return p.createElement(i,{basename:a,navigationType:n,location:e,navigator:r,static:o},p.createElement(ty,{routes:u}))};function tg(t){return tb.apply(this,arguments)}function tb(){return(tb=(0,a.Z)(function(t){var n,e,r,o,a,l,s,p,h,v,y,m,Z,E,O,A,x,C,_,S,R,k,j,D,M;return(0,f.Jh)(this,function(f){switch(f.label){case 0:if(n=t.app,e=t.routes,r=t.runtimeModules,o=t.basename,a=t.hydrate,l=t.memoryRouter,s=t.runtimeOptions,p=t.dataLoaderFetcher,h=window.__ICE_APP_CONTEXT__||{},v=window.__ICE_ASSETS_MANIFEST__||{},y=h.appData,m=h.routesData,Z=h.routesConfig,E=h.routePath,O=h.downgrade,A=h.documentOnly,x=h.renderMode,C=h.serverData,_=$(window.location),R=function(t,n){var e,r,o,u,a=n.memoryRouter,i=n.initialEntry,c=n.routes,l=a?"memory":null===(r=null==t?void 0:t.router)||void 0===r?void 0:r.type,s=(e=null===(o=null==t?void 0:t.router)||void 0===o?void 0:o.type,a||"memory"===e?w:"browser"===e?g:"hash"===e?b:void 0),f={window:window};if("memory"===l){var p={};if(p.initialEntries=(null===(u=null==t?void 0:t.router)||void 0===u?void 0:u.initialEntries)||function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[];return n.forEach(function(n){var o="".concat(e,"/").concat(n.path||"");n.children?r.push.apply(r,(0,q.Z)(t(n.children,o))):r.push(o)}),r.map(function(t){return t.replace("//","/")})}(c),i){var d=p.initialEntries.findIndex(function(t){return"string"==typeof t&&t===i});d>=0?p.initialIndex=d:console.error("path: ".concat(i," do not match any initialEntries ").concat(p.initialEntries))}f=p}return s(f)}(S=(0,tp.Z)(n),{memoryRouter:l,initialEntry:E,routes:e}),(0,P.J)(R),k={appExport:n,routes:e,appConfig:S,appData:y,routesData:m,routesConfig:Z,assetsManifest:v,basename:o,routePath:E,renderMode:x,requestContext:_,serverData:C},(j=new N(k,s)).setAppRouter(tm),!r.statics)return[3,2];return[4,Promise.all(r.statics.map(function(t){return j.loadModule(t)}).filter(Boolean))];case 1:f.sent(),f.label=2;case 2:if(u=p,y)return[3,4];return[4,function(t,n){return to.apply(this,arguments)}(n,_)];case 3:y=f.sent(),f.label=4;case 4:return[4,X((D=th(e,l?E:R.location,o)).map(function(t){var n=t.route;return{id:n.id,load:n.load}}))];case 5:if(M=f.sent(),m)return[3,7];return[4,K(D,_,M,{ssg:"SSG"===x})];case 6:m=f.sent(),f.label=7;case 7:if(Z||(Z=Y(D,m,M)),!a||O||A||j.setRender(function(t,n){return d.a(t,n)}),j.setAppContext(c((0,i.Z)({},k),{matches:D,routeModules:M,routesData:m,routesConfig:Z,appData:y})),!r.commons)return[3,9];return[4,Promise.all(r.commons.map(function(t){return j.loadModule(t)}).filter(Boolean))];case 8:f.sent(),f.label=9;case 9:return[2,function(t){return tw.apply(this,arguments)}({runtime:j,history:R})]}})})).apply(this,arguments)}function tw(){return(tw=(0,a.Z)(function(t){var n,e,r,o,u,a,i,c,l,s,d;return(0,f.Jh)(this,function(f){return n=t.history,o=(r=(e=t.runtime).getAppContext()).appConfig,u=r.appData,a=e.getRender(),i=e.composeAppProvider()||p.Fragment,c=e.getWrappers(),l=e.getAppRouter(),s=o.app.rootId||"app",(d=document.getElementById(s))||((d=document.createElement("div")).id=s,document.body.appendChild(d),console.warn("Root node #".concat(s," is not found, current root is automatically created by the framework."))),[2,a(d,p.createElement(tr,{value:u},p.createElement(i,null,p.createElement(tZ,{history:n,appContext:r,RouteWrappers:c,AppRouter:l}))))]})})).apply(this,arguments)}function tZ(t){var n=t.history,e=t.appContext,r=(0,l.Z)(t,["history","appContext"]),o=e.routes,u=e.matches,a=e.routesData,f=e.routesConfig,d=e.routeModules,h=e.basename,v=e.renderMode,y=(0,s.Z)((0,p.useState)({action:n.action,location:n.location}),2),m=y[0],g=y[1],b=(0,s.Z)((0,p.useState)({routesData:a,routesConfig:f,matches:u,routeModules:d}),2),w=b[0],Z=b[1],E=m.action,O=m.location,A=w.routesData,x=w.routesConfig,C=w.matches,P=w.routeModules;(0,p.useLayoutEffect)(function(){n&&n.listen(function(t){var n=t.action,e=t.location,r=th(o,e,h);if(!r.length)throw Error("Routes not found in location ".concat(e.pathname,"."));(function(t,n){return tE.apply(this,arguments)})(r,w).then(function(t){Z({routesData:t.routesData,routesConfig:t.routesConfig,matches:r,routeModules:t.routeModules}),g({action:n,location:e})})})},[]),(0,p.useEffect)(function(){"SSG"===v&&K(C,$(window.location),P).then(function(t){Z(c((0,i.Z)({},w),{routesData:t}))})},[]);var _=c((0,i.Z)({},e),{matches:C,routesData:A,routesConfig:x,routeModules:P});return p.createElement(F,{value:_},p.createElement(tn,(0,i.Z)({action:E,location:O,navigator:n},r)))}function tE(){return(tE=(0,a.Z)(function(t,n){var e,r,o,u,a,i,c,l;return(0,f.Jh)(this,function(s){switch(s.label){case 0:return e=n.matches,r=n.routesData,o=n.routeModules,[4,X(t.map(function(t){var n=t.route;return{id:n.id,load:n.load}}),o)];case 1:var f,p;return u=s.sent(),a=$(window.location),f=e,p=function(t,n){var e;return f[n].pathname!==t.pathname||(null===(e=f[n].route.path)||void 0===e?void 0:e.endsWith("*"))&&f[n].params["*"]!==t.params["*"]},[4,K(t.filter(function(t,n){return!f[n]||t.route.id!==f[n].route.id||p(t,n)}),a,u)];case 2:return i=s.sent(),c={},t.forEach(function(t){var n=t.route.id;c[n]=i[n]||r[n]}),l=Y(t,c,u),[4,function(t,n){return ta.apply(this,arguments)}(t,l)];case 3:return s.sent(),[2,{routesData:c,routesConfig:l,routeModules:u}]}})})).apply(this,arguments)}},943:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}},474:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t){if(Array.isArray(t))return t}},568:function(t,n,e){function r(t,n,e,r,o,u,a){try{var i=t[u](a),c=i.value}catch(l){e(l);return}i.done?n(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise(function(o,u){var a=t.apply(n,e);function i(t){r(a,o,u,i,c,"next",t)}function c(t){r(a,o,u,i,c,"throw",t)}i(void 0)})}}e.d(n,{Z:function(){return o}})},438:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t,n){if(!(t instanceof n))throw TypeError("Cannot call a class as a function")}},951:function(t,n,e){function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,{Z:function(){return o}})},669:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(662),o=e(222);function u(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var e,u,a=(0,r.Z)(t);if(n){var i=(0,r.Z)(this).constructor;u=Reflect.construct(a,arguments,i)}else u=a.apply(this,arguments);return(e=u)&&("object"===(0,o.Z)(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}}},662:function(t,n,e){function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return r(t)}e.d(n,{Z:function(){return o}})},668:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(998);function o(t,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&(0,r.Z)(t,n)}},375:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}},128:function(t,n,e){e.d(n,{Z:function(){return r}});function r(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},955:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){var r,o;r=t,o=e[n],n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o})}return t}},607:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)e=u[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)e=u[r],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}},998:function(t,n,e){function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){return r(t,n)}e.d(n,{Z:function(){return o}})},253:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(474),o=e(375),u=e(128),a=e(566);function i(t,n){return(0,r.Z)(t)||(0,o.Z)(t,n)||(0,a.Z)(t,n)||(0,u.Z)()}},637:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(474),o=e(375),u=e(128),a=e(566);function i(t){return(0,r.Z)(t)||(0,o.Z)(t)||(0,a.Z)(t)||(0,u.Z)()}},27:function(t,n,e){e.d(n,{Z:function(){return a}});var r=e(943),o=e(375),u=e(566);function a(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||(0,o.Z)(t)||(0,u.Z)(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},222:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t){return t&&t.constructor===Symbol?"symbol":typeof t}},566:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(943);function o(t,n){if(t){if("string"==typeof t)return(0,r.Z)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return(0,r.Z)(t,n)}}},498:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(998);function o(t,n,e){return(o=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?function(t,n,e){var o=[null];o.push.apply(o,n);var u=new(Function.bind.apply(t,o));return e&&(0,r.Z)(u,e.prototype),u}:Reflect.construct).apply(null,arguments)}var u=e(662);function a(t){var n="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){return o.apply(null,arguments)}(t,arguments,(0,u.Z)(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),(0,r.Z)(e,t)})(t)}function i(t){return a(t)}}}]);