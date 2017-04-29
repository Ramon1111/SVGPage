$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();

  $('#boton_mostrar').click(function(){
    $('#rectangulo_png,#rectangulo_svg').attr('class','tooltipped');
    $('#rectangulo_png,#rectangulo_svg').attr('data-position','bottom');
    $('#rectangulo_png,#rectangulo_svg').attr('data-delay','50');
    $('#rectangulo_png').attr('data-tooltip',"1'161 bytes (1.13 KB)");
    $('#rectangulo_svg').attr('data-tooltip',"267 bytes");
    $('.tooltipped').tooltip({delay: 50});
  });
})
