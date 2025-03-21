async function hello() {
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weathercdata");
            resolve(200);
        },2000)
    });
}

async function getWeather() {
    await api();
}

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            console.log("data",dataId);
            resolve("success");
},5000);
    });
}

//async-await

async function getAllData() {
    await getData(1);
    await getData(2);
}

//iife

(async function (){
    console.log("geting data");
    await getData(1);
    console.log("get data");
    await getData(2);
})();/