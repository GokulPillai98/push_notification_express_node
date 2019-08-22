var express = require("express");
var app = express();
var fs = require('fs');
var index = fs.readFileSync('./public/index.html');
app.use(express.static(__dirname+'/public'));
console.log(__dirname+'/public')
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});
