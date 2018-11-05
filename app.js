var express = require('express');


var app = express();


app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Hello World');

});


app.listen(3000);