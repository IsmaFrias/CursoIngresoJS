/*Entregado

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flag = 0;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	
	do{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		
			if (flag == 0)
			{
				numeroMinimo = numeroIngresado
				numeroMaximo = numeroIngresado
				flag = 1;
			}
			
			if (numeroIngresado > numeroMaximo){
				
				numeroMaximo = numeroIngresado;
			}
			else if (numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
			
			respuesta=prompt("Quiere ingresar otro número?");
		
		}while(respuesta == "si");

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN