(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},66:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(0),s=c.n(i),a=c(17),o=c.n(a),r=(c(59),c(28)),j=c(21),l=(c(60),c(96)),d=c(97),h=c(95),b=c(94),O=c(53),p=[{id:0,title:"White and Black",content:"Born in France",price:12e4,imgUrl:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,imgUrl:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,imgUrl:"https://codingapple1.github.io/shop/shoes3.jpg"}],u=c(7),x=function(e){var t=Object(u.f)();return e.shoes.map((function(e){return Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("img",{src:e.imgUrl||"https://codingapple1.github.io/shop/shoes"+(e.id+1)+".jpg",width:"100%",alt:e.title,onClick:function(){t.push("/detail/"+e.id)}}),Object(n.jsx)("h4",{children:e.title}),Object(n.jsxs)("p",{children:[e.content," & ",e.price]})]},e.id)}))},m=c(20),g=(c(66),c(38)),f=c.n(g);function v(e){return Object(n.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock[0]]})}var k=function(e){var t=Object(i.useState)(!0),c=Object(j.a)(t,2),s=c[0],a=c[1],o=Object(i.useState)(""),l=Object(j.a)(o,2),d=(l[0],l[1],Object(u.f)()),h=Object(u.g)().id,b=e.shoes.find((function(e){return e.id==h}));return Object(i.useEffect)((function(){var e=setTimeout((function(){a(!1)}),2e3);return function(){clearTimeout(e)}}),[s]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"red",children:"Detail"}),!0===s?Object(n.jsx)("div",{className:"my-alert-red",children:Object(n.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("img",{src:b.imgUrl,width:"100%",alt:b.title+" Goods Picture"})}),Object(n.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(n.jsx)("h4",{className:"pt-5",children:b.title}),Object(n.jsx)("p",{children:b.content}),Object(n.jsxs)("p",{children:[b.price,"\uc6d0"]}),Object(n.jsx)(v,{stock:e.stock}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=Object(r.a)(e.stock);t[0]=t[0]-1,e.setStock(t)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){d.push("/")},children:"HOME"}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){d.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})};var N=function(){var e=Object(i.useState)(p),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!1),o=Object(j.a)(a,2),g=o[0],v=o[1],N=Object(i.useState)([10,11,12]),S=Object(j.a)(N,2),C=S[0],w=S[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(l.a.Brand,{href:"#home",children:"Shoes Shop"}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{className:"ml-auto",children:[Object(n.jsx)(d.a.Link,{as:m.b,to:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{as:m.b,to:"/detail",children:"Detail"}),Object(n.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(n.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(h.a.Divider,{}),Object(n.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(n.jsxs)(u.c,{children:[Object(n.jsxs)(u.a,{path:"/",exact:!0,children:[Object(n.jsxs)(b.a,{className:"background",children:[Object(n.jsx)("h1",{children:"20% Season OFF"}),Object(n.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(n.jsx)("p",{children:Object(n.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(x,{shoes:c})}),!1===g?Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){f.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){s([].concat(Object(r.a)(c),Object(r.a)(e.data))),v(!0)})).catch((function(){}))},children:"\ub354\ubcf4\uae30"}):null]})]}),Object(n.jsx)(u.a,{path:"/detail/:id",children:Object(n.jsx)(k,{shoes:c,stock:C,setStock:w})}),Object(n.jsx)(u.a,{path:"/:id",children:Object(n.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c"})})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,98)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(N,{})})}),document.getElementById("root")),S()}},[[87,1,2]]]);
//# sourceMappingURL=main.759db5ed.chunk.js.map