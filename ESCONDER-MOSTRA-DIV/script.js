
var botao = document.getElementById('action-btm');

botao.addEventListener('click', function() {
    var container = document.getElementById('container');

    if(container.style.display === "none"){
        container.style.display = "block";
    }else{
        container.style.display = "none"
    }
});

// escondendo a div com classlist
// esta e uma forma mais segura de se esconder a div
var botaoB = document.getElementById('action-btm-b');

botaoB.addEventListener('click', function() {
    var containerB = document.getElementById('container-b');

    containerB.classList.toggle('hilden');
})