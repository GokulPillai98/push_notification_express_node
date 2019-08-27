var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "Basic YmY2NTlmMTktOTRkYy00ZWU1LWIyNTMtMWIyZGVmN2RhMGVk"
  };

  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };

  var https = require("https");
  var req = https.request(options, function(res) {
    res.on("data", function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });

  req.on("error", function(e) {
    console.log("ERROR:");
    console.log(e);
  });

  req.write(JSON.stringify(data));
  req.end();
};

var message = {
  app_id: "6dae21b7-0408-466a-a60a-d8e7214aad38",
  contents: { en: "English Message" },
  included_segments: ["All"]
};

sendNotification(message);

/******************/
/** EXAMPLE CODE **/
/******************/
OneSignal.sendSelfNotification(
  /* Title (defaults if unset) */
  "OneSignal Web Push Notification",
  /* Message (defaults if unset) */
  "Action buttons increase the ways your users can interact with your notification.", 
   /* URL (defaults if unset) */
  'https://example.com/?_osp=do_not_open',
  /* Icon */
  'https://onesignal.com/images/notification_logo.png',
  {
    /* Additional data hash */
    notificationType: 'news-feature'
  }, 
  [{ /* Buttons */
    /* Choose any unique identifier for your button. The ID of the clicked button 			 is passed to you so you can identify which button is clicked */
    id: 'like-button',
    /* The text the button should display. Supports emojis. */
    text: 'Like',
    /* A valid publicly reachable URL to an icon. Keep this small because it's 				 downloaded on each notification display. */
    icon: 'http://i.imgur.com/N8SN8ZS.png',
    /* The URL to open when this action button is clicked. See the sections below 			 for special URLs that prevent opening any window. */
    url: 'https://example.com/?_osp=do_not_open'
  },
  {
    id: 'read-more-button',
    text: 'Read more',
    icon: 'http://i.imgur.com/MIxJp1L.png',
    url: 'https://example.com/?_osp=do_not_open'
  }]
);
