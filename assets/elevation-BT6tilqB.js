import{e as u,ar as l,ad as k,as as h,at as S,au as B,av as P,p as i,_ as v,B as I,j as r,a0 as $,m as N,b as V,c as T,g as R,P as w,d as F,aw as E,t as j,h as D,ax as O,ay as U,i as _}from"./index-BVQ7FPQV.js";function x(e){return k(()=>{const a=[],n={};if(e.value.background)if(h(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&S(e.value.background)){const t=B(e.value.background);if(t.a==null||t.a===1){const s=P(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(h(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function q(e,a){const n=u(()=>({text:l(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=x(n);return{textColorClasses:t,textColorStyles:s}}function L(e,a){const n=u(()=>({background:l(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=x(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const A=["x-small","small","default","large","x-large"],G=i({size:{type:[String,Number],default:"default"}},"size");function H(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return k(()=>{let n,t;return I(A,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:r(e.size),height:r(e.size)}),{sizeClasses:n,sizeStyles:t}})}const J=i({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:$,...N(),...G(),...V({tag:"i"}),...T()},"VIcon"),M=R()({name:"VIcon",props:J(),setup(e,a){let{attrs:n,slots:t}=a;const s=w(),{themeClasses:o}=F(e),{iconData:c}=E(u(()=>s.value||e.icon)),{sizeClasses:C}=H(e),{textColorClasses:y,textColorStyles:z}=q(j(e,"color"));return D(()=>{var m,b;const f=(m=t.default)==null?void 0:m.call(t);f&&(s.value=(b=O(f).filter(g=>g.type===U&&g.children&&typeof g.children=="string")[0])==null?void 0:b.children);const d=!!(n.onClick||n.onClickOnce);return _(c.value.component,{tag:e.tag,icon:c.value.icon,class:["v-icon","notranslate",o.value,C.value,y.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[C.value?void 0:{fontSize:r(e.size),height:r(e.size),width:r(e.size)},z.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}}),Q=i({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function W(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{roundedClasses:u(()=>{const t=l(e)?e.value:e.rounded,s=l(e)?e.value:e.tile,o=[];if(t===!0||t==="")o.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))o.push(`rounded-${c}`);else(s||t===!1)&&o.push("rounded-0");return o})}}const X=i({border:[Boolean,Number,String]},"border");function Y(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{borderClasses:u(()=>{const t=l(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))s.push(`border-${o}`);return s})}}const Z=i({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function p(e){return{elevationClasses:u(()=>{const n=l(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}export{M as V,Z as a,Q as b,Y as c,p as d,W as e,x as f,G as g,H as h,q as i,X as m,L as u};