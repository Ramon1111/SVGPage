//Para cambiar el SVG de los ejemplos
function cambio(element, shape){
  $("#"+shape).attr(element.id,element.value);

  if(shape=='rectangulo')
    $("#"+shape+"_card").html('&#60rect<br/>x="'+$("#"+shape).attr('x')+'"<br/>y="'+$("#"+shape).attr('y')+'"<br/>width="'+$("#"+shape).attr('width')+'"<br/>height="'+$("#"+shape).attr('height')+'"&#62');
  else{
    if(shape=='circulo')
      $("#"+shape+"_card").html('&#60circle<br/>cx="'+$("#"+shape).attr('cx')+'"<br/>cy="'+$("#"+shape).attr('cy')+'"<br/>r="'+$("#"+shape).attr('r')+'"&#62');
    else {
      if(shape=='elipse')
        $("#"+shape+"_card").html('&#60ellipse<br/>cx="'+$("#"+shape).attr('cx')+'"<br/>cy="'+$("#"+shape).attr('cy')+'"<br/>rx="'+$("#"+shape).attr('rx')+'"<br/>ry="'+$("#"+shape).attr('ry')+'"&#62');
    }
  }
}


$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();

  $('#boton_mostrar').click(function(){
    $('#rectangulo_png,#rectangulo_svg').attr({
      "class": "tooltipped",
      "data-position": "bottom"
    });
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
