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
var homeCurentPageStudent = 1;
var homeKeyWordSearchIndexStudent;
app.controller('homeController', function ($scope, $location, $filter, $http) {
    
    $scope.groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    $scope.currentPageGroup = 1;
    $scope.maxsizeGroup = 7;
    $scope.itemsPerPageGroup = 12;
    $scope.totalItemsGroup = $scope.groups.length;
    $http.get('http://localhost:3000/todo').then(function (data) {
        $scope.students = data.data;
        $scope.keyword = homeKeyWordSearchIndexStudent;
        paginate($scope, $scope.students, homeCurentPageStudent);
        $scope.$watch('keyword', function (newValue, oldValue) {
            homeKeyWordSearchIndexStudent = newValue;
            var newData = $filter('filter')(data.data, newValue);
            $scope.pageChangeSearch = function (page) {
                homeCurentPageStudent = 1;
            };
            $scope.students = newData;
            paginate($scope, $scope.students, homeCurentPageStudent);
        });
        $scope.pageChange = function (page) {
            homeCurentPageStudent = page;
        };
    });
    /**
     * Thêm học sinh tới group
     */
    $scope.changeGroup = function (id){
        console.log(id); 
    }

});