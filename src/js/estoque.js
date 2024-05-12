// Função para alternar entre Pegar e Devolver um produto
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

document.addEventListener('DOMContentLoaded', function() {
    const id = 1;
    cliqueBotão(id);
    atualizarBotão(id);
});
