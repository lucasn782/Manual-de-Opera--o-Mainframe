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

    // Search Logic (Filtro em Tempo Real)
    const searchInput = document.getElementById('mainSearch');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.topic, .acc-item, .card, .status-card');

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            const isMatch = text.includes(term);
            item.style.display = isMatch ? '' : 'none';
            
            // Abre o accordion se houver match dentro dele
            if (isMatch && item.classList.contains('acc-item') && term.length > 2) {
                item.querySelector('.acc-content').style.display = 'block';
            }
        });
    });

    // Back to Top Button
    const btn = document.getElementById('scrollTop');
    window.onscroll = () => btn.style.display = window.scrollY > 400 ? 'block' : 'none';
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Smooth Scroll para o menu lateral
    document.querySelectorAll('.nav-item').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});