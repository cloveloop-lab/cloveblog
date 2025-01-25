document.addEventListener('DOMContentLoaded', () => {
    // Função para animar os números
    function animateValue(element, start, end, duration) {
        if (start === end) return;
        
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        
        let current = start;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            
            if (current === end) {
                clearInterval(timer);
                if (end === 97) element.textContent = '97%';
                if (end === 24) element.textContent = '24/7';
            }
        }, stepTime);
    }

    // Configurar o Intersection Observer para animação dos números
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const valueElement = entry.target;
                const endValue = parseInt(valueElement.getAttribute('data-value'));
                if (endValue) {
                    animateValue(valueElement, 0, endValue, 2000);
                    observer.unobserve(valueElement);
                }
            }
        });
    }, { threshold: 0.5 });

    // Observar todos os elementos com valores
    document.querySelectorAll('.stat-value[data-value]').forEach(element => {
        observer.observe(element);
    });

// Atualização do efeito do mouse
    const cards = document.querySelectorAll('.stat-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
            
            card.querySelector('.stat-card-inner').style.setProperty('--mouse-x', `${x}%`);
            card.querySelector('.stat-card-inner').style.setProperty('--mouse-y', `${y}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.stat-glow').style.opacity = '0';
        });

        card.addEventListener('mouseenter', () => {
            card.querySelector('.stat-glow').style.opacity = '1';
        });
    });
});