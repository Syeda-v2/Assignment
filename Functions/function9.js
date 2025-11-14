function twice(applyf){
    return function(a){
        return applyf(a,a);
    }
}
var double = twice(add);
console.log(double(11));

var square = twice(mul);
console.log(square(11));