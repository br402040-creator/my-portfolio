const CACHE="portfolio-v2";
const FILES=["./","./index.html","./style.css","./manifest.json","./project1.html","./project2.html","./project3.html","./about.html"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).catch(()=>{})).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method==="GET")e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
