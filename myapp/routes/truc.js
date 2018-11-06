var express = require('express');
var router = express.Router();

var Promise = require("bluebird");
var fs = require("fs");
Promise.promisifyAll(fs);

router.get('/', function(req, res) {
   
    fs.readFileAsync("page.json").then(JSON.parse).then(function(val) {
    console.log(val.success);
    })
    .catch(SyntaxError, function(e) {
        console.error("invalid json");
    })
    .catch(function(e) {
        console.error("unable to read");
        res.render('truc', { title: 'Express' });
    });

});


module.exports = router;