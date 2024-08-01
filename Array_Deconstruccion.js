// La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Propuesta de etapa 4 (terminada)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

//NO BORRAR
//to get values
for (let value of Object.values(Entrantes)) {
    alert(value);
}
//Output: 1, 2, 3

//to get keys
for (let key of Object.keys(Entrantes)) {
    alert(key);
}
//Output: one, two, three

// Iteración de un objeto
for (const [key, value] of Object.entries(Entrantes)) {
  console.log(`${key}: ${value}`);}

// Devuelve arreglo propiedades Keys, values
const object1 = {
a: 'somestring',
b: 42,
c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
