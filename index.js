var express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
var fs = require("fs");
var index = fs.readFileSync("./public/index.html");

express()
  .use(cors({ origin: true }))
  .use(express.static(path.join(__dirname, "public")))
  .set("view engine", "ejs")
  .get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(index);
  })
  .get("/sendBrochure", (req, res) => {
    console.log("Send Brochure");
    sendNotification(message);
    res.end(null);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

var sendNotification = function(data) {
  console.log(data,"send notification")
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
