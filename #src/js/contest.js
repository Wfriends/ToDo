tableItem.forEach(item => {
    for(let i = 0; i < item.children.length; i++){
        let points = item.children[i].children[0];
        if (points != undefined){
            points = points.children[1];
            points.addEventListener('click', function (e){
                e.preventDefault();
                let popub = points.children[3]
                console.log(popub);
                showPopub(popub)
            });
        }
    }
});