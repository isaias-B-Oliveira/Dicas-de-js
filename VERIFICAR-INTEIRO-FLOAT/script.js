// int ou folat
var a = 10; // nunber
var b = 1.5; // nunber

console.log(typeof a);
console.log(typeof b);

// % => resto;
function ChecFloat(nun) {
    console.log(nun);
  if(nun % 1 === 0){
     console.log("e un numero inteiro");
  }else{
     console.log("e un numero float");
  }
};
ChecFloat(a);
ChecFloat(b);

//isInteger
if(Number.isInteger(a, b)) {
    console.log("e un inteiro")
}else{
    console.log("e um float")
};