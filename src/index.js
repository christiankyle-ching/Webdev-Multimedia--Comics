import "./styles/global.css";
import "./styles/tailwind.css";
import "./styles/index.css";

import "./components/sidebar";

import Swiper, { Autoplay, Navigation, Parallax } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Autoplay, Parallax]);

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
slideTemplate.classList.add("swiper-slide", "grid", "grid-cols-2");

const characterImg = document.createElement("img");
characterImg.classList.add("character-image", "col-span-1");

const colContent = document.createElement("div");
colContent.classList.add("col-span-1", "p-4", "sm:p-10", "text-white");

const characterNameEl = document.createElement("h3");
characterNameEl.classList.add("character-name", "text-lg", "md:text-2xl");
const characterSubtitleEl = document.createElement("h5");
characterSubtitleEl.classList.add(
  "character-subtitle",
  "pt-1",
  "text-base",
  "md:text-lg"
);
const characterDescriptionEl = document.createElement("p");
characterDescriptionEl.classList.add(
  "character-description",
  "pt-3",
  "text-sm",
  "md:text-base"
);

characterNameEl.dataset.swiperParallax = "-100%";
characterSubtitleEl.dataset.swiperParallax = "-75%";
characterDescriptionEl.dataset.swiperParallax = "-50%";
characterImg.dataset.swiperParallax = "-25%";

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
  parallax: true,
});
