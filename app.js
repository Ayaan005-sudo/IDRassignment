const hamburger = document.querySelector(".Hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active")
})