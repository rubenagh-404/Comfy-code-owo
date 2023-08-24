// document.getElementById('app').innerHTML = createTrafficLight(true, true, false);
let phase = 0;

function createLightDiv(color) {
    return /*HTML*/`<div class="light" style="background-color: ${color};"></div>`;
}

function createTrafficLight(isRed, isYellow, isGreen) {
    let color1 = 'gray';
    let color2 = 'gray';
    let color3 = 'gray';
    if (isRed) color1 = 'red';
    if (isYellow) color2 = 'yellow';
    if (isGreen) color3 = 'green';

    return /*HTML*/`
                <div class="trafficLight">
                    ${createLightDiv(color1)}
                    ${createLightDiv(color2)}
                    ${createLightDiv(color3)}
                </div>
                
            `;
}

function nextPhase() {
    drawTrafficLight();
    phase += 1; 
    if (phase >= 4) {
        phase = 0;
    }
    console.log('phase', phase)
}

function drawTrafficLight() {
        document.getElementById('app').innerHTML = createTrafficLight(true, false, false);
    }
    if (phase = 2) {
        document.getElementById('app').innerHTML = createTrafficLight(true, true, false);
    }
    if (phase = 3) {
        document.getElementById('app').innerHTML = createTrafficLight(false, false, true);
    } else {
        document.getElementById('app').innerHTML = createTrafficLight(false, false, false);
    }



    
    // let lightStatus = document.getElementById('app').innerHTML = createTrafficLight(true, false, false);
    // console.log('lightStatus', lightStatus)
    // lightStatus = 'true', 'true', 'false';
    // phase++;

    // document.getElementById('app').innerHTML = createTrafficLight(true, true, false);
    // document.getElementById('app').innerHTML = createTrafficLight(false, false, true);
    // document.getElementById('app').innerHTML = createTrafficLight(false, false, false);