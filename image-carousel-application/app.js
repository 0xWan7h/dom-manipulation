const images = [
  {
    url: "https://picsum.photos/id/1015/800/400",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://picsum.photos/id/1016/800/400",
    caption: "Calm Lake at Sunrise",
  },
  {
    url: "https://picsum.photos/id/1018/800/400",
    caption: "Forest Pathway",
  },
  {
    url: "https://picsum.photos/id/1020/800/400",
    caption: "Desert Dunes",
  },
];

const track = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const nav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let currentIndex = 0;
let timeLeft = 5;
function initCarousel() {
  images.forEach((img, index) => {
    const div = document.createElement("div");
    div.className = "carousel-slide";
    div.style.background = `url(${img.url})`;
    track.appendChild(div);

    const indicator = document.createElement("div");
    indicator.className = "carousel-indicator";
    nav.appendChild(indicator);
    indicator.addEventListener("click", () => gotoSlide(index));
  });
  updateCarousel();
}

function gotoSlide(index) {
  currentIndex = index;
  resetTimer();
  updateCarousel();
}

function updateCaption() {
  caption.textContent = images[currentIndex].caption;
}

initCarousel();

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  resetTimer();
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  resetTimer();
  updateCarousel();
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateCaption();
  document.querySelectorAll(".carousel-indicator").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

let autoPlayInterval = null;
let countInterval = null;

function startAutoPlay() {
  autoPlayButton.textContent = "Stop Auto Play";
  timeLeft = 5;
  timerDisplay.textContent = `Next Slide in ${timeLeft}s`;
  autoPlayInterval = setInterval(nextSlide, 5000);
  countInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Next Slide in ${timeLeft}s`;
  }, 1000);
}

function stopAutoPlay() {
  autoPlayButton.textContent = "Start Auto Play";
  timerDisplay.textContent = "";
  clearInterval(autoPlayInterval);
  clearInterval(countInterval);
  autoPlayInterval = null;
  countInterval = null;
}

function resetTimer() {
  if (!autoPlayInterval) return;
  stopAutoPlay();
  startAutoPlay();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

autoPlayButton.addEventListener("click", () => {
  autoPlayInterval ? stopAutoPlay() : startAutoPlay();
});
