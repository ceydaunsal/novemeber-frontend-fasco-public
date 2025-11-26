/*Impelement the Authenticated Header Section START*/
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hambrgrMenu");
  const menu = document.querySelector(".navbar__div");

  hamburgerMenu.addEventListener("click", function () {
      menu.classList.toggle("show");
  });
});

localStorage.setItem("isLogin","true");

document.addEventListener("DOMContentLoaded", function () {
  const isLogin = localStorage.getItem("isLogin") === "true"; /* <-- */

  const normalNavbar = document.querySelector(".navbar"); 
  const loginNavbar = document.querySelector(".header__sec");

  if (isLogin) {
      loginNavbar.style.display = "flex";
      normalNavbar.style.display = "none";
  } else {
      normalNavbar.style.display = "flex";
      loginNavbar.style.display = "none";
  }
});

document.getElementById('hamburgerMenu').addEventListener('click', function() {
const menu = document.getElementById('menu');
menu.classList.toggle('show');
});

const pagesButton = document.getElementById('pages-button');
const pageList = document.getElementById('page-list');

pageList.style.display = 'none'; 

pagesButton.addEventListener('click', function() {
if (pageList.style.display === 'none') {
  pageList.style.display = 'block';
  pageList.style.zIndex = '100';
} else {
  pageList.style.display = 'none';
}
});
/*Impelement the Authenticated Header Section END*/


// [NO-11] Implement the Featured Collection Section  START
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    "images/featured-collec/image (1).png",
    "images/featured-collec/peaky.png",
    "images/featured-collec/peaky-2.png",
    "images/featured-collec/peaky-1.png",
    "images/featured-collec/peaky-3.png",
  ];
  const titles = [
    "Women Collection",
    "Men Collection",
    "Women Collection",
    "Women Collection",
    "Men Collection",
  ];
  const subtitles = [
    "Peaky Blinders",
    "Peaky Blinders",
    "Peaky Blinders",
    "Peaky Blinders",
    "Peaky Blinders" 
  ];
  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.",
  ];
  const sizes = [
    "M",
    "L",
    "S",
    "M",
    "XL"
  ]; 
  const prices = [
    "$100.00",
    "$200.00",
    "$300.00",
    "$200.00",
    "$250.00" 
  ];
  const imagePositions = {
    default: [
    [
      { top: "135px", left: "68px" },
      { top: "300px", left: "26px" },
      { top: "20px", left: "380px" },
      { top: "200px", left: "330px" },
      { top: "470px", left: "335px" },
      { top: "3px", left: "740px" }
    ],
    [
      { top: "150px", left: "60px" },
      { top: "280px", left: "20px" },
      { top: "30px", left: "380px" },
      { top: "220px", left: "360px" },
      { top: "500px", left: "340px" },
      { top: "3px", left: "730px" }
    ],
    [
      { top: "335px", left: "-68px" },
      { top: "430px", left: "-66px" },
      { top: "50px", left: "290px" },
      { top: "300px", left: "230px" },
      { top: "500px", left: "320px" },
      { top: "3px", left: "590px" }
    ],
    [
      { top: "135px", left: "62px" },
      { top: "280px", left: "20px" },
      { top: "20px", left: "340px" },
      { top: "200px", left: "390px" },
      { top: "500px", left: "340px" },
      { top: "3px", left: "680px" }
    ],
    [
      { top: "135px", left: "100px" },
      { top: "440px", left: "-20px" },
      { top: "20px", left: "370px" },
      { top: "310px", left: "350px" },
      { top: "500px", left: "370px" },
      { top: "3px", left: "700px" }
    ]
  ],
  largeScreen:[
    [
      { top: "135px", left: "38px" },
      { top: "300px", left: "-6px" },
      { top: "20px", left: "350px" },
      { top: "200px", left: "300px" },
      { top: "470px", left: "305px" }
    ],
    [
      { top: "150px", left: "40px" },
      { top: "280px", left: "0px" },
      { top: "30px", left: "360px" },
      { top: "220px", left: "340px" },
      { top: "500px", left: "320px" }
    ],
    [
      { top: "335px", left: "-98px" },
      { top: "430px", left: "-96px" },
      { top: "50px", left: "260px" },
      { top: "300px", left: "210px" },
      { top: "500px", left: "290px" }
    ],
    [
      { top: "135px", left: "32px" },
      { top: "280px", left: "-10px" },
      { top: "20px", left: "315px" },
      { top: "200px", left: "355px" },
      { top: "500px", left: "315px" }
    ],
    [
      { top: "135px", left: "70px" },
      { top: "440px", left: "-50px" },
      { top: "20px", left: "340px" },
      { top: "310px", left: "320px" },
      { top: "500px", left: "340px" }
    ]
  ],
  mediumScreen: [
    [
      { top: "135px", left: "18px" },
      { top: "300px", left: "-06px" },
      { top: "20px", left: "330px" },
      { top: "200px", left: "280px" },
      { top: "470px", left: "285px" }
    ],
    [
      { top: "150px", left: "10px" },
      { top: "280px", left: "-20px" },
      { top: "30px", left: "340px" },
      { top: "220px", left: "320px" },
      { top: "500px", left: "300px" }
    ],
    [
      { top: "335px", left: "-118px" },
      { top: "430px", left: "-116px" },
      { top: "50px", left: "240px" },
      { top: "300px", left: "190px" },
      { top: "500px", left: "270px" }
    ],
    [
      { top: "135px", left: "2px" },
      { top: "280px", left: "-40px" },
      { top: "20px", left: "295px" },
      { top: "200px", left: "335px" },
      { top: "500px", left: "295px" }
    ],
    [
      { top: "135px", left: "50px" },
      { top: "440px", left: "-70px" },
      { top: "20px", left: "320px" },
      { top: "310px", left: "300px" },
      { top: "500px", left: "320px" }
    ]
  ],
  smallScreen:[
    [
      { top: "135px", left: "178px" },
      { top: "250px", left: "136px" },
      { top: "20px", left: "430px" },
      { top: "170px", left: "390px" },
      { top: "400px", left: "400px" }
    ],
    [
      { top: "110px", left: "170px" },
      { top: "230px", left: "140px" },
      { top: "20px", left: "430px" },
      { top: "200px", left: "430px" },
      { top: "440px", left: "400px" }
    ],
    [
      { top: "335px", left: "100px" },
      { top: "420px", left: "100px" },
      { top: "60px", left: "470px" },
      { top: "300px", left: "395px" },
      { top: "500px", left: "450px" }
    ],
    [
      { top: "135px", left: "150px" },
      { top: "280px", left: "120px" },
      { top: "20px", left: "425px" },
      { top: "200px", left: "480px" },
      { top: "500px", left: "430px" }
    ],
    [
      { top: "135px", left: "205px" },
      { top: "440px", left: "95px" },
      { top: "25px", left: "450px" },
      { top: "300px", left: "425px" },
      { top: "480px", left: "440px" }
    ]
  ],
};

  let currentIndex = 0;

  const sliderImage = document.getElementById('f_slider-image');
  const sliderTitle = document.getElementById('f_slider-title');
  const sliderSubtitle = document.getElementById('f_slider-subtitle');
  const sliderDescription = document.getElementById('f_slider-description-text');
  const sliderSize = document.getElementById('f_slider-size');
  const sliderPrice = document.getElementById('f_slider-price');

  function updateSlider(index) {
    sliderImage.src = images[index];
    sliderTitle.textContent = titles[index];
    sliderSubtitle.textContent = subtitles[index];
    sliderDescription.textContent = descriptions[index];
    sliderSize.textContent = sizes[index];
    sliderPrice.textContent = prices[index];
    updateImagePositions(index);
  }

  function updateImagePositions(index) {
    let screenType;
  
    if (window.innerWidth > 1750) {
      screenType = 'default';
    } else if (window.innerWidth > 1400) {
      screenType = 'largeScreen';
    } else if (window.innerWidth > 1000) {
      screenType = 'mediumScreen';
    } else {
      screenType = 'smallScreen';
    }

    const positions = imagePositions[screenType][index];

    positions.forEach((pos, i) => {
      const img = document.querySelector(`.f_img${i + 1}`);
      if (img) {
        img.style.position = "absolute";
        img.style.top = pos.top;
        img.style.left = pos.left;
      }
    });
  }

  const prevButton = document.getElementById('f_prev-btn');
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
  });

  const nextButton = document.getElementById('f_next-btn');
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
  });

  window.addEventListener('resize', () => updateImagePositions(currentIndex));
  updateSlider(currentIndex);
});
// [NO-11] Implement the Featured Collection Section  END


const heroIconButton = document.querySelector(".hero_icon_btn");
const heroVectorButton = document.querySelector(".hero_vector_btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    heroVectorButton.style.display = "block";
    heroIconButton.style.display = "block";
  } else {
    heroVectorButton.style.display = "none";
    heroIconButton.style.display = "none";
  }
});

heroVectorButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const leftImg = document.querySelector(".hero__sec_left");
const rightImg = document.querySelector(".hero__sec_right");
const topImg = document.querySelector(".hero__top");
const bottomImg = document.querySelector(".hero__bottom");

const heroImgBox = {
  imgleft: "./images/hero-img/image sol.svg",
  imgright: "./images/hero-img/image sag.svg",
  imgtop: "./images/hero-img/image ust.svg",
  imgbottom: "./images/hero-img/image alt.svg",
};

const render = {
  imgleft: () => {
    leftImg.innerHTML = `<img class="hero__left" src="${heroImgBox.imgleft}" alt="Left Image">`;
  },
  imgright: () => {
    rightImg.innerHTML = `<img class="hero__right" src="${heroImgBox.imgright}" alt="Right Image">`;
  },
  imgtop: () => {
    topImg.innerHTML = `<img class="hero__top" src="${heroImgBox.imgtop}" alt="Top Image">`;
  },
  imgbottom: () => {
    bottomImg.innerHTML = `<img class="hero__bottom" src="${heroImgBox.imgbottom}" alt="Bottom Image">`;
  },
};

const renderimg = () => {
  render.imgleft();
  render.imgright();
  render.imgtop();
  render.imgbottom();
};
renderimg();

//? Trusted Brands Section

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
// [NO-8]
// const daysE = document.getElementById("days");
// const hoursE = document.getElementById("hours");
// const minutesE = document.getElementById("minutes");
// const secondsE = document.getElementById("seconds");

// timer24(259200);

// function timer24(timer) {
//   setInterval(() => {
//     let days = parseInt(timer / 86400, 10);
//     let hours = parseInt((timer / 3600) % 24, 10);
//     let minutes = parseInt((timer / 60) % 60, 10);
//     let seconds = parseInt(timer % 60, 10);

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     timer = timer - 1;
//     daysE.innerHTML = "0" + days;
//     hoursE.innerHTML = hours;
//     minutesE.innerHTML = minutes;
//     secondsE.innerHTML = seconds;
//   }, 1000);
// }
const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondsE = document.getElementById("seconds");

const discountEndDate = new Date("2024-11-29T19:59:59").getTime();
let timer = null;

function initializeTimer() {
  const today = new Date().getTime();
  const remainingTime = discountEndDate - today;
  timer = Math.floor(remainingTime / 1000);
  localStorage.setItem("timer", timer);
}

function resetTimer() {
  localStorage.removeItem("timer");
  initializeTimer();
}

if (!localStorage.getItem("timer")) {
  initializeTimer();
} else {
  const storedTimer = parseInt(localStorage.getItem("timer"));
  const currentTime = Math.floor(
    (discountEndDate - new Date().getTime()) / 1000
  );
  if (storedTimer > currentTime) {
    resetTimer();
  } else {
    timer = storedTimer;
  }
}

function timer24() {
  setInterval(() => {
    if (timer <= 0) {
      clearInterval(timer24);
      localStorage.removeItem("timer");
      return;
    }

    let days = parseInt(timer / 86400, 10);
    let hours = parseInt((timer / 3600) % 24, 10);
    let minutes = parseInt((timer / 60) % 60, 10);
    let seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    daysE.innerHTML = days < 10 ? "0" + days : days;
    hoursE.innerHTML = hours;
    minutesE.innerHTML = minutes;
    secondsE.innerHTML = seconds;

    timer = timer - 1;
    localStorage.setItem("timer", timer);
  }, 1000);
}

timer24();

// [NO-8]

/* BELKIS-NO-17 */
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  const images = [
    { src: "images/image1.png", width: 256, height: 380 },
    { src: "images/image2.png", width: 256, height: 308 },
    { src: "images/image3.png", width: 256, height: 380 },
    { src: "images/image4.png", width: 256, height: 308 },
    { src: "images/image5.png", width: 256, height: 380 },
    { src: "images/image6.png", width: 256, height: 380 },
  ];

  images.forEach((imgData) => {
    const img = document.createElement("img");
    img.src = imgData.src;
    gallery.appendChild(img);
  });

  function swapImages() {
    const imgElements = Array.from(gallery.getElementsByTagName("img"));

    for (let i = 0; i < 2; i++) {
      const lastImage = imgElements.pop();
      gallery.insertBefore(lastImage, imgElements[0]);
    }
  }

  setInterval(swapImages, 2000);
});
/* BELKIS-NO-17 */

/* The Features Banner Section START */
const features = [
  {
    name: "High Quality",
    description: "Crafted from top materials",
    image: "./images/features-img/quality-vector.svg",
  },
  {
    name: "Warrany Protection",
    description: "Over 2 years",
    image: "./images/features-img/warranty-vector.svg",
  },
  {
    name: "Free Shipping",
    description: "Order over 150 $",
    image: "./images/features-img/shipping-vector.svg",
  },
  {
    name: "24 / 7 Support",
    description: "Dedicated support",
    image: "./images/features-img/support-vector.svg",
  },
];

const featuresContainer = document.getElementById("ftr-con");
console.log(featuresContainer);

const implementFeatures = (features) => {
  featuresContainer.innerHTML = features
    .map((features) => {
      console.log(features);
      return `
        <div class="ftr-card">
          <img src="${features.image}" class="ftr-card-icon" alt="Features Card Icon">
          <div class="ftr-card-body">
            <h3 class="ftr-card-title">${features.name}</h3>
            <p class="ftr-card-text">${features.description}</p>
          </div>
        </div>`;
    })
    .join("");
};

implementFeatures(features);
/* The Features Banner Section END */

const newsletterData = {
  title: "Subscribe To Our Newsletter",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque quis ultrices sollicitudin eleifend sem. Scelerisque quis ultrices sollicitudin.",
  placeholder: "michael@ymail.com",
  buttonText: "Subscribe Now",
  leftImage: {
    src: "images/[NO-10]/image man.svg",
  },
  rightImage: {
    src: "images/[NO-10]/image women.svg",
  },
};

function renderNewsletter(data) {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div class="newsletter-container">
          <img class="model model-left" src="${data.leftImage.src}" alt="${data.leftImage.alt}">
          <div class="content">
              <h1>${data.title}</h1>
              <p>${data.description}</p>
              <input type="email" placeholder="${data.placeholder}">
               <button>${data.buttonText}</button>
          </div>
          <img class="model model-right" src="${data.rightImage.src}" alt="${data.rightImage.alt}">
      </div>
  `;
}

renderNewsletter(newsletterData);
