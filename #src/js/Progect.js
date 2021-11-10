class Progect {
    constructor(){

    }
    draw = function(position, folders){
        if (!Array.isArray(folders)) {
            return false;
        }else if(folders.length == 0){
            return false;
        } else{
            folders.forEach(elem => {
                let name = elem.name;
                position.insertAdjacentHTML('beforebegin', `<li class="sidebar__item"><a href="#" class="sidebar__link">${name}</a></li>`);
            });
        }
    };
    create = function(progect){
        folders = JSON.parse(localStorage.getItem('folders')) || [];
        folders.push(progect);
        localStorage.setItem('folders', JSON.stringify(folders));
        folders = JSON.parse(localStorage.getItem('folders'));
    }
}