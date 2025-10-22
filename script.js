function showTime() {
      const now = Date.now(); // gives time in milliseconds
      document.getElementById("time").textContent = now;
    }
    showTime();
    setInterval(showTime, 1); // update every 1 millisecond


    // CONTACT FORM VALIDATION
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success");

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // get error fields
    const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
    };

    let valid = true;
    successMessage.textContent = "";

    // clear previous errors
    Object.values(errors).forEach((err) => (err.textContent = ""));

    // validation rules
    if (name.value.trim() === "") {
    errors.name.textContent = "Full name is required.";
    valid = false;
    }

    if (email.value.trim() === "") {
    errors.email.textContent = "Email is required.";
    valid = false;
    } else if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email.value.trim())) {
    errors.email.textContent = "Please enter a valid email address.";
    valid = false;
    }

    if (subject.value.trim() === "") {
    errors.subject.textContent = "Subject is required.";
    valid = false;
    }

    if (message.value.trim() === "") {
    errors.message.textContent = "Message is required.";
    valid = false;
    } else if (message.value.trim().length < 10) {
    errors.message.textContent = "Message must be at least 10 characters.";
    valid = false;
    }

    if (valid) {
    successMessage.textContent = "Message sent successfully!";
    form.reset();
    }
});
