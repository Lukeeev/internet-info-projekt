const burger = document.querySelector('.burger');
const menu = document.querySelector(".menu");

burger.addEventListener('click', () => {
    if(!menu.classList.contains('active')){
        menu.classList.add('active');
    }
    else{
        menu.classList.remove('active');
    }
});