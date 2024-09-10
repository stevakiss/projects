const container = document.querySelector("#container");
const eraser = document.querySelector("#eraser");
const size = document.querySelector("#size");

let isMouseDown = false;
let isEraserOn = false;

document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

eraser.addEventListener("click", () => {
    eraser.classList.toggle("eraser-color");
    isEraserOn = !isEraserOn;
});

function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.style.flex = `0 0 ${100/size}%`;
        container.appendChild(cell);

        // Handle mouse down
        cell.addEventListener("mousedown", (event) => {
            if (isEraserOn) {
                event.target.classList.remove("change-color");
            } else {
                event.target.classList.add("change-color");
            }
        });

        // Handle mouse over for continuous drawing/erasing
        cell.addEventListener("mouseover", (event) => {
            if (isMouseDown) {
                if (isEraserOn) {
                    event.target.classList.remove("change-color");
                } else {
                    event.target.classList.add("change-color");
                }
            }
        });
    }
};

createGrid(16);

size.addEventListener("input", () => {
    let gridSize = size.value;
    if (gridSize < 1) {
        gridSize = 1;
    } else if (gridSize > 100) {
        gridSize = 100;
    }

    createGrid(gridSize);

});
