function pyramidOne(n){
    let count = 1;
    for(let i=1; i<=n; i++){
        let str = '';

        str += ' '.repeat(n-i);

        for(let j=1; j<=i; j++){
            str += count + ' ';
        }

        console.log(str);
    }
}
pyramidOne(5);

/*  1 
   1 1 
  1 1 1 
 1 1 1 1 
1 1 1 1 1  */