(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-28892b03":"65743bd6","chunk-53509512":"2b089cca","chunk-600c669a":"45771256","chunk-835f93b8":"12f142f3"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-28892b03":1,"chunk-53509512":1,"chunk-600c669a":1,"chunk-835f93b8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-28892b03":"59465451","chunk-53509512":"066273c2","chunk-600c669a":"bddc46a2","chunk-835f93b8":"a81ba4d8"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/sweethome/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08ff":function(e,t,n){},1242:function(e,t,n){e.exports=n.p+"img/circle_blue.19de068b.svg"},"39fa":function(e,t,n){},"46d9":function(e,t,n){"use strict";n("39fa")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("router-view")],1)},s=[],i={},u=i,l=(n("5c42"),n("2877")),d=Object(l["a"])(u,c,s,!1,null,"0dc34e14",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("Header",{staticClass:"header"}),n("main",{staticClass:"content"},[n("Sidebar",{staticClass:"sidebar",class:{"sidebar-hide":e.isFull},attrs:{isFull:e.isFull},on:{expand:e.expand}}),n("div",{staticClass:"page",class:{"page-full":e.isFull}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1),n("Footer",{staticClass:"footer"})],1)},m=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"time"},[e._v(e._s(e._f("date")(e.date,"datetime")))]),r("div",{staticClass:"profiles"},[r("div",{staticClass:"profile"},[r("div",{staticClass:"name"},[e._v("Nyuta")]),r("div",{staticClass:"avatar"},[r("img",{attrs:{src:n("65c0"),alt:""}})])]),r("div",{staticClass:"profile"},[r("div",{staticClass:"name"},[e._v("Andrey")]),r("div",{staticClass:"avatar"},[r("img",{attrs:{src:n("1242"),alt:""}})])])]),r("div",{staticClass:"buttons"},[r("router-link",{attrs:{to:{name:"Login"}}},[r("button",{staticClass:"btn btn_white btn_out"},[e._v("Выйти")])])],1)])},v=[],b={data:function(){return{date:new Date,interval_1:null,interval_2:null}},mounted:function(){var e=this;this.interval_1=setInterval((function(){e.date=new Date}),1e3),this.interval_2=setInterval((function(){e.changeFavicon()}),1e4)},beforeDestroy:function(){clearInterval(this.interval_1),clearInterval(this.interval_2)},methods:{changeFavicon:function(){var e=document.getElementById("favicon"),t=["/sweethome/orange.svg","/sweethome/cherry.svg","/sweethome/chock.svg","/sweethome/ice.svg","/sweethome/laptop.svg","/sweethome/balloon.svg","/sweethome/teddy.svg","/sweethome/present.svg","/sweethome/pie.svg","/sweethome/bird.svg","/sweethome/photo.svg","/sweethome/home.svg"];e.href=t[Math.floor(Math.random()*t.length)]}}},g=b,w=(n("694a"),Object(l["a"])(g,h,v,!1,null,"3b2b0420",null)),y=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[e._l(e.links,(function(t){return n("router-link",{key:t.url,class:{"router-link-hide":e.isFull},attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[n("a",{attrs:{href:"#"}},[e._v(e._s(t.title))])])})),n("div",{staticClass:"arrow",class:{rotate:e.isFull},on:{click:function(t){return e.$emit("expand")}}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("g",[n("g",[n("path",{staticClass:"svg",attrs:{d:"M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122\n\t\t\tc-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6\n\t\t\tC252.9,510.4,222.4,510.4,203.6,491.6z"}})]),n("g",[n("path",{staticClass:"svg",attrs:{d:"M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2\n\t\t\tc-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9\n\t\t\tC84.4,414.7,53.9,414.7,35.1,395.9z"}})])])])])],2)},k=[],_={props:{isFull:Boolean},data:function(){return{links:[{title:"Добавить",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Профиль",url:"/profile"}]}}},C=_,j=(n("cade"),Object(l["a"])(C,x,k,!1,null,"09aaec9f",null)),O=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},S=[],F=(n("9407"),{}),I=Object(l["a"])(F,E,S,!1,null,"9f678672",null),L=I.exports,R={name:"main-layout",components:{Header:y,Sidebar:O,Footer:L},data:function(){return{isFull:!1}},methods:{expand:function(){this.isFull=!this.isFull}}},P=R,A=(n("46d9"),Object(l["a"])(P,p,m,!1,null,"1f5e77b5",null)),N=A.exports,T={components:{EmptyLayout:f,MainLayout:N},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},U=T,B=(n("5c0b"),Object(l["a"])(U,a,o,!1,null,null,null)),M=B.exports,$=n("1da1"),D=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(D["a"]);var H=[{path:"/",name:"Home",meta:{layout:"main",log:!0},component:function(){return n.e("chunk-28892b03").then(n.bind(null,"bb51"))}},{path:"/history",name:"History",meta:{layout:"main",log:!0},component:function(){return n.e("chunk-53509512").then(n.bind(null,"e4bb"))}},{path:"/profile",name:"Profile",meta:{layout:"main",log:!0},component:function(){return n.e("chunk-835f93b8").then(n.bind(null,"c66d"))}},{path:"/login",name:"Login",meta:{layout:"empty"},component:function(){return n.e("chunk-600c669a").then(n.bind(null,"a55b"))}}],z=new D["a"]({mode:"history",base:"/sweethome/",scrollBehavior:function(e,t,n){return n||new Promise((function(e){setTimeout((function(){e({x:0,y:0})}),500)}))},routes:H});z.beforeEach(function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.log}))){e.next=3;break}if(localStorage.getItem("user")){e.next=3;break}return e.abrupt("return",r({path:"/login"}));case 3:return e.abrupt("return",r());case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var q=z,J=n("2f62"),K=n("260b"),V={actions:{logIn:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.email,o=t.password,n.prev=2,n.next=5,K["a"].auth().signInWithEmailAndPassword(a,o);case 5:localStorage.setItem("user",a),n.next=12;break;case 8:throw n.prev=8,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[2,8]])})))()},getUid:function(){var e=K["a"].auth().currentUser;return e?e.uid:null}}},W=n("5530"),Y=(n("b0c0"),n("d81d"),n("b64b"),{actions:{createNote:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.name,c=t.text,s=t.date,i=t.enable,u=void 0===i||i,n.prev=2,n.next=5,a("getUid");case 5:return l=n.sent,n.next=8,K["a"].database().ref("/users/".concat(l,"/notes")).push({name:o,text:c,date:s,enable:u});case 8:return d=n.sent,n.abrupt("return",{name:o,text:c,date:s,enable:u,id:d.key});case 12:throw n.prev=12,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()},fetchNotes:function(e){return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,K["a"].database().ref("/users/".concat(a,"/notes")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(W["a"])(Object(W["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},updateNote:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.text,c=t.id,n.prev=2,n.next=5,a("getUid");case 5:return s=n.sent,n.next=8,K["a"].database().ref("/users/".concat(s,"/notes")).child(c).update({text:o});case 8:n.next=14;break;case 10:throw n.prev=10,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()},disableNote:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.enable,c=void 0!==o&&o,s=t.id,n.prev=2,n.next=5,a("getUid");case 5:return i=n.sent,n.next=8,K["a"].database().ref("/users/".concat(i,"/notes")).child(s).update({enable:c});case 8:n.next=14;break;case 10:throw n.prev=10,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()}}});r["default"].use(J["a"]);var G=new J["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{},getters:{error:function(e){return e.error}},modules:{auth:V,notes:Y}}),Q=(n("08ff"),n("ce5b")),X=n.n(Q),Z=(n("bf40"),n("9115"));n("ea7b"),n("66ce");r["default"].config.productionTip=!1,r["default"].filter("date",Z["a"]);var ee,te={apiKey:"AIzaSyBNnu_cP9p67yVXRatnH3WUC0nmfdOCjbY",authDomain:"sweethome-km12.firebaseapp.com",databaseURL:"https://sweethome-km12-default-rtdb.firebaseio.com",projectId:"sweethome-km12",storageBucket:"sweethome-km12.appspot.com",messagingSenderId:"562209642420",appId:"1:562209642420:web:d598a900cdebf6cacd04e1",measurementId:"G-82HRYSQ442"};K["a"].initializeApp(te),K["a"].auth().onAuthStateChanged((function(){ee||(ee=new r["default"]({router:q,store:G,Vuetify:X.a,render:function(e){return e(M)}}).$mount("#app"))}))},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5c42":function(e,t,n){"use strict";n("9eb9")},"65c0":function(e,t,n){e.exports=n.p+"img/cat.12447925.svg"},"694a":function(e,t,n){"use strict";n("9a3c")},"79a0":function(e,t,n){},9115:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("caad"),n("2532");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};return t.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),t.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("ru-RU",n).format(new Date(e))}},9407:function(e,t,n){"use strict";n("79a0")},"9a3c":function(e,t,n){},"9c0c":function(e,t,n){},"9eb9":function(e,t,n){},cade:function(e,t,n){"use strict";n("cd34")},cd34:function(e,t,n){}});
//# sourceMappingURL=app.0e3a7a05.js.map