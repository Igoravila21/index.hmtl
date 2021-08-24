const texto = document.querySelector("#original");

texto.addEventListener("keypress", function (e) {
    var contador = texto.value.length;
    document.getElementById("contador").innerText = contador;
});

const selectTxt = document.querySelector("#efeito");
selectTxt.addEventListener('change', (event) => {
    if (selectTxt.value == "uppercase") {
        var novotexto = texto.value.toString().toUpperCase();
        document.getElementById("modificado").innerHTML = novotexto;
        console.log(novotexto);
    }if (selectTxt.value == "lowercase") {
        var novotexto = texto.value.toString().toLowerCase();
        document.getElementById("modificado").innerHTML = novotexto;
        console.log(novotexto);
    }
})

