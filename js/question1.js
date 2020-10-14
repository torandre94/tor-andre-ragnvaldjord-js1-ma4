const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

function validateForm() {
    event.preventDefault();

    if (lastName.value.trim().length > 4) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);
