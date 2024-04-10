import{M as I,N,s as g,ay as x,r as l,az as L,aA as S,bj as A,aB as w,aC as F,G as T,u as j,a as p,bk as k,bl as f,bm as b,bn as R,d as i,j as t,T as m,ak as d,ae as M,F as h,bo as P,ba as B,a5 as z,bp as y,bq as G,ap as O,h as U,D as v,aN as E,br as Q,al as W,e as D,au as _,ax as $,n as q,aJ as H,aI as J,bs as V,bt as K}from"./index-sXetSjso.js";function X(e){return I("MuiListItemAvatar",e)}N("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Y=["className"],Z=e=>{const{alignItems:a,classes:s}=e;return T({root:["root",a==="flex-start"&&"alignItemsFlexStart"]},X,s)},tt=g("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.root,s.alignItems==="flex-start"&&a.alignItemsFlexStart]}})(({ownerState:e})=>x({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),et=l.forwardRef(function(a,s){const n=L({props:a,name:"MuiListItemAvatar"}),{className:o}=n,r=S(n,Y),u=l.useContext(A),c=x({},n,{alignItems:u.alignItems}),C=Z(c);return w.jsx(tt,x({className:F(C.root,o),ownerState:c,ref:s},r))}),at=et;function st(){const e=j(),a=p(k),{data:s,isLoading:n}=f(),o=p(b(s));return l.useEffect(()=>()=>{e(R())},[]),n?null:i("div",{className:"p-24 sm:p-32 w-full border-b-1",children:[i("div",{className:"flex flex-col",children:[t(d.span,{initial:{x:-20},animate:{x:0,transition:{delay:.2}},children:t(m,{className:"text-24 md:text-32 font-extrabold tracking-tight leading-none",children:"Contacts"})}),t(d.span,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:t(m,{component:d.span,className:"text-14 font-medium ml-2",color:"text.secondary",children:`${o==null?void 0:o.length} contacts`})})]}),i("div",{className:"flex flex-1 items-center mt-16 -mx-8",children:[i(M,{component:d.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-1 w-full sm:w-auto items-center px-16 mx-8 border-1 rounded-full",children:[t(h,{color:"action",size:20,children:"heroicons-outline:search"}),t(B,{placeholder:"Search contacts",className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:r=>e(P(r))})]}),i(z,{className:"mx-8",variant:"contained",color:"secondary",component:y,to:"new/edit",children:[t(h,{size:20,children:"heroicons-outline:plus"}),t("span",{className:"hidden sm:flex mx-8",children:"Add"})]})]})]})}function nt(e){const{contact:a}=e;return i(E,{children:[i(G,{className:"px-32 py-16",sx:{bgcolor:"background.paper"},component:y,to:`/apps/contacts/${a.id}`,children:[t(at,{children:t(O,{alt:a.name,src:a.avatar})}),t(U,{classes:{root:"m-0",primary:"font-medium leading-5 truncate"},primary:a.name,secondary:t(m,{className:"inline",component:"span",variant:"body2",color:"text.secondary",children:a.title})})]}),t(v,{})]})}function ot(){const{data:e,isLoading:a}=f(),s=p(b(e)),n=p(Q(s));return a?t(W,{}):s.length===0?t("div",{className:"flex flex-1 items-center justify-center h-full",children:t(m,{color:"text.secondary",variant:"h5",children:"There are no contacts!"})}):t(d.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-col flex-auto w-full max-h-full",children:Object.entries(n).map(([o,r])=>{var u;return i("div",{className:"relative",children:[t(m,{color:"text.secondary",className:"px-32 py-4 text-14 font-medium",children:o}),t(v,{}),t(D,{className:"w-full m-0 p-0",children:(u=r==null?void 0:r.children)==null?void 0:u.map(c=>t(nt,{contact:c},c.id))})]},o)})})}function rt(){return i("div",{className:"flex flex-col flex-auto max-w-full w-md",children:[t(_,{className:"absolute top-0 right-0 my-16 mx-32 z-10",sx:{color:"white"},component:y,to:"/apps/contacts",size:"large",children:t(h,{children:"heroicons-outline:x"})}),t($,{})]})}const it=g(q)(({theme:e})=>({"& .FusePageSimple-header":{backgroundColor:e.palette.background.paper}}));function ct(){const e=l.useRef(null),a=H(),[s,n]=l.useState(!1),o=J(r=>r.breakpoints.down("lg"));return f(),V(),K(),l.useEffect(()=>{n(!!a.id)},[a]),t(it,{header:t(st,{}),content:t(ot,{}),ref:e,rightSidebarContent:t(rt,{}),rightSidebarOpen:s,rightSidebarOnClose:()=>n(!1),rightSidebarWidth:640,rightSidebarVariant:"temporary",scroll:o?"normal":"content"})}export{ct as default};
