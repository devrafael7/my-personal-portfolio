const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('show', 'animated');
        }
    });
});

const elements = document.querySelectorAll('.hideaway');
elements.forEach((element) => observer.observe(element));

document.getElementById('prev').addEventListener('click', function() {
    document.querySelector('.overflow-x-auto').scrollBy({
        left: -500, 
        behavior: 'smooth'
    });
});

document.getElementById('next').addEventListener('click', function() {
    document.querySelector('.overflow-x-auto').scrollBy({
        left: 500, 
        behavior: 'smooth'
    });
});

const backToTopBtn = document.querySelector('.backToTopBtn');
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.mainPicture0, .mainPicture1, .mainPicture2');
    let currentIndex = 0;

    const showNextImage = () => {
        images[currentIndex].classList.remove('visible');
        images[currentIndex].classList.add('nVisible');

        currentIndex = (currentIndex + 1) % images.length;

        // Mostra a próxima imagem
        images[currentIndex].classList.remove('nVisible');
        images[currentIndex].classList.add('visible');
    };

    images[currentIndex].classList.add('visible');

    setInterval(showNextImage, 5000);
});


const mainTitleName = document.getElementById('main-title-name');
const text = mainTitleName.innerHTML;
let titleNameIndex = 0;
let isDeleting = false;
let typingSpeed = 80; 
function type() {
    const currentText = text.substring(0, titleNameIndex);
    mainTitleName.innerHTML = currentText;
    if (!isDeleting && titleNameIndex === text.length) {
        isDeleting = true;
        typingSpeed = 50; 
    } else if (isDeleting && titleNameIndex === 4) {
        isDeleting = false;
        typingSpeed = 100; 
    }
    titleNameIndex += isDeleting ? -1 : 1;
    setTimeout(type, typingSpeed);
}
setTimeout(type, typingSpeed);

const cards = document.querySelectorAll(".myServiceCards");

cards.forEach(card => {
    card.addEventListener("mouseover", function() {
        cards.forEach(c => {
            c.classList.remove("bg-blue-400");
            c.classList.remove("invert-card");
            c.querySelector(".invert-img").classList.add("invert-img");
            this.classList.remove("text-white");
        });
        this.classList.add("bg-blue-400");
        if (!this.classList.contains("myCard0")) {
            this.classList.add("invert-card");
            this.querySelector(".invert-img").classList.remove("invert-img");
            this.classList.add("text-white");
        }
    });

    card.addEventListener("mouseout", function() {
        if (!this.classList.contains("myCard0")) {
            this.classList.remove("bg-blue-400");
            this.classList.remove("text-white");
            this.classList.remove("invert-card");
            this.querySelector(".invert-img").classList.add("invert-img");
            
        }
    });
});

