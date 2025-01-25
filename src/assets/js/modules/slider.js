// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
    const slider = {
    currentSlide: 0,
    slides: document.querySelectorAll('.showcase-slide'),
    dots: document.querySelectorAll('.nav-dot'),
    totalSlides: document.querySelectorAll('.showcase-slide').length,
    
    init() {
        // Add click events to arrows
        document.querySelector('.arrow-btn.prev').addEventListener('click', () => this.navigate(-1));
        document.querySelector('.arrow-btn.next').addEventListener('click', () => this.navigate(1));
        
        // Add click events to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate(-1);
            if (e.key === 'ArrowRight') this.navigate(1);
        });

        // Start autoplay
        this.startAutoplay();
    },

    navigate(direction) {
        this.currentSlide = (this.currentSlide + direction + this.totalSlides) % this.totalSlides;
        this.updateSlides();
    },

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlides();
    },

    updateSlides() {
        this.slides.forEach((slide, index) => {
            let offset = (index - this.currentSlide + this.totalSlides) % this.totalSlides;
            slide.style.transform = this.getTransform(offset);
            slide.style.zIndex = this.totalSlides - offset;
            slide.style.opacity = offset === 0 ? 1 : 0.7;
        });

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    },

    getTransform(offset) {
        if (offset === 0) return 'translateZ(0) scale(1)';
        if (offset === 1) return 'translateZ(-100px) scale(0.9) translateX(50%)';
        return 'translateZ(-200px) scale(0.8) translateX(100%)';
    },

    startAutoplay() {
        setInterval(() => {
            this.navigate(1);
        }, 5000);
    }
};
    slider.init();
});