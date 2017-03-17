/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 14, 2017, 10:21:19 AM
 Author     : nguyen.xuan.tam
 */

var curentPageOperator = 1;
var keyWordSearchIndexOperator;
app.controller('indexOperatorController', function ($scope, $http, $location, $filter, $window, Flash) {
    /**
     * index function
     */
    var getData = function () {
        $http.get('http://localhost:3000/todo').then(function (data) {
            $scope.operators = data.data;
            $scope.keyword = keyWordSearchIndexOperator;
            paginate($scope, $scope.operators, curentPageOperator);
            $scope.$watch('keyword', function (newValue, oldValue) {
                keyWordSearchIndexOperator = newValue;
                var newData = $filter('filter')(data.data, newValue);
                $scope.pageChangeSearch = function (page) {
                    curentPageOperator = 1;
                };
                $scope.operators = newData;
                paginate($scope, $scope.operators, curentPageOperator);
            });
            $scope.pageChange = function (page) {
                curentPageOperator = page;
            };
        });
    }
    getData();
    $scope.deleteOperator = function (id) {
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
app.controller('addOperatorController', function ($scope, $location) {
    $scope.submitForm = function () {
        if ($scope.add.$valid) {

        }
    }
});
/**
 * 
 */
app.controller('editOperatorController', function ($scope, $location) {
    $scope.submitForm = function () {
        if ($scope.edit.$valid) {

        }
    }
});
/**
 * 
 */
app.controller('detailOperatorController', function ($scope, $routeParams, $http, $location) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/todo/read/' + $routeParams.id,
    }).then(function successCallback(response) {
        $scope.supervisor = response.data;
    }, function errorCallback(response) {
        console.log('Có lỗi thôi!.');
    });
});