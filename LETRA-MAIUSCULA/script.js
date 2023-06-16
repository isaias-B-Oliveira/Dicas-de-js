const texto = "CONVERTER A PRIMEIRA LETRA PARA MAIUSCULA";
const texto2 = "agora converta esse";
const texto3 = "CONVERTER com CaraCteres MisTUrados";

function captalizarPletra(str) {
    const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });

    return subst;
};


console.log(captalizarPletra(texto));
console.log(captalizarPletra(texto2));
console.log(captalizarPletra(texto3));