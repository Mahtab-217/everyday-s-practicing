const allDives=document.querySelectorAll("div");
const firstDiv=allDives(0);
const newDiv=document.createElement("div");
newDiv.classList.add("newBox");
firstDiv.lastElementChild.before("newDiv");
firstDiv.las