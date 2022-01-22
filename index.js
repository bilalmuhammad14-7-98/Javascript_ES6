// NUMBERS

const num = 10;
console.log(num + num, "number");

console.log(typeof num);

console.log(Math.random());
console.log(Math.PI);

// to convert string into numbers or use + (plus sign)
console.log(parseInt("20") + num);
console.log(+"12");

// it will give us an error Nan (not a number)
console.log(parseInt("hello"));

// strings (sequences of unicode characters);

console.log("welcome to pakisatan");
console.log("super".length);

// to find index of string
console.log("Bilal".charAt(0));

// concate strings
console.log("hello" + "  " + "welcome" + "Pakisatn");

console.log("welcome to pakistan".toUpperCase());
console.log("hello".toUpperCase());

//  ++++++++++++++++++++++++++ Working with booleans

var shouldbeTrue = true;
console.log(shouldbeTrue === true);

if (shouldbeTrue === false) {
  console.log("True");
} else {
  console.log("false");
}

var hasContent = "";

console.log(Boolean(hasContent));
