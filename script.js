const container=document.querySelector(".container");
let gridSize=16;
const button=document.querySelector("button");

const setGrid=()=>{
    container.textContent=""
    for(let i=0;i<16*16;i++){
    const div=document.createElement("div");
    div.classList.add("box");
    div.style.flex=`0 0 calc(100% / ${gridSize})`;
    div.style.height=`calc(100% / ${gridSize})`;
    container.appendChild(div);
    }
}
setGrid();

button.addEventListener("click",(e)=>{
    while(true){
        let ans=parseInt(prompt("Input Grid Size:"))
        if(ans>100) {
            alert("Cant Enter size more than 100.")
        }else{
            gridSize=ans;
            setGrid()
            break;
        }
    }
})

container.addEventListener("mouseover",(e)=>{
    if(e.target.classList.contains("box")){
        e.target.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`

    }
})

























