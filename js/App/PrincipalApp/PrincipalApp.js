var App = angular.module(principalApp, ["ngRoute", "angular-loading-bar", "LocalStorageModule", 'ngAnimate',"sticky","ui.materialize",'truncate','ngSanitize']);

App.factory("$loginService",loginService);
App.factory("interceptorAutenticacion", interceptorAutenticacion);
App.factory("interceptorRutasAuth",interceptorRutas);
App.factory("$cursosClientService",cursosClientService);
App.factory("$cursosAdminService",cursosAdminService);
var configuracion = function ($routeProvider, $httpProvider) {
    $routeProvider.when("/Inicio", {
        title: "Cursos",
        templateUrl: rutaArchivosApp + "Inicio/Index.html",
        caseInsensitiveMatch: true,
        controller: "inicioController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/Curso/:idCurso/:slug", {
        title: "Curso",
        templateUrl: rutaArchivosApp + "Inicio/Curso.html",
        caseInsensitiveMatch: true,
        controller: "cursoController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/Cursos", {
        title: "Curso",
        templateUrl: rutaArchivosApp + "Inicio/Cursos.html",
        caseInsensitiveMatch: true,
        controller: "cursosController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/Discusiones", {
        title: "Curso",
        templateUrl: rutaArchivosApp + "Inicio/Discusiones.html",
        caseInsensitiveMatch: true,
        controller: "cursoController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/MiPanel", {
        title: "Panel de Control",
        templateUrl: rutaArchivosApp + "PanelControl/Index.html",
        caseInsensitiveMatch: true,
        controller: "panelController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:true,
        },
    }).when("/Admin", {
        title: "Administracion",
        templateUrl: rutaArchivosApp + "PanelControl/Admin.html",
        caseInsensitiveMatch: true,
        controller: "adminController",
        reglas:{
            rolesPermitidos:["Administrador"],
            requiereSesion:true,
        },
    }).when("/Registro", {
        title: "Registro",
        templateUrl: rutaArchivosApp + "Cuentas/Registro.html",
        caseInsensitiveMatch: true,
        controller: "registroController",
        //controller: "paginaInicio",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).when("/Login", {
        title: "Login",
        templateUrl: rutaArchivosApp + "Cuentas/Login.html",
        caseInsensitiveMatch: true,
        controller: "loginController",
        reglas:{
            rolesPermitidos:[],
            requiereSesion:false,
        },
    }).otherwise("/Inicio");
    $httpProvider.interceptors.push("interceptorAutenticacion");
};
App.run(["$rootScope", "$route","$location","$loginService","interceptorRutasAuth", function ($rootScope,$route,$location,$loginService,interceptorRutasAuth) {

    $rootScope.cargaText= cargaText;
    $rootScope.lentoText = lentoText;
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
