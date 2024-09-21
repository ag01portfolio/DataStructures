class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index) {
    const item = this.data[index];

    this.shiftItems(index);

    return item;
  }
  insert(index, item) {
    if (index < 0 && index > this.length) {
      if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

newArray.push("Yoo..");
newArray.push("Abhi");
