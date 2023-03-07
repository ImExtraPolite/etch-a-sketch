function grid() {
  for (let i = 1; i <= 16; i++) {
    const container = document.querySelector("#container");
    const column = document.createElement("div");
    column.classList.add("row" + i);
    column.style.display = "flex";
  
    container.appendChild(column);
  }
  
  for (let j = 1; j <= 16; j++) {
    const column = document.querySelector(".row" + j);
  
    for(let x = 1; x <= 16; x++) {
      const row = document.createElement("div");
      row.style.border = "solid black";
      row.style.padding = "20px";
  
      column.appendChild(row);
    }
  }
} 
grid();

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    const row = document.querySelector(".row" + j + " div");

    row.addEventListener("click", () => {
      row.style.backgroundColor = "black";
    })
  }

}




// for(i = 1; i <= 16; i++) {
//   const choice = document.querySelector(".choice");

//   choice.addEventListener("click", () => {
//     choice.style.backgroundColor = "black";
//   });
// }
