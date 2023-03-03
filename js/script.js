//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

//função ativada para cada elemento definido no const parametros e no forEach
function ativarProduto(parametro) {
  //pega o id de cada location.search e seu respectivo elemento: o input
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

//ativa um loop para cada parametro no urlsearchparams
parametros.forEach(ativarProduto);

// Perguntas Frequentes

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", "true");

  console.log(resposta);
}

const perguntas = document.querySelectorAll(".perguntas button");

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

// Galeria de Bicicleta

const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function eventosGaleria(img) {
  img.addEventListener("click", (e) => {
    const img = e.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  });
}

galeria.forEach(eventosGaleria);
