function grid() {
  for (let i = 1; i <= 256; i++) {
    const container = document.querySelector("#container");
    const column = document.createElement("div");
    column.classList.add("square" + i);
    // column.style.display = "flex";
  
    container.appendChild(column);
  }
  
} 
grid();

function user(first, second) {
  for(let i = first; i <= second; i++) {
    const row = document.querySelector(".square" + i);
  
    row.style.border = "solid black";
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


container.appendChild(space);


// for(let i = 1; i <= 16; i++) {
//   const row = document.querySelector(".square" + i);

//   row.style.border = "solid black";
//   row.style.padding = "20px";

//   row.addEventListener("click", () => {
//     row.style.backgroundColor = "black";
//   })
// }
