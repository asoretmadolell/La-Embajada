/**************************
*                         *
* INICIO - INTRODUCCIONES *
*                         *
**************************/

/***********
* ZEPPELIN *
***********/
function zeppelinIntro( despuesDeEsto ) {
	$('#zeppelin').
		animate(
			{left: '5%'},
			1000,
			'swing',
			despuesDeEsto
		);
};

/**********
* TEXTO-1 *
**********/
function texto1Intro( despuesDeEsto ) {
	$('.texto-1').
		animate(
			{
				top: '10%',
				opacity: 1
			},
			1000,
			'linear',
			despuesDeEsto
		);
}

/**********
* TEXTO-2 *
**********/
function texto2Intro( despuesDeEsto ) {
	$('.texto-2').
		animate(
			{
				bottom: '30%',
				opacity: 1
			},
			1000,
			'linear',
			despuesDeEsto
		);
}

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
			1000,
			'swing'
		).
		animate(
			{top: '-=20'},
			1000,
			'swing',
			zeppelinAnim
		);
};