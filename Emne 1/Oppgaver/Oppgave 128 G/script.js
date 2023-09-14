// model
let tiles = 64
let piece = [
    '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
    '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
    '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖',
];

// view
updateView()
function updateView() {
    let html = drawBoard();
    document.getElementById('app').innerHTML = html;
}
// controller

//helper
function drawPiece() {
    let pieces = [];
    for (let i = 0; i < tiles; i++) {
        if (piece[i]) {
            pieces.push(piece[i]);
        } else {
            pieces.push('');
        }
    }
    return pieces;
}

function drawBoard() {
    let html = `<div id="board">`;
    let light = 'lightSquare';
    let dark = 'darkSquare';
    let shift = false;
    let pieces = drawPiece();

    for (let i = 0; i < tiles; i++) {
        let index = i;
        let modulo8 = i % 8;
        if (modulo8 == 0) {
            if (shift == false) {
                shift = true;
            } else {
                shift = false;
            }
        }

        if (shift == false) {
            index += 1;
        }
        let modulo2 = index % 2;
        if (modulo2 == 0) {
            html += `<div class="${light}">${pieces[i]}</div>`;
        } else {
            html += `<div class="${dark}">${pieces[i]}</div>`;
        }
    }
    html += `</div>`;
    return html;
}