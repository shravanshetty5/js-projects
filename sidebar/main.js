const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("DOMContentLoaded", () => {
    sidebarToggle.addEventListener("click", (ev) => {
        ev.preventDefault();
        sidebar.classList.toggle("show-sidebar")
    });
    
    closeBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        sidebar.classList.remove("show-sidebar");
    });
});