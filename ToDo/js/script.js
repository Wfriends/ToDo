let header = document.querySelector('.header'),
    sidebar = document.querySelector('.sidebar'),
    main = document.querySelector('.main'),
    links = document.querySelectorAll('[href="#"]')
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
class ToDo{
    folder = {
        draw: (reletiveElem, data)=>{
            let parent = reletiveElem.parent;
            parent.innerHTML = '';
            
        }
    };
}
