App.controller("panelController",["$scope","$loginService","$cursosAdminService",function($scope,$loginService,$cursosAdminService){
  $scope.usuario = $loginService.cargaInfo();
  $scope.pagina = "notificaciones"
  $scope.guardarImagen = function(imagen){
      $loginService.imagenPerfil(imagen).then(function(d){
        console.log(d);
      }).catch(function(d){
        console.log("Error");
        console.log(d);
      });
  }
  $scope.crearCurso = function(curso){
    $cursosAdminService.crearCurso(curso).then(function(d){
      console.log(d);
    }).catch(function(d){
      console.log(d);
    });

  }
}]);
App.directive("fileModel",["$parse",function($parse){
  return{
    restrict:"A",
    link:function(scope,element,attrs){
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;
      element.bind("change",function(){
        scope.$apply(function(){
          modelSetter(scope,element[0].files[0]);
        });
      });
    }
  }
}]);
