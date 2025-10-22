// Espera o HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // A função original, agora sem o 'export'
    function initHeaderMenu() {
        const mainNav = document.getElementById('main-nav');
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.querySelectorAll('.radial-nav a');

        // Verifica se os elementos essenciais existem
        if (!mainNav || !menuToggle) {
            console.warn("Header Menu: Elementos essenciais (main-nav, menu-toggle) não encontrados no DOM.");
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

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });

        document.addEventListener('click', (event) => {
            // Fecha o menu se clicar fora do 'mainNav' E também fora do 'menuToggle'
            if (mainNav.classList.contains('is-active') && !mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
                toggleMenu();
            }
        });
    }

    // Chama a função para que o menu realmente funcione!
    initHeaderMenu();

});