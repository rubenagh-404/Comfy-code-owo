
drawNames('lable', 'input', 'fname', 'First name', 'text');
drawNames('lable', 'input', 'lname', 'Last name', 'text');
drawSlider('lable', 'input', "zero2hundred", 1, 100, 1, 'range');
drawNumber('lable', 'input', 'number');
drawRemaining('lable', 'input', 'radio', 'HTML', 'fa_language',);
drawRemaining('lable', 'input', 'radio', 'CSS', 'fa_language',);
drawRemaining('lable', 'input', 'radio', 'JavaScript', 'fa_language',);
drawRemaining('lable', 'input', 'checkbox', 'JavaScript', 'fa_language',);
drawRemaining('lable', 'input', 'checkbox', 'JavaScript', 'fa_language',);
drawRemaining('lable', 'input', 'checkbox', 'JavaScript', 'fa_language',);


function drawNames(lab, inp, id, name, text) {
    document.getElementById('names').innerHTML += /*HTML*/`
    <${lab} for="${id}">${name}:</${lab}><br/>
    <${inp} type="${text}" id="${id}"><br/>
    `;
}

function drawSlider(lab, inp, id, min, max, step, tag) {
    document.getElementById('radioSlider').innerHTML += /*HTML*/`
    <${lab} for="${id}">${min} til ${max}:</${lab}><br/>
    <${inp} type="${tag}" min="${min}" max="${max}" step="${step}" id="${id}"><br/>
    `;
}

function drawNumber(lab, inp, number) {
    document.getElementById('typeNumber').innerHTML += /*HTML*/`
     <${lab} for="${number}">Skriv inn et tall:</${lab}><br/>
     <${inp} type="${number}" id="number"><br/>
     `;
}

function drawRemaining(lab, inp, tag, id, lang) {
    if (document.querySelectorAll('#favLang input').length === 3) {
        document.getElementById('transport').innerHTML += /*HTML*/`
           <${inp} type="${tag}" id="${id}" name="${lang}" value="${id}">
           <${lab} for="${id}">${id}</${lab}><br/>   
           `;
    } else {
        document.getElementById('favLang').innerHTML += /*HTML*/`
        <${inp} type="${tag}" id="${id}" name="${lang}" value="${id}">
        <${lab} for="${id}">${id}</${lab}><br/>
       `;
    }


}
('lable', 'input', 'checkbox', 'id', 'bike' )

//     <${lab} for="number">Skriv inn et tall:</${lab}><br/>
//     <${inp} type="number" id="number"><br/>
//     <${inp} type="radio" id="html" name="fav_language" value="HTML">
//     <${lab} for="html">HTML</${lab}><br/>
//     <${inp} type="radio" id="css" name="fav_language" value="CSS">
//     <${lab} for="css">CSS</${lab}><br>
//     <${inp} type="radio" id="javascript" name="fav_language" value="JavaScript">
//     <${lab} for="javascript">JavaScript</${lab}><br/>
//     <${inp} type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
//     <${lab} for="vehicle1"> I have a bike</${lab}><br/>
//     <${inp} type="checkbox" id="vehicle2" name="vehicle2" value="Car">
//     <${lab} for="vehicle2"> I have a car</${lab}><br/>
//     <${inp} type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
//     <${lab} for="vehicle3"> I have a boat</${lab}><br/>

