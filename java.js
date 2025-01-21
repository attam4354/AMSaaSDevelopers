document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
  
    toggleButton.addEventListener("click", () => {
      navbarMenu.classList.toggle("show");
    });
  });
  