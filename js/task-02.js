const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});
