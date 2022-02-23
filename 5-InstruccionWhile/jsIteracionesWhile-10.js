/*Entregado

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0; 
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivo = 0;
	var promedioNegativo = 0;
	var diferencia;

	do{

		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0){

			sumaNegativos = numeroIngresado + sumaNegativos;
			contadorNegativos++;
		}
		else if (numeroIngresado == 0){

				contadorCeros++;
		}
		else
		{
			sumaPositivos = numeroIngresado + sumaPositivos;
			contadorPositivos++;
		}
		if(numeroIngresado % 2 == 0){

			contadorPares++;
		}

		respuesta = prompt("Desea ingresar otro número? (si/no)");

	}while (respuesta == "si");
	//fin del while

	if(contadorPositivos > 0){
		promedioPositivo = sumaPositivos / contadorPositivos;
	}
	if(contadorNegativos > 0){
		promedioNegativo = sumaNegativos / contadorNegativos;
	}

    diferencia = contadorPositivos - contadorNegativos;

	document.write("<br> La suma de negativos es: "+sumaNegativos);
	document.write("<br> La suma de positivos es: "+sumaPositivos);
	document.write("<br> La cantidad de positivos es: "+contadorPositivos);
	document.write("<br> La cantidad de negativos es: "+contadorNegativos);
	document.write("<br> La cantidad de ceros es: "+contadorCeros);
	document.write("<br> La cantidad de números pares es: "+contadorPares);
	document.write("<br> El promedio de números negativos es: "+promedioNegativo);
	document.write("<br> El promedio de números positivos es: "+promedioPositivo);
	document.write("<br> La diferencia entre números positivos y negativos es: "+diferencia);
}//FIN DE LA FUNCIÓN