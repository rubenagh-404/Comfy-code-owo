let pointPerClick = 1;
let tenPerClick = 10;
let hundredPerClick = 100;
let points = 0;


pointTracker();
function pointTracker() {
    document.getElementById('currentPoints').innerHTML = points;
}

function cookieClick() {
    document.getElementById('currentPoints').innerHTML = points += pointPerClick;
    console.log('points', points)
}

function plusOne() {
    if (points >= 10) {
        pointPerClick += 1;
        points -= 10;
        pointTracker();
    }    
}
function plusTen() {
    if (points >= 100) {
        pointPerClick += 10;
        points -= 100;
        pointTracker();
    } 
}
function plusHundered() {
    if (points >= 1000) {
        pointPerClick += 100;
        points -= 1000;
        pointTracker();
    } 
}