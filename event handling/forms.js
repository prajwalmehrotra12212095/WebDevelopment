document.addEventListener("DOMContentLoaded" ,function(){
console.log(document.getElementById("outside").value);
   document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    const form = event.target
    console.log(form.username.value)
    console.log(form.mobile.value)
    const mobileNumber = parseInt(form.mobile.value);
    if(mobileNumber.toString() === NaN.toString()){
      alert("you have eneter invalid")
    }
    console.log("this mobile number is "+mobileNumber)
    console.log(form.email.value);
   }) 
   document.getElementById("email").addEventListener("input",function(event){
      const emailElement = event.target;
      console.log(emailElement.value);
      if(emailElement.validity.typeMismatch){
         emailElement.setCustomValidity("plkease enetr an email")
         emailElement.reportValidity();
      }else{
         emailElement.setCustomValidity("")
      }
   })
   document.addEventListener("click",function(){

   })
   console.log(document.getElementById("outside").value);
})
''