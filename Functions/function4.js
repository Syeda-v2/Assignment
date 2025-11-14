// write a function that adds from two invocations
// addf(3)(4)  // 7

function addf(p){
    return function(q){
        return p+q;
    }
}
console.log(addf(2)(3));