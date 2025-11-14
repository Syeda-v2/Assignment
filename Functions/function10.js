function double(x){
    return x*2;
}
function square(y){
    return y*y;
}

function compose(fn1,fn2){
    return function(z){
        return fn2(fn1(z));
    }
}
console.log(compose(double,square)(3));