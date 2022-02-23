/*Entregado

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var numeroIngesado;
	var positivos = 0;
	var negativos = 1;
	var flag = 0;

	do {

		numeroIngesado = prompt("Ingrese un número");
		numeroIngesado = parseInt(numeroIngesado);

		if (numeroIngesado >= 0){

			positivos = positivos + numeroIngesado;
		}

		else{
			flag = 1;
			negativos = negativos * numeroIngesado;
			}

		respuesta = prompt("Quiere ingresar otro número? Escriba si ó no");

	}while(respuesta == "si");

	if (flag == 0){

		negativos = 0;
	}

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;

}//FIN DE LA FUNCIÓN