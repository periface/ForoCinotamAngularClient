App.controller("registroController", ["$scope", "$loginService", function ($scope, $loginService) {
    $scope.registro = function ($loginData) {
        $loginService.registrar($loginData);
    };
}]);