/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 14, 2017, 2:40:07 PM
 Author     : nguyen.xuan.tam
 */

var curentPageGroup = 1;
var keyWordSearchIndexGroup;
app.controller('groupIndexController', function ($scope, $http, $location, $filter, $window, Flash) {
    /**
     * index function
     */
    var getData = function () {
        $http.get('http://localhost:3000/todo').then(function (data) {
            $scope.groups = data.data;
            $scope.keyword = keyWordSearchIndexGroup;
            paginate($scope, $scope.groups, curentPageGroup);
            $scope.$watch('keyword', function (newValue, oldValue) {
                keyWordSearchIndexGroup = newValue;
                var newData = $filter('filter')(data.data, newValue);
                $scope.pageChangeSearch = function (page) {
                    curentPageGroup = 1;
                };
                $scope.groups = newData;
                paginate($scope, $scope.groups, curentPageGroup);
            });
            $scope.pageChange = function (page) {
                curentPageGroup = page;
            };
        });
    };
    getData();
    $scope.deleteSupervisor = function (id) {
        if ($window.confirm("Bạn có muốn xóa không?")) {
            $http({
                method: "DELETE",
                url: 'http://localhost:3000/todo/delete/' + id
            }).then(function successCallback(response) {
                getData();
                Flash.create('success', message_delete_success);
            }, function errorCallback(response) {
                Flash.create('danger', message_delete_error);
            });
        }
    };
});
/**
 * 
 */
app.controller('groupAddController', function ($scope, $location) {
    $scope.submitForm = function () {
        if ($scope.add.$valid) {

        }
    }
});
/**
 * 
 */
app.controller('groupEditController', function ($scope, $routeParams, $http, $location) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/todo/read/' + $routeParams.id,
    }).then(function successCallback(response) {
        $scope.supervisor = response.data;
    }, function errorCallback(response) {
        console.log('Có lỗi thôi!.');
    });
});
/**
 * 
 */
app.controller('groupShowController', function ($scope, $routeParams, $http, $location) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/todo/read/' + $routeParams.id,
    }).then(function successCallback(response) {
        $scope.supervisor = response.data;
    }, function errorCallback(response) {
        console.log('Có lỗi thôi!.');
    });
});