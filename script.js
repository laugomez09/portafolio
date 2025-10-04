// Menu móvil
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        }
    });
});

// Animación con IntersectionObserver
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Botón volver arriba
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Dark / Light Mode ---
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "light");
    }
});
