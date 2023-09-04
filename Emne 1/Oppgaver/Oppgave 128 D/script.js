// model
let result = null;
let playerWins = 0;
let aiWins = 0;

// view
updateView()
function updateView() {
    playerHTML = '';
    if (result != null) {
        result = /*HTML*/`<div>${result}<br><button onclick="updateView()">Spill på nytt</button></div>`;
    }
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="player" >${playerHTML}
        <button onclick="playerPick(0)">Stein</button>
        <button onclick="playerPick(1)">Saks</button>
        <button onclick="playerPick(2)">Papir</button>
        </div>
        <div class="ai">Spiller:${playerWins} <br>AI:${aiWins}</div>
    `;
}



// controller
function playerPick(playerChoice) {
    let aiChoice = Math.floor(Math.random() * 3);

    if (playerChoice === aiChoice) {
        result = "tie!";
    } else if ((playerChoice === 0 && aiChoice === 1) ||
        (playerChoice === 1 && aiChoice === 2) ||
        (playerChoice === 2 && aiChoice === 0)) {
        result = "Du vant!";
        playerWins += 1;
    } else {
        result = "AI vant!";
        aiWins += 1;
    }
}