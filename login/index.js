const jwt = require('jsonwebtoken');
const {secret} = require('../db/config');
module.exports = {
    test: (req, res) => {
        let payload = {
            id: 0
        }
        try {
            let token = jwt.sign(payload, secret, {expiresIn: 60 * 60});
        } catch (err) {
            console.log(err.message);
        }
    }
};