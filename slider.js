// script.js

let currentSlideIndex = 0;
const sliderContainer = document.querySelector('.pop-slider');
const slides = document.querySelectorAll('.pop-slider .popCard');
const slideCount = slides.length;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let autoSlideInterval;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  const translateXValue = -currentSlideIndex * slideWidth;
  sliderContainer.style.transition = 'transform 0.3s ease';
  sliderContainer.style.transform = `translateX(${translateXValue}px)`;
}

function movePrev() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slideCount - 1;
  }
  updateSlider();
}

function moveNext() {
  currentSlideIndex++;
  if (currentSlideIndex >= slideCount) {
    currentSlideIndex = 0;
  }
  updateSlider();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentSlideIndex++;
    if (currentSlideIndex >= slideCount) {
      currentSlideIndex = 0;
    }
    updateSlider();
  }, 3000); // Adjust the interval as needed
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto sliding
startAutoSlide();



// Previous and Next button events
prevButton.addEventListener('click', movePrev);
nextButton.addEventListener('click', moveNext);
