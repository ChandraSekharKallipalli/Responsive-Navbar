var navEl = document.getElementById("navHidden");
var menuIconEl = document.getElementById("menuIcon");
var crossIconEl = document.getElementById("crossIcon");


function showNavBar() {
    if (navEl.classList.contains("navHidden")) {
        crossIconEl.classList.remove("fa-bars");
        crossIconEl.classList.add("fa-xmark");
        navEl.classList.toggle("navHidden");
    } else {
        crossIconEl.classList.add("fa-bars");
        crossIconEl.classList.remove("fa-xmark");
        navEl.classList.toggle("navHidden");
    }

}
crossIconEl.addEventListener("click", showNavBar);