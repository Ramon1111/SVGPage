//Para cambiar el SVG de los ejemplos
function cambio(element, shape){
  if((shape != 'poligono') && (shape != 'polilinea')){
    $("#"+shape).attr(element.id,element.value);
  }
  else{
    console.log(element.dataset.shape);
    if(element.dataset.shape == 'points1')
      $("#"+shape).attr('points',$("#"+element.dataset.shape).val());
    else
      $("#"+shape).attr(element.dataset.shape,$("#"+element.dataset.shape).val());
  }

  if(shape=='rectangulo')
    $("#"+shape+"_card").html('&#60rect<br/>x="'+$("#"+shape).attr('x')+'"<br/>y="'+$("#"+shape).attr('y')+'"<br/>width="'+$("#"+shape).attr('width')+'"<br/>height="'+$("#"+shape).attr('height')+'"&#62');
  else{
    if(shape=='circulo')
      $("#"+shape+"_card").html('&#60circle<br/>cx="'+$("#"+shape).attr('cx')+'"<br/>cy="'+$("#"+shape).attr('cy')+'"<br/>r="'+$("#"+shape).attr('r')+'"&#62');
    else {
      if(shape=='elipse')
        $("#"+shape+"_card").html('&#60ellipse<br/>cx="'+$("#"+shape).attr('cx')+'"<br/>cy="'+$("#"+shape).attr('cy')+'"<br/>rx="'+$("#"+shape).attr('rx')+'"<br/>ry="'+$("#"+shape).attr('ry')+'"&#62');
      else{
        if(shape=='poligono')
          $("#"+shape+"_card").html('&#60polygon<br/>points="'+$("#"+element.dataset.shape).val()+'"/&#62');
        else {
          if(shape =='linea')
            $("#"+shape+"_card").html('&#60line<br/>x1="'+$("#"+shape).attr('x1')+'"<br/>y1="'+$("#"+shape).attr('y1')+'"<br/>x2="'+$("#"+shape).attr('x2')+'"<br/>y2="'+$("#"+shape).attr('y2')+'"&#62');
          else {
            if(shape =='polilinea')
              $("#"+shape+"_card").html('&#60polygon<br/>points="'+$("#"+element.dataset.shape).val()+'"<br/>fill="none"/&#62');
          }
        }
      }
    }
  }
}

function cambiopath(element, comand){
  if(comand =='M'){//Para el path con "d": moveto
    console.log(element.dataset.moveto+" "+$("#Mx").val()+" "+$("#My").val());
    var moveto = element.dataset.moveto+" "+$("#Mx").val()+" "+$("#My").val();
    var circx = $("#Mx").val();
    var circy = $("#My").val();
    $('svg path').attr("d",moveto);
    $('svg circle').attr("cx",circx);
    $('svg circle').attr("cy",circy);
    $("#"+comand+"_card").html('&#60path d="'+moveto+'"/&#62<br/>&#60circle cx="'+circx+'" cy="'+circy+'" r="2"/&#62');
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
