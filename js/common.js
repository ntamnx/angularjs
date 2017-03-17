/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Mar 10, 2017, 10:25:26 AM
 Author     : nguyen.xuan.tam
 */

function transformRequestToUrlEncoded(obj) {
    var str = [];
    for (var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}
function paginate($scope, data, pageCR) {
    var page = pageCR ? pageCR : 1;
    $scope.data = data;
    $scope.totalItems = $scope.data.length;
    $scope.currentPage = page;
    $scope.itemsPerPage = 20;
    $scope.maxsize = 7;
}

