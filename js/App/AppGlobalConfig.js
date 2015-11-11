//GLOBAL CONFIGS
var webApiEndPoint = "http://148.237.42.53/PlataformaAprendizajeCinotam.Api/";
var LandingPageApp = "landing";
var principalApp = "App";
var rutaArchivosWeb = "Site/";
var rutaArchivosApp = "Site/App/";
var imagenesCarga = ["ldng1.gif"];
var imgFolder = "img/";
var randomImg = function(){
  var random = imagenesCarga[Math.floor(Math.random()*imagenesCarga.length)]
  return imgFolder + random;
}
//END GLOBAL CONFIGS
