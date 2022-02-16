//Entregado

function mostrar()
{
	//tomo el mes
	var mes =txtIdMes.value;

	switch (mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
		break
	
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 dias o mas");
		}
	


}//FIN DE LA FUNCIÓN