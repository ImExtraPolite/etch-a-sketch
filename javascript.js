function columns() {
  for (let j = 1; j <= 16; j++) {
    const container = document.querySelector("#container");
    const columns = document.createElement("div");
    columns.style.display = "flex";
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
      rows.style.padding = "20px";

      columns.appendChild(rows);

      rows.addEventListener("click", () => {
        rows.style.backgroundColor = "black"
      })
    }
  }
}
rows();
