function add(a,b){
    return a+b;
}
function methodize(binaryFn){
    return function(y){
        return binaryFn(this,y);
    }
}
Number.prototype.add = methodize(add);
console.log((3).add(4));