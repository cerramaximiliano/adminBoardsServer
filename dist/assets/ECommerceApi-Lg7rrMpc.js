import{aq as o,a8 as m}from"./index-4wE1OinM.js";const t=r=>o.defaults(r||{},{id:o.uniqueId("product-"),name:"",handle:"",description:"",categories:[],tags:[],featuredImageId:"",images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,price:"",active:!0,image:"",total:""}),c=["eCommerce_products","eCommerce_product","eCommerce_orders","eCommerce_order"],a=m.enhanceEndpoints({addTagTypes:c}).injectEndpoints({endpoints:r=>({getECommerceProducts:r.query({query:()=>({url:"/mock-api/ecommerce/products"}),providesTags:["eCommerce_products"]}),deleteECommerceProducts:r.mutation({query:e=>({url:"/mock-api/ecommerce/products",method:"DELETE",data:e}),invalidatesTags:["eCommerce_products"]}),getECommerceProduct:r.query({query:e=>({url:`/mock-api/ecommerce/products/${e}`}),providesTags:["eCommerce_product","eCommerce_products"]}),createECommerceProduct:r.mutation({query:e=>({url:"/mock-api/ecommerce/products",method:"POST",data:t(e)}),invalidatesTags:["eCommerce_products","eCommerce_product"]}),updateECommerceProduct:r.mutation({query:e=>({url:`/mock-api/ecommerce/products/${e.id}`,method:"PUT",data:e}),invalidatesTags:["eCommerce_product","eCommerce_products"]}),deleteECommerceProduct:r.mutation({query:e=>({url:`/mock-api/ecommerce/products/${e}`,method:"DELETE"}),invalidatesTags:["eCommerce_product","eCommerce_products"]}),getECommerceOrders:r.query({query:()=>({url:"/mock-api/ecommerce/orders"}),providesTags:["eCommerce_orders"]}),getECommerceOrder:r.query({query:e=>({url:`/mock-api/ecommerce/orders/${e}`}),providesTags:["eCommerce_order"]}),updateECommerceOrder:r.mutation({query:e=>({url:`/mock-api/ecommerce/orders/${e.id}`,method:"PUT",data:e}),invalidatesTags:["eCommerce_order","eCommerce_orders"]}),deleteECommerceOrder:r.mutation({query:e=>({url:`/mock-api/ecommerce/orders/${e}`,method:"DELETE"}),invalidatesTags:["eCommerce_order","eCommerce_orders"]}),deleteECommerceOrders:r.mutation({query:e=>({url:"/mock-api/ecommerce/orders",method:"DELETE",data:e}),invalidatesTags:["eCommerce_order","eCommerce_orders"]})}),overrideExisting:!1}),{useGetECommerceProductsQuery:s,useDeleteECommerceProductsMutation:u,useGetECommerceProductQuery:i,useUpdateECommerceProductMutation:p,useDeleteECommerceProductMutation:C,useGetECommerceOrdersQuery:n,useGetECommerceOrderQuery:E,useUpdateECommerceOrderMutation:g,useDeleteECommerceOrderMutation:l,useDeleteECommerceOrdersMutation:_,useCreateECommerceProductMutation:T}=a;export{t as P,p as a,C as b,i as c,s as d,u as e,E as f,n as g,_ as h,T as u};
