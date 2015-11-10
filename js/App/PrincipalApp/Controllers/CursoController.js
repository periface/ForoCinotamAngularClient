App.controller("cursoController",["$scope","$routeParams","$cursosClientService",function($scope,$routeParams,$cursosClientService){
$scope.curso = {}
$cursosClientService.cargaCursoSlug($routeParams.idCurso,$routeParams.slug).then(function(d){
  $scope.curso = d;
  console.log($scope.curso);
});
console.log($routeParams);

}]);
