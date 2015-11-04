"format es6";

class Hello {
    constructor(name) {
        this.name = name;
    }

    hello() {
        return "Hello " + this.name + "!";
    }
}

class HelloWorld extends Hello {
    constructor() {
        super("World");
    }

    echo() {
        alert(super.hello());
    }
}

var hw = new HelloWorld();
hw.echo();