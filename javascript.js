function columns() {
  for (let j = 1; j <= 16; j++) {
    const container = document.querySelector("#container");
    const columns = document.createElement("div");
    j.toString()
    columns.classList.add("row" + j);

    container.appendChild(columns); 
  }
}
columns();

function rows() {
  for (let i = 1; i <= 16; i++) {
    for(let j = 1; j <= 16; j++) {
      j.toString;
      const columns = document.querySelector(".row" + i);
      const rows = document.createElement("div");
      rows.classList.add("squares" + j);

      columns.appendChild(rows);
    }
  }
}
rows();



for (let i = 1; i <= 16; i++) {
  // if ()
  const column = document.querySelector(".squares" + i);

  console.log(column);

  column.addEventListener("click", () => {
    column.style.backgroundColor = "black";
  })

  // for (let j = 1; j <= 16; j++) {
  //   const row = document.querySelector(".squares" + j);

  //   row.addEventListener("click", () => {
  //     row.style.backgroundColor = "black";
  //   })
  // }
}