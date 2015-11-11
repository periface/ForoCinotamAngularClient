App.controller("inicioController",["$scope","$cursosClientService",function($scope,$cursosClientService){
    $scope.cargandoCursos = true;
    $scope.cargandoDiscusiones = true;
    $scope.imgCarga = randomImg();
    $scope.imgCarga2 = randomImg();
    $scope.mensaje = $scope.cargaText;
    $scope.cursos = {};
    $cursosClientService.cargaCursos(3).then(function(d){
    $scope.cursos = d;
    $scope.cargandoCursos  = false;
    $scope.cargandoDiscusiones = false;
    }).catch(function(d){
      if(d==="errorTiempo"){
        //$scope.imgCarga = imgLentoError();
        //$scope.imgCarga2 = imgLentoError();
        $scope.mensaje = $scope.lentoText;
      }
    });
}]);
