App.controller("inicioController",["$scope","$cursosClientService",function($scope,$cursosClientService){
    $scope.cursos = {};
    $cursosClientService.cargaCursos(3).then(function(d){
      $scope.cursos = d;
    });
}]);
