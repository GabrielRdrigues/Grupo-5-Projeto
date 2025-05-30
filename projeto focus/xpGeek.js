document.addEventListener("DOMContentLoaded", function () 
{
    const botoes = document.querySelectorAll("#botoes button"); // Pega todos os botoes (filtros da tela)
    const elementos = document.querySelectorAll(".elemento"); // Pega todos os elementos (produtos)

    botoes.forEach(function (botao) 
    {
        botao.addEventListener("click", function () 
        {
            const filtro = botao.textContent;

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
