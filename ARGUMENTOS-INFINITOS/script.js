// criar funcao com argumentos infinitos 
function somaInfinita() {

    console.log(arguments);// objeto com todos argumentos

    var args = [].slice.call(arguments, 0); // transforma os argumentos en array

    console.log(args);
    var some = 0;

    for(var i = 0; i< args.length; i++) {
        some += args[i];
    }
    return some;
}
var soma1 = somaInfinita(1, 2, 3, 4, 5); // todos os numeros serao somados // 15
var soma2 = somaInfinita(5, 2,123, 4, 155);// 289
var soma3 = somaInfinita(5, 2,22, 24, 155);// 208
var soma4 = somaInfinita(5, 2);      // 7

console.log(soma1);
console.log(soma2);
console.log(soma3);
console.log(soma4);
