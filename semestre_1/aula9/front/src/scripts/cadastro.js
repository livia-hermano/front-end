document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector("#form-cadastro");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await cadastrarNovoProduto();
  });

});

async function cadastrarNovoProduto() {

  const nome = document.querySelector("#nome").value.trim();
  const descricao = document.querySelector("#descricao").value.trim();
  const preco = Number(document.querySelector("#preco").value);
  const categoria = document.querySelector("#categoria").value;
  const imagem = document.querySelector("#imagem").value.trim();

  const mensagem = document.querySelector("#mensagem");

  if (
    !nome ||
    !descricao ||
    !preco ||
    !categoria ||
    !imagem
  ) {
    mensagem.textContent = "Preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }

  const produto = {
    nome,
    descricao,
    preco,
    categoria,
    imagem
  };

  try {

    await cadastrarProduto(produto);

    mensagem.textContent =
      " Prato cadastrado com sucesso!";

    mensagem.className = "sucesso";

    document.querySelector("#form-cadastro").reset();

  } catch (erro) {

    mensagem.textContent =
      " Erro ao cadastrar prato.";

    mensagem.className = "erro";

    console.error(erro);
  }
}



