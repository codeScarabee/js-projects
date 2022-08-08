let body = document.body;
let slides = document.querySelectorAll(".slide");
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

let activeSlide = 0;

function setBgBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
setBgBody();

rightArrow.addEventListener("click", nextActive);
leftArrow.addEventListener("click", previousActive);

function nextActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  activeSlide++;
  if (activeSlide <= slides.length - 1) {
    slides[activeSlide].classList.add("active");
  } else {
    activeSlide = 0;
    slides[activeSlide].classList.add("active");
  }
  setBgBody();
}
function previousActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  activeSlide--;
  if (activeSlide >= 0) {
    slides[activeSlide].classList.add("active");
  } else {
    activeSlide = slides.length - 1;
    slides[activeSlide].classList.add("active");
  }
  setBgBody();
}
