// assets/js/pricing.js
document.addEventListener('DOMContentLoaded', () => {
    // Armazena os preços originais (mensais)
    const originalPrices = Array.from(document.querySelectorAll('.price .amount')).map(price => 
        parseInt(price.textContent.replace(/[^0-9]/g, ''))
    );

    // Toggle de Período (Mensal/Anual)
    const billingToggle = document.getElementById('billingToggle');
    const billingOptions = document.querySelectorAll('.billing-option');
    const prices = document.querySelectorAll('.price .amount');

    const updatePricing = (isAnnual) => {
        // Atualiza classes ativas
        billingOptions.forEach((option, index) => {
            option.classList.toggle('active', index === (isAnnual ? 1 : 0));
        });
        billingToggle.classList.toggle('active', isAnnual);

        // Atualiza preços
        prices.forEach((price, index) => {
            const originalPrice = originalPrices[index];
            if (isAnnual) {
                const annualPrice = Math.round(originalPrice * 12 * 0.8);
                price.textContent = annualPrice;
            } else {
                price.textContent = originalPrice;
            }
        });
    };

    // Inicializa com preços mensais
    updatePricing(false);

    // Event listener para o toggle
    billingToggle.addEventListener('click', () => {
        const willBeAnnual = !billingToggle.classList.contains('active');
        updatePricing(willBeAnnual);
    });

    // FAQ Toggles
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});