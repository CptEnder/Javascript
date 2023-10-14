// Ctrl + L to clear browser's console

let name='Paul';  // string literal
let number = 22.1; // number literal
let isTrue = true; //boolean literal
let lastName = undefined;
typeof lastName  // undefined type
let color = null; 
typeof color // object type

const a = 3;
console.log(name);
console.log(a);

// Object Literal
let person = {name: name, age: number};
// Access an object's variables
person.name = 'Giannis';
person['age'] = 23;
console.log(person);

// Array Literal
let selections = ['red','blue'];
selections[4] = 1;
console.log(selections);

// Function Literal
function greet(aPerson){
    console.log('Hello '+aPerson.name)
}

greet(person);