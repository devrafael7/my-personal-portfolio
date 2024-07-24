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
const card0 = document.querySelector('.card0');
card0.classList.add('bg-blue');
const card0H3 = document.querySelector('.card0H3');
card0H3.classList.add('text-gray-200');
cards.forEach(allCard=>{
    allCard.addEventListener('mouseover', function(){
        const card0H3 = document.querySelector('.card0H3');
        card0H3.classList.remove('text-gray-200');
        card0H3.classList.add('text-black');
        const card0P = document.getElementById('card0-p');
        card0.classList.remove('bg-blue');
        card0.classList.remove('invert-card');
        card0.classList.add('text-black');
        card0P.classList.remove('text-gray-200');
        card0P.classList.add('text-gray-500');
        card0Icon.classList.remove('icon-red');

        allCard.addEventListener('mouseout', function(){
            card0.classList.add('bg-blue');
            card0.classList.add('invert-card');
            card0.classList.remove('text-black');
            card0P.classList.remove('text-gray-500');
            card0H3.classList.add('text-gray-200');
            card0H3.classList.remove('text-black');
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

const card0Icon = document.querySelector('.card0Icon');

const mainContent = document.querySelector('.mainContent');
const body = document.querySelector('body');
const darkModeBtn = document.querySelector('.darkModeBtn');
darkModeBtn.addEventListener('click', function() {
    mainContent.classList.toggle('dark');
    body.classList.toggle('dark');

    const dmLinkedinIcon = document.querySelector('.dmLinkedinIcon');
    dmLinkedinIcon.classList.toggle('hidden');
    const lmLinkedinIcon = document.querySelectorAll('.lmLinkedinIcon');
    lmLinkedinIcon.forEach(lmLinkedinIcons => {
        lmLinkedinIcons.classList.toggle('hidden');
    })

    const card0H3 = document.querySelector('.card0H3');
    const card0 = document.querySelector('.card0');
    card0.classList.toggle('bg-red');
    const cards = document.querySelectorAll(".myServiceCards");

    cards.forEach(allCard=>{
    allCard.addEventListener('mouseover', function(){
        card0H3.classList.toggle('text-black');
        card0H3.classList.toggle('text-gray-200');
        card0.classList.toggle('bg-red');
        card0Icon.classList.toggle('invert-card');
        card0Icon.classList.toggle('icon-red');
        
       
    })
    allCard.addEventListener('mouseout', function(){
        card0.classList.toggle('bg-red');
        
    })
})

})

document.querySelectorAll('.no-translate').forEach(noTranslate => {
    noTranslate.setAttribute('translate', 'no');
})

//br language section

    const h3ResponsivityEn = document.querySelector('.h3ResponsivityEn');
    const h3ResponsivityPt = document.querySelector('.h3ResponsivityPt');

    const language = document.documentElement.lang;

    if (language === 'pt' || language === 'pt-BR') {
        h3ResponsivityEn.classList.add('hidden');
        h3ResponsivityPt.classList.remove('hidden');
    } else {
        h3ResponsivityEn.classList.remove('hidden');
        h3ResponsivityPt.classList.add('hidden');
    }


