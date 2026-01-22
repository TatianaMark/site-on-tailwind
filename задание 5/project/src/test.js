let cat = {
    name: 'Murka',
    age: 5,
    color: 'gray',
}

let dog = {
    name: 'Sharik',
    age: 3,
    color: 'orange',
}

let rat = {
    name: 'Larisa',
    age: 1,
    color: 'white',
}



function callPet(pet) {
    return console.log(`Hello, my name is ${pat.name}, I am ${pat.age}, my color is ${pat.color}.`);
}

[cat, dog, rat].forEach((pet) => callPet(pet));

