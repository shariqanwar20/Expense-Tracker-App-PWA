//add all the files that appear in build(for caching purposes)
const filesToCache = [
    '/',
    '/index.html',
    '/firebase-messaging-sw.js',
    '/favicon.ico',
    'logo192.png',
    'logo512.png',
    'manifest.json',
    '/serviceWorker.js',
    '/static/js/runtime-main.b48d28f7.js.map',
    '/static/js/runtime-main.b48d28f7.js',
    '/static/js/main.1bd258f4.chunk.js.map',
    '/static/js/main.1bd258f4.chunk.js',
    '/static/js/3.5403b97f.chunk.js.map',
    '/static/js/3.5403b97f.chunk.js',
    '/static/js/2.85d8ad04.chunk.js.map',
    '/static/js/2.85d8ad04.chunk.js',
    '/static/css/main.d15c58e0.chunk.css',
    '/static/css/main.d15c58e0.chunk.css.map'
]

this.addEventListener('activate', (e) => {
    console.log('[Service Worker] activated')
})

this.addEventListener('install', (e) => {
    console.log('[Service Worker] installed');
    e.waitUntil(
        caches.open("expense tracker").then((cache) => {
            console.log("caching added files");
            return (cache.addAll(filesToCache).catch((err) => {
                console.log(err);
            }))
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