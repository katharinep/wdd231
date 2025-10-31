function submitForm(event) {
    const name = this.name;
    const email = this.email;
    console.log("Button clicked.");
    let error = "";
    if (name === "") {
        error += "Name is required.";
    }
    if (email === "") {
        error += "Email is required.";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.";
    }

    if (error) {
        event.preventDefault();
        document.getElementById("form-error").textContent = error;
    }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.getElementById("contact-form").addEventListener("submit", submitForm);