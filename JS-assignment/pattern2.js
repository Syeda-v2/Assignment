function pattern2(n){
    
    for(let row=1; row<=n; row++){
        let str = '';

        str += ' '.repeat(n-row);

        for(let i=row; i<2*row; i++){
            str += i;
        }
        for(let j=2*row-2; j>=row; j--){
            str += j;
        }
        console.log(str);
    }
}
pattern2(5);


/*  1
   232
  34543
 4567654
567898765  */