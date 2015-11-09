//Utilizarse si se requieren roles para ocultar elementos del dom (DOOM!!!)
App.directive("acceso",["interceptorRutasAuth","$loginService",function(interceptorRutasAuth,loginService){
  return{
    restrict: "A",
    link: function(scope,elemento,attributos){

      var hacerVisible = function(){
        elemento.removeClass("hidden");
      },
      hacerInvisible = function(){
        elemento.addClass("hidden");
      },
      determinarVisibilidad = function(reset){
        var resultado;
        if(reset){
          hacerVisible();
        }
        resultado = interceptorRutasAuth.autoriza(true,roles);
        if(resultado){
          hacerVisible();
        }
        else{
          hacerInvisible();
        }
      },
      roles = attributos.acceso.split(",");
      scope.$watch(loginService.usuario,function(){
        determinarVisibilidad(true,roles);
      });
      if(roles.length>0){
        determinarVisibilidad(true);
      }
    }
  }
}]);
/*
<script>
$(document).ready(function() {
      // grab the initial top offset of the navigation
        var stickyNavTop = $('.menuDosContenedor').offset().top;
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
          var scrollTop = $(window).scrollTop(); // our current vertical position from the top

          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > stickyNavTop) {
              $('.menuDosContenedor').addClass('pegadizo');
          } else {
              $('.menuDosContenedor').removeClass('pegadizo');
          }
      };

      stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
        stickyNav();
      });
    });
</script>
*/
