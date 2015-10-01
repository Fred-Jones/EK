var User = require('../models/user.js')
module.exports = function (app) {
  app.use('/', )
}


User.findOne({username: username}, function (err, user) {
  if(err) throw new Error(err)
  if(!err && user) {
    console.log(user)
    var pic = user.prof.profpic || 'no prof pic'
  }
  return {
    userinfo: {
      profpic: null ,
      username: null,
      email: null,
    }
  }

})
