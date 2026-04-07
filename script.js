// Accordion Logic
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const body = button.nextElementSibling;
        const isOpen = body.style.display === 'block';
        
        // Fecha todos antes de abrir o clicado
        document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
        
        body.style.display = isOpen ? 'none' : 'block';
    });
});

// Busca em Tempo Real
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('.topic-section, .accordion-item, .card');

    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        if (text.includes(term)) {
            section.style.display = 'block';
            // Se estiver dentro de um accordion, abre ele
            if (section.classList.contains('accordion-item') && term.length > 2) {
                section.querySelector('.accordion-body').style.display = 'block';
            }
        } else {
            section.style.display = 'none';
        }
    });
});

// Botão Voltar ao Topo
const btt = document.getElementById('backToTop');
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btt.style.display = "block";
    } else {
        btt.style.display = "none";
    }
};
btt.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});

// Smooth Scroll para o menu lateral
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});