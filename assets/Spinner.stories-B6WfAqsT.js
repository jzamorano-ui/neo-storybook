import{R as e}from"./index-D7gP2GKN.js";import{N as a}from"./Spinner-B2Svd0ad.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DefaultPropsProvider-CITNJYqq.js";import"./jsx-runtime-DgdsnoHp.js";import"./styled-CGosOwdR.js";e.createElement;const i={title:"Componentes/Spinner",component:a,tags:["autodocs"],parameters:{neo:{componente:"spinner"},docs:{description:{component:`Indicador de carga breve y localizada.

**Cuándo:** Algo está cargando en una parte de la pantalla y la espera es corta: un botón que envía, una sección que trae datos.

**Cuándo NO:** Si carga la página completa — ahí conviene mostrar la estructura de la página mientras llegan los datos. Tampoco dentro de un botón solo con ícono, que no tiene estado de carga.

### Sus límites
- **spinners simultáneos** — no usar múltiples spinners simultáneos. Varios spinners a la vez no dicen qué se espera — unirlos en uno cerca del contenido que carga

### Con qué se confunde
- **\`brand-loader\`** — cuando toda la pantalla espera el resultado de una acción relevante de la persona —buscar o cotizar planes, enviar una solicitud, pagar— y lo que viene depende de lo que pidió: el loader de marca reemplaza la pantalla, con un mensaje que dice qué se está haciendo.`}}},argTypes:{size:{control:"select",options:["small","medium","large"],description:"el diámetro del arco, en la escala larga de MUI. Dentro de un `button` va SIEMPRE medium.",table:{defaultValue:{summary:"small"}}}}},d={args:{size:"small"},name:"Por defecto"},c={args:{size:"medium"},name:"Tamaño: medium"},m={args:{size:"large"},name:"Tamaño: large"};export{d as PorDefecto,m as SizeLarge,c as SizeMedium,i as default};
