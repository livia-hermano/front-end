class Prato{
    constructor(nome, preco, categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }


    formataPreco(){
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`
    }


    aplicarDesconto(percentual){
        this.preco = this.preco * (1 - percentual/100)
    }
} // fim da classe

const cardapio = [
    new Prato("Feijoada", 42.90, "Prato Principal"),
    new Prato("Coxinha", 8.50, "Petisco"),
    new Prato("Brigadeiro", 6.00, "Sobremesa"),]

    console.log('=== Pratos Criados ===')
cardapio.forEach(p => {
    console.log(`${p.nome} -> ${p.formataPreco()}`)
})


const containerCardapio = document.querySelector("#cardapio")

function criarCardPrato(prato){
    const card = document.createElement('div')
    card.className = 'card-prato col-12 col-md-11 col-lg-10 bg-white p-4 rounded-3 shadow-sm'

    card.innerHTML = 
    `
    <h3 class="fs-4 fw-bold text-dark mb-2">${prato.nome}</h3>
    <span class="categoria fs-6 d-block mb-3">${prato.categoria}</span>
    <div class ='preco fs-5 fw-bold text-success'>${prato.formataPreco()}</div>
    `


    card.addEventListener('click', () => {
        alert(`
            ! ${prato.nome} \n\n
            categoria: ${prato.categoria} \n
            preço: ${prato.formataPreco()}
            `)
    })

    return card
}

function renderizarCardapio(){
    containerCardapio.innerHTML = ''

    cardapio.forEach(prato =>{
        const card = criarCardPrato(prato)

        containerCardapio.appendChild(card)
    })
}

renderizarCardapio()


cardapio[0].aplicarDesconto(20)

renderizarCardapio()