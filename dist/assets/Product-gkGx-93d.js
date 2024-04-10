import{aJ as V,bu as v,aa as U,bv as q,d as i,j as e,T as I,aL as $,F as T,ak as w,aq as P,aN as S,a5 as F,aT as l,b5 as o,bw as W,b8 as N,s as z,bx as G,ae as Q,av as A,aC as H,b4 as K,b1 as j,aI as O,r as C,b2 as J,by as Y,b3 as _,al as D,ad as X,af as y}from"./index-Xp4oWIO1.js";import{F as Z}from"./FusePageCarded-q5wIVHG8.js";import{u as ee,a as te,b as ae,c as ne,P as re}from"./ECommerceApi-yno1HWx9.js";function ie(){var k;const r=V(),{productId:a}=r,[t]=ee(),[c]=te(),[s]=ae(),d=v(),{formState:n,watch:m,getValues:b}=d,{isValid:u,dirtyFields:g}=n,x=U(),p=q(),{name:h,images:f,featuredImageId:E}=m();function R(){c(b())}function B(){t(b()).unwrap().then(M=>{p(`/apps/e-commerce/products/${M.id}`)})}function L(){s(a),p("/apps/e-commerce/products")}return i("div",{className:"flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-24 sm:py-32 px-24 md:px-32",children:[i("div",{className:"flex flex-col items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0",children:[e(w.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:i(I,{className:"flex items-center sm:mb-12",component:$,role:"button",to:"/apps/e-commerce/products",color:"inherit",children:[e(T,{size:20,children:x.direction==="ltr"?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),e("span",{className:"flex mx-4 font-medium",children:"Products"})]})}),i("div",{className:"flex items-center max-w-full",children:[e(w.div,{className:"hidden sm:flex",initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:f&&f.length>0&&E?e("img",{className:"w-32 sm:w-48 rounded",src:(k=P.find(f,{id:E}))==null?void 0:k.url,alt:h}):e("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/apps/ecommerce/product-image-placeholder.png",alt:h})}),i(w.div,{className:"flex flex-col min-w-0 mx-8 sm:mx-16",initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[e(I,{className:"text-16 sm:text-20 truncate font-semibold",children:h||"New Product"}),e(I,{variant:"caption",className:"font-medium",children:"Product Detail"})]})]})]}),e(w.div,{className:"flex flex-1 w-full",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:a!=="new"?i(S,{children:[e(F,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:L,startIcon:e(T,{className:"hidden sm:flex",children:"heroicons-outline:trash"}),children:"Remove"}),e(F,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:P.isEmpty(g)||!u,onClick:R,children:"Save"})]}):e(F,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:P.isEmpty(g)||!u,onClick:B,children:"Add"})})]})}function oe(){const r=v(),{control:a,formState:t}=r,{errors:c}=t;return i("div",{children:[e(o,{name:"name",control:a,render:({field:s})=>{var d;return e(l,{...s,className:"mt-8 mb-16",required:!0,label:"Name",autoFocus:!0,id:"name",variant:"outlined",fullWidth:!0,error:!!c.name,helperText:(d=c==null?void 0:c.name)==null?void 0:d.message})}}),e(o,{name:"description",control:a,render:({field:s})=>e(l,{...s,className:"mt-8 mb-16",id:"description",label:"Description",type:"text",multiline:!0,rows:5,variant:"outlined",fullWidth:!0})}),e(o,{name:"categories",control:a,defaultValue:[],render:({field:{onChange:s,value:d}})=>e(W,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:[],value:d,onChange:(n,m)=>{s(m)},renderInput:n=>e(l,{...n,placeholder:"Select multiple categories",label:"Categories",variant:"outlined",InputLabelProps:{shrink:!0}})})}),e(o,{name:"tags",control:a,defaultValue:[],render:({field:{onChange:s,value:d}})=>e(W,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:[],value:d,onChange:(n,m)=>{s(m)},renderInput:n=>e(l,{...n,placeholder:"Select multiple tags",label:"Tags",variant:"outlined",InputLabelProps:{shrink:!0}})})})]})}function se(){const r=v(),{control:a}=r;return i("div",{children:[e(o,{name:"sku",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",required:!0,label:"SKU",autoFocus:!0,id:"sku",variant:"outlined",fullWidth:!0})}),e(o,{name:"quantity",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",label:"Quantity",id:"quantity",variant:"outlined",type:"number",fullWidth:!0})})]})}function le(){const r=v(),{control:a}=r;return i("div",{children:[e(o,{name:"priceTaxExcl",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",label:"Tax Excluded Price",id:"priceTaxExcl",InputProps:{startAdornment:e(N,{position:"start",children:"$"})},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0})}),e(o,{name:"priceTaxIncl",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",label:"Tax Included Price",id:"priceTaxIncl",InputProps:{startAdornment:e(N,{position:"start",children:"$"})},type:"number",variant:"outlined",fullWidth:!0})}),e(o,{name:"taxRate",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",label:"Tax Rate",id:"taxRate",InputProps:{startAdornment:e(N,{position:"start",children:"$"})},type:"number",variant:"outlined",fullWidth:!0})}),e(o,{name:"comparedPrice",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",label:"Compared Price",id:"comparedPrice",InputProps:{startAdornment:e(N,{position:"start",children:"$"})},type:"number",variant:"outlined",fullWidth:!0,helperText:"Add a compare price to show next to the real price"})})]})}const ce=z("div")(({theme:r})=>({"& .productImageFeaturedStar":{position:"absolute",top:0,right:0,color:G[400],opacity:0},"& .productImageUpload":{transitionProperty:"box-shadow",transitionDuration:r.transitions.duration.short,transitionTimingFunction:r.transitions.easing.easeInOut},"& .productImageItem":{transitionProperty:"box-shadow",transitionDuration:r.transitions.duration.short,transitionTimingFunction:r.transitions.easing.easeInOut,"&:hover":{"& .productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:r.shadows[3],"& .productImageFeaturedStar":{opacity:1},"&:hover .productImageFeaturedStar":{opacity:1}}}}));function de(){const r=v(),{control:a,watch:t}=r,c=t("images");return e(ce,{children:i("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-16",children:[e(o,{name:"images",control:a,render:({field:{onChange:s,value:d}})=>i(Q,{sx:{backgroundColor:n=>n.palette.mode==="light"?A(n.palette.background.default,.4):A(n.palette.background.default,.02)},component:"label",htmlFor:"button-file",className:"productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg",children:[e("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:async n=>{function m(){return new Promise((u,g)=>{var h,f;const x=(f=(h=n==null?void 0:n.target)==null?void 0:h.files)==null?void 0:f[0];if(!x)return;const p=new FileReader;p.onload=()=>{u({id:K.generateGUID(),url:`data:${x.type};base64,${btoa(p.result)}`,type:"image"})},p.onerror=g,p.readAsBinaryString(x)})}const b=await m();s([b,...d])}}),e(T,{size:32,color:"action",children:"heroicons-outline:upload"})]})}),e(o,{name:"featuredImageId",control:a,defaultValue:"",render:({field:{onChange:s,value:d}})=>e(S,{children:c.map(n=>i("div",{onClick:()=>s(n.id),onKeyDown:()=>s(n.id),role:"button",tabIndex:0,className:H("productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",n.id===d&&"featured"),children:[e(T,{className:"productImageFeaturedStar",children:"heroicons-solid:star"}),e("img",{className:"max-w-none w-auto h-full",src:n.url,alt:"product"})]},n.id))})})]})})}function me(){const r=v(),{control:a}=r;return i("div",{children:[i("div",{className:"flex -mx-4",children:[e(o,{name:"width",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16 mx-4",label:"Width",autoFocus:!0,id:"width",variant:"outlined",fullWidth:!0})}),e(o,{name:"height",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16 mx-4",label:"Height",id:"height",variant:"outlined",fullWidth:!0})}),e(o,{name:"depth",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16 mx-4",label:"Depth",id:"depth",variant:"outlined",fullWidth:!0})})]}),e(o,{name:"weight",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",label:"Weight",id:"weight",variant:"outlined",fullWidth:!0})}),e(o,{name:"extraShippingFee",control:a,render:({field:t})=>e(l,{...t,className:"mt-8 mb-16",label:"Extra Shipping Fee",id:"extraShippingFee",variant:"outlined",InputProps:{startAdornment:e(N,{position:"start",children:"$"})},fullWidth:!0})})]})}const ue=j.object({name:j.string().nonempty("You must enter a product name").min(5,"The product name must be at least 5 characters")});function be(){const r=O(h=>h.breakpoints.down("lg")),a=V(),{productId:t}=a,{data:c,isLoading:s,isError:d}=ne(t,{skip:!t||t==="new"}),[n,m]=C.useState(0),b=J({mode:"onChange",defaultValues:{},resolver:_(ue)}),{reset:u,watch:g}=b,x=g();C.useEffect(()=>{t==="new"&&u(re({}))},[t,u]),C.useEffect(()=>{c&&u({...c})},[c,u]);function p(h,f){m(f)}return s?e(D,{}):d&&t!=="new"?i(w.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[e(I,{color:"text.secondary",variant:"h5",children:"There is no such product!"}),e(F,{className:"mt-24",component:$,variant:"outlined",to:"/apps/e-commerce/products",color:"inherit",children:"Go to Products Page"})]}):P.isEmpty(x)||c&&a.productId!==c.id&&a.productId!=="new"?e(D,{}):e(Y,{...b,children:e(Z,{header:e(ie,{}),content:i(S,{children:[i(X,{value:n,onChange:p,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:[e(y,{className:"h-64",label:"Basic Info"}),e(y,{className:"h-64",label:"Product Images"}),e(y,{className:"h-64",label:"Pricing"}),e(y,{className:"h-64",label:"Inventory"}),e(y,{className:"h-64",label:"Shipping"})]}),i("div",{className:"p-16 sm:p-24 max-w-3xl",children:[e("div",{className:n!==0?"hidden":"",children:e(oe,{})}),e("div",{className:n!==1?"hidden":"",children:e(de,{})}),e("div",{className:n!==2?"hidden":"",children:e(le,{})}),e("div",{className:n!==3?"hidden":"",children:e(se,{})}),e("div",{className:n!==4?"hidden":"",children:e(me,{})})]})]}),scroll:r?"normal":"content"})})}export{be as default};
