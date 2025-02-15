 let btn = document.querySelector("#btn");
// btn.onclick = (evt) => {
//     // console.log("btn was clicked");
//     // let a = 25;
//     // a++;
//     // console.log(a);
//     console.log(evt);
//     console.log(evt.type);
// }
// let box = document.querySelector("div");
// box.onmouseover = () =>{
//     console.log("you are inseide");
// }

btn.addEventListener("click",() =>{
    console.log("button clicked 1");
})
// btn.addEventListener("click",() =>{
//     console.log("button clicked 2");
// })

const click3 = () =>{
    console.log("button clikced2");
};
btn.addEventListener("click",click3);
btn.removeEventListener("click",click3);