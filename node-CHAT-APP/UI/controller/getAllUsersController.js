

angular.module('chatapp').controller('getAllUsersController',  function ($scope, services) {
   
    $scope.getAllUsersController=function() { 
        console.log("inside controller ");
        
   
}
services.getAllUsers((err,res) =>{
    if(err)
    return err;
    if(res)
    {
        console.log(res);
        $scope.data=res;
        // console.log(res.data.result);
        // $scope.data=JSON.stringify(res);

        console.log("After clicking " +$scope.data)
    }
})
})
    //    (err,res) => {
//            if(err)
//            {
//                console.log("List Not there");
//                return err;
//            }
//            if(res)
//            {
//                $scope.data=JSON.stringify(res);
//                console.log("After clicking " + $scope.data);
//            }
//        });
   
//  }
//  )