const navToggle = document.querySelector(".navBar-toggle");
const navRight = document.querySelector(".navBar-right");

navToggle.addEventListener("click", () =>{
    navRight.classList.toggle("toggle-active");
})
