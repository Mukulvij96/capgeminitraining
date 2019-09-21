angular.module('chatapp').controller('resetController',  function ($scope, services,$stateParams) {

    $scope.resetController = function () {
       $scope.id=$stateParams.token;
       console.log($scope.id);
       if($scope.newPassword== $scope.confirmPassword)
        {
            let data = {
"password":$scope.confirmPassword
      }
       console.log("data--", data);
       services.reset(data,$scope.id);
    }

else
{
console.log("Passwords do not match ")
}
    }
})