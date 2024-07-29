document.querySelectorAll(".menu-btn").forEach((menuBtn) => {
    

  const sideMenu = menuBtn.nextElementSibling;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    sideMenu.classList.toggle("open");
    console.log("oi");
  });

  sideMenu.querySelector(".close-btn").addEventListener("click", () => {
    sideMenu.classList.remove("open");
    menuBtn.classList.remove("open");
  });
});
