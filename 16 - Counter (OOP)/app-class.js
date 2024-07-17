function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;

    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");

    this.valueDOM.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.increaseBtn.addEventListener("click", this.increase);

    this.decrease = this.decrease.bind(this);
    this.decreaseBtn.addEventListener("click", this.decrease);

    this.reset = this.reset.bind(this);
    this.resetBtn.addEventListener("click", this.reset);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
