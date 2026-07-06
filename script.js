const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const aboutCards = document.querySelectorAll(".about-card, .skills-grid-card")

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