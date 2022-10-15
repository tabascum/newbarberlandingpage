//toggle menu button for small screens

const toggle = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggle.onclick = () => {
  navbarLinks.classList.toggle("active");
};

// modal button behavior
