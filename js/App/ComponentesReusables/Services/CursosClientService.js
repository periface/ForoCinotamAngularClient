var cursosClientService = ["$q","$http",function($q,$http){
  var cursosService = {};
  var _cargaCursosLista = function(){
    var deferred = $q.defer();
    var promise = deferred.promise;
    $http.get(webApiEndPoint + "api/Cursos/ListaCursos").success(function(d){
      deferred.resolve(d);
    }).error(function(){
      deferred.reject("Error");
    });
    return promise;
  };
  var _cargaContenidosCursoLista = function(id){
    var deferred = $q.defer();
    var promise = deferred.promise;
    $http.get(webApiEndPoint+"api/Cursos/Contenidos/"+id).success(function(d){
      deferred.resolve(d);
    }).error(function(){
      deferred.reject("Error");
    });
    return promise;
  }
  var _cargaCurso = function (id) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var url = webApiEndPoint + "api/Cursos/Curso/"+id;
      $http.get(url).success(function(data){
        deferred.resolve(data);
      }).error(function(err){
        deferred.reject(err);
      });
      return promise;
  }
  var _cargaCursoSlug = function(id,slug){
    var deferred = $q.defer();
    var promise = deferred.promise;
    var url = webApiEndPoint + "api/Cursos/Curso/"+id;
    $http.get(url).success(function(data){
      deferred.resolve(data);
    }).error(function(err){
      deferred.reject(err);
    });
    return promise;
  }
  var _cargaCursos = function (numero) {
    var deferred = $q.defer();
    var promise = deferred.promise;
    var url;
    if(numero!=undefined)
    {
       url = webApiEndPoint + "api/Cursos/Todos?take="+numero;
    }
    else{
        url = webApiEndPoint + "api/Cursos/Todos";
      }
      $http.get(url).success(function(d){
        deferred.resolve(d);
      }).error(function(){
        deferred.reject("Error");
      });
      return promise;
  }
  cursosService.cargaCurso = _cargaCurso;
  cursosService.cargaCursoSlug = _cargaCursoSlug;
  cursosService.cargaCursos = _cargaCursos;
  cursosService.cargaCursosLista = _cargaCursosLista;
  cursosService.cargaContenidosCursoLista = _cargaContenidosCursoLista;
  return cursosService;
}];
