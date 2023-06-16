//removendo espaços desnessesario:
var string = "esta esting  tem    alguns espaços  vazios";
console.log(string);  


//espressao logica para remover espaços vozios de strig:
console.log(string.replace(/( )+/g, " "));


//se quisermos usa en outros lugares podemos usar uma funcao:
function remmoveEspaçoDuplicado(string){
    return string.replace(/( )+/g, " ");
}

console.log(remmoveEspaçoDuplicado("ola       mundo"));
console.log(remmoveEspaçoDuplicado("usando    numa  funcao"));