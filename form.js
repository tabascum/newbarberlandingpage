//toggle menu button for small screens

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.onclick = () => navbarLinks.classList.toggle("active");
