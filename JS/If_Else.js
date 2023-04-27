// Relational Operators 
// ==  !=  <  >  >=

// Logical Operators
// &&  ||

var age = prompt("Enter your age : ");

if (age > 14) {
    document.write("You are not allowed in the party");
}
else if (age > 21 && age < 30) {
    document.write("You are allowed in the bear party");
}
else if (age > 15 && age < 20) {
    document.write("You are allowed in the kids party");
}
else {
    document.write("You are not allowed in the party");
}