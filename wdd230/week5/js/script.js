function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function siteDate() {
const datefield = document.querySelector("#date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-us", { dateStyle: "full"}).format (now);
datefield.textContent = fulldate;
}
window.onload = siteDate;

