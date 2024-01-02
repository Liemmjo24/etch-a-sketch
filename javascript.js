let board = document.querySelector('.board');
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';

for(let x = 0; x <= 256; x++){
    let square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    board.insertAdjacentElement("beforeend", square);
}