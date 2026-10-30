// Encadreur — service worker (hors ligne). Changez CACHE à chaque mise à jour du site.
const CACHE = 'encadreur-v1.0.2';
const CORE = ['./', './index.html'];
const EXTRA = ['./manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', e => {
  // Les fichiers secondaires manquants (icônes…) ne bloquent pas l'installation
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(CORE).then(() => Promise.all(EXTRA.map(u => c.add(u).catch(() => null)))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const fromNet = (req, ms) => new Promise((res, rej) => {
  const t = setTimeout(rej, ms);
  fetch(req).then(r => { clearTimeout(t); res(r); }, err => { clearTimeout(t); rej(err); });
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // Réseau d'abord (pour recevoir les mises à jour), cache si hors ligne
    e.respondWith(fromNet(new Request(req.url, { cache: 'no-cache' }), 4000).then(r => {
      if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); }
      return r;
    }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return res;
  })));
});
