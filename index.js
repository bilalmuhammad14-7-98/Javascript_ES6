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

// console.log(document.getElementById("first_text"));
// const text = document.getElementById("firsttext");
// text.innerHTML = "my name is ali";

// const myDiv = document.querySelectorAll(".dummy");

// const myDivSpan = document.querySelectorAll(".dummy span");

// for (const prop of myDiv) {
//   prop.style.color = "purple";
// }

// for (const prop of myDivSpan) {
//   prop.style.color = "yellow";
// }

// const clickDiv = document.getElementById("clicky");

// const button = clickDiv.querySelector("button");

// button.addEventListener("click", logEvent);

// button.addEventListener("focus", logEvent);

// button.addEventListener("focusout", logEvent);

// function logEvent(event) {
//   button.innerText = "Please donot click";

//   button.removeEventListener("click", logEvent);
//   console.log(event.type);
// }

// const bckgrnd = document.getElementById("background");
// bckgrnd.addEventListener("mousedown", switchbckgrnd);
// bckgrnd.addEventListener("focusout", switchbckgrnd);

// function switchbckgrnd(e) {
//   if (e.type === "mousedown") {
//     bckgrnd.classList.add("background-color");
//   } else if (e.type === "focusout") {
//     bckgrnd.classList.toggle("background-color");
//   }
// }

// document.addEventListener("keydown", function (e) {
//   console.log(e.keyCode);
// });

// const divthree = document.getElementById("div3");
// const para = document.querySelector("p");
// const textArea = document.querySelector("textarea");
// const paraText = "user is typing";
// let timer;

// textArea.addEventListener("keydown", addText);
// textArea.addEventListener("keyup", removeText);

// function addText(e) {
//   para.innerText = paraText;
// }

// function removeText(e) {
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     para.innerText = "";
//   }, 3000);
// }

// const mySecondArr = ["Jane Doe", "Sam", "Billy", "marie"];
// let name1, name2, name3;

// [name1, name2, name3, name4 = "default"] = mySecondArr;
// console.log(name4);

// function returnArray(a) {
//   return ["dounuts", "choclate", "vanilla", "gummy bear"];
// }

// const [dounut, choclate, vanilla, gummybear] = returnArray();

// console.log(gummybear);

// function findArr(arr, term) {
//   const result = arr.filter((item) => {
//     return item === term;
//   });

//   return result;
// }

// const [res] = findArr(["mike", "sam", "bill"], "bill");

// console.log([res]);

// function sayHi(firstArg, ...restOfArgs) {
//   console.log(`hi ${firstArg}`);
//   console.log(restOfArgs);
// }

// sayHi("bilal", 30, 40, "street 50", "street 60");

// const myObj = {
//   firstName: "Muhammad",
//   lastName: "Bilal",
//   age: 40,
//   height: "4ft",
// };

// const { firstName: fname, lastName: lname, age, height } = myObj;

// console.log(fname, lname, age, height);

// function stateUser(obj) {
//   const { name = "default", memberType = "default" } = obj;
//   console.log(`My name is : ${name}, Membership Type: ${memberType}`);
//   // console.log(`Username is : ${name} , memberType is : ${memberType}`);
// }

// // stateUser({ name: "Bilal", memberType: "Premium" });

// const memberone = { name: "Mike", memberType: "premium" };
// stateUser(memberone);

// const obj7 = {
//   title: "My Address Book",
//   enteries: [
//     {
//       name: "Mikel",
//       age: 30,
//       address: "40 st washington",
//       other: {
//         cell: 65656,
//         email: "asdas@gmail.com",
//       },
//     },
//     {
//       name: "SAM",
//       age: 30,
//       address: "40 st washington",
//       other: {
//         cell: 65657,
//         email: "asdas@gmail.com",
//       },
//     },
//     {
//       name: "daneil",
//       age: 30,
//       address: "40 st washington",
//       other: {
//         cell: 65658,
//         email: "asdas@gmail.com",
//       },
//     },
//     {
//       name: "Mikel",
//       age: 30,
//       address: "40 st washington",
//       other: {
//         cell: 65659,
//         email: "asdas@gmail.com",
//       },
//     },
//   ],
//   myPhone: "444-444-111",
// };

// const { title, enteries } = obj7;

// for (const {
//   name,
//   address,
//   other: { cell },
// } of enteries) {
//   console.log(
//     `Name is : ${name} , address is : ${address}, cell is : ${cell}  `
//   );
// }

// const obj8 = {
//   prop1: "Welcome",
//   prop2: [20, 30],
// };

// const {
//   prop1,
//   prop2: [, yy],
// } = obj8;

// console.log(prop1, yy);

// function checkIfNum(num) {
//   if (isNaN(num)) {
//     throw "this is not a number ";
//   } else {
//     console.log(num);
//   }
// }

// checkIfNum("hi");

// let myNum = "hello";
// const myErrLog = [];

// function checkIfNum(num) {
//   if (isNaN(num)) {
//     throw "not a number";
//   } else {
//     console.log("yes, this is a number");
//   }
// }

// function errorHandler(e) {
//   myErrLog.push(e);
// }

// try {
//   checkIfNum(myNum);
// } catch (e) {
//   errorHandler(e);
// }

// console.log("hellllooooooooooooo");

// function MyString(string) {
//   if (typeof string === "string") {
//     this.value = string;
//     this.getValue = function () {
//       console.log("Your string : " + this.value + " .");
//     };
//   } else {
//     throw new StringExceptionError(string);
//   }
// }

// function StringExceptionError(value) {
//   this.value = value;
//   this.message = "This is not a string";
//   this.toString = function () {
//     return this.value + " : " + this.message;
//   };
// }

// function verifyString(s) {
//   let str;
//   try {
//     str = new MyString(s);
//   } catch (e) {
//     if (e instanceof StringExceptionError) {
//       console.log("String exception");
//     } else {
//       console.log("Other exception");
//     }
//   } finally {
//     console.log("finally runs");
//   }
//   return str;
// }

// const a = verifyString("I am a stirng");
// const b = verifyString(12312312);
// // console.log(a.getValue());

// function Ship() {
//   this.floats = true;
//   this.material = "steel";
//   this.whatAmI = function () {
//     console.log("I am made of: " + this.material);
//   };
// }

// const myShip = new Ship();
// console.log(myShip.floats);
// myShip.whatAmI();

// const name1 = {
//   name: "Bilal",
//   age: 16,
//   sayName: function () {
//     console.log("my name is " + this.name);
//   },
// };

// const name2 = Object.create(name1);
// name2.sayName();

// name2.name = "Joe";
// name2.sayName();

// function Animal(name, age, breed) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
// }

// Animal.prototype.sayBreed = function () {
//   console.log(`I am a ${this.breed}`);
// };

// const cow = new Animal("Cow", 4, "australian");
// cow.sayBreed();
// // console.log(cow);

// const parrot = new Animal("parrot", 20, "persian");
// parrot.sayBreed();
// // console.log(parrot);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greetings() {
//     return "Classes are the coolest thing to learn";
//   }

//   static sayHey() {
//     console.log("heyyyyyyy");
//   }
// }

// class Employee extends Person {
//   constructor(name, age, position) {
//     super(name, age);
//     this.position = position;
//   }
//   sayGreetings() {
//     const parentString = super.greetings();
//     console.log(`${this.name} thinks ${parentString}`);
//   }
// }

// class Customer extends Person {
//   constructor({ name = "customer", age = "n/a", contactMethod }) {
//     super(age, name);
//     this.contactMethod = contactMethod;
//     this.accountCredit = null;
//   }

//   addCredit(amount) {
//     this.accountCredit += amount;
//   }

//   reduceCredit(amount) {
//     this.accountCredit -= amount;
//   }

//   // static mehthods cannot be called with instances of classes
//   static sayHi() {
//     console.log("hello");
//   }

//   static sayCustomerNames(c1, c2) {
//     console.log(`${c1.age}`);
//   }
// }

// const customer1 = new Customer({
//   name: "Dan",
//   age: 20,
//   contactMethod: "email",
// });
// const customer2 = new Customer({
//   name: "joe",
//   age: 30,
//   contactMethod: "email",
// });

// console.log(customer1.accountCredit, "before");
// customer1.addCredit(100);
// console.log(customer1.accountCredit, "after");
// customer1.reduceCredit(50);
// console.log(customer1.accountCredit, "after removal");

// // static methods are called with the help of class name
// Customer.sayHi();
// Customer.sayHey();

// Customer.sayCustomerNames(customer1, customer2);

// class FamilyMember {
//   constructor(lastName, firstName, relationship) {
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.relationship = relationship;
//   }

//   sayFamilyName() {
//     console.log(`We are the ${this.lastName}'s`);
//   }
// }

// class FamilyGroup {
//   constructor(parents) {
//     this.parents = parents;
//     this.children = [];
//   }

//   addMember(member) {
//     this.children.push(member);
//   }
// }

// const smithFamily = {
//   1: ["smith", "george", "father"],
//   2: ["smith", "catherine", "mom"],
//   3: ["smith", "annie", "daughter"],
//   4: ["smith", "will", "son"],
// };

// const createFamilyGroup = (famArr) => {
//   const famGroup = new FamilyGroup();
//   console.log(famGroup);
//   for (const prop of famArr) {
//     if (prop.relationship === "father" || prop.relationship === "mom") {
//       famGroup.parents.push(prop);
//     } else {
//       famGroup.children.push(prop);
//     }
//   }

//   // console.log(famGroup);
//   return famGroup;
// };

// const createFamily = (famObj) => {
//   const allMembers = [];
//   for (const prop in famObj) {
//     const [last, first, relationship] = famObj[prop];
//     const newMember = new FamilyMember(last, first, relationship);
//     allMembers.push(newMember);
//   }

//   const famGroup = createFamilyGroup(allMembers);
//   return famGroup;
// };

// const smiths = createFamily(smithFamily);
// console.log(smiths);

// // const dad = new FamilyMember("smith", "george", "father");
// // const mom = new FamilyMember("smith", "catherine", "mom");
// // const annie = new FamilyMember("smith", "annie", "daughter");
// // const will = new FamilyMember("smith", "will", "son");

// // const theSmiths = new FamilyGroup([dad, mom]);
// // console.log(theSmiths, "before");

// // theSmiths.addMember(annie);
// // theSmiths.addMember(will);
// // console.log(theSmiths, "after");

/*

- A callback function is a function that is passed into another function as a parameter
- This inner function is called at some point during the execution of the containing function
- In other words, it's callled back at some specified point inside the containing function's body

*/

// function shouldGoFirst(callback) {
//   setTimeout(() => {
//     console.log("i should always go first");
//     callback();
//   }, 2000);
// }

// function shouldGoSecond() {
//   console.log("I should always go second");
// }

// // shouldGoFirst(shouldGoSecond);

// function sumUpNumbers(num1, num2, callback) {
//   let summedValue;

//   setTimeout(() => {
//     summedValue = num1 + num2;
//     callback(summedValue);
//   }, 1000);
// }

// function summedValue(val) {
//   console.log(`the sum is : ${val}`);
// }

// // sumUpNumbers(10, 30, summedValue);

// function sayWhenDone(loopCount) {
//   console.log(`Done : Looped ${loopCount} times`);
// }

// function looper(arr, callback) {
//   let i = 0;
//   for (i; i < arr.length; i++) {
//     const name = arr[i];
//     const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
//     arr[i] = capitalizedName;

//     console.log(arr[i]);
//   }

//   callback(i);
// }

// const myNames = ["sam", "ban", "mark", "uthred"];

// // looper(myNames, sayWhenDone);

// function anotherLogger(num1, num2, callback) {
//   const sqandsumnums = num1 * num1 + num2 * num2;
//   console.log(sqandsumnums);

//   if (callback) {
//     callback(sqandsumnums);
//   }
// }

// // anotherLogger(5, 5, function (p) {
// //   console.log(`the sumed and squred value is ${p}`);
// // });

// const myDiv = document.getElementById("main");
// const myButton = myDiv.querySelector("button");
// const fakeData = {
//   text: "Welcome to Hooland brother and sisters",
// };

// myButton.addEventListener("click", function () {
//   requestData(populateDom);
// });

// function requestData(cb) {
//   setTimeout(() => {
//     const data = fakeData.text;
//     cb(data);
//   }, 1000);
// }

// function populateDom(data) {
//   myDiv.innerHTML += `<p> ${data}</p>`;
// }

//  ****************************  WORKING WITH PROMISES ********************************************
// const testPromise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     reject("Promise no good! Rejected");
//   }
//   setTimeout(() => {
//     resolve("Promise Ok");
//   }, 1000);
// });

// testPromise
//   .then((resolveMessage) => {
//     console.log(`Looks like : ${resolveMessage}`);
//   })
//   .then(() => {
//     console.log("I should run after the promise is resolved");
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
// function numAdder(n1, n2) {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.1) {
//       reject("nope");
//     }
//     const addNums = n1 + n2;
//     setTimeout(() => {
//       resolve(addNums);
//     }, 500);
//   });
// }

// function numSquarer(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * num);
//     }, 1000);
//   });
// }

// numAdder(10, 10)
//   .then((data) => {
//     return numSquarer(data);
//   })
//   .then((moredata) => {
//     console.log(moredata);
//   })
//   .catch((err) => {
//     console.log(`Error : ${err}`);
//   });

// const prom = Promise.resolve([10, 20, 30]);

// prom
//   .then((nums) => nums.map((num) => num * 10))
//   .then((transformedNums) => console.log(transformedNums));

// const anotherProm = Promise.resolve({ text: "Resolved" });

// anotherProm.then((data) => {
//   console.log(data);
// });

// Promise.reject().then(
//   (res) => {
//     console.log("res");
//   },
//   (err) => {
//     console.log("rejected");
//   }
// );

// function timeLogger(message, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(message);
//     }, time);

//     if (typeof message !== "string" || typeof time !== "number") {
//       reject("please enter valid credentials");
//     }
//   });
// }

// timeLogger("first", 3000)
//   .then((msg) => {
//     console.log(msg);
//     return timeLogger("second", 800);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return timeLogger("third", 500);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return timeLogger("fourth", 500);
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

//  ****************************  WORKING WITH FETCH API ********************************************

// const myDiv = document.getElementById("planet");
// const myButton = document.getElementById("button");
// const mySecondButton = document.getElementById("otherButton");

// myButton.addEventListener("click", getPlanet);
// mySecondButton.addEventListener("click", getPlanets);

// function getPlanet() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   fetch(`https://swapi.dev/api/planets/${randomNum}/`)
//     .then((data) => data.json())
//     .then((d) => populatePlanet(d))
//     .catch((err) => console.log(err.message));
// }

// function getPlanets() {
//   fetch(`https://swapi.dev/api/planets`)
//     .then((data) => data.json())
//     .then((planets) => processPlanets(planets.results));
// }

// function processPlanets(planetsArray) {
//   for (const prop of planetsArray) {
//     populatePlanet(prop);
//   }
// }

// function populatePlanet(planetObj) {
//   console.log(planetObj);
//   const { name, climate, terrain, population, orbital_period } = planetObj;
//   let pop;

//   const planetDiv = `
//   <div class="planets">
//   <h1>${name}</h1>
//   <p> ${name} has a climate that is ${climate}.
//   The terrain is ${terrain} with a population of
//   ${
//     population === "unknown"
//       ? (pop = population)
//       : (pop = parseInt(population).toLocaleString())
//   }.
//   The orbital period is ${orbital_period}

//   </p>
//   </div>
//   `;

//   myDiv.insertAdjacentHTML("beforeend", planetDiv);
// }

//  ****************************  REST AND SPREAD ********************************************

// function spreadFunction(...multipleArgs) {
//   console.log(multipleArgs);
// }

// spreadFunction(1, 2, 3, 4, true, "hi", "hey");

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// // Alternative to Function.prototype.apply
// function sayHello(x, y, z) {
//   console.log(`Hello ${x} ${y} ${z}`);
// }

// const helloArray = ["bob", "jane", "mike"];
// // sayHello.apply(null, helloArray);

// sayHello(...helloArray);

// const res1 = ["kar", "spain", "usa"];
// const res2 = ["mango", "apple", "grapes"];
// const res3 = ["rice", "sugar", "ilaci"];

// const result = res1.concat(res2, res3);
// console.log(result);

// const num1 = [1, 2, 3, 6, 7, 8];
// const num2 = [4, 5];

// function data(arr1, arr2, index) {
//   const firstarr = arr1.slice(0, index);
//   const secondarr = arr1.slice(index);

//   const res = [...firstarr, ...arr2, ...secondarr];
//   console.log(res, "final");
// }

// data(num1, num2, 3);

// const obj = {
//   id: 1,
//   sayHi() {
//     console.log("helloe");
//   },
//   welcome() {
//     console.log("welcome to pak");
//   },
// };

// obj.sayHi();

// obj.welcome();

//  ****************************  JavaScript Logical Questions ********************************************

// 1) **************Finding duplicate elements in a given array ******************

// const duplicateArray = [1, 2, 2, 3, 4, 5, 8, 5, 5, 6];

// const duplicates = duplicateArray.filter((item, index, arr) => {
//   console.log(arr.indexOf(item), "index");
//   return arr.indexOf(item) !== index;
// });
// console.log(duplicates);

// 2) **************Finding counts of  duplicate elements in a given array ******************

// const months = ["may", "may", "june", "june", "june", "june", "july", "aug"];

// const countOfDuplicates = months.reduce((obj, month) => {
//   if (obj[month] == undefined) {
//     obj[month] = 1;
//     return obj;
//   } else {
//     obj[month]++;
//     return obj;
//   }
// }, {});

// console.log(countOfDuplicates, "res");

// 3) **************Check if a given number is an integer ******************

// const validatevalue = "abc";

// console.log(isNaN(validatevalue));

// 4) **************How To Sort a Number array ******************

// const arr = [10, 8, 4, 5, 76, 3, 4, 12];

// const sortedArray = arr.sort((a, b) => {
//   console.log(a - b);
//   return a - b;
// });

// console.log(sortedArray);

// 5) **************How To Sort a strig array ******************

// const stringArr = ["b", "c", "d", "a", "e"];

// const sortedArr = stringArr.sort();

// console.log(sortedArr);

// 6) **************  Finding unique values in an array ******************

const arr = [10, 4, 5, 65, 24, 33, 32, 32, 10, 4, 5];

const uniquevalues = arr.filter((item, index, arr) => {
  return arr.indexOf(item) == index;
});

console.log(uniquevalues);
