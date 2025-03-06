function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
        getNextData();
        }
    },2000);
    }
   
    //callback hell 

    getData(1,() => {
        getData(2,() => {
           getData(3) 
        });
    });

    //promisee

    let promise =  new Promise((resolve,reject) => {
        console.log("i am promise");
        resolve(123 );
        // reject("sum error");
        });
        function getData(dataId, getNextData){
            return new Promise((resolve,reject)=> {
                    setTimeout(() => {
                        console.log("data",dataId);
                        resolve("success");
                        if(getNextData){
                        getNextData();
                        }
                    },2000);
            })
            }