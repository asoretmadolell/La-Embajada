$(document).ready(function() {

    var opcionesPopups = {
        closeClass: 'cerrar',
        positionStyle: 'fixed',
        speed: 650,
        transition: 'slideIn',
        transitionClose: 'slideBack'
    };

    $('#servicios-1').bind('click', function(e) {
        e.preventDefault();
        $('.servicios-1').bPopup( opcionesPopups );
    });

    $('#servicios-2').bind('click', function(e) {
        e.preventDefault();
        $('.servicios-2').bPopup( opcionesPopups );
    });

    $('#servicios-3').bind('click', function(e) {
        e.preventDefault();
        $('.servicios-3').bPopup( opcionesPopups );
    });

    $('.popup').prepend('<div class="cerrar"></div>');

    var opcionesSlidersPopups = {
        buttons: true,
        bullets: false
    }

    $('#slider-servicios-1').tinycarousel( opcionesSlidersPopups );

    $('#slider-servicios-2').tinycarousel( opcionesSlidersPopups );

    $('#slider-servicios-3').tinycarousel( opcionesSlidersPopups );

});
