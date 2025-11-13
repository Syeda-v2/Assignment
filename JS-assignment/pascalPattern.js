function pascelTriangle(n){
    for(let i=1; i<=n; i++){
        let c=1;
        let str = '';

        for(let j=1; j<=i; j++){
            str += c + ' ';

            c = Math.floor(c * (i-j) /j);
        }
        console.log(str);
    }
}

pascelTriangle(5);