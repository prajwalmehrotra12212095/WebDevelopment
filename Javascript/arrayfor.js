let num = [11,12,3,45]
// delete num[0]
// console.log(num)
// let num1 = [2,3,4,5,6]
// let NewArray = num.concat(num1)
// console.log(NewArray)
num.sort()
console.log(num)

let a = [1,2,3,4]
for (let i=0;i<a.length;i++){
    console.log(a[i])
}
//fpr each loop

a.forEach((Element)=>{
    console.log(Element)
})

// array from

let name = "harry"
let arr = Array.from(name)
console.log(arr)

//for of
let d = [1,32,4,5]
for(let i of d){
    console.log(i)
}
