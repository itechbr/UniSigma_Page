// Espera o HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    function initHeaderMenu() {
        const mainNav = document.getElementById('main-nav');
        const menuToggle = document.getElementById('menu-toggle');
        // Seletor atualizado para os novos links do menu lateral
        const navLinks = document.querySelectorAll('.menu-lateral-links a');
        const menuWrapper = document.getElementById('menu-wrapper'); // Pega o painel

        // Verifica se os elementos essenciais existem
        if (!mainNav || !menuToggle || !menuWrapper) {
            console.warn("Header Menu: Elementos essenciais (main-nav, menu-toggle, menu-wrapper) não encontrados no DOM.");
            return;
        }

        function toggleMenu() {
            const isActive = mainNav.classList.contains('is-active');

            if (isActive) {
                mainNav.classList.remove('is-active');
                menuToggle.classList.remove('is-active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir Menu');
                document.body.classList.remove('menu-open');
                document.removeEventListener('keydown', handleKeyPress);
            } else {
                mainNav.classList.add('is-active');
                menuToggle.classList.add('is-active');
                menuToggle.setAttribute('aria-expanded', 'true');
                menuToggle.setAttribute('aria-label', 'Fechar Menu');
                document.body.classList.add('menu-open');
                document.addEventListener('keydown', handleKeyPress);
            }
        }

        function handleKeyPress(event) {
            if (event.key === "Escape") {
                toggleMenu(); 
            }
        }

        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); 
            toggleMenu();
        });

        // Adiciona evento de clique para fechar o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });

        document.addEventListener('click', (event) => {
            // Fecha o menu se clicar fora do 'menuWrapper' E também fora do 'menuToggle'
            if (mainNav.classList.contains('is-active') && !menuWrapper.contains(event.target) && !menuToggle.contains(event.target)) {
                toggleMenu();
            }
        });
    }

    // Chama a função para que o menu realmente funcione!
    initHeaderMenu();

});
