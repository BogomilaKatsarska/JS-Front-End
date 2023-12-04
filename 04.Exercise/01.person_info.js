function personInfo(firstName, lastName, age){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}


function createObject(firstName, lastName, age){
    return{
        firstName,
        lastName,
        age,
    };
}

const createObject2 = (firstName, lastName, age) => ({
    firstName,
    lastName,
    age,
});

console.log(createObject('Peter', 'Pan', 20));

const person1 = {
    name: 'Antoniya',
    sayHello: function(){
        console.log('Hello students!')
    },
};
