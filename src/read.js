import comicAssets from "./assets/comics/*.*";


// References
const currentPageImage = document.querySelector(".current-page");
const pageNumbersContainer = document.querySelector(".page-numbers");


// Helper Functions
const createPageSelectorElement = (imgSrc, n) => {
  const pageEl = document.createElement("button");
  pageEl.innerText = n;
  pageEl.dataset.imgSrc = imgSrc;
  return pageEl;
};

const highlightPageNumber = (el) => {
    pageSelectors.forEach((e) => e.classList.remove('selected'))
    el.classList.add('selected')
}

const onPageClick = (event, imgSrc) => {
highlightPageNumber(event.target)
  currentPageImage.src = imgSrc;
};


// Initialize Page Numbers & Image Links
Object.values(comicAssets).forEach((obj, index) => {
    
  const imageSrc = obj[Object.keys(obj)[0]];
  pageNumbersContainer.appendChild(
    createPageSelectorElement(imageSrc, index + 1)
  );
});

// Initialize Click Event Listeners
const pageSelectors = document.querySelectorAll("[data-img-src]");
pageSelectors.forEach((el) => 
  el.addEventListener("click", (e) => onPageClick(e, el.dataset.imgSrc))
);

if (pageSelectors.length > 0) pageSelectors[0].click()
