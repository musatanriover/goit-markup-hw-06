const hamburgerOpenButton = document.getElementById("hamburger-open-button");

const hamburgerCloseButton = document.getElementById("hamburger-menu-close-button");

const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerOpenButton.addEventListener("click", function() {
    hamburgerMenu.classList.add("is-open");
});

hamburgerCloseButton.addEventListener("click", function() {
    hamburgerMenu.classList.remove("is-open");
});