function calcularSueldo() {
    let radio = parseInt(document.querySelector('input[name="radio"]:checked').value);
    let sueldo = parseFloat(document.getElementById('sueldo').value);
    let hijos = parseInt(document.getElementById('hijos').value);
    let tipocontrato = document.getElementById('tipocontrato').value;
    let resultado = document.getElementById('resultado');
    let retencion;
    let sueldoMensual;


    sueldoMensual = sueldo / radio;

    if (hijos >= 2) {
        retencion = sueldoMensual * 0.08;
    } else {
        retencion = sueldoMensual * 0.12;
    }

    sueldoMensual -= retencion;

    resultado.innerHTML = "Su sueldo mensual es: " + sueldoMensual.toFixed(2) + " en " + radio + " pagas. " +
        "Tu retención es de: " + retencion.toFixed(2) + ". " + "El tipo de contrato seleccionado es: " + tipocontrato + ".";
}

window.addEventListener("load", function () {
    const form = document.getElementById("calculadoraForm");

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            calcularSueldo();
        });
    } else {
        console.error("El formulario con id 'calculadoraForm' no se encontró.");
    }
});
