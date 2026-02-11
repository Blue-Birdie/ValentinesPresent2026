// Elements
const noBtn = document.getElementById("noBtn");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalYesBtn = document.getElementById("modalYesBtn");
const modalNoBtn = document.getElementById("modalNoBtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Open / close helpers
function openModal() {
    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // (Optional) reset the Yes button label each time you close:
    modalYesBtn.textContent = "Yes";
}

// Open modal
noBtn.addEventListener("click", openModal);

// Change left (green) button text when pressed
modalYesBtn.addEventListener("click", () => {
    // Template behavior: toggle text
    if (modalYesBtn.textContent.length < 10) {
        modalYesBtn.textContent = "Are you sure?"
    } else if (modalYesBtn.textContent.length < 80) {
        modalYesBtn.textContent = (() => {
            const words = modalYesBtn.textContent.split(" ");
            words.splice(1, 0, "really"); // insert after first word
            return words.join(" ");
        })();
    } else {
        modalBackdrop.textContent = "Aw okay 😭"
    }
});

// Close modal with red button or X
modalNoBtn.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

// Close modal if user clicks outside the modal content
modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
});

// Close modal on Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
        closeModal();
    }
});