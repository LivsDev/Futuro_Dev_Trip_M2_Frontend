const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

function renderizarProdutos(produtos) {
    const productList = document.getElementById('product-list');
    
    produtos.forEach(produto => {
        const productItem = document.createElement('li');
        productItem.className = 'product-item';
        
        const productName = document.createElement('div');
        productName.className = 'product-name';
        productName.textContent = produto.nome;
        
        const productPrice = document.createElement('div');
        productPrice.className = 'product-price';
        productPrice.textContent = `R$ ${produto.valor.toFixed(2)}`;
        
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        
        productList.appendChild(productItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtos);
});
