/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 13, 2017, 8:14:09 AM
 Author     : nguyen.xuan.tam
 */
var app = angular.module('login', ['ngMessages', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'user/login.html',
            })
            .when('/reset-password', {
                templateUrl: 'user/password-resset.html',
            })
            .when('/reset-password-confirm', {
                templateUrl: 'user/confirm-password-resset.html',
            })
            .when('/change-reset-password/:token', {
                templateUrl: 'user/change-password-resset.html',
            })
            .when('/confim-change-password-success', {
                templateUrl: 'user/confirm-password-resset-success.html',
            })
});
app.controller('loginController', function ($scope, $http, $window) {
    if ($window.sessionStorage.user) {
        if (JSON.parse($window.sessionStorage.user).role == 1) {
            $window.location.href = '/demo/supervisor.html'
        } else if (JSON.parse($window.sessionStorage.user).role == 2) {
            $window.location.href = '/demo/operator.html'
        } else if (JSON.parse($window.sessionStorage.user).role == 3) {
            $window.location.href = '/demo/admin.html'
        }
    }
    $scope.loginForm = function () {
        var user = {};
        user.email = $scope.email;
        user.password = $scope.password;
        if ($scope.login.$valid) {
            $http({
                method: "POST",
                url: 'http://192.168.6.108:3000/api/admin/users/admin_login',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'lang': 'JP',
                },
                transformRequest: transformRequestToUrlEncoded,
                data: user,
            }).then(function successCallback(response) {

            }, function errorCallback(response) {
                console.log('Lỗi rồi!');
            });
        }
        if ($scope.email == 'admin@gmail.com' && $scope.password == "1") {
            $window.sessionStorage.token = "1234";
            $window.sessionStorage.user = JSON.stringify({
                'id': '3',
                'email': "admin@gmail.com",
                'role': '3',
                'avatar': base_path + '/client/public/images/cropper.jpg',
            });
            $window.location.href = '/demo/admin.html';
        } else if ($scope.email == 'operator@gmail.com' && $scope.password == "1") {
            $window.sessionStorage.token = "3456";
            $window.sessionStorage.user = JSON.stringify({
                'id': '2',
                'email': "operator@gmail.com",
                'role': '2',
                'avatar': base_path + '/client/public/images/cropper.jpg',
            });
            $window.location.href = '/demo/operator.html';
        } else if ($scope.email == 'supervisor@gmail.com' && $scope.password == "1") {
            $window.sessionStorage.token = "4567";
            $window.sessionStorage.user = JSON.stringify({
                'id': '1',
                "email": "supervisor@gmail.com",
                "role": "1",
                'avatar': base_path + '/client/public/images/picture.jpg',
            });
            $window.location.href = '/demo/supervisor.html';
        }
    };
});
/**
 * 
 */
app.controller('passwordRessetController', function ($scope, $http, $window, $location) {
    $scope.resetPassword = function () {
        if ($scope.resset.$valid) {
            $location.path('/reset-password-confirm');
        }
    }
});
/**
 * 
 */
app.controller('changePasswordResset', function ($scope, $http, $window, $location) {
    $scope.passwordResset = function () {
        if ($scope.frm_password.$valid) {
            $location.path('/confim-change-password-success');
        }
    }
});