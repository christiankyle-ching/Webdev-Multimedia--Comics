import Swiper, { Autoplay } from "swiper";
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
