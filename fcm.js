function calcularFCM() {

    let edad = parseInt(document.getElementById("age").value);
    let sexo = parseInt(document.getElementById("sex").value);


    let resultado = NaN;

    if (isNaN(edad) || isNaN(sexo)) {
        document.getElementById("mensajeerror2").innerHTML = "No has introducido bien los datos";
    } else {

        if (sexo == 1) {
            resultado = 220 - edad;
        } else if (sexo == 2) {
            resultado = 226 - edad;
        }
    }
    document.getElementById("mensajeerror2").innerHTML = "Su FCM es: " + resultado;
}