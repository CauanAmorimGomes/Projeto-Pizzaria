const carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const totalCarrinho = document.getElementById("total-carrinho");
  const quantidadeItens = document.getElementById("quantidade-itens");

  let total = 0;

  carrinho.forEach(item => {
    total += item.preco;
  });

  quantidadeItens.textContent = carrinho.length;
  totalCarrinho.textContent = total.toFixed(2).replace(".", ",");
}