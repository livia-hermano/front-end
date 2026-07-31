

//1
const agora = document.querySelector('#status-oficina')
const data = new Date()
const hora = data.getHours()

if (hora <12){
    agora.textContent = "Pé na estrada, bom dia"
} else if (hora >=12 && hora <18){
    agora.textContent = "Tarde perfeita para um test-drive!"
} else if (hora >=18 && hora <6){
    agora.textContent = "Oficina fechada, boa noite!"
}


// 2

const banner = document.querySelector('#banner-esportivo')

banner.addEventListener('mouseover', (event) => {
    banner.classList.add('modo-corrida')
})
banner.addEventListener('mouseout', (event) =>{
    banner.classList.remove('modo-corrida')
})

//3
const km = document.querySelector('#km-viagem')

const resultado = document.querySelector('#resultado-combustivel')



km.addEventListener('input', (event) => {
    km.textContent = event.target.value
    const conta = Number(km.value) / 12
    resultado.textContent = conta.toFixed(2)
})




//4


const botao = document.querySelector('#btn-interessado')
const texto = document.querySelector('#modelo-carro') 
const lista = document.querySelector('#lista-carros')

botao.addEventListener('click', (event) => {
//     lista.innerHTML += "<article class="card-interesse"><h3>🚗 Carro: [NOME DO CARRO DIGITADO] - INTERESSADO 🏁</h3></article>"
})

// 5

const btn = document.querySelector('#btn-reset')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    lista.innerHTML = ""
    texto.value = ""
})



