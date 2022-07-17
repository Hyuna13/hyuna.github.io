const body = document.querySelector('.main')
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("background")

bgImage.src = `img/${chosenImage}`;
bgImage.style.height = '100%';
bgImage.style.width = '100%';

body.appendChild(bgImage);