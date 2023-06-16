const desc = document.querySelector('#descricao');
console.log(desc);

desc.addEventListener("keypress", function(e){
    const inputlength = desc.value.length;
    const Maxcat = 20;
    if(inputlength >= Maxcat){
        e.preventDefault();
    }
})