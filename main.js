// Função para alternar o modo escuro
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Menu Hambúrguer
document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuLista = document.querySelector('.lista');

    if (menuHamburguer) {
        menuHamburguer.addEventListener('click', function() {
            menuLista.classList.toggle('ativo');
            // Anima as barras do menu hambúrguer
            this.classList.toggle('ativo');
        });
    }

    // Fecha o menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.lista li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLista.classList.remove('ativo');
            menuHamburguer.classList.remove('ativo');
        });
    });

    // Botão Voltar ao Topo
    const btnVoltarTopo = document.createElement('div');
    btnVoltarTopo.className = 'voltar-topo';
    btnVoltarTopo.innerHTML = '↑';
    document.body.appendChild(btnVoltarTopo);

    // Mostra/esconde o botão baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnVoltarTopo.classList.add('visivel');
        } else {
            btnVoltarTopo.classList.remove('visivel');
        }
    });

    // Ação de voltar ao topo com animação suave
    btnVoltarTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});                                                                                                                                                                                                                                                                                                  