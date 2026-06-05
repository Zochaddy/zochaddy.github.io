const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");

const showMessage = function (text, isError) {
  formMessage.textContent = text;

  if (isError) {
    formMessage.style.color = "red";
  } else {
    formMessage.style.color = "green";
  }
};

const validateForm = function () {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
    showMessage("Please enter your name.", true);
    return false;
  }

  if (email === "") {
    showMessage("Please enter your email.", true);
    return false;
  }

  if (!email.includes("@")) {
    showMessage("Please enter a valid email address.", true);
    return false;
  }

  if (message === "") {
    showMessage("Please enter a message.", true);
    return false;
  }

  return true;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isValid = validateForm();

  if (isValid) {
    showMessage("Your message has been sent!", false);
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
