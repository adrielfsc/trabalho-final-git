//Selecionar os elementos HTML de entrada e saída
const botaoAdicionar = document.querySelector('#btn_adicionar');
const listaJogos = document.querySelector('#lista_jogos');
const inputImg = document.querySelector('#input_imagem')
const inputTwitch = document.querySelector('#input_twitch')

function adicionarLinha() {

  if (inputImg.value !== '' && inputTwitch.value !== '') {
    const divJogo = document.createElement('div');
    divJogo.setAttribute('style', 'display:inline-block;position:relative;')

    const botao = document.createElement('button');
    botao.setAttribute('class', 'btn btn-danger')
    botao.innerHTML = `
    <i class="bi bi-x-circle"></i>
    `
    botao.setAttribute('style', 'position:absolute;bottom:0;right:0;')
    const link = document.createElement('a');


    link.setAttribute("target", "_blank")
    link.setAttribute("href", inputTwitch.value)

    const img = document.createElement('img');
    img.setAttribute('src', inputImg.value);
    img.setAttribute('alt', 'Foto do jogo B na Twitch')
    img.setAttribute('style', 'max-width: 9rem;')
    img.setAttribute('class', 'p-1')


    link.appendChild(img);
    divJogo.appendChild(link);
    divJogo.append(botao);
    listaJogos.appendChild(divJogo);

    const botaoExcluir = divJogo.querySelector('button.btn.btn-danger');
    botaoExcluir.addEventListener("click", () => {
      listaJogos.removeChild(divJogo)
    });
  }

}
