const categories = document.querySelectorAll("ul#categories > .item");
console.log(`Number of categories ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul li").length;
  console.log(`Category ${title}, Numder of categories ${itemCount} `);
});
