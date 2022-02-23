function mostrar()
{

	var repeticiones
	var contador = 0;
	var mensaje = "Hola UTN FRA";
	
	repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

	for(contador; contador < repeticiones; contador++){

	document.write('<br>'+ mensaje);
	}

}//FIN DE LA FUNCIÓN