document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic
    const headers = document.querySelectorAll('.acc-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            const isOpen = content.style.display === 'block';
            
            content.style.display = isOpen ? 'none' : 'block';
            icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // Search Logic
    const searchInput = document.getElementById('mainSearch');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.topic, .acc-item, .card, .status-card');

        cards.forEach(card => {
            const content = card.textContent.toLowerCase();
            if (content.includes(term)) {
                card.style.display = '';
                // Se for um item de accordion, abre ele para mostrar o resultado
                if(card.classList.contains('acc-item') && term !== "") {
                    card.querySelector('.acc-content').style.display = 'block';
                }
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Scroll to Top Logic
    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});