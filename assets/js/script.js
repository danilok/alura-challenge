function mudarCorBorda() {
  const editor = document.querySelector('.conteudo__codigo-container');
  const seletorCor = document.querySelector('#cor');
  editor.style.backgroundColor = seletorCor.value;
}

function mostrarMenuNav() {
  const menu = document.querySelector('.cabecalho__nav-menu');
  const busca = document.querySelector('.cabecalho__busca');
  const icone = document.querySelector('#iconeMenu');
  const span = document.querySelector('#spanMenu');
  if (menu.style.display === 'block' || busca.style.display === 'block') {
    if (window.outerWidth < 768) {
      busca.removeAttribute("style")
    }
    menu.style.display = 'none';
    icone.className = 'fas fa-bars';
    icone.style.fontSize = '1rem';
    span.className = "cabecalho__nav-botao"
  } else {
    menu.style.display = 'block';
    icone.className = 'fas fa-times';
    icone.style.fontSize = '1.25rem';
    span.className = "cabecalho__nav-botao--active"
  }
}

function mostrarBusca() {
  const busca = document.querySelector('.cabecalho__busca');
  const icone = document.querySelector('#iconeMenu');
  const span = document.querySelector('#spanMenu');
  if (busca.style.display === 'block') {
    busca.style.display = 'none';
    icone.className = 'fas fa-bars';
    icone.style.fontSize = '1rem';
    span.className = "cabecalho__nav-botao"
  } else {
    busca.style.display = 'block';
    icone.className = 'fas fa-times';
    icone.style.fontSize = '1.25rem';
    span.className = "cabecalho__nav-botao--active"
  }
}

function mostarCodigo() {
  window.location.href = 'index.html';
}

function aplicarHighlight() {
  const divEditor = document.querySelector('.conteudo__editor');
  const codigo = divEditor.querySelector('code');
  const selectedOption = document.querySelector('#linguagens').value;
  codigo.className = `preview hljs language-${selectedOption}`;
  hljs.highlightElement(codigo);
}