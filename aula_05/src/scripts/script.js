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

const agora = new Date()
const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "Bom almoço" : "Boa janta"

const nomeCompleto = document.querySelector('#nome')

nomeCompleto.innerHTML = "Lívia Hermano"

const foto = document.querySelector('#foto-destaque')

const caminhoAtual = foto.getAttribute('src')

// foto.setAttribute('src', 'src/images/esgotado.jpg')
// foto.setAttribute('alt', 'Prato esgotado')