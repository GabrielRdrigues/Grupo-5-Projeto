document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const id = parseInt(parametros.get("id"));
    
    const produto = lista_produtos.find(p => p.id === id);

    // Preenche imagens
    document.getElementById("produtoImagem").src = produto.imagem;
      
    const imagensSecundarias = document.querySelectorAll(".produtoImagemSecundaria");
    imagensSecundarias.forEach(img => img.src = produto.imagem);

    // Preenche nome
    document.getElementById("nomeProduto").textContent = produto.nome;
    
    // Preenche preco
    document.getElementById("preco").textContent = produto.preco;
    

    //Preenche descricao
    document.querySelector(".containerDescription p").textContent = produto.descricao;

    // Frete fixo 
    document.getElementById("frete").textContent = "Frete: R$15,00";
});