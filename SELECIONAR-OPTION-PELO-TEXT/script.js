
var texto = "ferrari";
var select = document.querySelector('#marcas');

for(var i = 0; i< select.options.length; i++){

    if(select.options[i].text === texto){
        select.selectedIndex = i;
        break;
    }

};
