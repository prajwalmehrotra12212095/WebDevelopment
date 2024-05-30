function printText(){
    console.log("hello");
}

printText.areYouAnObject = true;

let a = 2;
let person = {
    firstName: "Gaurav",
    lastName: "Sen",
    getName: function (){
        return this.firstName + " " + this.lastName;
    }
}
console.log(this.a);
console.log(person);

function greetPerson(){
    console.log("namaste" ,this.getName());
}
greetPerson();
//bind

let greetGaurav = greetPerson.bind(person);
console.log(greetGaurav()):

greetPerson.call(person, "Namaste");
//apply
//arguments
function sum(){
    let total = 0;
    for(let index =0; index< arguments.length; index++){
total = arguments[index];
    }    
    return total;

}
console.log(sum(2,3,4,5))
//apply
greetPerson.apply(person.["hello"]);