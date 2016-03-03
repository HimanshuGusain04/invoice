var app = angular.module('LatestWorkCtrlModule',['invoiceService']);

app.controller('LatestWorkCtrl', function($scope, Invoice) {
  
 $scope.User = {};
        $scope.errorMessage = '';

$scope.name = "testsasd";

Invoice.all()
.success(function(data) {
            $scope.invoices = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
     // when landing on the page, get all todos and show them
    // $http.get('api/invoices')
        
 
});