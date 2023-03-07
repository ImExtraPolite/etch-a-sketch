function grid() {
  for (let i = 1; i <= 256; i++) {
    const container = document.querySelector("#container");
    const column = document.createElement("div");
    column.classList.add("square" + i);
  
    container.appendChild(column);
  }
  
} 
grid();

function user(first, second) {
  for(let i = first; i <= second; i++) {
    const row = document.querySelector(".square" + i);
  
    row.style.padding = "20px";
    row.style.display = "inline-block";
  
    row.addEventListener("click", () => {
      row.style.backgroundColor = "black";
    })
  }
}

let newNum;

const container = document.querySelector("#container");
const space = document.createElement("br");


user(1, 16);
user(16,32);
user(32, 48);
user(48, 64);
user(64, 80);
user(80, 96);
user(96, 112);
user(112, 128);
user(128, 144);
user(144, 160);
user(160, 176);
user(176, 192);
user(192, 208);
user(208, 224);
user(224, 240);
user(240, 256);
