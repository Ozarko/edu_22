// - let/cons/

const myName = "Max";
console.log(myName);

//myName = 'Oksana'

let newName = "Andriy";

console.log(newName);

newName = "Nazar";

console.log(newName);

// functions

function printMyName(name) {
  console.log(name);
}

printMyName("Naz");

const printWord = (word) => {
  console.log(word);
};

printWord("Naz");

const printNameAndAge = (name, age) => {
  console.log(name + " " + age);
};

printNameAndAge("Nazar", 28);

const multiply = (number) => number * 2;

console.log(multiply(42));

// Classes

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  myName = "Naz";
  
  printMyName = () => {
    console.log(myName);
  }
}

const person = new Person();

person.printMyName();
person.printGender();

// Spread & Rest Operators

const numbers = [1,2,3]

const newNumber = [...numbers, 4]

console.log(newNumber)

const nazar = {
  name: 'Naz'
}

const newNazar = {
  ...nazar,
  age: 28,
};

console.log(newNazar);

const filter = (...args) => {
  return args.filter(item => item === 1)
} 

console.log(filter( '','2132', 1, 2))

// Destructuring

const nums = [1,2,3,4]

[num1, num2] = numbers

console.log(num1, num2)
