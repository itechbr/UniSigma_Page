document.querySelectorAll('.team-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.team-buttons button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.team-section').forEach(section => section.classList.remove('active'));
        document.getElementById(button.dataset.team).classList.add('active');
    });
});