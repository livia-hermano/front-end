// Lívia Hermano

// // 1

// const botao = document.getElementById('#btn-curtir');
// const contador = document.getElementById('#contador');
// let qtdCurtidas = 0;

// botao.addEventListener('click', function(){
//     qtdCurtidas ++ ;
//     contador.textContent = qtdCurtidas;
// });

// //2
// const texto = document.getElementById('#campo-texto');
// const preview = document.getElementById('#preview-texto');

// texto.addEventListener('input', function(event){
//     preview.textContent = event.target.value;
// })

//1. 1)
const botao = document.querySelector('#btn-curtir');
const contador = document.querySelector('#contador');
let qtdCurtidas = 0;
botao.addEventListener('click', function(){
        qtdCurtidas++;    
        contador.textContent = qtdCurtidas;});

//2)
// const botao = document.querySelector('#btn-curtir');const contador = document.querySelector('#contador');let qtdCurtidas = 0;botao.addEventListener('click', () => {    contador.textContent = ++qtdCurtidas;});

// //1. 1)
// const texto = document.querySelector('#campo-texto'); const preview = document.querySelector('#preview-texto'); texto.addEventListener('input', function(event){ preview.textContent = event.target.value;})

// //*preview.textContent = 'Digitando: ' + event.target.value;

// //2)
const texto = document.querySelector('#campo-texto');

const preview = document.querySelector('#preview-texto');

texto.addEventListener('input', (event) => {

preview.textContent = event.target.value;

});

// //3.
//  const caixa = document.querySelector('#caixa-cor');

// caixa.addEventListener('mouseenter', () => {

// caixa.style.background = 'blue';

// });

// caixa.addEventListener('mouseleave', () => {

// caixa.style.background = '#95a5a6';

// });

// //4. 
// const reset = document.querySelector('#btn-reset');

// reset.addEventListener('click', () => {

// qtdCurtidas = 0;

// contador.textContent = 0;

// texto.value = '';

// preview.textContent = 'Digitando: ...';

// });
