// Dependacy added for the Invoice Factory
var app = angular.module('addNewInvoiceModule',['invoiceService']);

app.controller('addNewInvoiceCtrl', function($scope, Invoice) {
  
$scope.submit = function(form){

 // console.log(formData);

if(form.$valid) {

	console.log("Form valid")

var formData = {

	taskname: $scope.taskname,
taskdescription: $scope.taskdescription,
platform: $scope.platform,
clientname: $scope.clientname,
url: $scope.url,
workdone: $scope.workdone,
hours: $scope.hours,
assignedby: $scope.assignedby,
dateassigned: $scope.dateassigned,
datecompleted: $scope.datecompleted,
monthfilter: $scope.monthfilter,
yearfilter: $scope.yearfilter,
comments: $scope.comments


}



console.log(angular.toJson(form, true))
   Invoice.create(formData)
.success(function(data) {
            $scope.status = data.message;
            console.log($scope.status);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  }

	

  // console.log($scope);

}

});

