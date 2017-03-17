/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 15, 2017, 10:43:20 AM
 Author     : nguyen.xuan.tam
 */
var app = angular.module('indexPage', []);
app.controller('indexController', function ($window) {
    if ($window.sessionStorage.user) {
        if (JSON.parse($window.sessionStorage.user).role == 1) {
            $window.location.href = '/demo/supervisor.html'
        } else if (JSON.parse($window.sessionStorage.user).role == 2) {
            $window.location.href = '/demo/operator.html'
        } else if (JSON.parse($window.sessionStorage.user).role == 3) {
            $window.location.href = '/demo/admin.html'
        }
    } else {
        $window.location.href = '/demo/login.html'
    }
});
