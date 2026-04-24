document.addEventListener("DOMContentLoaded", () => {

  /* ================= FADE IN / OUT ================= */
  const elements = document.querySelectorAll(".reveal-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  elements.forEach(el => observer.observe(el));


  /* ================= NAVBAR BEHAVIOR ================= */
  let lastScroll = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling DOWN → hide navbar
    navbar.classList.add("hide");
  } else {
    // scrolling UP → show navbar immediately
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
});