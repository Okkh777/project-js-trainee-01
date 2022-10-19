// DATA TYPES Primitives

// String
const greetings = "Hello World";

console.log('Primitives');
console.log(typeof greetings);

// Number
const num = 100;
console.log(typeof num);

// Boolean
const boolTrue = true;
const boolFalse = false;
console.log(typeof boolTrue);

//Null
const someNullValue = null;
console.log(someNullValue);

//undefined
const someUndefinedValue = undefined;
console.log(someUndefinedValue);


// Big Int
const bigInt = 7777777777777755555557777n;
console.log(typeof bigInt);
console.log(bigInt);

//Symbol
const user = {
    id: 10,
    age: 20,
    height: 170,
};
const id = Symbol("some symbol");
user[id] = 500;
console.log(user);

// object
const obj = {
    name: 'Oksana',
    age: '31',
    gender: 'female'
}; 
console.log(obj);