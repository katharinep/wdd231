const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

function showBlue() {
    blue.classList.toggle('show');
}

green.addEventListener('click', showBlue);