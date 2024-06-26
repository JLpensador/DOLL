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
  loadData("src/data/educativo/educativo1.json", "educativo1");
  loadData("src/data/educativo/educativo2.json", "educativo2");
});

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/ficçao/ficçao1.json", "ficção1");
  loadData("src/data/ficçao/ficçao2.json", "ficção2");
  loadData("src/data/ficçao/ficçao3.json", "ficção3");
  loadData("src/data/ficçao/ficçao4.json", "ficção4");
});

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/quadrinhos/quadrinhos1.json", "quadrinhos1");
  loadData("src/data/quadrinhos/quadrinhos2.json", "quadrinhos2");
  loadData("src/data/quadrinhos/quadrinhos3.json", "quadrinhos3");
  loadData("src/data/quadrinhos/quadrinhos4.json", "quadrinhos4");
  loadData("src/data/quadrinhos/quadrinhos5.json", "quadrinhos5");
  loadData("src/data/quadrinhos/quadrinhos6.json", "quadrinhos6");
  loadData("src/data/quadrinhos/quadrinhos7.json", "quadrinhos7");
  loadData("src/data/quadrinhos/quadrinhos8.json", "quadrinhos8");
});

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/cosmeticos/cosmeticos1.json", "cosmetico1");
  loadData("src/data/cosmeticos/cosmeticos2.json", "cosmetico2");
});

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/decoracao/decoracao1.json", "decoração1");
});

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/masculino/masculino1.json", "masculino1");
  loadData("src/data/masculino/masculino2.json", "masculino2");
});

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/feminino/feminino1.json", "feminino1");
  loadData("src/data/feminino/feminino2.json", "feminino2");
});

document.addEventListener("DOMContentLoaded", () => {
  loadData("src/data/acessorios/acessorios1.json", "acessórios1");
});