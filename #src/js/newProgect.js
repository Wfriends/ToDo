newProgect.addEventListener('click', showCreatePopub);
function createProgect() {
    newProgect.parentElement.insertAdjacentHTML('beforebegin', '<li class="sidebar__item"><a href="#" class="sidebar__link">jghgfggfgfgf</a></li>');
}
function showCreatePopub() {
    popubForCreatingProgect.classList.add('active');
    document.body.classList.add('lock');
}