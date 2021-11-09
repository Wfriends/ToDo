newProgect.addEventListener('click', ()=>{showPopub(popubForCreatingProgect)});
createForm.addEventListener('submit', createProgect);
closeCP.addEventListener('click', ()=>{closePopub(popubForCreatingProgect)});
function closePopub(popub){
    popub.classList.remove('active');
    document.body.classList.remove('lock');
}
function clearForm (form){
    form.reset();
}
function createProgect(e) {
    e.preventDefault();
    let name = createForm.children[0].value;
    let progectTemp = {name: name};
    progects.create(progectTemp);
    closePopub(popubForCreatingProgect);
    clearForm(createForm);
}
function showPopub(popub) {
    popub.classList.add('active');
    document.body.classList.add('lock');
}