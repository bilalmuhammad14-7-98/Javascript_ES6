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

function sayHi() {
  let sayHi = true;
  let isLoading = true;

  // let and const scope is only inside the block we cannot use it outside the block
  // if we console.log myName outside the if -statement it throw an error
  if (sayHi === true) {
    let myName = "Muhammad";

    if (isLoading) {
      let myLastName = "Bilal";
    }
  }

  // console.log(myName);
  console.log(sayHi);
}

function sayHiTwo() {
  let sayHi = false;
  let isLoading = true;
  let myName = "butt";

  // In const if you used the above approach of not defining myName then in the if-statement you defined myName
  // this is not applicable . This is the major difference between let and const

  if (sayHi === true) {
    myName = "Muhammad";
  } else {
    myName = "Bilal";
  }

  console.log(myName);
}

function sayHiThree() {
  let sayHi = false;
  let isLoading = true;
  const myName = "Usman";

  // In const if you used the above approach of not defining myName then in the if-statement you defined myName
  // this is not applicable . This is the major difference between let and const

  if (sayHi === "1") {
    myName = "Muhammad";
  } else {
    myName = "Bilal";
  }

  console.log(myName);
}

sayHi();
sayHiTwo();
// sayHiThree();

const arr = [1, 2, 3];
console.log(arr);
arr.push(4);
console.log(arr);

const object = {
  name: "Muhammad ",
};
console.log(object);

object.name = "Ali";
console.log(object);
