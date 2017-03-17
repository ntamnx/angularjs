/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 14, 2017, 10:21:19 AM
 Author     : nguyen.xuan.tam
 */

var curentPageNew = 1;
var keyWordSearchIndexNew;
app.controller('indexNewController', function ($scope, $http, $location, $filter, $window, Flash) {
    /**
     * index function
     */
    var getData = function () {
        $http.get('http://localhost:3000/todo').then(function (data) {
            $scope.news = data.data;
            $scope.keyword = keyWordSearchIndexNew;
            paginate($scope, $scope.news, curentPageNew);
            $scope.$watch('keyword', function (newValue, oldValue) {
                keyWordSearchIndexNew = newValue;
                var newData = $filter('filter')(data.data, newValue);
                $scope.pageChangeSearch = function (page) {
                    curentPageNew = 1;
                };
                $scope.news = newData;
                paginate($scope, $scope.news, curentPageNew);
            });
            $scope.pageChange = function (page) {
                curentPageNew = page;
            };
        });
    }
    getData();
    $scope.deleteNew = function (id) {
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
app.controller('addNewController', function ($scope, $location) {
    $scope.submitForm = function () {
        if ($scope.add.$valid) {

        }
    }
    $scope.back = function () {
        $location.path("/admin/new");
    };
});
/**
 * 
 */
app.controller('editNewController', function ($scope, $location) {
    $scope.submitForm = function () {
        if ($scope.add.$valid) {

        }
    }
    $scope.back = function () {
        $location.path("/admin/new");
    };
});
/**
 * 
 */
app.controller('detailNewController', function ($scope, $routeParams, $http, $location) {
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
        $location.path("/admin/new");
    };
});