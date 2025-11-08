const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector(".close-button");

function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", false);
}

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", true);
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});