const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel > div');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length; // Asegura que el índice esté dentro de los límites
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));
