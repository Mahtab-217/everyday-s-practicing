// const number="";
// if(number){
//     console.log("added to codes");
// }
// else{
//     console.log("was not added to codes")
// }
// const name=prompt("Enter your name")
// const trimed =name.trim();
// if(trimed.length>2 && trimed.length<20){
//     console.log("Your entered a valid and good name")
// }
// else{
//     console.log("You entered an unvalid and a bad name")
// }
// function sayHello(...a){
// return a.reduce((total,num)=>{
//     return total+num;
// },0);
// }
// sayHello(2,4,3,4,5,6,6,7,12,23,54);
const name="Ali";
if(name==="Ali"){
    console.log(`Your name is Ali dear customer`)
}
else if (name==="Ahmad") {
    console.log(`Your name is Ahmad dear customer`)
} else {
    console.log(`We don't know you dear one`)
}
const div=document.querySelector("div.a");
const btn=document.querySelector("button");
const image=document.createElement("img");
image.setAttribute("src","https://images.unsplash.com/photo-1607882602950-622c80fff04d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hyaXN0bWFzJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D");
image.setAttribute("alt","something went wrong");
image.classList.add("image");
const h1=document.createElement("h1");
const button=document.createElement("button");
button.innerText="Hide";
h1.textContent=("Christmas Time");

const p =document.createElement("p");
p.textContent=("Christmas is the celebration of Jesus Christ’s birth—the incarnation of God with us. Beyond gifts and traditions, its core meaning is worshiping the Savior who came to bring hope, peace, and salvation, remembered through Scripture, historic practices, and acts of love toward others.");
div.append(image,h1,p,button);
btn.addEventListener("click",()=>{
div.classList.add("show");
btn.style.display="none";
})
button.addEventListener("click",()=>{
    div.classList.remove("show");
btn.style.display="block";
})
