document.querySelectorAll('.rectangle').forEach(item => {
    item.addEventListener('click', event => {
        window.location.href = item.getAttribute('data-href');
    });
});
