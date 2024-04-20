document.addEventListener("DOMContentLoaded",function(){
document.querySelectorAll("input").forEach(radioInput => radioInput.addEventListener("change",function(event){
    //way to do the loop on the iteration of the array 
    document.querySelector(".container").style.setProperty("--col-track-size",event.target.value)
}))
})