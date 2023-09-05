const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const sixSymbols = parseInt(textInput.getAttribute("data-length"));
  const inputValue = textInput.value.trim();
  if (inputValue.length === sixSymbols) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
