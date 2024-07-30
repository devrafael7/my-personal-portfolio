    const backToTopBtn = document.querySelectorAll(".backToTopBtn");
  backToTopBtn.forEach(backToTopBtns => {
    backToTopBtns.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  })

    const redirectServices = document.querySelectorAll(".redirectServices");
    redirectServices.forEach((allRedirectServices) => {
        allRedirectServices.addEventListener("click", function () {
      const services = document.querySelector(".services");
      const servicesTop = services.offsetTop;
      window.scrollTo({
        top: servicesTop,
        behavior: "smooth",
      });
    });
  });