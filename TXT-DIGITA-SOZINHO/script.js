
const elemento =document.querySelector('#text');
const texto = 'javascript e uma linguagen de programação !!!';
const intervalo = 200;

function Showtext(elemento, texto, intervalo) {
    const char = texto.split("").reverse();

    const type = setInterval(() => {
        if(!char.length) {
            return clearInterval(type);
        }

        const next = char.pop();

        elemento.innerHTML += next;

    }, intervalo);

}
Showtext(elemento, texto, intervalo);