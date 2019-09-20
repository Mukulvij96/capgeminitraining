angular.module('chatapp').controller('resetController',['$scope','service',  function ($scope, service) {

    $scope.resetController = function () {
       let data = {
"newpassword":$scope.newpassword,
"confirmpassword":$scope.confirmpassword
       }
       console.log("data--", data);
       service.reset(data);
    }
}])