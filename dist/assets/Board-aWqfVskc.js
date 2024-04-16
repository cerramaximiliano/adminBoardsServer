import{cM as me,cN as Se,cO as Re,b1 as z,aJ as H,r as N,b2 as T,b3 as q,j as e,aQ as ue,ao as De,cI as X,d as r,b5 as D,aT as E,b8 as Q,au as O,F as p,a5 as V,aq as x,aZ as $e,a9 as Le,ah as K,aj as he,aC as Y,f as Z,s as Me,u as se,al as Ae,T as y,cP as qe,ap as U,ae as ie,as as ne,ar as j,i as $,h as R,av as ae,aP as He,cQ as xe,g as W,ai as Ce,b4 as fe,cJ as Ue,bi as pe,e as be,b7 as We,b6 as ze,a as Oe,bb as Pe,aV as re,cR as Fe,bw as ve,be as Ge,bh as Qe,bv as Ye,cv as Je,l as Ne,k as ke,bq as Ke,bp as Ze,cC as Xe,aI as _e,n as et,aN as tt}from"./index-C2pyM5Ac.js";import{P as Ee,C as Be,D as nt}from"./react-beautiful-dnd.esm-5dOzuP-c.js";import{u as at,a as rt,b as ge,c as _,d as st,e as le,f as it,g as lt,h as je,i as ot,j as ct,k as Te,l as dt,m as mt,n as ut}from"./ScrumboardApi-bDxz8BLR.js";import{L as ht}from"./LinearProgress-n37qyi6I.js";function G(a){me(1,arguments);var n=Re(a);return Se(n*1e3)}function ft(a){me(1,arguments);var n=Se(a),t=n.getTime();return t}function oe(a){return me(1,arguments),Math.floor(ft(a)/1e3)}const ye={title:""},pt=z.object({title:z.string().nonempty("You must enter a title")});function bt(){const a=H(),{boardId:n}=a,[t]=at(),[l,o]=N.useState(!1),{control:i,formState:f,handleSubmit:h,reset:c}=T({mode:"onChange",defaultValues:ye,resolver:q(pt)}),{isValid:u,dirtyFields:d}=f;N.useEffect(()=>{l||c(ye)},[l,c]);function b(v){v.stopPropagation(),o(!0)}function s(){o(!1)}function C(v){t({boardId:n,list:v}),s()}return e("div",{children:e(ue,{className:"w-320 mx-8 sm:mx-12 rounded-xl shadow-0",square:!0,sx:{backgroundColor:v=>De(v.palette.background.default,v.palette.mode==="light"?.03:.25)},children:l?e(X,{onClickAway:s,children:r("form",{className:"p-12",onSubmit:h(C),children:[e(D,{name:"title",control:i,render:({field:v})=>e(E,{...v,className:"mb-16",required:!0,fullWidth:!0,variant:"filled",label:"List title",autoFocus:!0,InputProps:{endAdornment:e(Q,{position:"end",children:e(O,{onClick:s,size:"large",children:e(p,{size:18,children:"heroicons-outline:x"})})})}})}),e("div",{className:"flex justify-between items-center",children:e(V,{variant:"contained",color:"secondary",type:"submit",disabled:x.isEmpty(d)||!u,size:"small",children:"Add"})})]})}):e(V,{onClick:b,classes:{root:"font-medium w-full rounded-lg p-24 justify-start"},startIcon:e(p,{children:"heroicons-outline:plus-circle"}),sx:{color:"text.secondary"},children:"Add another list"})})})}const we={title:""},gt=z.object({title:z.string().nonempty("You must enter a title")});function xt(a){const{boardId:n,listId:t,onCardAdded:l}=a,[o,i]=N.useState(!1),[f]=rt(),{control:h,formState:c,handleSubmit:u,reset:d}=T({mode:"onChange",defaultValues:we,resolver:q(gt)}),{isValid:b,dirtyFields:s}=c;N.useEffect(()=>{o||d(we)},[o,d]);function C(k){k.stopPropagation(),i(!0)}function v(){i(!1)}function g(k){f({boardId:n,listId:t,card:k}).unwrap().then(()=>{l()}),v()}return e("div",{className:"w-full",children:o?e(X,{onClickAway:v,children:r("form",{onSubmit:u(g),children:[e(D,{name:"title",control:h,render:({field:k})=>e(E,{className:"mb-16",required:!0,fullWidth:!0,variant:"filled",label:"Card title",autoFocus:!0,InputProps:{...k,endAdornment:e(Q,{position:"end",children:e(O,{onClick:v,size:"large",children:e(p,{size:18,children:"heroicons-outline:x"})})})}})}),e("div",{className:"flex justify-between items-center",children:e(V,{variant:"contained",color:"secondary",type:"submit",disabled:x.isEmpty(s)||!b,size:"small",children:"Add"})})]})}):e(V,{onClick:C,classes:{root:"font-medium w-full rounded-lg p-24 justify-start"},startIcon:e(p,{children:"heroicons-outline:plus-circle"}),sx:{color:"text.secondary"},children:"Add another card"})})}const Ie={cardDialog:{open:!1,data:null}},ce=$e({name:"scrumboardApp",initialState:Ie,reducers:{openCardDialog:(a,n)=>{a.cardDialog={open:!0,data:n.payload}},closeCardDialog:a=>{a.cardDialog=Ie.cardDialog}},selectors:{selectCardDialogOpen:a=>a.cardDialog.open,selectCardDialogData:a=>a.cardDialog.data}});Le.inject(ce);const Ct=ce.injectInto(Le),{openCardDialog:vt,closeCardDialog:de}=ce.actions,{selectCardDialogOpen:Nt,selectCardDialogData:kt}=Ct.selectors;ce.reducer;function yt(a){const{boardId:n,id:t}=a,{data:l}=ge(n);return N.useMemo(()=>x.find(l,{id:t}),[l,t])}function wt(a){const{boardId:n,id:t}=a,l=yt({boardId:n,id:t});return l?e(he,{title:l.title,children:e(K,{className:"font-semibold text-12 mx-4 mb-6",label:l.title,size:"small"})},t):null}function It(a){const{dueDate:n}=a;return n?e(K,{size:"small",className:Y("flex items-center font-semibold text-12 mx-4 mb-6",oe(new Date)>n?"bg-red text-white":"bg-green text-white"),sx:{"& .MuiChip-icon":{color:"inherit"}},label:Z(G(n),"MMM do yy"),icon:e(p,{size:16,color:"inherit",children:"heroicons-outline:clock"})}):null}function St(a){const{card:n}=a,t=o(n),l=i(n);function o(f){return x.sum(f.checklists.map(h=>x.sum(h.checkItems.map(c=>c.checked?1:0))))}function i(f){return x.sum(f.checklists.map(h=>h.checkItems.length))}return l===0?null:e(K,{size:"small",className:Y("flex items-center font-semibold text-12 mx-4 mb-6",t===l?"bg-green text-white":"bg-grey-500 text-white"),sx:{"& .MuiChip-icon":{color:"inherit"}},icon:e(p,{size:16,color:"inherit",children:"heroicons-outline:check"}),label:`${t}/${l}`})}const Dt=Me(ue)(({theme:a})=>({"& ":{transitionProperty:"box-shadow",transitionDuration:a.transitions.duration.short,transitionTimingFunction:a.transitions.easing.easeInOut}}));function Lt(a){const{cardId:n,index:t}=a,l=se(),o=H(),{boardId:i}=o,{data:f,isLoading:h}=_(i),{data:c,isLoading:u}=st(i),{data:d,isLoading:b}=le(),s=x.find(c,{id:n});function C(L,A){L.preventDefault(),l(vt(A))}if(h||u||b)return e(Ae,{});if(!s)return null;function v(L){return x.sum(L==null?void 0:L.activities.map(A=>A.type==="comment"?1:0))}const g=v(s),k=x.find(s==null?void 0:s.attachments,{id:s==null?void 0:s.attachmentCoverId});return e(Ee,{draggableId:n,index:t,children:(L,A)=>e("div",{ref:L.innerRef,...L.draggableProps,...L.dragHandleProps,children:r(Dt,{className:Y(A.isDragging?"shadow-lg":"shadow","w-full mb-12 rounded-lg cursor-pointer"),onClick:M=>C(M,s),children:[f.settings.cardCoverImages&&k&&e("img",{className:"block",src:k.src,alt:"card cover"}),r("div",{className:"p-16 pb-0",children:[s.labels.length>0&&e("div",{className:"flex flex-wrap mb-8 -mx-4",children:s.labels.map(M=>e(wt,{boardId:i,id:M},M))}),e(y,{className:"font-medium mb-12",children:s==null?void 0:s.title}),(s.dueDate||s.checklists.length>0)&&r("div",{className:"flex items-center mb-12 -mx-4",children:[e(It,{dueDate:s.dueDate}),e(St,{card:s})]})]}),r("div",{className:"flex justify-between h-48 px-16",children:[r("div",{className:"flex items-center space-x-4",children:[(s==null?void 0:s.subscribed)&&e(p,{size:16,color:"action",children:"heroicons-outline:eye"}),s.description!==""&&e(p,{size:16,color:"action",children:"heroicons-outline:document-text"}),s.attachments&&r("span",{className:"flex items-center space-x-2",children:[e(p,{size:16,color:"action",children:"heroicons-outline:paper-clip"}),e(y,{color:"text.secondary",children:s.attachments.length})]}),g>0&&r("span",{className:"flex items-center space-x-2",children:[e(p,{size:16,color:"action",children:"heroicons-outline:chat"}),e(y,{color:"text.secondary",children:g})]})]}),e("div",{className:"flex items-center justify-end space-x-12",children:s.memberIds.length>0&&e("div",{className:"flex justify-start",children:e(qe,{max:3,classes:{avatar:"w-24 h-24 text-12"},children:s.memberIds.map(M=>{const P=x.find(d,{id:M});return e(he,{title:P==null?void 0:P.name,children:e(U,{alt:"member",src:P==null?void 0:P.avatar},t)},M)})})})})]})]})})})}const Mt=z.object({title:z.string().nonempty("You must enter a title")});function At(a){const{boardId:n,list:t,cardIds:l,className:o,handleProps:i}=a,[f,h]=N.useState(null),[c,u]=N.useState(!1),[d]=it(),[b]=lt(),{control:s,formState:C,handleSubmit:v,reset:g}=T({mode:"onChange",defaultValues:{title:t.title},resolver:q(Mt)}),{isValid:k,dirtyFields:L}=C;N.useEffect(()=>{c||g({title:t.title})},[c,g,t.title]),N.useEffect(()=>{c&&f&&h(null)},[f,c]);function A(B){h(B.currentTarget)}function M(){h(null)}function P(B){B.stopPropagation(),u(!0)}function J(){u(!1)}function w(B){b({boardId:n,list:{id:t.id,...B}}),J()}return e("div",{...i,children:r("div",{className:Y("flex items-center justify-between h-48 sm:h-56 px-12",o),children:[e("div",{className:"flex items-center min-w-0",children:c?e(X,{onClickAway:J,children:e("form",{className:"flex w-full",onSubmit:v(w),children:e(D,{name:"title",control:s,render:({field:B})=>e(E,{...B,variant:"outlined",margin:"none",autoFocus:!0,size:"small",InputProps:{endAdornment:e(Q,{position:"end",children:e(O,{type:"submit",disabled:x.isEmpty(L)||!k,size:"large",children:e(p,{children:"heroicons-outline:check"})})})}})})})}):e(y,{className:"text-14 font-medium cursor-pointer",onClick:P,children:t.title})}),r("div",{className:"flex items-center",children:[e(ie,{className:"flex items-center justify-center min-w-24 h-24 mx-4 text-sm font-semibold leading-24 rounded-full",sx:{backgroundColor:B=>De(B.palette.background.default,B.palette.mode==="light"?.1:.3),color:"text.secondary"},children:l.length}),e(O,{"aria-haspopup":"true",onClick:A,size:"small",children:e(p,{size:20,children:"heroicons-outline:dots-vertical"})}),r(ne,{id:"actions-menu",anchorEl:f,open:!!f,onClose:M,children:[r(j,{onClick:()=>{d({boardId:n,listId:t.id})},children:[e($,{className:"min-w-40",children:e(p,{children:"heroicons-outline:trash"})}),e(R,{primary:"Remove List"})]}),r(j,{onClick:P,children:[e($,{className:"min-w-40",children:e(p,{children:"heroicons-outline:pencil"})}),e(R,{primary:"Rename List"})]})]})]})]})})}const zt=Me(ue)(({theme:a})=>({"&":{transitionProperty:"box-shadow",transitionDuration:a.transitions.duration.short,transitionTimingFunction:a.transitions.easing.easeInOut}}));function Ot(a){const{boardId:n,listId:t,cardIds:l,index:o}=a,i=N.useRef(null),{data:f}=je(n),h=x.find(f,{id:t});function c(){i.current&&(i.current.scrollTop=i.current.scrollHeight)}return h?e(Ee,{draggableId:t,index:o,children:(u,d)=>e("div",{ref:u.innerRef,...u.draggableProps,...u.dragHandleProps,children:r(zt,{sx:{backgroundColor:b=>b.palette.mode==="light"?ae(b.palette.background.default,.4):ae(b.palette.background.default,.02)},className:Y(d.isDragging?"shadow-lg":"shadow-0","w-256 sm:w-320 mx-8 max-h-full flex flex-col rounded-xl border"),square:!0,children:[e(At,{list:h,cardIds:l,boardId:n,className:"border-b-1",handleProps:u.dragHandleProps}),e(He,{className:"flex flex-col flex-auto h-full min-h-0 w-full p-0 overflow-auto",ref:i,children:e(Be,{droppableId:t,direction:"vertical",type:"card",children:b=>r("div",{ref:b.innerRef,className:"flex flex-col w-full h-full p-12 min-h-1",children:[l.map((s,C)=>e(Lt,{cardId:s,index:C},s)),b.placeholder]})})}),e("div",{className:"p-12",children:e(xt,{boardId:n,listId:t,onCardAdded:c})})]})})}):null}function Ve(a){const{data:n}=le();return N.useMemo(()=>x.find(n,{id:a}),[n,a])}function Pt(a){const{item:n}=a,t=Ve(n.idMember);switch(n.type){case"comment":return r(W,{dense:!0,className:"px-0",children:[e(U,{alt:t==null?void 0:t.name,src:t==null?void 0:t.avatar,className:"w-32 h-32"}),r(ie,{className:"flex flex-col mx-16 p-12",sx:{borderRadius:"5px 20px 20px 5px",border:l=>`1px solid ${l.palette.divider}`},children:[r("div",{className:"flex items-center",children:[e(y,{children:t==null?void 0:t.name}),e(y,{className:"mx-8 text-12",color:"text.secondary",children:xe(G(n.time),{addSuffix:!0})})]}),e(y,{children:n.message})]})]});case"attachment":return r(W,{dense:!0,className:"px-0",children:[e(U,{alt:t==null?void 0:t.name,src:t==null?void 0:t.avatar,className:"w-32 h-32"}),r("div",{className:"flex items-center mx-16",children:[r(y,{children:[t==null?void 0:t.name,","]}),e(y,{className:"mx-8",children:n.message}),e(y,{className:"text-12",color:"text.secondary",children:xe(G(n.time),{addSuffix:!0})})]})]});default:return null}}function Ft(a){const{item:n,card:t,makeCover:l,removeCover:o,removeAttachment:i}=a,[f,h]=N.useState(null);function c(d){h(d.currentTarget)}function u(){h(null)}switch(n.type){case"image":return r("div",{className:"flex w-full sm:w-1/2 mb-16 px-16",children:[e("div",{className:"flex items-center justify-center min-w-128 w-128 h-128",children:e(Ce,{className:"overflow-hidden shadow",children:e("img",{className:"block max-h-full",src:n.src,alt:"attachment"})})}),r("div",{className:"flex flex-auto flex-col justify-center items-start min-w-0 px-16",children:[r("div",{className:"flex items-center w-full",children:[e(y,{className:"text-16 font-semibold truncate shrink",children:n.name}),t.attachmentCoverId===n.id&&e(p,{className:"text-orange-300 mx-4",size:20,children:"heroicons-outline:start"})]}),e(y,{className:"truncate w-full mb-12",color:"text.secondary",children:Z(G(n.time),"Pp")}),e(V,{"aria-haspopup":"true",onClick:c,variant:"outlined",size:"small",endIcon:e(p,{size:16,children:"heroicons-outline:chevron-down"}),children:"Actions"}),r(ne,{id:"actions-menu",anchorEl:f,open:!!f,onClose:u,children:[t.attachmentCoverId!==(n==null?void 0:n.id)?e(j,{onClick:()=>{u(),l(n==null?void 0:n.id)},children:"Make Cover"}):e(j,{onClick:()=>{u(),o()},children:"Remove Cover"}),e(j,{onClick:()=>{u(),i(n.id)},children:"Remove Attachment"})]})]})]},n.id);case"link":return r("div",{className:"flex w-full sm:w-1/2 mb-16 px-16",children:[e(Ce,{className:"min-w-128 w-128 h-128 flex items-center justify-center rounded-4 overflow-hidden shadow",children:e(y,{className:"font-semibold",children:"LINK"})}),r("div",{className:"flex flex-auto flex-col justify-center items-start min-w-0 px-16",children:[e(y,{className:"text-16 font-semibold truncate w-full",children:n.url}),e(y,{className:"truncate w-full mb-12",color:"text.secondary",children:n.time}),e(V,{"aria-haspopup":"true",onClick:c,variant:"outlined",size:"small",endIcon:e(p,{size:16,children:"heroicons-outline:chevron-down"}),children:"Actions"}),e(ne,{id:"simple-menu",anchorEl:f,open:!!f,onClose:u,children:e(j,{onClick:()=>{u(),i(n.id)},children:"Remove Attachment"})})]})]},n.id);default:return null}}function Et(a){return a=a||{},x.defaults(a,{id:fe.generateGUID(),name:"",checked:!1})}const Bt=z.object({name:z.string().nonempty("You must enter a title")});function jt(a){const{name:n="",onListItemAdd:t}=a,{control:l,formState:o,handleSubmit:i,reset:f}=T({mode:"onChange",defaultValues:{name:n},resolver:q(Bt)}),{isValid:h,dirtyFields:c}=o;function u(d){t(Et(d)),f({name:n})}return e("form",{onSubmit:i(u),children:r(W,{className:"px-0",dense:!0,children:[e("span",{className:"w-40"}),e(D,{name:"name",control:l,defaultValue:"",render:({field:d})=>e(E,{...d,className:"flex flex-1 mx-8",name:"name",variant:"outlined",placeholder:"Add an item"})}),e(Ue,{className:"mx-4","aria-label":"Add",size:"small",color:"secondary",type:"submit",disabled:x.isEmpty(c)||!h,children:e(p,{children:"heroicons-outline:plus"})})]})})}function Tt(a){const{item:n,onListItemChange:t,index:l,onListItemRemove:o}=a,{control:i,watch:f}=T({mode:"onChange",defaultValues:n}),h=f();return N.useEffect(()=>{x.isEqual(n,h)||t(h,l)},[h,l,t,n]),r(W,{className:"px-0",dense:!0,children:[e(D,{name:"checked",control:i,defaultValue:!1,render:({field:{onChange:c,value:u}})=>e(pe,{tabIndex:-1,checked:u,onChange:d=>c(d.target.checked),disableRipple:!0})}),e(D,{name:"name",control:i,render:({field:c})=>e(E,{...c,className:"flex flex-1 mx-8",variant:"outlined"})}),e(O,{"aria-label":"Delete",onClick:o,size:"large",children:e(p,{children:"heroicons-outline:trash"})})]},n.id)}const Vt=z.object({name:z.string().nonempty("You must enter a title")}),Rt=N.forwardRef((a,n)=>{const{name:t,onNameChange:l}=a,[o,i]=N.useState(!1),{control:f,formState:h,handleSubmit:c,reset:u}=T({mode:"onChange",defaultValues:{name:t},resolver:q(Vt)}),{isValid:d,dirtyFields:b}=h;N.useEffect(()=>{o||u({name:t})},[o,u,t]),N.useImperativeHandle(n,()=>({openForm:g=>s(g)}));function s(g){g.stopPropagation(),i(!0)}function C(){i(!1)}function v(g){l(g.name),C()}return o?e(X,{onClickAway:C,children:e("form",{onSubmit:c(v),children:e(D,{name:"name",control:f,render:({field:g})=>e(E,{...g,variant:"outlined",margin:"dense",autoFocus:!0,InputProps:{endAdornment:e(Q,{position:"end",children:e(O,{type:"submit",disabled:x.isEmpty(b)||!d,size:"large",children:e(p,{children:"heroicons-outline:check"})})})}})})})}):e(y,{className:"text-16 font-semibold cursor-pointer mx-8",onClick:s,children:t})});function $t(a){const{onCheckListChange:n,checklist:t,index:l,onRemoveCheckList:o}=a,[i,f]=N.useState(null),h=N.useRef(null),{watch:c,control:u}=T({mode:"onChange",defaultValues:t}),d=c();N.useEffect(()=>{x.isEqual(d,t)||n(d,l)},[d,l,n,t]);function b(g){C(),h.current&&h.current.openForm(g)}function s(g){f(g.currentTarget)}function C(){f(null)}function v(){return x.sum(d.checkItems.map(g=>g.checked?1:0))}return d?r("div",{className:"mb-24",children:[r("div",{className:"flex items-center justify-between mt-16 mb-12",children:[r("div",{className:"flex items-center",children:[e(p,{size:20,children:"heroicons-outline:check-circle"}),e(D,{name:"name",control:u,defaultValue:"",render:({field:{onChange:g,value:k}})=>e(Rt,{name:k,onNameChange:L=>g(L),ref:h})})]}),r("div",{children:[e(O,{"aria-owns":i?"actions-menu":null,"aria-haspopup":"true",onClick:s,size:"small",children:e(p,{size:20,children:"heroicons-outline:dots-vertical"})}),r(ne,{id:"actions-menu",anchorEl:i,open:!!i,onClose:C,children:[r(j,{onClick:o,children:[e($,{className:"min-w-40",children:e(p,{children:"heroicons-outline:trash"})}),e(R,{primary:"Remove Checklist"})]}),r(j,{onClick:b,children:[e($,{className:"min-w-40",children:e(p,{children:"heroicons-outline:pencil"})}),e(R,{primary:"Rename Checklist"})]})]})]})]}),r("div",{children:[r("div",{className:"flex items-center -mx-6",children:[e(y,{className:"flex font-semibold mx-6",children:`${v()} / ${d.checkItems.length}`}),e(ht,{className:"flex flex-1 mx-6",variant:"determinate",color:"secondary",value:100*v()/d.checkItems.length})]}),e(D,{name:"checkItems",control:u,defaultValue:[],render:({field:{onChange:g,value:k}})=>r(be,{children:[k.map((L,A)=>e(Tt,{item:L,index:A,onListItemChange:(M,P)=>{g(x.setIn(k,`[${P}]`,M))},onListItemRemove:()=>{g(x.reject(k,{id:L.id}))}},L.id)),e(jt,{onListItemAdd:L=>g([...k,L])})]})})]})]}):null}function qt(a){return a=a||{},x.defaults(a,{id:fe.generateGUID(),type:"comment",idMember:null,message:"",time:oe(new Date)})}const Ht=z.object({message:z.string().nonempty("You must enter a comment")}),te={idMember:"baa88231-0ee6-4028-96d5-7f187e0f4cd5",message:""};function Ut(a){const{onCommentAdd:n}=a,t=Ve(te.idMember),{control:l,formState:o,handleSubmit:i,reset:f}=T({mode:"onChange",defaultValues:te,resolver:q(Ht)}),{isValid:h,dirtyFields:c,errors:u}=o;function d(b){n(qt({...te,...b})),f(te)}return t?r("form",{onSubmit:i(d),className:"flex -mx-8",children:[e(U,{className:"w-32 h-32 mx-8",alt:t.name,src:t.avatar}),r("div",{className:"flex flex-col items-start flex-1 mx-8",children:[e(D,{name:"message",control:l,render:({field:b})=>{var s;return e(E,{...b,className:"flex flex-1",fullWidth:!0,error:!!u.message,helperText:(s=u==null?void 0:u.message)==null?void 0:s.message,rows:3,variant:"outlined",label:"Add comment",placeholder:"Write a comment..."})}}),e(V,{className:"mt-16","aria-label":"save",variant:"contained",color:"secondary",type:"submit",size:"small",disabled:x.isEmpty(c)||!h,children:"Save"})]})]}):null}function ee(a){const{state:n,onClose:t,children:l}=a;return e(We,{open:!!n,anchorEl:n,onClose:t,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:l})}function Wt(a){const{dueDate:n,onDueChange:t,onRemoveDue:l}=a,[o,i]=N.useState(null),f=n?Z(G(n),"Pp"):Z(new Date,"Pp");function h(u){i(u.currentTarget)}function c(){i(null)}return r("div",{children:[e(O,{onClick:h,size:"large",children:e(p,{children:"heroicons-outline:calendar"})}),e(ee,{state:o,onClose:c,children:e("div",{className:"p-16 max-w-192",children:n?e(j,{onClick:()=>{l(),c()},children:"Remove Due Date"}):e(ze,{value:new Date(f),format:"Pp",onChange:u=>{t(oe(u)),c()},slotProps:{textField:{label:"Due date",placeholder:"Choose a due date",InputLabelProps:{shrink:!0},fullWidth:!0,variant:"outlined"}}})})})]})}function Gt(a){const{labels:n,onToggleLabel:t}=a,l=H(),{boardId:o}=l,{data:i}=ge(o),[f,h]=N.useState(null);function c(d){h(d.currentTarget)}function u(){h(null)}return r("div",{children:[e(O,{onClick:c,size:"large",children:e(p,{children:"heroicons-outline:tag"})}),e(ee,{state:f,onClose:u,children:e("div",{children:i.map(d=>r(j,{className:"px-8",onClick:()=>{t(d.id)},children:[e(pe,{checked:n.includes(d.id)}),e(R,{className:"mx-8",children:d.title}),e($,{className:"min-w-24",children:e(p,{children:"heroicons-outline:tag"})})]},d.id))})})]})}function Qt(a){const{memberIds:n,onToggleMember:t}=a,[l,o]=N.useState(null),{data:i}=le();function f(c){o(c.currentTarget)}function h(){o(null)}return r("div",{children:[e(O,{onClick:f,size:"large",children:e(p,{children:"heroicons-outline:user-circle"})}),e(ee,{state:l,onClose:h,children:e("div",{children:i.map(c=>r(j,{className:"px-8",onClick:()=>{t(c.id)},children:[e(pe,{checked:n.includes(c.id)}),e(U,{className:"w-32 h-32",src:c.avatar}),e(R,{className:"mx-8",children:c.name})]},c.id))})})]})}function Yt(a){return a=a||{},x.defaults(a,{id:fe.generateGUID(),name:"",checkItems:[]})}const Jt=z.object({name:z.string().nonempty("You must enter a title")});function Kt(a){const{onAddCheckList:n,name:t=""}=a,[l,o]=N.useState(null),{control:i,formState:f,handleSubmit:h,reset:c}=T({mode:"onChange",defaultValues:{name:t},resolver:q(Jt)}),{isValid:u,dirtyFields:d,errors:b}=f;N.useEffect(()=>{l||c({name:t})},[l,c,t]);function s(g){o(g.currentTarget)}function C(){o(null)}function v(g){n(Yt(g)),C()}return r("div",{children:[e(O,{onClick:s,size:"large",children:e(p,{children:"heroicons-outline:check-circle"})}),e(ee,{state:l,onClose:C,children:r("form",{onSubmit:h(v),className:"p-16 flex flex-col items-end",children:[e(D,{name:"name",control:i,render:({field:g})=>{var k;return e(E,{...g,label:"Checklist title",error:!!b.name,helperText:(k=b==null?void 0:b.name)==null?void 0:k.message,fullWidth:!0,className:"mb-12",variant:"outlined",required:!0,autoFocus:!0})}}),e(V,{color:"secondary",type:"submit",disabled:x.isEmpty(d)||!u,variant:"contained",children:"Add"})]})})]})}function Zt(a){const{onRemoveCard:n}=a,[t,l]=N.useState(null);function o(f){l(f.currentTarget)}function i(){l(null)}return r("div",{children:[e(O,{onClick:o,size:"large",children:e(p,{children:"heroicons-outline:dots-horizontal"})}),e(ee,{state:t,onClose:i,children:e(j,{onClick:n,children:"Remove Card"})})]})}function Xt(){const a=se(),n=H(),{boardId:t}=n,{data:l,isLoading:o}=_(t),{data:i,isLoading:f}=le(),{data:h,isLoading:c}=ge(t),{data:u,isLoading:d}=je(t),b=o||f||c||d,s=Oe(kt),[C]=ot(),[v]=ct(),g=x.find(u,{id:s==null?void 0:s.listId}),{register:k,watch:L,control:A,setValue:M,formState:P}=T({mode:"onChange",defaultValues:s}),{isValid:J}=P,w=L(),B=Pe(m=>{C({boardId:t,card:{id:s.id,...m}}).unwrap().then(()=>{a(re({message:"Card Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))})},600);return Fe(()=>{!(!J||x.isEmpty(w)||!s)&&!x.isEqual(s,w)&&B(w)},[w,J]),N.useEffect(()=>{k("attachmentCoverId")},[k]),b?e(Ae,{}):r(Ge,{className:"flex flex-col sm:flex-row p-8",children:[r("div",{className:"flex flex-auto flex-col py-16 px-0 sm:px-16",children:[r("div",{className:"flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24",children:[r("div",{className:"mb-16 sm:mb-0 flex items-center",children:[e(y,{children:l.title}),e(p,{size:20,children:"heroicons-outline:chevron-right"}),e(y,{children:g&&g.title})]}),w.dueDate&&e(ze,{value:new Date(Z(G(w.dueDate),"Pp")),format:"Pp",onChange:m=>M("dueDate",oe(m)),className:"w-full sm:w-auto",slotProps:{textField:{label:"Due date",placeholder:"Choose a due date",InputLabelProps:{shrink:!0},fullWidth:!0,variant:"outlined"}}})]}),e("div",{className:"flex items-center mb-24",children:e(D,{name:"title",control:A,render:({field:m})=>e(E,{...m,label:"Title",type:"text",variant:"outlined",fullWidth:!0,required:!0,InputProps:{endAdornment:e(Q,{position:"end",children:(s==null?void 0:s.subscribed)&&e(p,{size:20,color:"action",children:"heroicons-outline:eye"})})}})})}),e("div",{className:"w-full mb-24",children:e(D,{name:"description",control:A,render:({field:m})=>e(E,{...m,label:"Description",multiline:!0,rows:"4",variant:"outlined",fullWidth:!0})})}),w.labels&&w.labels.length>0&&r("div",{className:"flex-1 mb-24 mx-8",children:[r("div",{className:"flex items-center mt-16 mb-12",children:[e(p,{size:20,children:"heroicons-outline:tag"}),e(y,{className:"font-semibold text-16 mx-8",children:"Labels"})]}),e(ve,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:h,getOptionLabel:m=>typeof m=="string"?m:m==null?void 0:m.title,value:w.labels.map(m=>x.find(h,{id:m})),onChange:(m,S)=>{const I=S.filter(F=>typeof F!="string").map(F=>F.id);M("labels",I)},renderTags:(m,S)=>m.map((I,F)=>e(K,{label:typeof I=="string"?I:I==null?void 0:I.title,...S({index:F}),className:"m-3"})),renderInput:m=>e(E,{...m,placeholder:"Select multiple Labels",label:"Labels",variant:"outlined",InputLabelProps:{shrink:!0}})})]}),w.memberIds&&w.memberIds.length>0&&r("div",{className:"flex-1 mb-24 mx-8",children:[r("div",{className:"flex items-center mt-16 mb-12",children:[e(p,{size:20,children:"heroicons-outline:users"}),e(y,{className:"font-semibold text-16 mx-8",children:"Members"})]}),e(ve,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:i,getOptionLabel:m=>typeof m=="string"?m:m==null?void 0:m.name,value:w.memberIds.map(m=>x.find(i,{id:m})),onChange:(m,S)=>{const I=S.filter(F=>typeof F!="string").map(F=>F.id);M("memberIds",I)},renderTags:(m,S)=>m.map((I,F)=>typeof I=="string"?e("span",{}):e(K,{label:I.name,...S({index:F}),className:Y("m-3",I==null?void 0:I.class),avatar:e(he,{title:I.name,children:e(U,{src:I.avatar})})})),renderInput:m=>e(E,{...m,placeholder:"Select multiple Members",label:"Members",variant:"outlined",InputLabelProps:{shrink:!0}})})]}),w.attachments&&w.attachments.length>0&&r("div",{className:"mb-24",children:[r("div",{className:"flex items-center mt-16 mb-12",children:[e(p,{size:20,children:"heroicons-outline:paper-clip"}),e(y,{className:"font-semibold text-16 mx-8",children:"Attachments"})]}),e("div",{className:"flex flex-col sm:flex-row flex-wrap -mx-16",children:w.attachments.map(m=>e(Ft,{item:m,card:w,makeCover:()=>{M("attachmentCoverId",m.id)},removeCover:()=>{M("attachmentCoverId","")},removeAttachment:()=>{M("attachments",x.reject(w.attachments,{id:m.id}))}},m.id))})]}),w.checklists&&w.checklists.map((m,S)=>e($t,{checklist:m,index:S,onCheckListChange:(I,F)=>{M("checklists",x.setIn(w.checklists,`[${F}]`,I))},onRemoveCheckList:()=>{M("checklists",x.reject(w.checklists,{id:m.id}))}},m.id)),r("div",{className:"mb-24",children:[r("div",{className:"flex items-center mt-16 mb-12",children:[e(p,{size:20,children:"heroicons-outline:chat-alt"}),e(y,{className:"font-semibold text-16 mx-8",children:"Comment"})]}),e("div",{children:e(Ut,{onCommentAdd:m=>M("activities",[m,...w.activities])})})]}),e(D,{name:"activities",control:A,defaultValue:[],render:({field:{value:m}})=>e("div",{children:m.length>0&&r("div",{className:"mb-24",children:[r("div",{className:"flex items-center mt-16",children:[e(p,{size:20,children:"heroicons-outline:clipboard-list"}),e(y,{className:"font-semibold text-16 mx-8",children:"Activity"})]}),e(be,{children:m.map(S=>e(Pt,{item:S},S.id))})]})})})]}),e("div",{className:"flex order-first sm:order-last items-start sticky top-0",children:r(ie,{className:"flex flex-row sm:flex-col items-center sm:py-8 rounded-12 w-full",sx:{backgroundColor:"background.default"},children:[e(O,{className:"order-last sm:order-first",color:"inherit",onClick:()=>a(de()),size:"large",children:e(p,{children:"heroicons-outline:x"})}),r("div",{className:"flex flex-row items-center sm:items-start sm:flex-col flex-1",children:[e(D,{name:"dueDate",control:A,render:({field:{onChange:m,value:S}})=>e(Wt,{onDueChange:m,onRemoveDue:()=>m(null),dueDate:S})}),e(D,{name:"labels",control:A,defaultValue:[],render:({field:{onChange:m,value:S}})=>e(Gt,{onToggleLabel:I=>m(x.xor(S,[I])),labels:S})}),e(D,{name:"memberIds",control:A,defaultValue:[],render:({field:{onChange:m,value:S}})=>e(Qt,{onToggleMember:I=>m(x.xor(S,[I])),memberIds:S})}),e(D,{name:"attachments",control:A,defaultValue:[],render:()=>e(O,{size:"large",children:e(p,{children:"heroicons-outline:paper-clip"})})}),e(D,{name:"checklists",control:A,defaultValue:[],render:({field:{onChange:m}})=>e(Kt,{onAddCheckList:S=>m([...w.checklists,S])})}),e(Zt,{onRemoveCard:()=>{v({boardId:t,cardId:s.id}).unwrap().then(()=>{a(de()),a(re({message:"Card Removed",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))})}})]})]})})]})}function _t(){const a=se(),n=Oe(Nt);return e(Qe,{classes:{paper:"max-w-lg w-full m-8 sm:m-24"},onClose:()=>a(de()),open:n,children:e(Xt,{})})}function en(a){const{onSetSidebarOpen:n}=a,t=Ye(),l=H(),{boardId:o}=l,{data:i}=_(o),[f]=Te(),[h]=dt(),{watch:c,control:u,reset:d}=T({mode:"onChange",defaultValues:i==null?void 0:i.settings}),b=c(),s=Pe(C=>{f({id:o,...C})},600);return Fe(()=>{x.isEmpty(b)||!(i!=null&&i.settings)||x.isEqual(i.settings,b)||s({settings:b})},[i,b,s]),N.useEffect(()=>{i&&d(i.settings)},[i,d]),x.isEmpty(b)?null:r("div",{children:[e(ie,{sx:{backgroundColor:C=>C.palette.mode==="light"?ae(C.palette.background.default,.4):ae(C.palette.background.default,.02)},className:"border-b-1",children:r(Je,{className:"flex items-center px-4",children:[e(O,{onClick:()=>n(!1),color:"inherit",size:"large",children:e(p,{children:"heroicons-outline:x"})}),e(y,{className:"px-4 font-medium text-16",color:"inherit",variant:"subtitle1",children:"Settings"})]})}),r(be,{className:"py-24",children:[r(W,{children:[e($,{className:"min-w-40",children:e(p,{children:"heroicons-outline:photograph"})}),e(R,{primary:"Card Cover Images"}),e(ke,{children:e(D,{name:"cardCoverImages",control:u,render:({field:{onChange:C,value:v}})=>e(Ne,{onChange:g=>{C(g.target.checked)},checked:v})})})]}),r(W,{children:[e($,{className:"min-w-40",children:e(p,{children:"heroicons-outline:eye-off"})}),e(R,{primary:"Subscribe"}),e(ke,{children:e(D,{name:"subscribed",control:u,render:({field:{onChange:C,value:v}})=>e(Ne,{onChange:g=>{C(g.target.checked)},checked:v})})})]}),r(Ke,{onClick:()=>{h(o).unwrap().then(()=>{t("/apps/scrumboard/boards")})},children:[e($,{className:"min-w-40",children:e(p,{children:"heroicons-outline:trash"})}),e(R,{primary:"Delete Board"})]})]})]})}const tn=z.object({title:z.string().nonempty("You must enter a title")});function nn(){var g;const a=H(),{boardId:n}=a,{data:t}=_(n),[l]=Te(),[o,i]=N.useState(!1),{control:f,formState:h,handleSubmit:c,reset:u}=T({mode:"onChange",defaultValues:{title:t==null?void 0:t.title},resolver:q(tn)}),{isValid:d,dirtyFields:b}=h;N.useEffect(()=>{o||u({title:t==null?void 0:t.title})},[o,u,t==null?void 0:t.title]);function s(k){k.stopPropagation(),i(!0)}function C(){i(!1)}function v(k){l({id:t.id,...k}),C()}return e("div",{className:"flex items-center min-w-0",children:o?e(X,{onClickAway:C,children:e("form",{className:"flex w-full",onSubmit:c(v),children:e(D,{name:"title",control:f,render:({field:k})=>e(E,{...k,variant:"filled",margin:"none",autoFocus:!0,hiddenLabel:!0,InputProps:{endAdornment:e(Q,{position:"end",children:e(O,{type:"submit",disabled:x.isEmpty(b)||!d,size:"large",children:e(p,{children:"heroicons-outline:check"})})})}})})})}):r("div",{className:"flex items-center justify-center space-x-12",children:[e(y,{className:"text-18  sm:text-24 md:text-32 font-extrabold tracking-tight leading-none cursor-pointer",onClick:s,color:"inherit",children:t==null?void 0:t.title}),((g=t==null?void 0:t.settings)==null?void 0:g.subscribed)&&e(p,{children:"heroicons-outline:eye"})]})})}function an(a){const{onSetSidebarOpen:n}=a;return r("div",{className:"p-24 sm:p-32 w-full border-b-1 flex items-center sm:justify-between container",children:[e("div",{className:"flex items-center",children:e(nn,{})}),r("div",{className:"flex flex-1 items-center justify-end space-x-0 sm:space-x-12",children:[r(V,{className:"whitespace-nowrap",component:Ze,to:"/apps/scrumboard/boards/",children:[e(p,{size:20,children:"heroicons-outline:view-boards"}),e("span",{className:"hidden sm:flex mx-8",children:"Boards"})]}),r(V,{className:"whitespace-nowrap",variant:"contained",color:"secondary",onClick:()=>n(!0),children:[e(p,{size:20,children:"heroicons-outline:cog"}),e("span",{className:"hidden sm:flex mx-8",children:"Settings"})]})]})]})}function rn(){const a=se(),n=_e(d=>d.breakpoints.down("lg")),t=H(),{boardId:l}=t,{data:o}=_(l),[i]=mt(),[f]=ut(),[h,c]=N.useState(!1);function u(d){const{source:b,destination:s}=d;s&&(b.droppableId===s.droppableId&&b.index===s.index||(d.type==="list"&&i({orderResult:d,board:o}).unwrap().then(()=>{a(re({message:"List Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))}),d.type==="card"&&f({orderResult:d,board:o}).unwrap().then(()=>{a(re({message:"Card Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))})))}return o?r(tt,{children:[e(et,{header:e(an,{onSetSidebarOpen:c}),content:o!=null&&o.lists?e("div",{className:"flex flex-1 overflow-x-auto overflow-y-hidden h-full",children:e(nt,{onDragEnd:u,children:e(Be,{droppableId:"list",type:"list",direction:"horizontal",children:d=>r("div",{ref:d.innerRef,className:"flex py-16 md:py-24 px-8 md:px-12",children:[o==null?void 0:o.lists.map((b,s)=>e(Ot,{boardId:l,listId:b.id,cardIds:b.cards,index:s},b.id)),d.placeholder,e(bt,{})]})})})}):null,rightSidebarOpen:h,rightSidebarContent:e(en,{onSetSidebarOpen:c}),rightSidebarOnClose:()=>c(!1),scroll:n?"normal":"content",rightSidebarWidth:320}),e(_t,{})]}):null}const dn=Xe(rn);export{dn as default};
