/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

Entregado*/

function mostrarAumento()
{

	var sueldo;
	var nuevoSueldo;
	var aumento;
	
	/*el calculo de porcentaje de un valor lo consigo multiplicando 
	el valor por el porcentaje y lo divido por 100*/
	
	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseFloat(sueldo);

	nuevoSueldo = parseFloat(nuevoSueldo);

	aumento = sueldo * 10/100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo


}
