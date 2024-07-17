import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

import { store, setupStore } from "./src/store.js";
import fetchProducts from "./src/fetchProducts.js";
import displayProducts from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

const init = async () => {
  const products = await fetchProducts();

  if (products) {
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    displayProducts(featured, getElement(".featured-center"));
  }
};

window.addEventListener("DOMContentLoaded", init);
