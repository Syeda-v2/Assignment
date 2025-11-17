class Stack{
    constructor(){
        this.employee=[];
    }
    push(ele){
        this.employee.push(ele);
    }
    pop(){
        if(this.employee.length === 0){
            console.log("stack is empty");
        }
        return this.employee.pop();
    }
    print(){
        console.log(this.employee);
    }
}
const stack = new Stack();
stack.push("john");
stack.push("smith");
stack.pop();
stack.print();

