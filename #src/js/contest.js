tableItem.forEach(item => {
    for(let i = 0; i < item.children.length; i++){
        let points = item.children[i].children[0];
        if (points != undefined){
            points = points.children[1];
            console.log(points);
            document.body.addEventListener('click', (e) => {
                if(!e.target.classList.contains('task__context _active') && !e.target.classList.contains('task__points')){

                    closePopub(points.children[3])
                }
            });
            document.body.addEventListener('click', function (e){
                if(e.target.classList.contains('task__points') || e.target.classList.contains('task__bulet')){
                    e.preventDefault();
                    let popub;
                    if (e.target.classList.contains('task__points')) {
                        popub = e.target.children[3];
                    }
                    if(e.target.classList.contains('task__bulet')){
                        popub = e.target.parentElement.children[3];
                    }
                    console.log(popub);
                    showPopub(popub);
                }
            });
        }
    }
});
