document.addEventListener('DOMContentLoaded', function() {
    const toggleTitles = document.querySelectorAll('.elementor-toggle-title');
    
    toggleTitles.forEach(title => {
        title.addEventListener('click', function() {
            const tabTitle = this.closest('.elementor-tab-title');
            if (!tabTitle) return;

            const tabContent = tabTitle.nextElementSibling;
            if (!tabContent || !tabContent.classList.contains('elementor-tab-content')) return;

            const isActive = tabTitle.classList.contains('elementor-active');
            
            // Close all tabs
            document.querySelectorAll('.elementor-tab-title').forEach(t => {
                t.classList.remove('elementor-active');
                const content = t.nextElementSibling;
                if (content) content.style.display = 'none';
            });
            
            // Open clicked tab if it wasn't active
            if (!isActive) {
                tabTitle.classList.add('elementor-active');
                tabContent.style.display = 'block';
                
                // Handle nested content for Germany
                const nestedContent = tabContent.querySelector('.eael-accordion-content');
                if (nestedContent) {
                    nestedContent.style.display = 'block';
                }
            }
        });
    });
});