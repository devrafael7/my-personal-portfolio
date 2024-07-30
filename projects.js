  const backToTopBtn = document.querySelectorAll(".backToTopBtn");
  backToTopBtn.forEach(backToTopBtns => {
    backToTopBtns.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  })

  document.querySelectorAll(".no-translate").forEach((noTranslate) => {
    noTranslate.setAttribute("translate", "no");
  });

  const redirectServices = document.querySelectorAll(".redirectServices");

  redirectServices.forEach((allRedirectServices) => {
    allRedirectServices.addEventListener("click", function (event) {
      event.preventDefault(); 

      window.location.href = "index.html#services";
    });
  });

  // Verifica se o hash na URL é #services e faz o scroll suave para a seção
  if (window.location.hash === "#services") {
    const services = document.querySelector(".services");
    if (services) {
      const servicesTop = services.offsetTop;
      window.scrollTo({
        top: servicesTop,
        behavior: "smooth",
      });
    }
  }


  