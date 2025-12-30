const CACHE_NAME = 'busan-2026-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './images/app-icon.png'
];

// 安裝 Service Worker 並快取基本資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 當沒網路時，優先從快取抓取內容
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});