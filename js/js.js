$(document).ready(function() {
    comenzarIntroducciones();
})

/**************************
*                         *
* INICIO - INTRODUCCIONES *
*                         *
**************************/

function comenzarIntroducciones()
{
	texto1Intro();
	texto2Intro();
	zeppelinIntro( comenzarAnimaciones );
};

/***********************
* FIN - INTRODUCCIONES *
***********************/

/***********************
*                      *
* INICIO - ANIMACIONES *
*                      *
***********************/

function comenzarAnimaciones()
{
	zeppelinAnim();
};

/********************
* FIN - ANIMACIONES *
********************/