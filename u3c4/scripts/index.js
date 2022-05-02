// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
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
let results=document.getElementById("results")
function append(data)
{
    data.forEach(function(el)
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
        results.append (div)
    })
}


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
    window.location.href="search.html"
    
})
.catch(function(err)
{
 console.log(err);
})
}














// let results=document.getElementById("results")
// function append(data)
// {
//     // results.innerHTML=null
//     data.forEach(function(el)
//     {
//         let div=document.createElement("div")
//         let img=document.createElement("img")
//         img.src=el.urlToImage
//         let content=document.createElement("p")
//         content.innerText=el.content
//         let des=document.createElement("p")
//         des.innerText=el.description
//         let p=document.createElement("p")
//         p.innerText=el.author
//         div.append(img,content,des,p)
//         results.append (div)
//     })
// }

// }

// import{s,append} from "./fetch.js"
// let search=(e)=>{
//     if(e.key==="enter")
//     {
//         let search_input=document.getElementById("search_input").value
//         s(search_input).then((data)=>{
//             console.log(data);
//             document.getElementById("results")
//             append(data.articles,results)
//         });
//     }
// };


// document.getElementById("search_input").addEventListener("keydown",search)
