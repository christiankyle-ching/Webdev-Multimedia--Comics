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

// Background Swiper
const homeSwiper = new Swiper("#homeSwiper", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Init: Characters
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
slideTemplate.classList.add("swiper-slide");

const characterImg = document.createElement("img");
characterImg.classList.add("character-image");

const colContent = document.createElement("div");
colContent.classList.add("col-content");

const characterNameEl = document.createElement("h1");
characterNameEl.classList.add("character-name");

const characterDescriptionEl = document.createElement("h4");
characterDescriptionEl.classList.add("character-description");

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

// Character Swiper
const characterSwiper = new Swiper("#characterSwiper", {
  direction: "horizontal",
  grabCursor: true,
  parallax: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: true,
  },
  loop: true,
});

/**
 * FIXME: Settings Swiper
 * Should I remove swiper for setting of the story?
 */
// const settingSwiper = new Swiper("#settingSwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   navigation: {
//     nextEl: "#settingSwiper .swiper-button-next",
//     prevEl: "#settingSwiper .swiper-button-prev",
//   },
// });
