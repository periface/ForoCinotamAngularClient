App.controller("cursosController", ["$scope","$cursosClientService", function ($scope, $cursosClientService) {
    $scope.init = function () {
        $scope.curso = {};
        $scope.cursos = {};
        $cursosClientService.cargaCurso(2).then(function (curso) {
            $scope.curso = curso;
            console.log(curso);
        });
        $cursosClientService.cargaCursos(4).then(function(cursos){
          $scope.cursos = cursos;
          console.log($scope.cursos)
        });
    }
    $scope.init();

}]);
/*
App.directive("cursos",function(){
    return function(scope,element,attrs){
    scope.$watch("$last",function(v){
    if(v){

    }
    });
  }
});
*/
