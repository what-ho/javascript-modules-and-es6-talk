//Generator example:

function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
}


1) function program flow pauses at yield "foo", returns foo
2) next time function is invoked, input parameter passed into yield expression,
   so foo('7') makes x resolve to x = (1 + 7) = 8;
3) function program flow continues

