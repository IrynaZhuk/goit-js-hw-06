console.log("Number of categories:", document.querySelector("#categories").children.length);

const categoriesEl = document.querySelectorAll("li.item"); 

categoriesEl.forEach(categoryEl => {
    console.log(`Category: ${categoryEl.firstElementChild.textContent}`);

    console.log(`Elements: ${categoryEl.lastElementChild.children.length}`);
})