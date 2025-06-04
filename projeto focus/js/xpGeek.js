document.addEventListener("DOMContentLoaded", function () 
{
    const botoes = document.querySelectorAll("#botoes button"); // Pega todos os botoes (filtros da tela)
    const elementos = document.querySelectorAll(".elemento"); // Pega todos os elementos (produtos)

    //Verifica se a pagina atual é a de produtos ou a main
    const paginaproduto = document.body.dataset.page === "viewprodutos";

    if(!paginaproduto){
        //Adiciona a classe ativo ao INICIO quando inicia.
        botoes[0].classList.add("ativo");
    }

    botoes.forEach(function (botao) 
    {
        botao.addEventListener("click", function () 
        {
            const filtro = botao.textContent;
            
            //Inicio Estilizacao

            //Remove o ativo de todos os botoes
            botoes.forEach(btn => btn.classList.remove("ativo"));

            //Adiciona a classe ativo somente para o elemento clicado
            botao.classList.add("ativo");

            //Fim estilizacao
            
            //Verifica se esta na pagina de vizualizao de produto e troca de pagina, indo para a pagina clicada
            if(paginaproduto){
                //armazena o filtro clicado
                localStorage.setItem("filtroSelecionado",filtro);
                window.location.href = `xpGeek.html`;
            }
            else{
                aplicarFiltro(filtro);
            }
        });
    });       
    
    //Carrega o Filtro armazenado
    const filtroSalvo = localStorage.getItem("filtroSelecionado");
    if(!paginaproduto && filtroSalvo){
        //Encontra botao que texto === filtroSalvo e realiza o clique
        const botaoFiltrado = Array.from(botoes).find(btn => btn.textContent === filtroSalvo);
        if(botaoFiltrado){
            botaoFiltrado.click();
        }
        localStorage.removeItem("filtroSelecionado");
    }
    
    //Refatoracao dos filtros do gabriel para uma funcao para que seja possivel reutilizar
    function aplicarFiltro(filtro){
        elementos.forEach(function (elemento) 
        {
            if (filtro === "Inicio") 
            {
                elemento.style.display = "flex";
            } 
            else 
            {
                const tipo = elemento.getAttribute("tipo");
                const filtroFormatado = filtro.replace(/\s/g, '');
                /* 
                    \s remove espaço, tab
                    o /g diz para fazer isso múltiplas vezes
                    estamos dando "replace" nos espaços pelo caracter ''
                    Isto aqui só serve pra tirar o espaço do "Action Figures"
                */
                elemento.style.display = tipo === filtroFormatado ? "flex" : "none";
                /*
                Se a variável "tipo" do elemento for igual ao botão clicado (representado pela variável
                filtroFormatado), iremos mostrar o elemento, isto é, seu style.display recebe "flex"; se não,
                recebe "none" e o elemento desaparece.
                */
            }
        });            
    }        
        
});

var typed = new Typed(".auto-type", {
    strings: ["XP GEEK TEM GAMES", "XP GEEK TEM QUADRINHOS", "XP GEEK TEM FILMES", "XP GEEK TEM CULTURA"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})