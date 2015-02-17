$(document).ready( function () {
    //obtenerHoraActual();
} );

function obtenerHoraActual() {
    var fecha = new Date();

    /* un relojito sencillo
    var refresh = 1000; // 1000 mili segundos, o lo que es lo mismo, 1 segundo
    window.setTimeout('obtenerHoraActual()', refresh);
    var hora = fecha.toLocaleTimeString();
    */

    var hora = fecha.getHours();

    $( '#hora' ).text( hora );

    if( hora >= 19 || hora <= 8 ) {
        $( '.dia' ).addClass( 'noche' ).removeClass( 'dia' );
    }
}