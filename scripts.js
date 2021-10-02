function obtenerCurp() {

    var nombre = document.getElementById("caja_nombre");
    var apellido1 = document.getElementById("caja_apellido1");
    var apellido2 = document.getElementById("caja_apellido2");
    var dia = document.getElementById("caja_dia");
    var mes = document.getElementById("caja_mes");
    var año = document.getElementById("caja_año");
    var res = document.getElementById("res");
    var sexo = document.getElementById("caja_sexo");
    var estado = document.getElementById("caja_estado");
    var curp = apellido1.value.slice(0, 2) + apellido2.value.slice(0, 1) + nombre.value.slice(0, 1) + año.value.slice(2, 4)
        + mes.value.slice(0, 2) + dia.value.slice(0, 2) + sexo.value.slice(0, 1) + estado.value.slice(0, 2)
        + apellido1.value.slice(2, 3) + apellido2.value.slice(2, 3) + Math.round(Math.random() * 9)
        + Math.round(Math.random() * 99);

    res.innerText = "Resultado: " + curp.toUpperCase();


}



function obtenerConv() {

    var cajanumero = document.getElementById("caja_numero");
    var res1 = document.getElementById("caja_bin");
    var numero = cajanumero.value;
    var numeroOct = cajanumero.value;
    var numerohex = cajanumero.value;
    var exp;
    var digito;
    var binario;
    exp = 0;
    binario = 0;
    
    while (numero != 0) {
        digito = parseInt(numero % 2);

        binario = parseInt(binario + digito * Math.pow(10, exp));

        exp++;
        numero = parseInt(numero / 2);
      
    }
    res1.value = binario;

    var cajanumero = document.getElementById("caja_numero");
    var res2 = document.getElementById("caja_oct");
    var digitoOct;
    var Octal;
    exp = 0;
    Octal = 0;
    
    while (numeroOct != 0) {
        digitoOct = parseInt(numeroOct % 8);
        Octal = parseInt(Octal + digitoOct * Math.pow(10, exp));
        exp++;
        numeroOct = parseInt(numeroOct / 8);

    }
    res2.value = Octal;

    var res3 = document.getElementById("caja_hex");
    var digitohex;
    var hex;
    exp = 0;
    hex = 0;
    
    while (numerohex != 0) {
        digitoOct = parseInt(numerohex % 16);
        hex = parseInt(hex + digitohex * Math.pow(10, exp));
        exp++;
        numerohex = parseInt(numerohex / 16);

    }
  
    res3.value = hex;





}

function trnasformarCadena() {

    var cajaCadena = document.getElementById("caja_entrada");
    var cajavocales = document.getElementById("caja_voc");
    var cajacons = document.getElementById("caja_cons");
    var cajarep = document.getElementById("caja_rep");
    var cajaalt = document.getElementById("caja_alt");
    var cadena = cajaCadena.value;
    var numVocales;
    var long = cadena.length;
    long = long - cadena.replace(/[^aeiouAEIOU]/g, '').length;
    cajacons.value = long;
    cajavocales.value =  cadena.replace(/[^aeiouAEIOU]/g, '').length;

    var resultado = '';

    for(let i = 0; i < cadena.length; ++i) {
        if (i % 2 == 0) {
            resultado += cadena[i].toUpperCase();
        } else {
            resultado += cadena[i].toLowerCase();
        }
    }


    cajaalt.value = resultado;
    


}