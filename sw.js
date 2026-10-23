// Service worker do Money: deixa o app instalável e abre rápido.
// Caminhos relativos: funciona na raiz (Netlify) e em subpasta (GitHub Pages).
// Os dados financeiros NÃO ficam em cache: vêm sempre do Supabase.
const VERSAO = "money-v5";   // troque (v2, v3…) quando publicar uma atualização
const ARQUIVOS = ["./", "./index.html", "./config.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./privacidade.html", "./termos.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return; // Supabase e CDNs: sempre pela rede
  e.respondWith(fetch(e.request).then(r => { const copia = r.clone(); caches.open(VERSAO).then(c => c.put(e.request, copia)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
