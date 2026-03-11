console.log(window.location.href)

const titulo = document.getElementById('titulo-site')
const saudacao = document.querySelector('#boas-vindas')

const fotoPrato1 = document.querySelector('#foto-destaque')

const cardLasanha = document.querySelector('#card-lasanha')

const agora = new Date()
const hora = agora.getHours()

if (hora >= 1 && hora <12){
    saudacao.textContent = "Bom dia"
} else if (hora >= 12 && hora < 18){
    saudacao.textContent = "Boa tarde"
} else if (hora >= 18 && hora <= 24){
    saudacao.textContent = "Boa noite"
} else {
    saudacao.textContent = "Hora do seu computador está com erro"
}

fotoPrato1.alt = "Destaque do dia: Lasanha à Bolonhesa"



cardLasanha.classList.add('em-promocao')

titulo.style.color = "#ffa600"

//---aula 06---//

const card = document.querySelector('.card');

// ONDE: Efeito visual de hover profissional
card.addEventListener('mouseover', () => {
// Mudando o estilo cru (Aula 5) ao entrar com o mouse
card.style.backgroundColor = "#fdf2e9";
});

card.addEventListener('mouseout', () => {
// Voltando ao normal ao sair com o mouse
card.style.backgroundColor = "white";
});

const inputNome = document.querySelector('#campo-nome');
// ONDE: Pegar o valor a cada letra digitada
inputNome.addEventListener('keyup', () => {
// COMO: O .value (Aula 5) captura o texto atual após a tecla subir
let texto = inputNome.value;
console.log("O usuário está digitando: " + texto);
});

const bt = document.querySelector('#qtd-lasanha');

const inputQtdLasanha = document.querySelector('#qtd-lasanha')

const textoPreco = document.querySelector('#preco-lasanha')

if(inputQtdLasanha && textoPreco){
    inputQtdLasanha.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total = Number(inputQtdLasanha.value) * precoUnitario
        textoPreco.textContent = `R$ ${total.toFixed(2)}`

        textoPreco.style.color = total > 150 ? "#ff0000 : #ffff01"
    })
}