var express = require('express')
var r = express.Router()
var pport = require('../../config/passport.js')

module.exports = function(app) {
    app.use('/', r)
    r.get('/login', function(req, res, next) {
      res.render('login')
    })
    r.post('/login', app.login, function (req, res, next) {
      res.render('user')

    })
    r.get('/logout', app.logout, function(req, res, next){
      res.end('logout')
    })

  };
