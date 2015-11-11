var cursosAdminService = ["$http","$q",function($http,$q){
var cursoAdminService = {};
var _crearCurso = function(curso){
  var deferred = $q.defer();
  var promise = deferred.promise;
$http.post(webApiEndPoint+"api/Cursos/Crear",curso).success(function(d){
  deferred.resolve(d);
}).error(function(d){
deferred.reject(d);
});
  return promise;
}
cursoAdminService.crearCurso = _crearCurso;
return cursoAdminService;
}];
