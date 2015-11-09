var interceptorAutenticacion = ["$q", "$location","localStorageService", function ($q, $location,localStorageService) {

    var _request = function (config) {
        config.headers = config.headers || {};
        var authData = localStorageService.get("tokenData");
        if (authData) {
            config.headers.Authorization = "Bearer "+ authData.token;
        }
        return config;
    }
    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            console.log("Response Error 401", rejection);
            var returnUrl = $location.path();
            $location.path('/Login').search('returnUrl', returnUrl);
        }
        return $q.reject(rejection);
    }
    var authInterceptorFactory = {};
    authInterceptorFactory.responseError = _responseError;
    authInterceptorFactory.request = _request;
    return authInterceptorFactory;
    //return {
    //    //response: function (response) {
    //    //    if (response.status == 401) {
    //    //        console.log("Error 401");
    //    //    }
    //    //    return response || $q.when(response);
    //    //},
    //    //responseError: function (rejection) {
    //    //    if (rejection.status === 401) {
    //    //        console.log("Response Error 401", rejection);
    //    //        var returnUrl = $location.path();
    //    //        $location.path('/Login').search('returnUrl', returnUrl);
    //    //    }
    //    //    return $q.reject(rejection);
    //    //},
    //}
}];
