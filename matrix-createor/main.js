const mainFormDiv = document.getElementById("matrix-form");
const rowDiv = document.getElementById("row");
const colDiv = document.getElementById("col");
const matrixTable = document.getElementById("matrix-table");
mainFormDiv.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const row = +rowDiv.value;
    const col = +colDiv.value;
    const matrix = createMatrix(row, col);
    addMatrixToPage(matrixTable, matrix);
});

function createMatrix(row, col) {
    const newMatrix = Array.from(Array(row), () => new Array(col).fill(0));
    let count = 0;
    let increment = true;
    let currentRow = 0;
    for (let i=0; i < col; i++) {
        while(currentRow >= 0 && currentRow < row) {
            count++;
            newMatrix[currentRow][i] = count;
            increment ? currentRow++ : currentRow--;
        }
        increment = !increment;
        increment ? currentRow++ : currentRow--;
    }
    return newMatrix;
}

function addMatrixToPage(table, matrix) {
    table.innerHTML = '';
    for (let i=0; i < matrix.length; i++) {
        let row = table.insertRow();
        for (let j =0; j < matrix[0].length; j++) {
            let cell = row.insertCell();
            let text = document.createTextNode(matrix[i][j]);
            cell.appendChild(text);
        }
    }
}

