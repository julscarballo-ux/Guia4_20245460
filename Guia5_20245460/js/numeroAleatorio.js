//Generamos un numero aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
const numeroIntentos = 3;
let intentos = 1;
function generarNumeroAleatorio() {
    let mensaje;
    const parrafo = document.querySelector("#idParrafo");

    if (intentos <= numeroIntentos) {
        let numero = prompt(
            "Que numero se ha generado (Intento " + intentos + ")?"
        );
        if (numero == numeroAleatorio) {
            mensaje = `Es sorprendente, pudiste adivinar el numero oculto (${numeroAleatorio}).
            Refresque la pagina para volver a jugar`;
        } else if (intentos == numeroIntentos){
            mensaje = `Su numero de intentos ha terminado.
            El numero oculto era: ${numeroAleatorio}. Refresque la pagina para volver a jugar`;
        } else {
            mensaje = `Vuelve a intentar. Quedan ${
                numeroIntentos  - intentos
            } intentos`;
        }
    intentos++;
    } else {
        mensaje = `Su numero de intentos ha terminado.
        El numero oculto era ${numeroAleatorio}. Refresque la pagina para volver a jugar`;
    }

    parrafo.innerHTML = mensaje;
}