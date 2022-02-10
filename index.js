// NUMBERS

// const num = 10;
// console.log(num + num, "number");

// console.log(typeof num);

// console.log(Math.random());
// console.log(Math.PI);

// // to convert string into numbers or use + (plus sign)
// console.log(parseInt("20") + num);
// console.log(+"12");

// // it will give us an error Nan (not a number)
// console.log(parseInt("hello"));

// // strings (sequences of unicode characters);

// console.log("welcome to pakisatan");
// console.log("super".length);

// // to find index of string
// console.log("Bilal".charAt(0));

// // concate strings
// console.log("hello" + "  " + "welcome" + "Pakisatn");

// console.log("welcome to pakistan".toUpperCase());
// console.log("hello".toUpperCase());

// //  ++++++++++++++++++++++++++ Working with booleans

// var shouldbeTrue = true;
// console.log(shouldbeTrue === true);

// if (shouldbeTrue === false) {
//   console.log("True");
// } else {
//   console.log("false");
// }

// var hasContent = "";

// console.log(Boolean(hasContent));

//  ++++++++++++++++++++++++++ Working with Objects

// Collections of key- value pairs

// var myName = { 1: "Bilal", 2: "usman", 3: "ahsan", 4: "ali" };
// console.log(myName);

// var data = {
//   firstname: "Muhammad",
//   lastname: "Bilal",
//   age: 23,
//   phone: 555 - 555 - 555,
//   numbers: {
//     phone: 5555,
//     ptcl: 2120,
//     landline: 02 - 9123,
//   },
//   sayHi: function () {
//     console.log("Hello");
//   },
// };

// console.log(data);

// // Constructor pattern for creating objects

// function DounutConstructor(type, glazed, sweetness, hasChoclate) {
//   this.type = type;
//   this.glazed = glazed;
//   this.sweetness = sweetness;
//   this.hasChoclate = hasChoclate;
// }

// var coconutDounut = new DounutConstructor("coconut", false, 10, true);
// var vanillaDounut = new DounutConstructor("vanilla", true, 20, false);

// console.log(coconutDounut);
// console.log(vanillaDounut);

// Arrays
// Collection of data

// var myArr = [1, 2, 3, "Muhammad", "Bilal"];
// console.log(myArr, "ARRRRRRRRRR");
// console.log(myArr.length, "LENGTH");

// var nameArr = ["Bilal", "hamza", "sami"];
// nameArr.push("Waldo");
// console.log(nameArr, "arr");
// nameArr.pop();
// console.log(nameArr, "after pop");
// nameArr.push(["skbz", 100, 300, "bilal"]);
// console.log(nameArr[3]);
// console.log(nameArr[3]);

// var numArr = [3, 2, 1];
// var charArr = ["a", "d", "b", "c"];
// console.log(charArr.sort(), "sort");
// console.log(numArr.sort(), "sort");

// console.log(charArr.reverse(), "rev");

// console.log(numArr.concat(charArr, nameArr), "concat");

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var length = arr.length;
// console.log(arr[length - 2], "arrrrrrrrrrrrrrrrrrrrrrr");

// var slicearr = arr.slice(1, 8);
// console.log(slicearr, "sliced arr");
// console.log(arr, "after slice");

// Variables

// var myName = "Muhammad Bilal";
// var num = 21;
// var arr = [1, 2, 3, 4, 5];
// var obj = {
//   name: "Muhammad Bilal",
//   age: 30,
// };
// console.log(myName);
// console.log(num);
// console.log(arr);
// console.log(obj);
// console.log(typeof obj);

// function sayHi() {
//   console.log("hI" + myName);
// }

// sayHi();

// var count = 1;
// function increment() {
//   count += 1;
//   console.log(count);
// }

// increment();
// increment();
// increment();

// Working with Let and Const

// function sayHi() {
//   let sayHi = true;
//   let isLoading = true;

//   // let and const scope is only inside the block we cannot use it outside the block
//   // if we console.log myName outside the if -statement it throw an error
//   if (sayHi === true) {
//     let myName = "Muhammad";

//     if (isLoading) {
//       let myLastName = "Bilal";
//     }
//   }

//   // console.log(myName);
//   console.log(sayHi);
// }

// function sayHiTwo() {
//   let sayHi = false;
//   let isLoading = true;
//   let myName = "butt";

//   // In const if you used the above approach of not defining myName then in the if-statement you defined myName
//   // this is not applicable . This is the major difference between let and const

//   if (sayHi === true) {
//     myName = "Muhammad";
//   } else {
//     myName = "Bilal";
//   }

//   console.log(myName);
// }

// function sayHiThree() {
//   let sayHi = false;
//   let isLoading = true;
//   const myName = "Usman";

//   // In const if you used the above approach of not defining myName then in the if-statement you defined myName
//   // this is not applicable . This is the major difference between let and const

//   if (sayHi === "1") {
//     myName = "Muhammad";
//   } else {
//     myName = "Bilal";
//   }

//   console.log(myName);
// }

// sayHi();
// sayHiTwo();
// // sayHiThree();

// const arr = [1, 2, 3];
// console.log(arr);
// arr.push(4);
// console.log(arr);

// const object = {
//   name: "Muhammad ",
// };
// console.log(object);

// object.name = "Ali";
// console.log(object);

// If Else

// const isLoading = true;

// if (isLoading) {
//   console.log("start loading");
//   // alert("hello");
// }

// const num = 5;
// console.log(typeof num);

// const numone = "5";
// console.log(typeof numone);

// console.log(num + numone);
// // this would give 55 beacse numone is of type string

// const stringConversion = parseInt(numone);
// // this would give 10 beacse numone is converted into number

// console.log(num + stringConversion);

// const myArr = [1, 2, 3];
// const newArr = [1, 2, 3];

// // this will evaluate to false because of their type
// console.log(myArr === newArr);

// const myArrTwo = newArr;
// // This will evaluate to true becase they are referencing the same thing
// console.log(myArrTwo === newArr);

// const balance = 124;
// const itemCost = 123;
// const tax = 0.5;
// const isRunning = false;

// if (balance >= itemCost) {
//   console.log("Balance ok! Checking tax");
//   if (tax >= 0.5) {
//     console.log("Tax amount too highhhhh");
//   }
// }

// if (balance >= itemCost && !isRunning) {
//   console.log("Good to go yeahhh");
// }

// let number;
// console.log(!number, "num");

// Working with functions
// A resuable piece of code to perform some functionality

// const name = "Muhammad";
// const lastname = "Bilal";

// function sayHi(name) {
//   if (!name) {
//     console.log("Please enter a name");
//   } else {
//     console.log("Hi" + " " + name);
//   }
// }

// function sayBye(nam, last) {
//   console.log("Bye" + " " + nam + " " + last);
// }

// sayHi("Bilal");
// sayBye(name, lastname);

// function numDouble(num) {
//   const value = num * 2;
//   return value;
// }

// const valone = numDouble(20);
// const valtwo = numDouble(30);

// console.log(valone, "valone");
// console.log(valtwo, "valtwo");

// function sum(numone, numtwo) {
//   const res = numone + numtwo;
//   return res;
// }

// const sumres = sum(valone, valtwo);
// console.log(sumres, "sum");

// // We can also pass a function in parameters

// const squarednum = function (num) {
//   return num * num;
// };

// const adder = function (squarer, num2) {
//   const squarerd = squarer(10);
//   return squarerd + num2;
// };

// console.log(adder(squarednum, 20));

// // In objects are passed through their values can be changed and same is the case with array

// const data = { name: " Muhamad", age: 30 };

// function obj(objInfo) {
//   const age = (objInfo.age = 100);
//   return age;
// }

// console.log(data, "before");
// // here the age is 30
// console.log(obj(data));
// console.log(data, "after");
// // here the age is 100

// Working with nested functions

// function squreandmult(num1, num2) {
//   function square(num1) {
//     return num1 * num1;
//   }

//   function multbyten(x) {
//     return x * 10;
//   }

//   return square(num1) * multbyten(num2);
// }

// console.log(squreandmult(2, 3));

// function nameFormatter(fname, lname, age) {
//   function concat(arg1, arg2) {
//     const name = arg1 + " " + arg2 + " ";
//     return name;
//   }

//   function dataFormatter(name, num) {
//     const formattedData = {
//       name: name,
//       age: num,
//     };

//     return formattedData;
//   }

//   const nameone = concat(fname, lname);

//   return dataFormatter(nameone, age);
// }

// console.log(nameFormatter("Muhammad", "Bilal", 30));

// Working with Advanced Functions

// var sayHi = () => {
//   console.log("Hello");
// };

// sayHi();

// const mult = (num1, num2) => {
//   return num1 * num2;
// };

// console.log(mult(3, 5));

// const users = [
//   { name: "bilal", age: 40 },
//   { name: "Usman", age: 30 },
//   { name: "Ahsna", age: 50 },
// ];

// const mapFunctions = (arr) => arr.map((item) => item.name);

// console.log(mapFunctions(users));

// const add = (x, y) => x + y;

// console.log(add(4, 5));

// const squrer = (num) => num * num;
// console.log(squrer(10));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evennum = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evennum);

// const doubnum = (num) => {
//   const numConta = [];
//   num.forEach((n) => {
//     const doubled = n * 2;
//     numConta.push(doubled);
//   });

//   return numConta;
// };

// console.log(doubnum(numbers));

// const newMult = (x = 5, y = 10) => {
//   return x * y;
// };

// console.log(newMult());

// const stringsplit = (str) => {
//   return str.split(" ");
// };

// console.log(stringsplit("hi there sir"));

// // const logAllArg = (x, y, z) => {
// //   console.log(arguments[0]);
// // };

// // logAllArg(1, 2, 3);
// function Dog(years, breed) {
//   this.age = years;
//   this.type = breed;
// }

// const spike = new Dog(20, "pol");

// console.log(spike);

// Working with switch statements

// const fruit = "mango";

// const fruitLogger = (fruit) => {
//   switch (fruit) {
//     case "apple":
//       console.log("yes it is apple");
//       break;
//     case "orange":
//       console.log("yes it is orange");
//       break;
//     default:
//       console.log("its is some other fruit");
//   }
// };

// fruitLogger("orange");

// const numCheck = (num) => {
//   let value;

//   switch (num) {
//     case 0:
//     case 1:
//     case 2:
//       value = "Low range";
//       break;

//     case 3:
//     case 4:
//     case 5:
//       value = "Mid range";
//       break;

//     case 6:
//     case 7:
//     case 8:
//       value = "High range";
//       break;

//     default:
//       value = "Please enter value between 0 and 9";
//       break;
//   }
//   setVol(value);

//   console.log("the value is" + value);
// };

// function setVol(n) {
//   console.log("volume set at" + " " + n);
// }

// numCheck(1);

// const dounutPicker = (flav) => {
//   switch (flav) {
//     case "s":
//       return "sprinkles";
//     case "c":
//       return "choclate glazed";
//     case "b":
//       return "bear claw";
//     default:
//       return "did not understand";
//   }
// };

// const dounuts = (selection) => {
//   const selectedDounut = dounutPicker(selection);

//   console.log("You have selected " + selectedDounut);
// };

// dounuts("e");

//  ***************************************Working with loops ***********************

// let num = 0;

// while (num <= 10) {
//   console.log("hello");
//   console.log(num, "num");
//   num += 1;
// }

// const names = ["Joe", "Dan", "Alan"];
// let index = 0;

// while (true) {
//   if (names[index] === "Alan") {
//     console.log(names[index]);

//     break;
//   }
//   console.log(index, "index");
//   index += 1;
// }

// let condition;

// do {
//   const userInput = prompt("Enter q to exit");
//   console.log(userInput, "inpur");

//   if (userInput === "q") {
//     condition = false;
//   } else {
//     condition = true;
//   }
// } while (condition);

//  ***************************************Working with FOR LOOOPS ***********************

// for (let i = 11; i >= 1; i--) {
//   console.log(i);
// }

// const icecreams = ["vanilla", "choclate", "rocky road", "strawberry"];

// function icecreamlopper(arr, t) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === t) {
//       console.log(arr[i], i);
//     }
//   }
// }

// icecreamlopper(icecreams, "strawberry");

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log("even number");
//   } else if (i % 3 == 0) {
//     console.log("divsible by three");
//   } else if (i % 5 == 0) {
//     console.log("divsible by five");
//   } else {
//     console.log(i);
//   }
// }

// setTimeout(() => {
//   console.log("One minute has passed");
// }, 1000);

// For in loops basically used to loop through an objects properties in arbitraroy order

// const data = ["bilal", "dan", "john", "smith", "lawrance"];

// for (const d of data) {
//   console.log(d, "nameeeeeeeeeeeeee");
// }

// console.log(data[1]);

// for (let props in data) {
//   // it will print the keys
//   console.log(props);
// }

// for (let props in data) {
//   // it will print the data
//   console.log(data[props]);
// }

// data.forEach((item) => {
//   console.log(item, "items");
// });

// const names = ["james", "james", "sally", "sally"];

// const uniquenames = new Set(names);

// console.log(uniquenames);

// uniquenames.forEach((item) => {
//   console.log(item);
// });

//  ***************************************Working with DOM ***********************

/* 
 1) Programming interface for HTML and XML documents.
 2) Provides a structure represenetation of the documetn
 3) Defines methods to access the structure and manupulate it 
 4) Connects web pages to scripts or programming languages
 5) DOM is not a programming laguage, it provides a model for a web page
 6) The page content is sotred in the DOM and can be accessed and manipulated in javascript
 7) The DOM provides a representation of the document as a structured group of nodes and objects that have
     properties and methods

*/
const tag = document.getElementsByTagName("p");
console.log(tag[0].innerHTML);
