/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 14, 2017, 10:21:19 AM
 Author     : nguyen.xuan.tam
 */

var curentPageResource = 1;
var keyWordSearchIndexResource;
app.controller('indexResourceController', function ($scope, $http, $location, $filter, $window, Flash) {
    /**
     * index function
     */
    var getData = function () {
        $http.get('http://localhost:3000/todo').then(function (data) {
            $scope.resources = data.data;
            $scope.keyword = keyWordSearchIndexResource;
            paginate($scope, $scope.resources, curentPageResource);
            $scope.$watch('keyword', function (newValue, oldValue) {
                keyWordSearchIndexResource = newValue;
                var newData = $filter('filter')(data.data, newValue);
                $scope.pageChangeSearch = function (page) {
                    curentPageResource = 1;
                };
                $scope.resources = newData;
                paginate($scope, $scope.resources, curentPageResource);
            });
            $scope.pageChange = function (page) {
                curentPageResource = page;
            };
        });
    }
    getData();
    $scope.deleteResource = function (id) {
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
app.controller('addResourceController', function ($scope, $location) {
    $scope.submitForm = function () {
        if ($scope.add.$valid) {

        }
    } 
});
/**
 * 
 */
app.controller('editResourceController', function ($scope, $location) {
    $scope.submitForm = function () {
        if ($scope.add.$valid) {

        }
    }
});
/**
 * 
 */
app.controller('detailResourceController', function ($scope, $routeParams, $http, $location) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/todo/read/' + $routeParams.id,
    }).then(function successCallback(response) {
        $scope.supervisor = response.data;
    }, function errorCallback(response) {
        console.log('Có lỗi thôi!.');
    });
});