const C='nt-v2',X=['https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js','https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all([c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'])].concat(X.map(u=>fetch(u,{mode:'no-cors'}).then(r=>c.put(u,r)).catch(()=>{}))))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const same=new URL(e.request.url).origin===location.origin;
const net=()=>fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque')){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r});
e.respondWith(same?net().catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))):caches.match(e.request).then(r=>r||net()))});
