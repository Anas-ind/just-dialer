

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


var placeholders = ['Search for Restaurants',
                    'Search for Spa and Salons',
                    'Search for Packers and Movers',
                    'Search in Delhi',
                    'Search for Real Estate Agents',
                    'Search for Pest Control Services',
                    'Search in my area'
                  ]; // Array of placeholder options
var currentIndex1 = 0;

function changePlaceholder() {
  var inputElement = document.getElementById('myInput');
  inputElement.placeholder = placeholders[currentIndex1]; // Set the placeholder text to the current option
  currentIndex1 = (currentIndex1 + 1) % placeholders.length; // Increment index and loop back to the beginning if necessary
}

// Call the changePlaceholder() function every 3 seconds (3000 milliseconds)
setInterval(changePlaceholder, 2000);



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
