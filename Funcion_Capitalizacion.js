const mayus = str => {
    const palabras = str.split(" ");
    return palabras.map(palabra => palabra[0].toUpperCase() + palabra.slice(1)).join(" ");
}

const frase = 'hola soy mielma'
const fraseRara = 'the quick brown fox jumped over the lazy dog'
console.log(mayus(frase));

