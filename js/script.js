// =========================
// ANIMATIONS AU SCROLL
// =========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".section-header, .about-grid, .timeline, .skills-grid, .stage-grid, .stage-gallery, .projects-grid, .watch-grid, .watch-summary, .cv-intro, .cv-grid, .cv-download, .contact-main, .contact-bottom"
).forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});