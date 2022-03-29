const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".page-nav-links");


toggle.addEventListener("click", (ev) => {
    ev.preventDefault();
    menu.classList.toggle("show-links")
})