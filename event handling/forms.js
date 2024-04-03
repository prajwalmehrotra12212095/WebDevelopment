document.addEventListener("DOMContentLoaded" ,function(){
console.log(document.getElementById("outside").value);
   document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    const form = event.target
    console.log(form.username.value)
    console.log(form.mobile.value)
    const mobileNumber = form.mobile.value;
    console.log("this mobile number is "+mobileNumber)
    console.log(form.email.value);
   }) 
   document.addEventListener("click",function(){

   })
   console.log(document.getElementById("outside").value);
})