
  document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const resultsContainer = document.getElementById('results');
    const allProducts = document.querySelectorAll('.product-list .card');

    searchBar.addEventListener('input', function () {
      const searchTerm = searchBar.value.trim().toLowerCase();
      resultsContainer.innerHTML = '';

      allProducts.forEach(function (product) {
        const title = product.querySelector('.card-title').textContent.trim().toLowerCase();
        if (title.includes(searchTerm)) {
          resultsContainer.appendChild(product.closest('.carousel-item').cloneNode(true));
        }
      });

      if (resultsContainer.innerHTML === '') {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado</p>';
      }
    });
  });

