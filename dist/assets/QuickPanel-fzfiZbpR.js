import{s as D,S as b,u as T,a as S,b as v,c as C,r as I,j as e,t as L,d as i,L as r,T as o,f as h,D as m,e as p,g as c,h as s,i as u,F as y,k as x,l as g,m as O}from"./index-4wE1OinM.js";const M=D(b)(()=>({"& .MuiDrawer-paper":{width:280}}));function P(){const w=T(),t=S(v),k=S(C),[a,N]=I.useState(["notifications"]),l=n=>()=>{const f=a.indexOf(n),d=[...a];f===-1?d.push(n):d.splice(f,1),N(d)};return e(M,{open:k,anchor:"right",onOpen:()=>{},onClose:()=>w(L()),disableSwipeToOpen:!0,children:i(O,{children:[e(r,{component:"div",children:"Today"}),i("div",{className:"mb-0 px-24 py-16",children:[e(o,{className:"mb-12 text-32",color:"text.secondary",children:h(new Date,"eeee")}),i("div",{className:"flex",children:[e(o,{className:"text-32 leading-none",color:"text.secondary",children:h(new Date,"dd")}),e(o,{className:"text-16 leading-none",color:"text.secondary",children:"th"}),e(o,{className:"text-32 leading-none",color:"text.secondary",children:h(new Date,"MMMM")})]})]}),e(m,{}),i(p,{children:[e(r,{component:"div",children:"Events"}),t&&t.events.map(n=>e(c,{children:e(s,{primary:n.title,secondary:n.detail})},n.id))]}),e(m,{}),i(p,{children:[e(r,{component:"div",children:"Notes"}),t&&t.notes.map(n=>e(c,{children:e(s,{primary:n.title,secondary:n.detail})},n.id))]}),e(m,{}),i(p,{children:[e(r,{component:"div",children:"Quick Settings"}),i(c,{children:[e(u,{className:"min-w-40",children:e(y,{children:"material-outline:notifications"})}),e(s,{primary:"Notifications"}),e(x,{children:e(g,{color:"primary",onChange:l("notifications"),checked:a.indexOf("notifications")!==-1})})]}),i(c,{children:[e(u,{className:"min-w-40",children:e(y,{children:"material-outline:cloud"})}),e(s,{primary:"Cloud Sync"}),e(x,{children:e(g,{color:"secondary",onChange:l("cloudSync"),checked:a.indexOf("cloudSync")!==-1})})]}),i(c,{children:[e(u,{className:"min-w-40",children:e(y,{children:"material-outline:brightness_high"})}),e(s,{primary:"Retro Thrusters"}),e(x,{children:e(g,{color:"primary",onChange:l("retroThrusters"),checked:a.indexOf("retroThrusters")!==-1})})]})]})]})})}export{P as default};
