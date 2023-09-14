// model
colors = 'RGBBGRWL'


// view
updateView()
function updateView() {
    let html = '';
    for (let i = 0; i < colors.length; i++) {
        color = colors[i];
        if (color == 'R') {
            color = 'red';
        }
        html += `<div style="color: ${color}">${color}</div>`;
    }
    document.getElementById('app').innerHTML = html;
}


// controller