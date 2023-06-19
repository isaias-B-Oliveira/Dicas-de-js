
const btn = document.querySelector('#send');

btn.addEventListener('ckick', function(e){
    e.preventDefault();

    const name = document.querySelector('#nome');
    const value = name.value;

    console.log(value);
});