drawSlider('label', 'input', 'zero2hundred', 1, 100, 1, 'range');
function drawSlider(lab, inp, id, min, max, step, tag) {
    document.querySelector('.radioSlider').innerHTML += /*HTML*/`
    <${lab} for="${id}">${min} til ${max}:</${lab}><br/>
    <${inp} type="${tag}" min="${min}" max="${max}" step="${step}" id="${id}"><br/>
    `;

    const slider = document.getElementById(id);
    slider.addEventListener('input', function() {
        console.log('Slider value:', slider.value);
        if (slider.value <= 30) {
            document.querySelector('.rgb').style.backgroundColor = 'red';
        }else {
            document.querySelector('.rgb').style.backgroundColor = 'yellow';
        }
        if (slider.value >= 70) {
            document.querySelector('.rgb').style.backgroundColor = 'green';
        } 
    });


}
