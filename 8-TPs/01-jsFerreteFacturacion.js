/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Entregado */
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var resultado

    precio1 = document.getElementById("txtIdPrecioUno").value;

    precio2 = document.getElementById("txtIdPrecioDos").value;

    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);

    precio2 = parseFloat(precio2);

    precio3 = parseFloat(precio3);

    resultado = precio1 + precio2 + precio3;

    alert("La suma es $" + resultado);


}
function Promedio () 
{
	
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;

    precio2 = document.getElementById("txtIdPrecioDos").value;

    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);

    precio2 = parseFloat(precio2);

    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;

    promedio = suma / 3;

    alert("El promedio es $" + promedio);


}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    var porcentaje;
    var precioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;

    precio2 = document.getElementById("txtIdPrecioDos").value;

    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);

    precio2 = parseFloat(precio2);

    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;

    porcentaje = suma * 21/100;

    precioFinal = porcentaje + suma;

    alert("El precio final es $" + precioFinal);

    


}