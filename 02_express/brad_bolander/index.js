var express = require('express');
var app = express();

var data = {
  'dinosaurs': 'are lonely',
  'why': 'all their friends are dead :('
};

var me = {
  'name': 'Brad',
  'spirit_animal': 'tiger'
}

app.get('/api', function(req, res) {
  res.send(data);
});

app.get('/', function(req, res) {
  res.send(me);
});
console.log('express is working');
app.listen(5000);
