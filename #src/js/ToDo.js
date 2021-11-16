class User {
    constructor(){
        this.getId().then((data) => {
            this.id = data;
        });
    }
    id;
    getId = () => {
        return new Promise((resolve, reject) => {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    resolve(xhttp.responseText);
                }
            }
            xhttp.open("GET", "/test");
            xhttp.send();
        });
    };
    render = () => {
    };
}