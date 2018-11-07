var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var Strategy = require('passport-local').Strategy;
/* var auth = require('Auth'); */

passport.use(new Strategy(
  function(username, password, cb) {
    console.log("testes");
    if(username=="a" && password=="aa") return true;
    else console.log("erreur");   
}));


var app = express();

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/',
    function(req,res){
        res.render('home', { user: req.user });
    });

app.get('/login',
    function(req,res){
        res.render('login');
    });

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req,res){
        res.redirect('/');
    });

app.get('/logout',
    function(req, res){
    req.logout();
    res.redirect('/');   
    });

module.exports = app;
