// Install event: Cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("currency-converter-v1")
      .then((cache) => {
        return cache.addAll([
          "/currencyConverter",
          "/currencyConverter/index.html",
          "/currencyConverter/css/styles.css",
          "/currencyConverter/assets/favicon.ico",
        ]);
      })
      .catch((error) => {
        console.error("Failed to cache resources:", error);
      })
  );
});

  
  // Fetch event: Serve from cache or network
//  self.addEventListener("fetch", (event) => {
//    event.respondWith(
//      caches.match(event.request).then((response) => {
//        return response || fetch(event.request);
//      })
//    );
//  });
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Serve from cache
      }

      // Fetch from the network with error handling
      return fetch(event.request).catch((error) => {
        console.error("Fetch failed:", error);
        // You can return a fallback here, like a cached offline page
      });
    })
  );
});

  
  // Activate event: Cleanup old caches
  self.addEventListener("activate", (event) => {
    const cacheWhitelist = ["currency-converter-v1"];
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
  
