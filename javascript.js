function columns(user) {
  for (let j = 1; j <= user; j++) {
    let width = 40 * j;
    const container = document.querySelector("#container");
    const columns = document.createElement("div");
    columns.style.display = "flex";
    columns.classList.add("row" + j);
    container.style.width = width + "px";

    container.appendChild(columns); 
  }
}

function rows(user) {
  for (let i = 1; i <= user; i++) {
    for(let j = 1; j <= user; j++) {
      const container = document.querySelector("#container");
      const columns = document.querySelector(".row" + i);
      const rows = document.createElement("div");
      rows.classList.add("squares" + j);
      rows.style.padding = "20px";

      columns.appendChild(rows);

      rows.addEventListener("mouseover", () => {
        rows.style.backgroundColor = "black"
      })
    }
  }
}

function userNum() {
  let user = Number(prompt("Enter a number: "));   

  return user;
}

console.log(userNum());

columns(userNum());
rows(userNum());


