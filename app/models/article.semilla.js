var Article = require('./article.js');
module.exports = function(title, url, text) {
  var semilla = new Article({
    title: title,
    url: url,
    text: text
  })
  semilla.save()
}
