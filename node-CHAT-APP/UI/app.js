var application = angular.module("chatapp", ['ui.router'])
// require('../UI/templates');

application.config(function ($stateProvider, $urlRouterProvider) {

    // $urlRouterprovider.otherwise('/index')

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: './templates/register.html',
            controller: 'regController',

        })

        .state('login', { 
            url: '/login',
            templateUrl: './templates/login.html',
            controller: 'loginController',

        })
        .state('forgot', {
            url: '/forgot',
            templateUrl: './templates/forgot.html',
            controller: 'forgotController',

        })
        .state('reset', {
            url: '/reset',
            templateUrl: './templates/reset.html',
            controller: 'resetController',

        })
    $urlRouterProvider.otherwise('/index')

    // .when('register',{
    //     url:'/templates/register.html',
    //     templateUrl:'../UI/templates/register.html',
    //     controller:'loginController'
    // })
})