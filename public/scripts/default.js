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

const main = async () => {
  await requestNotificationPermission();

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
        url:
          "https://morning-thicket-10437.herokuapp.com/operationsresearch.pdf"
      }).then(function(data) {
        console.log("success: ",data)
        window.open("operationsresearch.pdf", "_blank", "fullscreen=yes");
      }).catch(function(err) {
        console.log("error: ",err)
      }).finally(function(dd) {
        console.log("finally: ",dd)
      });
    }
  ]);
};

main();
