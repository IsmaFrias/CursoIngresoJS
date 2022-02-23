/*Entregado

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	//var contador;

	sexoIngresado = prompt("Ingrese sexo, f ó m");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Ingrese un sexo valido");
		//contador++;
	}
	
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN