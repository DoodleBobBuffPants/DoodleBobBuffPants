(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4542:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(6006);function o(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},2620:function(e,t,r){Promise.resolve().then(r.bind(r,3614)),Promise.resolve().then(r.t.bind(r,7402,23)),Promise.resolve().then(r.t.bind(r,7977,23))},8165:function(e,t){"use strict";t.Z=e=>"".concat("/DoodleBobBuffPants").concat(e)},3614:function(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:function(){return eW}});var o=r(9268),l=r(5846),a=r.n(l),i=r(6006),s=r(7464),u=r(3779);function c(e){let{injectFirst:t,children:r}=e;return t&&n?(0,o.jsx)(s.C,{value:n,children:r}):r}"object"==typeof document&&(n=(0,u.Z)({key:"css",prepend:!0}));var d=r(431),v=r(6750);let f=i.createContext(null);function p(){let e=i.useContext(f);return e}let m="function"==typeof Symbol&&Symbol.for;var g=m?Symbol.for("mui.nested"):"__THEME_NESTED__",b=function(e){let{children:t,theme:r}=e,n=p(),l=i.useMemo(()=>{let e=null===n?r:function(e,t){if("function"==typeof t){let r=t(e);return r}return{...e,...t}}(n,r);return null!=e&&(e[g]=null!==n),e},[r,n]);return(0,o.jsx)(f.Provider,{value:l,children:t})},h=r(5396);let x={};function y(e,t,r,n=!1){return i.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let l=r(o),a=e?(0,d.Z)({},t,{[e]:l}):l;return n?()=>a:a}return e?(0,d.Z)({},t,{[e]:r}):(0,d.Z)({},t,r)},[e,t,r,n])}var Z=function(e){let{children:t,theme:r,themeId:n}=e,l=(0,h.Z)(x),a=p()||x,i=y(n,l,r),u=y(n,a,r,!0);return(0,o.jsx)(b,{theme:u,children:(0,o.jsx)(s.T.Provider,{value:i,children:t})})},w=r(6356);let k=["theme"];function S(e){let{theme:t}=e,r=(0,v.Z)(e,k),n=t[w.Z];return(0,o.jsx)(Z,(0,d.Z)({},r,{themeId:n?w.Z:void 0,theme:n||t}))}var j=r(8006),C=r(2120);function E(e){let{styles:t,defaultTheme:r={}}=e,n="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?r:e):t;return(0,o.jsx)(C.xB,{styles:n})}var $=r(5887),_=function({styles:e,themeId:t,defaultTheme:r={}}){let n=(0,$.Z)(r),l="function"==typeof e?e(t&&n[t]||n):e;return(0,o.jsx)(E,{styles:l})},O=r(6793),M=function(e){return(0,o.jsx)(_,(0,d.Z)({},e,{defaultTheme:O.Z,themeId:w.Z}))};let N=(e,t)=>(0,d.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),F=e=>(0,d.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),G=(e,t=!1)=>{var r,n;let o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,r])=>{var n;o[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(n=r.palette)?void 0:n.mode}});let l=(0,d.Z)({html:N(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,d.Z)({margin:0},F(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),a=null==(r=e.components)?void 0:null==(n=r.MuiCssBaseline)?void 0:n.styleOverrides;return a&&(l=[l,a]),l};var P=function(e){let t=(0,j.Z)({props:e,name:"MuiCssBaseline"}),{children:r,enableColorScheme:n=!1}=t;return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(M,{styles:e=>G(e,n)}),r]})},B=r(9791),I=r(7562),D=r(5368),R=r(4542),q=r(6745);let A=(0,q.ZP)();var W=r(8295),z=r(5135),T=r(2272);let L=["sx"],H=e=>{var t,r;let n={systemProps:{},otherProps:{}},o=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:T.Z;return Object.keys(e).forEach(t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]}),n};var V=r(1153);let U=(e,t)=>e.filter(e=>t.includes(e)),J=(e,t,r)=>{let n=e.keys[0];if(Array.isArray(t))t.forEach((t,n)=>{r((t,r)=>{n<=e.keys.length-1&&(0===n?Object.assign(t,r):t[e.up(e.keys[n])]=r)},t)});else if(t&&"object"==typeof t){let o=Object.keys(t).length>e.keys.length?e.keys:U(e.keys,Object.keys(t));o.forEach(o=>{if(-1!==e.keys.indexOf(o)){let l=t[o];void 0!==l&&r((t,r)=>{n===o?Object.assign(t,r):t[e.up(o)]=r},l)}})}else("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function K(e){return e?`Level${e}`:""}function Q(e){return e.unstable_level>0&&e.container}function X(e){return function(t){return`var(--Grid-${t}Spacing${K(e.unstable_level)})`}}function Y(e){return function(t){return 0===e.unstable_level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${K(e.unstable_level-1)})`}}function ee(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${K(e.unstable_level-1)})`}let et=({theme:e,ownerState:t})=>{let r=X(t),n={};return J(e.breakpoints,t.gridSize,(e,o)=>{let l={};!0===o&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===o&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof o&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${ee(t)}${Q(t)?` + ${r("column")}`:""})`}),e(n,l)}),n},er=({theme:e,ownerState:t})=>{let r={};return J(e.breakpoints,t.gridOffset,(e,n)=>{let o={};"auto"===n&&(o={marginLeft:"auto"}),"number"==typeof n&&(o={marginLeft:0===n?"0px":`calc(100% * ${n} / ${ee(t)})`}),e(r,o)}),r},en=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=Q(t)?{[`--Grid-columns${K(t.unstable_level)}`]:ee(t)}:{"--Grid-columns":12};return J(e.breakpoints,t.columns,(e,n)=>{e(r,{[`--Grid-columns${K(t.unstable_level)}`]:n})}),r},eo=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=Y(t),n=Q(t)?{[`--Grid-rowSpacing${K(t.unstable_level)}`]:r("row")}:{};return J(e.breakpoints,t.rowSpacing,(r,o)=>{var l;r(n,{[`--Grid-rowSpacing${K(t.unstable_level)}`]:"string"==typeof o?o:null==(l=e.spacing)?void 0:l.call(e,o)})}),n},el=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=Y(t),n=Q(t)?{[`--Grid-columnSpacing${K(t.unstable_level)}`]:r("column")}:{};return J(e.breakpoints,t.columnSpacing,(r,o)=>{var l;r(n,{[`--Grid-columnSpacing${K(t.unstable_level)}`]:"string"==typeof o?o:null==(l=e.spacing)?void 0:l.call(e,o)})}),n},ea=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return J(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},ei=({ownerState:e})=>{let t=X(e),r=Y(e);return(0,d.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,d.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${t("row")} / -2) calc(${t("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${t("row")} * -1) 0px 0px calc(${t("column")} * -1)`}),(!e.container||Q(e))&&(0,d.Z)({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},es=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},eu=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,n])=>{r(n)&&t.push(`spacing-${e}-${String(n)}`)}),t}return[]},ec=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`],ed=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],ev=(0,V.Z)(),ef=A("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function ep(e){return(0,W.Z)({props:e,name:"MuiGrid",defaultTheme:ev})}var em=r(5457);let eg=function(e={}){let{createStyledComponent:t=ef,useThemeProps:r=ep,componentName:n="MuiGrid"}=e,l=i.createContext(void 0),a=(e,t)=>{let{container:r,direction:o,spacing:l,wrap:a,gridSize:i}=e,s={root:["root",r&&"container","wrap"!==a&&`wrap-xs-${String(a)}`,...ec(o),...es(i),...r?eu(l,t.breakpoints.keys[0]):[]]};return(0,I.Z)(s,e=>(0,D.Z)(n,e),{})},s=t(en,el,eo,et,ea,ei,er),u=i.forwardRef(function(e,t){var n,u,c,f,p,m,g,b;let h=(0,$.Z)(),x=r(e),y=function(e){let t;let{sx:r}=e,n=(0,v.Z)(e,L),{systemProps:o,otherProps:l}=H(n);return t=Array.isArray(r)?[o,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,z.P)(t)?(0,d.Z)({},o,t):o}:(0,d.Z)({},o,r),(0,d.Z)({},l,{sx:t})}(x),Z=i.useContext(l),{className:w,children:k,columns:S=12,container:j=!1,component:C="div",direction:E="row",wrap:_="wrap",spacing:O=0,rowSpacing:M=O,columnSpacing:N=O,disableEqualOverflow:F,unstable_level:G=0}=y,P=(0,v.Z)(y,ed),I=F;G&&void 0!==F&&(I=e.disableEqualOverflow);let D={},q={},A={};Object.entries(P).forEach(([e,t])=>{void 0!==h.breakpoints.values[e]?D[e]=t:void 0!==h.breakpoints.values[e.replace("Offset","")]?q[e.replace("Offset","")]=t:A[e]=t});let W=null!=(n=e.columns)?n:G?void 0:S,T=null!=(u=e.spacing)?u:G?void 0:O,V=null!=(c=null!=(f=e.rowSpacing)?f:e.spacing)?c:G?void 0:M,U=null!=(p=null!=(m=e.columnSpacing)?m:e.spacing)?p:G?void 0:N,J=(0,d.Z)({},y,{level:G,columns:W,container:j,direction:E,wrap:_,spacing:T,rowSpacing:V,columnSpacing:U,gridSize:D,gridOffset:q,disableEqualOverflow:null!=(g=null!=(b=I)?b:Z)&&g,parentDisableEqualOverflow:Z}),K=a(J,h),Q=(0,o.jsx)(s,(0,d.Z)({ref:t,as:C,ownerState:J,className:(0,B.Z)(K.root,w)},A,{children:i.Children.map(k,e=>{if(i.isValidElement(e)&&(0,R.Z)(e,["Grid"])){var t;return i.cloneElement(e,{unstable_level:null!=(t=e.props.unstable_level)?t:G+1})}return e})}));return void 0!==I&&I!==(null!=Z&&Z)&&(Q=(0,o.jsx)(l.Provider,{value:I,children:Q})),Q});return u.muiName="Grid",u}({createStyledComponent:(0,em.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,j.Z)({props:e,name:"MuiGrid2"})});var eb=r(3343),eh=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),ex=r(8539);function ey(e){return(0,D.Z)("MuiPaper",e)}(0,ex.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);let eZ=["className","component","elevation","square","variant"],ew=e=>{let{square:t,elevation:r,variant:n,classes:o}=e,l={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${r}`]};return(0,I.Z)(l,ey,o)},ek=(0,em.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,d.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,d.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,eb.Fq)("#fff",eh(t.elevation))}, ${(0,eb.Fq)("#fff",eh(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),eS=i.forwardRef(function(e,t){let r=(0,j.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:a=1,square:i=!1,variant:s="elevation"}=r,u=(0,v.Z)(r,eZ),c=(0,d.Z)({},r,{component:l,elevation:a,square:i,variant:s}),f=ew(c);return(0,o.jsx)(ek,(0,d.Z)({as:l,ownerState:c,className:(0,B.Z)(f.root,n),ref:t},u))});function ej(e){return(0,D.Z)("MuiCard",e)}(0,ex.Z)("MuiCard",["root"]);let eC=["className","raised"],eE=e=>{let{classes:t}=e;return(0,I.Z)({root:["root"]},ej,t)},e$=(0,em.ZP)(eS,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),e_=i.forwardRef(function(e,t){let r=(0,j.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=r,a=(0,v.Z)(r,eC),i=(0,d.Z)({},r,{raised:l}),s=eE(i);return(0,o.jsx)(e$,(0,d.Z)({className:(0,B.Z)(s.root,n),elevation:l?8:void 0,ref:t,ownerState:i},a))}),eO=e=>{fetch("https://api.allorigins.win/get?url=https://steamcommunity.com/id/MyCharIsHard/").then(e=>e.json()).then(t=>e(eM(t.contents))).catch(e=>console.error(e))},eM=e=>{let t=new DOMParser().parseFromString(e,"text/html").getElementsByClassName("profile_customization");for(let e=0;e<t.length;e++){var r;let n=t.item(e),o=n.getElementsByClassName("profile_customization_header");if((null===(r=o.item(0))||void 0===r?void 0:r.textContent)==="Rarest Achievement Showcase")return n}console.error("Unable to find steam achievements")};var eN=()=>{let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{e||eO(t)},[e]),e?(0,o.jsx)(e_,{className:"rounded-3xl mx-8 p-8",elevation:5,ref:t=>null==t?void 0:t.append(e)}):(0,o.jsx)(o.Fragment,{})},eF=r(6394),eG=r.n(eF),eP=r(2516),eB=r(8165);let eI=()=>{let e=eD();return(0,o.jsx)(eG(),{src:(0,eB.Z)(e===eA?"/gifs/christmas.gif":e===eq?"/gifs/sun.gif":"/gifs/skeleton.gif"),width:"200",height:"300",alt:"seasonal-image",className:"rounded-3xl"})},eD=()=>{let e=new Date().getMonth()+1;return 12===e?eA:e>5&&e<9?eq:eR},eR=(0,eP.Z)({components:{MuiCssBaseline:{styleOverrides:{body:{backgroundImage:"linear-gradient(135deg, #7C2D12 0%, #262626 50%, #171717 100%)",color:"#7C2D12"},svg:{color:"#7C2D12"}}},MuiCard:{styleOverrides:{root:{backgroundImage:"linear-gradient(135deg, #7C2D12 0%, #262626 50%, #171717 100%)",boxShadow:"5px 5px 10px 0px #7C2D12",color:"white"}}},MuiIconButton:{styleOverrides:{root:{":hover":{backgroundColor:"#17171788"}}}}}}),eq=(0,eP.Z)({components:{MuiCssBaseline:{styleOverrides:{body:{backgroundImage:"linear-gradient(135deg, #38BDF8 0%, #0EA4E9 50%, #FACC15 100%)",color:"white"},svg:{color:"white"}}},MuiCard:{styleOverrides:{root:{backgroundImage:"linear-gradient(135deg, #38BDF8 0%, #0EA4E9 50%, #FACC15 100%)",boxShadow:"5px 5px 10px 0px white",color:"white"}}},MuiIconButton:{styleOverrides:{root:{":hover":{backgroundColor:"#FACC1588"}}}}}}),eA=(0,eP.Z)({components:{MuiCssBaseline:{styleOverrides:{body:{backgroundImage:"linear-gradient(135deg, #EF4444 0%, #22C55E 50%, #EF4444 100%)",color:"#EF4444"},svg:{color:"#052E16"},li:{color:"#052E16"}}},MuiCard:{styleOverrides:{root:{backgroundImage:"linear-gradient(135deg, #EF4444 0%, #22C55E 50%, #EF4444 100%)",boxShadow:"5px 5px 10px 0px #EF4444",color:"#052E16"}}},MuiIconButton:{styleOverrides:{root:{":hover":{backgroundColor:"#EF444488"}}}}}});var eW=e=>{let{children:t}=e;return(0,o.jsx)(c,{injectFirst:!0,children:(0,o.jsxs)(S,{theme:eD(),children:[(0,o.jsx)(P,{}),(0,o.jsx)(a(),{href:"/",prefetch:!1,children:(0,o.jsx)("h1",{className:"text-center text-4xl font-bold underline decoration-wavy mb-28",children:"DoodleBobBuffPants"})}),(0,o.jsxs)(eg,{container:!0,spacing:6,alignItems:"start",className:"mb-0",children:[(0,o.jsx)(eg,{xs:4,className:"flex justify-center",children:(0,o.jsx)(eN,{})}),(0,o.jsx)(eg,{xs:4,children:t}),(0,o.jsx)(eg,{xs:4,className:"flex justify-center",children:(0,o.jsx)(eI,{})})]})]})})}},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_f78232', '__Inter_Fallback_f78232'",fontStyle:"normal"},className:"__className_f78232"}}},function(e){e.O(0,[160,394,782,253,769,744],function(){return e(e.s=2620)}),_N_E=e.O()}]);