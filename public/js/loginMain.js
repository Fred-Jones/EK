// var app = angular.module('loginModule')
// app.controller('loginController', function ($scope, $http){
//   console.log($scope, $http)
//
// })
$(document).ready(main)
function main() {
  var $submit = $('#submitButton')
    $submit.on('click', function(e) {
      e.preventDefault()
      $.post(window.location.href, function(a,b) {
        console.log('Handled post:\n', a, b)
      })
      // $.ajax({
      //   method: 'POST',
      //   url: 'login',
      //   data: {
      //     username: $('#username').val(),
      //     password: $('#password').val()
      //   },
      //   success: function (a, b) {
      //     console.log(a,b)
      //     console.log('callback')
      //   }
      //
      // })

    })
}
