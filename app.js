angular.module('stuff',[])
.controller('MainCtrl',[
    '$scope',
    function($scope){
        $scope.test = "Hello World!";
    }]);