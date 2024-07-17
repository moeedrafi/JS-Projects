import setDrink from "./setDrink.js";
import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);

  const section = displayDrinks(data);

  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
