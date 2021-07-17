function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function gridView() {

}
function listView() {
    var f = document.getElementsByClassName("food")
    var l = document.getElementsByClassName("foodlist")

    if (l.style.display === "none") {
        l.style.display = "block";
        f.style.display = "none";
    }
}




/*

function gridView() {
    document.getElementsByClassName('foodlist-section').style.display = 'none';
    document.getElementsByClassName('food section').style.display = 'block';
}
function listView() {
    document.getElementsByClassName('foodlist section').style.display = 'block';
    document.getElementsByClassName('food section').style.display = 'none';
}
*/