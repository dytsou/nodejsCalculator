class Calculator{
    constructor(){

    }
    add(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }
    mul(a,b){
        return a*b;
    }
    div(a, b) {
        if( b == 0) {
            throw Error("Cannot be zero!");
        }
        return a / b;
    }
}



module.exports = Calculator;