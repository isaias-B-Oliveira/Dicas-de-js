
let a = 5;
let b = 10;

let c = (nun1, num2) => nun1 + num2;
console.log(c(a,b));  //15

let d = (x, y) => {
    let op;

    if(x < y){
        op = x * y;
    }else{
        op = x / y;
    }
    return op;
}
console.log(d(a, b)); //50

//com um argumento
let frase = "estudando carreaira front end"

let fraseArray = (frase) => frase.split(' ');
console.log(fraseArray(frase)); //['estudando', 'carreaira', 'front', 'end']

//sem argumento
let semarg = () => console.log("Nao tem argumento")
semarg();

//casos de uso
let roupas = [
    {produto: 'camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'calssa', preco: 45, cor: 'Azul'},
    {produto: 'bermuta', preco: 65, cor: 'vermelho'},
    {produto: 'camiseta', preco: 15, cor: 'verde'},
    {produto: 'shorts', preco: 65, cor: 'preto'},
];

let precoMaiorQue50 = roupas.filter((produto) => {
    return produto.preco >= 50;
});
console.log(precoMaiorQue50);


