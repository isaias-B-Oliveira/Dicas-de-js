//selecionar o elemento 
var box = document.getElementById('box');
console.log(box);

//mostra as cordenadas e posisoens do elemento;
var cordenadas = box.getBoundingClientRect();
console.log(cordenadas);

if(cordenadas.x === 25) {
    alert('chegou no 25!');
}