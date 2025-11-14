// without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function
// inc(5) //6
// inc(inc(5)) //7

//using Function Constructor
const inc1 = new Function("x,y", "return x+y");    
console.log(inc1(2,2));

//using bind 
const inc2 = ((x,y) => x+y).bind(null);
console.log(inc2(2,2));

//using eval
eval("var inc3 = (x,y) => x +y");
console.log(inc3(5,5));