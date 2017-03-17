/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 13, 2017, 3:13:12 PM
 Author     : nguyen.xuan.tam
 */

var app = angular.module('supervisor', ['ngRoute', 'ui.bootstrap', 'ngMessages', 'ngFlash']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'client/app/supervisor/views/home/index.html',
            })
            .when('/supervisor/student', {
                templateUrl: 'client/app/supervisor/views/students/index.html',
            })
            .when('/supervisor/student/add', {
                templateUrl: 'client/app/supervisor/views/students/add.html',
            })
            .when('/supervisor/student/:id', {
                templateUrl: 'client/app/supervisor/views/students/show.html',
            })
            .when('/supervisor/student/profile/:id', {
                templateUrl: 'client/app/supervisor/views/students/profile.html',
            })
            //*** profile
            .when('/supervisor/profile', {
                templateUrl: 'client/app/supervisor/views/profile/show.html',
            })
            .when('/supervisor/profile/edit', {
                templateUrl: 'client/app/supervisor/views/profile/edit.html',
            })
            .when('/supervisor/profile/change-password', {
                templateUrl: 'client/app/supervisor/views/profile/password.html',
            })
}).run(function ($window) {
    if (!$window.sessionStorage.user) {
        $window.location.href = '/demo/login.html';
    } else if (JSON.parse($window.sessionStorage.user).role != 1) {
        $window.location.href = '/demo/pages/page_403.html';
    }
});
app.controller('supervisorController', function ($scope, $http, $window) {
    $scope.lang = "ja";
    $scope.user = JSON.parse($window.sessionStorage.user);
    /**
     * 
     * @returns {undefined}
     */
    $scope.logout = function () {
        delete $window.sessionStorage.user;
        $window.location.href = '/demo/login.html';
    };
    /**
     * list student
     */

});
