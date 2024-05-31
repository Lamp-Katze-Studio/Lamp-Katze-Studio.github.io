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

function checkMenuScroll() {
    var menu = document.getElementById("menu");
    menu.style.opacity = 1 - window.scrollY/500;

    if (menu.style.opacity <= 0)
    {
        document.getElementById("back-to-top").style.display = "block";
        menu.style.pointerEvents = 'none';
    }
    else
    {
        document.getElementById("back-to-top").style.display = "none";
        menu.style.pointerEvents = 'all';
    }
}

window.onscroll = checkMenuScroll;
window.onload = checkMenuScroll;