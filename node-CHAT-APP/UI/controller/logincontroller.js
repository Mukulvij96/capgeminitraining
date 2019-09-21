angular.module('chatapp').controller('loginController',  function ($scope, service) {

    $scope.loginController = function () {
       let data = {

          "email": $scope.email,
          "password": $scope.password
       }
       console.log("data--", data);
       service.login(data);
    }
})