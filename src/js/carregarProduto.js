function showProductDetails(productId) {
  const products = [
    {
      id: 1,
      name: "Produto 1",
      description: "Descrição do Produto 1",
      imageUrl: "caminho/para/imagem1.jpg",
      isTaken: false,
    },
    {
      id: 2,
      name: "Produto 2",
      description: "Descrição do Produto 2",
      imageUrl: "caminho/para/imagem2.jpg",
      isTaken: true,
    },
  ];

  const product = products.find((p) => p.id === productId);

  if (product) {
    const status = product.isTaken ? "Pego" : "Não pego";
    const productDetailsContainer = document.getElementById("product-details");

    const productHTML = `
          <h2>${product.name}</h2>
          <img src="${product.imageUrl}" alt="${product.name}">
          <p>${product.description}</p>
          <p>Status: ${status}</p>
      `;

    productDetailsContainer.innerHTML = productHTML;
  } else {
    const productDetailsContainer = document.getElementById("product-details");
    productDetailsContainer.innerHTML = "<p>Produto não encontrado!</p>";
  }
}

const productId = 1;
showProductDetails(productId);
