// objects: https://www.w3schools.com/js/js_objects.asp
const person = {
    name: "Jhon",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.name + " " + this.lastName;
    }
}

console.log(person.fullName())

//loops: https://www.w3schools.com/js/js_loop_for.asp
// Normally you will use statement 1 to initialize the variable used in the loop (let i = 0).

// This is not always the case, JavaScript doesn't care. Statement 1 is optional.

// You can initiate many values in statement 1 (separated by comma):

let cars = ["Fiat", "Ford", "Sandero"];
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "\n";
    console.log(text);
  }

//And you can omit statement 1 (like when your values are set before the loop starts):
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}

// Often statement 2 is used to evaluate the condition of the initial variable.

// This is not always the case, JavaScript doesn't care. Statement 2 is also optional.

// If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

//If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser.

// Often statement 3 increments the value of the initial variable.

// This is not always the case, JavaScript doesn't care, and statement 3 is optional.

// Statement 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

// Statement 3 can also be omitted (like when you increment your values inside the loop):

let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}