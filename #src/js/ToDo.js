class User {
    constructor(){
    }
   async getId() {
       preload()
        let res = await fetch('/test', {method: "GET"});
        this.id = await res.text();
        this.logined = this.id !== "undefined"
        ready()
    }
    id
    logined = this.id !== "undefined"
    async start() {
        await this.getId()
        this.render()
    }
    avatar(image){
        sourceAvatar.srcset = image;
        avatar.src = image;
        let padding;
        if (!this.logined) {
            padding = '11px';

        }else{
            padding = '0px'
        }
        person.style.padding = padding;
    }
    render(){
        if (!this.logined) {
            this.avatar('./img/account.png');
       }else{
           console.log("ok");
       }
       this.account();
    }
    account(){
        let auth = document.querySelectorAll('[data-auth]');
        auth.forEach(elem => {
            elem.style.display = 'none';
            if(!this.logined && elem.getAttribute('data-auth') === "false"){
                elem.style.display = 'block';
            } else if(this.logined && elem.getAttribute('data-auth') === "true"){
                elem.style.display = 'block';
            }
        });
    }
}