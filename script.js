document.getElementById('prev').addEventListener('click', function() {
    document.querySelector('.overflow-x-auto').scrollBy({
        left: -500, // Ajuste conforme necessário
        behavior: 'smooth'
    });
});

document.getElementById('next').addEventListener('click', function() {
    document.querySelector('.overflow-x-auto').scrollBy({
        left: 500, // Ajuste conforme necessário
        behavior: 'smooth'
    });
});

const lastOne = document.querySelector('.footerLastOne')