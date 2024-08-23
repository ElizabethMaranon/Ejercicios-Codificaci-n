class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    this.atBeginning = true;
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.arr.pop() : this.arr.shift();
  }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?