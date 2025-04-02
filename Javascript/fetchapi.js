const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("ghetting data....");
    let response = await fetch(URL);
    console.log(response); //json format
    let data = await response.json();
    console.log(data);
    //factPara.innerText = data[0].text;
};

// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then ((data) => {
//         console.log(data);
//     });
// }

btn,addEventListener("click",getFacts);
 