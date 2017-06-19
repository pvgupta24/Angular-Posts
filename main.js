/**
 * Created by Praveen Gupta on 14-06-2017.
 */
var app = angular.module('app', ['ui.router','ngStorage']);
app.config(function ($stateProvider, $urlRouterProvider) {

    // If any route other than the one's specified below is typed by user, he will be redirected to /rooms
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './templates/login.html'
            // it is not compulsory to have a controller
        })

        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html'
            // it is not compulsory to have a controller
        })
        .state('posts', {
            url: '/posts',
            templateUrl: 'templates/posts.html'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'templates/users.html'
        })
        .state('home', {

            url: '/home',
            templateUrl: './templates/home.html'
            // it is not compulsory to have a controller
        })
});

function toast() {
    $myToast=$('#myToast');
        $myToast.modal('show');

    setTimeout(function() { $myToast.modal('hide'); }, 1500);
}
