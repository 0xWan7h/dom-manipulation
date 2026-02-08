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
let autoPlayInterval = null;
let countdownInterval = null;
let timeLeft = 5;

function startAutoPlay() {
  autoPlayButton.textContent = "Stop Auto Play";
  timeLeft = 5;
  timerDisplay.textContent = `Next slide in ${timeLeft}s`;

  autoPlayInterval = setInterval(nextSlide, 5000);

  countdownInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Next slide in ${timeLeft}s`;
  }, 1000);
}

function stopAutoPlay() {
  autoPlayButton.textContent = "Start Auto Play";
  timerDisplay.textContent = "";
  clearInterval(autoPlayInterval);
  clearInterval(countdownInterval);
  autoPlayInterval = null;
  countdownInterval = null;
}

function resetTimer() {
  if (!autoPlayInterval) return;
  stopAutoPlay();
  startAutoPlay();
}

autoPlayButton.addEventListener("click", () => {
  autoPlayInterval ? stopAutoPlay() : startAutoPlay();
});

function initCarousel() {
  images.forEach((img, index) => {
    // slides
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.style.backgroundImage = `url(${img.url})`;
    track.appendChild(slide);

    // Indicators
    const dot = document.createElement("div");
    dot.className = "carousel-indicator";
    console.log(index);
    dot.addEventListener("click", () => goToSlide(index));

    nav.appendChild(dot);
  });
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  resetTimer();
  updateCarousel();
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  caption.textContent = images[currentIndex].caption;

  document.querySelectorAll(".carousel-indicator").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

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

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

initCarousel();
