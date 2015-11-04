import * as console from './console.js'

class Hello {
    constructor(name) {
        this.name = name;
    }

    hello() {
        return Hello.helloString() + this.name + "!";
    }

    static helloString() {
        return "Hello ";
    }
}

class HelloWorld extends Hello {
    constructor() {
        super("World");
    }

    echo() {
        //Call parent *instance* method
        console.log(super.hello());

        //Call base class method directly
        console.log(Hello.helloString());

        //Call inherited static *class* method
        console.log(HelloWorld.helloString());

        //Call our static method via instance
        this.constructor.test();
    }


    static test() {
        //Call parent static method from our static method
        console.log(super.helloString());
    }

}

var hw = new HelloWorld();
hw.echo();