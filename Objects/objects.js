//using Javascript proxy

const person = {
    name:"john",
    age:50
}
const prox = new Proxy(person,{
    set(target,prop,value){
        if(prop == 'age' && value >100){
            console.log("cannot update");
            return false;
        }
        target[prop]=value;
        return true;
    }
})
prox.age=90;
console.log(person);

//using getters and setters

const person1={
    name:"john",
    age:45,

    get personAge(){
    return this.age;
    },
    set personAge(newAge){
        if(newAge>100){
            console.log("can't update, because age is greater then 100");
        }else{
            this.age = newAge;
        }
    }
};
person1.personAge=101;
console.log(person1);

