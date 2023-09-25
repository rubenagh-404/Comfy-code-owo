// model
let model = {
    text: "Skriv noe her :3 ",
    maxLength: 20,
};
let firstInput = false;

// view
updateView()
function updateView() {
    let html = '';
    html += `<input type="text" id="userText" oninput="model.text = this.value" value="${model.text}">`;
    html += `<input type="number" id="userNumber" oninput="model.maxLength = this.value" value="${model.maxLength}">`;
    html += `<br><button onclick="printText()">Doble tekst</button>`;
    if (firstInput) {
    html += `<p id="text">${model.text}</p>`
    }
    document.getElementById('app').innerHTML = html;
}


// controller
function printText() {
    firstInput = true;
    if (model.text.length < model.maxLength) {
        model.text = model.text += model.text;
    }
    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
      }

    updateView()
}

// Lag et tekst-input-felt "tekst" og et tall-input-felt "maks. lengde".
// Lag en knapp "gjenta". Når brukeren trykker på denne knappen,
// skal teksten dobles (text += text) så lenge teksten har lengde under "maks. lengde". 
// . Resultatet legges til nettsiden.