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
import sampleImage1 from "./assets/characters/sample-1.png";
import sampleImage2 from "./assets/characters/sample-2.png";

// Define Array of Characters
const characters = [
  {
    name: "Sample Name 1",
    subtitle: "Role / Subtitle",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nisi ipsa accusamus quaerat obcaecati, laudantium ipsam dolorum. Amet repudiandae repellat eligendi sunt debitis pariatur quibusdam voluptates doloremque accusamus, saepe hic?",
    image: sampleImage1,
  },
  {
    name: "Sample Name 2",
    subtitle: "Role / Subtitle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non quasi nobis suscipit numquam sit ratione id similique. Quis maxime vitae voluptas, fugiat similique atque tempora sunt ea, fuga veritatis, corporis quas quidem quo at expedita nesciunt deserunt soluta impedit!",
    image: sampleImage2,
  },
  {
    name: "Sample Name 3",
    subtitle: "Role / Subtitle",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nisi ipsa accusamus quaerat obcaecati, laudantium ipsam dolorum. Amet repudiandae repellat eligendi sunt debitis pariatur quibusdam voluptates doloremque accusamus, saepe hic?",
    image: sampleImage1,
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
characterImg.classList.add("character-image", "col-span-1");

const colContent = document.createElement("div");
colContent.classList.add(
  "col-span-1",
  "md:col-span-2",
  "p-4",
  "sm:p-10",
  "text-white"
);

const characterNameEl = document.createElement("h2");
characterNameEl.classList.add("character-name", "text-2xl", "md:text-4xl");
const characterSubtitleEl = document.createElement("h4");
characterSubtitleEl.classList.add(
  "character-subtitle",
  "pt-1",
  "text-lg",
  "md:text-2xl"
);
const characterDescriptionEl = document.createElement("p");
characterDescriptionEl.classList.add(
  "character-description",
  "pt-3",
  "text-sm",
  "md:text-base"
);

characterDescriptionEl.dataset.swiperParallax = "-50%";
characterSubtitleEl.dataset.swiperParallax = "-100%";
characterNameEl.dataset.swiperParallax = "-150%";
characterImg.dataset.swiperParallax = "-200%";

colContent.appendChild(characterNameEl);
colContent.appendChild(characterSubtitleEl);
colContent.appendChild(characterDescriptionEl);

slideTemplate.appendChild(colContent);
slideTemplate.appendChild(characterImg);

// Insert Slides
characters.forEach((c) => {
  const slide = slideTemplate.cloneNode(true);

  slide.querySelector(".character-image").src = c.image;
  slide.querySelector(".character-name").innerText = c.name;
  slide.querySelector(".character-subtitle").innerText = c.subtitle;
  slide.querySelector(".character-description").innerText = c.description;

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
  }
});
