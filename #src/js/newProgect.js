newProgect.addEventListener('click', showCreatePopub);
createForm.addEventListener('submit', createProgect);
function closeCreatePopub(){
    popubForCreatingProgect.classList.remove('active');
    document.body.classList.remove('lock');
}
function createProgect(e) {
    e.preventDefault();
    let name = createForm.children[0].value;
    newProgect.parentElement.insertAdjacentHTML('beforebegin', `<li class="sidebar__item"><a href="#" class="sidebar__link">${name}</a></li>`);
    closeCreatePopub();
}
function showCreatePopub() {
    popubForCreatingProgect.classList.add('active');
    document.body.classList.add('lock');
}