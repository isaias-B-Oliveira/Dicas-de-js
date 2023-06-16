//includes => verifica se tem um elemento no array:
//indesOf  => mostra o indice do elemento 
let nomes = ['jose', 'isaias', 'bezerra'];
console.log(nomes.includes('isaias'));  //true

if(nomes.includes('isaias')) {
    console.log('sim tem esse elemento');
    console.log(nomes.indexOf('isaias')); // mostra o index do elemento no array; [1]
}