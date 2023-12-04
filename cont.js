/* 
some functionality will be here
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.details = function () {
    return `My name is ${this.name} and I am ${this.age} years old`;
  };
}
function myNew(cons) {
  const obj = {};
  Object.setPrototypeOf(obj, cons.prototype);
  const argArray = Array.from(arguments);
  cons.apply(obj, argArray.slice(1));
  return obj;
}

const p1 = myNew(Person, "Al Amin", 37);
console.log(p1.details());
