class ToDo {
    folder = {
        draw: function(reletiveElem, pos, elemArray){
            if (!Array.isArray(elemArray)) {
                return false;
            }else if (elemArray.length == 0) {
                return false;
            }else{
                let parent = reletiveElem.parentElement;
                parent.innerHTML = '';
                parent.appendChild(reletiveElem);
                elemArray.forEach(elem => {
                    let text = `<li class="sidebar__item">
                    <a class="sidebar__link" href="#">${elem.name}</a>
                    </li>`
                    reletiveElem.insertAdjacentHTML(pos, text);
                });
            }
        },
        create: function(folder){
            folders.push(folder);
            localStorage.setItem('folders', JSON.stringify(folders));
        }  
    };
    dataBase = {
        options: {
            
        }
    };
}