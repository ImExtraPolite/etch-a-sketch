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
      rows.style.border = "solid";
      rows.classList.add("squares");

      columns.appendChild(rows);
    }
  }
}
rows();

for(let i = 1; i <= 16; i++) {
  i.toString;
  const rowOne = document.querySelector(".row" + i);
  rowOne.style.padding = 0;
  rowOne.style.margin = 0;
}







