const container=document.querySelector(".container");

for(let i=0;i<16*16;i++){
    const div=document.createElement("div")
    div.classList.add("box");

    container.appendChild(div)
}
const boxes=document.querySelectorAll(".box")
boxes.forEach(box=>{
    box.addEventListener("mouseover",(e)=>{
    box.classList.add("color")
})
})
document.body.appendChild(container);


