// Obtener el botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar el botón cuando se desplaza hacia abajo 100 píxeles
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Al hacer clic en el botón, deslizar suavemente hacia arriba
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
};

