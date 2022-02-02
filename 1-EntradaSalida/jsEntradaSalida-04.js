/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreDeUsuario;
console.log("antes de pedir el dato")

//guardo el nombre que escrbio el usuario en promt
nombreDeUsuario = prompt("Por favor, ingrese su nombre");

console.log("despues de pedir el dato")

//pego el nombre que tengo guardado del promt
document.getElementById("txtIdNombre").value = nombreDeUsuario;
}

