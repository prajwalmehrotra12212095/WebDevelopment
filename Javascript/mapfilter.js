//map()

let arr =[1,2,3,34]
let a = arr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(a)

//to print the index and array also

let arr =[1,2,3,34]
let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})
console.log(a)


//filter()

let arr2 = [1,89,78,66]
let a2= arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//reduce array

let arr3=[1,2,4,6]
const reduce_func = (h1,h2) => {
    return h1+h2
}
let newarr3 = arr3.reduce(reduce_func)
// let newarr3 = arr3.reduce((h1,h2)=>{
//     return h1+h2
// })
console.log(newarr3)