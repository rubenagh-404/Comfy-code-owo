// model
let verdi;
let input;

// view
updateView()
function updateView() {
    let result = '';
    
    for (let tall = 0; tall <= 9; tall++) {
        result += drawDiv(tall);
    }
    document.getElementById('app').innerHTML = result
    + drawPluss() + drawMinus() + drawMultiply() + drawDevide() + drawEquals();
    // drawDiv(1) + drawDiv(2)
    // +drawDiv(3) + drawDiv(4)
    // +drawDiv(5) + drawDiv(6)
    // +drawDiv(7) + drawDiv(8)
    // +drawDiv(9) + drawDiv(0);
}


// controller
function pickNumber(){
    document.getElementById('app').innerHTML = result;
    console.log(tall, 'tall')
}

    function drawDiv(tall, input) {
        return `<button onclick='pickNumber()'>${tall}</button>`;
        
}

function drawPluss() {
    return `<button onclick='+'>+</button>`;
}

function drawMinus(){
return `<button onclick='-'>-</button>`;
}

function drawMultiply(){
return `<button onclick='*'>*</button>`;
}

function drawDevide(){
    return `<button onclick='/'>/</button>`;
}

function drawEquals() {
    return `<button onclick='='>=</button>`;
}
