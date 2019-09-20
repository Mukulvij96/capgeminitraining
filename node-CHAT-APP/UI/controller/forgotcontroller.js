angular.module('chatapp').controller('forgotController',['$scope','service',  function ($scope, service) {

    $scope.forgotController = function () {
       let data = {

          "email": $scope.email,
          
       }
       console.log("data--", data);
       service.forgot(data);
    }
}])