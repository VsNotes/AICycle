/* ═══════════════════════════════════════════════
   AICycle Service Worker
   - Caches all pages on first load
   - Serves from cache when offline
   - Background sync every 15 minutes when app inactive
   ═══════════════════════════════════════════════ */

const CACHE_NAME    = 'aicycle-v1';
const CACHE_VERSION = 'aicycle-v1';

/* All pages and assets to pre-cache */
const PRECACHE_URLS = [
  '/AICycle/',
  '/AICycle/index.html',
  '/AICycle/home.html',
  '/AICycle/intro.html',
  '/AICycle/ml.html',
  '/AICycle/deeplearning.html',
  '/AICycle/llms.html',
  '/AICycle/rag.html',
  '/AICycle/agentic.html',
  '/AICycle/agentic-cert.html',
  '/AICycle/interview.html',
  '/AICycle/python-rag.html',
  '/AICycle/dotnet-rag.html',
  '/AICycle/tools.html',
  '/AICycle/career.html',
  '/AICycle/qa-automation.html',
  '/AICycle/finance-ai.html',
  '/AICycle/hr-ai.html',
  '/AICycle/teacher-ai.html',
  '/AICycle/student-ai.html',
  '/AICycle/doctor-ai.html',
  '/AICycle/scrum-ai.html',
  '/AICycle/manifest.json',
  '/AICycle/icons/icon-192.png',
  '/AICycle/icons/icon-512.png'
];

/* ── INSTALL: pre-cache everything ── */
self.addEventListener('install', event => {
  console.log('[SW] Installing AICycle v1...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Pre-caching all pages');
        /* Cache individually so one failure doesn't break all */
        return Promise.allSettled(
          PRECACHE_URLS.map(url =>
            cache.add(url).catch(err =>
              console.warn('[SW] Could not cache:', url, err)
            )
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: clear old caches ── */
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: Cache First, fallback to network ── */
self.addEventListener('fetch', event => {
  /* Only handle GET requests for our origin */
  if (event.request.method !== 'GET') return;
  if (!event.request.url.includes('vsnotes.github.io')) return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          /* Serve from cache immediately */
          /* Also update cache in background (stale-while-revalidate) */
          const networkFetch = fetch(event.request)
            .then(response => {
              if (response && response.status === 200) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
              }
              return response;
            })
            .catch(() => {/* offline — cache already served */});
          return cached;
        }
        /* Not in cache — fetch from network and cache it */
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200) return response;
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            return response;
          })
          .catch(() => {
            /* Offline fallback */
            return caches.match('/AICycle/index.html');
          });
      })
  );
});

/* ── BACKGROUND SYNC: refresh cache every 15 minutes ── */
self.addEventListener('periodicsync', event => {
  if (event.tag === 'aicycle-refresh') {
    console.log('[SW] Background refresh triggered');
    event.waitUntil(refreshAllCache());
  }
});

/* ── MESSAGE: manual refresh trigger from app ── */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'FORCE_REFRESH') {
    console.log('[SW] Manual refresh requested');
    event.waitUntil(
      refreshAllCache().then(() => {
        /* Notify all open tabs */
        self.clients.matchAll().then(clients =>
          clients.forEach(client =>
            client.postMessage({ type: 'CACHE_UPDATED' })
          )
        );
      })
    );
  }
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* ── PUSH: show notification ── */
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'AICycle Update', {
      body: data.body || 'New content is available!',
      icon: '/AICycle/icons/icon-192.png',
      badge: '/AICycle/icons/icon-96.png',
      tag: 'aicycle-update',
      renotify: true,
      data: { url: data.url || '/AICycle/' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/AICycle/')
  );
});

/* ── HELPER: refresh all cached URLs ── */
async function refreshAllCache() {
  const cache = await caches.open(CACHE_NAME);
  const refreshPromises = PRECACHE_URLS.map(async url => {
    try {
      const response = await fetch(url, { cache: 'no-cache' });
      if (response && response.status === 200) {
        await cache.put(url, response);
        console.log('[SW] Refreshed:', url);
      }
    } catch (err) {
      console.warn('[SW] Could not refresh:', url, err);
    }
  });
  return Promise.allSettled(refreshPromises);
}
