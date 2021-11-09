class Progect {
    constructor(){

    }
    draw = function(position, data){
        if (!Array.isArray(data)) {
            return false;
        } else{
            data.forEach(elem => {
                let name = elem.name;
                position.insertAdjacentHTML('beforebegin', `<li class="sidebar__item"><a href="#" class="sidebar__link">${name}</a></li>`);
            });
        }
}
}