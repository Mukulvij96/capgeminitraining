////     app.controller("loginController", [$scope, function ($scope) {
//         console.log($scope);
//         $scope.email = "";
//         $scope.password = "";
//     }])
angular.module('chatapp').controller('regController',['$scope','service',  function ($scope, service) {

   $scope.registerController = function () {
      let data = {
         "firstName": $scope.firstName,
         "lastName": $scope.lastName,
         "email": $scope.email,
         "password": $scope.password
      }
      console.log("data--", data);
      service.register(data);
   }

   //  function random() {
   //     console.log(XSDVSDS)

   //  }
   //  random()
   //var obj={}
   //obj.name=$scope.name;
   //obj.email=$scope.email;
   //obj.password=$scope.password;
   //obj.confirmPassword=$scope.confirmPassword;
   //services.registerrr($http,$log,$scope);
}])