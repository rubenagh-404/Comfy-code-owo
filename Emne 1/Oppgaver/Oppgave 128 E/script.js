// model
let selectedIndex = null;
let randomColor = Math.floor(Math.random() * 4);


// view
updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="grid">
            <div id="a" style="${getStyle(0)}" onclick="yellowSquare(0)">0</div>
            <div id="b" style="${getStyle(1)}" onclick="yellowSquare(1)">1</div>
            <div id="c" style="${getStyle(2)}" onclick="yellowSquare(2)">2</div>
            <div id="d" style="${getStyle(3)}" onclick="yellowSquare(3)">3</div>
        </div>
        <div id="e"><button onclick="startGame()">start</button>
    `;
}

function getStyle(index) {
    if (index != selectedIndex) return '';
    return 'background-color: yellow';
}

// controller
function yellowSquare(index) {
    if (index == selectedIndex) startGame();
}

function startGame() {
    selectedIndex = getRandomNumber(0, 3);
    updateView();
}

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}