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
    i.toString;
    const columns = document.querySelector(".row" + i);
    const rows = document.createElement("div");

    columns.appendChild(rows);
  }
}
rows();


