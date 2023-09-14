// model
let result = null;
let playerWins = 0;
let aiWins = 0;
let pPick = '';
let aiPick = '';
let picks = ['stein', 'saks', 'papir'];

// view
updateView()
function updateView() {
    playerHTML = '';
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="box" >${playerHTML}
        <button onclick="playerPick(0)">Stein</button>
        <button onclick="playerPick(1)">Saks</button>
        <button onclick="playerPick(2)">Papir</button>
        </div>
        `;

    if (result != null) {
        document.getElementById('app').innerHTML += `
        <div class="box">Spiller:${playerWins} <br>AI:${aiWins} <br>
        Spiller brukte: ${pPick}!<br>AI brukte: ${aiPick}!!</div>
        `;
    }
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
    pPick = picks[playerChoice];
    aiPick = picks[aiChoice];
    updateView()
}