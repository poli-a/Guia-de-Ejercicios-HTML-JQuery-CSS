$(document).ready(function(){
	console.log("ready");
	/*Vinculando input numerico con barra range*/
	$("#asis").mousemove(function(e){
		$("#por").val($(this).val());
	});
	$("#por").change(function(e){
		$("#asis").val($(this).val());
	});

	/*Ocultando popovers de validacion*/
	$("#buttons, #buttons2, #por").click(function(e){
		$("#buttons, #buttons2, #por").popover('dispose');
	});

	/*Boton calcular*/
	$("#calc").click(function(e){
		/*Obteniendo valor nota 1*/
		if($("input").is("[name|='nota1']:checked")){
			var n1 = $("[name|='nota1']:checked").val();
			$("#n1").val(n1);
		}
		else {
			/*Activacion popover de validacion*/
			$("#buttons").popover('show');
		}
		/*Obteniendo valor nota 2*/
		if($("input").is("[name|='nota2']:checked")){
			var n2 = $("[name|='nota2']:checked").val();
			$("#n2").val(n2);
		}
		else {
			/*Activando popover de validacion*/
			$("#buttons2").popover('show');
		}
		/*Obteniendo porcentaje de asistencia*/
		var a = $("#por").val();
		if(a<0 || a>100 || a == ""){
			/*Activando popover de validacion*/
			$("#por").popover('show');
		}
		/*Funciones de calculo y validacion previa*/
		if(n1 != null && n2 != null && a != ""){
			$("#asistencia").val(a);
			calculo(n1, n2, a);
			promedio(n1, n2);
		}
	});
});

/*Definiendo funciones de caculo*/
function calculo(n1, n2, a){
	if(a<60){
		$("#estado").text("Alumno Libre");
		$("#alert").attr("class", "alert-dark");
	}
	else{
		if(n1<4 || n2<4){
			$("#estado").text("Desaprobado");
			$("#alert").attr("class", "alert-danger");
		}
		else {
			$("#estado").text("Regular");
			$("#alert").attr("class", "alert-success");
		}
	}
}
function promedio(n1, n2){
	var res = (parseFloat(n1)+parseFloat(n2))/2;
	$("#promedio").val(res);
}