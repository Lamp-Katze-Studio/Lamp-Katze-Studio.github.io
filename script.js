function checkMenuScroll() {
    if (window.innerWidth < 576) return;
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

document.addEventListener("DOMContentLoaded", function() {
    var menuToggleButton  = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");

    menuToggleButton.addEventListener("click", function(event) {
        event.stopPropagation();
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuToggleButton.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    menu.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    window.addEventListener("scroll", function() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
});