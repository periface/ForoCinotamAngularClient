App.controller("inicioController",["$scope","$cursosClientService",function($scope,$cursosClientService){
    $scope.cargandoCursos = true;
    $scope.cargandoDiscusiones = true;
    $scope.imgCarga = randomImg();
    $scope.imgCarga2 = randomImg();
    console.log($scope.cargandoCursos);
    console.log($scope.cargandoDiscusiones);
    $scope.cursos = {};
    $cursosClientService.cargaCursos(3).then(function(d){
      $scope.cursos = d;
$scope.cargandoCursos  = false;
$scope.cargandoDiscusiones = false;
    });
}]);
