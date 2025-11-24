function pattern2(n){
    let str = '';
    for(let row=1; row<=n; row++){
        str += ' '.repeat(n-row);

        for(let i=row; i<2*row; i++){
            str += i;
        }
        for(let j=2*row-2; j>=row; j--){
            str += j;
        }
        str = str.trimEnd();
        if(row<n){
            str+="\n";
        }
    }
    return str;
}
console.log(pattern2(3));
module.exports = pattern2;


