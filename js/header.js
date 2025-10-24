document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.style.transform = "translateY(-100%)";
  header.style.opacity = "0";
  header.style.transition = "transform 0.6s ease, opacity 0.6s ease";

  setTimeout(() => {
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  }, 100);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

