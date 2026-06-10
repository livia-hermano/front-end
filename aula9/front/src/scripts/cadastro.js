document.addEventListener("DOMContentLoaded", () => {

  const formulario =
    document.querySelector("#form-cadastro")

  formulario.addEventListener(
    cadastrarNovoProduto()
  )

})

function converterBase64(arquivo) {

  return new Promise((resolve, reject) => {

    const reader = new FileReader()

    reader.readAsDataURL(arquivo)

    reader.onload = () => {
      resolve(reader.result);
    }

    reader.onerror = erro => {
      reject(erro)
    }

  })
}

async function cadastrarNovoProduto(event) {
  event.preventDefault()
  const nome =
    document.querySelector("#nome").value.trim()
  const descricao =
    document.querySelector("#descricao").value.trim()
  const preco =
    document.querySelector("#preco").value
  const categoria =
    document.querySelector("#categoria").value.trim()
  const imagem =
    document.querySelector("#imagem").files[0]
  const mensagem =
    document.querySelector("#mensagem")

  if (
    !nome ||
    !descricao ||
    !preco ||
    !categoria ||
    !imagem
  ) {
    mensagem.textContent =
      "Preencha todos os campos."
    return;
  }

  try {

    const realImagem =
      await converterBase64(
        imagem
      )

    await cadastrarProduto({
      nome,
      descricao,
      preco: Number(preco),
      categoria,
      realImagem
    })

    mensagem.textContent =
      "Prato cadastrado com sucesso!"
    document
      .querySelector("#form-cadastro")
      .reset()

  } catch (erro) {

    console.error(erro);

    mensagem.textContent =
      "Erro ao cadastrar prato."
  }}
