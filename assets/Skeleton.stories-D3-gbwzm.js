import{r as M,R as c}from"./index-D7gP2GKN.js";import{l as h,m as _,u as j,_ as q,a as l,h as f,k}from"./DefaultPropsProvider-CITNJYqq.js";import{g as U,a as N,c as O,b as z,s as E}from"./styled-CGosOwdR.js";import{j as V}from"./jsx-runtime-DgdsnoHp.js";import"./_commonjsHelpers-BosuxZz1.js";function A(e,a=0,t=1){return _(e,a,t)}function I(e){e=e.slice(1);const a=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let t=e.match(a);return t&&t[0].length===1&&(t=t.map(n=>n+n)),t?`rgb${t.length===4?"a":""}(${t.map((n,r)=>r<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function C(e){if(e.type)return e;if(e.charAt(0)==="#")return C(I(e));const a=e.indexOf("("),t=e.substring(0,a);if(["rgb","rgba","hsl","hsla","color"].indexOf(t)===-1)throw new Error(h(9,e));let n=e.substring(a+1,e.length-1),r;if(t==="color"){if(n=n.split(" "),r=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error(h(10,r))}else n=n.split(",");return n=n.map(o=>parseFloat(o)),{type:t,values:n,colorSpace:r}}function T(e){const{type:a,colorSpace:t}=e;let{values:n}=e;return a.indexOf("rgb")!==-1?n=n.map((r,o)=>o<3?parseInt(r,10):r):a.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),a.indexOf("color")!==-1?n=`${t} ${n.join(" ")}`:n=`${n.join(", ")}`,`${a}(${n})`}function F(e,a){return e=C(e),a=A(a),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${a}`:e.values[3]=a,T(e)}function P(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(e){return parseFloat(e)}function B(e){return U("MuiSkeleton",e)}N("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=["animation","className","component","height","style","variant","width"];let d=e=>e,v,x,b,y;const W=e=>{const{classes:a,variant:t,animation:n,hasChildren:r,width:o,height:s}=e;return z({root:["root",t,n,r&&"withChildren",r&&!o&&"fitContent",r&&!s&&"heightAuto"]},B,a)},J=k(v||(v=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),K=k(x||(x=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),L=E("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.animation!==!1&&a[t.animation],t.hasChildren&&a.withChildren,t.hasChildren&&!t.width&&a.fitContent,t.hasChildren&&!t.height&&a.heightAuto]}})(({theme:e,ownerState:a})=>{const t=P(e.shape.borderRadius)||"px",n=X(e.shape.borderRadius);return l({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:F(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&f(b||(b=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),J),({ownerState:e,theme:a})=>e.animation==="wave"&&f(y||(y=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),K,(a.vars||a).palette.action.hover)),Z=M.forwardRef(function(a,t){const n=j({props:a,name:"MuiSkeleton"}),{animation:r="pulse",className:o,component:s="span",height:p,style:w,variant:R="text",width:$}=n,m=q(n,D),g=l({},n,{animation:r,component:s,variant:R,hasChildren:!!m.children}),S=W(g);return V.jsx(L,l({as:s,ref:t,className:O(S.root,o),ownerState:g},m,{style:l({width:$,height:p},w)}))}),G=c.createElement,u=c.forwardRef(function({variant:a="text",...t},n){const r={};return r["aria-hidden"]="true",r.variant=a,G(Z,{...r,...t,ref:n})});u.__docgenInfo={description:"",methods:[],displayName:"NeoSkeleton",props:{variant:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const i=c.createElement,te={title:"Componentes/Skeleton",component:u,tags:["autodocs"],parameters:{neo:{componente:"skeleton"},docs:{description:{component:`Un marcador de carga con la forma del contenido que viene. Va en la primera carga de una página o una sección cuya estructura ya se conoce —listas, tablas, tarjetas, perfiles— y solo donde el contenido viene del servicio: el contenido toma su lugar de una vez.

**Cuándo:** La primera carga de una estructura conocida, cuando el contenido viene del servicio y llega de una vez, y la espera alcanza a notarse: una pieza por cada elemento real.

**Cuándo NO:** Una acción de la persona —enviar, guardar, buscar—: eso es un \`spinner\`. Tampoco cuando no se conoce la forma del contenido, ni para lo que el servicio no trae —títulos, etiquetas, íconos y acciones se muestran reales desde el inicio—, ni para cargas de menos de 1 segundo.

### Sus límites
- **cargas cortas** — no para cargas de menos de 1 segundo. Un skeleton que aparece y desaparece en menos de un segundo solo parpadea — mostrar el contenido cuando llega; para más de 10 s, una indicación de progreso

### Con qué se confunde
- **\`spinner\`** — cuando la espera viene de una acción de la persona —enviar, guardar, buscar— o no se conoce la forma del contenido
- **\`brand-loader\`** — cuando toda la pantalla espera el resultado de una acción relevante de la persona —buscar o cotizar planes, enviar una solicitud, pagar— y lo que viene depende de lo que pidió: el loader de marca reemplaza la pantalla, con un mensaje que dice qué se está haciendo.`}}},argTypes:{variant:{control:"select",options:["text","circular","rounded"],description:"la forma de la pieza, no una jerarquía: `text` toma el lugar de una línea de texto, `circular` solo el de un elemento redondo —siempre cuadrado, nunca estirado—, `rounded` el de un bloque, una imagen o un componente. El `rectangular` de MUI no se usa.",table:{defaultValue:{summary:"text"}}}}},re={parameters:{controls:{exclude:["variant"]},docs:{controls:{exclude:["variant"]}}},args:{},render:e=>i("div",{style:{display:"flex",flexDirection:"column",gap:16,width:210}},["text","circular","rounded"].map(a=>i("div",{key:a,"data-visor-ejes":JSON.stringify({variant:a})},i(u,{...e,variant:a})))),name:"Por defecto"},oe={args:{variant:"circular"},name:"Variante: circular"},ie={args:{variant:"rounded"},name:"Variante: rounded"},H=[{e:"variant=text",x:{variant:"text"},s:null,w:null,a:{variant:"text"}},{e:"variant=circular",x:{variant:"circular"},s:null,w:null,a:{variant:"circular"}},{e:"variant=rounded",x:{variant:"rounded"},s:null,w:null,a:{variant:"rounded"}}],se={name:"Matriz",parameters:{controls:{disable:!0}},render:()=>i("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:16,alignItems:"start"}},H.map((e,a)=>i("div",{key:a,"data-visor-ejes":e.x?JSON.stringify(e.x):void 0,style:{background:"transparent",padding:16,borderRadius:4,...e.w?{width:e.w+32}:null,...e.s||null}},i("div",{id:e.i,style:{font:"11px/1.5 ui-monospace, SFMono-Regular, monospace",marginBottom:8,color:(e.a&&e.a.surface||e.x&&e.x.surface)==="inverse"?"var(--text--base--contrast)":"var(--text--base--secondary)"}},e.e),i(u,e.a))))};export{se as Matriz,re as PorDefecto,oe as VariantCircular,ie as VariantRounded,te as default};
