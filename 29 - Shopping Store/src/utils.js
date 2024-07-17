const allProductsUrl = "https://www.course-api.com/javascript-store-products";
// temporary single product
// 'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  "https://www.course-api.com/javascript-store-single-product";

const getElement = (selection) => {
  const element = document.querySelector(selection);

  return element;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);

  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }

  return storageItem;
};

const setStorageItem = (name, item) => {
  return localStorage.setItem(name, JSON.stringify(item));
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));

  return formattedPrice;
};

export {
  getElement,
  allProductsUrl,
  singleProductUrl,
  getStorageItem,
  setStorageItem,
  formatPrice,
};
