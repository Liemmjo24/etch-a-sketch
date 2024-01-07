const color = 'black';


function populateBoard(size){
    const board = document.querySelector(".board");
    const squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const amount = size * size
    for(let x = 0; x <= amount; x++){
        const square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input){
    if (input >= 2 && input <= 64) {
        populateBoard(input);
    } else {
        alert('Please enter a number between 2 and 64!')
    }
}

//this refers to square in populateBoard function
function colorSquare(){
    this.style.backgroundColor = color;
}

function changeColor(){
    color = choice;
}

