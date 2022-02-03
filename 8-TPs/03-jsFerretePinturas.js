/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Entregado */
function FahrenheitCentigrados () 
{
	var centigrados;
    var fahrenheit;
    var mensaje;

    fahrenheit = document.getElementById("txtIdTemperatura").value;

    fahrenheit = parseFloat(fahrenheit);

    centigrados = (fahrenheit - 32) * 5/9;
    
    //console.log(centigrados);

    mensaje = fahrenheit + " grados fahrenheit son " + centigrados.toFixed(2) + " grados centigrados";

    alert(mensaje);

}

function CentigradosFahrenheit () 
{
	
    var centigrados
    var fahrenheit
    var mensaje

    centigrados = document.getElementById("txtIdTemperatura").value;

    centigrados = parseFloat(centigrados);

    fahrenheit = (centigrados * 9/5) + 32;

    //console.log(fahrenheit);

    mensaje = centigrados + " centigrados son " + fahrenheit.toFixed(2) + " grados fahrenheit";

    alert(mensaje);

}
