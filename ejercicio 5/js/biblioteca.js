$(document).ready(function(){
	/*Libros de sala*/
	$("#item1, #item4").click(function(){
		$("#status").removeClass("alert-success");
		$("#status").addClass("alert-danger");
		$("#status").val("Libro de solo lectura en sala.");
	});
	/*Libros de prestamo*/
	$("#item2, #item3").click(function(){
		$("#status").removeClass("alert-danger");
		$("#status").addClass("alert-success");
		$("#status").val("Prestamo permitido.");
		devolucion();
	});
});
/*Calculo fecha devolucion*/
function devolucion(){
	var hoy = new Date();
	/*Suma 5 dias al dia actual*/
	hoy.setDate(hoy.getDate() + 5);
	var d = hoy.getDate();
	var m = hoy.getMonth() + 1;
	var a = hoy.getFullYear();
	$("#fecha").val("Fecha de devolucion: " + d + "/" + m + "/" + a);
}