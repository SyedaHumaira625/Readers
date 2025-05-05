let navBar = document.querySelector("nav")
let iconOne = document.querySelector("fa-bars")
let iconTwo = document.querySelector("fa-circle-xmark")

iconOne.addEventListener("click", function() {
    navBar.style.top = "-100%"
})