//Entregado

function mostrar()
{
	var estacion;
	var destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		//Invierno
		case "Invierno":
		{
			if(destino == "Bariloche")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}
		break;
		}

		//Verano
		case "Verano":
		{
			if(destino == "Mar del plata" || destino == "Cataratas")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}
		}
		break;
	
		//Otoño
		case "Otoño":
			{
				alert("Se viaja");
			}
		break;

		//Primavera
		case "Primavera":
			if(destino == "Bariloche")
			{
				alert("No se viaja");
			}
			else
			{
				alert("Se viaja");
			}
	}
}//FIN DE LA FUNCIÓN