let menuToggle = document.querySelector('.menu-toggle');
let menuToggleI = document.querySelector('.menu-toggle i');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', e=> {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')){
        menuToggleI.setAttribute('class', 'fa fa-times');
    }else {
            menuToggleI.setAttribute('class', 'fa fa-bars')
        }
})