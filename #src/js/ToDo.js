function getId(){
    return new Promise((resolve, rejected) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = () => resolve(xhttp.responseText)
        xhttp.open("GET", "/test");
        xhttp.send()
    });
}
let id = getId()
id.then(data =>{
    render(data);
})
function render(id){
    let host = location.href;
    if (id === "undefined") {
        sourceAvatar.srcset =  './img/account.webp';
        avatar.src = host + './account.png'
        
    }else{
        console.log(true);
    }
}