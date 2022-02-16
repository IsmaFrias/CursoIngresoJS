/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 Entregado*/
 
function CalcularPrecio() 
{
   /* var cantidadLamparitas;
    var precioLampara
    var precioFinal;
    var marca;
    var iiBB;
    var precioIibb;

    marca = document.getElementById("Marca").value;
    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadLamparitas = parseInt(cantidadLamparitas)

    precioLampara = cantidadLamparitas * 35

    // Punto A  
    if (cantidadLamparitas >= 6)
        {
        precioFinal = precioLampara * 0.5;
        }

    // Punto B
    else if (cantidadLamparitas == 5)
    {
        if (marca == "ArgentinaLuz")
            {
            precioFinal = precioLampara * 0.6;
            }
            else if (marca == "FelipeLamparas" || marca == "JeLuz" || marca == "HazIluminacion" || marca == "Osram")
            {
                precioFinal = precioLampara * 0.7;
            }
    }

    // Punto C
    else if (cantidadLamparitas == 4)
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
            precioFinal = precioLampara * 0.75;
            }
                else if (marca == "JeLuz" || marca == "HazIluminacion" || marca == "Osram")
                    {
                    precioFinal = precioLampara * 0.8;
                    }
    }

    // Punto D
    else if (cantidadLamparitas == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            precioFinal = precioLampara * 0.85;
        }
        else if (marca == "FelipeLamparas")
        {
            precioFinal = precioLampara * 0.9;
        }
        else if (marca == "JeLuz" || marca == "HazIluminacion" || marca == "Osram")
        {
            precioFinal = precioLampara * 0.95;
        }
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);

    // Punto E
    if (precioFinal > 120)
    {
        iiBB = precioLampara * 0.10
        precioIibb = precioLampara + iiBB;
        alert("De IIBB usted pago el 10%, siendo " + iiBB + " el impuesto que pagó");
        document.getElementsById("txtIdprecioDescuento").value = precioIibb;
    }*/


    var precio;
    var cantidad;
    var marca;
    var precioFinal;
    var iibb;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = cantidad * 35;

    switch (cantidad){
        case 1:
            precioFinal = precio;
        case 2:
            precioFinal = precio;
            break;
        case 3:
            if(marca == "ArgentinaLuz"){
                precioFinal = precio * 0.85;
            }else if (marca == "FelipeLamparas"){
                precioFinal = precio * 0.9;
            }else{
                precioFinal = precio * 0.95;
            }
            break
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            precioFinal = precio * 0.75;
            }else {
                precioFinal = precio * 0.8;
            }
            break
        case 5:
            if (marca == "ArgentinaLuz"){
                precioFinal = precio * 0.6;
            }
            else {
                precioFinal = precio * 0.7;
            }
            break
        default:
        precioFinal = precio * 0.5;
        break;
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);

    if (precioFinal > 120){
        iibb = precioFinal * 1.10;
        precioFinal = precioFinal + iibb;
        alert("Total a pagar: $" + precioFinal +  " usted pago $" + iibb.toFixed(2) + " de ingresos brutos");
    }

}
