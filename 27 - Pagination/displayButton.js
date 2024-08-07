const displayButton = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      pageIndex === activeIndex ? "active-btn" : null
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });

  btns.push(`<button class="next-btn">Next</button>`);
  btns.unshift(`<button class="prev-btn">Prev</button>`);

  container.innerHTML = btns.join("");
};

export default displayButton;
