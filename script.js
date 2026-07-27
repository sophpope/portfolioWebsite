// Card Scroll animation
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const aboutCards = document.querySelectorAll(".about-card, .skills-grid-card, .project-card")

function highlightTopCard(){
    aboutCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop <= 150 && cardTop >= 0) {
            card.classList.add("active");

        } else{
            card.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", highlightTopCard);



// Carousel Animation
const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function getScrollAmount() {
const card = carousel.querySelector(".card");
const gap = parseFloat(getComputedStyle(carousel).gap) || 0;

return card.getBoundingClientRect().width + gap;
}

leftArrow.addEventListener("click", () => {
carousel.scrollBy({
    left: -getScrollAmount(),
    behavior: "smooth"
});
});

rightArrow.addEventListener("click", () => {
carousel.scrollBy({
    left: getScrollAmount(),
    behavior: "smooth"
});
});