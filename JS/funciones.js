/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
//+===========================================================================
//Encripta
//+===========================================================================
document.querySelector("#btnEncriptar").addEventListener("click",
    function () {
        var texto = document.querySelector("#txtEncriptador").value;
        var nPalabra = "";
        for (let index = 0; index < texto.length; index++) {
            switch (texto[index]) {
                case 'e':
                    nPalabra += "enter";
                    break;
                case 'i':
                    nPalabra += "imes";
                    break;
                case 'a':
                    nPalabra += "ai";
                    break;
                case 'o':
                    nPalabra += 'ober';
                    break;
                case 'u':
                    nPalabra += "ufat";
                    break;
                default:
                    nPalabra += texto[index];
                    break;
            }
        }
        console.log(nPalabra);
        document.querySelector("#imagenMuñeco").innerHTML = "";
        document.querySelector("#txtIngreseTexto").innerHTML = "";
        document.querySelector("#txtNigunMensaje").innerHTML = nPalabra;
        document.querySelector("#respuestaTextos").style.marginTop = "50px";
        document.querySelector("#txtNigunMensaje").style.fontWeight = "10";
        document.querySelector("#btnCopiar").style.marginTop = "500px";

    });
//+===========================================================================
//Desencripta
//+===========================================================================
document.querySelector("#btnDesencriptar").addEventListener("click",
    function () {
        var texto = document.querySelector("#txtEncriptador").value;
        var nPalabra = "";
        for (let index = 0; index < texto.length; index++) {
            switch (texto[index]) {
                case 'e':
                    index += 4;
                    nPalabra += "e";
                    break;
                case 'i':
                    index += 3
                    nPalabra += "i";
                    break;
                case 'a':
                    index += 1;
                    nPalabra += "a";
                    break;
                case 'o':
                    index += 3;
                    nPalabra += 'o';
                    break;
                case 'u':
                    index += 3;
                    nPalabra += "u";
                    break;
                default:
                    nPalabra += texto[index];
                    break;
            }
        }
        console.log(nPalabra);
        document.querySelector("#txtEncriptador").value = nPalabra;
    });
//+===========================================================================
//Copiar al portapa
//+===========================================================================
document.querySelector("#btnCopiar").addEventListener("click",
    function () {
        var texto = document.querySelector("#txtEncriptador").value;
        navigator.clipboard.writeText(texto);

    });
