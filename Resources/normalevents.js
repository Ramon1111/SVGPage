var x;
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

  $('.prefijos').hide();
  $('#mostrar_prefijos').click(function(){
    $('#mostrar_prefijos').hide();
    $('.prefijos').show();
    Materialize.fadeInImage('.prefijos')
  });

  var options = [
    {selector: '#secret_part', offset: 500, callback: function() {
      Materialize.fadeInImage('#secret_part');
    } },
  ];
  Materialize.scrollFire(options);

  $(".dropdown-button").dropdown();
})

function cambio(element, shape){
  $("#"+shape).attr(element.id,element.value);

  if(shape=='rectangulo'){
    $("#"+shape+"_card").html('&#60rect<br/>x="'+$("#"+shape).attr('x')+'"<br/>y="'+$("#"+shape).attr('y')+'"<br/>width="'+$("#"+shape).attr('width')+'"<br/>height="'+$("#"+shape).attr('height')+'"&#62');
  }
  else{
    if(shape=='circulo')
      console.log('no es rectangulo');
  }
}
