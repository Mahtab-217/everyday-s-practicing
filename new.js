const allDives=document.querySelectorAll("div");
const firstDiv=allDives(1);
const newDiv=document.createElement("div");
newDiv.classList.add("newBox");
firstDiv.lastElementChild.before("newDiv");
