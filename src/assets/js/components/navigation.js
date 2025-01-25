// assets/js/components/navigation.js
class ComponentLoader {
    static loadComponents() {
        // Carrega o header
        const headerElement = document.getElementById('header');
        if (headerElement) {
            headerElement.innerHTML = COMPONENTS.header;
        }

        // Carrega o footer
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.innerHTML = COMPONENTS.footer;
        }

        // Inicializa o menu mobile
        this.initMobileMenu();
        
        // Marca o item atual do menu
        this.highlightCurrentPage();

        // Inicializa o comportamento de scroll
        this.initScrollBehavior();
    }

    static initMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });

            // Fecha o menu ao clicar em um link
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });
        }
    }

    static initScrollBehavior() {
        let lastScroll = 0;
        const nav = document.querySelector('.nav');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Adiciona sombra quando não está no topo
            if (currentScroll > 0) {
                nav.classList.add('scroll-up');
            } else {
                nav.classList.remove('scroll-up');
            }

            // Esconde/mostra nav baseado na direção do scroll
            if (currentScroll > lastScroll && currentScroll > 100) {
                nav.classList.add('scroll-down');
            } else {
                nav.classList.remove('scroll-down');
            }

            lastScroll = currentScroll;
        });
    }

    static highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(currentPath)) {
                link.classList.add('active');
            }
        });
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    ComponentLoader.loadComponents();
});