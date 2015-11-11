//GLOBAL CONFIGS
var webApiEndPoint = "http://192.168.1.161/";
var LandingPageApp = "landing";
var principalApp = "App";
var rutaArchivosWeb = "Site/";
var rutaArchivosApp = "Site/App/";
var imagenesCarga = ["ldng1.gif"];
var imgLento = "lento.png";
var imgFolder = "img/";
var cargaText = "Cargando información del sitio....";
var lentoText = "El servidor tarda demasiado en responder...";
var randomImg = function(){
  var random = imagenesCarga[Math.floor(Math.random()*imagenesCarga.length)]
  return imgFolder + random;
}
var imgLentoError = function(){
  return imgFolder + imgLento;
}
//END GLOBAL CONFIGS
