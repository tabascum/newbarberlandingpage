/*

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('button-l')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton);


function showMenu () {
    let hamburger = getElementById("header");
    if (hamburger.style.display === "block") {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}

*/




const hamburger =  document.getElementById('.hamburger');
const navItem =  document.getElementById('button-l');

hamburger.addEventListener('click', () => {
  navItem.classList.toggle('show');
});

