//Entregado

function mostrar()
{
	var destino;
	var estacion;
	var precio;
	var precioFinal;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	precio = 15000
	precio = parseFloat(precio);

	switch(estacion)
	{
			case "Invierno":
			if(destino == "Bariloche")
			{
				precioFinal = precio * 1.2;
				alert("El precio final es de $" + precioFinal);
			}
		else
			if(destino == "Cataratas" || destino == "Cordoba")
			{
				precioFinal = precio * 0.9;
				alert("El precio final es de $" + precioFinal);
			}
		else
			if(destino == "Mar del plata")
			{
				precioFinal = precio * 0.8;
				alert("El precio final es de $" + precioFinal);
			}
			break;
			
		case "Verano":
			if(destino == "Bariloche")
			{
				precioFinal = precio * 0.8;
				//alert("El precio final es de $" + precioFinal);
			}
		else
			if(destino == "Cataratas" || destino == "Cordoba")
			{
				precioFinal = precio * 1.1;
				//alert("El precio final es de $" + precioFinal);
			}
		else
			if(destino == "Mar del plata")
			{
				precioFinal = precio * 1.2;
				//alert("El precio final es de $" + precioFinal);
			}
			break;

		case "Otoño":
		case "Primavera":
			if(destino == "Cordoba")
			{
				precioFinal = precio;
				//alert("El precio final es de $" + precioFinal);
			}
		else 
			{
				precioFinal = precio * 1.1;
				//alert("El precio final es de $" + precioFinal);
			}	
	}
	mensaje = "El precio final es de $" + precioFinal;
	alert(mensaje);
}
//FIN DE LA FUNCIÓN