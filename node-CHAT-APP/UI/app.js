var application = angular.module("chatapp", ['ui.router'])
// require('../UI/templates');

application.config(function ($stateProvider, $urlRouterProvider) {

    // $urlRouterprovider.otherwise('/index')

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: './templates/register.html',
            controller: 'registerController',

        })

        .state('login', { 
            url: '/login',
            templateUrl: './templates/login.html',
            controller: 'loginController',

        })
        .state('forget', {
            url: '/forget',
            templateUrl: './templates/forget.html',
            controller: 'forgetController',

        })
        .state('reset', {
            url: '/reset/:token',
            templateUrl: './templates/reset.html',
            controller: 'resetController',

        })
        .state('Dashboard',{
            url:'/Dashboard',
            templateUrl:'./templates/Dashboard.html',
            controller:'getAllUsersController'

        })
    $urlRouterProvider.otherwise('/index')

    // .when('register',{
    //     url:'/templates/register.html',
    //     templateUrl:'../UI/templates/register.html',
    //     controller:'loginController'
    // })
})