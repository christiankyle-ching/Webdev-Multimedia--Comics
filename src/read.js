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
      return `<span class="inline-block ${className}">${index + 1}</span>`;
    },
  },
});

// Assign Page Numbers
const currentPage = document.querySelector('.current');
const totalPages = document.querySelector('.total');

currentPage.innerText = 1
totalPages.innerText = Object.keys(comicAssets).length

// Event Listener - onSlideChange
comicViewer.on("slideChange", (swiper) => {
  currentPage.innerText = swiper.activeIndex + 1
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})