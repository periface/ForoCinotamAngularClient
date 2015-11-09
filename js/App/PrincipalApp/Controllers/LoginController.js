App.controller("loginController", ["$scope", "$loginService","$routeParams","$location", function ($scope, $loginService,$routeParams,$location) {
    $scope.pageClass = "page-login";
    var returnUrl = $routeParams.returnUrl;
    $scope.login = function (loginData) {
        userInfo = {};
        userInfo.username = loginData.username;
        userInfo.password = loginData.password;
        $loginService.iniciarSesion(userInfo,returnUrl);
        //var usuario = $loginService.cargaInfo();
        //if (usuario.logged) {
        //    $location.path(returnUrl);
        //}
    }
}]);