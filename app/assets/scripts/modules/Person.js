function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
};

console.log("Hello from Person.js");
exports.exampleProperty = "Super magical exaMPLE VALUE";
exports.exampleFunction = function() {
    alert("This is an example");
};