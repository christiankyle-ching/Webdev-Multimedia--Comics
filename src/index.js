import "./styles/global.css";
import "./styles/tailwind.css";
import "./styles/index.css";

import "./components/sidebar";

import Swiper, { Autoplay, Parallax } from "swiper";
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
import sampleImage1 from "./assets/comics/1.jpg";
import sampleImage2 from "./assets/comics/2.jpg";

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
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nisi ipsa accusamus quaerat obcaecati, laudantium ipsam dolorum. Amet repudiandae repellat eligendi sunt debitis pariatur quibusdam voluptates doloremque accusamus, saepe hic?",
    image: sampleImage2,
  },
];

// Init Slides
const characterSwiperSlideContainer = document.querySelector(
  "#characterSwiper .swiper-wrapper"
);

const slideEl = document.createElement("div");
slideEl.classList.add("swiper-slide", "p-10", "text-white");

const insideContainer = document.createElement("div");
insideContainer.classList.add("w-1/2");

const characterNameEl = document.createElement("h3");
characterNameEl.classList.add("character-name");
const characterSubtitleEl = document.createElement("h3");
characterSubtitleEl.classList.add("character-subtitle", "pt-1");
const characterDescriptionEl = document.createElement("p");
characterDescriptionEl.classList.add("character-description", "pt-3");

insideContainer.appendChild(characterNameEl);
insideContainer.appendChild(characterSubtitleEl);
insideContainer.appendChild(characterDescriptionEl);
slideEl.appendChild(insideContainer);

characters.forEach((character) => {
  const slide = slideEl.cloneNode(true);

  slide.dataset.backgroundImage = character.image;
  slide.querySelector(".character-name").innerText = character.name;
  slide.querySelector(".character-subtitle").innerText = character.subtitle;
  slide.querySelector(".character-description").innerText =
    character.description;

  characterSwiperSlideContainer.appendChild(slide);
});

const characterSwiper = new Swiper("#characterSwiper", {
  direction: "horizontal",
  parallax: true,
  init: false,
});

characterSwiper.on("afterInit", function (swiper) {
  const bgImage = swiper.slides[0].dataset.backgroundImage;

  const parallax = swiper.el.querySelector(".bg-parallax");
  parallax.style.backgroundImage = `url(${bgImage})`;
});

characterSwiper.init();

characterSwiper.on("slideChange", function (swiper) {
  const bgImage = swiper.slides[swiper.activeIndex].dataset.backgroundImage;

  const parallax = swiper.el.querySelector(".bg-parallax");
  parallax.style.backgroundImage = `url(${bgImage})`;
});
