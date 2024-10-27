
const rows=prompt("Enter number of rows")
function createGrid(rows) {

    const container=document.getElementById("gridContainer")
    const cellSize=400/rows
    console.log("hey")
    for (let i = 0; i < rows*rows; i++) {
        const cell=document.createElement("div")
        cell.classList.add("gridCell")
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "rgb(0,0,0)";
        });
        container.appendChild(cell);
        
    }

    
}

createGrid(rows)
const rand=document.getElementById('randomColor')
const clearGrid=document.getElementById('clearGrid')

rand.addEventListener("click", () => {
    const cells = document.querySelectorAll(".gridCell");
    cells.forEach(cell => {
        cell.onmouseover = () => {
            cell.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        };
    });
});
clearGrid.addEventListener("click", () => {
    const cells = document.querySelectorAll(".gridCell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white"; // Reset cells to white
        // Restore default hover effect to black if needed
        cell.onmouseover = () => {
            cell.style.backgroundColor = "rgb(0, 0, 0)";
        };
    });
});

