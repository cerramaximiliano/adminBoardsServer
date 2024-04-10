import{j as e,ax as S,a as w,an as N,cU as I,aq as R,d as a,T as u,ak as g,a5 as y,bp as m,F as l,cV as P,g as T,aC as A,i as M,au as C,h as D,f as b,D as L,aN as h,cW as j,al as z,e as F,s as H,n as O,aJ as U,r as k,aI as $}from"./index-Xp4oWIO1.js";import{P as v,D as B,C as E}from"./react-beautiful-dnd.esm-yfC5uUc3.js";function Q(){return e("div",{className:"flex flex-col flex-auto",children:e(S,{})})}function W(){const{url:t}=w(N),{data:n}=I(t||"/mock-api/"),s=R.filter(n,r=>r.type==="task"&&!r.completed).length;return a("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 p-24 sm:p-32 w-full border-b-1 justify-between",children:[a("div",{className:"flex flex-col sm:flex-row sm:items-center sm:space-x-12",children:[e(g.span,{initial:{x:-20},animate:{x:0,transition:{delay:.2}},children:e(u,{className:"text-24 md:text-32 font-extrabold tracking-tight leading-none",children:"Tasks"})}),e(g.span,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:e(u,{className:"text-14 font-medium ml-2",color:"text.secondary",children:`${s} remaining tasks`})})]}),a("div",{className:"flex items-center -mx-8",children:[a(y,{className:"mx-8 whitespace-nowrap",component:m,to:"new/section",children:[e(l,{size:20,children:"heroicons-outline:plus"}),e("span",{className:"mx-8",children:"Add Section"})]}),a(y,{className:"mx-8 whitespace-nowrap",variant:"contained",color:"secondary",component:m,to:"new/task",children:[e(l,{size:20,children:"heroicons-outline:plus"}),e("span",{className:"mx-8",children:"Add Task"})]})]})]})}function q(t){const n=new Date,s=new Date(t)-n;return Math.max(0,Math.floor(s/(1e3*60)))}function G(t){const n=q(t);return n>0?`Next run in ${n} minutes`:n===0?"Running now":"Unknown"}function J(t){const{data:n,index:s}=t,[r]=P();return e(v,{draggableId:n.id,index:s,children:(o,p)=>a(h,{children:[a(T,{className:A(p.isDragging?"shadow-lg":"shadow","px-40 py-12 group"),sx:{bgcolor:"background.paper"},button:!0,component:m,to:`/apps/tasks/${n.id}`,ref:o.innerRef,...o.draggableProps,children:[e("div",{className:"md:hidden absolute flex items-center justify-center inset-y-0 left-0 w-32 cursor-move md:group-hover:flex",...o.dragHandleProps,children:e(l,{sx:{color:"text.disabled"},size:20,children:"heroicons-solid:menu"})}),e(M,{className:"min-w-40 -ml-10 mr-8",children:e(C,{sx:{color:n.completed?"secondary.main":"text.disabled"},onClick:c=>{c.preventDefault(),c.stopPropagation(),r({...n,completed:!n.completed})},children:e(l,{children:"heroicons-outline:check-circle"})})}),e(D,{classes:{root:"m-0",primary:"truncate"},primary:n.title}),a("div",{className:"flex items-center",children:[a("div",{children:[n.priority===0&&e(l,{className:"text-green icon-size-16 mx-12",children:"heroicons-outline:arrow-narrow-down"}),n.priority===2&&e(l,{className:"text-red icon-size-16 mx-12",children:"heroicons-outline:arrow-narrow-up"})]}),a(u,{className:"text-12 whitespace-nowrap",color:"text.secondary",children:[n.dueDate&&e("span",{children:b(new Date(n.dueDate),"LLL dd")}),n.nextRunAt&&a("span",{className:"",children:[n.dueDate?" ":"","Next Run At ",b(new Date(n.nextRunAt),"LLL dd HH:mm"),n.nextRunAt&&a("span",{className:"hidden md:block md:text-red",children:[" ",G(n.nextRunAt)]})]})]})]})]}),e(L,{})]})})}function K(t){const{data:n,index:s}=t;return e(v,{draggableId:n.id,index:s,children:r=>a(h,{children:[a(T,{className:"px-40 py-12 group",sx:{bgcolor:"background.default"},button:!0,component:m,to:`/apps/tasks/${n.id}`,ref:r.innerRef,...r.draggableProps,children:[e("div",{className:"md:hidden absolute flex items-center justify-center inset-y-0 left-0 w-32 cursor-move md:group-hover:flex",...r.dragHandleProps,children:e(l,{sx:{color:"text.disabled"},size:20,children:"heroicons-solid:menu"})}),e(D,{classes:{root:"m-0",primary:"font-semibold text-16 truncate"},primary:n.title})]}),e(L,{})]})})}function V(){const{url:t,apiKey:n}=w(N),{data:s,isLoading:r}=I(t||"/mock-api/"),[o]=j();if(r)return e(z,{});if(!s||s.length===0)return e("div",{className:"flex flex-1 items-center justify-center h-full",children:e(u,{color:"text.secondary",variant:"h5",children:"There are no tasks!"})});function p(c){const{source:i,destination:d}=c;if(!d)return;const{index:f}=d,{index:x}=i;f!==x&&o({startIndex:x,endIndex:f})}return e(F,{className:"w-full m-0 p-0",children:e(B,{onDragEnd:p,children:e(E,{droppableId:"list",type:"list",direction:"vertical",children:c=>a(h,{children:[e("div",{ref:c.innerRef,children:s.map((i,d)=>i.type==="task"?e(J,{data:i,index:d},i.id):i.type==="section"?e(K,{index:d,data:i},i.id):null)}),c.placeholder]})})})})}const _=H(O)(({theme:t})=>({"& .FusePageSimple-header":{backgroundColor:t.palette.background.paper}}));function Z(){const t=U(),[n,s]=k.useState(!1),r=$(o=>o.breakpoints.down("lg"));return k.useEffect(()=>{s(!!t.id)},[t]),e(_,{header:e(W,{}),content:e(V,{}),rightSidebarContent:e(Q,{}),rightSidebarOpen:n,rightSidebarOnClose:()=>s(!1),rightSidebarWidth:640,scroll:r?"normal":"content"})}export{Z as default};
