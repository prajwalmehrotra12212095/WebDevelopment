// function handleClick(){
//   alert("you have the clicked the button.") 
// }
// document.getElementById("clickme").onclick= handleClick;
function handleMouseOver(event){
    console.log(event);
}
//recommend
document.getElementById("start").addEventListener("click", function handleClick(){
    //contain info about the event
document.addEventListener("mouseover", handleMouseOver)
})


document.getElementById("stop").addEventListener("click", function handleClick(){
    //contain info about the event
document.removeEventListener("mouseover", )
})