// Write a function that takes an argument and returns a function that returns that argument.
// idf = identityf(3);
// idf() // return 3

function identifyf(i){
    return function(){
        return i;
    }
}
let idf = identifyf(3);
console.log(idf());