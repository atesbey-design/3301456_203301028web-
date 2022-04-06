'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "64bffd746f411985d03c0f8a042becd9",
"assets/assets/appstore.png": "f01b193409cc942ecef372f8753f7a19",
"assets/assets/audios/k%25C3%25BCl.mp3": "7df072d522f2b731e3218fd88a260fac",
"assets/assets/background.jpg": "0d7106d15f2673746861c7674dd881d3",
"assets/assets/background2.jpg": "9805c4e14a0cf27aea86c3cf9daf5b14",
"assets/assets/backgrounds.jpg": "c610334b77a8e320b7478a4057ec2334",
"assets/assets/elements/categoryimage0.jpg": "e0b199b175353e424dd406465d65319b",
"assets/assets/elements/categoryimage1.jpg": "4e1b3eda3d89d7b4d5b3676d4573db87",
"assets/assets/elements/categoryimage2.jpg": "2543851d08e8e0b8e592ad2dd8f29dcd",
"assets/assets/elements/categoryimage3.jpg": "c370bfc32ad7d1a1964667f299ecc574",
"assets/assets/elements/categoryimage4.jpg": "7559744b9fcddeb19b7629a0c3aaf910",
"assets/assets/elements/categoryimage5.jpg": "e2b33fc5ba8ebbd6883413a98ff2c03e",
"assets/assets/k%25C3%25BCl.mp3": "7df072d522f2b731e3218fd88a260fac",
"assets/assets/LOGO.png": "efd40744c9029218d66a191340f04c89",
"assets/assets/logoo.png": "8bddbbb77119b901c517f2095fe9156d",
"assets/assets/profil.jpg": "da0a746c9aa54767b7761c8a64ce1766",
"assets/assets/sarkici/BatuAkdeniz.jpg": "fe4509e6025c6caa3a964f01004ceb7b",
"assets/assets/sarkici/EmirCan%25C4%25B0%25C4%259Frek.jpg": "77b85d4e5306d1d1256738e38d898676",
"assets/assets/sarkici/FeridunDuzagac.jpg": "118eaa831f62944e100c07c9179d553b",
"assets/assets/sarkici/HalilSezai.jpg": "16715b7e2328e09e24076497ba969b8d",
"assets/assets/sarkici/Kadr.jpg": "fe659776032df40e7998fb7509133a68",
"assets/assets/sarkici/LeylaTheBand.jpg": "23574bb5126d020b7fde73d34dfe5254",
"assets/assets/sarkici/MahzuniSerif.jpg": "c2cc303245f72b7521e5095bb26f17d6",
"assets/assets/sarkici/MaviGri.jpg": "d3903e1fc9d6c8dfb32bf7f245c65cd2",
"assets/assets/sarkici/MelikSahin.jpg": "045996a5fb5e3bfec8d7784d278903c9",
"assets/assets/sarkici/Sancak.jpg": "15a7d840b9399041843e4c2e7a25e498",
"assets/assets/sarkici/Yal%25C4%25B1n.jpg": "5092ebfcebc3679311c53b5a1592ae68",
"assets/assets/Spotify.png": "11dc437ab8ef0c32289c092083d20068",
"assets/assets/spotifybackground.jpg": "d98ab3e6da5ebafab6b79e95379925c4",
"assets/assets/SpotifyIcon.png": "3b65e9c18ec40701762f6373bfb93f5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ddefaffcc647748e6d08dbe435fc2f05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf633439e06b6d8e9dfc8f75f830798d",
"/": "bf633439e06b6d8e9dfc8f75f830798d",
"main.dart.js": "5b76feea32b21e8966ea2c18ed2532af",
"manifest.json": "28912e1adaaa70d94ff415139ee798b0",
"version.json": "d2c31a78a91d06ad9e70db25b0356c23"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
