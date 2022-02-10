//Entregado

function mostrar()
{
	var edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 17){
		alert("Es mayor de edad");

	
			}
			else if(edad < 13)
			{
				alert("Es niño");
	
				}
				else if(edad > 13 || edad < 17)
				{
					alert("Es adolescente");

	}
}//FIN DE LA FUNCIÓN