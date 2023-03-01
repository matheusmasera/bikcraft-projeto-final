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
console.log(parametros);

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
