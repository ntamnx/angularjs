/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 16, 2017, 10:27:27 AM
 Author     : nguyen.xuan.tam
 */

/**
 * 
 */
app.controller('homeController', function ($scope, $location) {
    $scope.groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    $scope.currentPage = 1;
    $scope.maxsize = 7;
    $scope.itemsPerPage = 12;
    $scope.totalItems = $scope.groups.length;
    $scope.studentNotComment = function () {
        $scope.groupStudent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
});