// Elements
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const areYouSure_ModalBackdrop = document.getElementById("modalBackdrop-1");
const areYouSure_Title = document.getElementById("modalTitle-1");
const yay_ModalBackdrop = document.getElementById("modalBackdrop-2");
const modalYesBtn = document.getElementById("modalYesBtn");
const modalNoBtn = document.getElementById("modalNoBtn");
const modalOkayBtn = document.getElementById("modalOkayBtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCloseBtn2 = document.getElementById("modalCloseBtn2");

// Open / close helpers
function openModal() {
    areYouSure_ModalBackdrop.classList.add("is-open");
    areYouSure_ModalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal() {
    areYouSure_ModalBackdrop.classList.remove("is-open");
    areYouSure_ModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // (Optional) reset the Yes button label each time you close:
    modalYesBtn.textContent = "Yes";
}

function openModal2() {
    yay_ModalBackdrop.classList.add("is-open");
    yay_ModalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal2() {
    yay_ModalBackdrop.classList.remove("is-open");
    yay_ModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

// Open modal
noBtn.addEventListener("click", openModal);
yesBtn.addEventListener("click", openModal2);

// Change left (green) button text when pressed
modalYesBtn.addEventListener("click", () => {
    // Template behavior: toggle text
    areYouSure_Title.textContent = (() => {
        const words = areYouSure_Title.textContent.split(" ");
        words.splice(2, 0, "really"); // insert after first word
        return words.join(" ");
    })();
});

// Close modal with red button or X
modalNoBtn.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);
modalOkayBtn.addEventListener("click", closeModal2);
modalCloseBtn2.addEventListener("click", closeModal2);

// Close modal if user clicks outside the modal content
areYouSure_ModalBackdrop.addEventListener("click", (e) => {
    if (e.target === areYouSure_ModalBackdrop) closeModal();
});

// Close modal on Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && areYouSure_ModalBackdrop.classList.contains("is-open")) {
        closeModal();
    }
});