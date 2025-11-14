// write a function that takes a function and an argument, and returns a function that cans supply a second argument
// add3 = curry(add, 3)
// add3(4) // return 7
// curry(mul, 3)(4) // 12

function add(a,b){
    return a+b;
}

function mul(x,y){
    return x*y;
}

function curry(fn,x){
    return function(y){
        return fn(x,y);
    }
}
let add3 = curry(add,3);
console.log(add3(4));
console.log(curry(mul,3)(4));