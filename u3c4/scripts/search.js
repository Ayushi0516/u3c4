// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();



document.getElementById("search_input").addEventListener("keydown",search)
function search()
{
    let search_input=document.getElementById("search_input").value
   const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${search_input}`;
   fetch(url)
.then(function (res)
{
    return res.json()
}).then(function(res)
{
    console.log(res)
    append(res.articles)
    
})
.catch(function(err)
{
 console.log(err);
})

}
 var arr=JSON.parse(localStorage.getItem("news"))|| [];
let results=document.getElementById("results")
function append(data)
 {
    // results.innerHTML=null
    data.forEach(function(el)
    {

        results.innerHTML=null
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.urlToImage
        img.addEventListener("click",function()
        {
            return news(el)
        })
        let content=document.createElement("p")
        content.innerText=el.content
        let des=document.createElement("p")
        des.innerText=el.description
        let p=document.createElement("p")
        p.innerText=el.author
        div.append(img,content,des,p)
        results.append (div)
    })
}
 function news(el)
{

    arr.push(el)
 window.location.href="news.html";
localStorage.setItem("news",JSON.stringify(arr))
// window.location.href="news.html"
}


