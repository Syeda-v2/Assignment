function pyramidOne(n){
    let count = 1;
    let str = '';
    
    for(let i=1; i<=n; i++){
       str += ' '.repeat(n-i);

        for(let j=1; j<=i; j++){
            str += count + ' ';
        }
        str = str.trimEnd();
        
        if(i<n){
            str+="\n";
        }

    }
    return str;
}
console.log(pyramidOne(5));
module.exports = pyramidOne;