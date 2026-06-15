// Seleciona o botão e a mensagem que está escondida no HTML
const botao = document.getElementById('botao-mensagem');
const mensagem = document.getElementById('mensagem-oculta');

// Adiciona um evento de "escuta" para quando o botão for clicado
botao.addEventListener('click', function() {
    // Se a mensagem estiver escondida, ela aparece. Se já estiver aparecendo, ela some.
    if (mensagem.style.display === 'block') {
        mensagem.style.display = 'none';
        botao.textContent = 'Clique para saber mais!';
    } else {
        mensagem.style.display = 'block';
        botao.textContent = 'Fechar mensagem';
    }
});
