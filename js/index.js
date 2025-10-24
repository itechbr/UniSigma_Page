document.addEventListener("DOMContentLoaded", () => {
  const activeSection = document.querySelector(".team-section.active");
  if (activeSection) {
    activeSection.style.display = "flex";
    activeSection.style.opacity = "1";
    activeSection.style.transform = "translateY(0)";
  }
});


// Footer para topo
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopTrigger = document.querySelector(".logo");

    if (scrollToTopTrigger) {
      scrollToTopTrigger.addEventListener("click", function (e) {
        e.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: ""
        });
      });
    }
  });
