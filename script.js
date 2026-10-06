
const botao = document.querySelector('#botao');
const body = document.querySelector('#body');

botao.addEventListener('click', () => {
    const modoEscuroAtivo = body.classList.toggle('dark-theme');

    botao.setAttribute('aria-pressed', modoEscuroAtivo);
    botao.innerHTML = modoEscuroAtivo
        ? '<span aria-hidden="true">☀</span> Modo claro'
        : '<span aria-hidden="true">☾</span> Modo escuro';
});