// model


// view
updateView()
function updateView() {
    let html = '';
    html += `<input type="text" id="tekst" value="skriv noe her :3">`
    html += `<input type="number" id="tekst" value="">`
    html += `<br><button>doble tekst</button>`
    
    document.getElementById('app').innerHTML = html;
}


// controller

















// Lag et tekst-input-felt "tekst" og et tall-input-felt "maks. lengde".
// Lag en knapp "gjenta". Når brukeren trykker på denne knappen,
// skal teksten dobles (text += text) så lenge teksten har lengde under "maks. lengde". 
// . Resultatet legges til nettsiden.