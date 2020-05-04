$(document).ready(function(){
	/*Seleccion de producto*/
	$("[name|='item']").click(function(e){
		/*Reestablecer textos de ayuda para el usuario*/
		helpUserTab();
		helpForm();
		/*Reestableciendo subtotal y cantidad*/
		reset();
		/*Obteniendo y mostrando precio (atributo value) e imagen*/
		var p = $(this).val();
		var nom = $(this).text();
		loadProduct(p, nom);
	});

	/*Boton de agregar al carrito de compras*/
	$("#add").click(function(){
		/*Reestablecer textos de ayuda para el usuario*/
		helpForm();
		helpUserTab();
		/*Validacion subtotal*/
		if ($("#ressub").val() != "") {
			addCarrito();
		}
		else {
			$("#helpsub").text("*Calcule subtotal antes de ingresar los productos al carrito.");
			$("#helpsub").addClass("alert-danger");
		}
	});

	/*Boton subtotal*/
	$("#sub").click(function(){
		/*Reestablecer textos de ayuda para el usuario*/
		helpForm();
		helpUserTab();
		/*Obteniendo precio*/
		var p = $("#price").val();
		/*Validando cantidad de productos ingresados*/
		if($("#cant").val() < 1){
			$("#helpcant").text("*Debe ingresar una cantidad mayor a '0' (cero).");
			$("#helpcant").addClass("alert-danger");
		}
		else {
			var c = $("#cant").val();
			subTotal(c, p);
		}
	});

	/*Boton para reestablecer valores*/
	$("#reset").click(function(){
		reset();
	});

	/*Boton calcular total*/
	$("#total").click(function(){
		helpUserTab();
		total()
	});

	/*Boton vaciar carrito*/
	$("#vaciar").click(function(){
		helpUserTab();
		delCarrito();
	});

	/*Boton confirmar compra*/
	$("#confirm").click(function(){
		helpUserTab();
		/*Obteniendo total*/
		var t = $("#tot").val();
		if(t!=""){
			alert("Felicitaciones! Compra confirmada. Total a pagar: "+t);
			delCarrito();
		}
		else {
			$("#helpprod").text("*Calcule el total antes de finalizar la compra.");
			$("#helpprod").addClass("alert-danger");
		}
	});
});
/*Funcion que reestablece los campos de ayuda para el usuario (carrito)*/
function helpUserTab(){
	$("#helpprod").text("");
	$("#helpprod").removeClass("alert-danger");
}
/*Reestablecer textos de ayuda para el usuario (form)*/
function helpForm(){
	/*Reset texto ayuda subtotal*/
	$("#helpsub").text("");
	$("#helpsub").removeClass("alert-danger");
	/*Reset texto ayuda cantidad*/
	$("#helpcant").text("");
	$("#helpcant").removeClass("alert-danger");
	$("#cant").change(function(){
		$("#helpcant").text("");
		$("#helpcant").removeClass("alert-danger");
	});
}

/*Funcion reestablecer campos del form*/
function reset(){
	$("#cant").val(1);
	$("#ressub").val("");
}

/*Funcion carga datos de producto al form*/
function loadProduct(p, nom){
	if($("[name|='item']").hasClass("active")){
		[name|='item']
	}
	$("#price").val(p);
	$("#imgprod").attr("src", "imagenes/"+nom+".jpg");
}

/*Funcion añadir producto al carrito*/
function addCarrito(){
	/*Identificando producto seleccionado*/
	if($("button").hasClass("active")){
		/*Obteniendo nombre del producto (nombre del boton)*/
		var t = $(".active").text();
		/*Obteniendo precio*/
		var p = $("#price").val();
		/*Obteniendo cantidad*/
		var u = $("#cant").val();
		/*Obteniendo subtotal*/
		var s = $("#ressub").val();
		/*Agregando datos al carrito (tabla)*/
		for(i=1; i<=3; i++){
			/*Bandera para validacion de carrito lleno*/
			var ban = 0;
			/*Validacion para añadir producto*/
			if ($("#prod" + i).text() == "") {
				$("#prod" + i).text(t);
				$("#price" + i).val(p);
				$("#unid" + i).val(u);
				$("#sub" + i).val(s);
				break;
			}
			var ban = 1;
		}
		/*Validacion de carrito lleno*/
		if(ban==1){
			/*Aviso para el usuario (Carrito lleno)*/
			$("#helpprod").text("Solo puede agregar hasta tres (3) productos.");
			$("#helpprod").addClass("alert-danger");
		}
	}
}

/*Funcion calculo de subtotal*/
function subTotal(p, c){
	var s = p * c;
	$("#ressub").val(s);
}
/*Funcion vaciar carrito*/
function delCarrito(){
	for(i=1; i<=3; i++){
		/*vaciando tabla*/
		$("#prod" + i).text("");
		$("#price" + i).val("");
		$("#unid" + i).val("");
		$("#sub" + i).val("");
		$("#tot").val("");
		$("#tablero label, #tot").removeClass("alert alert-success");
	}
}

/*Funcion calcula total*/
function total(){

	var suma = 0;
	for(i=1; i<=3; i++){
		suma += Number($("#sub" + i).val());
	}
	if (suma>0) {
		$("#tot").val("$  "+suma);
		$("#tablero label, #tot").addClass("alert alert-success");
	}
	else {
		$("#helpprod").text("*Agregue productos antes de calcular el total.")
		$("#helpprod").addClass("alert-danger")
	}
}