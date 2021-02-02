import "./styles/global.css"
import "./styles/tailwind.css"
import "./styles/index.css"

import "./components/sidebar"

import Swiper, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css"

Swiper.use([Autoplay]);

const homeSwiper = new Swiper("#homeSwiper", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
