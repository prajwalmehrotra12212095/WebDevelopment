function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
console.log("some data 1");
resolve("sucess");
        },3000);
    });
}
function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
console.log("some data 2");
resolve("sucess");
        },3000);
    });
}


console.log("fetching data1");
asyncFunc1().then((res) => {
    console.log("fetching data 2");asyncFunc2().then((res) => {});
});


function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            console.log("data",dataId);
            resolve("success");
},5000);
    });
}

//promise chain

getData(1) 
.then((res) => {
    return getData(2)
})
.then((res) => {
console.log(res);
});