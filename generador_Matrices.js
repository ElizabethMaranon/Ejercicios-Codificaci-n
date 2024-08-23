// Guía explicativa
// https://github.com/ElizabethMaranon/Ejercicios_Codificacion/wiki/generador_Matrices

class matrizPopper {
  constructor(matriz) {
    this.matriz = matriz;
    this.atBeginning = true;
  }

  alternarPopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.matriz.pop() : this.matriz.shift();
  }
}

// const ap = new matrizPopper([1, 2, 3, 4, 5]);
const ap = new matrizPopper([
    "Mielma",
    "Developer",
    "Full Stack",
    "Eli",
    "Marañón"
  ]);
console.log(ap.alternarPopper()); //?
console.log(ap.alternarPopper()); //?
console.log(ap.alternarPopper()); //?
console.log(ap.alternarPopper()); //?
console.log(ap.alternarPopper()); //?
console.log(ap.alternarPopper()); //?