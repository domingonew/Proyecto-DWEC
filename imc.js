function calc_imc() {

    var kg = document.getElementById("kg");
    var cm  = document.getElementById("cm");
    var imc = document.getElementById("imc");
    var lectura = document.getElementById("lectura");

    if (kg.value!="" && cm.value!=""){
        var imcx = (kg.value / (cm.value * cm.value));
        imc.innerHTML = imcx
        console.log(imcx);

        if (imcx <= 16.00){
            lectura.innerHTML = "Delgadez Severa";
            document.getElementById("DelgadezS").style.backgroundColor = "#F1c40F";
        }
        else if (imcx >= 16.00 && imcx < 16.99){
            lectura.innerHTML = "Delgadez moderada";
            document.getElementById("DelgadezM").style.backgroundColor = "#F9E79F";
        }
        else if (imcx >= 17.00 && imcx < 18.49){
            lectura.innerHTML = "Delgadez aceptable";
            document.getElementById("DelgadezA").style.backgroundColor = "#FCF3CF";
        }
        else if (imcx >= 18.50 && imcx < 24.99){
            lectura.innerHTML = "Peso Normal";
            document.getElementById("PesoN").style.backgroundColor = "#ABB2B9";
        }
        else if (imcx >= 25.00 && imcx < 29.99){
            lectura.innerHTML = "Sobrepeso";
            document.getElementById("Sobrepeso").style.backgroundColor = "E59866";
        }
        else if (imcx >= 30.00 && imcx < 34.99){
            lectura.innerHTML = "Obeso: Tipo I";
            document.getElementById("ObesidadS").style.backgroundColor = "#E67E22";
        }
        else if (imcx >= 35.00 && imcx < 40.00){
            lectura.innerHTML = "Obeso: Tipo II";
            document.getElementById("ObesidadM").style.backgroundColor = "#E67E22";
        }
        else if (imcx >= 40.00){
            lectura.innerHTML = "Obeso: Tipo III";
            document.getElementById("ObesidadG").style.backgroundColor = "#BA4A00";
        }
        else{
            alert("Inserte los datos de peso y altura");
        }
    };
}
