const container = document.querySelector('#grid');


function random(number) {
    return Math.floor(Math.random() * number + 1);
}

function rows(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className="grid-cell";
        cell.addEventListener("mouseover", function bg() {
            const rc = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
            cell.style.backgroundColor = rc;
        });
    }
}

rows(16,16);

const button = document.getElementById("button");

button.addEventListener("click", function changeSize(size) {
    size = prompt("Enter the number of cells on each side of the grid");
    container.innerHTML = "";
    if (0 < size && size <= 100){
        rows(size, size);
    } else {
        rows(16,16);
        alert("Please insert value between 1 and 100");
    }
});