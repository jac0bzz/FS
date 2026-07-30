document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (!tabButtons.length || !tabContents.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTabId);

            if (!targetContent) return;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            targetContent.classList.add('active');

            if (window.innerWidth <= 768) {
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});