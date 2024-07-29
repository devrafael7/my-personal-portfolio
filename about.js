document.querySelectorAll('.menu-btn').forEach(menuBtn => {
    const sideMenu = menuBtn.nextElementSibling;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        sideMenu.classList.toggle('open');
    });

    sideMenu.querySelector('.close-btn').addEventListener('click', () => {
        sideMenu.classList.remove('open');
        menuBtn.classList.remove('open');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('show', 'animated');
        }
    });
});

const elements = document.querySelectorAll('.hideaway');
elements.forEach((element) => observer.observe(element));
