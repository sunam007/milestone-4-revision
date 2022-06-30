/* // object properties are separated by commas (,);
let allLaptops = [
  {
    name: "Lenovo",
    price: 50000,
    processor: "i5",
    storage: 512,
    ram: 8,
    display: "FHD",
  },
  {
    name: "HP",
    price: 43000,
    processor: "i3",
    storage: 512,
    ram: 4,
    display: "HD",
  },
  {
    name: "Dell",
    price: 65000,
    processor: "i7",
    storage: 256,
    ram: 8,
    display: "FHD",
  },
  {
    name: "Walton",
    price: 37000,
    processor: "Core2duo",
    storage: 300,
    ram: 2,
    display: "HD",
  },
];

let cheapest = allLaptops[0];

for (const laptop of allLaptops) {
  //   console.log(laptop);
  if (laptop.price < cheapest.price) {
    cheapest = laptop;
  }
}

console.log(cheapest); */

/* Object.assign(targetObjectName, {property1:"something", property2: something}) // this function is used to change or add new property  or both

let person = { name: "Sunam" };
console.log(person);
// Object.assign(person, { name: "Jui", age: 23, sex: "F" });
// console.log(person);

// using spread operator
const newPerson = { ...person, ...{ name: "John", age: 29 } };
console.log(newPerson); */

// change any one of the properties of an object conataining 3 property;

const person = { name: "Fahima Khan", age: 23, sex: "F" };
console.log(person);
person.name = "Jui";
console.log("***********after modification************");
console.log(person);

const objAsArr = Object.entries(person);
console.log(objAsArr);
