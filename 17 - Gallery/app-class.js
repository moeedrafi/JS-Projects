function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];

    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");

    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("img")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }

  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);

    this.modalImages.innerHTML = list
      .map((image) => {
        return `<img src="${image.src}" title="${image.title}" data-id="${
          image.dataset.id
        }" class="${
          selectedImage.dataset.id === image.dataset.id
            ? "modal-img selected"
            : "modal-img"
        }" />`;
      })
      .join("");

    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal.bind(this));
    this.nextBtn.addEventListener("click", this.nextImage.bind(this));
    this.prevBtn.addEventListener("click", this.prevImage.bind(this));
    this.modalImages.addEventListener("click", this.chooseImage.bind(this));
  }

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }

  closeModal() {
    this.modal.classList.remove("open");
  }

  nextImage() {
    const selected = this.modalImages.querySelector(".selected");
    const next = selected.nextElementSibling || this.modalImages.firstChild;

    selected.classList.remove("selected");
    next.classList.add("selected");

    this.setMainImage(next);
  }

  prevImage() {
    const selected = this.modalImages.querySelector(".selected");
    const prev = selected.previousElementSibling || this.modalImages.lastChild;

    selected.classList.remove("selected");
    prev.classList.add("selected");

    this.setMainImage(prev);
  }

  chooseImage(e) {
    if (e.target.classList.contains("modal-img")) {
      const selected = this.modalImages.querySelector(".selected");

      selected.classList.remove("selected");

      this.setMainImage(e.target);
      e.target.classList.add("selected");
    }
  }
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
