// Work Section Functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    // Set initial state
    workItems.forEach(item => {
        item.style.opacity = '1';
        item.style.display = 'block';
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.textContent.toLowerCase().trim();
            
            // Filter work items
            workItems.forEach(item => {
                const itemCategories = item.dataset.categories.toLowerCase().split(',');
                
                if (category === 'all projects') {
                    showItem(item);
                } else if (itemCategories.includes(category)) {
                    showItem(item);
                } else {
                    hideItem(item);
                }
            });
        });
    });

    function showItem(item) {
        item.style.display = 'block';
        // Use requestAnimationFrame to ensure display property is applied before opacity
        requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }

    function hideItem(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        // Wait for transition before hiding
        setTimeout(() => {
            item.style.display = 'none';
        }, 300);
    }

    // Smooth hover effect
    workItems.forEach(item => {
        const overlay = item.querySelector('.work-overlay');
        const content = item.querySelector('.work-content');
        
        item.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
        });
    });
});