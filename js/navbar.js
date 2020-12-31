const hambarBtn = document.querySelector(".narBar__hambarBtn");
const menu = document.querySelector(".navBar__menu");
const icons = document.querySelector(".navBar__icon");

function display(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}

hambarBtn.addEventListener("click", display);