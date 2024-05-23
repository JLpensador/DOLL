function alternarProduto(id) {
  const estadoAtual = localStorage.getItem("produto_" + id);
  if (estadoAtual === "pegado") {
      localStorage.removeItem("produto_" + id);
      return "Pegar";
  } else {
      localStorage.setItem("produto_" + id, "pegado");
      return "Devolver";
  }
}

function atualizarBotao(id) {
  const botao = document.getElementById("Botao_" + id);
  const estadoAtual = localStorage.getItem("produto_" + id);
  if (estadoAtual === "pegado") {
      botao.textContent = "Devolver";
  } else {
      botao.textContent = "Pegar";
  }
}

function cliqueBotao(id) {
  const botao = document.getElementById("Botao_" + id);
  botao.addEventListener("click", function () {
      alternarProduto(id);
      atualizarBotao(id);
  });
}

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
                  <button id="Botao_${productId}">Pegar</button>
              </div>
          `;

          productListContainer.appendChild(productItem);
          cliqueBotao(productId);
          atualizarBotao(productId);
      });
  } else {
      productListContainer.innerHTML = "<p>Nenhum produto disponível!</p>";
  }
}

const coluna1 = [
  {
      name: "Coelhadas Extraterrestres",
      href: "#",
      description: "Quadrinho da Turma da Mônica",
      imageUrl: "src/image/coelhadasExtras.png",
      isTaken: false,
  },
  {
      name: "Cuidado com apagão",
      href: "#",
      description: "Quadrinho da Turma da Mônica",
      imageUrl: "src/image/CuidadoApagão.png",
      isTaken: false,
  },
  {
      name: "Cebolinha Indígena",
      href: "#",
      description: "Quadrinho da Turma da Mônica",
      imageUrl: "src/image/cebolinhaIndigina.png",
      isTaken: false,
  },
  {
      name: "Produto 3",
      href: "#",
      description: "Quadrinho da Turma da Mônica",
      imageUrl: "src/image/CuidadoApagão.png",
      isTaken: false,
  }
];

const coluna2 = [
  {
      name: "Produto",
      href: "caminho/para/produtos",
      description: "",
      imageUrl: "caminho/para/imagem4.jpg",
      isTaken: false,
  },
  {
      name: "Produto 5",
      href: "caminho/para/produtos",
      description: "Descrição do Produto 5",
      imageUrl: "caminho/para/imagem5.jpg",
      isTaken: false,
  },
];

showProductList(coluna1, "product-list1");
showProductList(coluna2, "product-list2");