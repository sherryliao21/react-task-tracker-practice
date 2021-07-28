(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(14)),u=n(23),i=n(6),l=n.n(i),j=n(11),d=n(10),b=n(2),h=n(1),f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(h.jsx)("button",{onClick:r,className:"btn",style:{backgroundColor:t},children:n})};f.defaultProps={backgroundColor:"steelblue"};var p=f,O=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;Object(b.e)();return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)(p,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};O.defaultProps={title:"Task Tracker"};var x=O,m=n(8),v=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"Copyright \xa9 2021"}),Object(h.jsx)(m.b,{to:"/about",children:"About"})]})},k=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0"}),Object(h.jsx)(m.b,{to:"/",children:"Go back"})]})},g=n(22),y=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text," ",Object(h.jsx)(g.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(h.jsx)("p",{children:t.day})]})},T=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(y,{task:e,onDelete:n,onToggle:r},e.id)}))})},C=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),u=Object(d.a)(o,2),i=u[0],l=u[1],j=Object(r.useState)(!1),b=Object(d.a)(j,2),f=b[0],p=b[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:i,reminder:f}),s(""),l(""),p(!1)):alert("Please add a task!")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Day & Time"}),Object(h.jsx)("input",{type:"date",placeholder:"Add Day & Time",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Reminder"}),Object(h.jsx)("input",{type:"checkbox",value:f,onChange:function(e){return p(e.currentTarget.checked)},checked:f})]}),Object(h.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var w=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),i=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(u.a)(i),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:f(i.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,f(i.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(m.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{onAdd:function(){return c(!n)},showAdd:n}),Object(h.jsx)(b.a,{path:"/",exact:!0,render:function(e){return Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)(C,{onAdd:g}),i.length>0?Object(h.jsx)(T,{tasks:i,onDelete:y,onToggle:w}):"No Tasks yet."]})}}),Object(h.jsx)(b.a,{path:"/about",component:k}),Object(h.jsx)(v,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.a6d6575e.chunk.js.map