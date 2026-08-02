// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// Buy Button Animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


// Header Shadow on Scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";

    }

});


// Reveal Animation

const cards = document.querySelectorAll(".card");

const revealCards = () => {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

};

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "0.6s";

});

window.addEventListener("scroll", revealCards);

revealCards();


// Current Year in Footer

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${year} Best Product Hub. All Rights Reserved.`;

}
