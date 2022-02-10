// Entregado

function mostrar()
{

	var nota;
	
	nota = Math.floor(Math.random() * 10 + 1);

	if(nota >= 9)
	{
	alert("Exelente nota " + nota);
	}
	
	else if(nota < 5)
	{
	alert("Vamos, la proxima se puede nota " + nota);
	}
	
	else 
	{
		alert("Aprobó nota " + nota);
	}
}
