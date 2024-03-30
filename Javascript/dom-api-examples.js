const para = document.createElement("p")
para.textContent = "thisis by using dom api";
para.classList.add("one")

const span = document.createElement("span") //dom node
// para.setAttribute("id","js.para");
// console.log(para.getAtttribute("id"))


span.id= "span-id";
 span.className = "blue";
 span.textContent="this is using span <em>fggfgf</em>"
// span.style.backgroundColor="yellow"
 span.innerHTML="<em>hey its to change the font</em>"
 para.appendChild(span);
const hobbies = ["coding","swimming","skating"]
const list = document.createElement("ul");
for(let hobby of hobbies){
    list.innerHTML += "<li class = 'blue'>" + hobby + "</li>"
    document.body.appendChild(list);
}
document.body.appendChild(para);
