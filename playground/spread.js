// function add(a, b) {
//     return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupdB = ['Vikram'];
// var final = [3, ...groupA];

// console.log(final);


console.log(' ----------------- Part 1 ------------------- ');
// create a funcation to handle input
// goal to make a function that prints a greeting 
//  "Hi Andrew, you are 25"

var person = ['Andrew', 26];
var personTwo = ['Jen', 29];


function greeting(name, age) {
    console.log('Hi ' + name + ' you are ' + age );
}
greeting(...person);
greeting(...personTwo);


console.log('');
console.log(' ----------------- Part 2 ------------------- ');

// combine the two arrays into a single array, spread out the names array into final
// loop over the array printing out all the names 

var names = ['Mike', 'Ben'];
var final = ['Brian'];

final = [...names, ...final];

final.forEach(function(name){ 
    console.log('hi ' + name);
});

