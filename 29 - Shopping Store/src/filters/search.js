import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");

  form.addEventListener("keyup", () => {
    const value = nameInput.value;

    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });

      displayProducts(newStore, getElement(".products-container"), true);
      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `
            <h3 class="filter-error">
                sorry, no products matched your search
            </h3>`;
      }
    } else {
      displayProducts(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
