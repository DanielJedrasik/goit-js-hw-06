let counterValue = 0;

const value = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

function changedValue() {
  value.textContent = counterValue;
}

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  changedValue();
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  changedValue();
});
// changedValue();
