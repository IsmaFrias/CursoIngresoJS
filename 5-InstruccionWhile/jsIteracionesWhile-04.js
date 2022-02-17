/*Entregado

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var contador;

	numeroIngresado = prompt("Ingrese un número entre 0 y 9.");

	while(numeroIngresado > 9){

		numeroIngresado = prompt("Error, ingrese un número entre 0 y 9")
		contador++;
	}

		document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN