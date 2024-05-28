// productActions.js

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
  
  function atualizarBotão(id) {
    const Botão = document.getElementById("Botão_" + id);
    const estadoAtual = localStorage.getItem("produto_" + id);
    if (estadoAtual === "pegado") {
      Botão.textContent = "Devolver";
    } else {
      Botão.textContent = "Pegar";
    }
  }
  
  function cliqueBotão(id) {
    const Botão = document.getElementById("Botão_" + id);
    Botão.addEventListener("click", function () {
      alternarProduto(id);
      atualizarBotão(id);
    });
  }
  
  // Exportar as funções para serem usadas em outros arquivos
  export { alternarProduto, atualizarBotão, cliqueBotão };
  