
// Função para exibir o nome do anime escolhido
function exibirNomeAnime(nomeAnime) {
    console.log(`Você escolheu o anime: ${nomeAnime}`);
}

// Função para mostrar a mensagem de parabéns pela compra
function parabensPelaCompra() {
    document.getElementById('res').textContent = 'Parabéns pela sua compra! Aproveite o seu anime!';
     // Limpa os campos de entrada
     document.getElementById('txti').value = '';
     document.getElementById('txtf').value = '';
     document.getElementById('txtp').value = '';
}

// Função principal que simula a interação com o usuário
function finalizarCompra() {
    const animeEscolhido = document.getElementById('txti').value;

    // Exibe o nome do anime escolhido
    exibirNomeAnime(animeEscolhido);

    // Pergunta se o usuário quer escolher outro anime
    const escolherOutroAnime = confirm('Gostaria de escolher algum outro anime?');

    if (escolherOutroAnime) {
        // Recursivamente chama a função novamente para escolher outro anime
        lojaDeAnimes();
    } else {
        // Mostra a mensagem de parabéns pela compra
        parabensPelaCompra();
    }
}