/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'

Entregado*/

function mostrar()
{
	//inicio de declaración de variables
	var nombreDeUsuario;
	//fin de declaración de variables

	//inicio de captura de valores
	nombreDeUsuario = document.getElementById("txtIdNombre").value;//captura de datos
	//fin de la captura de datos
	
	alert(nombreDeUsuario); //muestro los datos por alert

}


