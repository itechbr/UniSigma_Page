//MAIN2 - Animação de entrada para as caixas de serviço
document.addEventListener("DOMContentLoaded", () => {
  const serviceBoxes = document.querySelectorAll(".service-box");

  serviceBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("visible");
    }, index * 200); // delay escalonado
  });
});

// Força verificação após carregamento
window.addEventListener("load", () => {
  serviceBoxes.forEach(box => observer.observe(box));
});

//MAIN3 - Animação de transição entre seções da equipe
const buttons = document.querySelectorAll('.team-buttons button');
const sections = document.querySelectorAll('.team-section');

let currentIndex = 0;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Atualiza botões ativos
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Define direção da animação
    const direction = index > currentIndex ? 'left' : 'right';
    currentIndex = index;

    const currentSection = document.querySelector('.team-section.active');
    const nextSection = document.getElementById(button.dataset.team);

    if (currentSection !== nextSection) {
      // Animação de saída
      currentSection.classList.remove('active');
      currentSection.style.animation = `slideOut${direction.charAt(0).toUpperCase() + direction.slice(1)} 0.5s forwards`;

      // Aguarda a saída antes de mostrar a nova
      setTimeout(() => {
        currentSection.style.display = 'none';
        nextSection.style.display = 'flex';
        nextSection.classList.add('active');
        nextSection.style.animation = `slideIn${direction.charAt(0).toUpperCase() + direction.slice(1)} 0.5s forwards`;
      }, 500);
    }
  });
});
