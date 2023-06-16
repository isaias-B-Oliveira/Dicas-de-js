// Destruturing com Arrays:
let arr = [1, 2, 3, 4, 5];
let [num1, num2, num3, num4, num5] = arr;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

// com objetos :
const pessoa = {
    nome: 'João',
    idade: 25,
    profissao:'progrmador'
}
let {nome: nomevar, idade: idadevar, profissao: profissaovar } = pessoa;
console.log(nomevar);
console.log(idadevar);
console.log(profissaovar);

// com funcoens:
function Teste() {
    return ['test', 45];
}

let [varA, varB] = Teste();
console.log(varA);
console.log(varB);

// ignorando um elemento:
let arrDois = [5, 10, 15];
//para ignorar um elemento basta colocar uma virgula en seu lugar;
const [,dez,quinze] = arrDois;

console.log(dez);
console.log(quinze);

// com strings;
let novastring = 'Laranja';
const [z,x,y] = novastring;
console.log(z);
console.log(x);
console.log(y);

// resto opereto;
let numero2 = [1,2,3,4,5,6,7,8,9];
const [um, ...resto] = numero2;
console.log(um);
console.log(resto);

//tomar cuidado;
let obj2 = {
    x: 1,
    z: 2
}
let p,q;
//se inisiamos com chaves,
//temos que envouver a desestruturacao entre colchetes:
({x: p, z: q} = obj2);
console.log(p, q);