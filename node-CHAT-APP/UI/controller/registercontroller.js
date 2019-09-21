angular.module('chatapp').controller('registerController',function ($scope, services) {

   $scope.registerController = function () {
      let data = {
         "firstName": $scope.firstName,
         "lastName": $scope.lastName,
         "email": $scope.email,
         "password": $scope.password
      }
      console.log("data--", data);
      services.register(data);
   }
})