function add(firstNum){
    return function(secondNum){
        return firstNum + secondNum;
    }
}

let addWith = add(5);
console.log(addWith(2));
console.log(addWith(7));
console.log(addWith(20));

//document.addEventListener("click", function());
//call back function
document.addEventListener("DOMContentLoaded", function(){
    console.log("this is called get called back when the");
})
function callMeOnceDone(fn){
    console.log("i am done");
    fn();
}
function printText(){
    console.log("helo");
}
callMeOnceDone(printText);
function printTextWithDelay(text){
    setTimeout(function(){
        console.log(text);
    },3000);
}
printTextWithDelay("ghjdhgfdfd")