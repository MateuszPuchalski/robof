(this.webpackJsonprobof=this.webpackJsonprobof||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),i=n(2),s=n(1),l=n(11),u=n(12),d=(n(24),n(25),n(13));function f(e){var t=e.name,n=e.username,o=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"Robof"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,o)))}function h(e){var t=e.robots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(f,{key:t,id:e.id,name:e.name,username:e.username,email:e.email})})))}function b(e){var t=e.onChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))}function g(e){var t=e.children;return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},t)}var E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=n(3),v={searchField:""},w={isPending:!1,robots:[],error:""},O=Object(l.createLogger)(),S=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(p.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(p.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(p.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(p.a)({},e,{error:t.error,isPending:!1});default:return e}}}),R=Object(s.d)(S,Object(s.a)(u.a,O));c.a.render(r.a.createElement(i.a,{store:R},r.a.createElement((function(e){e.store;var t=Object(i.b)(),n=Object(o.useState)([]),a=Object(d.a)(n,2),c=a[0],s=a[1],l=Object(i.c)((function(e){return e.requestRobots.robots})),u=Object(i.c)((function(e){return e.searchRobots.searchField}));return Object(o.useEffect)((function(){t((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}),[t]),Object(o.useEffect)((function(){var e=l.filter((function(e){return e.name.toLowerCase().includes(u.toLocaleLowerCase())}));s(e)}),[l,u]),r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robof"),r.a.createElement(b,{onChange:function(e){t({type:"CHANGE_SEARCH_FIELD",payload:e.target.value})}}),r.a.createElement(g,null,r.a.createElement(h,{robots:c})))}),null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robof",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robof","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.84c50cac.chunk.js.map