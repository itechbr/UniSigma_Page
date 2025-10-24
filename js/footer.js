document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer.rodape");
    footer.style.opacity = "0";
    footer.style.transform = "translateY(40px)";
    footer.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.style.opacity = "1";
          footer.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.3 });

    observer.observe(footer);
  });