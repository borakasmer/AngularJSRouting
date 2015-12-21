app.controller("ParameterPageController", ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.myName = "Engin Polat";
    $scope.id = $routeParams.id;
}]);