(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),o=n.n(r),s=n(2),a=n(0),i=function(e){var t=e.data,n=e.loading,r=e.length,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(c.useState)(e),n=Object(s.a)(t,2),r=n[0],o=n[1],a=function(){o(r+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))},i=function(){o(r-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))},u=function(){o(e)};return{counter:r,setCounter:o,increment:a,decrement:i,reset:u}}(0),i=o.counter,u=o.setCounter,l=o.increment,j=o.decrement,b=o.reset,d=!n&&t.length>0&&t[i]||{},h=d.author,O=d.quote;return null!==t&&(i<0&&u(r.current-1),i>r.current-1&&u(0)),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[r.current," Breaking Bad Quotes [",i+1,"]"]}),Object(a.jsx)("hr",{}),n&&Object(a.jsx)("div",{className:"alert alert-info text-center",children:"Loading..."}),!n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("blockquote",{className:"blockquote text-end",children:[Object(a.jsxs)("p",{children:[" ",O," "]}),Object(a.jsxs)("footer",{className:"blockquote-footer",children:[" ",h," "]})]}),Object(a.jsx)("div",{className:"btn-group me-2",children:Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(){return j()},children:"Anterior"})}),Object(a.jsx)("div",{className:"btn-group me-2",children:Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(){return b()},children:"Reset"})}),Object(a.jsx)("div",{className:"btn-group me-2",children:Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(){return l()},children:"Siguiente"})})]})]})},u=function(){var e=function(e){var t=Object(c.useRef)(!1),n=Object(c.useState)({data:null,loading:!0,error:null}),r=Object(s.a)(n,2),o=r[0],a=r[1],i=Object(c.useRef)(0);return Object(c.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),Object(c.useEffect)((function(){return fetch(e).then((function(e){return e.json()})).then((function(e){t.current?(i.current=e.length,a({data:e,loading:!1,error:null})):console.log("setState no llamado")})),function(){a({data:null,loading:!0,error:null})}}),[e]),{state:o,length:i}}("https://www.breakingbadapi.com/api/quotes"),t=e.state,n=e.length,r=t.data,o=t.loading;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i,{data:r,loading:o,length:n})})},l=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"React-QuotesApp"}),Object(a.jsx)("hr",{}),n&&Object(a.jsx)(u,{}),Object(a.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){r(!n)},children:"Show/Hide Quotes"})]})};n(10);o.a.render(Object(a.jsx)(l,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.8dedeb82.chunk.js.map