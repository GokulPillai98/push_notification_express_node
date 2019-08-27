// const registerServiceWorker = async () => {
//   const swRegistration = await navigator.serviceWorker.register(
//     "./serviceWorker.js"
//   ); //notice the file name
//   return swRegistration;
// };

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};

const showLocalNotification = (title, body, swRegistration) => {
  swRegistration.showNotification(title);
};

var flag = 1;
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
} else {
  $("body").append("<p>DeviceOrientation is not supported</p>");
}

function handleOrientation(event) {
  if (Math.abs(event.gamma) > 75 && Math.abs(event.gamma) < 90 && flag) {
    if (window.DeviceMotionEvent) {
      $("body").append("<p>Added divce motion listener</p>");
      window.addEventListener("devicemotion", handleMotion, false);
      flag = 0;
    } else {
      $("body").append("<p>DeviceMotion is not supported</p>");
    }
  }
}
let moveCounter = 0;
function handleMotion(e) {
  let acc = e.acceleration;
  if (!acc.x) return;
  if (Math.abs(acc.x) >= 5 && Math.abs(acc.y) >= 5) {
    moveCounter++;
    $("body").append("<p>" + moveCounter + "</p>");
    if (moveCounter > 4) {
      window.removeEventListener("devicemotion", handleMotion, false);
      moveCounter = 0;
      $.ajax({
        url: "https://morning-thicket-10437.herokuapp.com/sendBrochure"
      }).then(function(data) {
        $("body").append("<p>brochure is ready</p>");
      });
    }
  }
}

const main = async () => {
  // const swRegistration = await registerServiceWorker();
  const permission = await requestNotificationPermission();
  // showLocalNotification("This is title", "this is the message", swRegistration);
};

main();

var OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  console.log("One signal");
  OneSignal.init({
    appId: "6dae21b7-0408-466a-a60a-d8e7214aad38",
    notifyButton: {
      enable: true
    }
  });
});

OneSignal.push([
  "addListenerForNotificationOpened",
  function(event) {
    console.log("OneSignal notification clicked:", event);
    $.ajax({
      url: "https://morning-thicket-10437.herokuapp.com/operationsresearch.pdf"
    }).then(function(data) {
      window.open("operationsresearch.pdf", "_blank", "fullscreen=yes");
    });
  }
]);
