

angular.module('chatapp').service('services', function ($http,$state) {

    this.login = function (dataObj) {
        console.log("dataObj", dataObj);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: dataObj
        })
            .then(function (success) {
                console.log("data after api call is success", success);
                $state.go('Dashboard')
            }, function (error) {
                console.log("data after api call is error", error);
            })
    }
    this.register = function (dataObj) {
        console.log("dataObj", dataObj);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: dataObj
        })
            .then(function (success) {
                console.log("data after api call is success", success);
                $state.go('login')
            }, function (error) {
                console.log("data after api call is error", error);
            })
    }
    this.reset = function (dataObj,token) {
        console.log("dataObj", dataObj);
        console.log("token in reset " + token);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/reset',
           headers:{
               token:token
           },
            data: dataObj
        })
            .then(function (success) {
                console.log("data after api call is success", success);
                $state.go('login')
            }, function (error) {
                console.log("data after api call is error", error);
            })
    }
    this.forget = function (dataObj) {
        console.log("dataObj", dataObj);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/forget',
            data: dataObj
        })
            .then(function (success) {
                console.log("data after api call is success", success);
            }, function (error) {
                console.log("data after api call is error", error);
            })
    }

    this.getAllUsers = function (callback) {
        // console.log("dataObj", dataObj);
        $http({
            method: 'GET',
            url: 'http://localhost:3000/getAllUsers'    
        })  .then(function successCallback(response) {
            callback(null,response.data.result)
        },
            function failureCallback(response) {
                callback(response);
            })
    }

})

