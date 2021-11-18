const Cookies = require('cookies')
module.exports = {
    test: (req, res) => {
        let cookies = new Cookies(req, res, {keys: ['secret']})
        let id = cookies.get('id', {
            signed: true
        });
        if (id == undefined) {
            return null;
        }else{
            return id;
        }
    },
    login(req, res, id){
        let cookies = new Cookies(req, res, {keys: ['secret']});
        cookies.set("id", id, {
            signed: true});
    }
};