angular.module('invoiceService', [])
  

  .factory('Invoice', function($http){

  	var invoiceFactory = {};

  	invoiceFactory.create = function(invoiceData){

  		return	$http.post('/api/new-invoice',invoiceData)
  	}

invoiceFactory.all = function(){
	return	$http.get('/api/invoices');
}

return	invoiceFactory;

});
