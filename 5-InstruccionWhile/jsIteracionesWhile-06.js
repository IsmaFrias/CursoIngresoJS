//Entregado

function mostrar()
{
	var numero;
	var suma = 0;
	var promedio;
	var contador = 0;


	while(contador < 5)
	{
		numero = parseInt(prompt("Ingrese un número"));

		suma = suma + numero;

		contador++;
	}

	promedio = suma / 5

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
	
}//FIN DE LA FUNCIÓN