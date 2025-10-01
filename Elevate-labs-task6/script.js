document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop default form submission

  let isValid = true;

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Invalid email format.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    successMessage.textContent = "Form submitted successfully ✅";

    // RESET the form
    document.getElementById("contactForm").reset();

    // Optional: clear success message after 3 seconds
    setTimeout(() => {
      successMessage.textContent = "";
    }, 3000);
  }
});
