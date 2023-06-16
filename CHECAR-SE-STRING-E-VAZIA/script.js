

const str1 = "nao esta vazia";
const str2 = "";

console.log(str1);
console.log(str2);

if(str1 == "") {
    console.log("esta string esta vazia" + str1);
} 

if(str2 == "") {
    console.log("esta string esta vazia" + str2);
}


// com operador not ! 
if(str1) {
    console.log("imprimir str1");
} 
if(str2){
    console.log("imptimir str2");
}
