/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

Entregado*/

function mostrarAumento()
{
	var importe
	var porcentaje
	var nuevoImporte

	importe = document.getElementById("txtIdImporte").value;

	importe = parseFloat(importe);

	porcentaje = importe * 25/100;

	nuevoImporte = importe - porcentaje;

	document.getElementById("txtIdResultado").value = nuevoImporte;


}
