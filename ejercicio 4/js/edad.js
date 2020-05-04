$(document).ready(function(){
	/*Eventos de boton*/
	$("#calc").click(function(){
		 /*Reestableciendo campo de ayuda para el usuario*/
		$("#help").val("");
		/*Resteableciendo campo de resultado*/
		$("#result").removeAttr("class", "alert-danger");
		var val = $("#fecha").val();
		validar(val);
	});
});

/*Boton reestablecer*/
$("#reset").click(function(){
	$("#help").val("");
});

/*Calcular edad*/
function calcular(val){
	var hoy = new Date();
	var nac = new Date(val);
	var edad = hoy.getFullYear() - nac.getFullYear();
	$("#result").val(edad+" años.");
}

/*Funcion de validaciones*/
function validar(val){
	var h = new Date();
	var f = new Date(val);
	/*Que fecha elegida sea menor a la actual*/
	if( val == "" || f.getFullYear()>h.getFullYear()
		|| (f.getMonth()>h.getMonth() && f.getFullYear()==h.getFullYear())
			|| (f.getMonth()==h.getMonth() && f.getFullYear()==h.getFullYear() && f.getDate()+1>h.getDate())){
				$("#result").attr("class", "alert-danger");
				$("#result").val("Error, ingrese una fecha valida.*");
				$("#help").val("*La fecha debe ser anterior a la fecha actual.");
	}
	else {
		calcular(val);
	}
}