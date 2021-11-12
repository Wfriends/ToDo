let header = document.querySelector('.header'),
    sidebar = document.querySelector('.sidebar'),
    main = document.querySelector('.main'),
    headerHeight = window.getComputedStyle(header).height;
main.style.paddingTop = headerHeight;
console.log(headerHeight);
sidebar.style.minHeight = `calc(100vh-${headerHeight})`;