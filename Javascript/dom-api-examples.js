const para = document.createElement("p")
para.textContent = "thisis by using dom api";


para.setAttribute("id","js.para");
console.log(para.getAtttribute("id"))
const span = document.createElement("span")//dom node


span.id= "span-id";
span.className = "blue";
span.textContent="this is using span"
span.style.backgroundColor="yellow"
para.appendChild(span);

document.body.appendChild(para);
//js script
//hghg