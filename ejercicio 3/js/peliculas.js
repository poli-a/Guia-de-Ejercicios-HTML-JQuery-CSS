$(document).ready(function(){
	$("a").click(function(e){
		/*Alternando estado activo de la lista*/
		if($("a").hasClass("active")){
			$("a").removeClass("active");
		}
		$(this).toggleClass("active");

		/*Obteniendo atributo id para comparar en switch*/
		var id = $(this).attr("id");

		show(id, this);
	});
});

/*Mostrar datos de la serie*/
function show(id, e){
	/*Desactivando contenido activo*/
	if($("div").hasClass("show active")){
		$("div").removeClass("show active");
	}
	$("#image").removeAttr("src");
	/*Activando contenido correspondiente*/
	switch (id) {
		case 'dh':
			$("#dia").val("Lunes");
			$("#hora").val("18:00 hs");
			$("#dr").addClass("show active");
			$("#image").attr("src", "imagenes/Dr.jpg");
		break;

		case 'pb':
			$("#dia").val("Martes");
			$("#hora").val("19:00 hs");
			$("#prison").addClass("show active");
			$("#image").attr("src", "imagenes/prison.jpg");
		break;

		case 'twd':
			$("#dia").val("Miercoles");
			$("#hora").val("18:00 hs");
			$("#walking").addClass("show active");
			$("#image").attr("src", "imagenes/walking.png");
		break;

		case 'got':
			$("#dia").val("Jueves");
			$("#hora").val("20:00 hs");
			$("#game").addClass("show active");
			$("#image").attr("src", "imagenes/game.jpg");
		break;
	}
}