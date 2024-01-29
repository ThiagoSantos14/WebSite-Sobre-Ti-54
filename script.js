//Evento darkmode
const btnDarkMode = document.querySelector('.icon-darkmode');
const containerFront = document.querySelector('.front');
const containerBack = document.querySelector('.back');
const containerFull = document.querySelector('.full');

btnDarkMode.addEventListener('click', function(event) {
    event.preventDefault();

    btnDarkMode.style.color = 'white';
    containerFront.classList = 'background-full';
    containerBack.classList = 'background-back';
    containerFull.classList = 'background-front';
});

btnDarkMode.addEventListener('dblclick', function(event) {

    btnDarkMode.style.color = 'black';
    containerFront.classList = 'front';
    containerBack.classList = 'back';
    containerFull.classList = 'full';
});







