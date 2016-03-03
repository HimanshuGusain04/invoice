// Dependacy added for the Invoice Factory
var app = angular.module('addNewInvoiceModule',['invoiceService']);

// Create controller and include Factory object
app.controller('addNewInvoiceCtrl', function($scope, Invoice) {
  
// Submit function bound on "Submit" button on form
$scope.submit = function(form){

// Check if form is valid
if(form.$valid) {

// Debug: console.log("Form valid")

// Use Data-binding to build object to send to API
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


// Call factory and submit the formData for processing
   Invoice.create(formData)

 // If successful print returned message form API else print error
.success(function(data) {
            $scope.status = data.message;
            console.log($scope.status);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  }

}

});

