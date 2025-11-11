const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

let index = 0;
let slideWidth = slides[0].clientWidth;

function getVisibleSlides() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}

window.addEventListener("resize", () => {
    slideWidth = slides[0].clientWidth;
    updateCarousel();
});

function updateCarousel() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

btnNext.addEventListener("click", () => {
    let visible = getVisibleSlides();
    let maxIndex = slides.length - visible;

    if (index < maxIndex) {
        index++;
        updateCarousel();
    }
});

btnPrev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

// setInterval(() => {
//     let visible = getVisibleSlides();
//     let maxIndex = slides.length - visible;
//
//     if (index < maxIndex) index++;
//     else index = 0;
//
//     updateCarousel();
// }, 10000);
