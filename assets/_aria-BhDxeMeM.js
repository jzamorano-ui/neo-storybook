const a=(r,...n)=>{const e={},i={};for(const[s,t]of Object.entries(r))s.startsWith("aria-")&&!n.includes(s)?t!==void 0&&(e[s]=t):i[s]=t;return[e,i]};export{a as s};
