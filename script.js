document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Gallery fade-in on scroll
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.15 });
        galleryItems.forEach(item => observer.observe(item));
    }

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    function openLightbox(src, alt = '') {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    if (lightbox) {
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox || e.target === closeBtn) closeLightbox();
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLightbox();
    });

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    function setNavExpanded(expanded) {
        navToggle?.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        document.body.classList.toggle('nav-open', expanded);
    }

    navToggle?.addEventListener('click', () => {
        setNavExpanded(!document.body.classList.contains('nav-open'));
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => setNavExpanded(false));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) setNavExpanded(false);
    });
});