var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');




app.use(express.static('public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, res) {
    //res.sendfile('indexdefault.html', { root: __dirname + "/" }) ;
    res.sendfile('index.html', { root: __dirname + "/" });
});
app.listen(7000, function() {
    console.log('Example app listening on port 7000....!');
});

