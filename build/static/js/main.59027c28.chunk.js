(window["webpackJsonptodo-app"]=window["webpackJsonptodo-app"]||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(14),l=n.n(o),i=(n(40),n(13)),s=n(9),u=n(12),p=Object(r.createContext)(),m=Object(r.createContext)(),f=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(r.useContext)(p),l=Object(r.useContext)(m);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.trim()?(l.addNote(n.trim()).then(function(){o.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430","success")}).catch(function(){o.show("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a","danger")}),a("")):o.show("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438")}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438",value:n,onChange:function(e){return a(e.target.value)}})))},b=n(66),O=n(65),d=function(e){var t=e.notes,n=e.onRemove;return c.a.createElement(b.a,{component:"ul",className:"list-group"},t.map(function(e){return c.a.createElement(O.a,{key:e.id,classNames:"note",timeout:800},c.a.createElement("li",{className:"list-group-item note"},c.a.createElement("div",null,c.a.createElement("strong",null,e.title),c.a.createElement("small",null,e.date)),c.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:function(){return n(e.id)}},"\xd7")))}))},E=function(){return c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"spinner-border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))},v=function(){var e=Object(r.useContext)(m),t=e.loading,n=e.notes,a=e.fetchNotes,o=e.removeNote;return Object(r.useEffect)(function(){a()},[]),c.a.createElement(r.Fragment,null,c.a.createElement(f,null),c.a.createElement("hr",null),t?c.a.createElement(E,null):c.a.createElement(d,{notes:n,onRemove:o}))},y=function(){return c.a.createElement("div",{class:"jumbotron"},c.a.createElement("div",{class:"container"},c.a.createElement("h1",{class:"display-4"},"\u041b\u0443\u0447\u0448\u0435\u0435 \u0440\u0435\u0430\u043a\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),c.a.createElement("p",{class:"lead"},"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f ",c.a.createElement("strong",null,"1.0.42"))))},j=function(){return c.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary"},c.a.createElement("div",{className:"navbar-brand"},"Note App"),c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/",exact:!0},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/about"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))))},g=function(){var e=Object(r.useContext)(p),t=e.alert,n=e.hide;return c.a.createElement(O.a,{in:t.visible,timeout:{enter:500,exit:350},classNames:"alert",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("div",{className:"container mt-1 mb-0 alert alert-".concat(t.type||"warning"," alert-dismissible")},c.a.createElement("strong",null,"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! "),t.text,c.a.createElement("button",{onClick:n,type:"button",className:"close","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))},h=n(3);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P,D=(a={},Object(h.a)(a,"SHOW_ALERT",function(e,t){return N({},t.payload,{visible:!0})}),Object(h.a)(a,"HIDE_ALERT",function(e){return N({},e,{visible:!1})}),Object(h.a)(a,"DEFAULT",function(e){return e}),a),x=function(e,t){return(D[t.type]||D.DEFAULT)(e,t)},k=function(e){var t=e.children,n=Object(r.useReducer)(x,{visible:!1}),a=Object(u.a)(n,2),o=a[0],l=a[1];return c.a.createElement(p.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";l({type:"SHOW_ALERT",payload:{text:e,type:t}})},hide:function(){return l({type:"HIDE_ALERT"})},alert:o}},t)},S=n(11),T=n.n(S),A=n(15),C=n(16),R=n.n(C),_=n(32);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var F=(P={},Object(h.a)(P,"SHOW_LOADER",function(e){return H({},e,{loading:!0})}),Object(h.a)(P,"ADD_NOTE",function(e,t){var n=t.payload;return H({},e,{notes:[].concat(Object(_.a)(e.notes),[n])})}),Object(h.a)(P,"FETCH_NOTES",function(e,t){return H({},e,{notes:t.payload,loading:!1})}),Object(h.a)(P,"REMOVE_NOTE",function(e,t){var n=t.payload;return H({},e,{notes:e.notes.filter(function(e){return e.id!==n})})}),Object(h.a)(P,"DEFAULT",function(e){return e}),P),W=function(e,t){return(0,F[t.type||F.default])(e,t)};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var U="https://react-hooks-app-34858.firebaseio.com",B=function(e){var t=e.children,n=Object(r.useReducer)(W,{notes:[],loading:!1}),a=Object(u.a)(n,2),o=a[0],l=a[1],i=function(){return l({type:"SHOW_LOADER"})},s=function(){var e=Object(A.a)(T.a.mark(function e(){var t,n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,R.a.get("".concat(U,"/notes.json"));case 3:null!=(t=e.sent).data&&(n=Object.keys(t.data).map(function(e){return J({},t.data[e],{id:e})}),l({type:"FETCH_NOTES",payload:n})),t.data||i();case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(A.a)(T.a.mark(function e(t){var n,a,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t,date:(new Date).toJSON()},e.prev=1,e.next=4,R.a.post("".concat(U,"/notes.json"),n);case 4:a=e.sent,r=J({},n,{id:a.data.name}),l({type:"ADD_NOTE",payload:r}),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(A.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.delete("".concat(U,"/notes/").concat(t,".json"));case 2:l({type:"REMOVE_NOTE",payload:t});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(m.Provider,{value:{showLoader:i,addNote:p,removeNote:f,fetchNotes:s,loading:o.loading,notes:o.notes}},t)};var M=function(){return c.a.createElement(B,null,c.a.createElement(k,null,c.a.createElement(i.a,null,c.a.createElement(j,null),c.a.createElement(g,null),c.a.createElement("div",{className:"container pt-4"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:v}),c.a.createElement(s.a,{path:"/about",component:y}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.59027c28.chunk.js.map