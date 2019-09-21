angular.module('chatapp').service('service',function($http){

    this.login=function(dataObj){
    console.log("dataObj",dataObj);
    $http({
    method:'POST',
    url:'http://localhost:3000/login',
    data: dataObj
    })
    .then(function(success){
    console.log("data after api call is success", success);
    },function(error){
    console.log("data after api call is error", error);
    })
    }
    })