const imagens = document.querySelectorAll(".carrossel")
const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")

let imagemAtual = 0

setaAvancar.addEventListener("click", function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  }
  imagemAtual++;
  
  escondeImagemAberta()
  
  imagens[imagemAtual].classList.add("mostrar")

  mostrarOuEsconderSetas()
})

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }
  imagemAtual--;
  escondeImagemAberta()
 
  imagens[imagemAtual].classList.add("mostrar")

  mostrarOuEsconderSetas()
})


function escondeImagemAberta() {
  const imagemAberta = document.querySelector('.mostrar')
  imagemAberta.classList.remove('mostrar')
}

function  mostrarOuEsconderSetas(){
  const naoEhAPrimeiraImagem = imagemAtual !==0
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade")
  }else{
    setaVoltar.classList.add("opacidade")
  }
  
  const chegouNaUtimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1
  if (chegouNaUtimaImagem) {
    setaAvancar.classList.add("opacidade")
  } else {
    setaAvancar.classList.remove("opacidade")
  }
}
