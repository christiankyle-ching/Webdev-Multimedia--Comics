import "./styles/global.css";
import "./styles/tailwind.css";
import "./styles/read.css";

import "./components/sidebar";

import comicAssets from "./assets/comics/*.*";

import "swiper/swiper-bundle.min.css";
import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

// Initialize Swiper Slides
const slideContainer = document.querySelector("#comicViewer .swiper-wrapper");
const preloader = document.createElement('div')
preloader.classList.add('swiper-lazy-preloader')

Object.values(comicAssets).forEach((obj, index) => {
  const imageSrc = obj[Object.keys(obj)[0]];

  const slideEl = document.createElement("div");
  slideEl.classList.add("swiper-slide");

  const imgEl = document.createElement("img");
  imgEl.classList.add('w-full')
  imgEl.loading = 'lazy'
  imgEl.src = imageSrc;
  imgEl.alt = "Page " + (index + 1);

  slideEl.appendChild(preloader.cloneNode());
  slideEl.appendChild(imgEl);

  slideContainer.appendChild(slideEl);
});

const comicViewer = new Swiper("#comicViewer", {
  allowTouchMove: false,
  autoplay: false,
  pagination: {
    el: "#comicViewer .swiper-pagination",
    bulletClass: "pagination-item",
    bulletActiveClass: "selected",
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
});
