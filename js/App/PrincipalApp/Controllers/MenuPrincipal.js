App.controller("menuPrincipal", ["$scope","$loginService", function ($scope,$loginService) {
    $scope.usuario = $loginService.cargaInfo();
    $scope.LogOut = function () {
        $loginService.cerrarSesion();
        $scope.usuario = $loginService.cargaInfo();
    }
}]);
