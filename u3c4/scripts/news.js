// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


var ar=JSON.parse(localStorage.getItem("news"))
console.log(ar)

ar.forEach(function(el)
{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.urlToImage
    let content=document.createElement("p")
    content.innerText=el.content
    let des=document.createElement("p")
    des.innerText=el.description
    let p=document.createElement("p")
    p.innerText=el.author
    div.append(img,content,des,p)
    document.getElementById("detailed_news").append (div)
})