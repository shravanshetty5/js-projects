const openBtn = document.querySelector(".open-modal");
const closeBtn = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    modalOverlay.classList.add("modal-opened");
});

closeBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    modalOverlay.classList.remove("modal-opened");
});
