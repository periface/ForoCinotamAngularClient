//Idea original de http://jonsamwell.com/url-route-authorization-and-security-in-angular/
var interceptorRutas =["$loginService",function($loginService){
var interceptor ={};
var _autoriza = function(inicioRequerido,permisosRequeridos){
        var resultado;
        var usuario = $loginService.cargaInfo();
        var permisos = [];
        var permiso;
        var tienePermiso = true;
        if(inicioRequerido===true && !usuario.logged){
            resultado = false;
        }
        else if ((inicioRequerido===true && usuario!==undefined) && (permisosRequeridos===undefined || permisosRequeridos.length ===0)){
          resultado = true;
        }
        else if(permisosRequeridos){
          permisos = [];
          angular.forEach(usuario.roles,function(permiso){
              permisos.push(permiso);
          });
          for (var i = 0; i <permisosRequeridos.length; i++) {
            permiso = permisosRequeridos[i]
            tienePermiso = permisos.indexOf(permiso) > -1;
            if(tienePermiso){
              break;
            }
          }
          resultado = tienePermiso;
        }
        return resultado;
}
interceptor.autoriza = _autoriza;
return interceptor;
}];
