"use strict";(self.webpackChunkwill_win=self.webpackChunkwill_win||[]).push([[35],{4309:(e,t,r)=>{r.d(t,{A:()=>h});var l=r(4882),a=r(8076),o=r(2420),n=r(8093),s=r(6446),i=r(5865),c=r(2088),d=r(579);const p=[{id:"id",numeric:!0,label:"ID",align:"left"},{id:"name",numeric:!1,label:"\u54c1\u540d",align:"left"},{id:"type",numeric:!0,label:"\u5099\u8a3b",align:"left"},{id:"status",numeric:!1,label:"\u72c0\u614b",align:"center"}],h=function(e){let{order:t,orderBy:r,numSelected:h,onRequestSort:m,theme:g}=e;return(0,d.jsx)(l.A,{children:(0,d.jsxs)(a.A,{children:[h<=0&&p.map((e=>{return(0,d.jsx)(o.A,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,d.jsxs)(n.A,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(l=e.id,e=>{m(e,l)}),children:[e.label,r===e.id?(0,d.jsx)(s.A,{component:"span",sx:c.A,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var l})),h<=0&&(0,d.jsx)(o.A,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,d.jsx)(i.A,{variant:"subtitle1",sx:{color:"dark"===g.palette.mode?"grey.600":"grey.900"},children:"\u7de8\u8f2f"})})]})})}},9938:(e,t,r)=>{r.d(t,{A:()=>h});var l=r(5043),a=r(6240),o=r(2110),n=r(9958),s=r(5865),i=r(9336),c=r(6494),d=r(579);const p={"& .MuiCardHeader-action":{mr:0}},h=l.forwardRef(((e,t)=>{let{border:r=!1,boxShadow:l,children:h,content:m=!0,contentClass:g="",contentSX:u={},darkTitle:x,secondary:b,shadow:A,sx:j={},title:v,...k}=e;const y=(0,a.A)();return(0,d.jsxs)(o.A,{ref:t,...k,sx:{border:r?"1px solid":"none",borderColor:"dark"===y.palette.mode?y.palette.background.default:y.palette.grey[300]+98,":hover":{boxShadow:l?A||("dark"===y.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"):"inherit"},...j},children:[!x&&v&&(0,d.jsx)(n.A,{sx:p,title:v,action:b}),x&&v&&(0,d.jsx)(n.A,{sx:p,title:(0,d.jsx)(s.A,{variant:"h3",children:v}),action:b}),v&&(0,d.jsx)(i.A,{}),m&&(0,d.jsx)(c.A,{sx:u,className:g,children:h}),!m&&h]})}))},3320:(e,t,r)=>{r.d(t,{A:()=>i});var l=r(5043),a=r(6355),o=r(7934),n=r(579);const s=l.forwardRef(((e,t)=>{var r,l;let s,i,{children:c,type:d,direction:p,offset:h,scale:m}=e;switch(p){case"up":case"left":s=h,i=0;break;default:s=0,i=h}const[g,u]=(0,a.Y)(s,i),[x,b]=(0,a.Y)(s,i);switch(d){case"rotate":return(0,n.jsx)(o.P.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:c});case"slide":return"up"===p||"down"===p?(0,n.jsx)(o.P.div,{ref:t,animate:{y:void 0!==x?x:""},onHoverEnd:()=>b(),onHoverStart:()=>b(),children:c}):(0,n.jsx)(o.P.div,{ref:t,animate:{x:void 0!==g?g:""},onHoverEnd:()=>u(),onHoverStart:()=>u(),children:c});default:return"number"===typeof m&&(m={hover:m,tap:m}),(0,n.jsx)(o.P.div,{ref:t,whileHover:{scale:null===(r=m)||void 0===r?void 0:r.hover},whileTap:{scale:null===(l=m)||void 0===l?void 0:l.tap},children:c})}}));s.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}};const i=s},3009:(e,t,r)=>{r.d(t,{A:()=>n});var l=r(6240),a=r(3845),o=r(579);const n=e=>{var t,r,n,s,i,c,d,p;let{chipcolor:h,disabled:m,sx:g={},variant:u,...x}=e;const b=(0,l.A)();let A={color:"dark"===b.palette.mode?b.palette.primary.light:b.palette.primary.main,bgcolor:"dark"===b.palette.mode?b.palette.primary.main:b.palette.primary.light,":hover":{color:b.palette.primary.light,bgcolor:"dark"===b.palette.mode?b.palette.primary.dark+90:b.palette.primary.dark}},j={color:b.palette.primary.main,bgcolor:"transparent",border:"1px solid",borderColor:b.palette.primary.main,":hover":{color:(b.palette.mode,b.palette.primary.light),bgcolor:"dark"===b.palette.mode?b.palette.primary.main:b.palette.primary.dark}};switch(h){case"secondary":"outlined"===u?j={color:b.palette.secondary.main,bgcolor:"transparent",border:"1px solid",borderColor:b.palette.secondary.main,":hover":{color:"dark"===b.palette.mode?b.palette.secondary.light:b.palette.secondary.main,bgcolor:"dark"===b.palette.mode?b.palette.secondary.dark:b.palette.secondary.light}}:A={color:"dark"===b.palette.mode?b.palette.secondary.light:b.palette.secondary.main,bgcolor:"dark"===b.palette.mode?b.palette.secondary.dark:b.palette.secondary.light,":hover":{color:b.palette.secondary.light,bgcolor:"dark"===b.palette.mode?b.palette.secondary.dark+90:b.palette.secondary.main}};break;case"success":"outlined"===u?j={color:b.palette.success.dark,bgcolor:"transparent",border:"1px solid",borderColor:b.palette.success.dark,":hover":{color:"dark"===b.palette.mode?b.palette.success.light:b.palette.success.dark,bgcolor:"dark"===b.palette.mode?b.palette.success.dark:b.palette.success.light+60}}:A={color:"dark"===b.palette.mode?b.palette.success.light:b.palette.success.dark,bgcolor:"dark"===b.palette.mode?b.palette.success.dark:b.palette.success.light+60,":hover":{color:b.palette.success.light,bgcolor:"dark"===b.palette.mode?b.palette.success.dark+90:b.palette.success.dark}};break;case"error":"outlined"===u?j={color:b.palette.error.main,bgcolor:"transparent",border:"1px solid",borderColor:b.palette.error.main,":hover":{color:"dark"===b.palette.mode?b.palette.error.light:b.palette.error.dark,bgcolor:"dark"===b.palette.mode?b.palette.error.dark:b.palette.error.light}}:A={color:"dark"===b.palette.mode?b.palette.error.light:b.palette.error.dark,bgcolor:"dark"===b.palette.mode?b.palette.error.dark:b.palette.error.light+60,":hover":{color:b.palette.error.light,bgcolor:"dark"===b.palette.mode?b.palette.error.dark+90:b.palette.error.dark}};break;case"orange":"outlined"===u?j={color:null===(t=b.palette.orange)||void 0===t?void 0:t.dark,bgcolor:"transparent",border:"1px solid",borderColor:null===(r=b.palette.orange)||void 0===r?void 0:r.main,":hover":{color:null===(n=b.palette.orange)||void 0===n?void 0:n.dark,bgcolor:null===(s=b.palette.orange)||void 0===s?void 0:s.light}}:A={color:null===(i=b.palette.orange)||void 0===i?void 0:i.dark,bgcolor:null===(c=b.palette.orange)||void 0===c?void 0:c.light,":hover":{color:null===(d=b.palette.orange)||void 0===d?void 0:d.light,bgcolor:null===(p=b.palette.orange)||void 0===p?void 0:p.dark}};break;case"warning":"outlined"===u?j={color:b.palette.warning.dark,bgcolor:"transparent",border:"1px solid",borderColor:b.palette.warning.dark,":hover":{color:b.palette.warning.dark,bgcolor:b.palette.warning.light}}:A={color:b.palette.warning.dark,bgcolor:b.palette.warning.light,":hover":{color:b.palette.warning.light,bgcolor:"dark"===b.palette.mode?b.palette.warning.dark+90:b.palette.warning.dark}}}m&&("outlined"===u?j={color:b.palette.grey[500],bgcolor:"transparent",border:"1px solid",borderColor:b.palette.grey[500],":hover":{color:b.palette.grey[500],bgcolor:"transparent"}}:A={color:b.palette.grey[500],bgcolor:b.palette.grey[50],":hover":{color:b.palette.grey[500],bgcolor:b.palette.grey[50]}});let v=A;return"outlined"===u&&(v=j),v={...v,...g},(0,o.jsx)(a.A,{...x,sx:v})}},4035:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var l=r(5043),a=r(6494),o=r(8903),n=r(5795),s=r(1787),i=r(7739),c=r(7392),d=r(9938),p=r(1985),h=r(6162),m=r(1191),g=r(6361),u=r(6360),x=r(6240),b=r(9650),A=r(1806),j=r(3460),v=r(8076),k=r(2420),y=r(5865),f=r(1574),w=r(3009),C=r(4309),S=r(3615),P=r(6688),z=r(579);function D(e,t,r){return t[r]<e[r]?-1:t[r]>e[r]?1:0}const O=(e,t)=>"desc"===e?(e,r)=>D(e,r,t):(e,r)=>-D(e,r,t);function I(e,t){const r=e.map(((e,t)=>[e,t]));return r.sort(((e,r)=>{const l=t(e[0],r[0]);return 0!==l?l:e[1]-r[1]})),r.map((e=>e[0]))}const F=e=>{let{...t}=e;const r=(0,x.A)(),a=(0,p.wA)(),[o,n]=l.useState(0),[s,i]=l.useState(5),[d,h]=l.useState("asc"),[m,g]=l.useState("calories"),[u,D]=l.useState([]),{isLoaded:F}=(0,p.d4)((e=>e.basicSetup.material)),{rows:H,setOpen:M}=t;console.log("2.MaterialList"),l.useEffect((()=>{0==F&&a((0,S.lF)())}),[F]);const R=(e,t)=>{const r=u.indexOf(t);let l=[];-1===r?l=l.concat(u,t):0===r?l=l.concat(u.slice(1)):r===u.length-1?l=l.concat(u.slice(0,-1)):r>0&&(l=l.concat(u.slice(0,r),u.slice(r+1))),D(l)},B=o>0?Math.max(0,(1+o)*s-H.length):0;return(0,z.jsxs)(b.A,{children:[(0,z.jsxs)(A.A,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,z.jsx)(C.A,{numSelected:u.length,order:d,orderBy:m,onSelectAllClick:e=>{if(e.target.checked)if(u.length>0)D([]);else{const e=H.map((e=>e.name));D(e)}else D([])},onRequestSort:(e,t)=>{h(m===t&&"asc"===d?"desc":"asc"),g(t)},rowCount:H.length,theme:r,selected:u}),(0,z.jsxs)(j.A,{children:[I(H,O(d,m)).slice(o*s,o*s+s).map(((e,t)=>{if("number"===typeof e)return null;const l=(o=e.materialname,-1!==u.indexOf(o));var o;const n="enhanced-table-checkbox-".concat(t);return(0,z.jsxs)(v.A,{hover:!0,role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,children:[(0,z.jsx)(k.A,{component:"th",id:n,scope:"row",onClick:t=>R(0,e.name),sx:{cursor:"pointer"},children:(0,z.jsxs)(y.A,{variant:"subtitle1",sx:{color:"dark"===r.palette.mode?"grey.600":"grey.900"},children:[" ","#",e.id," "]})}),(0,z.jsx)(k.A,{component:"th",id:n,scope:"row",onClick:t=>R(0,e.name),sx:{cursor:"pointer"},children:(0,z.jsxs)(y.A,{variant:"subtitle1",sx:{color:"dark"===r.palette.mode?"grey.600":"grey.900"},children:[" ",e.name," "]})}),(0,z.jsx)(k.A,{children:e.comment}),(0,z.jsxs)(k.A,{align:"center",children:[1==e.status&&(0,z.jsx)(w.A,{label:"Complete",size:"small",chipcolor:"success"}),2==e.status&&(0,z.jsx)(w.A,{label:"Pending",size:"small",chipcolor:"orange"}),3==e.status&&(0,z.jsx)(w.A,{label:"Processing",size:"small",chipcolor:"primary"})]}),(0,z.jsx)(k.A,{align:"center",sx:{pr:3},children:(0,z.jsx)(c.A,{color:"secondary",size:"large","aria-label":"edit",onClick:()=>(e=>{M(!0),a((0,S.np)(e))})(e),children:(0,z.jsx)(P.A,{sx:{fontSize:"1.3rem"}})})})]},t)})),B>0&&(0,z.jsx)(v.A,{style:{height:53*B},children:(0,z.jsx)(k.A,{colSpan:6})})]})]}),(0,z.jsx)(f.A,{rowsPerPageOptions:[5,10,25],component:"div",count:H.length,rowsPerPage:s,page:o,onPageChange:(e,t)=>{n(t)},onRowsPerPageChange:e=>{i(parseInt(null===e||void 0===e?void 0:e.target.value,10)),n(0)}})]})};var H=r(3892),M=r(35),R=r(6600),B=r(5316),E=r(8911),L=r(8533),W=r(9190),T=r(3193),q=r(9859),V=r(598),Y=r(2143),_=r(9347),J=r(1906),N=r(3320),X=r(1498);const G=e=>{let{...t}=e;const r=(0,x.A)(),{open:l,onClose:a}=t,{materialDialogRow:n}=(0,p.d4)((e=>e.basicSetup.material));console.log("3.MaterialDialogOpen");const s=()=>{a(),console.log("4.MaterialDialogClose")};return(0,z.jsx)("div",{children:(0,z.jsx)(M.A,{fullWidth:!0,open:l,onClose:s,"aria-labelledby":"form-dialog-title",children:l&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(R.A,{id:"form-dialog-title",children:"\u6750\u6599\u6e05\u55ae\u4fee\u6539"}),(0,z.jsx)(B.A,{children:(0,z.jsxs)(E.A,{spacing:3,children:[(0,z.jsx)(L.A,{children:(0,z.jsx)(y.A,{variant:"body2",component:"span",children:"\u9019\u908a\u65b0\u589e\u5099\u8a3b"})}),(0,z.jsx)(H.l1,{initialValues:{material:n.name,status:n.status,comment:n.comment,submit:null},onSubmit:async e=>{console.log(e),(e=>{try{X.A.put("https://private-1baef-willwin.apiary-mock.com/material/".concat(n.id),e),console.log("5. MaterialSubmit"),s(),(0,p.JD)((0,S.DO)(!1))}catch(t){console.log(t)}})(e)},children:e=>{let{handleBlur:l,handleChange:a,handleSubmit:i,isSubmitting:c,values:d}=e;return(0,z.jsxs)("form",{noValidate:!0,onSubmit:i,...t,children:[(0,z.jsx)(o.Ay,{children:(0,z.jsxs)(W.A,{children:["\u7de8\u865f\uff1a",n.id]})}),(0,z.jsxs)(o.Ay,{sx:{mt:2},container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,z.jsx)(o.Ay,{item:!0,xs:5,children:(0,z.jsxs)(T.A,{fullWidth:!0,children:[(0,z.jsx)(W.A,{htmlFor:"material",children:"\u54c1\u540d"}),(0,z.jsx)(q.A,{id:"material",type:"text",value:d.material,name:"material",onBlur:l,onChange:a})]})}),(0,z.jsx)(o.Ay,{item:!0,xs:5,children:(0,z.jsxs)(T.A,{fullWidth:!0,children:[(0,z.jsx)(W.A,{htmlFor:"status",children:"\u72c0\u614b"}),(0,z.jsxs)(V.A,{labelId:"status",id:"status",value:d.status,name:"status",label:"\u72c0\u614b",onChange:a,children:[(0,z.jsx)(Y.A,{value:1,children:"Complete"}),(0,z.jsx)(Y.A,{value:2,children:"Pending"}),(0,z.jsx)(Y.A,{value:3,children:"Processing"})]})]})})]}),(0,z.jsxs)(T.A,{fullWidth:!0,sx:{mt:2},children:[(0,z.jsx)(W.A,{htmlFor:"comment",children:"\u5099\u8a3b"}),(0,z.jsx)(q.A,{id:"comment",type:"text",value:d.comment,name:"comment",onBlur:l,onChange:a})]}),(0,z.jsx)(_.A,{sx:{mt:2},children:(0,z.jsxs)(N.A,{children:[(0,z.jsx)(J.A,{sx:{color:r.palette.error.dark},onClick:s,color:"secondary",children:"\u53d6\u6d88"}),(0,z.jsx)(J.A,{disabled:c,size:"small",type:"submit",variant:"contained",children:"\u4fee\u6539"})]})})]})}})]})})]})})})},K=()=>{const[e,t]=l.useState(""),[r,x]=l.useState([]),[b,A]=l.useState([]),[j,v]=l.useState(!1),{materialList:k}=(0,p.d4)((e=>e.basicSetup.material));l.useEffect((()=>{x(k),A(k)}),[k]);return(0,z.jsxs)(d.A,{children:[(0,z.jsx)(a.A,{children:(0,z.jsxs)(o.Ay,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,z.jsx)(o.Ay,{item:!0,xs:12,sm:6,children:(0,z.jsx)(n.A,{InputProps:{startAdornment:(0,z.jsx)(s.A,{position:"start",children:(0,z.jsx)(u.A,{fontSize:"small"})})},onChange:e=>{const r=null===e||void 0===e?void 0:e.target.value;if(t(r||""),r){const e=b.filter((e=>{let t=!0;let l=!1;return["id","name","comment"].forEach((t=>{e[t].toString().toLowerCase().includes(r.toString().toLowerCase())&&(l=!0)})),l||(t=!1),t}));x(e)}else x(k)},placeholder:"Search Order",value:e,size:"small"})}),(0,z.jsxs)(o.Ay,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,z.jsx)(i.A,{title:"Copy",children:(0,z.jsx)(c.A,{size:"large",children:(0,z.jsx)(g.A,{})})}),(0,z.jsx)(i.A,{title:"Print",children:(0,z.jsx)(c.A,{size:"large",children:(0,z.jsx)(m.A,{})})}),(0,z.jsx)(i.A,{title:"Filter",children:(0,z.jsx)(c.A,{size:"large",children:(0,z.jsx)(h.A,{})})})]})]})}),(0,z.jsx)(F,{rows:r,setOpen:v}),(0,z.jsx)(G,{open:j,onClose:()=>{v(!1)}})]})}}}]);
//# sourceMappingURL=35.7c3f9842.chunk.js.map