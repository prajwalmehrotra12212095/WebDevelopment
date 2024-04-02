// function handleClick(){
//   alert("you have the clicked the button.") 
// }
document.getElementById("clickme").onclick= handleClick;
document.addEventListener("DOMcontentLoaded",function(){
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
    document.addEventListener("keypress",function(e){
       console.log("keypress");
        console.log(e.key);
        if(e.key == "2"){
        e.preventDefault();
        }
    })
    document.addEventListener("keydown",function(e){
        console.log("keydown");
        console.log(e.key);
        if(e.key == "2"){
        e.preventDefault();
        }
    })
    document.addEventListener("keyup",function(e){
        console.log("keyup");
        console.log(e.key);
        if(e.key == "2"){
        e.preventDefault();
        }
        document.getElementById("username").addEventListener("focus",function (event){
            console.log("focus event happen")
        })
        document.getElementById("username").addEventListener("blur",function (event){
            console.log("blur event happen")
        })
    }. true)
    //events are capture
    document.querySelector(".parent").addEventListener("click",function(){
        console.log("parent clicked");
    }. true)
    document.getElementById("subchild").addEventListener("click",function(){
        console.log("subchild clicked");
        event.stopPropagation();
    
    }. true) 
    
})
