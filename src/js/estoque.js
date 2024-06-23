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
    Botão.textContent = "Esgotado";
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

export { alternarProduto, atualizarBotão, cliqueBotão };
