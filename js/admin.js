/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 13, 2017, 3:13:12 PM
 Author     : nguyen.xuan.tam
 */

var app = angular.module('admin', ['ngRoute', 'ui.bootstrap', 'ngFlash', 'ngMessages']);
app.config(function ($routeProvider) {
    $routeProvider
            //manager student
            .when('/', {
                templateUrl: 'client/app/admin/views/home/index.html',
            })
            .when('/admin/student', {
                templateUrl: 'client/app/admin/views/student/index.html',
            })
            .when('/admin/student/:id', {
                templateUrl: 'client/app/admin/views/student/show.html',
            })
            .when('/admin/profile/student/:id', {
                templateUrl: 'client/app/admin/views/student/profile.html',
            })
            ///Manager operator
            .when('/admin/operator', {
                templateUrl: 'client/app/admin/views/operator/index.html',
            })
            .when('/admin/operator/add', {
                templateUrl: 'client/app/admin/views/operator/add.html',
            })
            .when('/admin/operator/edit/:id', {
                templateUrl: 'client/app/admin/views/operator/edit.html',
            })
            .when('/admin/operator/:id', {
                templateUrl: 'client/app/admin/views/operator/show.html',
            })
            ///Manager supervisor
            .when('/admin/supervisor', {
                templateUrl: 'client/app/admin/views/supervisor/index.html',
            })
            .when('/admin/supervisor/:id', {
                templateUrl: 'client/app/admin/views/supervisor/show.html',
            })
            ///Manager resource
            .when('/admin/resource', {
                templateUrl: 'client/app/admin/views/resource/index.html',
            })
            .when('/admin/resource/add', {
                templateUrl: 'client/app/admin/views/resource/add.html',
            })
            .when('/admin/resource/edit/:id', {
                templateUrl: 'client/app/admin/views/resource/edit.html',
            })
            .when('/admin/resource/:id', {
                templateUrl: 'client/app/admin/views/resource/show.html',
            })
            ///Manager new
            .when('/admin/new', {
                templateUrl: 'client/app/admin/views/new/index.html',
            })
            .when('/admin/new/add', {
                templateUrl: 'client/app/admin/views/new/add.html',
            })
            .when('/admin/new/edit/:id', {
                templateUrl: 'client/app/admin/views/new/edit.html',
            })
            .when('/admin/new/:id', {
                templateUrl: 'client/app/admin/views/new/show.html',
            })
            /// matain
            .when('/admin/maintain', {
                templateUrl: 'client/app/admin/views/maintain/index.html',
            })
            //*** profile
            .when('/admin/profile', {
                templateUrl: 'client/app/admin/views/profile/show.html',
            })
            .when('/admin/profile/edit', {
                templateUrl: 'client/app/admin/views/profile/edit.html',
            })
            .when('/admin/profile/change-password', {
                templateUrl: 'client/app/admin/views/profile/password.html',
            })
}).run(function ($window) {
    if (!$window.sessionStorage.user) {
        $window.location.href = '/demo/login.html';
    } else if (JSON.parse($window.sessionStorage.user).role != 3) {
        $window.location.href = '/demo/pages/page_403.html';
    }
});
app.controller('adminController', function ($scope, $http, $window) {
    $scope.user = JSON.parse($window.sessionStorage.user);
    $scope.logout = function () {
        delete $window.sessionStorage.user;
        delete $window.sessionStorage.token;
        $window.location.href = '/demo/login.html';
    };
    /**
     * list student
     */
});
