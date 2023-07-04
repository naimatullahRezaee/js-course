// we have two kinds of datatypes:
// 1- primitive types:
// string, number, boolean,undefined,null
// 2 - Reference types:
// object, array,function

// Reference types:

// Array :

// let numbers = [1, 2, 3, 4, 5, "karim", true];
// console.log(numbers);

// Object :

// const person = {
//   name: "Ali",
//   age: 32,
//   gender: "Female",
//   address: {
//     country: "Afghanistan",
//     city: "Kabul",
//   },
//   hobbies: ["Learning", "Coding", "watching movies"],
// };

// person.email = "ali@gmail.com";
// console.log(person.address.city);
// console.log(person);

// function

// function sayhello(name) {
//   console.log("hello my name is " + name);
// }

// sayhello("karim");

// function square(number) {
//   return number * number;
// }

// console.log(square(2));

// let num1 = 3;
// let num2 = 4;

// result = num1 + num2;

// console.log(result);

let firstName = "Ali";
let lastName = "karimi";
let age = 20;
let job = "Web developer";

result = `Hello my name is ${firstName} ${lastName} and ${age} years old and i work as a ${job}`;

console.log(result);
