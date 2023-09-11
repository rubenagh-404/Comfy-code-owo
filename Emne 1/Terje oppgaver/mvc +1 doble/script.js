// model
let number = 1;

// view
updateView()
function updateView() {
    let html = '';
    html += number
    html += `<br><button onclick='leggeTil()'>legge til 1</button><br><button onclick='doble()'>doble</button>`
    document.getElementById('app').innerHTML = html;
}


// controller

function leggeTil() {
    number += 1;
    updateView()
}

function doble() {
    number += number;
    updateView()
}



// Notater

// jeg brukte mest tid på å finne ut hvordan jeg ville legge til <div> og <buttons>
// funksjonene for doble og plusse tok under ett minutt.