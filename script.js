// toggle navbar menu
function toggleMenu() {
    var menu = document.getElementById("menu")
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function closeMenu() {
    var menu = document.getElementById("menu")
    menu.style.display = "none";
}