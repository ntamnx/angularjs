/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 14, 2017, 10:21:19 AM
 Author     : nguyen.xuan.tam
 */

var curentPageStudent = 1;
var keyWordSearchIndexSupervisoStudent;
app.controller('indexStudentController', function ($scope, $http, $location, $filter, $window, Flash) {
    /**
     * index function
     */
    $http.get('http://localhost:3000/todo').then(function (data) {
        $scope.students = data.data;
        $scope.keyword = keyWordSearchIndexSupervisoStudent;
        paginate($scope, $scope.students, curentPageStudent);
        $scope.$watch('keyword', function (newValue, oldValue) {
            keyWordSearchIndexSupervisoStudent = newValue;
            var newData = $filter('filter')(data.data, newValue);
            $scope.pageChangeSearch = function (page) {
                curentPageStudent = 1;
            };
            $scope.students = newData;
            paginate($scope, $scope.students, curentPageStudent);
        });
        $scope.pageChange = function (page) {
            curentPageStudent = page;
        };
    });
});
/**
 * 
 */
app.controller('detailStudentController', function ($scope, $routeParams, $http, $location) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/todo/read/' + $routeParams.id,
    }).then(function successCallback(response) {
        $scope.supervisor = response.data;
    }, function errorCallback(response) {
        console.log('Có lỗi thôi!.');
    });
    /**
     * 
     * @returns {undefined}
     */
    $scope.back = function () {
        $location.path("/admin/student");
    };
});
/**
 * 
 */
app.controller('profileStudentController', function ($scope, $routeParams, $http, $location) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/todo/read/' + $routeParams.id,
    }).then(function successCallback(response) {
        $scope.supervisor = response.data;
    }, function errorCallback(response) {
        console.log('Có lỗi thôi!.');
    });
    /**
     * 
     * @returns {undefined}
     */
    $scope.back = function () {
        $location.path("/admin/student");
    };
});