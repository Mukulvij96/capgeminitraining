angular.module('chatapp').service('service',['$http',function($http){

    this.forgot=function(dataObj){
    console.log("dataObj",dataObj);
    $http({
    method:'POST',
    url:'http://localhost:3000/forgot',
    data: dataObj
    })
    .then(function(success){
    console.log("data after api call is success", success);
    },function(error){
    console.log("data after api call is error", error);
    })
    }
    }])