'use strict';

///////////////////////////////////////////////
// Constructor Function
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const muhammed = new Person('Muhammed', 2000);
console.log(muhammed);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const ahmed = new Person('Ahmed', 1990);
*/

///////////////////////////////////////////////
// Challenge #1
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();
*/

///////////////////////////////////////////////
// ES6 Classes
/*
// class expression
  // const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const yousef = new PersonCl('Yousef', 1996);

console.log(yousef);
yousef.calcAge();

console.log(yousef.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

yousef.greet();

// 1. Classes are NOT hoisted.
// 2. Class are first-class citizens.
// 3. Classes are excuted in strict mode.

*/
console.log('hello');
console.log('hello');
asdfasdf;
asdfasdfasdf;
asdf;

///////////////////////////////////////////////
// Getters & Setters
/*
const account = {
  owner: 'Muhammed',
  movements: [200, 300, 700, 220],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

*/

// Getters & Setters in ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const yousef = new PersonCl('Yousef Ahmed', 1996);
console.log(yousef.age);
console.log(yousef);

const ibrahim = new PersonCl('Ibrahim Khaled', 2000);
console.log(ibrahim);
*/

////////////////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
};

const hesham = Object.create(PersonProto);
console.log(hesham);
hesham.name = 'Hesham';
hesham.birthYear = 2002;
hesham.calcAge();
