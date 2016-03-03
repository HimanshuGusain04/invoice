var app = angular.module('LoginCtrlModule',[]);

app.controller('LoginCtrl', ['$scope','$http', function($scope, $http) {
  
    $scope.User = {};
        $scope.errorMessage = '';

        $scope.register = function() {
            $http.post('/login', $scope.User).
                success(function(data) {
                    $location.path('/');
                }).error(function(err) {
                    $scope.errorMessage = err;
                });
        }
 
}]);
