function spaces(count){
    return ' '.repeat(count);
}
function numbers(row){
    let inc = [];
    let num = row;
    for(let i=0; i<row; i++){
        inc.push(num);
        num++;
    }
    let dec = inc.slice(0,-1).reverse();
    return inc.concat(dec).join("");
}
let result = [];
function pattern2(n){
    let result = [];
    for(let i=1; i<=n; i++){
        let spacesPart = spaces(n-i);
        if(i==1){
            result.push(spacesPart+i)
        }else{
            result.push(spacesPart+numbers(i))
        }
    }
    return result.join("\n");
}
module.exports = {pattern2,numbers,spaces};
