/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 13, 2017, 3:13:12 PM
 Author     : nguyen.xuan.tam
 */

var app = angular.module('operator', ['ngRoute', 'ui.bootstrap', 'ngFlash', 'ngMessages']);
app.config(function ($routeProvider) {
    $routeProvider
            //manager supervisor
            .when('/', {
                templateUrl: 'client/app/operator/views/home/index.html',
            })
            .when('/operator/supervisor', {
                templateUrl: 'client/app/operator/views/supervisors/index.html',
            })
            .when('/operator/supervisor/add', {
                templateUrl: 'client/app/operator/views/supervisors/add.html',
            })
            .when('/operator/supervisor/:id', {
                templateUrl: 'client/app/operator/views/supervisors/show.html',
            })
            ///Manager group
            .when('/operator/group', {
                templateUrl: 'client/app/operator/views/group/index.html',
            })
            .when('/operator/group/add', {
                templateUrl: 'client/app/operator/views/group/add.html',
            })
            .when('/operator/group/edit/:id', {
                templateUrl: 'client/app/operator/views/group/edit.html',
            })
            .when('/operator/group/:id', {
                templateUrl: 'client/app/operator/views/group/show.html',
            })
            ///Manager student
            .when('/operator/student', {
                templateUrl: 'client/app/operator/views/students/index.html',
            })
            .when('/operator/student/add', {
                templateUrl: 'client/app/operator/views/students/add.html',
            })
            .when('/operator/student/print', {
                templateUrl: 'client/app/operator/views/students/print.html',
            })
            .when('/operator/student/print-data', {
                templateUrl: 'client/app/operator/views/students/print_data.html',
            })
            .when('/operator/student/:id', {
                templateUrl: 'client/app/operator/views/students/show.html',
            })
            .when('/operator/student/profile/:id', {
                templateUrl: 'client/app/operator/views/students/profile.html',
            })
            //*** profile
            .when('/operator/profile', {
                templateUrl: 'client/app/operator/views/profile/show.html',
            })
            .when('/operator/profile/edit', {
                templateUrl: 'client/app/operator/views/profile/edit.html',
            })
            .when('/operator/profile/change-password', {
                templateUrl: 'client/app/operator/views/profile/password.html',
            })

}).run(function ($window) {
    if (!$window.sessionStorage.user) {
        $window.location.href = '/demo/login.html';
    } else if (JSON.parse($window.sessionStorage.user).role != 2) {
        $window.location.href = '/demo/pages/page_403.html';
    }
});
app.controller('operatorController', function ($scope, $http, $window) {
    $scope.user = JSON.parse($window.sessionStorage.user);
    /**
     * 
     * @returns {undefined}
     */
    $scope.logout = function () {
        delete $window.sessionStorage.user;
        delete $window.sessionStorage.token;
        $window.location.href = '/demo/login.html';
    };
    /**
     * list student
     */
});
