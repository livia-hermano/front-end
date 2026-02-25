//Exercício 1
// alert("Olá!")
// const nome = prompt("Digite seu nome: ")
// const sobrenome = prompt("Digite seu sobrenome: ")

// let nomeCompleto = nome.concat(`${sobrenome}`)

// let nomeFormatado = nomeCompleto.trim().toLowerCase() 

// alert("Seu nome é " + nomeFormatado)


// alert("Seu nome tem " + nomeCompleto.length + " caracteres")

//Exercício 2
// alert("Olá, hora de pagar a conta!")
// const conta = prompt("Qual o valor total da conta? ")
// const pessoas = prompt("E quantas pessoas estão na mesa?")

// let totalParaCada = conta/pessoas
// alert("Cada amigo deve pagar R$" + totalParaCada.toFixed(2))

//Exercício 3
// const valor = prompt("Digite o valor da compra: ")
// const cumpom = prompt("Você tem o cupom?")

// let cupomReal = false

// if (cupom = "sim" || valor > 150){
//     let cupomReal = true
// } 
// if (cupomReal == true){
//     alert("Frete Grátis")
// }else {
//     alert("Frete Pago")
// }

//Exercício 4
// const numUsuario = prompt("Digite um número de 1 a 10: ")

// let numReal = Math.floor(Math.random() * 10) + 1;

// if (numUsuario == numReal){
//     alert("Parabéns, você ganhou um brinde! O número sorteado também foi: " + numReal)
// } else{
//     alert("Que pena, o número sorteado foi " + numReal)
// }

//Exercício 5
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear

class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    idadeVeiculo(anoAtual){
        return anoAtual-this.ano
    }
}

