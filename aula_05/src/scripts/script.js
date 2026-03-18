const tituloNhoque = document.querySelector('#card-nhoque h3')

//const botoesCompra = document.querySelector('.bt-pedido')
const botoesCompra = document.querySelectorAll('.bt-pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')


console.log("1- Mostrando o título Nhoque pelo ID", tituloNhoque)
console.log("2- Quantidade de botões de pedido:", botoesCompra.length)

console.log("3- A terceira posição da class .card", terceiroCard)

const imgLasanha = document.querySelector('img[alt="Lasanha Tec"]')

if(tituloNhoque){
    console.log("título capturado: ", tituloNhoque.innerText)
}

const saudacao = document.querySelector('#boas-vindas')

const imagem_card_um = document.querySelector('#foto-destaque')

const agora = new Date()
const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "Bom almoço" : "Boa janta"

const nomeCompleto = document.querySelector('#nome')

nomeCompleto.innerHTML = "Lívia Hermano"

const foto = document.querySelector('#foto-destaque')

const caminhoAtual = foto.getAttribute('src')


foto.setAttribute('src', 'src/images/esgotado.jpg')
foto.setAttribute('alt', 'Prato esgotado')

/////
// const saudacao = document.querySelector("#boas-vindas");
const hora2 = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora2 < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2. CÁLCULO DE PREÇO DINÂMICO (Aula 6)
// const inputQtd = document.querySelector("#qtd-lasanha");
// const precoTexto = document.querySelector("#preco-lasanha");

// if (inputQtd && precoTexto) {
//     inputQtd.addEventListener("input", () => {
//         const precoUnitario = 45.0;
//         const total = Number(inputQtd.value) * precoUnitario;
//         precoTexto.textContent = `R$ ${total.toFixed(2)}`;

//         // Mudança sutil de cor se o valor for alto (Feedback Visual Aula 6)
//         precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";
//     });
// }

// 3. EVENTO DE CLIQUE PARA TODOS OS BOTÕES (Mobile e Desktop)
// Usamos querySelectorAll para garantir que todos os botões da página funcionem.
const botoesPedido = document.querySelectorAll(".btn-pedido");

botoesPedido.forEach((botao) => {
    // Usamos 'click' que é universal para mouse e touch
    botao.addEventListener("click", (event) => {
        // Evita qualquer comportamento padrão do navegador
        event.preventDefault();

        const nomePrato = botao.parentElement.querySelector("h3").textContent;
        alert(
            `🥘 Sucesso! Seu pedido de "${nomePrato}" foi enviado para a cozinha.`,
        );

        // Efeito visual no botão após clique
        botao.textContent = "✓ Pedido Enviado";
        botao.style.backgroundColor = "#27ae60"; // Verde Sucesso
        botao.disabled = true;
    });
});

const massas = document.querySelector("#secao-massas")
massas.addEventListener('click', (event) => {
    const clicado = event.target 
    if (clicado.classList.contains('btn-pedido')) {
        console.log("Você clicou em um botão de pedido massa...")
    }
})