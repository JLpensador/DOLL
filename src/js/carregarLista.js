import { alternarProduto, atualizarBotão, cliqueBotão } from "./estoque.js";

function showProductList(products, containerId) {
  const productListContainer = document.getElementById(containerId);

  if (products.length > 0) {
    products.forEach((product, index) => {
      const productId = containerId + "_" + (index + 1);
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      productItem.innerHTML = `
        <div class="product-card">
          <h1>${product.name}</h1>
          <a href="${product.href}" style="text-decoration: none;">
            <img src="${product.imageUrl}" alt="${product.name}">
            <div id="produto_${productId}">
              <p>${product.description}</p>
            </div>
          </a>
          <button id="Botão_${productId}">Pegar</button>
        </div>
      `;

      productListContainer.appendChild(productItem);
      cliqueBotão(productId);
      atualizarBotão(productId);
    });
  } else {
    productListContainer.innerHTML = "<p>Nenhum produto disponível!</p>";
  }
}

function loadData(jsonFile, containerId) {
  fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
      showProductList(data, containerId);
    })
    .catch((error) => console.error("Erro ao carregar os dados:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/quadrinhos/quadrinhos1.json", "quadrinhos1");
  loadData("src/data/quadrinhos/quadrinhos2.json", "quadrinhos2");
  loadData("src/data/quadrinhos/quadrinhos3.json", "quadrinhos3");
  loadData("src/data/quadrinhos/quadrinhos4.json", "quadrinhos4");
  loadData("src/data/quadrinhos/quadrinhos5.json", "quadrinhos5");
  loadData("src/data/quadrinhos/quadrinhos6.json", "quadrinhos6");
});
