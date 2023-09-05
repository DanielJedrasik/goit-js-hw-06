const categoryList = document.querySelector("#categories");
const categoryItems = categoryList.querySelectorAll(".item");
const numberOfItems = categoryItems.length;
console.log(`Number of categories: ${numberOfItems}`);

categoryItems.forEach((list) => {
  const listItemName = list.querySelector("h2").textContent;
  const listItemsNumber = list.querySelectorAll("li").length;
  console.log(`Category: ${listItemName}`);
  console.log(`Elements: ${listItemsNumber}`);
});
