let header = document.querySelector('.header'),
    sidebar = document.querySelector('.sidebar'),
    main = document.querySelector('.main'),
    links = document.querySelectorAll('[href="#"]'),
    avatar = document.querySelector('.header__person'),
    sourceAvatar = document.querySelector('.header__acc > picture > source'),
    standartAvatar = "../img/account.png";
    headerHeight = window.getComputedStyle(header).height.replace('px', '');
main.style.paddingTop = headerHeight + 'px';
//main height resize
function mainheight(){
    main.style.minHeight = window.innerHeight + 'px';
}
mainheight()
window.addEventListener('resize', mainheight);
//links e.preventDefault();
function defaultLink(e){
    e.preventDefault();
}
links.forEach(elem => {
    elem.addEventListener('click', defaultLink);
});
//loginned