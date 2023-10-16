self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('calculator-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/calc_re4.png',  // Replace with your actual resources
          // Add other resources you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
