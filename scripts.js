// Scroll suave para navegação interna
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar o botão "Voltar ao topo"
const voltarTopoButton = document.getElementById('voltarTopo');
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        voltarTopoButton.style.display = "block";
    } else {
        voltarTopoButton.style.display = "none";
    }
};

// Função para voltar ao topo
voltarTopoButton.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
