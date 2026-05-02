const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stops page refresh

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  let valid = true;

  // RESET ERRORS
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // VALIDATION RULES

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty";
    valid = false;
  }

  // SUCCESS
  if (valid) {
    successMessage.textContent = "Message sent successfully";
    form.reset();
  }
});
