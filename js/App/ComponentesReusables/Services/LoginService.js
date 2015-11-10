var loginService = ["$http","$routeParams","$location","localStorageService","$q", function ($http,$routeParams,$location,localStorageService,$q) {
    var _usuario = {
        logged : false,
        nombre: "",
        roles: []
    };
    var _roles = function(){
      var deferred = $q.defer();
      var promise = deferred.promise;
      if(_usuario.logged){
          $http.get(webApiEndPoint+"api/Account/UserInfo").success(function(data){
                deferred.resolve(data);
          }).error(function(err){
            deferred.reject(err);
          });
      }
      return promise;
    }
    //Funcion privada
    var _directLogin = function(loginData){
          var deferred = $q.defer();
          var promise = deferred.promise;
            var data = "grant_type=password&username=" + loginData.username + "&password=" + loginData.password;
            $http.post(webApiEndPoint + "Token",
           data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).success(function(d){
             deferred.resolve(d);
           }).error(function(d){
             deferred.reject("Usuario o contraseña invalida");
           });
           return promise;
    }
    var _iniciarSesion = function (loginData,returnUrl) {
        _directLogin(loginData).then(function(d){
          _usuario.logged = true;
          _roles().then(function(d){
              localStorageService.set("rolesData",{roles: d.Roles});
          }).catch(function(err){
              alert(err);
          });
          localStorageService.set("tokenData",{ token: d.access_token,userName:loginData.username});
          if (returnUrl == undefined) {
              $location.path("/Inicio")
          }
          else {
              $location.path(returnUrl);
          }
        });
    }
    var _registrar = function (loginData) {
        _cerrarSesion();
        var response = $http.post(webApiEndPoint + "api/Account/Register", loginData, {
            contentType:"application/json; charset=utf-8"
        });
        response.then(function (d) {
            console.log("Registro exitoso");
            $location.path("/Inicio");
        });
    }
    var _cerrarSesion = function () {
        localStorageService.remove("tokenData");
        localStorageService.remove("rolesDara");
        $location.path("/Inicio");
    }
    var _cargaInfo = function () {
        var logInfo = localStorageService.get("tokenData");
        var rolInfo = localStorageService.get("rolesData");
        if (logInfo) {
            _usuario.logged = true;
            _usuario.nombre = logInfo.userName;
            if(rolInfo){
              _usuario.roles = rolInfo.roles
            }
            return _usuario;
        }
        else {
            _usuario.logged = false;
            _usuario.nombre = "";
            return _usuario;
        }
    }
    var loginServiceFactory = {};
    loginServiceFactory.roles = _roles;
    loginServiceFactory.usuario = _usuario;
    loginServiceFactory.iniciarSesion = _iniciarSesion;
    loginServiceFactory.registrar = _registrar;
    loginServiceFactory.cargaInfo = _cargaInfo;
    loginServiceFactory.cerrarSesion = _cerrarSesion;
    return loginServiceFactory;
}];
