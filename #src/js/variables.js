let header = document.querySelector('header'),
    main = document.querySelector('.main'),
    headerHeight = window.getComputedStyle(header, null).height.replace('px', ''),
    mainPaddingTop = main.style.paddingTop = headerHeight + 'px',
    newProgect = document.querySelector('#newProgect'),
    sidebar = document.querySelector('.sidebar'),
    popubForCreatingProgect = document.querySelector('.create'),
    createForm = document.querySelector('.create__form'),
    closeCP = document.querySelector('.create__close'),
    links = document.querySelectorAll('a');
sidebar.style.minHeight = window.innerHeight - headerHeight + 'px';
//Links default
links.forEach(elem => {
    let reg = new RegExp('/#', '');
    if (reg.test(elem.href)) {
        elem.addEventListener('click', function(e){
            e.preventDefault()
        });
    }
});