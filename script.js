function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
        entry.target.classList.add("show", "animated");
      }
    });
  });

  const elements = document.querySelectorAll(".hideaway");
  elements.forEach((element) => observer.observe(element));
}

// Função para configurar os botões do menu
function setupMenuButtons() {
  document.querySelectorAll(".menu-btn").forEach((menuBtn) => {
    const sideMenu = menuBtn.nextElementSibling;

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      sideMenu.classList.toggle("open");
    });

    sideMenu.querySelector(".close-btn").addEventListener("click", () => {
      sideMenu.classList.remove("open");
      menuBtn.classList.remove("open");
    });
  });
}

// Função para configurar o botão de voltar ao topo
function setupBackToTopButton() {
  const backToTopBtn = document.querySelector(".backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// Função para configurar o botão de obter projeto
function setupGetAnyProjectButton() {
  const getAnyProjectBtn = document.querySelector(".getAnyProjectBtn");
  if (getAnyProjectBtn) {
    getAnyProjectBtn.addEventListener("click", function () {
      const projectsSection = document.querySelector(".projectsSection");
      if (projectsSection) {
        const sectionTop = projectsSection.offsetTop;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    });
  }
}

// Função para configurar a rotação das imagens
function setupImageRotation() {
  const images = document.querySelectorAll(".mainPicture0, .mainPicture1, .mainPicture2");
  if (images.length > 0) {
    let currentIndex = 0;

    const showNextImage = () => {
      images[currentIndex].classList.remove("visible");
      images[currentIndex].classList.add("nVisible");

      currentIndex = (currentIndex + 1) % images.length;

      images[currentIndex].classList.remove("nVisible");
      images[currentIndex].classList.add("visible");
    };

    images[currentIndex].classList.add("visible");

    setInterval(showNextImage, 5000);
  }
}

// Função para configurar a digitação do título principal
function setupTitleTyping() {
  const mainTitleName = document.getElementById("main-title-name");
  if (mainTitleName) {
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
  }
}

// Função para configurar a digitação no card menor
function setupSmMainCardTyping() {
  const smMainCardRightTitle = document.querySelector(".smMainCardRightTitle");
  if (smMainCardRightTitle) {
    const smText = smMainCardRightTitle.innerHTML;
    let smTitleNameIndex = 0;
    let smIsDeleting = false;
    let smTypingSpeed = 120;

    function typeForSmMainCardRightTitle() {
      const currentSmText = smText.substring(0, smTitleNameIndex);
      smMainCardRightTitle.innerHTML = currentSmText;

      if (!smIsDeleting && smTitleNameIndex === smText.length) {
        smIsDeleting = true;
        smTypingSpeed = 120;
      } else if (smIsDeleting && smTitleNameIndex === 0) {
        smIsDeleting = false;
        smTypingSpeed = 100;
      }

      smTitleNameIndex += smIsDeleting ? -1 : 1;
      setTimeout(typeForSmMainCardRightTitle, smTypingSpeed);
    }

    setTimeout(typeForSmMainCardRightTitle, smTypingSpeed);
  }
}

// Função para configurar o modo escuro
function setupDarkMode() {
  const mainContent = document.querySelector(".mainContent");
  const body = document.querySelector("body");
  const darkModeBtn = document.querySelectorAll(".darkModeBtn");

  darkModeBtn.forEach((darkModeBtns) => {
    darkModeBtns.addEventListener("click", function () {
      mainContent.classList.toggle("dark");
      body.classList.toggle("dark");

      const dmLinkedinIcon = document.querySelector(".dmLinkedinIcon");
      if (dmLinkedinIcon) dmLinkedinIcon.classList.toggle("hidden");

      const lmLinkedinIcon = document.querySelectorAll(".lmLinkedinIcon");
      lmLinkedinIcon.forEach((lmLinkedinIcons) => {
        lmLinkedinIcons.classList.toggle("hidden");
      });

      const card0H3 = document.querySelector(".card0H3");
      const card0 = document.querySelector(".card0");
      card0.classList.toggle("bg-red");

      const cards = document.querySelectorAll(".myServiceCards");
      cards.forEach((allCard) => {
        allCard.addEventListener("mouseover", function () {
          card0H3.classList.toggle("text-black");
          card0H3.classList.toggle("text-gray-200");
          card0.classList.toggle("bg-red");
          const card0Icon = document.querySelector(".card0Icon");
          if (card0Icon) {
            card0Icon.classList.toggle("invert-card");
            card0Icon.classList.toggle("icon-red");
          }
        });
        allCard.addEventListener("mouseout", function () {
          card0.classList.toggle("bg-red");
        });
      });
    });
  });
}

// Função para configurar a tradução
function setupTranslation() {
  const noTranslateElements = document.querySelectorAll(".no-translate");
  noTranslateElements.forEach((noTranslate) => {
    noTranslate.setAttribute("translate", "no");
  });

  const language = document.documentElement.lang;
  const h3ResponsivityEn = document.querySelector(".h3ResponsivityEn");
  const h3ResponsivityPt = document.querySelector(".h3ResponsivityPt");
  const pDatabaseEn = document.querySelector(".pDatabaseEn");
  const pDatabasePt = document.querySelector(".pDatabasePt");
  const pVersioningEn = document.querySelector(".pVersioningEn");
  const pVersioningPt = document.querySelector(".pVersioningPt");
  const h3VersioningEn = document.querySelector(".h3VersioningEn");
  const h3VersioningPt = document.querySelector(".h3VersioningPt");

  if (language === "pt" || language === "pt-BR") {
    h3ResponsivityEn.classList.add("hidden");
    h3ResponsivityPt.classList.remove("hidden");
    pDatabaseEn.classList.add("hidden");
    pDatabasePt.classList.remove("hidden");
    pVersioningEn.classList.add("hidden");
    pVersioningPt.classList.remove("hidden");
    h3VersioningEn.classList.add("hidden");
    h3VersioningPt.classList.remove("hidden");
  } else {
    h3ResponsivityEn.classList.remove("hidden");
    h3ResponsivityPt.classList.add("hidden");
    pDatabaseEn.classList.remove("hidden");
    pDatabasePt.classList.add("hidden");
    pVersioningEn.classList.remove("hidden");
    pVersioningPt.classList.add("hidden");
    h3VersioningEn.classList.remove("hidden");
    h3VersioningPt.classList.add("hidden");
  }
}

// Função principal
function init() {
  setupIntersectionObserver();
  setupMenuButtons();
  setupBackToTopButton();
  setupGetAnyProjectButton();
  setupImageRotation();
  setupTitleTyping();
  setupSmMainCardTyping();
  setupDarkMode();
  setupTranslation();
}

// Executa a função principal
init();








