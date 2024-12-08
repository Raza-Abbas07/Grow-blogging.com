function searchPosts() {
  const searchBox = document.getElementById('searchBox');
  const articles = document.querySelectorAll('.blog-posts article');

  const searchText = searchBox.value.toLowerCase();

  articles.forEach(article => {
    const title = article.querySelector('h3').textContent.toLowerCase();
    const content = article.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchText) || content.includes(searchText)) {
      article.style.display = '';
    } else {
      article.style.display = 'none';
    }
  });
}