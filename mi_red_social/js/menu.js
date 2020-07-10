$(function(){
	var boton = $('#btn-menu');
	var fondo_enlace = $('#fondo-enlace');

	boton.on('click', function(e){
		fondo_enlace.toggleClass('active');
		$('#barra-lateral-izquierda').toggleClass('active');
		e.preventDefault();
	});

	fondo_enlace.on('click', function(e){
		fondo_enlace.toggleClass('active');
		$('#barra-lateral-izquierda').toggleClass('active');
		e.preventDefault();
	});
}())