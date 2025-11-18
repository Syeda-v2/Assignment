function Stack(){
    let employee = [];

    function push(ele){
        employee.push(ele);
        return employee;
    }
    function pop(){
        if(employee.length===0){
            console.log("stack is empty");
        }else{
            employee.pop();
            return employee;
        }
    }
    function isEmpty(){
        if(employee.length===0){
            return true;
        }else{
            return false;
        }
    }
    return{
       push,
       pop,
       isEmpty
    };
}
const stack = Stack();
console.log(stack.push("john"));
console.log(stack.push("aimen"));
console.log(stack.pop());
console.log(stack.isEmpty());






