let quote =document.querySelector("#quote");
let author = document.querySelector("#author");
let tagname = document.querySelector("#tags");
let button = document.querySelector("#btn");

const getData = async()=>{
    const response = await fetch('http://quotable.io/random');
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
    tagname.innerText = data.tags;
}

button.addEventListener("click", getData)