const filesToCache = [
    '/',
    './index.html',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    './serviceWorker.js',
    './manifest.json',
    './logo192.png',
    './logo512.png',
    './favicon.ico'
]

this.addEventListener('activate', (e) => {
    console.log('[Service Worker] activated')
})

this.addEventListener('install', (e) => {
    console.log('[Service Worker] installed');
    e.waitUntil(
        caches.open("expense tracker").then((cache) => {
            console.log("caching added files");
            return (cache.addAll(filesToCache))
        })
        .catch((err) => {
            console.log("Err", err);
        })
    );
})

this.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((respone) => {
            return respone || fetch(e.request)
        })
    )
})