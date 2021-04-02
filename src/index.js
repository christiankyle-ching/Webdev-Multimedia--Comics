import "./styles/global.css";
import "./styles/tailwind.css";
import "./styles/index.css";

import "./components/sidebar";

import Swiper, {
  Autoplay,
  Navigation,
  Parallax,
  EffectCoverflow,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle";

Swiper.use([Autoplay, Navigation, Parallax, EffectCoverflow]);

const homeSwiper = new Swiper("#homeSwiper", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 100000,
    disableOnInteraction: false,
  },
});

// INIT CHARACTERS
// Import images first
import imgFather from "./assets/characters/father.png";
import imgKorbie from "./assets/characters/korbie.png";
import imgPresident from "./assets/characters/president.png";
import imgDoctor from "./assets/characters/doctor.png";
import imgNurse from "./assets/characters/nurse.png";

// TODO: Define Character Details
const characters = [
  {
    name: "Korbie",
    description: "The main character of the story.",
    image: imgKorbie,
  },
  {
    name: "Korbie's Father",
    description: "Father of Korbie",
    image: imgFather,
  },
  {
    name: "President",
    description: "The president of the country.",
    image: imgPresident,
  },
  {
    name: "Doctor",
    description: "The doctor that conducted tests for Korbie.",
    image: imgDoctor,
  },
  {
    name: "Nurse",
    description: "Nurse in the hospital that cared for Korbie.",
    image: imgNurse,
  },
];

// Init Slides
const characterSwiperSlideContainer = document.querySelector(
  "#characterSwiper .swiper-wrapper"
);

const slideTemplate = document.createElement("div");
slideTemplate.classList.add(
  "swiper-slide",
  "grid",
  "grid-cols-2",
  "md:grid-cols-3",
  "md:px-20"
);

const characterImg = document.createElement("img");
characterImg.classList.add("character-image", "col-span-1", "p-5");

const colContent = document.createElement("div");
colContent.classList.add(
  "col-span-1",
  "md:col-span-2",
  "p-4",
  "sm:p-10",
  "text-white"
);

const characterNameEl = document.createElement("h1");
characterNameEl.classList.add("character-name", "md:text-4xl");

const characterDescriptionEl = document.createElement("h4");
characterDescriptionEl.classList.add("character-description", "pt-3", "font-light");

characterDescriptionEl.dataset.swiperParallax = "-100%";
characterNameEl.dataset.swiperParallax = "-150%";
characterImg.dataset.swiperParallax = "-200%";

colContent.appendChild(characterNameEl);
colContent.appendChild(characterDescriptionEl);

slideTemplate.appendChild(colContent);
slideTemplate.appendChild(characterImg);

// Insert Slides
characters.forEach((c) => {
  const slide = slideTemplate.cloneNode(true);

  slide.querySelector(".character-image").src = c?.image ?? "";
  slide.querySelector(".character-name").innerText = c?.name ?? "";
  slide.querySelector(".character-description").innerText =
    c?.description ?? "";

  characterSwiperSlideContainer.appendChild(slide);
});

const characterSwiper = new Swiper("#characterSwiper", {
  direction: "horizontal",
  grabCursor: true,
  parallax: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  loop: true,
});

// INIT SETTING SWIPER
const settingSwiper = new Swiper("#settingSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: "#settingSwiper .swiper-button-next",
    prevEl: "#settingSwiper .swiper-button-prev",
  },
});
