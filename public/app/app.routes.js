var app = angular.module('appRoutes',['ngRoute']);

app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/home',
                      templateUrl: 'app/views/home.html',
                })
                .when('/home', {
                    templateUrl: 'app/views/home.html',
                    controller: 'MainController'
                })
                .when('/latest_work', {
                    templateUrl: 'app/views/latest_work.html',
                    controller: 'LatestWorkCtrl'
                })
                .when('/overview', {
                    templateUrl: 'app/views/overview.html',
                    controller: ''
                })
                .when('/archive', {
                    templateUrl: 'app/views/archive.html',
                    controller: ''
                })
                .when('/about-me', {
                    templateUrl: 'app/views/about.html',
                    controller: ''
                })
                .when('/contact', {
                    templateUrl: 'app/views/contact.html',
                    controller: ''
                })
                .when('/login', {
                    templateUrl: 'app/views/login.html',
                    controller: 'LoginCtrl'
                })
                .when('/add-new-invoice', {
                    templateUrl: 'app/views/add-new-invoice.html',
                    controller: 'addNewInvoiceCtrl'
                })
              	.otherwise({
                    redirectTo: '/404',
                      templateUrl: 'app/views/404.html',
                });
        }]);