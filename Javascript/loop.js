const prompt = require('prompt-sync')();
let sum = 0
let n = prompt("enter the value of n ")
n = parseInt(n)
for(let i = 0;i<=5;i++){
    sum = sum+i
}
console.log(n+sum)