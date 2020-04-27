var express = require('express');
var app = express();
var dbObj =  require('./db/db');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile('public/html/index.html', {root: __dirname })
 })

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded());

app.get('/data', dbObj.getData);
app.post('/data', dbObj.addData);

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

console.log('holi3')