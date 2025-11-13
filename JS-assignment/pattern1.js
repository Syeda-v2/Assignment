function pyramidOne(n){
    let count = 1;
    for(let i=1; i<=n; i++){
        let str = '';

        for(let s=1; s<=n-i; s++){
            str += ' ';
        }

        for(let j=1; j<=i; j++){
            str += count + ' ';
        }

        console.log(str);
    }
}
pyramidOne(5);