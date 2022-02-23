function mostrar()
{
	var numero;
	var numerosPares;
	var contadorPares = 0;

	numero = parseInt(prompt("Ingrese un número"));
	
	for (numerosPares = 1; numerosPares <= numero; numerosPares++){
		
		if( numerosPares % 2 == 0){
			contadorPares++;
			console.log("Los números pares son :" + numerosPares);
		}

	}
	console.log("La cantidad de números pares son :" + contadorPares);

}//FIN DE LA FUNCIÓN