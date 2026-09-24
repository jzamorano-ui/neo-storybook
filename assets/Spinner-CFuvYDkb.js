import{r as z,R as _}from"./index-D7gP2GKN.js";import{u as w,_ as E,a as i,f as l,h as $,k as D}from"./DefaultPropsProvider-B8uR48_2.js";import{g as I,a as U,c as F,b as K,s as v}from"./styled-BR_-zKtj.js";import{j as g}from"./jsx-runtime-DgdsnoHp.js";function V(r){return I("MuiCircularProgress",r)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let d=r=>r,P,S,b,R;const t=44,q=D(P||(P=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),B=D(S||(S=d`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),G=r=>{const{classes:e,variant:s,color:a,disableShrink:o}=r,m={root:["root",s,`color${l(a)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,o&&"circleDisableShrink"]};return K(m,V,e)},L=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>i({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&$(b||(b=d`
      animation: ${0} 1.4s linear infinite;
    `),q)),Z=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),A=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>i({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&$(R||(R=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),B)),H=z.forwardRef(function(e,s){const a=w({props:e,name:"MuiCircularProgress"}),{className:o,color:m="primary",disableShrink:N=!1,size:u=40,style:M,thickness:n=3.6,value:f=0,variant:k="indeterminate"}=a,j=E(a,W),c=i({},a,{color:m,disableShrink:N,size:u,thickness:n,value:f,variant:k}),p=G(c),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-n)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(f),h.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(L,i({className:F(p.root,o),style:i({width:u,height:u},x,M),ownerState:c,ref:s,role:"progressbar"},y,j,{children:g.jsx(Z,{className:p.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(A,{className:p.circle,style:h,ownerState:c,cx:t,cy:t,r:(t-n)/2,fill:"none",strokeWidth:n})})}))}),J=_.createElement,O=_.forwardRef(function({size:e="small",...s},a){const o={};return e==="small"&&(o.size="sm"),e==="large"&&(o.size="lg"),J(H,{...o,...s,ref:a})});O.__docgenInfo={description:"",methods:[],displayName:"NeoSpinner",props:{size:{defaultValue:{value:"'small'",computed:!1},required:!1}}};export{O as N};
