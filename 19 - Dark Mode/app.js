const articlesContainer = document.querySelector(".articles");
const toggleBtn = document.querySelector(".btn");

toggleBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-theme");
});

const articleData = articles.map((article) => {
  const { title, date, length, snippet } = article;
  const formatDate = moment(date).format("MMMM Do, YYYY");

  return `<article class="post">
  <h2>${title}</h2>
  <div class="post-info">
    <span>${formatDate}</span>
    <span>${length} min read</span>
  </div>
  <p>
    ${snippet}
  </p>
  </article>`;
});

articlesContainer.innerHTML = articleData;
