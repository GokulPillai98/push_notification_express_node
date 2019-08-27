importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

OneSignal.push(["addListenerForNotificationOpened", function(event) {
    console.log("OneSignal notification clicked:", event);
  }]);