const Calculator = require("./calculator");
const assert = require("assert");

const cal = new Calculator();
//console.log(cal.mul(5,8));

function test_add() {

    for (let i = 0; i < 100; i++) {
        const a = Math.random();
        const b = Math.random();

        assert.strictEqual(cal.add(a, b), a + b);
    }

    console.log("ADD PASS!!!!");
}

function test_sub() {

    for (let i = 0; i < 100; i++) {
        const a = Math.random();
        const b = Math.random();

        assert.strictEqual(cal.sub(a, b), a - b);
    }

    console.log("SUB PASS!!!!");

}

function test_mul() {

    for (let i = 0; i < 100; i++) {
        const a = Math.random();
        const b = Math.random();

        assert.strictEqual(cal.mul(a, b), a * b);
    }

    console.log("MUL PASS!!!!");

}

function test_div() {

    for (let i = 0; i < 100; i++) {
        const a = Math.random();
        const b = Math.random();

        assert.strictEqual(cal.div(a, b), a / b);

        assert.throws(() => {//to test exceptions
            cal.div(a, 0);
        });
    }

    console.log("DIV PASS!!!!");

}


function test_main() {
    test_add();
    test_sub();
    test_mul();
    test_div();
    console.log("ALL PASS!!!!");
}

test_main();