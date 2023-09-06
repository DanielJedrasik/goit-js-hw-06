const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email;
  const password = form.elements.password;

  if (password.value === "" || email.value === "") {
    console.log("Form fields must not be empty !");
  } else {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    console.log(loginData);
  }
  form.reset();
}
