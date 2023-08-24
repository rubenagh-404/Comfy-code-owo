drawSlider('label', 'input', 'zero2hundred', 1, 100, 1, 'range');
function drawSlider(lab, inp, id, min, max, step, tag) {
    document.querySelector('.radioSlider').innerHTML += /*HTML*/`
    <${lab} for="${id}">${min} til ${max}:</${lab}><br/>
    <${inp} oninput='updateColor()' type="${tag}" min="${min}" max="${max}" step="${step}" id="${id}"><br/>
    `;

}

function updateColor() {
    let color = 'green';
    const slider = document.getElementById('zero2hundred');
    console.log('Slider value:', slider.value);
    if (slider.value <= 30) {
        color = 'red';
    }
    if (slider.value >= 70) {
        color = 'blue';
    }
    document.querySelector('.rgb').style.backgroundColor = color;
}



