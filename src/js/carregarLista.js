function alternarProduto(id) {
    const estadoAtual = localStorage.getItem('produto_' + id);

    if (estadoAtual === 'pegado') {
        localStorage.removeItem('produto_' + id);
        return 'Pegar';
    } else {
        localStorage.setItem('produto_' + id, 'pegado');
        return 'Devolver';
    }
}

function atualizarBotão(id) {
    const Botão = document.getElementById('Botão_' + id);
    const estadoAtual = localStorage.getItem('produto_' + id);

    if (estadoAtual === 'pegado') {
        Botão.textContent = 'Devolver';
    } else {
        Botão.textContent = 'Pegar';
    }
}

function cliqueBotão(id) {
    const Botão = document.getElementById('Botão_' + id);
    Botão.addEventListener('click', function() {
        const novoEstado = alternarProduto(id);
        atualizarBotão(id);
    });
}

function showProductList(products) {
    const productListContainer = document.getElementById('product-list');

    if (products.length > 0) {
        productListContainer.innerHTML = '';

        products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productId = index + 1;

            productItem.innerHTML = `
                <h1>${product.name}</h1>
                <img src="${product.imageUrl}" alt="${product.name}">
                <div id="produto_${productId}">
                    <p>${product.description}</p>
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

const products = [
    {
        "name": "Produto 1",
        "description": "Descrição do Produto 1",
        "imageUrl": "caminho/para/imagem1.jpg",
        isTaken: false,
    },
    {
        "name": "Produto 2",
        "description": "Descrição do Produto 2",
        "imageUrl": "caminho/para/imagem2.jpg",
        isTaken: false,
    },
    {
        "name": "Produto 3",
        "description": "Descrição do Produto 3",
        "imageUrl": "caminho/para/imagem3.jpg",
        isTaken: false,
    }
];

showProductList(products);
