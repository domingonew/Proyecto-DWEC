function calcularCategoria() {

    let edad = parseInt(document.getElementById("age2").value);


    if (isNaN(edad)){
            document.getElementById("mensajeerror3").innerHTML = "No has introducido bien los datos";
        } else {

            resultado=edad;

            if (edad < 6) {
                document.getElementById("mensajeerror3").innerHTML = "Micro";


            } else if (edad < 8) {

                document.getElementById("mensajeerror3").innerHTML = "Pre benjamin";


            } else if (edad < 10) {
                document.getElementById("mensajeerror3").innerHTML = "Benjamin";


            } else if (edad < 12) {
                document.getElementById("mensajeerror3").innerHTML = "Alevin";


            } else if (edad < 14) {
                document.getElementById("mensajeerror3").innerHTML = "Infantil";


            } else if (edad< 16) {
                document.getElementById("mensajeerror3").innerHTML = "Cadete";



            } else if (edad < 19) {
                document.getElementById("mensajeerror3").innerHTML = "Juvenil";

            } else if (edad <40){
                document.getElementById("mensajeerror3").innerHTML = "Senior";
            

            } else {
                document.getElementById("mensajeerror3").innerHTML = "Veterano";

            }
        }
    }