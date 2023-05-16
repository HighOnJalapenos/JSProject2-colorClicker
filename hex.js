const btn = document.getElementById("color-change-btn");
const span = document.getElementById("display-color-span");

const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function(){
    let newColor = "#";

    for(let i=0; i<6; i++){
        const num = Math.floor(Math.random() * color.length);
        newColor+=color[num];
    }

    document.body.style.backgroundColor = newColor;
    span.textContent = newColor;
});