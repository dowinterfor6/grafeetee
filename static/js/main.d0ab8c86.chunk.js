(this.webpackJsonpgrafeetee=this.webpackJsonpgrafeetee||[]).push([[0],{197:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c(0),s=c.n(n),r=c(74),i=c.n(r),o=(c(85),c(7)),l=function(e){var t=e.state,c=e.SPRAY_PAINT,s=Object(n.useRef)(),r=Object(n.useState)(0),i=Object(o.a)(r,2),l=i[0],j=i[1],O=Object(n.useState)(0),u=Object(o.a)(O,2),b=u[0],d=u[1],f=Object(n.useState)(),h=Object(o.a)(f,2),v=h[0],x=h[1];Object(n.useEffect)((function(){s.current.width=s.current.offsetWidth,s.current.height=s.current.offsetHeight,x(s.current.getContext("2d"))}),[]);return Object(a.jsx)("section",{className:"canvas-container",children:Object(a.jsx)("canvas",{id:"canvas",ref:s,onMouseMove:function(e){j(e.clientX),d(e.clientY),1===e.buttons&&t.activeTool===c&&v&&(v.beginPath(),v.strokeStyle=t.color,v.arc(l,b,10,0,2*Math.PI),v.fillStyle=t.color,v.fill(),v.stroke())}})})},j=c(18),O=c(16),u=c(79),b=function(e){var t=e.dispatch,c=e.SET_COLOR,s=e.SET_TOOL,r=e.SPRAY_PAINT,i=Object(n.useState)(!1),l=Object(o.a)(i,2),b=l[0],d=l[1],f=Object(n.useState)(!1),h=Object(o.a)(f,2),v=h[0],x=h[1],p=Object(n.useState)("#000"),g=Object(o.a)(p,2),S=g[0],T=g[1],m=Object(n.useRef)(),N=Object(n.useRef)(),R=[m,N],y=function(e){var c=e.classList,a=e.dataset;t({type:s,payload:a.tool}),R.forEach((function(e){e.current.classList.remove("active")})),c.add("active")};return Object(a.jsxs)("aside",{className:"sidebar-container",children:[Object(a.jsxs)("div",{className:"sidebar-controls",children:[Object(a.jsx)("div",{className:"icon drag"}),Object(a.jsx)("div",{className:"icon close",onClick:function(){return d(!b)},children:Object(a.jsx)(O.a,{icon:j.a,size:"lg"})})]}),Object(a.jsxs)("div",{className:"sidebar-main ".concat(b?"hide":""),children:[Object(a.jsx)("div",{className:"icon spraypaint",ref:m,onClick:function(e){var t=e.currentTarget;x(!1),y(t)},"data-tool":r,children:Object(a.jsx)(O.a,{icon:j.d,size:"lg"})}),Object(a.jsxs)("div",{className:"icon color-picker-icon",ref:N,onClick:function(e){var t=e.currentTarget;x(!0),y(t)},children:[Object(a.jsx)(O.a,{icon:j.b,size:"lg"}),Object(a.jsx)(u.a,{className:"color-picker ".concat(v?"active":""),color:S,onChange:function(e){T(e),t({type:c,payload:e.hex})}})]}),Object(a.jsx)("a",{className:"icon save",download:"grafeetee.png",onClick:function(e){var t=document.getElementById("canvas");if(t){var c=t.toDataURL();e.currentTarget.href=c}},href:"/",children:Object(a.jsx)(O.a,{icon:j.c,size:"lg"})})]})]})},d=function(){var e="SETCOLOR",t="SETTOOL",c="SPRAYPAINT",s={color:"#000",activeTool:c},r=Object(n.useReducer)((function(c,a){Object.freeze(c);var n=Object.assign({},c);switch(a.type){case e:return n.color=a.payload,n;case t:return n.activeTool=a.payload,n;default:return c}}),s),i=Object(o.a)(r,2),j=i[0],O=i[1];return Object(a.jsxs)("section",{className:"app-container",children:[Object(a.jsx)(b,{dispatch:O,SET_COLOR:e,SET_TOOL:t,SPRAY_PAINT:c}),Object(a.jsx)(l,{state:j,SPRAY_PAINT:c})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))},85:function(e,t,c){}},[[197,1,2]]]);
//# sourceMappingURL=main.d0ab8c86.chunk.js.map