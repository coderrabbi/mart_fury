$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#two").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 5,
      },
    },
  });
});

let countDownDate = new Date("Jun 29, 2023 15:37:25").getTime();

let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("coundown").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("coundown").innerHTML = "EXPIRED";
  }
}, 1000);

const bestSellingItems = async () => {
  try {
    const url = `/bestseller.json`;
    const res = await fetch(url);
    const data = await res.json();
    displayBestSellingItems(data);
  } catch (error) {
    console.log(error);
  }
};

const displayBestSellingItems = (data) => {
  const sellingItems = document.getElementById("best__selling__item");
  data.forEach((item) => {
    const catagoryDiv = document.createElement("div");
    catagoryDiv.classList.add("swiper-slide");
    catagoryDiv.innerHTML = `
   <div> 
   <a  href="${item.link}" target="_blank">
   
   <div class="product">
   <div class="product__img"><img src="${item.img1}" alt=""></div>
   <div class="product__content">
  
   <a href="${item.link}" target="_blank">${item.title}</a>
   </div>

 </div>
   </a>
   </div>`;

    sellingItems.appendChild(catagoryDiv);
  });
};

bestSellingItems();

// const homeElectronics = async () => {
//   try {
//     const url = `/home.json`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayHomeElectronics(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const displayHomeElectronics = (data) => {
//   const electronicsItems = document.getElementById("electronic__items");
//   data.forEach((item) => {
//     const elctronicDiv = document.createElement("div");
//     elctronicDiv.innerHTML = `
//       <div class="product">
//         <div class="product__img"><img src="${item.img1}" alt=""></div>
//         <div class="product__content">

//          <a href="">${item.title}</a>
//          <div class="review__stars">
//           <i class="fa-solid fa-star" style="color: #ffcc00"></i>
//           <i class="fa-solid fa-star" style="color: #ffcc00"></i>
//           <i class="fa-solid fa-star" style="color: #ffcc00"></i>
//           <i class="fa-solid fa-star" style="color: #ffcc00"></i>
//           <i class="fa-solid fa-star" style="color: #ffcc00"></i>
//           <span>2</span>
//          </div>
//          <div class="product__price">
//           <span class="price">$${item.sale_price}</span>
//           <span class="old__price">${
//             item.regular_price ? `$${item.regular_price}` : ""
//           }</span>
//         </div>
//         <div> ${
//           item.discount
//             ? `<span class="discount-percent">${item.discount}%</span>`
//             : ""
//         }</div>
//         </div>
//       </div>`;

//     electronicsItems.appendChild(elctronicDiv);
//   });
// };

// homeElectronics();
const technologies = async () => {
  try {
    const url = `/computer_and_tech.json`;
    const res = await fetch(url);
    const data = await res.json();
    displayTechnology(data);
  } catch (error) {
    console.log(error);
  }
};
const displayTechnology = (data) => {
  const technologyItem = document.getElementById("technology__items");
  data.forEach((item) => {
    const techDiv = document.createElement("div");
    techDiv.classList.add("swiper-slide");
    techDiv.innerHTML = `
    <div> 
    <a  href="${item.link}" target="_blank">
    
    <div class="product">
    <div class="product__img"><img src="${item.img1}" alt=""></div>
    <div class="product__content">
   
    <a href="${item.link}" target="_blank">${item.title}</a>
    </div>
 
  </div>
    </a>
    </div>`;

    technologyItem.appendChild(techDiv);
  });
};

technologies();
const cameras = async () => {
  try {
    const url = `/camera_and_videos.json`;
    const res = await fetch(url);
    const data = await res.json();
    displayCameras(data);
  } catch (error) {
    console.log(error);
  }
};
const displayCameras = (data) => {
  const cameraItems = document.getElementById("camera__lists");
  data.forEach((item) => {
    const cameraDiv = document.createElement("div");
    cameraDiv.classList.add("swiper-slide");
    cameraDiv.innerHTML = `
      <div class="product">
        <div class="product__img"><img src="${item.img1}" alt=""></div>
        <div class="product__content">
     
         <a href="">${item.title}</a>
         <div class="review__stars">
          <i class="fa-solid fa-star" style="color: #ffcc00"></i>
          <i class="fa-solid fa-star" style="color: #ffcc00"></i>
          <i class="fa-solid fa-star" style="color: #ffcc00"></i>
          <i class="fa-solid fa-star" style="color: #ffcc00"></i>
          <i class="fa-solid fa-star" style="color: #ffcc00"></i>
          <span>2</span>
         </div> 
         <div class="product__price">
          <span class="price">$${item.sale_price}</span>
          <span class="old__price">${
            item.regular_price ? `$${item.regular_price}` : ""
          }</span>
        </div>
       <div> ${
         item.discount
           ? `<span class="discount-percent">${item.discount}%</span>`
           : ""
       }</div>
        </div>
      </div>`;

    cameraItems.appendChild(cameraDiv);
  });
};

cameras();
