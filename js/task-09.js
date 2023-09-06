function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBody = document.body;
const changeColorBtn = document.querySelector(".change-color");
const visibleColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  colorBody.style.backgroundColor = newColor;
  visibleColor.textContent = newColor;
});
