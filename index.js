// let navBarContainer = document.querySelector(".nav-sect-1");
let navBar = document.querySelector("nav");
let iconXmark = document.querySelector("#cross-icon");
let iconMenu = document.querySelector("#menu-icon");

iconXmark.addEventListener("click", function () {
  navBar.style.transform = "translateY(-100%)";
});

iconMenu.addEventListener("click", function () {
  navBar.style.transform = "translateY(0px)";
});

let heroSectImg = document.querySelectorAll(".herosect-image");

let counter = 0;

heroSectImg.forEach((image, index) => {
    image.style.left = `${index * 100}%`
});


let slideImg = () => {
    heroSectImg.forEach(() => {
        heroSectImg.style.transform = `translateX(-${counter * 100}%)`
    })
}
