var Usuario = require('./user.js')
module.exports = function (un, pw, email) {
  var semilla = new Usuario({
    username: un,
    password: pw,
    email: email,
    id: 0
  })
  semilla.save()
  return semilla
}
