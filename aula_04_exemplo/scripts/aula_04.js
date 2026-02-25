// const tempoAgora = new Date();

// const hora = tempoAgora.getHours()

// const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')
// const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

// console.log("Hoje é dia:" + dataFormatada)
// console.log("Horário:" + horaFormatada)

// console.log("Só a hora:" + hora)

// if(hora > 12 && hora <18){
//     alert("Boa Tarde")
// } else {
//     alert("Bom dia")
// }

// class Prato{
//     constructor(nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }
//     exibirComMoeda(){
//         return "R$" + total.toFixed(2)
//     }
// }

// const lasanha = new Prato("Lasanha Bolonhesa", 45.00)

// let qtd = prompt("Simulação: quantas unidades de " + lasanha.nome + " você deseja?")
// let total = lasanha.preco * qtd

// alert("Resumo da Simulação: \n Prato: " + lasanha.nome + "\nTotal: " + lasanha.exibirComMoeda(total))

alert("Bem vindo ao Restaurante Sabooooooor e Saber")
const cliente = prompt("Para um atendimento personalizado, digite seu nome: ")

let clienteFormatado = cliente.trim().toUpperCase() //trim -> tira os espaços desnecessários

alert("Bem vindo(a) " + clienteFormatado + " ao restaurante Sabooooooor e Saber")