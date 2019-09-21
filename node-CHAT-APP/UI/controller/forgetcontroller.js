application.controller('forgetController',function ($scope, services) {

    $scope.forgetController = function () {
       let data = {
          "email": $scope.email,
       }
       console.log("data--", data);
       services.forget(data);
    }
})