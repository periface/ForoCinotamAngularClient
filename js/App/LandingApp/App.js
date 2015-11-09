/// <reference path="../angular-route.min.js" />
/// <reference path="../angular.min.js" />
var App = angular.module(LandingPageApp, ["ngRoute", "angular-loading-bar", "LocalStorageModule", "ngAnimate","sticky"]);
App.factory("interceptorAutenticacion", interceptorAutenticacion);
App.factory("interceptorRutasAuth",interceptorRutas);
App.factory("$loginService",loginService);
App.factory("$cursosClientService",cursosClientService);

var configuracion = function ($routeProvider, $httpProvider) {
    $routeProvider.when("/Inicio", {
        title: "Bienvenido",
        templateUrl: rutaArchivosWeb + "/Landing/Index.html",
        caseInsensitiveMatch: true,
        controller: "paginaInicio",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/Cursos", {
        title: "Cursos",
        templateUrl: rutaArchivosWeb + "/Landing/Cursos.html",
        caseInsensitiveMatch: true,
        controller:"cursosController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/Servicios", {
        title: "Servicios",
        templateUrl: rutaArchivosWeb + "/Landing/Servicios.html",
        caseInsensitiveMatch: true,
        controller:"serviciosController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/Contacto", {
        title: "Contacto",
        templateUrl: rutaArchivosWeb + "/Landing/Contacto.html",
        caseInsensitiveMatch: true,
        controller:"contactoController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).otherwise("/Inicio");
    $httpProvider.interceptors.push("interceptorAutenticacion");
};


App.run(["$rootScope", "$route","$loginService","$location","interceptorRutasAuth", function ($rootScope, $route,$loginService,$location,interceptorRutasAuth) {
    //$loginService.cargaInfo();
    $rootScope.$on("$routeChangeSuccess", function (d) {
        document.title = $route.current.title;
    });
    $rootScope.$on("$routeChangeStart",function(event,next,current){
        var usuario = $loginService.cargaInfo();
        var reglas = next.reglas;
        var auth = interceptorRutasAuth.autoriza(reglas.requiereSesion,reglas.rolesPermitidos);

        if(!auth){
          $location.path("/login");
        }
    });
}]);
//Inyectamos para que la minificación no truene la aplicacion
configuracion.$inject = ["$routeProvider", "$httpProvider"];
App.config(configuracion);
