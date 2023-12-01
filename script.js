function cambiarColorDeFondo() {
    const colores = ["#ff5733", "#33ff57", "#5733ff", "#ff33b5", "#cc0000", "#ccff00", "#000000"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

// Agregar un event listener al botón
document.getElementById("cambiarColorBtn").addEventListener("click", cambiarColorDeFondo);


document.getElementById("registrar").addEventListener("click", function () {
    // Obtén los valores de los inputs
   let nombre = document.getElementById("nombre").value;
   let email = document.getElementById("email").value;
   let edad=document.getElementById("edad").value;

    // Verifica que los campos no estén vacíos antes de guardar
    if (nombre.trim() !== "" && email.trim() !== "" && edad.trim() !=="") {
        // Crea un objeto para almacenar los datos del usuario
       let usuario = {
            nombre: nombre,
            email: email,
            edad: edad
        };

        // Convierte el objeto a una cadena JSON
        let usuarioJSON = JSON.stringify(usuario);

        // Almacena los datos en el Local Storage
        localStorage.setItem("usuario", usuarioJSON);

     
    }else {
        
    }

});






