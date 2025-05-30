  function atualizarContadorCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  document.getElementById('quantidade-carrinho').textContent = totalItens;
}

document.addEventListener('DOMContentLoaded', () => {
  atualizarContadorCarrinho();

  // Seleciona todos os botões com a classe 'add-carrinho'
    const botoes = document.querySelectorAll('.add-carrinho');

    botoes.forEach(botao => {
    botao.addEventListener('click', function(e) {
        e.preventDefault();

      const nome = this.dataset.nome;
      const preco = parseFloat(this.dataset.preco);
      const imagem = this.dataset.imagem;
      const descricao = this.closest('.product').querySelector('.descricao_product')?.innerText || '';

      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

      let produtoExistente = carrinho.find(item => item.nome === nome);

      if (produtoExistente) {
        produtoExistente.quantidade += 1;
      } else {
        carrinho.push({ nome, preco, imagem, descricao, quantidade: 1 });
      }

      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      atualizarContadorCarrinho();
    });
});
});
