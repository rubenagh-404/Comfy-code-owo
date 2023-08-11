// const lights = ['red_light', 'yellow_light', 'green_light'];
// let currentLightIndex = 0;

// function changeLights() {
//     let currentLight = document.getElementById(lights[currentLightIndex]);
//     let nextLightIndex = (currentLightIndex + 1) % lights.length;
//     let nextLight = document.getElementById(lights[nextLightIndex]);

//     currentLight.style.backgroundColor = 'gray';
//     nextLight.style.backgroundColor = lights[nextLightIndex].split('_')[0]; 

//     currentLightIndex = nextLightIndex;
// }
// if (currentLightIndex === 0) {
//     document.getElementById('yellow_light').style.backgroundColor = 'yellow';
// }
// let light_1 = false;
// let light_2 = false;
// let light_3 = false;

init();
function init() {
    changeColor();
}

function changeColor() {
    // if light_1 == false && light_2 == false && light_3 == false {
    //     setState1();
    // } else {
        setState1();
//     }
}
function setState1() {
    document.getElementById('light_1').style.backgroundColor = "red";
    document.getElementById('light_2').style.backgroundColor = "grey";
    document.getElementById('light_3').style.backgroundColor = "green";
    // let light_1 = true;
    // let light_2 = false;
    // let light_3 = false;

}