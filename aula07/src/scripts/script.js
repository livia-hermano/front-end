
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
  saudacao.textContent =
    hora < 12
      ? "Bom dia! Qual o seu pedido?"
      : "Boa tarde! Confira nosso cardápio.";
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});


const main = document.querySelector("main");

main.addEventListener("click", (event) => {
  const clicado = event.target;


  
  if (clicado.classList.contains("btn-menos")) {
    const box = clicado.parentElement;
    const spanQtd = box.querySelector(".qtd-valor");
    const valorAtual = Number(spanQtd.textContent);
    spanQtd.textContent = Math.max(1, valorAtual - 1);
    atualizarPrecoCard(box);
    return;
  }

  if (clicado.classList.contains("btn-mais")) {
    const box = clicado.parentElement;
    const spanQtd = box.querySelector(".qtd-valor");
    spanQtd.textContent = Number(spanQtd.textContent) + 1;
    atualizarPrecoCard(box);
    return;
  }


   if (clicado.classList.contains("btn-pedido")) {
    event.preventDefault();

    const card = clicado.parentElement;
    const nomePrato = card.querySelector("h3").textContent;
    const quantidade = card.querySelector(".qtd-valor").textContent;
    const precoExibido = card.querySelector(".preco").textContent;


    clicado.textContent = " Adicionado!";
    clicado.style.backgroundColor = "#043d1c";
    clicado.disabled = true;

    setTimeout(() => {
      clicado.textContent = "Pedir Agora";
      clicado.style.backgroundColor = "";
      clicado.disabled = false;
    }, 1500);


     if (!card.querySelector(".badge-adicionado")) {
      card.insertAdjacentHTML(
        "beforeend",
        "<span class='badge-adicionado'>✔ No resumo</span>"
      );
    }

    // Chama a função que cria o item no resumo
    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card);
  }
});


function atualizarPrecoCard(box) {
  const card = box.parentElement;
  const spanPreco = card.querySelector(".preco");
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
  const quantidade = Number(box.querySelector(".qtd-valor").textContent);
  const total = precoUnitario * quantidade;
  spanPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",");
  spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";
}


function adicionarItemAoResumo(nome, qtd, preco, cardOrigem) {
  const secaoResumo = document.querySelector("#secao-resumo");
  const listaResumo = document.querySelector("#lista-resumo");

  if (!secaoResumo || !listaResumo) return;

  // Exibe a seção que estava oculta (display:none no CSS)
  secaoResumo.style.display = "block";

  // Passo 1: cria o <li>
  const itemLi = document.createElement("li");
  itemLi.classList.add("item-resumo");

  // Passo 2: cria o <span> com o texto
  const textoSpan = document.createElement("span");
  textoSpan.textContent = qtd + "x " + nome + " — " + preco;

  // Passo 3: cria o botão ✕
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "✕"; 
  btnRemover.classList.add("btn-remover");

   btnRemover.addEventListener("click", () => {
    itemLi.remove();

    const badge = cardOrigem.querySelector(".badge-adicionado");
    if (badge) badge.remove();

    if (listaResumo.children.length === 0) {
      secaoResumo.style.display = "none";
    }
  });

  // Passo 4: monta a estrutura e insere na página
  itemLi.appendChild(textoSpan);
  itemLi.appendChild(btnRemover);
  listaResumo.appendChild(itemLi);
}


const btnLimpar = document.querySelector("#btn-limpar");
if (btnLimpar) {
  btnLimpar.addEventListener("click", () => {
    const listaResumo = document.querySelector("#lista-resumo");
    const secaoResumo = document.querySelector("#secao-resumo");

    // Remove todos os badges dos cards
    document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove());

    // Remove filhos da lista um a um com firstElementChild
    while (listaResumo.firstElementChild) {
      listaResumo.firstElementChild.remove();
    }

    secaoResumo.style.display = "none";
  });
}