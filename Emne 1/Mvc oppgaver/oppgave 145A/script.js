//Model
let index = 1;
let logo = <img src="https://getacademy.no/hubfs/GET_RGB_logo-01-2.png"></img>;


//view

function updateView() {
    let html = '';
    document.getElementById('app').innerHTML = html;
    html += drawBoard();
    html += drawButtons();
}

function drawBoard() {
    document.getElementById('app').innerHTML += /*HTML*/ `
    <div class="board">
    <div class="square">
    </div>
    <div class="square">
    </div>
    <div class="square">
    </div>
    <div class="square">
    </div>
    </div>
    `;
}
// function drawButtons() {
//     document.getElementById('app').innerHTML += /*HTML*/ ` 
//     <div class="buttons">
//     <button onclick="moveLogo(1)">▲</button>
//     <div>
//     <button onclick="moveLogo(2)">◀</button>
//         <button onclick="moveLogo(3)">▶</button>
//     </div>
//     <button onclick="moveLogo(4)">▼</button>
//     </div>
//     </div>
//     `;
// }

function pressButton() {

}


//controller
updateView();


//         <div class="buttons">
// <button onclick="showBoardWithLogoUpLeft()">▲</button>
// <div>
//     <button disabled="">◀</button>
//     <button onclick="showBoardWithLogoDownRight()">▶</button>
// </div>
// <button disabled="">▼</button>
// </div>
// </div>