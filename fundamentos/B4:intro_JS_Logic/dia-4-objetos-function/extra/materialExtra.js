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

let cars = ["Fiat", "Ford", "Sandero"];
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "\n";
    console.log(text);
  }