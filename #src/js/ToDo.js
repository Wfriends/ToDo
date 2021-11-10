class ToDo {
    drawFolders = function(reletiveElem, pos, elemArray){
        for(let i = 0; i < elemArray.length; i++){
            let text = `<li class="sidebar__item"><a class="sidebar__link" href="#">${elemArray[i].name}</a></li>`
            reletiveElem.insertAdjacentHTML(pos, text);
        }
    }
}