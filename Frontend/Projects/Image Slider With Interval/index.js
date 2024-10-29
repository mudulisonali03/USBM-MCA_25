
const images = document.querySelectorAll('.images img');
let currentIndex = 0;

function changeImage() {
  images[currentIndex].classList.remove('visible');
  images[currentIndex].classList.add('hidden');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.remove('hidden');
  images[currentIndex].classList.add('visible');
}
setInterval(changeImage, 3000);
