/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 14, 2017, 2:40:07 PM
 Author     : nguyen.xuan.tam
 */
var curentPageStudent = 1;
var keyWordSearchIndexStudent;
var curentPageAddStudent = 1;
var keyWordSearchAddStudent;
var listStudentSelected = [];
app.controller('studentIndexController', function ($scope, $http, $location, $filter, $window, Flash) {
    /**
     * index function
     */
    $http.get('http://localhost:3000/todo').then(function (data) {
        $scope.students = data.data;
        for (var i = 0; i < $scope.students.length; i++)
        {
            $scope.students[i].tick = false;
        }
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
    $scope.changeCheckAll = function (data) {
        if (data)
            for (var i = 0; i < $scope.students.length; i++)
            {
                $scope.students[i].tick = true;
            }
        else {
            for (var i = 0; i < $scope.students.length; i++)
            {
                $scope.students[i].tick = false;
            }
        }
    };
    $scope.printStudent = function () {
        listStudentSelected = [];
        for (var i = 0; i < $scope.students.length; i++)
        {
            if ($scope.students[i].tick) {
                listStudentSelected.push($scope.students[i].id);
            }
        }
        if (listStudentSelected.length == 0) {
            Flash.create('danger', message_print_error);
        } else {
            $location.path("/operator/student/print");
        }
    }
});
/**
 * 
 */
app.controller('addStudentController', function ($scope, $location, $http, $filter) {
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
        console.log(id);
    }
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
});
/**
 * 
 */
app.controller('printStudentController', function ($scope, $routeParams, $http, $location) {
    $http.get('http://localhost:3000/todo').then(function (data) {
        $scope.students = data.data;
        paginate($scope, $scope.students, curentPageAddStudent);
        $scope.pageChange = function (page) {
            curentPageAddStudent = page;
        };
    });
});
app.controller('executePrintData', function ($scope, $timeout, $location, $http) {
    $http.get('http://localhost:3000/todo').then(function (data) {
        $scope.students = data.data;
        $timeout(function () {
            printPDF();
            $location.path("/operator/student/print");
        }, 0);

    });
    var printPDF = function () {
        var printContents = document.getElementById('print-contain').innerHTML;
        var popupWin = window.open('', '_blank', 'width=' + screen.width + ',height=' + screen.height);
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="client/resources/vendors/bootstrap/dist/css/bootstrap.min.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    }
});