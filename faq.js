    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.closest('.faq-item');
            faqItem.classList.toggle('active');

            // Optional: accordion behavior (close others)
document.querySelectorAll('.faq-item.active').forEach(item => {
    if (item !== faqItem) item.classList.remove('active');
});
        });
    });
});