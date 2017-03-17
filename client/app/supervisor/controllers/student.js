/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 15, 2017, 10:20:19 AM
 Author     : nguyen.xuan.tam
 */

var curentPageStudent = 1;
var curentPageAddStudent = 1;
var keyWordSearchIndexStudent;
var keyWordSearchAddStudent;
app.controller('indexStudentController', function ($scope, $http, $location, $filter) {
    /**
     * index function
     */
    $http.get('http://localhost:3000/todo').then(function (data) {
        $scope.students = data.data;
        $scope.keyword = keyWordSearchIndexStudent;
        paginate($scope, $scope.students, curentPageStudent);
        $scope.$watch('keyword', function (newValue, oldValue) {
            keyWordSearchIndexStudent = newValue;
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
app.controller('addStudentController', function ($scope, $http, $location, $filter, Flash) {
    $http.get('http://localhost:3000/todo').then(function (data) {
        $scope.students = data.data;
        $scope.keyword = keyWordSearchAddStudent;
        paginate($scope, $scope.students, curentPageAddStudent);
        $scope.$watch('keyword', function (newValue, oldValue) {
            keyWordSearchAddStudent = newValue;
            var newData = $filter('filter')(data.data, newValue);
            $scope.pageChangeSearch = function (page) {
                curentPageAddStudent = 1;
            };
            $scope.students = newData;
            paginate($scope, $scope.students, curentPageAddStudent);
        });
        $scope.pageChange = function (page) {
            curentPageAddStudent = page;
        };
    });
    /**
     * 
     */
    $scope.addStudent = function (id) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/todo/' + id,
        }).then(function successCallback(respone) {
            Flash.create('success', message_request_user_student_success);
        }, function errorCallback(respone) {
            Flash.create('error', message_request_user_student_error);
        });

    }
});
/**
 * 
 */
app.controller('detailStudentController', function ($scope, $location) {


});
/**
 * 
 */
app.controller('profileStudentController', function ($scope, $location) {

});

