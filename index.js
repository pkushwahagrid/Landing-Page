//Hero
const recommendParent = document.querySelector(".recommend_section");
const recommendContainer = document.querySelectorAll(".recommend__all");
const createRecommend = () => {
  // Use DocumentFragment to avoid multiple reflows
  const fragment = document.createDocumentFragment();
  recommendContainer.forEach((item) => {
    const newItem = item.cloneNode(true);
    fragment.appendChild(newItem);
  });
  recommendParent.appendChild(fragment);
};
// Use requestAnimationFrame to avoid forced reflow
requestAnimationFrame(createRecommend);

//feature
const house = document.querySelector(".house");
const houseContainer = document.querySelectorAll(".house_container");
const createHouse = () => {
  // Use DocumentFragment to avoid multiple reflows
  const fragment = document.createDocumentFragment();
  houseContainer.forEach((item) => {
    const newItem = item.cloneNode(true);
    fragment.appendChild(newItem);
  });
  house.appendChild(fragment);
};
// Use requestAnimationFrame to avoid forced reflow
requestAnimationFrame(() => {
  createHouse();
  createHouse();
});
//Filter
const houses = document.querySelectorAll(".house_container");
const filterButtons = document.querySelectorAll(".head_btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.getAttribute("data-category");
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      houses.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      houses.forEach((item) => {
        if (item.getAttribute("data-category") === selectedCategory) {
          filterButtons.forEach((b) => {
            b.classList.remove("active");
          });
          button.classList.add("active");
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  });
});

//slider
const slider = document.querySelector(".slider");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

const nextSlide = () => {
  slider.scrollLeft += 400;
};
const prevSlide = () => {
  slider.scrollLeft -= 400;
};
btnRight.addEventListener("click", (e) => {
  nextSlide();
  e.preventDefault();
});
btnLeft.addEventListener("click", (e) => {
  prevSlide();
  e.preventDefault();
});
// review
const reviewHead = document.querySelector(".review_head");
const slideContainer = document.querySelectorAll(".slide");
const createSlide = () => {
  // Use DocumentFragment to avoid multiple reflows
  const fragment = document.createDocumentFragment();
  slideContainer.forEach((item) => {
    const newItem = item.cloneNode(true);
    fragment.appendChild(newItem);
  });
  reviewHead.appendChild(fragment);
};
// Use requestAnimationFrame to avoid forced reflow
requestAnimationFrame(createSlide);

//dots

const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
//insert adjacent element
const createDots = () => {
  // Build all HTML first, then insert once to avoid multiple reflows
  const dotsHTML = Array.from(slides).map((_, i) => {
    const isActive = i === 0 ? 'true' : 'false';
    return `<button class="dots__dot" data-slide="${i}" aria-label="Go to review ${i + 1}" aria-pressed="${isActive}"></button>`;
  }).join('');
  dotContainer.innerHTML = dotsHTML;
};

createDots();
const gotoSlide = (curr) => {
  const targetSlide = slides[curr];
  if (targetSlide) {
    targetSlide.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};
const activeDots = (slide) => {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => {
      dot.classList.remove("dots__dot--active");
      dot.setAttribute("aria-pressed", "false");
    });
  //now set active to curr slide element
  const activeDot = document.querySelector(`.dots__dot[data-slide='${slide}']`);
  if (activeDot) {
    activeDot.classList.add("dots__dot--active");
    activeDot.setAttribute("aria-pressed", "true");
  }
};
dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const currSlide = Number(e.target.dataset.slide);
    // console.log(currSlide);
    gotoSlide(currSlide);
    activeDots(currSlide);
  }
});

//find-more
const moreArticlebtn = document.querySelector(".more_articles_btn");
const moreArticle = document.querySelector(".find-more--1");
const articles = document.querySelectorAll(".article_section-1");
const mainImg = document.querySelector(".article_main_img");
const ownerImg = document.querySelector(".article_owner_img-find--2");
const ownerTitle = document.querySelector(".article_owner_title-find--2");
const articleHeading = document.querySelector(".review_text-title-find--2");
const articleOverview = document.querySelector(
  ".article_overview-text-find--2"
);
console.log(articleOverview.innerHTML);
let counter = articles.length;
moreArticlebtn.addEventListener("click", () => {
  articles.forEach((item) => {
    const newItem = item.cloneNode(true);
    newItem.setAttribute("data-id", `${++counter}`);
    moreArticle.appendChild(newItem);
  });
});

moreArticle.addEventListener("click", (event) => {
  let clickedElement = event.target.closest(".article_section-1");
  console.log(clickedElement);
  let articleImg = clickedElement.querySelector(".article_section1-img");
  let ownerPhoto = clickedElement.querySelector(".article_owner_img");
  let ownerName = clickedElement.querySelector(".article_owner_title");
  let articleTitle = clickedElement.querySelector(".article-owner-description");
  let overviewText = clickedElement.querySelector(".article_overview-text");
  // console.log(overviewText.innerHTML);
  mainImg.src = articleImg.src;
  ownerImg.src = ownerPhoto.src;
  ownerTitle.innerHTML = ownerName.innerHTML;
  articleHeading.innerHTML = articleTitle.innerHTML;
  articleOverview.innerHTML = overviewText.innerHTML;
});

//text Area
const updateLength = () => {
  const textArea = document.querySelector(".textareas");
  const length = document.querySelector(".textarea--length");
  length.textContent = textArea.value.length;
};
//select
const customSelect = document.querySelector(".custom-select");
const selectToggle = document.querySelector(".select-toggle");
const selectMenu = document.querySelector(".select-menu");
const chosenOption = document.getElementById("chosen-option");

selectToggle.addEventListener("click", () => {
  customSelect.classList.toggle("select-active");
});

document.querySelectorAll(".select-menu li").forEach((item) => {
  item.addEventListener("click", function () {
    chosenOption.textContent = this.textContent;
    customSelect.classList.remove("select-active");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  console.log(e.target);
  if (!customSelect.contains(e.target)) {
    customSelect.classList.remove("select-active");
  }
});
// cookies
const cookieHeader = document.querySelector(".footer-cookie");
const cookieClose = document.querySelector(".close");
cookieClose.addEventListener("click", () => {
  cookieHeader.style.display = "none";
});
