// pop => remove o ultimo elemento do array:
let arr = [1,2,3,4,5];
let remover = arr.pop();

console.log(remover); // 5

// shift => remove o do começo do array:
let nomes = ['isaias', 'oliveira', 'matheus'];
let nome = nomes.shift();
console.log(nome); // isaias
console.log(nomes); // oliveira , matheus

// splice => remove pelo indice do elemento;
let nunbes = [1,2,3,4,5];
let nunbe =nunbes.splice(2,1);//2= indice do elemento que sera removido 1=quantidade que sera removido;
console.log(nunbes); // [1,2,4,5] retorno dos elementos que nao foram removidos
console.log(nunbe); // [2] o elemento que foi removido no caso o 3
