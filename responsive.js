const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('buttons')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)