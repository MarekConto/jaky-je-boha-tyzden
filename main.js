
const semesterStart = new Date('2022-09-26');
semesterStart.setHours(0,0,0,0);
let now = new Date();
now.setHours(0,0,0,0);

function week() {
    let currentWeek = Math.round((now - semesterStart) / (7 * 24 * 60 * 60 * 1000));
    currentWeek = [0, 5, 6].includes(now.getDay()) ? currentWeek : currentWeek + 1;
    const element = document.getElementById("week");
    element.innerText = `${currentWeek}`;
}

function init() {
    if (now >= semesterStart) {
        week();
    } else {
        const element = document.getElementById("week");
        element.innerText = `See ya again on 20.09.2022!`;
        element.style.fontSize = '3em';
    }
}


init();
