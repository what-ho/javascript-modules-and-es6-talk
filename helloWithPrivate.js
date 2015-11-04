"format es6";

class Hello {
    constructor(name) {
        this.name = name;

        var privateString = "Hello ";

        this.getPrivateString = function() {
            return privateString;
        }
    }

    hello() {
        return this.getPrivateString() + this.name + "!";
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