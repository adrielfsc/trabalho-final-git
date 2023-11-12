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
    <i class="bi bi-x-circle-fill"></i>
    `
    botao.setAttribute('style', 'position:absolute;top:0;right:0;max-height: 2rem;--bs-btn-font-size: .75rem;--bs-btn-padding-x: .4rem')
    const link = document.createElement('a');


    link.setAttribute("target", "_blank")
    link.setAttribute("href", inputTwitch.value)

    const img = document.createElement('img');
    img.setAttribute('src', inputImg.value);
    img.setAttribute('alt', 'Foto do jogo na Twitch')
    img.setAttribute('style', 'max-width: 8rem;')
    img.setAttribute('class', 'rounded-4 p-1')


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
