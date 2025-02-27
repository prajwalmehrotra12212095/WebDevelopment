// const prajw = {
//     calTax(){
//         console.log("tax rate");
//     },
// };

// const KaranArjun = {
//     salary : 50000,
// };

// KaranArjun.__proto__ = prajw;


//objectclass

// class TyotoCar{
//     constructor(brand){
//         console.log("creating new object");
//         this.brandName = brand;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner =  new TyotoCar("fortuner");


//inheritence 

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{}
// let obj = new Child();


class Person{
    eat(){
        console.log("eat");
    }
}
sleep(){
    console.log("sleep");
}

class Engineer extends Person{
    work(){
        console.log("solve pronblem");
    }
}
let prajwalObj = new Engineer();