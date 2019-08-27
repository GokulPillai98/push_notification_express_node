var express = require("express");
const path = require('path');
const PORT = process.env.PORT || 5000
var fs = require('fs');
var index = fs.readFileSync('./public/index.html');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
})
.get('/sendBrochure', (req, res) => {
  console.log("Send Brochure")
  res.end(null);
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
