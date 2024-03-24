let secondNumber = 5;
let firstNumber = 10;
// if (num1>num2) {
//     console.log(num2+"is greater than"+num1);
// } else {
//         console.log("this is anotgher");
//     }
//     num1=10;
//     num2=5;
//     if (num1>num2) {
//     console.log(num2+"is greater than"+num1);
// } else {
//         console.log("this is anotgher");
//     }
// function compareNumber(firstNumber,secondNumber){
//     if (firstNumber>secondNumber) {
//         console.log(firstNumber+"is greater than"+secondNumber);
//     } else {
//             console.log("this is anotgher");
//         }
//     }
//     compareNumber(5,10);
//     //calling function
//     compareNumber(10,5);
    
//     function print() {
//         console.log("this is printed in the console")
//     }
    print();
    //function expression
    const add = function addNumber(firstNumber,secondNumber) {
        return firstNumber + secondNumber
    }
   const result =  add(5,7);
   console.log(result)
    //const result = addNumber(4,3);
    //console.log(result)
    //anonymuos functions
    const subtract = function subtractionNumbers(firstNumber,secondNumber){
        return firstNumber-secondNumber;
    } 
    //invoking
    console.log(subtract(3,5))
    const person = {
        firstName: "o",
        secondName: "p",
        print: function(){
            console.log("this ispropery")
        }
    };
    person.print();
    //coding convention
    //camelcase
    


