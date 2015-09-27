var passport = require('passport'),
LocalStrategy = require('passport-local')
var User = require('../app/models/user.js')
var userSemilla = require('../app/models/user.semilla.js')('ElDon', 'LaContrasena', 'mmaammbbuu@gmail.com')
// userSemilla('ElDon', 'LaContrasena', 'mmaammbbuu@gmail.com')

passport.use(new LocalStrategy(
  //consider replacement with [app]__authenticate_User
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
));



module.exports = function (app) {
  // app.authenticateUser = passport.authenticate('local')//__authenticate_User
  app.isAuthenticated = __isAuthenticated
  app.login = __authenticate_User
  app.logout = __logout

}
function __isAuthenticated (req, res, next) {
  //User.findOne({username:req.username, password: req.password}, function() {})
    if(true) {
        console.log('__isAuthenticated')
        return next();

    } else {
        console.log('redirect')
        res.redirect('/');
    }

}
function __logout(req, res) {
  //logout here
  console.log('__logout')
  res.redirect('/')
}



function __authenticate_User (req, res, next) {
  console.log('__authenticate_User')
  next()

  //   User.findOne({ username: username }, function (err, user) {
  //     if(!e) {
//        console.log('User: ' + user.username + ' --login')

//      }else {
//          throw new Error(err)
//      }
  //   });


}
