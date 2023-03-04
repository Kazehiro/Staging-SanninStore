'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "875ee02f4382b12321a20e9cc3e1ec39",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/images/aov.png": "55956de0b22740448326d5dab9e46714",
"assets/assets/images/banner_1.jpeg": "9b80db5da9379615343b10a823284e50",
"assets/assets/images/banner_2.jpeg": "42a68e7c2f36877eec3a4fd47e42549b",
"assets/assets/images/banner_3.jpeg": "3275b4728be08788a2f9b6ede841c885",
"assets/assets/images/banner_4.jpeg": "cb295686be3311fdd6a30213cbf2bcd1",
"assets/assets/images/cod.png": "2b9aae58f92333dacc7dc15c517c7ca5",
"assets/assets/images/download.jfif": "5fe71db8c7beb8153a8b195e30ab7f29",
"assets/assets/images/dragon_raja.jpg": "52ab3856183b38b377d494a7a7c8f53e",
"assets/assets/images/echocalypse.png": "94aeef367a5efee6aeebb6922b024d92",
"assets/assets/images/ff.png": "3549f67cab9bceae84cd6255926d2120",
"assets/assets/images/ff_max.png": "a0d8b2536f459796b715675a378abe60",
"assets/assets/images/genshin_impact.jpg": "458f6de70f9063c555083a3901eee82a",
"assets/assets/images/goddes_of_victory.png": "2e737b57e4ebf5ceab7c48b7e4078fad",
"assets/assets/images/hokai_impact_3.png": "a5c8683bdd2ee804abf944b70f13c5ca",
"assets/assets/images/laplace_m.png": "5ed97c753d1730bdc22785125c7aee1a",
"assets/assets/images/lifeafter.png": "1b7535ef905633176ed088df6a41d435",
"assets/assets/images/marvel_super_war.jpg": "c8ae4052bdb9fb10af4f3719d6a84904",
"assets/assets/images/ml.png": "5b27a9313e89310e5c88c2f5dc2b465d",
"assets/assets/images/never_after.png": "d5e3923b621a8e8b5b9d4035c51f0f81",
"assets/assets/images/one_punch_man.jfif": "5a6b18484ccb21dc490d6f269bdf04cd",
"assets/assets/images/pubg.png": "ebe4c3a3d00e00e9b26d18fcde77a3b6",
"assets/assets/images/ragnarok.png": "763a4ffe86d405086dc417009663581a",
"assets/assets/images/ragnarok_x.jpg": "84eb364db626bf4af6b0c8c7f2cf97b7",
"assets/assets/images/super_sus.png": "fe3699969b74cad7903cea2be7e4ae7e",
"assets/assets/images/susage_man.png": "3179bb223e7c3e733d6e1039ac7f584b",
"assets/assets/images/the_legend_of_neverland.png": "b54d15da53ff362a30e796aec9a36e99",
"assets/assets/images/tom_and_jerry_chase.png": "05bfa7da69166dfce05bf0fb0264f7f6",
"assets/assets/images/tower_of_fantasy.png": "666ca97d1fdf57efda31e63488f6d4b4",
"assets/assets/images/unnamed.webp": "e15284d412b92afdb8b7e32f6225fac3",
"assets/assets/images/valorant.png": "e1de4c25d0cba4b5da6454c1d6abc22c",
"assets/assets/images/wild_rift.jpg": "b6cf6f5b4bd3acc551834319b25c8925",
"assets/FontManifest.json": "5c7fba46a5ebaa599d521c905f52323c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "36433433b2ff6b2cab0082576022f904",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c120009a1279069e1344b3edb504076d",
"/": "c120009a1279069e1344b3edb504076d",
"main.dart.js": "547f03770efd7d754a9c236b0d1618df",
"manifest.json": "21e3e9d53e66b8ded86e2d93344302b8",
"version.json": "231d60c43e42f7d544e683d24e61e62b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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