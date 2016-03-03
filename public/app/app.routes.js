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
                    controller: 'MainController'
                })
                .when('/archive', {
                    templateUrl: 'app/views/archive.html',
                    controller: 'MainController'
                })
                .when('/about-me', {
                    templateUrl: 'app/views/about.html',
                    controller: 'MainController'
                })
                .when('/contact', {
                    templateUrl: 'app/views/contact.html',
                    controller: 'MainController'
                })
                .when('/login', {
                    templateUrl: 'app/views/login.html',
                    controller: 'LoginCtrl'
                })
                .when('/add-new-invoice', {
                    templateUrl: 'app/views/add-new-invoice.html',
                    controller: 'MainController'
                })
              	.otherwise({
                    redirectTo: '/404',
                      templateUrl: 'app/views/404.html',
                });
        }]);