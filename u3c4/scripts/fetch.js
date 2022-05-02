let s=async(search_input)=>
{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${search_input}`);
        let data=await res.json()
        console.log(data.articles)
        return (data)
    }
    catch(err){
        console.log(err)
    }
}

let append=(data,results)=>
{
results.innerHTML=null;
data.forEach(({urlToImage,content,description,author})=>
{
 let div=document.createElement("div")
 let img=document.createElement("img")
 img.src=urlToImage
 let con=document.createElement("p")
 con.innerText=content
 let des=document.createElement("p")
 des.innerText=description
 let p=document.createElement("p")
 p.innerText=author
 div.append(img,con,des,p)
 results.append (div) 
});
}
export{s,append}