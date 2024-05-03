// Install event: Cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("currency-converter-v2")
      .then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/asssets/application.bundle.css",
          "/assets/favicon.ico",
          "/index.bundle.js"
        ]);
      })
      .catch((error) => {
        console.error("Failed to cache resources:", error);
      })
  );
});

  
  // Fetch event: Serve from cache or network
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  // Activate event: Cleanup old caches
  self.addEventListener("activate", (event) => {
    const cacheWhitelist = ["currency-converter-v2"];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  