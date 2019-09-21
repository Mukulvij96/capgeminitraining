angular.module('chatapp').controller('resetController',  function ($scope, services) {

    $scope.resetController = function () {
       let data = {
"newPassword":$scope.newPassword,
"confirmPassword":$scope.confirmPassword
       }
       console.log("data--", data);
       services.reset(data);
    }
})