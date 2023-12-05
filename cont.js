/* 
some functionality will be here
*/
function myNew(cons) {
  const obj = {};
  Object.setPrototypeOf(obj, cons.prototype);
  const argArray = Array.from(arguments);
  cons.apply(obj, argArray.slice(1));
  return obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.details = function () {
    return `My name is ${this.name} and I am ${this.age} years old`;
  };
}

function Teacher(name, department, awardNum) {
  this.name = name;
  this.department = department;
  this.awardNum = awardNum;
  this.details = function () {
    return `Teacher: ${this.name} \nFrom: ${this.department} department \nAward received: ${this.awardNum}`;
  };
}

function Car(name, modle, wheel, seats, fuel) {
  this.name = name;
  this.modle = modle;
  this.wheel = wheel;
  this.seats = seats;
  this.fuel = fuel;
  this.details = function () {
    return `Car name: ${this.name}. modle: ${this.modle}. Numbers of wheels: ${this.wheel}. Number of seats: ${this.seats}. Fuel type: ${this.fuel}`;
  };
}

const p1 = myNew(Person, "Al Amin", 37);
console.log(p1.details());

const t1 = myNew(Teacher, "Atiar Rahman", "Science", 3);
console.log(t1.details());
