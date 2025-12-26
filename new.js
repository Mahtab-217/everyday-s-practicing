const div=document.querySelector("div");
const p=document.querySelector("div> p:first-child");
// div.setAttribute("class",'box');
div.className="box";
div.className=div.className+" line";
// div.className="line";
// div.classList.add("box")
// div.classList.add("line")
p.setAttribute("class",'p');
// div.classList.remove("line");
p.setAttribute("class","d");
div.style.backgroundColor="greenyellow";