const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        entry.target.classList.add("show", "animated");
      }
    });
  });

const elements = document.querySelectorAll(".hideaway");
elements.forEach((element) => observer.observe(element));