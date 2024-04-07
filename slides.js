

let currentIndex = 0;
const slider = document.querySelector('.slidero1');
const cards = document.querySelectorAll('.slidero1 .cardo1');
const cardCount = cards.length;
const prevButton = document.querySelector('.prevo1');
const nextButton = document.querySelector('.nexto1');
let autoSlideInterval;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;
  const translateXValue = -currentIndex * cardWidth;
  slider.style.transition = 'transform 0.3s ease';
  slider.style.transform = `translateX(${translateXValue}px)`;
}

function prevSlide1() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cardCount - 1;
  }
  updateSlider();
}

function nextSlide1() {
  currentIndex++;
  if (currentIndex >= cardCount) {
    currentIndex = 0;
  }
  updateSlider();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= cardCount) {
      currentIndex = 0;
    }
    updateSlider();
  }, 3000); // Adjust the interval as needed
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto sliding
startAutoSlide();

// // Reset auto sliding when mouse enters the slider container
// slider.addEventListener('mouseenter', stopAutoSlide);
// slider.addEventListener('mouseleave', startAutoSlide);

// Previous and Next button events
prevButton.addEventListener('click', prevSlide1);
nextButton.addEventListener('click', nextSlide1);



// let currentIndex = 0;
// const slider = document.querySelector('.slidero1');
// const cards = document.querySelectorAll('.slidero1 .cardo1');
// const cardCount = cards.length;
// const prevButton = document.querySelector('.prevo1');
// const nextButton = document.querySelector('.nexto1');

// function updateSlider() {
//   const cardWidth = cards[0].offsetWidth;
//   const translateXValue = -currentIndex * cardWidth;
//   slider.style.transition = 'transform 0.3s ease';
//   slider.style.transform = `translateX(${translateXValue}px)`;
// }

// function prevSlide1() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = cardCount - 1;
//   }
//   updateSlider();
// }

// function nextSlide1() {
//   currentIndex++;
//   if (currentIndex >= cardCount) {
//     currentIndex = 0;
//   }
//   updateSlider();
// }

// prevButton.addEventListener('click', prevSlide1);
// nextButton.addEventListener('click', nextSlide1);


// let currentIndex = 0;
// const slider = document.querySelector('.slidero1');
// const cards = document.querySelectorAll('.slidero1 .cardo1');
// const cardCount = cards.length;

// function updateSlider() {
//   const cardWidth = cards[0].offsetWidth;
//   currentIndex++;
//   if (currentIndex >= cardCount) {
//     currentIndex = 0;
//   }
//   const translateXValue = -currentIndex * cardWidth;
//   slider.style.transition = 'transform 0.3s ease';
//   slider.style.transform = `translateX(${translateXValue}px)`;
// }

// function autoSlide() {
//   setInterval(() => {
//     updateSlider();
//   }, 3000); // Adjust the interval as needed
// }

// autoSlide();
