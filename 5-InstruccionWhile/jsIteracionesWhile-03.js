/*Entregado

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador = 0;

	claveIngresada = prompt("Ingrese la clave");
	
	while (claveIngresada!= "utn750"){
		
		claveIngresada = prompt("Ingrese la clave correcta");
		contador++;
	}
}//FIN DE LA FUNCIÓN
