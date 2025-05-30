document.addEventListener('DOMContentLoaded', function() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const tbody = document.getElementById('carrinho-itens');

  function formatarPreco(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
  }

  function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  function atualizarCarrinho() {
    tbody.innerHTML = '';

    let subtotal = 0;

    carrinho.forEach((item, index) => {
      // garantir que preco é número
      let precoNum = parseFloat(item.preco);
      if (isNaN(precoNum)) precoNum = 0;

      let totalItem = precoNum * (item.quantidade || 1);
      subtotal += totalItem;

      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>
          <div class="product">
            <img src="${item.imagem}" alt="${item.nome}" />
            <div>
              <div class="name">${item.nome}</div>
              <div class="category">${item.descricao || ''}</div>
            </div>
          </div>
        </td>
        <td>${formatarPreco(precoNum)}</td>
        <td>
          <div class="qty">
            <button class="decrement" data-index="${index}">-</button>
            <span>${item.quantidade || 1}</span>
            <button class="increment" data-index="${index}">+</button>
          </div>
        </td>
        <td>${formatarPreco(totalItem)}</td>
        <td><button class="remove" data-index="${index}">×</button></td>
      `;

      tbody.appendChild(tr);
    });

    // Atualiza o resumo de compra
    document.querySelector('.formação > div:nth-child(1) span:last-child').textContent = formatarPreco(subtotal);
    document.querySelector('footer span:last-child').textContent = formatarPreco(subtotal);
  }

  // Eventos de click para os botões usando delegação de eventos
  tbody.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains('increment')) {
      carrinho[index].quantidade = (carrinho[index].quantidade || 1) + 1;
      salvarCarrinho();
      atualizarCarrinho();
    }
    if (e.target.classList.contains('decrement')) {
      carrinho[index].quantidade = (carrinho[index].quantidade || 1) - 1;
      if (carrinho[index].quantidade < 1) {
        carrinho.splice(index, 1);
      }
      salvarCarrinho();
      atualizarCarrinho();
    }
    if (e.target.classList.contains('remove')) {
      carrinho.splice(index, 1);
      salvarCarrinho();
      atualizarCarrinho();
    }
  });

  atualizarCarrinho();
});
