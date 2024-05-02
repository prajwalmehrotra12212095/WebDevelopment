// function printMe(){
//     var a = 2;
//     console.log(a);
// }
// printMe();
// console.log(a);

// globalobject
// this 
// reference to outer environment
// var a = 2;
// function printMe(){
//     console.log(a)
// }
// printMe();
// conssole.log(a)
//hoisting
console.log(somevariable);
someFunction();
function someFunction(){
    console.log("from someFunction", somevariable);
}
var somevariable = "devsnest"; //declaration
// execution content is created

// creation phase
// loads variable and func in memory
// execute statemnet line by line

