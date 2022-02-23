/*Entregado

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	var promedio;
	
	contador = 0;
	acumulador = 0;
	respuesta = "si";
	
	
	while(respuesta == "si"){
		
		numeroIngresado = prompt("Ingrese un número");
	
		numeroIngresado = parseFloat(numeroIngresado);
		
		contador++;
		
		acumulador = acumulador + numeroIngresado;
		
		promedio = acumulador / contador;
	
		respuesta = prompt("Quiere ingresar otro número? Diga si o no");
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);

}//FIN DE LA FUNCIÓN