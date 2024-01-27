// // Banner section

// let banner = document.querySelector(".banner");
// let bannerItems = document.querySelectorAll(".banner-content_item");

// // Service section
// let servicesSection = document.querySelector(".services");
// let serviceSubtitle = document.querySelector(".services-subtitle");
// let serviceTitle = document.querySelector(".services-title");

// console.log(serviceSubtitle);

// // About us section
// let aboutUsItems = document.querySelectorAll(".about-us_item");
// let about = document.querySelector(".about");

// // Experience section
// let experience = document.querySelector(".experience");
// let experienceItems = document.querySelectorAll(".experience-content_item");

// // Testimonials
// let testimonials = document.querySelector(".testimonials");
// let testTitle = document.querySelector(".testimonial-title");
// let testSubtitle = document.querySelector(".testimonial-subtitle");

// // Blog  
// let blog = document.querySelector(".blog")
// let blogContent = document.querySelector(".blog-content");
// let blogContentItem = document.querySelector(".blog-content_items");
// let blogSubTitle = document.querySelector(".blog-subtitle");
// let blobTitle = document.querySelector(".blog-title");

// // SingUp
// let singUp = document.querySelector(".signup");
// let signUpTitle = document.querySelector(".signup-title");
// let signUpText = document.querySelector(".signup-text");

// // Footer
// let footer = document.querySelector(".page-footer");
// let footerContent = document.querySelector(".footer-content");

// let zero = 0;

// // Animations

// window.addEventListener("DOMContentLoaded", () => {
//     bannerItems.forEach((el) => {
//         el.style = `transform:translateX(${zero});
//                             opacity:${1};`;
//     });
// });

// console.log(aboutUsItems);

// window.addEventListener("scroll", () => {
//     if (scrollY > about.offsetTop - about.clientHeight / 2) {
//         aboutUsItems.forEach((item) => {
//             item.style = `transform:translateX(${zero});
//                                     opacity:${1};`;
//         });
//     }
// });

// window.addEventListener("scroll", () => {
//     if (scrollY > experience.offsetTop - experience.clientHeight / 2) {
//         experienceItems.forEach((item) => {
//             item.style = `transform:translateX(${zero});
//                                     opacity:${1};`;
//         });
//     }
// });

// window.addEventListener("scroll", () => {
//     if (
//         scrollY >
//         servicesSection.offsetTop - servicesSection.clientHeight / 2
//     ) {
//         serviceSubtitle.style.transform = `translateY(0)`;
//         serviceSubtitle.style.opacity = 1;
//         serviceTitle.style.transform = `translateY(0)`;
//         serviceTitle.style.opacity = 1;
//     }
// });

// window.addEventListener("scroll", () => {
//     if (scrollY > testimonials.offsetTop - testimonials.clientHeight / 2) {
//         testTitle.style.transform = `rotateY(720deg)`;
//         testTitle.style.opacity = 1;
//         testSubtitle.style.transform = `translateY(0)`;
//         testSubtitle.style.opacity = 1;
//     }
// });

// window.addEventListener("scroll", () => {
//     if (scrollY > blog.offsetTop - blog.clientHeight / 2) {
//         blogSubTitle.style.transform = `rotateX(720deg)`;
//         blogSubTitle.style.opacity = 1;
//         blobTitle.style.transform = `translateY(0)`;
//         blobTitle.style.opacity = 1;
//     }
// });

// window.addEventListener("scroll", () => {
//     if (scrollY > singUp.offsetTop - singUp.clientHeight / 2) {
//         signUpTitle.style.transform = `translateY(0)`;
//         signUpTitle.style.opacity = 1;
//         signUpText.style.transform = `translateY(0)`;
//         signUpText.style.opacity = 1;
//     }
// });

// Swiper js code

// sonlani 0 dan 100 atish formulasi 

// let number = document.querySelectorAll(".info-item_count");

// for (let i = 0; i < number.length; i++) {
//     const count = number[i].getAttribute("zafar");
//     console.log(count);
//     function rec(index = 0) {
//         number[i].innerHTML = index;
//         index++;
//         if (index <= count) {
//             setTimeout(() => {
//                 rec(index);
//             }, 15);
//         }
//     }


//     rec();
// }


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 37,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 120,
    autoplay: true,
    navigation: {
        nextEl: ".testimonials-button-next",
        prevEl: ".testimonials-button-prev",
    },
});


AOS.init();




// BODYNI RGB ATISH FORMULASI
// let body = document.querySelector("body")


let number = document.querySelectorAll(".info-item_count");
function randomNumbers() {
    return Math.round(Math.random() * (250 - 1) + 1);
}

// for (let i = 0; i < number.length; i++) {
//     const count = number[i].getAttribute("zafar");
//     console.log(count);
//     function rec(index = 0) {
//         number[i].innerHTML = index;
//         index++;
//         if (index <= count) {
//             setTimeout(() => {
//                 const randomColor = getRandomColor();
//                 number[i].style.color = randomColor;
//                 rec(index);
//             }, 15);
//         }
//     }
    
//     rec();
//     }


for (let i = 0; i < number.length; i++) {
    const count = number[i].getAttribute("zafar");
    console.log(count);
    function rec(index = 0) {
        number[i].innerHTML = index;
        index++;
        if (index <= count) {
            setTimeout(() => {
                rec(index);
            }, 15);
        }
    }


    rec();
}

setInterval (function () {
    let r = randomNumbers();
    let g = randomNumbers();
    let b = randomNumbers();
    number.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    number.style.transition = "1s";
}, 2000);


