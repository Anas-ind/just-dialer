let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const dotsContainer = document.querySelector('.dots-container');

// Create dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Infinite loop functionality
function autoSlide() {
  setInterval(() => {
    changeSlide(1);
  }, 3000); // Change slide every 3 seconds (adjust as needed)
}

// Event listener for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

autoSlide();
