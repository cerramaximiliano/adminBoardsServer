import{M as d,N as p,s as C,ay as e,r as u,az as g,aA as m,aB as A,aC as x,G as f}from"./index-GBfLQmy9.js";function y(s){return d("MuiCardActions",s)}p("MuiCardActions",["root","spacing"]);const S=["disableSpacing","className"],b=s=>{const{classes:t,disableSpacing:a}=s;return f({root:["root",!a&&"spacing"]},y,t)},M=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:a}=s;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),R=u.forwardRef(function(t,a){const o=g({props:t,name:"MuiCardActions"}),{disableSpacing:i=!1,className:r}=o,c=m(o,S),n=e({},o,{disableSpacing:i}),l=b(n);return A.jsx(M,e({className:x(l.root,r),ownerState:n,ref:a},c))}),U=R;export{U as C};
