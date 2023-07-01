(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4542:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(6006);function o(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},5891:function(e,t,r){Promise.resolve().then(r.bind(r,4707)),Promise.resolve().then(r.t.bind(r,7402,23)),Promise.resolve().then(r.t.bind(r,7977,23))},4707:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eD}});var n=r(9268),o=r(5846),l=r.n(o),a=r(431),i=r(6750),s=r(6006);let u=s.createContext(null);function c(){let e=s.useContext(u);return e}let d="function"==typeof Symbol&&Symbol.for;var v=d?Symbol.for("mui.nested"):"__THEME_NESTED__",f=function(e){let{children:t,theme:r}=e,o=c(),l=s.useMemo(()=>{let e=null===o?r:function(e,t){if("function"==typeof t){let r=t(e);return r}return{...e,...t}}(o,r);return null!=e&&(e[v]=null!==o),e},[r,o]);return(0,n.jsx)(u.Provider,{value:l,children:t})},p=r(7464),m=r(5396);let g={};function b(e,t,r,n=!1){return s.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let l=r(o),i=e?(0,a.Z)({},t,{[e]:l}):l;return n?()=>i:i}return e?(0,a.Z)({},t,{[e]:r}):(0,a.Z)({},t,r)},[e,t,r,n])}var h=function(e){let{children:t,theme:r,themeId:o}=e,l=(0,m.Z)(g),a=c()||g,i=b(o,l,r),s=b(o,a,r,!0);return(0,n.jsx)(f,{theme:s,children:(0,n.jsx)(p.T.Provider,{value:i,children:t})})},x=r(6356);let y=["theme"];function Z(e){let{theme:t}=e,r=(0,i.Z)(e,y),o=t[x.Z];return(0,n.jsx)(h,(0,a.Z)({},r,{themeId:o?x.Z:void 0,theme:o||t}))}var w=r(8006),k=r(2120);function S(e){let{styles:t,defaultTheme:r={}}=e,o="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?r:e):t;return(0,n.jsx)(k.xB,{styles:o})}var C=r(5887),j=function({styles:e,themeId:t,defaultTheme:r={}}){let o=(0,C.Z)(r),l="function"==typeof e?e(t&&o[t]||o):e;return(0,n.jsx)(S,{styles:l})},E=r(6793),$=function(e){return(0,n.jsx)(j,(0,a.Z)({},e,{defaultTheme:E.Z,themeId:x.Z}))};let _=(e,t)=>(0,a.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),O=e=>(0,a.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),M=(e,t=!1)=>{var r,n;let o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,r])=>{var n;o[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(n=r.palette)?void 0:n.mode}});let l=(0,a.Z)({html:_(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,a.Z)({margin:0},O(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),i=null==(r=e.components)?void 0:null==(n=r.MuiCssBaseline)?void 0:n.styleOverrides;return i&&(l=[l,i]),l};var N=function(e){let t=(0,w.Z)({props:e,name:"MuiCssBaseline"}),{children:r,enableColorScheme:o=!1}=t;return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)($,{styles:e=>M(e,o)}),r]})},G=r(9791),F=r(7562),P=r(5368),B=r(4542),I=r(6745);let D=(0,I.ZP)();var R=r(8295),q=r(5135),A=r(2272);let W=["sx"],z=e=>{var t,r;let n={systemProps:{},otherProps:{}},o=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:A.Z;return Object.keys(e).forEach(t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]}),n};var T=r(1153);let L=(e,t)=>e.filter(e=>t.includes(e)),H=(e,t,r)=>{let n=e.keys[0];if(Array.isArray(t))t.forEach((t,n)=>{r((t,r)=>{n<=e.keys.length-1&&(0===n?Object.assign(t,r):t[e.up(e.keys[n])]=r)},t)});else if(t&&"object"==typeof t){let o=Object.keys(t).length>e.keys.length?e.keys:L(e.keys,Object.keys(t));o.forEach(o=>{if(-1!==e.keys.indexOf(o)){let l=t[o];void 0!==l&&r((t,r)=>{n===o?Object.assign(t,r):t[e.up(o)]=r},l)}})}else("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function V(e){return e?`Level${e}`:""}function U(e){return e.unstable_level>0&&e.container}function J(e){return function(t){return`var(--Grid-${t}Spacing${V(e.unstable_level)})`}}function K(e){return function(t){return 0===e.unstable_level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${V(e.unstable_level-1)})`}}function Q(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${V(e.unstable_level-1)})`}let X=({theme:e,ownerState:t})=>{let r=J(t),n={};return H(e.breakpoints,t.gridSize,(e,o)=>{let l={};!0===o&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===o&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof o&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${Q(t)}${U(t)?` + ${r("column")}`:""})`}),e(n,l)}),n},Y=({theme:e,ownerState:t})=>{let r={};return H(e.breakpoints,t.gridOffset,(e,n)=>{let o={};"auto"===n&&(o={marginLeft:"auto"}),"number"==typeof n&&(o={marginLeft:0===n?"0px":`calc(100% * ${n} / ${Q(t)})`}),e(r,o)}),r},ee=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=U(t)?{[`--Grid-columns${V(t.unstable_level)}`]:Q(t)}:{"--Grid-columns":12};return H(e.breakpoints,t.columns,(e,n)=>{e(r,{[`--Grid-columns${V(t.unstable_level)}`]:n})}),r},et=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=K(t),n=U(t)?{[`--Grid-rowSpacing${V(t.unstable_level)}`]:r("row")}:{};return H(e.breakpoints,t.rowSpacing,(r,o)=>{var l;r(n,{[`--Grid-rowSpacing${V(t.unstable_level)}`]:"string"==typeof o?o:null==(l=e.spacing)?void 0:l.call(e,o)})}),n},er=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=K(t),n=U(t)?{[`--Grid-columnSpacing${V(t.unstable_level)}`]:r("column")}:{};return H(e.breakpoints,t.columnSpacing,(r,o)=>{var l;r(n,{[`--Grid-columnSpacing${V(t.unstable_level)}`]:"string"==typeof o?o:null==(l=e.spacing)?void 0:l.call(e,o)})}),n},en=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return H(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},eo=({ownerState:e})=>{let t=J(e),r=K(e);return(0,a.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,a.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${t("row")} / -2) calc(${t("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${t("row")} * -1) 0px 0px calc(${t("column")} * -1)`}),(!e.container||U(e))&&(0,a.Z)({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},el=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},ea=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,n])=>{r(n)&&t.push(`spacing-${e}-${String(n)}`)}),t}return[]},ei=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`],es=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],eu=(0,T.Z)(),ec=D("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function ed(e){return(0,R.Z)({props:e,name:"MuiGrid",defaultTheme:eu})}var ev=r(5457);let ef=function(e={}){let{createStyledComponent:t=ec,useThemeProps:r=ed,componentName:o="MuiGrid"}=e,l=s.createContext(void 0),u=(e,t)=>{let{container:r,direction:n,spacing:l,wrap:a,gridSize:i}=e,s={root:["root",r&&"container","wrap"!==a&&`wrap-xs-${String(a)}`,...ei(n),...el(i),...r?ea(l,t.breakpoints.keys[0]):[]]};return(0,F.Z)(s,e=>(0,P.Z)(o,e),{})},c=t(ee,er,et,X,en,eo,Y),d=s.forwardRef(function(e,t){var o,d,v,f,p,m,g,b;let h=(0,C.Z)(),x=r(e),y=function(e){let t;let{sx:r}=e,n=(0,i.Z)(e,W),{systemProps:o,otherProps:l}=z(n);return t=Array.isArray(r)?[o,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,q.P)(t)?(0,a.Z)({},o,t):o}:(0,a.Z)({},o,r),(0,a.Z)({},l,{sx:t})}(x),Z=s.useContext(l),{className:w,children:k,columns:S=12,container:j=!1,component:E="div",direction:$="row",wrap:_="wrap",spacing:O=0,rowSpacing:M=O,columnSpacing:N=O,disableEqualOverflow:F,unstable_level:P=0}=y,I=(0,i.Z)(y,es),D=F;P&&void 0!==F&&(D=e.disableEqualOverflow);let R={},A={},T={};Object.entries(I).forEach(([e,t])=>{void 0!==h.breakpoints.values[e]?R[e]=t:void 0!==h.breakpoints.values[e.replace("Offset","")]?A[e.replace("Offset","")]=t:T[e]=t});let L=null!=(o=e.columns)?o:P?void 0:S,H=null!=(d=e.spacing)?d:P?void 0:O,V=null!=(v=null!=(f=e.rowSpacing)?f:e.spacing)?v:P?void 0:M,U=null!=(p=null!=(m=e.columnSpacing)?m:e.spacing)?p:P?void 0:N,J=(0,a.Z)({},y,{level:P,columns:L,container:j,direction:$,wrap:_,spacing:H,rowSpacing:V,columnSpacing:U,gridSize:R,gridOffset:A,disableEqualOverflow:null!=(g=null!=(b=D)?b:Z)&&g,parentDisableEqualOverflow:Z}),K=u(J,h),Q=(0,n.jsx)(c,(0,a.Z)({ref:t,as:E,ownerState:J,className:(0,G.Z)(K.root,w)},T,{children:s.Children.map(k,e=>{if(s.isValidElement(e)&&(0,B.Z)(e,["Grid"])){var t;return s.cloneElement(e,{unstable_level:null!=(t=e.props.unstable_level)?t:P+1})}return e})}));return void 0!==D&&D!==(null!=Z&&Z)&&(Q=(0,n.jsx)(l.Provider,{value:D,children:Q})),Q});return d.muiName="Grid",d}({createStyledComponent:(0,ev.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,w.Z)({props:e,name:"MuiGrid2"})});var ep=r(3343),em=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),eg=r(8539);function eb(e){return(0,P.Z)("MuiPaper",e)}(0,eg.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);let eh=["className","component","elevation","square","variant"],ex=e=>{let{square:t,elevation:r,variant:n,classes:o}=e,l={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${r}`]};return(0,F.Z)(l,eb,o)},ey=(0,ev.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,ep.Fq)("#fff",em(t.elevation))}, ${(0,ep.Fq)("#fff",em(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),eZ=s.forwardRef(function(e,t){let r=(0,w.Z)({props:e,name:"MuiPaper"}),{className:o,component:l="div",elevation:s=1,square:u=!1,variant:c="elevation"}=r,d=(0,i.Z)(r,eh),v=(0,a.Z)({},r,{component:l,elevation:s,square:u,variant:c}),f=ex(v);return(0,n.jsx)(ey,(0,a.Z)({as:l,ownerState:v,className:(0,G.Z)(f.root,o),ref:t},d))});function ew(e){return(0,P.Z)("MuiCard",e)}(0,eg.Z)("MuiCard",["root"]);let ek=["className","raised"],eS=e=>{let{classes:t}=e;return(0,F.Z)({root:["root"]},ew,t)},eC=(0,ev.ZP)(eZ,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),ej=s.forwardRef(function(e,t){let r=(0,w.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,s=(0,i.Z)(r,ek),u=(0,a.Z)({},r,{raised:l}),c=eS(u);return(0,n.jsx)(eC,(0,a.Z)({className:(0,G.Z)(c.root,o),elevation:l?8:void 0,ref:t,ownerState:u},s))}),eE=e=>{fetch("https://api.allorigins.win/get?url=https://steamcommunity.com/id/MyCharIsHard/").then(e=>e.json()).then(t=>e(e$(t.contents))).catch(e=>console.error(e))},e$=e=>{let t=new DOMParser().parseFromString(e,"text/html").getElementsByClassName("profile_customization");for(let e=0;e<t.length;e++){var r;let n=t.item(e),o=n.getElementsByClassName("profile_customization_header");if((null===(r=o.item(0))||void 0===r?void 0:r.textContent)==="Rarest Achievement Showcase")return n}console.error("Unable to find steam achievements")};var e_=()=>{let[e,t]=(0,s.useState)();return(0,s.useEffect)(()=>{e||eE(t)},[e]),e?(0,n.jsx)(ej,{className:"rounded-3xl mx-8 p-8",elevation:5,ref:t=>null==t?void 0:t.append(e)}):(0,n.jsx)(n.Fragment,{})},eO=r(6394),eM=r.n(eO),eN=r(2516);let eG=()=>{let e=eF();return(0,n.jsx)(eM(),{src:e===eI?"/christmas.gif":e===eB?"/sun.gif":"/skeleton.gif",width:"200",height:"300",alt:"seasonal-image",className:"rounded-3xl"})},eF=()=>{let e=new Date().getMonth()+1;return 12===e?eI:e>5&&e<9?eB:eP},eP=(0,eN.Z)({components:{MuiCssBaseline:{styleOverrides:{body:{backgroundImage:"linear-gradient(135deg, #7C2D12 0%, #262626 50%, #171717 100%)",color:"#7C2D12"},svg:{color:"#7C2D12"}}},MuiCard:{styleOverrides:{root:{backgroundImage:"linear-gradient(135deg, #7C2D12 0%, #262626 50%, #171717 100%)",boxShadow:"5px 5px 10px 0px #7C2D12",color:"white"}}},MuiIconButton:{styleOverrides:{root:{":hover":{backgroundColor:"#17171788"}}}}}}),eB=(0,eN.Z)({components:{MuiCssBaseline:{styleOverrides:{body:{backgroundImage:"linear-gradient(135deg, #38BDF8 0%, #0EA4E9 50%, #FACC15 100%)",color:"white"},svg:{color:"white"}}},MuiCard:{styleOverrides:{root:{backgroundImage:"linear-gradient(135deg, #38BDF8 0%, #0EA4E9 50%, #FACC15 100%)",boxShadow:"5px 5px 10px 0px white",color:"white"}}},MuiIconButton:{styleOverrides:{root:{":hover":{backgroundColor:"#FACC1588"}}}}}}),eI=(0,eN.Z)({components:{MuiCssBaseline:{styleOverrides:{body:{backgroundImage:"linear-gradient(135deg, #EF4444 0%, #22C55E 50%, #EF4444 100%)",color:"#EF4444"},svg:{color:"#052E16"},li:{color:"#052E16"}}},MuiCard:{styleOverrides:{root:{backgroundImage:"linear-gradient(135deg, #EF4444 0%, #22C55E 50%, #EF4444 100%)",boxShadow:"5px 5px 10px 0px #EF4444",color:"#052E16"}}},MuiIconButton:{styleOverrides:{root:{":hover":{backgroundColor:"#EF444488"}}}}}});var eD=e=>{let{children:t}=e;return(0,n.jsxs)(Z,{theme:eF(),children:[(0,n.jsx)(N,{}),(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)("h1",{className:"text-center text-4xl font-bold underline decoration-wavy mb-28",children:"DoodleBobBuffPants"})}),(0,n.jsxs)(ef,{container:!0,spacing:6,alignItems:"start",className:"mb-0",children:[(0,n.jsx)(ef,{xs:4,className:"flex justify-center",children:(0,n.jsx)(e_,{})}),(0,n.jsx)(ef,{xs:4,children:t}),(0,n.jsx)(ef,{xs:4,className:"flex justify-center",children:(0,n.jsx)(eG,{})})]})]})}},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}}},function(e){e.O(0,[160,394,782,253,769,744],function(){return e(e.s=5891)}),_N_E=e.O()}]);