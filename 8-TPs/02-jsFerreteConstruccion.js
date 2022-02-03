/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Entregado */
// txtIdLargo txtIdAncho txtIdRadio
function Rectangulo () 
{
    var largo;
    var ancho;
    var alambreRectangulo;
    var perimetroDelTerreno;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetroDelTerreno = (ancho + largo) * 2;
    alambreRectangulo = perimetroDelTerreno * 3;

    alert("La cantidad de alambre a comprar es " + alambreRectangulo);

}
function Circulo () 

{

    var radioCirculo;
    var perimetroCirculo;
    var vueltasAlambre;
    var resultadoTotal;
    var mensaje;

    vueltasAlambre = 3;

    radioCirculo = document.getElementById("txtIdRadio").value;
    
    radioCirculo = parseFloat(radioCirculo);

    perimetroCirculo = 2 * Math.PI * radioCirculo;

    //console.log(Math.PI);

    resultadoTotal = perimetroCirculo * vueltasAlambre;

    mensaje = "La cantidad total es " + resultadoTotal.toFixed(2);

    alert(mensaje);


}

function Materiales () 
{
	var largoDelTerreno;
    var anchoDelTerreno;
    var areaDelTerreno;
    var bolsaDeCemento;
    var bolsaDeCal;
    var mensaje;

    largoDelTerreno = document.getElementById("txtIdLargo").value;
    anchoDelTerreno = document.getElementById("txtIdAncho").value;

    largoDelTerreno = parseFloat(largoDelTerreno);
    anchoDelTerreno = parseFloat(anchoDelTerreno);

    areaDelTerreno = largoDelTerreno * anchoDelTerreno;
    bolsaDeCemento = areaDelTerreno * 2;
    bolsaDeCal = areaDelTerreno * 3;

    mensaje = "La cantidad de bolsas de cemento a comprar son " + bolsaDeCemento;
    mensaje += " y la cantidad de bolsas de cal a comprar son " + bolsaDeCal;

    alert(mensaje);
}