angular.module('chatapp').service('services',function ($http) {

    this.register = function (dataObj) {
        console.log("dataObj", dataObj);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: dataObj
        })
            .then(function (success) {
                console.log("data after api call is success", success);
            }, function (error) {
                console.log("data after api call is error", error);
            })
    }
})
