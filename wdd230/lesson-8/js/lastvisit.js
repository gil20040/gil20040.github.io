function relativeTime() {

//get last visited date and todays date
let last = localStorage.getItem('lastVisit');
let now = Date.now();
// console.log(last);
// console.log(now);

//do calculations for one day rounding down to nearest whole day
let oneDay = 1000 * 60 * 60 * 24;
let timeBetween = (now - last) / oneDay;
let roundedTime = Math.floor (parseInt(timeBetween));
// console.log(oneDay);
// console.log(timeBetween);
// console.log(roundedTime);

//logic to handle different messages when last visited
let visited = ""

if (last == null) {
    //put this in to account for nulls when never visited before
    visited = "Never"
} else if (roundedTime < 1) {
    visited = "Within the last day";
} else if ( roundedTime == 1) {
    visited = "1 day ago"
} else {
    visited = roundedTime + " days ago"
}
// console.log(visited);
document.getElementById('lastTime').innerHTML = visited;
localStorage.setItem('lastVisit', now);
}
window.onload = relativeTime;


