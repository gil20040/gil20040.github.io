function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function closealerts() {
    document.getElementById("alerts").style.display = "none";
}
function gridView() {
    document.getElementsByClassName("food")[0].style.display = "grid";
    document.getElementsByClassName("foodi")[0].style.display = "inline";
    document.getElementsByClassName("foodi")[1].style.display = "inline";
    document.getElementsByClassName("foodi")[2].style.display = "inline";
    document.getElementsByClassName("foodi")[3].style.display = "inline";
    document.getElementsByClassName("foodi")[4].style.display = "inline";
    document.getElementsByClassName("foodi")[5].style.display = "inline";
    document.getElementsByClassName("foodi")[6].style.display = "inline";
    document.getElementsByClassName("foodi")[7].style.display = "inline";
    document.getElementsByClassName("foodi")[8].style.display = "inline";
}
function listView() {
    document.getElementsByClassName("food")[0].style.display = "block";
    document.getElementsByClassName("foodi")[0].style.display = "none";
    document.getElementsByClassName("foodi")[1].style.display = "none";
    document.getElementsByClassName("foodi")[2].style.display = "none";
    document.getElementsByClassName("foodi")[3].style.display = "none";
    document.getElementsByClassName("foodi")[4].style.display = "none";
    document.getElementsByClassName("foodi")[5].style.display = "none";
    document.getElementsByClassName("foodi")[6].style.display = "none";
    document.getElementsByClassName("foodi")[7].style.display = "none";
    document.getElementsByClassName("foodi")[8].style.display = "none";
}
window.onload = function lastmod() {
    var getdate = document.lastModified;
    var localdate = getdate.split(' ')[0];
    console.log(localdate);
    document.getElementById('lastmoddt').textContent = 'Page Last Updated' + ' ' + localdate;
}