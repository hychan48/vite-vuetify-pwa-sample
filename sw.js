if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),c={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/default-DiyFLiMa.css",revision:null},{url:"assets/default-OeVWt_T-.js",revision:null},{url:"assets/elevation-Bm2X9AvQ.css",revision:null},{url:"assets/elevation-BT6tilqB.js",revision:null},{url:"assets/index-BFml_P7r.css",revision:null},{url:"assets/index-Bt4c3srt.css",revision:null},{url:"assets/index-BVQ7FPQV.js",revision:null},{url:"assets/index-BWluO3Di.js",revision:null},{url:"index.html",revision:"b7dee5290d04df93dd8faad043d6dc92"},{url:"registerSW.js",revision:"b4c7097c027c78e82d97f6afef74ca9b"},{url:"favicon.ico",revision:"8c7286f7a42b3c7f513e1d5e537f2cd1"},{url:"favicon.svg",revision:"abcc4aa3fc7d37867e9c347fe613180e"},{url:"apple-touch-icon-180x180.png",revision:"99bf82d9b9b4b15e07c350bfe4f6a275"},{url:"maskable-icon-512x512.png",revision:"eb89e42c2e88d9d03a497b1da19e70b8"},{url:"pwa-64x64.png",revision:"a424711729e85b22f05ec133ba6db9dc"},{url:"pwa-192x192.png",revision:"172b745c977f2e541ff9476b1206025d"},{url:"pwa-512x512.png",revision:"24c838d6164981557b5b665305ae43ca"},{url:"manifest.webmanifest",revision:"4405977d4720236c077c0050a993fd66"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map