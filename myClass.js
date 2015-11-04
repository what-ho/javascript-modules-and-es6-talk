export { create }

function create() {
    return new MyClass();
}

class MyClass {

    constructor() {
        this.count = 0;
        this.arr = ['a','b','c'];
    }

    iterate() {
        this.arr.forEach(this.incrementCount.bind(this));
    }

    incrementCount() {
        this.count ++;
    }
}
