if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const a=e=>c(e,s),d={module:{uri:s},exports:o,require:a};i[s]=Promise.all(n.map((e=>d[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"assets/index-AydG4Cmu.css",revision:null},{url:"assets/index-iqpTdu45.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/test.png",revision:"12e5cbbb63024460755560bb7e03f0a4"},{url:"index.html",revision:"66a0b781044a122c729e9808aff25498"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"pwa-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"registerSW.js",revision:"2cbd7744493174a465b9b05fe9e0f5d5"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"apple-touch-icon.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"masked-icon.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"pwa-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"pwa-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"manifest.webmanifest",revision:"ce91360770ce5a58335cdcf5a261a508"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
