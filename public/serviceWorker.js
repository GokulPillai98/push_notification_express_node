// var CACHE_NAME = "my-site-cache-v1";
// var urlsToCache = [];

// self.addEventListener("install", function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function(cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", function(event) {
//     console.log(event, event.request)
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
// const urlB64ToUint8Array = base64String => {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");
//   const rawData = atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };

// // saveSubscription saves the subscription to the backend
// const saveSubscription = async subscription => {
//   const SERVER_URL = "http://localhost:4000/save-subscription";
//   const response = await fetch(SERVER_URL, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(subscription)
//   });
//   return response.json();
// };

// self.addEventListener("activate", async () => {
//   // This will be called only once when the service worker is activated.
//   try {
//     const applicationServerKey = urlB64ToUint8Array(
//       "BFOuzvPZ6wrjxAVuZdQjoUv3kPFkNbs4hh6GiR89fJUuMyzHHvE9JIlf0UUYbo4G9PgTd-rahvO5GW_6CMVW8I8"
//     );
//     const options = {};
//     const subscription = await self.registration.pushManager.subscribe(options);
//     console.log(JSON.stringify(subscription));
//   } catch (err) {
//     console.log("Error", err);
//   }
// });

// // const subscription = await self.registration.pushManager.getSubscription();

// //BFOuzvPZ6wrjxAVuZdQjoUv3kPFkNbs4hh6GiR89fJUuMyzHHvE9JIlf0UUYbo4G9PgTd-rahvO5GW_6CMVW8I8

// self.addEventListener("push", function(event) {
//   if (event.data) {
//     console.log("Push event!! ", event.data.text());
//   } else {
//     console.log("Push event but no data");
//   }
// });

// self.addEventListener("notificationclick", function(event) {
//   let url = "http://google.co.in";
//   const clickedNotification = event.notification;
//   clickedNotification.close(); //android needs explicit close

//   // Do something as the result of the notification click
//   const promiseChain = doSomething(url);
//   event.waitUntil(promiseChain);
// });

// function doSomething(url) {
//   console.log("gokul1");

//   // window.open('MyPDF.pdf', '_blank', 'fullscreen=yes')
//   clients.matchAll({ type: "window" }).then(windowClients => {
//     // Check if there is already a window/tab open with the target URL
//     for (var i = 0; i < windowClients.length; i++) {
//       var client = windowClients[i];
//       // If so, just focus it.
//       if (client.url === url && "focus" in client) {
//         console.log("gokul2");
//         return client.focus();
//       }
//     }
//     // If not, then open the target URL in a new window/tab.
//     if (clients.openWindow) {
//       console.log(clients);
//       console.log("gokul3");
//       return clients.openWindow(url);
//     }
//   });
// }
