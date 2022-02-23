function mostrar()
{
	var numero;
	var numerosDivisores;
	var contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un número"));

	for(numerosDivisores = 1; numerosDivisores <= numero; numerosDivisores++){

		if(numero % numerosDivisores == 0){
			contadorDivisores++
			console.log("Los números divisores son :" + numerosDivisores);
		}
	}
	console.log("La cantidad de números divisores es :" + contadorDivisores);

}//FIN DE LA FUNCIÓN