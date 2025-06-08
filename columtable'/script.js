const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');
const grid = document.getElementById('grid');

function generateGrid() {
  const rows = rowsInput.value;
  const cols = colsInput.value;

  grid.style.gridTemplateColumns = `repeat(${cols}, auto)`;
  console.log(grid);
  grid.innerHTML = '';

  const total = rows * cols;
  for (let i = 0; i < total; i++) {
    const cell = document.createElement('div');
    cell.className = 'box';
    cell.textContent = i + 1;
    grid.appendChild(cell);
  }
}

rowsInput.addEventListener('input', generateGrid);
colsInput.addEventListener('input', generateGrid);

generateGrid();
