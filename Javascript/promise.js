const getPromise = () => {
   return new Promise((resolve,reject) => {
        console.log("i am promise");
        resolve("success")
    });
};



let promise =  getPromise();
promise.then((res) => {
    console.log("fulfiles");
});

promise.catch((err ) => {
    console.log("rejetced",err);
})

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout (() => {
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
// },5000);
//     });
// }