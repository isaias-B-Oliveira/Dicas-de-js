const brandInput = document.querySelector('#brand');

brandInput.addEventListener('keypress', function(e){
   if(!checkchar(e)) {
     e.preventDefault();
   }
});


function checkchar(e){
    const char = String.fromCharCode(e.keyCode);

    // console.log(char);
    // console.log(e.keyCode);

    const padrao = '[a-zA-Z0-9]';
    if(char.match(padrao)) {
        return true
    }else{
        alert('somente caracteres alfanumericos')
    };
};