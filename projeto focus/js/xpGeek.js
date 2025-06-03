document.addEventListener("DOMContentLoaded", function () 
{
    const botoes = document.querySelectorAll("#botoes button"); // Pega todos os botoes (filtros da tela)
    const elementos = document.querySelectorAll(".elemento"); // Pega todos os elementos (produtos)

    //Adiciona a classe ativo ao INICIO quando inicia.
    botoes[0].classList.add("ativo");

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
        });
    });
});

var typed = new Typed(".auto-type", {
    strings: ["XP GEEK TEM GAMES", "XP GEEK TEM QUADRINHOS", "XP GEEK TEM FILMES", "XP GEEK TEM CULTURA"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})