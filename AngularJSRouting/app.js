var app = angular.module("app", ['ngRoute']);
app.controller('MainController', ['$scope', function ($scope) {

}]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/Siparis',
            {
                templateUrl: 'Modules/Siparis/siparis.html',
                controller: 'SiparisController'
            })
            .
        when('/Detay',
            {
                templateUrl: 'Modules/Detay/detay.html',
                controller: 'DetayController'
            })
            .
        when('/ParameterPage/:id',
            {
                templateUrl: 'Modules/ParameterPage/ParameterPage.html',
                controller: 'ParameterPageController'
            })
            .
        when('/page4',
            {
                templateUrl: 'page4.html',
                controller: 'SiparisController'
            })
            .
        when('/page5',
            {
                templateUrl: 'page5.html',
                controller: 'DetayController'
            })
            .       
        otherwise(
        {
            redirectTo: ''
        });
    }
]);