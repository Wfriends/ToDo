class Progect {
    constructor(){

    }
    draw = function(position, data){
        if (!Array.isArray(data)) {
            return false;
        }else if(data.length == 0){
            return false;
        } else{
            data.forEach(elem => {
                let name = elem.name;
                position.insertAdjacentHTML('beforebegin', `<li class="sidebar__item"><a href="#" class="sidebar__link">${name}</a></li>`);
            });
        }
    };
    create = function(progect){
        data = JSON.parse(localStorage.getItem('data')) || [];
        data.push(progect);
        localStorage.setItem('data', JSON.stringify(data));
        data = JSON.parse(localStorage.getItem('data'));
    }
}