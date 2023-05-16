
let color = ["aqua", 'black', "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

const btn = document.getElementById("color-change-btn");
const span = document.getElementById("display-color-span");

btn.addEventListener("click", function(){
    const num = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[num];
    span.textContent = color[num];
});