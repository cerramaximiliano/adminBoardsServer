import{aq as b,a8 as De,b1 as u,b2 as V,b3 as R,j as e,g as j,b5 as C,aT as K,aC as L,b8 as E,F as h,au as w,r as x,bb as se,aZ as Te,a9 as oe,u as M,a as A,d as c,T as I,e as H,bh as re,b4 as ce,bi as ze,ba as J,cI as de,bq as me,h as F,b7 as Ae,b6 as Fe,f as ue,ao as he,ah as pe,aL as Ee,cC as fe,aJ as ge,al as Me,cJ as qe,aN as ee,m as Oe,aj as z,a5 as te,cK as Pe,ai as _e,aQ as $e,ak as B,cF as Ve,aK as Re,s as be,bp as $,aI as je,ae as He,av as ne}from"./index-sXetSjso.js";import{F as Be}from"./FusePageCarded--oUFny84.js";import{M as Ue}from"./react-masonry-css.module-HZ1XcRUX.js";function We(n){return n=n||{},b.defaults(n,{id:b.uniqueId(),title:""})}const Qe=["notes_list","notes_item","notes_labels","notes_label","notes_archived_items","notes_reminder_items"],Ge=De.enhanceEndpoints({addTagTypes:Qe}).injectEndpoints({endpoints:n=>({getNotesList:n.query({query:t=>{const{filter:a,id:s}=t;let l="";return a==="labels"&&(l=`/mock-api/notes/labels/${s}`),a==="archive"&&(l="/mock-api/notes/archive"),a==="reminders"&&(l="/mock-api/notes/reminders"),a||(l="/mock-api/notes"),{url:l}},providesTags:["notes_list"]}),createNotesItem:n.mutation({query:t=>({url:"/mock-api/notes",method:"POST",data:t}),invalidatesTags:["notes_list","notes_item"]}),getNotesItem:n.query({query:t=>({url:`/mock-api/notes/${t.noteId}`}),providesTags:["notes_item"]}),updateNotesItem:n.mutation({query:t=>({url:`/mock-api/notes/${t.id}`,method:"PUT",data:t}),invalidatesTags:["notes_item","notes_list"]}),deleteNotesItem:n.mutation({query:t=>({url:`/mock-api/notes/${t}`,method:"DELETE"}),invalidatesTags:["notes_list"]}),getNotesLabels:n.query({query:()=>({url:"/mock-api/notes/labels"}),providesTags:["notes_labels"]}),createNotesLabel:n.mutation({query:t=>({url:"/mock-api/notes/labels",method:"POST",data:t}),invalidatesTags:["notes_label","notes_labels"]}),getNotesLabel:n.query({query:t=>({url:`/mock-api/notes/labels/${t.labelId}`}),providesTags:["notes_label"]}),updateNotesLabel:n.mutation({query:t=>({url:`/mock-api/notes/labels/${t.id}`,method:"PUT",data:t}),invalidatesTags:["notes_labels"]}),deleteNotesLabel:n.mutation({query:t=>({url:`/mock-api/notes/labels/${t}`,method:"DELETE"}),invalidatesTags:["notes_labels"]}),getNotesArchivedItems:n.query({query:()=>({url:"/mock-api/notes/archive"}),providesTags:["notes_archived_items"]}),getNotesReminderItems:n.query({query:()=>({url:"/mock-api/notes/reminder"}),providesTags:["notes_reminder_items"]})}),overrideExisting:!1}),{useGetNotesListQuery:ye,useCreateNotesItemMutation:Ye,useGetNotesItemQuery:_t,useUpdateNotesItemMutation:Je,useDeleteNotesItemMutation:Ke,useGetNotesLabelsQuery:q,useCreateNotesLabelMutation:Ze,useGetNotesLabelQuery:$t,useUpdateNotesLabelMutation:Xe,useDeleteNotesLabelMutation:et,useGetNotesArchivedItemsQuery:Vt,useGetNotesReminderItemsQuery:Rt}=Ge,ae={title:""};function tt(){const[n]=Ze(),{data:t}=q(),a=u.object({title:u.string().nonempty("You must enter a label title").refine(m=>!t.some(N=>N.title===m),{message:"This label title already exists"})}),{control:s,formState:l,handleSubmit:i,reset:d}=V({mode:"onChange",defaultValues:ae,resolver:R(a)}),{isValid:r,dirtyFields:p,errors:o}=l;function y(m){const N=We(m);n(N),d(ae)}return e("form",{onSubmit:i(y),children:e(j,{className:"p-0 mb-16",dense:!0,children:e(C,{name:"title",control:s,render:({field:m})=>{var N;return e(K,{...m,className:L("flex flex-1"),error:!!o.title,helperText:(N=o==null?void 0:o.title)==null?void 0:N.message,placeholder:"Create new label",variant:"outlined",InputProps:{startAdornment:e(E,{position:"start",children:e(h,{color:"action",children:"heroicons-outline:tag"})}),endAdornment:e(E,{position:"end",children:e(w,{className:"w-32 h-32 p-0","aria-label":"Delete",disabled:b.isEmpty(p)||!r,type:"submit",size:"large",children:e(h,{color:"action",size:20,children:"heroicons-outline:check"})})})}})}})})})}function nt(n){const{label:t}=n,{data:a}=q(),[s]=Xe(),[l]=et(),i=u.object({id:u.string().nonempty(),title:u.string().nonempty("You must enter a label title").refine(k=>!a.some(S=>S.title===k),{message:"This label title already exists"})}),{control:d,formState:r,reset:p,watch:o}=V({mode:"onChange",defaultValues:t,resolver:R(i)}),{errors:y,dirtyFields:m,isValid:N}=r,D=o();x.useEffect(()=>{p(t)},[t,p]);const _=se(k=>{s(k)},600);x.useEffect(()=>{N&&!b.isEmpty(m)&&!b.isEqual(t,D)&&_(D)},[D,t,_,m]);function W(){l(t.id)}return e(j,{className:"p-0 mb-16",dense:!0,children:e(C,{name:"title",control:d,render:({field:k})=>{var S;return e(K,{...k,className:L("flex flex-1"),error:!!y.title,helperText:(S=y==null?void 0:y.title)==null?void 0:S.message,placeholder:"Create new label",variant:"outlined",InputProps:{startAdornment:e(E,{position:"start",children:e(h,{color:"action",children:"heroicons-outline:tag"})}),endAdornment:e(E,{position:"end",children:e(w,{onClick:W,className:"w-32 h-32 p-0","aria-label":"Delete",size:"large",children:e(h,{color:"action",size:20,children:"heroicons-outline:trash"})})})}})}})})}const at={dialogs:{noteDialogId:null,labelsDialogOpen:!1},searchText:"",variateDesc:!1},U=Te({name:"notesApp",initialState:at,reducers:{openNoteDialog:(n,t)=>{n.dialogs.noteDialogId=t.payload},closeNoteDialog:n=>{n.dialogs.noteDialogId=null},openLabelsDialog:n=>{n.dialogs.labelsDialogOpen=!0},closeLabelsDialog:n=>{n.dialogs.labelsDialogOpen=!1},setSearchText:{reducer:(n,t)=>{n.searchText=t.payload},prepare:n=>({payload:n.target.value||"",meta:void 0,error:null})},toggleVariateDescSize:n=>{n.variateDesc=!n.variateDesc}},selectors:{selectNoteDialogId:n=>n.dialogs.noteDialogId,selectLabelsDialogOpen:n=>n.dialogs.labelsDialogOpen,selectSearchText:n=>n.searchText,selectVariateDescSize:n=>n.variateDesc}});oe.inject(U);const it=U.injectInto(oe),{openNoteDialog:lt,closeNoteDialog:ie,closeLabelsDialog:st,openLabelsDialog:ot,setSearchText:rt,toggleVariateDescSize:ct}=U.actions,{selectNoteDialogId:Ne,selectLabelsDialogOpen:dt,selectSearchText:xe,selectVariateDescSize:ve}=it.selectors;U.reducer;function mt(){const n=M(),t=A(dt),{data:a}=q();return c(re,{classes:{paper:"w-full max-w-320 p-24 md:p-40 m-24"},onClose:()=>n(st()),open:!!t,children:[e(I,{className:"text-20 mb-24 font-semibold",children:"Edit Labels"}),c(H,{dense:!0,children:[e(tt,{}),a==null?void 0:a.map(s=>e(nt,{label:s},s.id))]})]})}function ut(n){return n=n||{},b.defaults(n,{id:ce.generateGUID(),content:"",completed:!1})}const ht=u.object({content:u.string().nonempty("You must enter a content")}),le={content:""};function pt(n){const{onListItemAdd:t}=n,{control:a,formState:s,handleSubmit:l,reset:i}=V({mode:"onChange",defaultValues:le,resolver:R(ht)}),{isValid:d,dirtyFields:r,errors:p}=s;function o(y){t(ut(y)),i(le)}return e("form",{onSubmit:l(o),children:e(j,{className:"p-0",dense:!0,children:e(C,{name:"content",control:a,render:({field:y})=>{var m;return e(K,{...y,className:"flex flex-1",error:!!p.content,helperText:(m=p==null?void 0:p.content)==null?void 0:m.message,placeholder:"Add an item",variant:"standard",autoFocus:!0,hiddenLabel:!0,InputProps:{disableUnderline:!0,className:"px-2",startAdornment:e(E,{position:"start",children:e(w,{className:"w-32 h-32 p-0 -mx-6","aria-label":"Add",type:"submit",disabled:b.isEmpty(r)||!d,size:"large",children:e(h,{size:20,children:"heroicons-outline:plus"})})})}})}})})})}function ft(n){const{onListItemChange:t,item:a,onListItemRemove:s}=n;function l(i){t(b.setIn(a,i.target.name,i.target.type==="checkbox"?i.target.checked:i.target.value))}return a?c(j,{className:"p-0",dense:!0,children:[e(ze,{className:"p-0",checked:a.completed,tabIndex:-1,disableRipple:!0,name:"completed",onChange:l,color:"default"}),e(J,{className:L("flex flex-1 mx-8",a.completed&&"line-through opacity-50"),name:"content",value:a.content,onChange:l,disableUnderline:!0}),e(w,{className:"w-32 h-32 mx-4 p-0","aria-label":"Delete",onClick:()=>s(a.id),size:"large",children:e(h,{size:20,children:"heroicons-outline:trash"})})]},a.id):null}function gt(n){const{tasks:t,onCheckListChange:a,className:s}=n;function l(r){a(t.map(p=>p.id===r.id?r:p))}function i(r){a(t.filter(p=>p.id!==r))}function d(r){a([...t,r])}return t?e("div",{className:s,children:c(H,{dense:!0,children:[t.map(r=>e(ft,{item:r,onListItemChange:l,onListItemRemove:i},r.id)),e(pt,{onListItemAdd:d})]})}):null}function bt(n){const{note:t,onChange:a}=n,{data:s}=q(),[l,i]=x.useState(null);function d(o){o.stopPropagation(),i(o.currentTarget)}function r(){i(null)}function p(o){a(b.xor(t.labels,[o]))}return c("div",{children:[e(w,{className:"w-32 h-32 mx-4 p-0",onClick:d,size:"large",children:e(h,{size:20,children:"heroicons-outline:tag"})}),e(Ae,{hideBackdrop:!0,open:!!l,anchorEl:l,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},className:"pointer-events-none",classes:{paper:"pointer-events-auto py-8 prevent-add-close"},children:e(de,{onClickAway:r,children:e(H,{className:"p-0",children:s.map(o=>c(me,{dense:!0,onClick:()=>p(o.id),children:[e(h,{className:"list-item-icon",size:20,color:"action",children:t.labels.includes(o.id)?"heroicons-outline:check-circle":"heroicons-outline:minus-circle"}),e(F,{className:"truncate px-8",primary:o.title,disableTypography:!0})]},o.id))})})})]})}function yt(n){const{reminder:t,onChange:a}=n;return x.useMemo(()=>e(Fe,{disablePast:!0,value:t?new Date(t):null,onChange:s=>a(s.toString()),defaultValue:new Date(Date.now()),sx:{"& .MuiInputAdornment-root":{minWidth:40,minHeight:40,m:0},"& .MuiOutlinedInput-notchedOutline":{display:"none"},"& .MuiOutlinedInput-root":{padding:0},"& .MuiInputBase-input":{position:"absolute",pointerEvents:"none",visibility:"hidden"}},slotProps:{actionBar:{actions:["clear","today"]}},slots:{openPickerIcon:()=>e(h,{size:20,children:"heroicons-outline:bell"})}}),[t])}function Nt(n){const{onChange:t}=n;function a(s){const l=s.target.files[0];if(!l)return;const i=new FileReader;i.readAsBinaryString(l),i.onload=()=>{t&&t(`data:${l.type};base64,${btoa(i.result)}`)},i.onerror=()=>{console.log("error on load image")}}return c("label",{htmlFor:"button-file",children:[e("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:a}),e(w,{className:"w-32 h-32 mx-4 p-0",component:"span",size:"large",children:e(h,{size:20,children:"heroicons-outline:photograph"})})]})}function xt(n){return n=n||{},b.defaults(n,{id:b.uniqueId(),title:"",content:"",tasks:[],image:"",reminder:"",labels:[],archived:!1,createdAt:"",updatedAt:""})}function we(n){const{date:t,onDelete:a,className:s,classes:l}=n;return t?e(pe,{icon:e(h,{size:16,children:"heroicons-outline:clock"}),label:ue(new Date(t),"MMM dd yy, h:mm"),classes:{root:L("h-24 border-0",s),label:"px-12 py-4 text-12 font-medium leading-none",deleteIcon:"w-16",...l},sx:{color:"text.secondary",backgroundColor:i=>he(i.palette.background.default,.03)},variant:"outlined",onDelete:a}):null}function Ce(n){const{id:t,linkable:a,onDelete:s,className:l,classes:i}=n,{data:d}=q();if(!d)return null;const r=b.find(d,{id:t});if(!r)return null;const p=a?{element:Ee,onClick:o=>{o.stopPropagation()},to:`/apps/notes/labels/${r.id}`}:{};return e(pe,{...p,label:r.title,classes:{root:L("h-24 border-0",l),label:"px-12 py-4 text-12 font-medium leading-none",deleteIcon:"w-16",...i},sx:{color:"text.secondary",backgroundColor:o=>he(o.palette.background.default,.03)},variant:"outlined",onDelete:s})}const vt=u.object({id:u.string().nonempty("ID is required"),content:u.string().nonempty("Content is required"),completed:u.boolean()}),wt=u.object({id:u.string().optional(),title:u.string().optional(),content:u.string().optional(),tasks:u.array(vt).default([]).optional(),labels:u.array(u.string()).default([]).optional(),image:u.string().nullable().optional(),reminder:u.string().nullable().optional(),archived:u.boolean().optional(),createdAt:u.string().optional(),updatedAt:u.string().optional(),oneOfThemRequired:u.boolean().optional().refine(function(n){if(n===!0){const{title:t,content:a,image:s,tasks:l}=this.parent;return t||a||s||l&&l.length>0}return!0},{message:"At least one of the fields is required."})});function Ct(n){const{variant:t="edit",onClose:a}=n,[s,l]=x.useState(!1),i=ge(),[d]=Je(),[r]=Ke(),[p]=Ye(),{data:o}=ye(i),y=A(Ne),m=x.useMemo(()=>b.find(o,{id:y}),[y,o]),{formState:N,handleSubmit:D,getValues:_,watch:W,reset:k,setValue:S,control:T}=V({mode:"onChange",resolver:R(wt)}),{isValid:Se,dirtyFields:Q}=N,v=W(),G=x.useCallback(()=>{t==="edit"&&m&&k(m),t==="new"&&b.isEmpty(v)&&k(xt(b.merge(i.labelId?{labels:[i.labelId]}:null,i.id==="archive"?{archived:!0}:null)))},[t,i,m]);x.useEffect(()=>{G()},[G]);function Z(f){p(f),G()}const X=se(f=>{d(f)},600);x.useEffect(()=>{t==="edit"&&!b.isEmpty(Q)&&(b.isEqual(m,v)||X(v))},[v,m,t,X,Q]);function Le(){r(m==null?void 0:m.id),a==null||a()}return b.isEmpty(v)?e(Me,{}):c("div",{className:"flex flex-col w-full",children:[e(Oe,{className:"flex flex-auto w-full max-h-640",children:c("div",{className:"w-full",children:[e(C,{name:"image",control:T,defaultValue:"",render:({field:{onChange:f,value:g}})=>!g||g===""?e("span",{}):c("div",{className:"relative",children:[e("img",{src:g,className:"w-full block",alt:"note"}),e(qe,{className:"absolute right-0 bottom-0 m-8",variant:"extended",size:"small",color:"secondary","aria-label":"Delete Image",type:"button",onClick:()=>f(""),children:e(h,{size:20,children:"heroicons-outline:trash"})})]})}),e("div",{className:"px-20 my-16",children:e(C,{name:"title",control:T,render:({field:f})=>e(J,{...f,className:"font-semibold text-14",placeholder:"Title",type:"text",disableUnderline:!0,fullWidth:!0})})}),e("div",{className:"px-20 my-16",children:e(C,{name:"content",control:T,render:({field:f})=>e(J,{...f,placeholder:"Take a note...",multiline:!0,rows:"4",disableUnderline:!0,fullWidth:!0})})}),e(C,{name:"tasks",control:T,defaultValue:[],render:({field:{onChange:f,value:g}})=>(g==null?void 0:g.length)===0&&!s||!g&&!s?e("span",{}):e("div",{className:"px-16",children:e(gt,{tasks:g||[],onCheckListChange:O=>f(O)})})}),(v.labels||v.reminder||v.createdAt)&&c("div",{className:"flex flex-wrap w-full px-20 my-16 -mx-4",children:[v.reminder&&e(we,{className:"mt-4 mx-4",date:v.reminder,onDelete:()=>{S("reminder",void 0)}}),e(C,{name:"labels",control:T,defaultValue:[],render:({field:{onChange:f,value:g}})=>g?e(ee,{children:g.map(O=>e(Ce,{id:O,className:"mt-4 mx-4",onDelete:()=>f(g.filter(Ie=>Ie!==O))},O))}):e("span",{})}),v.createdAt&&c(I,{color:"text.secondary",className:"text-12 mt-8 mx-4",children:["Edited: ",ue(new Date(v.createdAt),"MMM dd yy, h:mm")]})]})]})}),c("div",{className:"flex flex-auto justify-between items-center px-16 pb-12",children:[c("div",{className:"flex items-center",children:[e(z,{title:"Remind me",placement:"bottom",children:e("div",{children:e(C,{name:"reminder",control:T,render:({field:{onChange:f,value:g}})=>e(yt,{reminder:g,onChange:f})})})}),e(z,{title:"Add image",placement:"bottom",children:e("div",{children:e(Nt,{onChange:f=>S("image",f,{shouldDirty:!0,shouldValidate:!0})})})}),e(z,{title:"Add tasks",placement:"bottom",children:e(w,{className:"w-32 h-32 mx-4 p-0",onClick:()=>l(!s),size:"large",children:e(h,{size:20,children:"heroicons-outline:pencil-alt"})})}),e(z,{title:"Change labels",placement:"bottom",children:e("div",{children:e(bt,{note:v,onChange:f=>S("labels",f)})})}),e(C,{name:"archived",control:T,defaultValue:!1,render:({field:{onChange:f,value:g}})=>e(z,{title:g?"Unarchive":"Archive",placement:"bottom",children:e("div",{children:e(w,{className:"w-32 h-32 mx-4 p-0",onClick:()=>{f(!g),t==="new"&&setTimeout(()=>Z(_()))},size:"large",children:e(h,{size:20,children:g?"heroicons-solid:archive":"heroicons-outline:archive"})})})})})]}),e("div",{className:"flex items-center",children:t==="new"?e(te,{className:"m-4 p-8",type:"submit",variant:"contained",color:"secondary",size:"small",onClick:D(Z),disabled:b.isEmpty(Q)||!Se,children:"Create"}):c(ee,{children:[e(z,{title:"Delete Note",placement:"bottom",children:e(w,{className:"w-32 h-32 mx-4 p-0",onClick:Le,size:"large",children:e(h,{size:20,children:"heroicons-outline:trash"})})}),e(te,{className:"m-4",onClick:a,variant:"text",children:"Close"})]})})]})]})}const ke=fe(Ct),kt=x.forwardRef(function(t,a){const{children:s,...l}=t;return e(Pe,{direction:"up",ref:a,...l,children:s})});function St(){const n=M(),t=A(Ne);return e(re,{classes:{paper:"w-full m-24"},TransitionComponent:kt,onClose:()=>n(ie()),open:!!t,children:e(ke,{onClose:()=>n(ie())})})}function Lt(){const[n,t]=x.useState(!1);function a(d){d.stopPropagation(),t(!0),document.addEventListener("keydown",l,!1)}function s(){n&&(t(!1),document.removeEventListener("keydown",l,!1))}function l(d){d.key==="Escape"&&s()}function i(d){const r=document.querySelector(".prevent-add-close");r&&r.contains(d.target)||s()}return e(_e,{className:"flex items-center w-full max-w-512 mt-8 mb-16 min-h-48 shadow shrink-0 cursor-text",children:n?e(de,{onClickAway:i,children:e("div",{className:"w-full",children:e(ke,{onClose:s,variant:"new"})})}):e(I,{className:"px-16 py-12 text-16 w-full",color:"text.secondary",onClick:a,children:"Take a note..."})})}const Y={1:{fontSize:14,lineHeight:19},2:{fontSize:18,lineHeight:28},3:{fontSize:24,lineHeight:36},4:{fontSize:36,lineHeight:48},5:{fontSize:48,lineHeight:60}},It=(n,t,a)=>{if(!t)return;if(!a){t.style.fontSize=null,t.style.lineHeight=null;return}t.style.fontSize="auto",t.style.lineHeight="auto";const s=t.clientWidth;if(s===0)return;const l=document.createElement("div");l.style.display="inline-block",l.style.fontSize="10px",l.style.fontWeight="600",l.style.lineHeight="10px",l.style.position="absolute",l.style.whiteSpace="pre-wrap",l.style.wordWrap="break-word",l.style.pointerEvents="none",l.style.visibility="hidden",document.body.appendChild(l);let i;const r=n.split(" ").map(D=>(l.textContent=D.toString(),l.clientWidth)),p=Math.max(...r),o=Math.floor(s*10/p);o<18?i=1:o>=18&&o<24?i=2:o>=24&&o<36?i=3:o>=36&&o<48?i=4:o>=48&&(i=5);let{lineHeight:y,fontSize:m}=Y[i];l.textContent=n,l.style.width=`${s}px`,l.style.fontSize=`${m}px`,l.style.lineHeight=`${y}px`;const N=l.clientHeight/y;N>4&&N<6?i=4:N>=6&&N<9?i=3:N>=9&&N<11?i=2:N>=11&&(i=1),document.body.removeChild(l),y=Y[i].lineHeight,m=Y[i].fontSize,t.style.fontSize=`${m}px`,t.style.lineHeight=`${y}px`};function Dt(n){const{note:t,className:a}=n,s=A(ve),l=M();return e(B.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.1}},children:c($e,{className:L("cursor-pointer",a),onClick:()=>l(lt(t.id)),children:[t.image&&t.image!==""&&e("img",{src:t.image,className:"w-full block",alt:"note"}),t.title&&t.title!==""&&e(I,{className:"px-20 my-16 text-14 font-semibold",children:t.title}),t.content&&t.content!==""&&e(I,{className:"px-20 my-16 ",component:"div",children:e("div",{className:L("w-full break-words",s?"font-500":"text-14"),ref:i=>{setTimeout(()=>It(t.content,i,!!s))},children:t.content})}),t.tasks&&t.tasks.length>0&&e("ul",{className:"px-20 my-16 flex flex-wrap list-reset",children:t.tasks.map(i=>c("li",{className:"flex items-center w-full",children:[e(h,{color:i.completed?"secondary":"disabled",size:20,children:"heroicons-outline:check-circle"}),e(I,{className:L("truncate mx-8",i.completed&&"line-through"),color:i.completed?"text.secondary":"inherit",children:i.content})]},i.id))}),(t.labels.length>0||t.reminder)&&c("div",{className:"px-20 my-16 flex flex-wrap w-full -mx-2",children:[t.reminder&&e(we,{className:"mt-4 mx-2 max-w-full",date:t.reminder}),t.labels.map(i=>e(Ce,{id:i,className:"mt-4 mx-2 max-w-full",linkable:!0},i))]})]})})}function Tt(){const n=ge(),{data:t}=ye(n),a=A(xe),[s,l]=x.useState([]);return x.useEffect(()=>{function i(){let d=t;return(a==null?void 0:a.length)===0||(d=ce.filterArrayByString(d,a)),d}(t==null?void 0:t.length)>0&&l(i())},[t,a,n]),!s||s.length===0?e("div",{className:"flex items-center justify-center h-full",children:e(I,{color:"text.secondary",variant:"h5",children:"There are no notes!"})}):e("div",{className:"flex flex-wrap w-full",children:e(Ue,{breakpointCols:{default:6,1920:5,1600:4,1366:3,1280:4,960:3,600:2,480:1},className:"my-masonry-grid flex w-full",columnClassName:"my-masonry-grid_column flex flex-col p-8",children:s.map(i=>e(Dt,{note:i,className:"w-full rounded-20 shadow mb-16"},i.id))})})}const zt=fe(Tt);function At(){const n=M(),t=A(xe);return e(B.div,{className:"flex flex-auto sm:flex-grow-0",initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:e(Ve,{className:"flex flex-1 items-center px-16 rounded-full h-40 w-full sm:max-w-256",placeholder:"Search note",fullWidth:!0,startAdornment:e(E,{position:"start",children:e(h,{color:"disabled",children:"heroicons-solid:search"})}),inputProps:{"aria-label":"Search"},value:t,onChange:a=>n(rt(a))})})}function Ft(n){const{onSetSidebarOpen:t}=n,a=M(),s=A(ve);return c("div",{className:"flex flex-col sm:flex-row flex-1 items-center justify-between p-8 sm:p-24 sm:px-32 relative",children:[c("div",{className:"flex shrink items-center sm:w-224 w-full",children:[e(Re,{lgUp:!0,children:e(w,{onClick:()=>t(!0),"aria-label":"open left sidebar",size:"large",children:e(h,{children:"heroicons-outline:menu"})})}),e("div",{className:"flex items-center",children:e(B.span,{initial:{x:-20},animate:{x:0,transition:{delay:.2}},children:e(I,{className:"text-24 md:text-32 font-extrabold tracking-tight leading-none",children:"Notes"})})})]}),c("div",{className:"flex flex-1 w-full sm:w-auto items-center justify-end space-x-12",children:[e(z,{title:"Toggle Variate Description Size",children:e(w,{onClick:()=>a(ct()),size:"large",children:e(h,{color:s?"action":"disabled",children:"heroicons-solid:switch-vertical"})})}),e(At,{})]})]})}const P=be(me)(({theme:n})=>({color:"inherit!important",textDecoration:"none!important",height:40,width:"100%",borderRadius:20,paddingLeft:16,paddingRight:16,marginBottom:8,fontWeight:500,"&.active":{backgroundColor:n.palette.mode==="light"?"rgba(0, 0, 0, .05)!important":"rgba(255, 255, 255, .1)!important",pointerEvents:"none","& .list-item-icon":{color:n.palette.secondary.main}},"& .list-item-icon":{marginRight:16}}));function Et(){const n=M(),{data:t,isLoading:a}=q();return a?null:e("div",{className:"px-16 py-24",children:e(B.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:c(H,{children:[c(P,{component:$,end:!0,to:"/apps/notes",activeClassName:"active",children:[e(h,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:pencil-alt"}),e(F,{className:"truncate",primary:"Notes",disableTypography:!0})]}),c(P,{component:$,to:"/apps/notes/reminders",activeClassName:"active",children:[e(h,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:bell"}),e(F,{className:"truncate",primary:"Reminders",disableTypography:!0})]}),c(P,{component:$,to:"/apps/notes/archive",activeClassName:"active",children:[e(h,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:archive"}),e(F,{className:"truncate",primary:"Archive",disableTypography:!0})]}),t.map(s=>c(P,{component:$,to:`/apps/notes/labels/${s.id}`,activeClassName:"active",children:[e(h,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:tag"}),e(F,{className:"truncate",primary:s.title,disableTypography:!0})]},s.id)),c(P,{onClick:()=>n(ot()),children:[e(h,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:pencil"}),e(F,{className:"truncate",primary:"Edit Labels",disableTypography:!0})]})]})})})}const Mt=be(Be)(()=>({"& .FusePageCarded-header":{},"& .FusePageCarded-sidebar":{},"& .FusePageCarded-leftSidebar":{}}));function jt(){const n=je(s=>s.breakpoints.down("lg")),[t,a]=x.useState(!n);return e(Mt,{header:e(Ft,{onSetSidebarOpen:a}),content:c("div",{className:"flex flex-col w-full items-center p-24",children:[c(He,{className:"w-full rounded-16 border p-12 flex flex-col items-center",sx:{backgroundColor:s=>s.palette.mode==="light"?ne(s.palette.background.default,.4):ne(s.palette.background.default,.02)},children:[e(Lt,{}),e(zt,{})]}),e(St,{}),e(mt,{})]}),leftSidebarOpen:t,leftSidebarOnClose:()=>{a(!1)},leftSidebarContent:e(Et,{}),scroll:n?"normal":"content"})}export{jt as default};
