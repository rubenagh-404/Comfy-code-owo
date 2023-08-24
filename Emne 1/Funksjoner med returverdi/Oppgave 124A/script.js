let day = 1; 
let month = 1;
let year = 2000;
function buildApp(type, min, max, buttonUp, buttonDown, text) {
    document.getElementById('app').innerHTML += /*HTML*/`
    <div style="display: flex;align-items: center;">
        <div id=${type} style="font-size: 300%;">${text}</div>
        <div style="display: flex; flex-direction: column;align-items: flex-start;">
            <button id="dayUp" onclick="${buttonUp.name}(${max})">▲</button>
            <button id="dayDown" onclick="${buttonDown.name}(${min})">▼</button>
        </div>
    </div>`;
}

let lowerLimit = 1;
let dayLimit = 31;
let monthLimit = 12;
let yearStart = 2069;
let yearEnd = 1996;

function selectDayUp(dayLimit) {
    if (day < dayLimit) {
        day += 1;
        document.getElementById('day').innerHTML = day;
        returnDate();
    }
}

function selectDayDown(lowerLimit) {
    if (day > lowerLimit) {
        day -= 1;
        document.getElementById('day').innerHTML = day;
        returnDate();
    }
}
function selectMonthUp(monthLimit) {
    if (month < monthLimit) {
        month += 1;
        document.getElementById('month').innerHTML = month;
        returnDate();
    }
}

function selectMonthDown(lowerLimit) {
    if (month > lowerLimit) {
        month -= 1;
        document.getElementById('month').innerHTML = month;
        returnDate();
    }
}
function selectYearUp(yearStart) {
    if (year < yearStart) {
        year += 1;
        document.getElementById('year').innerHTML = year;
        returnDate();
    }
}

function selectYearDown(yearEnd) {
    if (year > yearEnd) {
        year -= 1;
        document.getElementById('year').innerHTML = year;
        returnDate();
    }
}

buildApp('day', lowerLimit, dayLimit, selectDayUp, selectDayDown, '1');
buildApp('month', lowerLimit, monthLimit, selectMonthUp, selectMonthDown, '1');
buildApp('year', lowerLimit, yearStart, selectYearUp, selectYearDown, '2000');
returnDate

returnDate();
function returnDate () {
    document.getElementById('return').innerHTML = /*HTML*/`
    <div style="display: flex; flex-direction: column;align-items: flex-start;">
    ${day}.${month}.${year}
    </div>
    `;

}