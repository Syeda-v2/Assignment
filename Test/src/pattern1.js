function spaces(count){
        return ' '.repeat(count);
    }
    function numbers(count){
        return "1 ".repeat(count);
    }
function pyramidOne(n){
    let result = [];
    for(let i=1; i<=n; i++){
        const spacesPart = spaces(n-i);
        const num = numbers(i);
        result.push(spacesPart + num);
    }

    return result.join("\n");
}
module.exports = {pyramidOne,spaces,numbers};



