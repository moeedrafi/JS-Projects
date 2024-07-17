const productsContainer = document.querySelector(".products-container");
const companiesDOM = document.querySelector(".companies");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".input-form");
let filteredProducts = [...products];

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
            <img
              src="${image}"
              class="product-img img"
              alt=""
            />
            <footer>
              <h5 class="product-name">${title}</h5>
              <span class="product-price">${price}</span>
            </footer>
          </article>`;
    })
    .join("");
};

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join("");
};

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;

  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });

  displayProducts();
});

displayProducts();
displayButtons();

companiesDOM.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    displayProducts();
  }
});
