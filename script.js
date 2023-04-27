const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const slides = slider.querySelectorAll(".slide");
let currentSlide = 0;

// hide all slides except the first one
for (let i = 1; i < slides.length; i++) {
  slides[i].classList.remove("active-slide");
}

// add click event listeners to buttons
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    slider.scroll({
      left: slides[currentSlide].offsetLeft,
      behavior: "smooth",
    });
    setActiveSlide();
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    slider.scroll({
      left: slides[currentSlide].offsetLeft,
      behavior: "smooth",
    });
    setActiveSlide();
  }
});

// set the active slide
function setActiveSlide() {
  // remove active-slide class from all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }
  // add active-slide class to current slide
  slides[currentSlide].classList.add("active-slide");
}
