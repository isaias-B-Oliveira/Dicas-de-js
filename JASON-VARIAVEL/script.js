var json = '{"nome":"isaias", "idade":27, "provisao": "programador"}';

console.log(json);
console.log(typeof json);

//JSON
var obj = JSON.parse(json);

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj["idade"]);


// obj para json
var objparajson = JSON.stringify(obj);

console.log(objparajson);