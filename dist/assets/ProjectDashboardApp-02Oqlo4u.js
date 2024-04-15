import{a8 as F,am as A,a as _,an as M,r as x,j as e,al as b,d as l,ao as U,ap as V,T as a,F as f,a5 as I,aq as O,ar as $,as as q,at as G,au as C,ai as v,aa as L,ad as E,ae as k,af as W,av as w,g as H,h as Y,k as Q,e as X,ak as g,ah as J,s as K,n as Z}from"./index-vK4JFSwY.js";import{_ as D}from"./react-apexcharts.min-sN5RcLSf.js";import{T as ee,a as te,b as R,c as z,d as le}from"./TableRow-jW4sBiM3.js";const ae=["project_dashboard_widgets","project_dashboard_projects"],B=F.enhanceEndpoints({addTagTypes:ae}).injectEndpoints({endpoints:t=>({getProjectDashboardWidgets:t.query({query:()=>({url:"/mock-api/dashboards/project/widgets"}),providesTags:["project_dashboard_widgets"]}),getProjectDashboardProjects:t.query({query:()=>({url:"/mock-api/dashboards/project/projects"}),providesTags:["project_dashboard_projects"]})}),overrideExisting:!1}),{useGetProjectDashboardWidgetsQuery:N,useGetProjectDashboardProjectsQuery:se}=B;A(B.endpoints.getProjectDashboardWidgets.select(),t=>t.data);function ne(){var o,d,p,S;const{data:t,isLoading:s}=se(),n=_(M),[i,m]=x.useState({id:1,menuEl:null});function c(u){m({id:u,menuEl:null})}function h(u){m({id:i.id,menuEl:u.currentTarget})}function r(){m({id:i.id,menuEl:null})}return s?e(b,{}):l("div",{className:"flex flex-col w-full px-24 sm:px-32",children:[l("div",{className:"flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48",children:[l("div",{className:"flex flex-auto items-center min-w-0",children:[e(V,{sx:{background:u=>U(u.palette.background.default,.05),color:u=>u.palette.text.secondary},className:"flex-0 w-64 h-64",alt:"user photo",src:(o=n==null?void 0:n.data)==null?void 0:o.photoURL,children:(p=(d=n==null?void 0:n.data)==null?void 0:d.displayName)==null?void 0:p[0]}),l("div",{className:"flex flex-col min-w-0 mx-16",children:[e(a,{className:"text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate",children:`Welcome back, ${n.data.displayName}!`}),l("div",{className:"flex items-center",children:[e(f,{size:20,color:"action",children:"heroicons-solid:bell"}),e(a,{className:"mx-6 leading-6 truncate",color:"text.secondary",children:"You have 2 new messages and 15 new tasks (CONTENIDO ESTATICO)"})]})]})]}),l("div",{className:"flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12",children:[e(I,{className:"whitespace-nowrap",variant:"contained",color:"primary",startIcon:e(f,{size:20,children:"heroicons-solid:mail"}),children:"Messages"}),e(I,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:e(f,{size:20,children:"heroicons-solid:cog"}),children:"Settings"})]})]}),l("div",{className:"flex items-center",children:[e(I,{onClick:h,className:"flex items-center border border-solid border-b-0 rounded-t-xl rounded-b-0 h-40 px-16 text-13 sm:text-16",sx:{backgroundColor:u=>u.palette.background.default,borderColor:u=>u.palette.divider},endIcon:e(f,{size:20,color:"action",children:"heroicons-solid:chevron-down"}),children:(S=O.find(t,["id",i.id]))==null?void 0:S.name}),e(q,{id:"project-menu",anchorEl:i.menuEl,open:!!i.menuEl,onClose:r,children:t&&t.map(u=>e($,{onClick:()=>{c(u.id)},children:u.name},u.id))})]})]})}function ie(){const{data:t,isLoading:s}=N(),n=t==null?void 0:t.summary;if(s)return e(b,{});if(!n)return null;const{data:i,ranges:m,currentRange:c}=n,[h,r]=x.useState(c);function o(d){r(d.target.value)}return l(v,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex items-center justify-between px-8 pt-12",children:[e(G,{className:"mx-16",classes:{select:"py-0 flex items-center"},value:h,onChange:o,inputProps:{name:"currentRange"},variant:"filled",size:"small",children:Object.entries(m).map(([d,p])=>e($,{value:d,children:p},d))}),e(C,{"aria-label":"more",size:"large",children:e(f,{children:"heroicons-outline:dots-vertical"})})]}),l("div",{className:"text-center mt-8",children:[e(a,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-blue-500",children:i.count[h]}),e(a,{className:"text-lg font-medium text-blue-600 dark:text-blue-500",children:i.name})]}),l(a,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[e("span",{className:"truncate",children:i.extra.name}),":",e("b",{className:"px-8",children:i.extra.count[h]})]})]})}const re=x.memo(ie);function oe(){const{data:t,isLoading:s}=N(),n=t==null?void 0:t.overdue;if(s)return e(b,{});if(!n)return null;const{data:i,title:m}=n;return l(v,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex items-center justify-between px-8 pt-12",children:[e(a,{className:"px-16 text-lg font-medium tracking-tight leading-6 truncate",color:"text.secondary",children:m}),e(C,{"aria-label":"more",size:"large",children:e(f,{children:"heroicons-outline:dots-vertical"})})]}),l("div",{className:"text-center mt-8",children:[e(a,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-red-500",children:String(i.count)}),e(a,{className:"text-lg font-medium text-red-600",children:i.name})]}),l(a,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[e("span",{className:"truncate",children:i.extra.name}),":",e("b",{className:"px-8",children:String(i.extra.count)})]})]})}const ce=x.memo(oe);function de(){const{data:t,isLoading:s}=N(),n=t==null?void 0:t.issues;if(s)return e(b,{});if(!n)return null;const{data:i,title:m}=n;return l(v,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex items-center justify-between px-8 pt-12",children:[e(a,{className:"px-16 text-lg font-medium tracking-tight leading-6 truncate",color:"text.secondary",children:m}),e(C,{"aria-label":"more",size:"large",children:e(f,{children:"heroicons-outline:dots-vertical"})})]}),l("div",{className:"text-center mt-8",children:[e(a,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-amber-500",children:String(i.count)}),e(a,{className:"text-lg font-medium text-amber-600",children:i.name})]}),l(a,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[e("span",{className:"truncate",children:i.extra.name}),":",e("b",{className:"px-8",children:String(i.extra.count)})]})]})}const me=x.memo(de);function he(){const{data:t,isLoading:s}=N();if(s)return e(b,{});const n=t==null?void 0:t.features;if(!n)return null;const{data:i,title:m}=n;return l(v,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex items-center justify-between px-8 pt-12",children:[e(a,{className:"px-16 text-lg font-medium tracking-tight leading-6 truncate",color:"text.secondary",children:m}),e(C,{"aria-label":"more",size:"large",children:e(f,{children:"heroicons-outline:dots-vertical"})})]}),l("div",{className:"text-center mt-8",children:[e(a,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-green-500",children:String(i.count)}),e(a,{className:"text-lg font-medium text-green-600",children:i.name})]}),l(a,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[e("span",{className:"truncate",children:i.extra.name}),":",e("b",{className:"px-8",children:String(i.extra.count)})]})]})}const ue=x.memo(he);function xe(){const t=L(),[s,n]=x.useState(!0),[i,m]=x.useState(0),{data:c,isLoading:h}=N();if(h)return e(b,{});const r=c==null?void 0:c.githubIssues;if(!r)return null;const{overview:o,series:d,ranges:p,labels:S}=r,u=Object.keys(p)[i],T={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:[t.palette.primary.main,t.palette.secondary.main],labels:S,dataLabels:{enabled:!0,enabledOnSeries:[0],background:{borderWidth:0}},grid:{borderColor:t.palette.divider},legend:{show:!1},plotOptions:{bar:{columnWidth:"50%"}},states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:[3,0]},tooltip:{followCursor:!0,theme:t.palette.mode},xaxis:{axisBorder:{show:!1},axisTicks:{color:t.palette.divider},labels:{style:{colors:t.palette.text.secondary}},tooltip:{enabled:!1}},yaxis:{labels:{offsetX:-16,style:{colors:t.palette.text.secondary}}}};return x.useEffect(()=>{n(!1)},[]),s?null:l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[e(a,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Github Issues Summary"}),e("div",{className:"mt-12 sm:mt-0 sm:ml-8",children:e(E,{value:i,onChange:(y,j)=>m(j),indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"-mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:e(k,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:Object.entries(p).map(([y,j])=>e(W,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:j},y))})})]}),l("div",{className:"grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-24 w-full mt-32 sm:mt-16",children:[l("div",{className:"flex flex-col flex-auto",children:[e(a,{className:"font-medium",color:"text.secondary",children:"New vs. Closed"}),e("div",{className:"flex flex-col flex-auto",children:e(D,{className:"flex-auto w-full",options:T,series:d[u],height:320})})]}),l("div",{className:"flex flex-col",children:[e(a,{className:"font-medium",color:"text.secondary",children:"Overview"}),l("div",{className:"flex-auto grid grid-cols-4 gap-16 mt-24",children:[l("div",{className:"col-span-2 flex flex-col items-center justify-center py-32 px-4 rounded-2xl bg-indigo-50 text-indigo-800",children:[e(a,{className:"text-5xl sm:text-7xl font-semibold leading-none tracking-tight",children:o[u]["new-issues"]}),e(a,{className:"mt-4 text-sm sm:text-lg font-medium",children:"New Issues"})]}),l("div",{className:"col-span-2 flex flex-col items-center justify-center py-32 px-4 rounded-2xl bg-green-50 text-green-800",children:[e(a,{className:"text-5xl sm:text-7xl font-semibold leading-none tracking-tight",children:o[u]["closed-issues"]}),e(a,{className:"mt-4 text-sm sm:text-lg font-medium",children:"Closed"})]}),l(k,{sx:{backgroundColor:y=>y.palette.mode==="light"?w(t.palette.background.default,.4):w(t.palette.background.default,.02)},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[e(a,{className:"text-5xl font-semibold leading-none tracking-tight",children:o[u].fixed}),e(a,{className:"mt-4 text-sm font-medium text-center",children:"Fixed"})]}),l(k,{sx:{backgroundColor:y=>y.palette.mode==="light"?w(t.palette.background.default,.4):w(t.palette.background.default,.02)},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[e(a,{className:"text-5xl font-semibold leading-none tracking-tight",children:o[u]["wont-fix"]}),e(a,{className:"mt-4 text-sm font-medium text-center",children:"Won't Fix"})]}),l(k,{sx:{backgroundColor:y=>y.palette.mode==="light"?w(t.palette.background.default,.4):w(t.palette.background.default,.02)},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[e(a,{className:"text-5xl font-semibold leading-none tracking-tight",children:o[u]["re-opened"]}),e(a,{className:"mt-4 text-sm font-medium text-center",children:"Re-opened"})]}),l(k,{sx:{backgroundColor:y=>y.palette.mode==="light"?w(t.palette.background.default,.4):w(t.palette.background.default,.02)},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[e(a,{className:"text-5xl font-semibold leading-none tracking-tight",children:o[u]["needs-triage"]}),e(a,{className:"mt-4 text-sm font-medium text-center",children:"Needs Triage"})]})]})]})]})]})}const fe=x.memo(xe);function ge(){var y;const{data:t,isLoading:s}=N(),n=t==null?void 0:t.taskDistribution;if(s)return e(b,{});if(!n)return null;const{overview:i,series:m,labels:c,ranges:h}=n,[r,o]=x.useState(0),d=Object.keys(h)[r],[p,S]=x.useState(!0),u=L(),T={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"polarArea",toolbar:{show:!1},zoom:{enabled:!1}},labels:c,legend:{position:"bottom"},plotOptions:{polarArea:{spokes:{connectorColors:u.palette.divider},rings:{strokeColor:u.palette.divider}}},states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:2},theme:{monochrome:{enabled:!0,color:u.palette.secondary.main,shadeIntensity:.75,shadeTo:"dark"}},tooltip:{followCursor:!0,theme:"dark"},yaxis:{labels:{style:{colors:u.palette.text.secondary}}}};return x.useEffect(()=>{S(!1)},[]),p?null:l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full",children:[l("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[e(a,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Task Distribution"}),e("div",{className:"mt-3 sm:mt-0 sm:ml-2",children:e(E,{value:r,onChange:(j,P)=>o(P),indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"-mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:e(k,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:Object.entries(h).map(([j,P])=>e(W,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:P},j))})})]}),e("div",{className:"flex flex-col flex-auto mt-6",children:e(D,{className:"flex-auto w-full",options:T,series:m[d],type:(y=T==null?void 0:T.chart)==null?void 0:y.type})}),l(k,{sx:{backgroundColor:j=>j.palette.mode==="light"?w(u.palette.background.default,.4):w(u.palette.background.default,.02)},className:"grid grid-cols-2 border-t divide-x -m-24 mt-16",children:[l("div",{className:"flex flex-col items-center justify-center p-24 sm:p-32",children:[e("div",{className:"text-5xl font-semibold leading-none tracking-tighter",children:i[d].new}),e(a,{className:"mt-4 text-center text-secondary",children:"New tasks"})]}),l("div",{className:"flex flex-col items-center justify-center p-6 sm:p-8",children:[e("div",{className:"text-5xl font-semibold leading-none tracking-tighter",children:i[d].completed}),e(a,{className:"mt-4 text-center text-secondary",children:"Completed tasks"})]})]})]})}const pe=x.memo(ge);function be(){const{data:t,isLoading:s}=N(),n=t==null?void 0:t.schedule;if(s)return e(b,{});if(!n)return null;const{series:i,ranges:m}=n,[c,h]=x.useState(0),r=Object.keys(m)[c];return l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full",children:[l("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[e(a,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Schedule"}),e("div",{className:"mt-12 sm:mt-0 sm:ml-8",children:e(E,{value:c,onChange:(o,d)=>h(d),indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"-mx-16 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:e(k,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:Object.entries(m).map(([o,d])=>e(W,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:d},o))})})]}),e(X,{className:"py-0 mt-8 divide-y",children:i[r].map((o,d)=>l(H,{className:"px-0",children:[e(Y,{classes:{root:"px-8",primary:"font-medium"},primary:o.title,secondary:l("span",{className:"flex flex-col sm:flex-row sm:items-center -ml-2 mt-8 sm:mt-4 space-y-4 sm:space-y-0 sm:space-x-12",children:[o.time&&l("span",{className:"flex items-center",children:[e(f,{size:20,color:"disabled",children:"heroicons-solid:clock"}),e(a,{component:"span",className:"mx-6 text-md",color:"text.secondary",children:o.time})]}),o.location&&l("span",{className:"flex items-center",children:[e(f,{size:20,color:"disabled",children:"heroicons-solid:location-marker"}),e(a,{component:"span",className:"mx-6 text-md",color:"text.secondary",children:o.location})]})]})}),e(Q,{children:e(C,{"aria-label":"more",size:"large",children:e(f,{children:"heroicons-solid:chevron-right"})})})]},d))})]})}const Ne=x.memo(be);function ye(){const t={show:{transition:{staggerChildren:.04}}},s={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return l(g.div,{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24",variants:t,initial:"hidden",animate:"show",children:[e(g.div,{variants:s,children:e(re,{})}),e(g.div,{variants:s,children:e(ce,{})}),e(g.div,{variants:s,children:e(me,{})}),e(g.div,{variants:s,children:e(ue,{})}),e(g.div,{variants:s,className:"sm:col-span-2 md:col-span-4",children:e(fe,{})}),e(g.div,{variants:s,className:"sm:col-span-2 md:col-span-4 lg:col-span-2",children:e(pe,{})}),e(g.div,{variants:s,className:"sm:col-span-2 md:col-span-4 lg:col-span-2",children:e(Ne,{})})]})}function ve(){const{data:t,isLoading:s}=N();if(s)return e(b,{});const n=t==null?void 0:t.teamMembers;if(!n)return null;const i={show:{transition:{staggerChildren:.04}}},m={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return e(g.div,{variants:i,initial:"hidden",animate:"show",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 w-full min-w-0",children:n.map(c=>l(v,{component:g.div,variants:m,className:"flex flex-col flex-auto items-center shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex flex-col flex-auto w-full p-32 text-center",children:[e("div",{className:"w-128 h-128 mx-auto rounded-full overflow-hidden",children:e("img",{className:"w-full h-full object-cover",src:c.avatar,alt:"member"})}),e(a,{className:"mt-24 font-medium",children:c.name}),e(a,{color:"text.secondary",children:c.title})]}),l("div",{className:"flex items-center w-full border-t divide-x",children:[l("a",{className:"flex flex-auto items-center justify-center py-16 hover:bg-hover",href:`mailto:${c.email}`,role:"button",children:[e(f,{size:20,color:"action",children:"heroicons-solid:mail"}),e(a,{className:"ml-8",children:"Email"})]}),l("a",{className:"flex flex-auto items-center justify-center py-16 hover:bg-hover",href:`tel${c.phone}`,role:"button",children:[e(f,{size:20,color:"action",children:"heroicons-solid:phone"}),e(a,{className:"ml-8",children:"Call"})]})]})]},c.id))})}const we=x.memo(ve);function ke(){const t={show:{transition:{staggerChildren:.04}}},s={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return e(g.div,{className:"flex flex-wrap p-24",variants:t,initial:"hidden",animate:"show",children:e(g.div,{variants:s,className:"widget flex w-full",children:e(we,{})})})}function je(){var r,o;const{data:t,isLoading:s}=N();if(s)return e(b,{});const n=t==null?void 0:t.budgetDistribution;if(!n)return null;const{categories:i,series:m}=n,c=L(),h={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"radar",sparkline:{enabled:!0}},colors:[c.palette.secondary.main],dataLabels:{enabled:!0,formatter:d=>`${d}%`,textAnchor:"start",style:{fontSize:"13px",fontWeight:500},background:{borderWidth:0,padding:4},offsetY:-15},markers:{strokeColors:c.palette.primary.main,strokeWidth:4},plotOptions:{radar:{polygons:{strokeColors:c.palette.divider,connectorColors:c.palette.divider}}},stroke:{width:2},tooltip:{theme:"dark",y:{formatter:d=>`${d}%`}},xaxis:{labels:{show:!0,style:{fontSize:"12px",fontWeight:"500"}},categories:i},yaxis:{max:d=>parseInt((d+10).toFixed(0),10),tickAmount:7}};return l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full",children:[e(a,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Budget Distribution"}),e("div",{className:"flex flex-col flex-auto",children:e(D,{className:"flex-auto w-full h-320",options:h,series:m,type:(r=h==null?void 0:h.chart)==null?void 0:r.type,height:(o=h==null?void 0:h.chart)==null?void 0:o.height})})]})}const Ce=x.memo(je);function Se(){var o,d;const{data:t,isLoading:s}=N();if(s)return e(b,{});const n=t==null?void 0:t.weeklyExpenses;if(!n)return null;const{amount:i,series:m,labels:c}=n,h=L(),r={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:[h.palette.secondary.main],stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:c},yaxis:{labels:{formatter:p=>`$${p}`}}};return l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex items-start justify-between",children:[e("div",{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Weekly Expenses"}),e("div",{className:"ml-8 -mt-8 -mr-12",children:e(C,{children:e(f,{size:20,children:"heroicons-solid:dots-vertical"})})})]}),l("div",{className:"flex items-center mt-4",children:[l("div",{className:"flex flex-col",children:[e("div",{className:"text-3xl font-semibold tracking-tight leading-tight",children:i.toLocaleString("en-US",{style:"currency",currency:"USD"})}),l("div",{className:"flex items-center",children:[e(f,{className:"mr-4 text-green-500",size:20,children:"heroicons-solid:trending-down"}),l(a,{className:"font-medium text-sm text-secondary leading-none whitespace-nowrap",children:[e("span",{className:"text-green-500",children:"2%"}),e("span",{children:" below projected"})]})]})]}),e("div",{className:"flex flex-col flex-auto ml-32",children:e(D,{className:"flex-auto w-full h-64",options:r,series:m,type:(o=r==null?void 0:r.chart)==null?void 0:o.type,height:(d=r==null?void 0:r.chart)==null?void 0:d.height})})]})]})}function Te(){var o,d;const{data:t,isLoading:s}=N();if(s)return e(b,{});const n=t==null?void 0:t.monthlyExpenses;if(!n)return null;const{amount:i,series:m,labels:c}=n,h=L(),r={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:[h.palette.success.main],stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:c},yaxis:{labels:{formatter:p=>`$${p}`}}};return l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex items-start justify-between",children:[e("div",{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Monthly Expenses"}),e("div",{className:"ml-8 -mt-8 -mr-12",children:e(C,{children:e(f,{size:20,children:"heroicons-solid:dots-vertical"})})})]}),l("div",{className:"flex items-center mt-4",children:[l("div",{className:"flex flex-col",children:[e("div",{className:"text-3xl font-semibold tracking-tight leading-tight",children:i.toLocaleString("en-US",{style:"currency",currency:"USD"})}),l("div",{className:"flex items-center",children:[e(f,{className:"mr-4 text-red-500",size:20,children:"heroicons-solid:trending-up"}),l(a,{className:"font-medium text-sm text-secondary leading-none whitespace-nowrap",children:[e("span",{className:"text-red-500",children:"2%"}),e("span",{children:" above projected"})]})]})]}),e("div",{className:"flex flex-col flex-auto ml-32",children:e(D,{className:"flex-auto w-full h-64",options:r,series:m,type:(o=r==null?void 0:r.chart)==null?void 0:o.type,height:(d=r==null?void 0:r.chart)==null?void 0:d.height})})]})]})}function We(){var o,d;const{data:t,isLoading:s}=N();if(s)return e(b,{});const n=t==null?void 0:t.yearlyExpenses;if(!n)return null;const{amount:i,series:m,labels:c}=n,h=L(),r={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:[h.palette.error.main],stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:c},yaxis:{labels:{formatter:p=>`$${p}`}}};return l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[l("div",{className:"flex items-start justify-between",children:[e("div",{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Yearly Expenses"}),e("div",{className:"ml-8 -mt-8 -mr-12",children:e(C,{children:e(f,{size:20,children:"heroicons-solid:dots-vertical"})})})]}),l("div",{className:"flex items-center mt-4",children:[l("div",{className:"flex flex-col",children:[e("div",{className:"text-3xl font-semibold tracking-tight leading-tight",children:i.toLocaleString("en-US",{style:"currency",currency:"USD"})}),l("div",{className:"flex items-center",children:[e(f,{className:"mr-4 text-red-500",size:20,children:"heroicons-solid:trending-up"}),l(a,{className:"font-medium text-sm text-secondary leading-none whitespace-nowrap",children:[e("span",{className:"text-red-500",children:"2%"}),e("span",{children:" above projected"})]})]})]}),e("div",{className:"flex flex-col flex-auto ml-32",children:e(D,{className:"flex-auto w-full h-64",options:r,series:m,type:(o=r==null?void 0:r.chart)==null?void 0:o.type,height:(d=r==null?void 0:r.chart)==null?void 0:d.height})})]})]})}function Le(){const{data:t,isLoading:s}=N();if(s)return e(b,{});const n=t==null?void 0:t.budgetDetails;if(!n)return null;const{columns:i,rows:m}=n;return l(v,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[e(a,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Budget Details"}),e("div",{className:"table-responsive",children:l(ee,{className:"w-full min-w-full",children:[e(te,{children:e(R,{children:i.map((c,h)=>e(z,{children:e(a,{color:"text.secondary",className:"font-semibold text-12 whitespace-nowrap",children:c})},h))})}),e(le,{children:m.map((c,h)=>e(R,{children:Object.entries(c).map(([r,o])=>{switch(r){case"type":return e(z,{component:"th",scope:"row",children:e(J,{size:"small",label:o})},r);case"total":case"expensesAmount":case"remainingAmount":return e(z,{component:"th",scope:"row",children:e(a,{children:o.toLocaleString("en-US",{style:"currency",currency:"USD"})})},r);case"expensesPercentage":case"remainingPercentage":return e(z,{component:"th",scope:"row",children:e(a,{children:`${o}%`})},r);default:return e(z,{component:"th",scope:"row",children:e(a,{children:o})},r)}})},h))})]})})]})}const De=x.memo(Le);function ze(){const t={show:{transition:{staggerChildren:.04}}},s={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return l(g.div,{className:"grid grid-cols-1 sm:grid-cols-6 gap-24 w-full min-w-0 p-24",variants:t,initial:"hidden",animate:"show",children:[e(g.div,{variants:s,className:"sm:col-span-3 lg:col-span-4",children:e(Ce,{})}),l("div",{className:"sm:col-span-3 lg:col-span-2 grid grid-cols-1 gap-y-24",children:[e(g.div,{variants:s,className:"sm:col-span-2",children:e(Se,{})}),e(g.div,{variants:s,className:"sm:col-span-2",children:e(Te,{})}),e(g.div,{variants:s,className:"sm:col-span-2",children:e(We,{})})]}),e(g.div,{variants:s,className:"sm:col-span-6",children:e(De,{})})]})}const Ee=K(Z)(({theme:t})=>({"& .FusePageSimple-header":{backgroundColor:t.palette.background.paper,boxShadow:`inset 0 0 0 1px  ${t.palette.divider}`}}));function $e(){const{isLoading:t}=N(),[s,n]=x.useState(0);function i(m,c){n(c)}return t?e(b,{}):e(Ee,{header:e(ne,{}),content:l("div",{className:"w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0",children:[l(E,{value:s,onChange:i,indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"w-full px-24 -mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:e(k,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:[e(W,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:"Home"}),e(W,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:"Budget"}),e(W,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:"Team"})]}),s===0&&e(ye,{}),s===1&&e(ze,{}),s===2&&e(ke,{})]})})}export{$e as default};
