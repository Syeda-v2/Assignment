function pascelTriangle(n){
    let str = '';
    for(let i=1; i<=n; i++){
        let c=1;
        for(let j=1; j<=i; j++){
            str += c + ' ';

            c = Math.floor(c * (i-j) /j);
        }
        str = str.trimEnd();
        if(i<n){
            str+="\n";
        }
    }
    return str;
}

console.log(pascelTriangle(3));
module.exports = pascelTriangle;

