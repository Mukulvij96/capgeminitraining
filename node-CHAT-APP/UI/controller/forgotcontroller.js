angular.module('chatapp').controller('forgotController',  function ($scope, service) {

    $scope.forgotController = function () {
       let data = {

          "email": $scope.email,
          
       }
       console.log("data--", data);
       service.forgot(data);
    }
})