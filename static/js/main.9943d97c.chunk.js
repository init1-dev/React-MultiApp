(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(11),r=n.n(a),s=n(3),o=n(5),i=n(2),l=n(0),j=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o.b,{to:"/",className:"navbar-brand",children:" Multi-App "}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(o.c,{to:"/React-MultiApp/",className:"nav-link",children:" Home "}),Object(l.jsx)(o.c,{to:"/React-MultiApp/about",className:"nav-link",children:" About "}),Object(l.jsx)(o.c,{to:"/React-MultiApp/login",className:"nav-link",children:" Login "}),Object(l.jsx)(o.c,{to:"/React-MultiApp/quotes",className:"nav-link",children:" Quotes "}),Object(l.jsx)(o.c,{to:"/React-MultiApp/todo",className:"nav-link",children:" ToDo "})]})})]})})},u=function(){return Object(l.jsxs)("div",{className:"mt2",children:[Object(l.jsx)("h1",{children:"About Section"}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"Esto es un mensaje en la secci\xf3n de about."})]})},d=Object(c.createContext)(null),b=function(){var e=Object(c.useContext)(d).user;return Object(l.jsxs)("div",{className:"mt2",children:[Object(l.jsx)("h1",{children:"Home Section"}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"Esto es un mensaje en la secci\xf3n de bienvenida."}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Si hay un usuario activo, se mostrar\xe1 a continuaci\xf3n, en caso contrario el Usuario activo ser\xe1 'none'. Para activar un usuario ve a la secci\xf3n 'Login'."}),Object(l.jsx)("br",{}),Object(l.jsxs)("pre",{children:["Usuario activo: ",e.name||"<none>"]})]})},h=function(){var e=Object(c.useContext)(d),t=e.user,n=e.setUser,a=function(){return 0!==Object.keys(t).length};return Object(l.jsxs)("div",{className:"mt2",children:[Object(l.jsxs)("h1",{children:["Login Section",Object(l.jsx)("button",{className:"btn ms-4 ".concat(a()?"btn btn-warning":"btn btn-primary"),onClick:a()?function(){n({})}:function(){n({id:1234,name:"In1t",email:"in1t@email.com"})},children:a()?"Logout":"Login"})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:[" ",a()?"Usuario correcto":"No hay datos de usuario"," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("pre",{children:["userData: ",JSON.stringify(t,null,3)]})]})},O=function(e){var t=e.data,n=e.loading,a=e.length,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(c.useState)(e),n=Object(s.a)(t,2),a=n[0],r=n[1],o=function(){r(a+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))},i=function(){r(a-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))},l=function(){r(e)};return{counter:a,setCounter:r,increment:o,decrement:i,reset:l}}(0),o=r.counter,i=r.setCounter,j=r.increment,u=r.decrement,d=r.reset,b=!n&&t.length>0&&t[o]||{},h=b.author,O=b.quote;return null!==t&&(o<0&&i(a.current-1),o>a.current-1&&i(0)),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:[">> ",a.current||""," Breaking Bad Quotes [",o+1,"]"]}),Object(l.jsx)("hr",{}),n&&Object(l.jsx)("div",{className:"alert alert-info text-center",children:"Loading..."}),!n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("blockquote",{className:"blockquote text-end",children:[Object(l.jsxs)("p",{className:"quote",children:[" ",O," "]}),Object(l.jsxs)("footer",{className:"blockquote-footer",children:[" ",h," "]})]}),Object(l.jsx)("div",{className:"btn-group me-2",children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return u()},children:"Anterior"})}),Object(l.jsx)("div",{className:"btn-group me-2",children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return d()},children:"Reset"})}),Object(l.jsx)("div",{className:"btn-group me-2",children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return j()},children:"Siguiente"})})]})]})},m=function(){var e=function(e){var t=Object(c.useRef)(!1),n=Object(c.useState)({data:null,loading:!0,error:null}),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useRef)(0);return Object(c.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),Object(c.useEffect)((function(){return fetch(e).then((function(e){return e.json()})).then((function(e){t.current?(i.current=e.length,o({data:e,loading:!1,error:null})):console.log("setState no llamado")})),function(){o({data:null,loading:!0,error:null})}}),[e]),{state:r,length:i}}("https://www.breakingbadapi.com/api/quotes"),t=e.state,n=e.length,a=t.data,r=t.loading;return Object(l.jsx)("div",{className:"mt-3",children:Object(l.jsx)(O,{data:a,loading:r,length:n})})},x=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{className:"mt2",children:[Object(l.jsxs)("h1",{children:["React-QuotesApp",Object(l.jsx)("button",{className:"btn btn-warning ms-4",onClick:function(){a(!n)},children:"Show/Hide Quotes"})]}),n&&Object(l.jsx)(m,{})]})},p=n(7),g=n(12),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(g.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(p.a)(Object(p.a)({},e),{},{done:!e.done}):e}));default:return e}},v=function(e){var t=e.todo,n=e.index,c=e.handleDeleteToDo,a=e.handleToggle,r=t.id,s=t.desc,o=t.done;return Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsxs)("p",{className:"listItem ".concat(o&&"complete"),onClick:function(){return a(r)},children:[n+1,". ",s," [ ",o?"Done":"Pending"," ]"]}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(r)},children:"Borrar"})]},r)},N=function(e){var t=e.todos,n=e.handleDeleteToDo,c=e.handleToggle;return Object(l.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(l.jsx)(v,{todo:e,index:t,handleDeleteToDo:n,handleToggle:c},e.id)}))})},k=n(9),y=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(s.a)(t,2),a=n[0],r=n[1],o=function(e){var t=e.target;r(Object(p.a)(Object(p.a)({},a),{},Object(k.a)({},t.name,t.value)))};return[a,o,function(){r(e)}]}({description:""}),a=Object(s.a)(n,3),r=a[0].description,o=a[1],i=a[2];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Agregar ToDo"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(r.trim().length<3)){var n={id:(new Date).getTime(),desc:r,done:!1};t(n),i()}},children:[Object(l.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Escribe aqu\xed tu tarea",autoComplete:"off",value:r,onChange:o}),Object(l.jsx)("div",{className:"d-grid gap-1",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1",children:"Agregar"})})]})]})},A=function(){return JSON.parse(localStorage.getItem("todos"))||[]},S=function(){var e=Object(c.useReducer)(f,[],A),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(l.jsxs)("div",{className:"mt2",children:[Object(l.jsxs)("h1",{children:["TodoApp ( ",n.length," ",1===n.length?"Nota":"Notas"," ) "]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-7",children:Object(l.jsx)(N,{todos:n,handleDeleteToDo:function(e){return a({type:"delete",payload:e})},handleToggle:function(e){return a({type:"toggle",payload:e})}})}),Object(l.jsx)("div",{className:"col-5",children:Object(l.jsx)(y,{handleAddTodo:function(e){return a({type:"add",payload:e})}})})]}),Object(l.jsx)("div",{className:"quotesApp"})]})},R=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/React-MultiApp/",element:Object(l.jsx)(b,{})}),Object(l.jsx)(i.b,{path:"/React-MultiApp/about",element:Object(l.jsx)(u,{})}),Object(l.jsx)(i.b,{path:"/React-MultiApp/login",element:Object(l.jsx)(h,{})}),Object(l.jsx)(i.b,{path:"/React-MultiApp/quotes",element:Object(l.jsx)(x,{})}),Object(l.jsx)(i.b,{path:"/React-MultiApp/todo",element:Object(l.jsx)(S,{})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(i.a,{replace:!0,to:"/React-MultiApp/"})})]})]})})},C=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)(d.Provider,{value:{user:n,setUser:a},children:Object(l.jsx)(R,{})})};n(18);r.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9943d97c.chunk.js.map