const nomeCompleto = document.querySelector('#nome-usuario')
nomeCompleto.innerHTML = "Lívia Hermano"

const foto = document.querySelector('#foto-perfil')
foto.setAttribute('src', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-woodstock-allen-s-taylor.jpg')
foto.setAttribute('alt', 'Foto de usuário')

const perfilCor = document.querySelector("#container-perfil")
perfilCor.style.background= '#ffd000'

const classBadge = document.querySelector('#badge-status')
const statusP = document.querySelector('#badge-status')
classBadge.classList.add('online')
statusP.textContent = "Status: Ativo"

const qtdSkills = document.querySelectorAll('.skill')
console.log("Quantidade de skills é:", qtdSkills.length)
