document.getElementById('prev').addEventListener('click', function() {
    document.querySelector('.overflow-x-auto').scrollBy({
        left: -300, // Ajuste conforme necessário
        behavior: 'smooth'
    });
});

document.getElementById('next').addEventListener('click', function() {
    document.querySelector('.overflow-x-auto').scrollBy({
        left: 300, // Ajuste conforme necessário
        behavior: 'smooth'
    });
});