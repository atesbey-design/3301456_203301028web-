'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "daf1349adbb33629674539d109409dc7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ccda59d26fbb286013a9bbbfe36fbbfb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ed9202eaaebc164aae18a76fed65ca3",
".git/logs/refs/heads/master": "6ed9202eaaebc164aae18a76fed65ca3",
".git/logs/refs/remotes/origin/master": "5e15789096b29e6ed49ceccf171a7b21",
".git/objects/0c/95a52f8cd7ec5dd821d364f2b4d47f52721f86": "c308fb5484b7849350e5aa8843c146fa",
".git/objects/0d/08ed86d7a02c10e64fe3b16e9ef6694297d2d9": "d1dc3a9397c01fc7963b43e6df008004",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1b/7baa49794a14f19957f416b27925f84ceef33c": "b32b3b4b98af1c706c4e00f2c5df4265",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2c/14e40fcf5de228ddc340bca5ee9ec07e1367c6": "a0862119d4fd7fe50d0222570c9a1d8e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/f5d28bf4c27b1406994fd8b7042200c8db9f14": "a13932bc663a192f4aa99adbe750a826",
".git/objects/35/42e5ec38cc600f992c44f1bacf719f18050d9e": "5db29faade865d8f898194af77456458",
".git/objects/35/a8b599205116350a72329c469f1ba8b818b114": "7bd5adcb9d90170f4c47f3d89da91053",
".git/objects/36/d867c42cac1425bdce90a164d28352e8ecd98a": "4da926a400a7e3035de90dd9eac8aed2",
".git/objects/3c/ecf1e86fcf715727607d13caf501e600fd5b8e": "b7f46812089fe8f7741dd53f7483b6cf",
".git/objects/41/e78c1b2482f691a9f4c69f832f45f3cdbda758": "319b2a80e52bd84f7fa87f476af97d86",
".git/objects/44/ee437f906edeb78a2aca4fc8f48c4de2f724ec": "8cee9dfe25829cedfddf29511920ff6d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/177b320b0eba5748573254f169fa8fac8a47f2": "a95cf0be32d60f4c481011c619258b55",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/eaebf3326c902cdc9a74b9c3ddafe60601e9e3": "dec848993cd35267c35c7380717621ce",
".git/objects/5f/e75df4e0c67d0bcc22d2679e59882d65a1b43e": "88dc2a78bb46bd9556dfacd25f8eabc8",
".git/objects/67/8c732df6289a685be217a27473eeae0f07765b": "b8a8b9308f2b00fc3be4706e558c2ef0",
".git/objects/6b/feaeaf5c3bda1a567dc5bda4cb13ca6ac09ff8": "f3df97e9f3672501ca9a4638c738d4fc",
".git/objects/6c/f82641cb09d5450488e9a1aa4d2d8d7845ed02": "219c36a597810d32e931fea527742b83",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/e378dccfcebbf5a9e3817d4df5ed868dd2e044": "7c52095226c0157490e272297e562567",
".git/objects/81/ad01cd747fcdbf85fb57de32fef188e8535d1e": "d3de36d8e31c08f8ce1111eb16be61a7",
".git/objects/85/f39001fc93c38ba502951aa0dbe267418c9f9f": "cebe73f752b0a65a22dfe6818d9884a7",
".git/objects/86/4eb17b46b61acb0ed900542367561649dd3573": "9f2b293280716ded394324cf9fb74304",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/bafee33b365e6b7709cb109dc56e512830dc3c": "d13723f39370950876ce9d492be16e31",
".git/objects/96/2c066b5eff8746fe8c6172d71f44aace66c5d2": "37dd5bdff7fd52cd92e871fa0bc33c09",
".git/objects/99/7c1993fae377d74ca9bc05feaf99970c857bd9": "5202408f49433d0f7ca710b07da8db55",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/cbc211246138b18de66310d8fa14c85aa5ecc2": "f61b223bc7e35b0c8c96c79d9a61c28d",
".git/objects/a7/554bd15d7b07891b8040ad16e96e75214b2166": "09352dd54d7118196af1490598eab128",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/aa/0d1631e0091e300c1872f4acdf63b54b5eae9b": "a304e039c1c5f24ca0fddd4f7506844a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/11c9a37f65d1db684a2adbfdafed1dcb0a6b79": "4a2716dec31cfe4116a90a096ebbfcd4",
".git/objects/b3/59bab6fd4446abd3fe255c097ed94443e294d8": "a1ab2fb0345fca14234ce070c6c65aa8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/c92a1e091513719a339f67dc65001e345c9618": "bb6e80850334578d34953e5858cb6b11",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c8/ed59307385c272ccf885c95372a99a2f7ce8ac": "6e1d6b7fdbec4699946051eaa5c08c01",
".git/objects/c9/b05a41fc76f676fb545a69e142d533cf4f46e6": "9713d36093bd56ec5618a5116c21767e",
".git/objects/d2/bfeaa8808c2a6d27f11ef33b3213f83dd7c191": "089474a27715551069d5ce6d1d4967b5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/576ab5c64d18268a11938497e5c18c84be39dd": "58f3ed1d97d5db56bc7f10c3b7f6fbd7",
".git/objects/df/fc7812a036ed7f096ad8855a90dbe1a64cf209": "b476476792438f56e281f9b67131cfa3",
".git/objects/e3/a42a469d7e773c1e60b847fdf7dea577aff225": "0e41c64c35626a21dfd89c20d82b1604",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/98b7459eeca233fe13c7859b5edec7bf150917": "7e1747a42be0249cd05211a2020ef014",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/8f65afa1978ec1bb58cd5ebaaad38c6fc8ae4d": "6b02f221cf08a0027babaad3f250e7c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/98d6b424beb084cfdc5cb0f58e8696cc81707b": "a20a73023a9eec446cfd880501167b69",
".git/objects/f2/0a9b122489637ef1d4ad966edabd517e04c53b": "89ab4272fd10efbe3dd34aca54d30772",
".git/objects/f2/ff3ad90d4157d78e4e55f276cf0a66b8d1809f": "e78adde792020fde07ae49e90a3259ba",
".git/objects/f3/11fa580fe741120284bbddab925f9246f24a7c": "92440c2562b3b0baa2590df0d92547aa",
".git/refs/heads/master": "f82291031dd0d31e4607521f792732f5",
".git/refs/remotes/origin/master": "f82291031dd0d31e4607521f792732f5",
"assets/AssetManifest.json": "4e07721424f2140f895b4cd408b51050",
"assets/assets/appstore.png": "f01b193409cc942ecef372f8753f7a19",
"assets/assets/audios/k%25C3%25BCl.mp3": "7df072d522f2b731e3218fd88a260fac",
"assets/assets/background.jpg": "0d7106d15f2673746861c7674dd881d3",
"assets/assets/background2.jpg": "9805c4e14a0cf27aea86c3cf9daf5b14",
"assets/assets/backgrounds.jpg": "c610334b77a8e320b7478a4057ec2334",
"assets/assets/elements/bilg_muh_2021_2022_bahar_final_sinav_program.pdf": "855ad860c8d5eaed0d0702a609b48f89",
"assets/assets/elements/categoryimage-1.jpg": "7ce935ed79d7804166857327de06e21a",
"assets/assets/elements/categoryimage0.jpg": "e0b199b175353e424dd406465d65319b",
"assets/assets/elements/categoryimage1.jpg": "4e1b3eda3d89d7b4d5b3676d4573db87",
"assets/assets/elements/categoryimage2.jpg": "2543851d08e8e0b8e592ad2dd8f29dcd",
"assets/assets/elements/categoryimage3.jpg": "c370bfc32ad7d1a1964667f299ecc574",
"assets/assets/elements/categoryimage4.jpg": "7559744b9fcddeb19b7629a0c3aaf910",
"assets/assets/elements/categoryimage5.jpg": "e2b33fc5ba8ebbd6883413a98ff2c03e",
"assets/assets/elements/TradingView%2520(1).appinstaller": "02b32866f666d6505db04e3a2c076c4e",
"assets/assets/elements/TradingView.appinstaller": "02b32866f666d6505db04e3a2c076c4e",
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
"assets/NOTICES": "0de637e8543e9b150fd03a5e4280b431",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98f0d8deea0125a2668fdfd488050221",
"/": "98f0d8deea0125a2668fdfd488050221",
"main.dart.js": "ac7c0da880601d3c82360bbfc71fcb3c",
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
