let header = document.querySelector('.header'),
    sidebar = document.querySelector('.sidebar'),
    main = document.querySelector('.main'),
    links = document.querySelectorAll('[href="#"]'),
    avatar = document.querySelector('.header__person'),
    sourceAvatar = document.querySelector('.header__acc > picture > source'),
    account = document.querySelector('.account'),
    person = document.querySelector('.header__acc'),
    preloader = document.querySelector('.preloader'),
    headerHeight = window.getComputedStyle(header).height.replace('px', '');
//main height resize
function mainheight(){
    main.style.minHeight = window.innerHeight + 'px';
    account.style.top = headerHeight + 'px';
    main.style.paddingTop = headerHeight + 'px';
}
mainheight()
window.addEventListener('resize', mainheight);
document.addEventListener("DOMContentLoaded", ready);
function ready () {
    setTimeout(()=>{
        document.body.classList.remove('lock');
        preloader.style.display = 'none';
    }, 100);
        if (location.pathname === '/') {
            document.querySelector('.header__link').style.display = 'none';
        }else{
            document.querySelector('.header__link').style.display = 'block';
        }
}
function preload(){
    document.body.classList.add('lock');
    preloader.style.display = 'flex';
}
//links e.preventDefault();
function defaultLink(e){
    e.preventDefault();
}
links.forEach(elem => {
    elem.addEventListener('click', defaultLink);
});
person.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation()
    showPopub(account);
};
document.body.onclick = (e) => {
    if (account.classList.contains('_active') && !e.target.classList.contains('acc')) {
        closePopub(account)
        console.log(e.target.classList.contains('acc'));
    }
}
function showPopub(popub){
    popub.classList.add('_active');
}
function closePopub(popub){
    popub.classList.remove('_active');
}