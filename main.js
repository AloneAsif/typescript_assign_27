"use strict";
// Question no 28   Stages of Life (if else) 
let age = 23;
if (age <= 2) {
    console.log('this person is baby!');
}
else if (age >= 2 && age < 4) {
    console.log('you are a toddler.');
}
else if (age >= 4 && age < 13) {
    console.log('the person is a kid.');
}
else if (age >= 13 && age < 20) {
    console.log('the person is teenager.');
}
else if (age >= 20 && age < 65) {
    console.log('the person is adult.');
}
else if (age >= 65) {
    console.log('this person is elder.');
}
