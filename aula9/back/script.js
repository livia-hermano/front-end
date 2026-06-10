const input = document.getElementById("arquivo");
const btnEnviar = document.getElementById("enviar");
const btnCarregar = document.getElementById("carregar");
const preview = document.getElementById("preview");

let imagemBase64 = "";

input.addEventListener("change", () => {
    const arquivo = input.files[0];

    if (!arquivo) return;

    const reader = new FileReader();

    reader.onload = () => {
        imagemBase64 = reader.result;

        console.log(imagemBase64);
    };

    reader.readAsDataURL(arquivo);
});

btnEnviar.addEventListener("click", async () => {
    if (!imagemBase64) {
        alert("Selecione uma imagem");
        return;
    }

    const resposta = await fetch("/upload", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagemBase64
        })
    });

    const dados = await resposta.json();

    alert(dados.mensagem);
});

btnCarregar.addEventListener("click", async () => {
    const resposta = await fetch("/imagem");

    const dados = await resposta.json();

    preview.src = dados.imagem;
});