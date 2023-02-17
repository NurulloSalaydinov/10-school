let burger = document.querySelector('.navbar-burger');
let menu = document.querySelector('.navbar-menu')

burger.onclick = function() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}
