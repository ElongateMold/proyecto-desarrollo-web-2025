
console.log("Script loaded successfully");
var nombre = "Stefan Lazo Rilling";
var edad = 21;

for (var i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

var elemTitle = document.getElementById("quiensoy");
console.log("Elemento con ID 'quiensoy':", elemTitle);

document.addEventListener("DOMContentLoaded", function() {
    var section = document.getElementById("quiensoy");
    if (section) {
        section.innerHTML += "<p>Nombre: " + nombre + "</p>";
        section.innerHTML += "<p>Edad: " + edad + "</p>";
    } else {
        console.error("La sección 'quiensoy' no se encontró en el documento.");
    }
});

document.getElementById("quiensoy").innerHTML