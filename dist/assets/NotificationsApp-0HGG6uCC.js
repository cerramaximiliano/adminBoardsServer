import{a8 as u,d as l,aC as p,bp as h,j as i,F as d,ae as N,T as c,cQ as x,au as g,aQ as y,r as v,d1 as w,d2 as k,a5 as m,d3 as b,n as C,al as T}from"./index-zleXRKEz.js";import{M as A}from"./react-masonry-css.module-UFP26MNc.js";const E=["notifications","notification"],D=u.enhanceEndpoints({addTagTypes:E}).injectEndpoints({endpoints:t=>({getAllNotifications:t.query({query:()=>({url:"/mock-api/notifications"}),providesTags:["notifications"]}),createNotification:t.mutation({query:e=>({url:"/mock-api/notifications",method:"POST",data:e}),invalidatesTags:["notifications"]}),deleteAllNotifications:t.mutation({query:()=>({url:"/mock-api/notifications",method:"DELETE"}),invalidatesTags:["notifications"]}),getNotification:t.query({query:e=>({url:`/mock-api/notifications/${e}`}),providesTags:["notification"]}),deleteNotification:t.mutation({query:e=>({url:`/mock-api/notifications/${e}`,method:"DELETE"}),invalidatesTags:["notifications"]})}),overrideExisting:!1}),{useGetAllNotificationsQuery:S,useCreateNotificationMutation:j,useDeleteAllNotificationsMutation:q,useGetNotificationQuery:z,useDeleteNotificationMutation:L}=D;function f(t){const{item:e,className:n,onClose:s}=t,a=(e==null?void 0:e.variant)||"",r=o=>{o.preventDefault(),o.stopPropagation(),s&&s(e==null?void 0:e.id)};return l(y,{className:p("relative flex min-h-64 w-full items-center space-x-8 rounded-16 p-20 shadow",a==="success"&&"bg-green-600 text-white",a==="info"&&"bg-blue-700 text-white",a==="error"&&"bg-red-600 text-white",a==="warning"&&"bg-orange-600 text-white",n),elevation:0,component:e.useRouter?h:"div",to:e.link||"",role:e.link&&"button",children:[e.icon&&!e.image&&i(N,{sx:{backgroundColor:"background.default"},className:"mr-12 flex h-32 w-32 shrink-0 items-center justify-center rounded-full",children:i(d,{className:"opacity-75",color:"inherit",children:e.icon})}),e.image&&i("img",{className:"mr-12 h-32 w-32 shrink-0 overflow-hidden rounded-full object-cover object-center",src:e.image,alt:"Notification"}),l("div",{className:"flex flex-auto flex-col",children:[e.title&&i(c,{className:"line-clamp-1 font-semibold",children:e.title}),e.description&&i("div",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:e.description}}),e.time&&i(c,{className:"mt-8 text-sm leading-none ",color:"text.secondary",children:x(new Date(e.time),{addSuffix:!0})})]}),i(g,{disableRipple:!0,className:"absolute right-0 top-0 p-8",color:"inherit",size:"small",onClick:r,children:i(d,{size:12,className:"opacity-75",color:"inherit",children:"heroicons-solid:x"})}),e.children]})}const M=v.forwardRef((t,e)=>{const{item:n}=t;return i(w,{ref:e,className:"pointer-events-auto relative mx-auto w-full max-w-320 py-4",children:i(f,{item:n,onClose:t.onClose})})});function F(){const[t]=q(),[e]=j(),{enqueueSnackbar:n,closeSnackbar:s}=k();function a(){t()}function r(){const o=b({title:"Great Job! this is awesome."});n(o.title,{key:o.id,content:i(M,{item:o,onClose:()=>{s(o.id)}})}),e(o)}return i("div",{className:"flex w-full container",children:l("div",{className:"flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0",children:[l("div",{className:"flex flex-col flex-auto",children:[i(c,{className:"text-3xl font-semibold tracking-tight leading-8",children:"Notifications"}),i(c,{className:"font-medium tracking-tight",color:"text.secondary",children:"Lists all notifications"})]}),l("div",{className:"flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12",children:[i(m,{className:"whitespace-nowrap",onClick:r,children:"Example notification"}),i(m,{className:"whitespace-nowrap",variant:"contained",color:"secondary",onClick:a,startIcon:i(d,{size:20,children:"heroicons-solid:bell"}),children:"Dissmiss All"})]})]})})}function B(){const[t]=L(),{data:e,isLoading:n}=S();function s(a){t(a)}return n?i(T,{}):i(C,{header:i(F,{}),content:l("div",{className:"flex flex-col w-full p-24 mt-24",children:[i(A,{breakpointCols:{default:4,960:3,600:2,480:1},className:"my-masonry-grid flex w-full",columnClassName:"my-masonry-grid_column flex flex-col p-8",children:e==null?void 0:e.map(a=>i(f,{className:"mb-16",item:a,onClose:s},a.id))}),e.length===0&&i("div",{className:"flex flex-1 items-center justify-center p-16",children:i(c,{className:"text-center text-24",color:"text.secondary",children:"There are no notifications for now."})})]})})}export{B as default};
