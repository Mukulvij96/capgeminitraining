angular.module('chatapp').controller('loginController',  function ($scope, services) {

    $scope.loginController = function () {
       let data = {

          "email": $scope.email,
          "password": $scope.password
       }
       console.log("data--", data);
       services.login(data);
    }
})