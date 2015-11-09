var App = angular.module(principalApp, ["ngRoute", "angular-loading-bar", "LocalStorageModule", "ngAnimate","sticky"]);
var configuracion = function ($routeProvider, $httpProvider) {
    $routeProvider.when("/Inicio", {
        title: "Mi Panel de Control",
        templateUrl: rutaArchivosApp + "PanelControl/Index.html",
        caseInsensitiveMatch: true,
        //controller: "paginaInicio",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).otherwise("/Inicio");
};
App.run(["$rootScope", "$route","$location", function ($rootScope,$route,$location) {
    //$loginService.cargaInfo();
    $rootScope.$on("$routeChangeSuccess", function (d) {
        document.title = $route.current.title;
    });
}]);
//Inyectamos para que la minificación no truene la aplicacion
configuracion.$inject = ["$routeProvider", "$httpProvider"];
App.config(configuracion);
