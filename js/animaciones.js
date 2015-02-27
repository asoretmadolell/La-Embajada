/**************************
*                         *
* INICIO - INTRODUCCIONES *
*                         *
**************************/

/* ZEPPELIN */
function zeppelinIntro() {
	$('#zeppelin').
		animate(
			{left: '5%'},
			1000,
			'swing'
		);
};

/***********************
* FIN - INTRODUCCIONES *
***********************/

/***********************
*                      *
* INICIO - ANIMACIONES *
*                      *
***********************/

/* ZEPPELIN */
function zeppelinAnim() {
	$('#zeppelin').
		animate(
			{top: '+=20'},
			1200,
			'swing'
		).
		animate(
			{top: '-=20'},
			1200,
			'swing',
			zeppelinAnim
		);
};

/********************
* FIN - ANIMACIONES *
********************/