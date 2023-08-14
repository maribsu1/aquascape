// Función para activar/desactivar la clase 'show' en la barra de navegación
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    
// Función para alternar la clase "show" en la barra de navegación
    function toggleNavbar() {
        const navbarNav = document.querySelector('.navbar-nav');
        if (navbarNav) {
            navbarNav.classList.toggle('show');
        }
    }

 // Agregar evento de clic al icono del toggler
    const toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
        toggler.addEventListener('click', toggleNavbar);
    }

// Cambiar el fondo de la barra de navegación al hacer scroll
    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;
        const navbar = document.querySelector('.navbar');

        if (navbar) {
            if (currentScrollPos === 0) {
                navbar.classList.remove('scrolled');
            } else {
                navbar.classList.add('scrolled');
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("back-to-top-btn");

    if (backToTopBtn) {
        // Mostrar el botón al hacer scroll
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        // Volver al inicio al hacer clic
        backToTopBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
});

    document.addEventListener("DOMContentLoaded", function () {
        var navbarToggler = document.querySelector(".navbar-toggler");
        var navbarNav = document.querySelector("#navbarNav");

        navbarToggler.addEventListener("click", function () {
            navbarNav.classList.toggle("show");
        });
    });

    
