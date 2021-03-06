var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/toned.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'toned.png'));
});
app.get('/ui/headorheart.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'headorheart.jpg'));
});
app.get('/ui/home.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home.jpg'));
});
app.get('/ui/save.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'save.jpg'));
});
app.get('/ui/bird.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bird.jpg'));
});
app.get('/ui/bg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
