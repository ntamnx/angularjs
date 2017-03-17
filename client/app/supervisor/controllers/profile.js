/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 15, 2017, 10:20:19 AM
 Author     : nguyen.xuan.tam
 */

/**
 * 
 */
app.controller('detailProfileController', function ($scope, $location, $window) {
    $scope.user = JSON.parse($window.sessionStorage.user);
});
/**
 * 
 */
app.controller('editProfileController', function ($scope, $location, $window, $http, Flash) {
    $scope.user = JSON.parse($window.sessionStorage.user);
    $scope.updateProfile = function () {
        var infoUser = {};
        infoUser.email = $scope.email;
        infoUser.address = $scope.address;
        infoUser.phone = $scope.phone;
        $http({
            method: "GET",
            url: 'http://localhost:3000/todo/',
            data: infoUser,
        }).then(function successCallback(respone) {
            $location.path('supervisor/profile')
            Flash.create('success', message_update_success);
        }, function errorCallback() {
            Flash.create('error', message_update_error);
        });
    }

});
/**
 * @function change password supervisor.
 */
app.controller('passwordProfileController', function ($scope, $location, $http, Flash) {
    $scope.changPassword = function () {
        if ($scope.frm_change.$valid) {
            var password = {};
            password.password = $scope.password;
            password.newPass = $scope.new_pass;
            password.confirmNewPass = $scope.new_pass_confirm;
            $http({
                method: "GET",
                url: 'http://localhost:3000/todo/',
                data: password,
            }).then(function successCallback(response) {
                $location.path('supervisor/profile')
                Flash.create('success', message_change_password_success);
            }, function errorCallback(response) {
                Flash.create('error', message_change_password_error);
            });
        }
    }
});

