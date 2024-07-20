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

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.mainPicture0, .mainPicture1, .mainPicture2');
    let currentIndex = 0;

    const showNextImage = () => {
        images[currentIndex].classList.remove('visible');
        images[currentIndex].classList.add('nVisible');

        currentIndex = (currentIndex + 1) % images.length;

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
cards.forEach(allCard=>{
    allCard.addEventListener('mouseover', function(){
        const card0 = document.querySelector('.card0');
        const card0P = document.getElementById('card0-p');
        card0.classList.remove('bg-blue-400');
        card0.classList.remove('invert-card');
        card0.classList.add('text-black');
        card0P.classList.remove('text-gray-200');
        card0P.classList.add('text-gray-500');

        allCard.addEventListener('mouseout', function(){
            card0.classList.add('bg-blue-400');
            card0.classList.add('invert-card');
            card0.classList.remove('text-black');
            card0P.classList.remove('text-gray-500');
        })
    })
})


const redirectServices = document.querySelectorAll('.redirectServices');
redirectServices.forEach(redirectServicesAll => {
    redirectServicesAll.addEventListener('click', function(){
        const sevices = document.querySelector('.services');
        const servicesTop = sevices.offsetTop;
    
        window.scrollTo({
            top: servicesTop,
            behavior: 'smooth'
        });
    });
})


const redirectAbout = document.querySelectorAll('.redirectAbout');
redirectAbout.forEach(redirectAboutAll => {
    redirectAboutAll.addEventListener('click', function(){
        const aboutMe = document.querySelector('.aboutMe');
        const aboutMeTop = aboutMe.offsetTop;
    
        window.scrollTo({
            top: aboutMeTop,
            behavior: 'smooth'
        });
    });
    
})

const backToTopBtn = document.querySelector('.backToTopBtn');
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

const getAnyProjectBtn = document.querySelector('.getAnyProjectBtn');
getAnyProjectBtn.addEventListener('click', function() {
    const projectsSection = document.querySelector('.projectsSection');
    const sectionTop = projectsSection.offsetTop;
    
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
});

const indexBody = document.querySelector('.indexBody');
