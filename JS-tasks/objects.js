function createPerson(name,initialAge){
    let age = initialAge;

    return{
        name,
        get personAge(){
            return age;
        },
        set personAge(newAge){
            if(typeof newAge == Number && newAge>0 && newAge<100){
                age = newAge;
            }else{
                console.log("cannot update");
            }

        }
    };
}

const person3 = new createPerson('john',45);
person3.personAge = 101;
console.log(person3.personAge);
person3.age = 200;
console.log(person3.personAge);


// //using getters and setters

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
person1.age=200;
console.log(person1);



//using Object.defineProperty

const person2 = {
    name:"john"
};
let _age = 45;

Object.defineProperty(person2,"age",{
    get: function(){
        return _age;
    },
    set : function(value){
        if(value<100){
            _age=value;
        }else{
            console.log("cannot update");
        }
    },
    enumerable:true,
    configurable:true

});

console.log(person2.age);
person2.age=20;
console.log(person2.age);
person2.age=150;
console.log(person2.age);
console.log(person2);

