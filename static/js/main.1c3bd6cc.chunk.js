(this["webpackJsonpkeep-proto"]=this["webpackJsonpkeep-proto"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(9),r=n.n(a),i=(n(14),n(8)),s=n(3),l=(n(15),n(0));var j=function(t){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("img",{id:"logo",src:"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png",alt:"logo"}),Object(l.jsx)("h3",{children:"Keep"})]})},u=n(5),d=n(7);var b=function(t){var e=t.onAdd,n=Object(c.useState)(!1),o=Object(s.a)(n,2),a=o[0],r=o[1],i=Object(c.useState)({title:"",content:""}),j=Object(s.a)(i,2),b=j[0],O=j[1],f=function(t){var e=t.target,n=e.name,c=e.value;O((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},n,c))}))};return Object(l.jsx)("div",{className:"add",children:Object(l.jsxs)("form",{children:[a&&Object(l.jsx)("input",{type:"text",placeholder:"Title",name:"title",value:b.title,onChange:f,autoComplete:"off"}),Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{name:"content",placeholder:"Take a Note....",value:b.content,onChange:f,onClick:function(){r(!0)},rows:a?3:1})}),Object(l.jsx)("button",{onClick:function(t){e(b),t.preventDefault(),O({title:"",content:""}),r(!1)},children:"+"})]})})};var O=function(t){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)("p",{children:t.content}),Object(l.jsx)("button",{onClick:function(){return t.onDelete(t.id)},children:Object(l.jsx)("i",{class:"fas fa-trash"})})]})};var f=function(t){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"This Project is Created By Sataym Dengre"})})};var h=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1];window.onload=function(){var t=JSON.parse(window.localStorage.getItem("noteslocal"));null!=t&&o((function(){return t}))};var a=function(t){o((function(e){var n=Object(i.a)(e.filter((function(e,n){return n!==t})));return window.localStorage.setItem("noteslocal",JSON.stringify(n)),n}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"Notearea",children:[Object(l.jsx)(b,{onAdd:function(t){o((function(e){var n=[].concat(Object(i.a)(e),[t]);return window.localStorage.setItem("noteslocal",JSON.stringify(n)),n}))}}),n.map((function(t,e){return Object(l.jsx)(O,{id:e,title:t.title,content:t.content,onDelete:a},e)}))]}),Object(l.jsx)(f,{})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.1c3bd6cc.chunk.js.map